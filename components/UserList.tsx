'use client';
import { useState, useEffect } from 'react';
import { FcPrevious } from 'react-icons/fc';
import { FcNext } from 'react-icons/fc';
import EfficientPaginator from '@/utils/UserPaginator';
import { User } from '@/types/User';

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [paginator] = useState(() => new EfficientPaginator(10));

  const loadUsers = async (direction: 'next' | 'prev') => {
    setLoading(true);
    const newUsers = await paginator.getUsers(direction);
    setUsers(newUsers);
    setLoading(false);
  };

  useEffect(() => {
    loadUsers('next');
  }, []);
  
  return (
    <div className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-3xl mx-auto'>
        <div className='bg-white shadow overflow-hidden sm:rounded-md'>
          <ul className='divide-y divide-gray-200'>
            {users.map((user) => (
              <li key={user.id} className='px-6 py-4'>
                <div className='flex items-center'>
                  <div className='flex-1 min-w-0'>
                    <p className='text-sm font-medium text-gray-900 truncate'>
                      {user.name}
                    </p>
                    <p className='text-sm text-gray-500 truncate'>
                      {user.email}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-4 flex justify-between'>
          <button
            onClick={() => loadUsers('prev')}
            disabled={!paginator.hasPrevious() || loading}
            className='inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50'
          >
            <FcPrevious />
            Previous
          </button>
          <button
            onClick={() => loadUsers('next')}
            disabled={!paginator.hasNext() || loading}
            className='inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50'
          >
            Next
            <FcNext />
          </button>
        </div>
        {loading && <p className='text-center mt-4'>Loading...</p>}
      </div>
    </div>
  );
};

export default UserList;

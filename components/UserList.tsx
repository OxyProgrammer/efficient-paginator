'use client';
import { useState, useEffect } from 'react';
import { FcPrevious } from 'react-icons/fc';
import { FcNext } from 'react-icons/fc';
import EfficientPaginator, { Direction } from '@/utils/EfficientPaginator';
import { User } from '@/types/User';
import PageSizeSelector from './PageSizeSelector';
import { fetchUsers } from '@/actions';

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [paginator, setPaginator] = useState<EfficientPaginator<User>>(
    () => new EfficientPaginator<User>(5, fetchUsers)
  );
  const [pageSize, setPageSize] = useState<number>(5);

  useEffect(() => {
    const newPaginator = new EfficientPaginator<User>(pageSize, fetchUsers);
    setPaginator(newPaginator);
  }, [pageSize]);

  useEffect(() => {
    loadUsers(Direction.Next);
  }, [paginator]);

  const loadUsers = async (direction: Direction) => {
    setLoading(true);
    try {
      const newUsers = await paginator.getItems(direction);
      setUsers(newUsers);
    } catch (error) {
      console.error('Failed to load users: ', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageSizeChange = (pageSize: number) => {
    setPageSize(pageSize);
  };

  return (
    <div className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-3xl mx-auto'>
        <PageSizeSelector onPageSizeChange={handlePageSizeChange} />
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
            onClick={() => loadUsers(Direction.Previous)}
            disabled={!paginator.hasPrevious() || loading}
            className='inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50'
          >
            <FcPrevious />
            Previous
          </button>
          <button
            onClick={() => loadUsers(Direction.Next)}
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

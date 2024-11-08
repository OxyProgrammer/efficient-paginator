'use client'
import React from 'react';

interface PageSizeSelectorProps {
  onPageSizeChange: (size: number) => void;
}

const PageSizeSelector: React.FC<PageSizeSelectorProps> = ({
  onPageSizeChange,
}) => {
  const handlePageSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedSize = Number(event.target.value);
    onPageSizeChange(selectedSize);
  };

  return (
    <div className='flex justify-between items-center mb-5 bg-transparent'>
      <h1 className='text-xl font-semibold'>Page Size Selector</h1>
      <select
        className='bg-transparent border border-gray-300 rounded-md p-2'
        onChange={handlePageSizeChange}
      >
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='15'>15</option>
        <option value='20'>20</option>
      </select>
    </div>
  );
};

export default PageSizeSelector;

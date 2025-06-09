import React, { useState } from 'react'


function Header() {
  
  
  
  return (
    <div>
      <h2 className='text-3xl font-bold text-center mb-8 text-gray-500'>Budget Tracker</h2>
      <div className='bg-white rounded-lg shadow p-6 mb-6 text-center'>
        <h2 className='text-xl font-semibold mb-4 text-gray-700'>Summary</h2>
        <div className='grid grid-cols-3 gap-4'>
          <div className='bg-green-50 p-4 rounded-lg'>
            <p className='text-sm text-green-600'>Income</p>
            <p className='text-2xl font-bold text-green-700'></p>
          </div>
           <div className='bg-red-50 p-4 rounded-lg'>
            <p className='text-sm text-red-600'>Expense</p>
            <p className='text-2xl font-bold text-red-700'></p>
          </div>
          <div className='bg-gray-50 p-4 rounded-lg'>
            <p className='text-sm text-gray-600'>Balance</p>
            <p className='text-2xl font-bold text-gray-700'></p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header
import React, { useState } from 'react';
import axios from 'axios';


const Input = () => {
    const [title, setTitle] = useState('');
    const [categories, setCategories] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('expense');


    const toSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/api/t1/addtransaction', { 
                Id:Math.random(),
                title,
                amount,
                categories,
                type,
            });
            alert('Transaction added successfully!');
        } catch (error) {
            console.error('Error adding transaction:', error);
            alert('Failed to add transaction.');
        }
    };

    return (
        <>
            <div className='bg-white rounded-lg shadow p-6 mb-6 text-center'>
                <h2 className='text-xl font-semibold mb-4 text-gray-700'>Add Transaction</h2>
                <form onSubmit={toSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                placeholder='Enter the title here'
                            />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Amount</label>
                            <input
                                type="text"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500'
                                placeholder='Enter the amount here 0.00'
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Categories</label>
                            <input
                                type="text"
                                value={categories}
                                onChange={(e) => setCategories(e.target.value)}
                                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                placeholder='e.g Food or Salary'
                            />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Type</label>
                            <div className='flex space-x-4 mt-1'>
                                <label className='items-center inline-flex'>
                                    <input
                                        type="radio"
                                        value="expense"
                                        checked={type === 'expense'}
                                        onChange={() => setType('expense')}
                                        className='h-4 w-4 text-blue-600 focus:ring-blue-500'
                                    />
                                    <span className='ml-2 text-gray-700'>Expense</span>
                                </label>
                                <label className='items-center inline-flex'>
                                    <input
                                        type="radio"
                                        value="income"
                                        checked={type === 'income'}
                                        onChange={() => setType('income')}
                                        className='h-4 w-4 text-blue-600 focus:ring-blue-500'
                                    />
                                    <span className='ml-2 text-gray-700'>Income</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-gray-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md'>
                        Add
                    </button>
                </form>
            </div>
        </>
    );
};

export default Input;



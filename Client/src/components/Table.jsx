import React, { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';

function Table() {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        // Fetch data using Axios
        axios.get('http://localhost:4000/api/t1/gettransaction') // Replace with your API endpoint
            .then(response => {

                setTransactions(response.data); // Assuming response.data contains the array of transactions
            })
            .catch(error => {
                console.error('Error fetching transactions:', error);
            });
    }, []);

  

    return (
        <div className='shadow p-6'>
            <h2 className='text-xl font-semibold mb-4 text-gray-700'>Transactions</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        
                        
                        {transactions?.data?.map((transaction, index) => (
                           
                            <>
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">{transaction.amount}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.category}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">{transaction.type}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    
                                    <button
                                        className="text-red-600 hover:text-red-900"
                                        onClick={() => handleDelete(transaction.id)} // Add delete functionality if needed
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr >
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    function handleDelete(id) {
        // Handle delete functionality (optional)
        axios.delete('http://localhost:4000/api/t1/deletetransaction'.id)
        console.log('Delete transaction with ID:', id);
    }
}

export default Table;
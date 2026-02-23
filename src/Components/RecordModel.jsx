import { X } from 'lucide-react';
import React from 'react';

const RecordModel = () => {
    return (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50">
           <div className="bg-white rounded-lg shadow-2xl max-w-md w-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">
                    Register New Record
                </h2>
                <button className="text-gray-400 hover:text-gray-600 transition-all">
                    <X size={24}/>
                </button>
            </div>
            {/* form fields */}
            <div className="p-4 space-y-2">
                {/* name */}
                <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                        Name *
                    </label>
                    <input type="text" placeholder='Enter you Full Name' className='w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                </div>
                 {/* Email * */}
                 <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                        Email *
                    </label>
                    <input type="text" placeholder='Enter you Full Name' className='w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                </div>
                <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                        Email *
                    </label>
                    <input type="text" placeholder='Enter you Email address' className='w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                </div>
                 {/* Phone * */}
                <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                        Phone *
                    </label>
                    <input type="tel" placeholder='Enter Phone Number' className='w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                </div>
                {/* position */}
                <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                        Position *
                    </label>
                    <input type="text" placeholder='Enter your Position' className='w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                </div>
                {/* footer-buttons */}
                <div className="flex gap-3 p-6 border-t border-gray-200">
                    <button className="flex-1 px-4 py-2 border border-gray-700 rounded-lg text-gray-600 transition-all font-medium">Cancel</button>
                    <button className="flex-1 px-4 bg-blue-600  py-2 border border-gray-300 rounded-lg hover:scale-105 transition-all text-white font-medium">Register</button>
                </div>
            </div>
           </div>
        </div>
    );
};

export default RecordModel;
import { Edit2, Plus, Trash2 } from "lucide-react";
import React from "react";
import RecordModel from "./RecordModel";

function RecordTable() {
  return (
    <div className="min-h-screen bg-gray-100 p-2">
      <div className="max-w-5xl mx-auto">
        {/* header */}
        <div className="bg-white rounded-lg shadow-md p-2 mb-1">
          <h1 className="text-xl font-bold text-gray-800 mb-1">
            Employee Management
          </h1>
          <p className="text-gray-600 text-sm">
            {" "}
            Manage employee records with Redux Toolkit
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-2 mb-2">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20}/> */}
              <input
                type="text"
                placeholder="Search by name,email or position"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="flex items-center justify-center gap-2 bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue700 transition-all text-white text-sm">
               <Plus />
                Add New Record
            </button>
          </div>
        </div>
      {/* Employee--table */}
<div className="bg-white rounded-lg shadow-md overflow-hidden">
<div className="overflow-x-auto">
    <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
   <tr>
    <th className="px-6 text-left text-xs font-semibold text-gray-700 uppercase">
        ID
    </th>
    <th className="px-6 text-left text-xs font-semibold text-gray-700 uppercase">
        Name
    </th>
    <th className="px-6 text-left text-xs font-semibold text-gray-700 uppercase">
        Email
    </th>
    <th className="px-6 text-left text-xs font-semibold text-gray-700 uppercase">
        Phone
    </th>
    <th className="px-6 text-left text-xs font-semibold text-gray-700 uppercase">
        Position
    </th>
    <th className="px-6 text-left text-xs font-semibold text-gray-700 uppercase">
        Actions
    </th>
   </tr>
        </thead>
        <tbody className="devide-y divide-gray-200">
            {/* conditional-rendering */}
<tr className="px-6 py-12 text-center text-gray-500">
<td  colspan={6}>No Record Found!</td>
</tr>
{/* else */}
{/* {map} */}
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
    1
</td>
<td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
    Adnan dev
</td>
<td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
    reactorbro722@gmail.com
</td>
<td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
    +880 1305 140844 
</td>
<td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
    Devloper
</td>
<td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
   <div className="flex items-center justify-center gap-2">
     <button className="flex items-center gap-1 bg-blue-700 text-white px-3 py-1.5 rounded hover:bg-blue-700 transition-all text-sm font-medium">
        <Edit2 size={16}/>Edit
    </button>
    <button className="flex items-center gap-1 bg-blue-700 text-white px-3 py-1.5 rounded hover:bg-blue-700 transition-all text-sm font-medium">
        <Trash2 size={16}/>Delete
    </button>
   </div>
</td>
</tr>

        </tbody>
    </table>
</div>
{/* footer showing filtered vs totalcode */}
<div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
    <p className="text-sm text-gray-600">Showing Sortest Records of All Records</p>
</div>
</div>
      </div>
      {/* model */}
      <RecordModel/>
    </div>
  );
}

export default RecordTable;

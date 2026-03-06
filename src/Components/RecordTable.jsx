import { Edit2, Plus, Search, Trash2 } from "lucide-react";
import React, { useState } from "react";
import RecordModel from "./RecordModel";
import {selectAllRecords,setSearchTerm,selectSearchTerm,deleteRecord,selectFilterRecords} from '../store/recordSlice'
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
function RecordTable() {
   
    const dispatch=useDispatch()
    const filteredRecords=useSelector(selectFilterRecords)
    const allRecords=useSelector(selectAllRecords)
    const searchTerm=useSelector(selectSearchTerm)

    const storedRecords=[...filteredRecords].sort((a,b)=>b.id-a.id)
    const [showModel,setShowModel]=useState(false)
    const [currentRecords,setCurrentRecords]=useState(null)
    const openCreateModel=()=>{
        setCurrentRecords(null)
        setShowModel(true)
    }
    const openEditModel=(record)=>{
        setCurrentRecords(record)
        setShowModel(true)
    }
    const closeModel=()=>{
        setShowModel(false)
        setCurrentRecords(null)
    }
    const handlerDelete=(recode)=>{
        toast((t)=>(
            <div className="flex flex-col gap-2">
                <span>Are you sure to delete this item?{recode.name}</span>
                <div className="flex justify-end gap-2">
                    <button onClick={()=>toast.dismiss(t.id)} className="px-3 py-1 hover:bg-gray-400 bg-gray-300 rounded text-sm">Cencel</button>
                    <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm" onClick={()=>{
                        dispatch(deleteRecord(recode.id))
                        toast.success('Record Deleted')
                        toast.dismiss(t.id)
                    }}>Delete</button>
                </div>
            </div>
        ),{duration:Infinity})
    }
  
  return (
    <div className="min-h-screen bg-gray-100 p-2">
      <div className="max-w-5xl mx-auto">
        {/* header section*/}
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
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20}/>
              <input
              value={searchTerm}
              onChange={(e)=>dispatch((setSearchTerm(e.target.value)))}                type="text"
                placeholder="Search by name,email or position"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="flex items-center justify-center gap-2 bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue700 transition-all text-white text-sm"
            onClick={openCreateModel}
            >
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
{storedRecords.length===0?<tr className="px-6 py-12 text-center text-gray-500">
<td  colspan={6}>No Record Found!</td>
</tr>:storedRecords.map((record)=>{
    return <tr className="hover:bg-gray-50 transition-colors">
<td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
    {record.id}
</td>
<td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
    {record.name}
</td>
<td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
    {record.email}
</td>
<td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
    {record.phone}
</td>
<td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
    {record.position}
</td>
<td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
   <div className="flex items-center justify-center gap-2">
     <button className="flex items-center gap-1 bg-blue-700 text-white px-3 py-1.5 rounded hover:bg-blue-700 transition-all text-sm font-medium" onClick={()=>openEditModel(record)}>
        <Edit2 size={16}/>Edit
    </button>
    <button className="flex items-center gap-1 bg-blue-700 text-white px-3 py-1.5 rounded hover:bg-blue-700 transition-all text-sm font-medium" onClick={()=>handlerDelete(record)}>
        <Trash2 size={16}/>Delete
    </button>
   </div>
</td>
</tr>
})}
{/* else */}
{/* {map} */}


        </tbody>
    </table>
</div>
{/* footer showing filtered vs totalcode */}
<div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
    <p className="text-sm text-gray-600">Showing {storedRecords.length}Sortest Records of All Records {allRecords.length}</p>
</div>
</div>
      </div>
      {/* model */}
     <RecordModel 
  isOpen={showModel} 
  onClose={closeModel} 
  currentRecord={currentRecords} 
/>
    </div>
  );
}

export default RecordTable;

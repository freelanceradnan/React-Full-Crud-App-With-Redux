import { createSelector, createSlice } from "@reduxjs/toolkit";

const demoRecords=[
    {
        id:1,
        name:"adnan dev",
        email:"reactorbro722@gmail.com",
        phone:"880 1305 140844",
        position:"Devloper"
    },
    {
        id:2,
        name:"masud dev",
        email:"masudrana@gmail.com",
        phone:"880 1406 140844",
        position:"Devloper"
    },
    {
        id:3,
        name:"ridoy dev",
        email:"ridoydev@gmail.com",
        phone:"880 1805 140894",
        position:"Devloper"
    }
]
//calculate nextid bast existing records
const calculatedNextId=(records)=>{
    if(!records ||records.length===0) return 1;
    return Math.max(...records.map((r)=>r.id))+1
}
//load records fromlocal storage
const loadRecordsFromStorage=()=>{
    try {
        const savedRecords=localStorage.getItem("employeeRecords")
        return savedRecords? JSON.parse(savedRecords):demoRecords
    } catch (error) {
        console.log('Error loading records',error)
    }
}
const recordSlice=createSlice({
    name:"records",
    initialState:{
        items:demoRecords,
        searchItems:"",
        nextId:calculatedNextId(loadRecordsFromStorage())
    },
    reducers:{
    //add new records
    addRecord:(state,action)=>{
        const nexRecord={id:state.nextId,...action.payload}
        state.items.push(nexRecord)
        localStorage.setItem("employeeRecords",JSON.stringify(state.items))
        state.nextId=calculatedNextId(state.items)
    },
    //update records
    updateRecords:(state,action)=>{
    const {id,data}=action.payload;
    const index=state.items.findIndex((r)=>r.id===id)
    if(index!==-1){
        state.items[index]={...state.items[index],...data}
        localStorage.setItem("employeeRecords",JSON.stringify(state.items))
    }
    
    },
  
    //delete action
    deleteRecord:(state,action)=>{
        state.items=state.items.filter((r)=>r.id!==action.payload)
        localStorage.setItem("employeeRecords",JSON.stringify(state.items))
        state.nextId=calculatedNextId(state.items)
    },
    //search recorde
    setSearchTerm:(state,action)=>{
state.searchItems=action.payload
    },
    //reset
    resetAllRecordes:(state,action)=>{
  state.items=demoRecords,
  state.nextId=calculatedNextId(demoRecords)
  localStorage.setItem("employeeRecords",JSON.stringify(demoRecords))
    }
    }
})


export const selectAllRecords=(state)=>state.records.items

export const selectSearchTerm = (state) => state.records.searchItems;
const selectItems = (state) => state.records.items;
const selectSearchTermState = (state) => state.records.searchItems;
export const selectFilterRecords = createSelector(
    [selectItems, selectSearchTermState],
    (items, searchItems) => {
        // This part ONLY runs if items or searchItems actually change
        const term = searchItems.toLowerCase();
        
        if (!term) return items;

        return items.filter((r) =>
            r.name.toLowerCase().includes(term) ||
            r.email.toLowerCase().includes(term) ||
            r.position.toLowerCase().includes(term)
        );
    }
);
export const {addRecord,updateRecords,deleteRecord,setSearchTerm,resetAllRecordes}=recordSlice.actions
export default recordSlice.reducer

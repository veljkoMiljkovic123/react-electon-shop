import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[],
        totalProduct:0,
        totalPrice:0,

    },
    reducers: {
        saveInCartAction: (state,action) => {
            console.log(action.payload);
            let copyArray = [...state.cart]
            // 1. Da li ga imamo u korpi, cilj je indeksna pozicijao?
            let findIndex = null;

            copyArray.find((item,index)=>{
                if(item.id === action.payload.id){
                    findIndex=index;
                    return
                }
            })
            // 2. if statment
            if(findIndex===null){
                copyArray.push({...action.payload,count:1,cartTotal:action.payload.price})
                state.totalProduct++;  
                state.totalPrice += action.payload.price
            }else{
                copyArray[findIndex].count++;
            }


            state.cart = copyArray;
        },
        deleteItemCardAction:(state,action) => {
            console.log(action.payload.id);
            
            let copyArray = [...state.cart]
            // 1. Da li ga imamo u korpi, cilj je indeksna pozicija?
            let findIndex = null;

            copyArray.find((item,index)=>{
                if(item.id === action.payload.id){
                    findIndex=index;
                    return
                }
            })

            if(findIndex !== null){
                copyArray.splice(findIndex,1)
            }
            state.cart=copyArray
        }
    }
})

export const {saveInCartAction,deleteItemCardAction} = cartSlice.actions
export default cartSlice.reducer
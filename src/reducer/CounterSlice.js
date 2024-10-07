import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    return response.json();
})

const initialState = {
  value: 0,
  isLoading:false, 
  data: null,
  isError: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = true;
            state.data = action.payload
        })
        builder.addCase(fetchTodos.rejected, (state, action) => {
            console.log('Error')
            state.isError=  true
        })
    },
        reducers: {
            increment: (state) => {
                state.value +=1
            },
            decrement: (state) => {
                state.value -=1
            },
            incrementByAmount: (state, action) => {
                state.value += action.payload
            },
        },  
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer




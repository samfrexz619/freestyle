import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';


type Geo = {
  lat: string;
  lng: string;
}

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo
}

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
}

export type Users = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address
  phone: string;
  website: string;
  company: Company;
}

interface InitialState {
  loading: boolean;
  users: Users[];
  error: string;
}

const initialState: InitialState = {
  loading: false,
  users: [],
  error: ''
}

export const fetchUsers = createAsyncThunk('user/fetchUser', ()=> {
  return axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => res.data)
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder)=> {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<Users[]>) => {
      state.loading = false
      state.users = action.payload
      state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action)=> {
      state.loading = false
      state.users = []
      state.error = action.error.message || 'sth went wrong'
    })
  }
})

 export default userSlice.reducer
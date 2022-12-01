import { IUser } from './Interfaces';
import { AppDispatch } from '../../store';
import axios from 'axios';
import { userSlice } from '.';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('user/fetchAll', async (limit: number, thunkAPI) => {
  try {
    const response = await axios.get<IUser[]>(
      `https://jsonplaceholder.typicode.com/users?_limit=${limit}`,
    );
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
  }
});

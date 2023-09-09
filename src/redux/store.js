import {configureStore} from '@reduxjs/toolkit';
import {userDetails} from './reducers/userDetailsSlice';

export const store = configureStore({
  reducer: {
    userDetails: userDetails,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware()],
});

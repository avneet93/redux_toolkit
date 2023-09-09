import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userDetails: [],
};
export const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    updateUserDetails: (state = initialState, action) => {
      state.userDetails.push(action.payload);
      return {...state};
    },
  },
});

// Action creators are generated for each case reducer function
export const {updateUserDetails} = userDetailsSlice.actions;
export default userDetailsSlice.reducer;

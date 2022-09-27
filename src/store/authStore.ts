import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Octokit} from "octokit";
import OctokitManager from "../proxy/gistManager";

interface AuthState {
	_status: boolean,
	_octokitManager?: OctokitManager,
}

const initialState: AuthState = {
	_status: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setStatus: (state, action: PayloadAction<boolean>) => {
			state = { ...state, _status: action.payload};
		},

		setOctokitManager :(state, action: PayloadAction<OctokitManager>) => {
			state = { ...state, _octokitManager: action.payload };
		},
	}
});

export const authStore = configureStore({
	reducer: {
		auth: authSlice.reducer,
	}
});

export const { setStatus, setOctokitManager } = authSlice.actions;


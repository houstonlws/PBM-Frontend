import { Dispatch } from 'redux';
import { CONSTANTS } from '../../config/constants';
import AuthService from '../../services/auth.service';
import { User } from '../../types/auth.types';

export const register =
  (email: string, password: string) => async (dispatch: Dispatch) => {
    return await AuthService.register(email, password).then(
      (response: any) => {
        dispatch({ type: CONSTANTS.REGISTER_SUCCESS });
        return Promise.resolve(response);
      },
      (error: any) => {
        dispatch({ type: CONSTANTS.REGISTER_FAIL });
        return Promise.reject(error);
      }
    );
  };

export const login =
  (email: string, password: string) => async (dispatch: Dispatch) => {
    try {
      const result = await AuthService.login(email, password);
      if (result.status === 200) {
        dispatch({ type: CONSTANTS.LOGIN_SUCCESS });
        window.location.assign('/');
        window.location.reload();
      } else {
        dispatch({ type: CONSTANTS.LOGIN_FAIL });
        window.location.assign('/login');
        window.location.reload();
      }
    } catch (error) {
      dispatch({ type: CONSTANTS.LOGIN_FAIL });
      window.location.assign('/login');
    }
  };

export const logout = () => (dispatch: Dispatch) => {
  console.log('logging out');
  document.cookie = 'refreshToken=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  dispatch({ type: CONSTANTS.CLEAR_PERSIST });
  dispatch({ type: CONSTANTS.LOGOUT });
  window.location.assign('/home');
};

export const refreshToken = () => async (dispatch: Dispatch) => {
  try {
    const token = getCookie('refreshToken');
    if (token) {
      const tokenValid = await AuthService.refreshToken();
      if (tokenValid) {
        dispatch({ type: CONSTANTS.REFRESH_TOKEN_SUCCESS });
      } else {
        clearCookie('refreshToken');
        dispatch({ type: CONSTANTS.REFRESH_TOKEN_FAILURE });
        dispatch({ type: CONSTANTS.LOGOUT });
      }
    } else {
      dispatch({ type: CONSTANTS.REFRESH_TOKEN_FAILURE });
      dispatch({ type: CONSTANTS.LOGOUT });
    }
  } catch (error) {
    dispatch({ type: CONSTANTS.REFRESH_TOKEN_FAILURE });
    dispatch({ type: CONSTANTS.LOGOUT });
  }
};

export const getUserData = () => async (dispatch: Dispatch) => {
  try {
    const result = await AuthService.getUserData();
    if (result?.status === 200) {
      dispatch({
        type: CONSTANTS.GET_USER_DATA_SUCCESS,
        payload: result?.data,
      });
    } else {
      dispatch({ type: CONSTANTS.GET_USER_DATA_FAIL });
      dispatch({ type: CONSTANTS.LOGOUT });
    }
  } catch (error) {
    dispatch({ type: CONSTANTS.GET_USER_DATA_FAIL });
    dispatch({ type: CONSTANTS.LOGOUT });
  }
};

export const updateUserData = (data: User) => async (dispatch: Dispatch) => {
  try {
    const result = await AuthService.updateUserData(data);
    if (result) {
      dispatch({ type: CONSTANTS.UPDATE_USER_DATA_SUCCESS, payload: result });
      return true;
    } else {
      dispatch({ type: CONSTANTS.UPDATE_USER_DATA_FAILURE });
      return false;
    }
  } catch (error) {
    dispatch({ type: CONSTANTS.UPDATE_USER_DATA_FAILURE });
    return false;
  }
};

export const getNotifications = (id: string) => async (dispatch: Dispatch) => {
  try {
    const result = await AuthService.getNotifications(id);
    dispatch({ type: CONSTANTS.GET_NOTIFICATIONS_SUCCESS, payload: result });
  } catch (error) {
    dispatch({ type: CONSTANTS.GET_NOTIFICATIONS_FAILURE });
    dispatch({ type: CONSTANTS.LOGOUT });
  }
};

const clearCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
};

const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`)!;
  if (parts.length === 2) {
    const cookieVal = parts.pop()?.split(';').shift();
    return cookieVal || null;
  }
  return null;
};
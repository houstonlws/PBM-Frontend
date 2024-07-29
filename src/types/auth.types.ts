export interface User {
  id: string;
  email: string;
  type: string;
  firstName?: string;
  lastName?: string;
  department_id: string;
  phone?: string;
}

export interface Notification {
  id: string;
  user_id: string;
  notification_date: string;
  message: string;
  is_read: string;
}

export interface AuthState {
  loggedIn: boolean;
  user: User | null | void;
  notifications: Notification[] | null | void;
}
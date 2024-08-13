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
  user: User;
  notifications: Notification[];
}

export interface PriceConfig {
  id: string;
  name: string;
  bw_price: string;
  color_price: string;
  paper_price: string;
  is_active: string;
}

export interface AdminState {
  users: User[];
  priceProfiles: PriceConfig[];
  activeProfile: PriceConfig;
}

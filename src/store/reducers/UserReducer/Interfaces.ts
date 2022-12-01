export interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  count: number;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
}

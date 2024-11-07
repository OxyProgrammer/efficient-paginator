export interface User {
  id: number;
  name: string;
  email: string;
}

export interface FetchUserResponse {
  users: User[];
  hasMore: boolean;
}

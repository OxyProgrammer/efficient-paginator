export interface User {
  id: number;
  name: string;
  email: string;
}

export interface FetchResponse<T> {
  users: T[];
  hasMore: boolean;
}

export interface FetchFunction<T> {
  (page: number, pageSize: number): Promise<FetchResponse<T>>;
}

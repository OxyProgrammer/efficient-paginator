import { FetchUserResponse, User } from '../types/User';
import { fetchUsers } from '../actions';

export default class EfficientPaginator {
  private currentPage: number;
  private pageSize: number;
  private hasMore: boolean;
  private cache: Map<number, FetchUserResponse>;

  constructor(pageSize: number) {
    this.currentPage = 0;
    this.pageSize = pageSize;
    this.hasMore = true;
    this.cache = new Map();
  }

  async getUsers(direction: 'next' | 'prev'): Promise<User[]> {
    if (direction === 'next') {
      this.currentPage++;
    } else if (direction === 'prev' && this.currentPage > 1) {
      this.currentPage--;
    }

    let cacheEntry = this.cache.get(this.currentPage);
    if (cacheEntry) {
      this.hasMore = cacheEntry.hasMore;
      return cacheEntry.users;
    }
    try {
      const response = await fetchUsers(this.currentPage, this.pageSize);
      this.cache.set(this.currentPage, response);
      this.hasMore = response.hasMore;
      return response.users;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  }

  hasPrevious(): boolean {
    return this.currentPage > 1;
  }

  hasNext(): boolean {
    return this.hasMore;
  }

  getCurrentPage(): number {
    return this.currentPage;
  }
}

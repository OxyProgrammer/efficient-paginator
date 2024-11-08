import {
  FetchFunction,
  FetchResponse,
} from '../types/User';

export enum Direction {
  Next,
  Previous,
}

export default class EfficientPaginator<T> {
  private currentPage: number;
  private pageSize: number;
  private hasMore: boolean;
  private cache: Map<number, FetchResponse<T>>;

  private fetchFunction: FetchFunction<T>;

  constructor(pageSize: number, fetchFunction: FetchFunction<T>) {
    this.currentPage = 0;
    this.pageSize = pageSize;
    this.hasMore = true;
    this.cache = new Map();
    this.fetchFunction = fetchFunction; // Assign the fetch function
  }

  async getItems(direction: Direction): Promise<T[]> {
    if (direction === Direction.Next) {
      this.currentPage++;
    } else if (direction === Direction.Previous && this.currentPage > 1) {
      this.currentPage--;
    }

    let cacheEntry = this.cache.get(this.currentPage);
    if (cacheEntry) {
      this.hasMore = cacheEntry.hasMore;
      return cacheEntry.users;
    }

    try {
      const response = await this.fetchFunction(
        this.currentPage,
        this.pageSize
      );
      this.cache.set(this.currentPage, response);
      this.hasMore = response.hasMore;
      return response.users;
    } catch (error) {
      console.error('Error fetching items:', error);
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

  getPageSize(): number {
    return this.pageSize;
  }
}

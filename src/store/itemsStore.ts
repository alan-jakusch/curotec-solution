import { create, type StoreApi } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface Item {
  id: number;
  name: string;
}

interface ItemsSlice {
  items: Item[];
  loading: boolean;
  error: string | null;
  fetchItems: () => Promise<void>;
  addItem: (name: string) => Promise<void>;
  updateItem: (id: number, name: string) => Promise<void>;
  deleteItem: (id: number) => Promise<void>;
}

const createItemsSlice = (set: StoreApi<ItemsSlice>['setState']): ItemsSlice => ({
  items: [],
  loading: false,
  error: null,
  fetchItems: async () => {
    set({ loading: true, error: null });
    try {
      await new Promise((res) => setTimeout(res, 500));
      set({
        items: [
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' },
          { id: 3, name: 'Item 3' },
          { id: 4, name: 'Item 4' },
          { id: 5, name: 'Item 5' },
          { id: 6, name: 'Item 6' },
          { id: 7, name: 'Item 7' },
          { id: 8, name: 'Item 8' },
          { id: 9, name: 'Item 9' },
          { id: 10, name: 'Item 10' },
        ],
        loading: false,
      });
    } catch {
      set({ error: 'Failed to fetch items', loading: false });
    }
  },
  addItem: async (name: string) => {
    set({ loading: true, error: null });
    try {
      await new Promise((res) => setTimeout(res, 300));
      set((state: ItemsSlice) => ({
        items: [...state.items, { id: Date.now(), name }],
        loading: false,
      }));
    } catch {
      set({ error: 'Failed to add item', loading: false });
    }
  },
  updateItem: async (id: number, name: string) => {
    set({ loading: true, error: null });
    try {
      await new Promise((res) => setTimeout(res, 300));
      set((state: ItemsSlice) => ({
        items: state.items.map((item) =>
          item.id === id ? { ...item, name } : item
        ),
        loading: false,
      }));
    } catch {
      set({ error: 'Failed to update item', loading: false });
    }
  },
  deleteItem: async (id: number) => {
    set({ loading: true, error: null });
    try {
      await new Promise((res) => setTimeout(res, 300));
      set((state: ItemsSlice) => ({
        items: state.items.filter((item) => item.id !== id),
        loading: false,
      }));
    } catch {
      set({ error: 'Failed to delete item', loading: false });
    }
  },
});

export const useItemsStore = create<ItemsSlice>()(
  devtools((set) => ({
    ...createItemsSlice(set),
  }))
); 
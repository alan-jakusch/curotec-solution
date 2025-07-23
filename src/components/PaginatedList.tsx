import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useItemsStore } from '../store/itemsStore';

const PAGE_SIZE = 5;

export const PaginatedList: React.FC = React.memo(() => {
  const { items, loading, error, fetchItems, addItem, updateItem, deleteItem } = useItemsStore(
    useCallback(
      (state) => ({
        items: state.items,
        loading: state.loading,
        error: state.error,
        fetchItems: state.fetchItems,
        addItem: state.addItem,
        updateItem: state.updateItem,
        deleteItem: state.deleteItem,
      }),
      []
    )
  );
  const [page, setPage] = useState(1);
  const [newItem, setNewItem] = useState('');
  const [editId, setEditId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const paginatedItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return items.slice(start, start + PAGE_SIZE);
  }, [items, page]);

  const totalPages = useMemo(() => Math.ceil(items.length / PAGE_SIZE), [items.length]);

  const handleAdd = async () => {
    if (newItem.trim()) {
      await addItem(newItem);
      setNewItem('');
      setPage(1);
    }
  };

  const handleUpdate = async (id: number) => {
    if (editValue.trim()) {
      await updateItem(id, editValue);
      setEditId(null);
      setEditValue('');
    }
  };

  const handleDelete = async (id: number) => {
    await deleteItem(id);
    if ((page - 1) * PAGE_SIZE >= items.length - 1 && page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="w-full mx-auto p-4 border rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Paginated Items</h2>
      <div className="flex mb-4">
        <input
          className="flex-1 border px-2 py-1 rounded mr-2"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
          disabled={loading}
        />
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded disabled:opacity-50"
          onClick={handleAdd}
          disabled={loading || !newItem.trim()}
        >
          Add
        </button>
      </div>
      {loading && <div className="text-blue-500 mb-2">Loading...</div>}
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <ul className="divide-y">
        {paginatedItems.map((item) => (
          <li key={item.id} className="flex items-center py-2">
            {editId === item.id ? (
              <>
                <input
                  className="flex-1 border px-2 py-1 rounded mr-2"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  disabled={loading}
                />
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2 disabled:opacity-50"
                  onClick={() => handleUpdate(item.id)}
                  disabled={loading || !editValue.trim()}
                >
                  Save
                </button>
                <button
                  className="bg-gray-300 text-gray-700 px-2 py-1 rounded"
                  onClick={() => {
                    setEditId(null);
                    setEditValue('');
                  }}
                  disabled={loading}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span className="flex-1">{item.name}</span>
                <button
                  className="bg-yellow-400 text-white px-2 py-1 rounded mr-2 disabled:opacity-50"
                  onClick={() => {
                    setEditId(item.id);
                    setEditValue(item.name);
                  }}
                  disabled={loading}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded disabled:opacity-50"
                  onClick={() => handleDelete(item.id)}
                  disabled={loading}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-4">
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages || totalPages === 0}
        >
          Next
        </button>
      </div>
    </div>
  );
});

PaginatedList.displayName = 'PaginatedList'; 
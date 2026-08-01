// === Module 1770: useWorkletCallback ===

// Module 1770 (useWorkletCallback)
require("noop").useCallback;

export const useWorkletCallback = function useWorkletCallback(fn, items) {
  if (items == null) {
    items = [];
  }
  return useCallback(fn, items);
};
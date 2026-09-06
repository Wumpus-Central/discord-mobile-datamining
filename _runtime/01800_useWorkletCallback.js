// === Module 1800: useWorkletCallback ===

// Module 1800 (useWorkletCallback)
import noop from "noop" /* 19 */;

noop.useCallback;

export const useWorkletCallback = function useWorkletCallback(fn, items) {
  if (items == null) {
    items = [];
  }
  return useCallback(fn, items);
};
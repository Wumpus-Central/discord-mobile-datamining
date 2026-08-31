// _runtime/01817_useWorkletCallback.js
import noop from "00019_noop.js";

noop.useCallback;

export const useWorkletCallback = function useWorkletCallback(fn, items) {
  if (items == null) {
    items = [];
  }
  return useCallback(fn, items);
};
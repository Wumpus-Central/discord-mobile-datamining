// === Module 1800: ? ===

// Module 1800
import _mod19 from "module_19" /* 19 */;

_mod19.useCallback;

export const useWorkletCallback = function useWorkletCallback(fn, items) {
  if (items == null) {
    items = [];
  }
  return useCallback(fn, items);
};
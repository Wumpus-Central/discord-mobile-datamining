// === Module 1814: ? ===

// Module 1814
import _mod19 from "module_19" /* 19 */;

_mod19.useCallback;

export function useWorkletCallback(fn, items) {
  if (items == null) {
    items = [];
  }
  return useCallback(fn, items);
}
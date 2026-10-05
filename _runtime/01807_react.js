// === Module 1807: react ===

// Module 1807 (react)
import react from "react" /* 19 */;

const useCallback = react.useCallback;

export const useWorkletCallback = function useWorkletCallback(fn, items) {
  if (items == null) {
    items = [];
  }
  return useCallback(fn, items);
};
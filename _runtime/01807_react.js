// _runtime/01807_react.js
import react from "00019_react.js";

const useCallback = react.useCallback;

export const useWorkletCallback = function useWorkletCallback(fn, items) {
  if (items == null) {
    items = [];
  }
  return useCallback(fn, items);
};

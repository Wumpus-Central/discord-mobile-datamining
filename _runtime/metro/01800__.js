// _runtime/metro/01800__.js
import _mod19 from "00019__.js";

_mod19.useCallback;

export const useWorkletCallback = function useWorkletCallback(fn, items) {
  if (items == null) {
    items = [];
  }
  return useCallback(fn, items);
};

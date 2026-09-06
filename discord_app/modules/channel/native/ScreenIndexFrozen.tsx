// === Module 4426: ScreenIndexFrozen ===

// Module 4426 (ScreenIndexFrozen)
import noop from "module_19" /* 19 */;

const require = fn;
const set = new Set();
const set1 = new Set();
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel/native/ScreenIndexFrozen.tsx");

export const freezeScreenIndex = function freezeScreenIndex(shouldFreeze, arg1) {
  if (shouldFreeze) {
    obj.add(arg1);
  } else {
    obj.delete(arg1);
  }
  const item = set1.forEach((fn) => fn());
};
export const isScreenIndexFrozen = function isScreenIndexFrozen(item) {
  return set.has(item);
};
export const addFrozenScreenIndexesChangedListener = function addFrozenScreenIndexesChangedListener(arg0) {
  closure_0 = arg0;
  set1.add(arg0);
  return () => {
    set2.delete(fn);
  };
};
export const removeFrozenScreenIndexesChangedListener = function removeFrozenScreenIndexesChangedListener(arg0) {
  set1.delete(arg0);
};
export const useIsScreenIndexFrozenSharedValue = function useIsScreenIndexFrozenSharedValue(arg0) {
  _require = arg0;
  sharedValue = require("ReanimatedRexport").useSharedValue(set.has(arg0));
  const items = [arg0, sharedValue];
  const effect = noop.useEffect(() => {
    const fn = () => {
      const result = sharedValue.set(set.has(fn));
    };
    set1.add(fn);
    return () => {
      set2.delete(fn);
    };
  }, items);
  return sharedValue;
};
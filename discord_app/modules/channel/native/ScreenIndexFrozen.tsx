// === Module 4238: set ===

// Module 4238 (set)
import noop from "noop" /* 19 */;

const require = fn;
const set = new Set();
const set1 = new Set();
let result = require("obj132").fileFinishedImporting("modules/channel/native/ScreenIndexFrozen.tsx");

export const freezeScreenIndex = function freezeScreenIndex(shouldFreeze, arg1) {
  if (shouldFreeze) {
    set.add(arg1);
  } else {
    set.delete(arg1);
  }
  const item = set1.forEach((item, index) => item());
};
export const isScreenIndexFrozen = function isScreenIndexFrozen(item) {
  return set.has(item);
};
export const addFrozenScreenIndexesChangedListener = function addFrozenScreenIndexesChangedListener(arg0) {
  closure_0 = arg0;
  set1.add(arg0);
  return () => {
    closure_1_4.delete(fn);
  };
};
export const removeFrozenScreenIndexesChangedListener = function removeFrozenScreenIndexesChangedListener(arg0) {
  set1.delete(arg0);
};
export const useIsScreenIndexFrozenSharedValue = function useIsScreenIndexFrozenSharedValue(arg0) {
  const _require = arg0;
  sharedValue = _require(sharedValue[1]).useSharedValue(set.has(arg0));
  const items = [arg0, sharedValue];
  const effect = React.useEffect(() => {
    const fn = () => {
      const result = closure_1.set(closure_1_3.has(fn));
    };
    set1.add(fn);
    return () => {
      closure_1_4.delete(fn);
    };
  }, items);
  return sharedValue;
};
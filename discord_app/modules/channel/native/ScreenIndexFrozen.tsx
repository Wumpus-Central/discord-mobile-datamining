// === Module 4426: set ===

// Module 4426 (set)
import closure_2 from "noop" /* 19 */;
import set from "set" /* 2 */;

const require = arg1;
let set = new Set();
const set1 = new Set();
let result = set.fileFinishedImporting("modules/channel/native/ScreenIndexFrozen.tsx");

export const freezeScreenIndex = function freezeScreenIndex(shouldFreeze, arg1) {
  if (shouldFreeze) {
    obj.add(arg1);
  } else {
    obj.delete(arg1);
  }
  const item = set1.forEach((arg0) => arg0());
};
export const isScreenIndexFrozen = function isScreenIndexFrozen(arg0) {
  return set.has(arg0);
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
    closure_1_4.add(fn);
    return () => {
      closure_1_4.delete(fn);
    };
  }, items);
  return sharedValue;
};
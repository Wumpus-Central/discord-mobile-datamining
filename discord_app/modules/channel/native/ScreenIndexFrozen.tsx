// === Module 4746: ScreenIndexFrozen ===

// Module 4746 (ScreenIndexFrozen)
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const set = new Set();
const set1 = new Set();
const ReactCompilerGating = fn(558);
function isScreenIndexFrozen(item) {
  return set.has(item);
}
function addFrozenScreenIndexesChangedListener(arg0) {
  closure_0 = arg0;
  set1.add(arg0);
  return () => {
    set2.delete(fn);
  };
}
function removeFrozenScreenIndexesChangedListener(arg0) {
  set1.delete(arg0);
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel/native/ScreenIndexFrozen.tsx");

export const freezeScreenIndex = function freezeScreenIndex(shouldFreeze, arg1) {
  if (shouldFreeze) {
    set.add(arg1);
  } else {
    set.delete(arg1);
  }
  const item = set1.forEach((fn) => fn());
};
export { isScreenIndexFrozen };
export { addFrozenScreenIndexesChangedListener };
export { removeFrozenScreenIndexesChangedListener };
export const useIsScreenIndexFrozenSharedValue = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  const obj = require("c");
  sharedValue = require("ReanimatedRexport").useSharedValue(set.has(arg0));
  if (cResult[0] === sharedValue) {
    if (cResult[1] === arg0) {
      let tmp3 = cResult[2];
      let tmp4 = cResult[3];
    }
    const effect = noop.useEffect(tmp3, tmp4);
    return sharedValue;
  }
  let fn = function t() {
    const fn = () => {
      const result = sharedValue.set(set.has(fn));
    };
    set1.add(fn);
    return () => {
      set2.delete(fn);
    };
  };
  const items = [arg0, sharedValue];
  cResult[0] = sharedValue;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp4 = items;
  tmp3 = fn;
  const obj2 = require("ReanimatedRexport");
}) : ((arg0) => {
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
});
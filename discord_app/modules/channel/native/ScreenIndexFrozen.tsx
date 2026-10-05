// === Module 4746: ScreenIndexFrozen ===

// Module 4746 (ScreenIndexFrozen)
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const set = new Set();
const set1 = new Set();
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let sharedValue;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const obj2 = require("ReanimatedRexport");
  sharedValue = obj2.useSharedValue(set.has(arg0));
  if (cResult[0] === sharedValue) {
    let tmp3;
    let tmp4;
    if (cResult[1] === arg0) {
      tmp3 = cResult[2];
      tmp4 = cResult[3];
    }
    const effect = react.useEffect(tmp3, tmp4);
    return sharedValue;
  }
  let fn = function t() {
    const fn = () => {
      const result = sharedValue.set(set.has(closure_1_0));
    };
    set1.add(fn);
    return () => {
      set.delete(fn);
    };
  };
  const items = [arg0, sharedValue];
  cResult[0] = sharedValue;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp4 = items;
  tmp3 = fn;
}) : ((arg0) => {
  let closure_0;
  let sharedValue;
  _require = arg0;
  const obj = require("ReanimatedRexport");
  sharedValue = obj.useSharedValue(set.has(arg0));
  const items = [arg0, sharedValue];
  const effect = react.useEffect(() => {
    const fn = () => {
      const result = sharedValue.set(set.has(closure_1_0));
    };
    set1.add(fn);
    return () => {
      set.delete(fn);
    };
  }, items);
  return sharedValue;
});
function isScreenIndexFrozen(item) {
  return set.has(item);
}
function addFrozenScreenIndexesChangedListener(arg0) {
  let closure_0 = arg0;
  set1.add(arg0);
  return () => {
    set.delete(fn);
  };
}
function removeFrozenScreenIndexesChangedListener(arg0) {
  set1.delete(arg0);
}
let result = size.fileFinishedImporting("modules/channel/native/ScreenIndexFrozen.tsx");

export const freezeScreenIndex = function freezeScreenIndex(shouldFreeze, arg1) {
  const tmp = shouldFreeze;
  if (tmp) {
    set.add(arg1);
  } else {
    set.delete(arg1);
  }
  const item = set1.forEach((fn) => fn());
};
export { isScreenIndexFrozen };
export { addFrozenScreenIndexesChangedListener };
export { removeFrozenScreenIndexesChangedListener };
export const useIsScreenIndexFrozenSharedValue = tmp4;
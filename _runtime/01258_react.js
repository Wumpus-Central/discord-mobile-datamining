// === Module 1258: react ===

// Module 1258 (react)
import react from "react" /* 19 */;

let c2;
let c3;
let closure_4;
let map;
function checkIfSnapshotChanged(arg0) {
  try {
    return !is(tmp2, tmp());
  } catch (err) {
    return true;
  }
}
if (typeof Object.is === "function") {
  const _Object = Object;
} else {
  is = function is(arg0, arg1) {
    let tmp = arg0 === arg1;
    if (tmp) {
      tmp = 0 !== arg0 || 1 / arg0 === 1 / arg1;
      const tmp2 = 0 !== arg0 || 1 / arg0 === 1 / arg1;
    }
    if (!tmp) {
      tmp = arg0 != arg0 && arg1 != arg1;
    }
    return tmp;
  };
}
({ useState: map, useEffect: c2, useLayoutEffect: c3, useDebugValue: closure_4 } = react);

export const useSyncExternalStore = undefined !== react.useSyncExternalStore ? react.useSyncExternalStore : (function useSyncExternalStore$1(arg0, getSnapshot) {
  let closure_0 = arg0;
  const tmp = getSnapshot();
  const value = tmp;
  let obj = { inst: { value: tmp, getSnapshot } };
  const tmp2 = getSnapshot(obj);
  const inst = tmp2[0].inst;
  let closure_4 = tmp2[1];
  const items = [arg0, tmp, getSnapshot];
  const tmp3 = inst(() => {
    inst.value = value;
    inst.getSnapshot = getSnapshot;
    if (checkIfSnapshotChanged(inst)) {
      const obj = { inst };
      closure_4(obj);
    }
  }, items);
  const items1 = [arg0];
  value(() => {
    if (checkIfSnapshotChanged(inst)) {
      let obj = { inst };
      closure_4(obj);
    }
    return closure_0(() => {
      if (checkIfSnapshotChanged(inst)) {
        const obj = { inst };
        closure_1_4(obj);
      }
    });
  }, items1);
  closure_4(tmp);
  return tmp;
});
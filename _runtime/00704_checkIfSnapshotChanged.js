// _runtime/00704_checkIfSnapshotChanged.js
import noop from "00019_noop.js";

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
      let tmp2 = 0 !== arg0;
      if (!tmp2) {
        tmp2 = 1 / arg0 === 1 / arg1;
      }
      tmp = tmp2;
    }
    if (!tmp) {
      tmp = arg0 != arg0 && arg1 != arg1;
    }
    return tmp;
  };
}
({ useState: closure_1, useEffect: obj1, useLayoutEffect: c3, useDebugValue: c4 } = noop);

export const useSyncExternalStore = undefined !== noop.useSyncExternalStore ? noop.useSyncExternalStore : (function useSyncExternalStore$1(arg0, fn) {
  closure_0 = arg0;
  const callback = fn;
  const tmp = fn();
  const callback2 = tmp;
  const tmp2 = callback({ inst: { value: tmp, getSnapshot: fn } });
  const inst = tmp2[0].inst;
  const callback3 = tmp2[1];
  const items = [arg0, tmp, fn];
  inst(() => {
    inst.value = closure_2;
    inst.getSnapshot = closure_1;
    if (checkIfSnapshotChanged(inst)) {
      const obj = { inst: null };
      obj[0] = inst;
      callback2(obj);
    }
  }, items);
  const items1 = [arg0];
  callback2(() => {
    if (checkIfSnapshotChanged(inst)) {
      let obj = { inst: null };
      obj[0] = inst;
      callback2(obj);
    }
    return callback(() => {
      if (closure_1_5(closure_3)) {
        const obj = { inst: null };
        obj[0] = closure_3;
        callback(obj);
      }
    });
  }, items1);
  callback3(tmp);
  return tmp;
});
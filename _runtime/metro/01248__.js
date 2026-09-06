// _runtime/metro/01248__.js
import noop from "00019__.js";

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
      const tmp3 = arg0 != arg0 && arg1 != arg1;
    }
    return tmp;
  };
}
({ useState: closure_1, useEffect: c2, useLayoutEffect: c3, useDebugValue: closure_4 } = noop);

export const useSyncExternalStore =
  undefined !== noop.useSyncExternalStore
    ? noop.useSyncExternalStore
    : function useSyncExternalStore$1(arg0, getSnapshot) {
        closure_0 = arg0;
        const tmp = getSnapshot();
        value = tmp;
        const tmp2 = getSnapshot({ inst: { value: tmp, getSnapshot } });
        const inst = tmp2[0].inst;
        closure_4 = tmp2[1];
        const items = [arg0, tmp, getSnapshot];
        inst(() => {
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
      };

// === Module 12489: conjureDatabaseLock ===

// Module 12489 (conjureDatabaseLock)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

function notify() {
  for (const item10005 of set1) {
    let item10005Result = item10005();
    continue;
  }
}
function subscribe(arg0) {
  closure_0 = arg0;
  set1.add(arg0);
  return () => {
    set1.delete(closure_0);
  };
}
let closure_6 = async function _withConjureDatabaseLock(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_0 = closure_0;
          if (set.has(closure_0)) {
            c7 = 3;
            return { value: null, done: true };
          } else {
            set.add(closure_0);
            notify();
            c5 = 1;
            c6 = 2;
            c7 = 1;
            const obj4 = { value: noop(), done: false };
            return obj4;
          }
        }
      } else if (1 === tmp7) {
        c5 = 0;
        closure_131_2.delete(closure_130_0);
        closure_131_4();
        throw closure_4;
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        closure_131_2.delete(closure_130_0);
        closure_131_4();
        c7 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        c5 = 0;
        closure_131_2.delete(closure_130_0);
        closure_131_4();
        c7 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp38) {
      closure_4 = tmp38;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp38;
      } else {
        c6 = tmp;
      }
    }
  }
};
const set = new Set();
const set1 = new Set();
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/history/conjureDatabaseLock.tsx");

export function withConjureDatabaseLock() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function useConjureDatabaseBusy(projectId) {
  closure_0 = projectId;
  const items = [projectId];
  return noop.useSyncExternalStore(subscribe, noop.useCallback(() => set.has(closure_0), items));
}
// === Module 16660: conjureDatabaseLock ===

// Module 16660 (conjureDatabaseLock)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c6, c7, closure_4;

function notify() {
  for (const item10005 of set1) {
    let item10005Result = item10005();
    continue;
  }
}
function subscribe(arg0) {
  let closure_0 = arg0;
  set1.add(arg0);
  return () => {
    set1.delete(closure_0);
  };
}
let obj = function _withConjureDatabaseLock() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
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
            let closure_3 = tmp;
            let closure_2 = tmp4;
            if (set.has(closure_0)) {
              c7 = 3;
              return { value: null, done: true };
            } else {
              set.add(closure_0);
              notify();
              c5 = 1;
              c6 = 2;
              c7 = 1;
              const obj4 = { value: closure_1(), done: false };
              return obj4;
            }
          }
        } else if (1 === c6) {
          c5 = 0;
          closure_131_4.delete(closure_0);
          closure_131_6();
          throw closure_4;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          closure_131_4.delete(closure_0);
          closure_131_6();
          c7 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c5 = 0;
          closure_131_4.delete(closure_0);
          closure_131_6();
          c7 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp35) {
        closure_4 = tmp35;
        if (0 === c5) {
          c7 = 3;
          throw tmp35;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const set = new Set();
const set1 = new Set();
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp2;
  _require = arg0;
  obj = require("react");
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function o() {
      return set.has(closure_0);
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return react.useSyncExternalStore(subscribe, tmp2);
}) : ((arg0) => {
  let closure_0 = arg0;
  const items = [arg0];
  return react.useSyncExternalStore(subscribe, react.useCallback(() => set.has(closure_0), items));
});
const result = size.fileFinishedImporting("modules/conjure/history/conjureDatabaseLock.tsx");

export const withConjureDatabaseLock = function withConjureDatabaseLock() {
  return obj(...arguments);
};
export const useConjureDatabaseBusy = tmp4;
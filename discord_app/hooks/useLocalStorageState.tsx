// === Module 9606: useLocalStorageState ===

// Module 9606 (useLocalStorageState)
import Storage3 from "Storage" /* 510 */;
import useMountEffectDefault from "useMountEffect" /* 5597 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let tmp7;
  _require = arg0;
  importDefault = arg1;
  const obj = require("react");
  const cResult = obj.c(11);
  if (cResult[0] === arg1) {
    let tmp3;
    if (cResult[1] === arg0) {
      tmp3 = cResult[2];
    }
    [tmp7, dependencyMap] = react.useState(tmp3);
    _slicedToArray(react.useState(tmp3), 2);
    if (cResult[3] === arg1) {
      let tmp8;
      let tmp11;
      if (cResult[4] === arg0) {
        tmp8 = cResult[5];
      }
      useMountEffectDefault(tmp8);
      if (cResult[6] !== arg0) {
        const fn2 = function c(arg0) {
          dependencyMap(arg0);
          const Storage = Storage3.Storage;
          const result = Storage.set(closure_0, arg0);
        };
        cResult[6] = arg0;
        cResult[7] = fn2;
        tmp11 = fn2;
      } else {
        tmp11 = cResult[7];
      }
      if (cResult[8] === tmp11) {
        let tmp12;
        if (cResult[9] === tmp7) {
          tmp12 = cResult[10];
        }
        return tmp12;
      }
      const items = [tmp7, tmp11];
      class S {
        constructor() {
          const Storage = Storage3.Storage;
          if (null == Storage.get(closure_0)) {
            const Storage2 = Storage3.Storage;
            const result = Storage2.set(closure_0, closure_1);
          }
        }
      }
      cResult[8] = tmp11;
      cResult[9] = tmp7;
      cResult[10] = items;
      tmp12 = items;
    }
    class S {
      constructor() {
        const Storage = Storage3.Storage;
        if (null == Storage.get(closure_0)) {
          const Storage2 = Storage3.Storage;
          const result = Storage2.set(closure_0, closure_1);
        }
      }
    }
    cResult[3] = arg1;
    cResult[4] = arg0;
    cResult[5] = S;
    tmp8 = S;
  }
  const fn = function l() {
    const Storage = Storage3.Storage;
    let value = Storage.get(closure_0);
    if (null == value) {
      value = closure_1;
    }
    return value;
  };
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  tmp3 = fn;
}) : ((arg0, arg1) => {
  let closure_1;
  let closure_2;
  let first;
  let closure_0 = arg0;
  importDefault = arg1;
  [first, dependencyMap] = react.useState(() => {
    const Storage = Storage3.Storage;
    let value = Storage.get(closure_0);
    if (null == value) {
      value = closure_1;
    }
    return value;
  });
  useMountEffectDefault(() => {
    const Storage = Storage3.Storage;
    if (null == Storage.get(closure_0)) {
      const Storage2 = Storage3.Storage;
      const result = Storage2.set(closure_0, closure_1);
    }
  });
  const items = [first, ];
  const items1 = [arg0];
  items[1] = react.useCallback((arg0) => {
    closure_2(arg0);
    const Storage = Storage3.Storage;
    const result = Storage.set(closure_0, arg0);
  }, items1);
  return items;
});
let result = size.fileFinishedImporting("hooks/useLocalStorageState.tsx");

export const useLocalStorageState = tmp2;
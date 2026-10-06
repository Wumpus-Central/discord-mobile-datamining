// _runtime/metro/04649__.js
import react2 from "../04650_react.js";
import _slicedToArray from "00032__slicedToArray.js";
import react from "../00019_react.js";

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ useCallback: c3, useEffect: closure_4, useRef: hasOwnProperty, useState: metroRequire } = react);

export const useRiveProperty = function useRiveProperty(arg0, arg1, f31263) {
  let closure_7;
  let first;
  let first1;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = f31263;
  let tmp = hasOwnProperty(undefined);
  let c3 = tmp;
  const items = [arg0, arg1];
  const obj = react2;
  const disposableMemo = obj.useDisposableMemo(
    () => {
      if (closure_0) {
        return closure_2(tmp, closure_1);
      }
    },
    (dispose) => {
      let disposeResult;
      if (dispose != null) {
        disposeResult = dispose.dispose();
      }
      return disposeResult;
    },
    items,
    tmp,
  );
  [first, metroRequire] = metroRequire(undefined);
  [first1, closure_7] = metroRequire(null);
  const items1 = [arg1, arg0];
  React3(() => {
    closure_7(null);
  }, items1);
  const items2 = [arg0, disposableMemo, arg1];
  React3(function () {
    const tmp = closure_0 && !disposableMemo;
    if (tmp) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error('Property "' + closure_1 + '" not found in the ViewModel instance');
      closure_7(error);
    }
  }, items2);
  const items3 = [disposableMemo];
  React3(() => {
    if (disposableMemo) {
      closure_6(disposableMemo.value);
      closure_0 = disposableMemo.addListener((arg0) => {
        closure_1_6(arg0);
      });
      return () => {
        try {
          closure_0();
        } catch (err) {}
      };
    }
  }, items3);
  const items4 = [disposableMemo, first];
  const items5 = [
    first,
    _false((fn) => {
      const current = ref.current;
      if (current) {
        let tmp2 = fn;
        if (typeof fn === "function") {
          tmp2 = fn(first);
        }
        current.value = tmp2;
      }
    }, items4),
    first1,
    disposableMemo,
  ];
  return items5;
};

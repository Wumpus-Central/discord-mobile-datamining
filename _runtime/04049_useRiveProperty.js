// _runtime/04049_useRiveProperty.js
import _slicedToArray from "_slicedToArray";
import noop from "noop";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ useCallback: c3, useEffect: c4, useRef: c5, useState: closure_6 } = noop);

export const useRiveProperty = function useRiveProperty(instance, FillColor, f28757) {
  const _require = instance;
  const dependencyMap = FillColor;
  const callback = f28757;
  let tmp = first(undefined);
  const callback2 = tmp;
  const items = [instance, FillColor];
  const disposableMemo = _require("04050_useDisposableMemo.js").useDisposableMemo(() => {
    if (closure_0) {
      return callback(tmp, closure_1);
    }
  }, (dispose) => {
    let disposeResult;
    if (dispose != null) {
      disposeResult = dispose.dispose();
    }
    return disposeResult;
  }, items, tmp);
  const tmp3 = callback(callback3(undefined), 2);
  first = tmp3[0];
  callback3 = tmp3[1];
  const tmp5 = callback(callback3(null), 2);
  let closure_7 = tmp5[1];
  const items1 = [FillColor, instance];
  disposableMemo(() => {
    callback3(null);
  }, items1);
  const items2 = [instance, disposableMemo, FillColor];
  disposableMemo(() => {
    let tmp = closure_0;
    if (closure_0) {
      tmp = !disposableMemo;
    }
    if (tmp) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Property \"" + closure_1 + "\" not found in the ViewModel instance");
      callback3(error);
    }
  }, items2);
  const items3 = [disposableMemo];
  disposableMemo(() => {
    if (disposableMemo) {
      callback2(iter.value);
      let closure_0 = iter.addListener((arg0) => {
        callback2(arg0);
      });
      return () => {
        try {
          callback();
        } catch (err) {
        }
      };
    }
  }, items3);
  const items4 = [disposableMemo, first];
  const items5 = [
    first,
    callback2((fn) => {
      const current = tmp.current;
      if (current) {
        let tmp2 = fn;
        if (typeof fn === "function") {
          tmp2 = fn(first);
        }
        current.value = tmp2;
        tmp = fn;
      }
    }, items4),
    tmp5[0],
    disposableMemo
  ];
  return items5;
};
// _runtime/04148_useRiveProperty.js
import _slicedToArray from "metro/00032__slicedToArray.js";
import noop from "00019_noop.js";

const require = fn;
({ useCallback: c3, useEffect: c4, useRef: c5, useState: closure_6 } = noop);

export const useRiveProperty = function useRiveProperty(instance, FillColor, f29193) {
  const _require = instance;
  dependencyMap = FillColor;
  const callback = f29193;
  let tmp = first(undefined);
  const callback2 = tmp;
  const items = [instance, FillColor];
  const disposableMemo = require("04149_useDisposableMemo.js").useDisposableMemo(() => {
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
  closure_7 = tmp5[1];
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
      error = new Error("Property \"" + closure_1 + "\" not found in the ViewModel instance");
      callback3(error);
    }
  }, items2);
  const items3 = [disposableMemo];
  disposableMemo(() => {
    if (disposableMemo) {
      callback2(disposableMemo.value);
      closure_0 = disposableMemo.addListener((arg0) => {
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
      const current = ref.current;
      if (current) {
        let tmp2 = fn;
        if (typeof fn === "function") {
          tmp2 = fn(first);
        }
        current.value = tmp2;
      }
    }, items4),
    tmp5[0],
    disposableMemo
  ];
  return items5;
};
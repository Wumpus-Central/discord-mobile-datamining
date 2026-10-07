// === Module 4649: ? ===

// Module 4649
import _mod4650 from "module_4650" /* 4650 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const noop = fn(19);
({ useCallback: c3, useEffect: closure_4, useRef: hasOwnProperty, useState: metroRequire } = noop);

export const useRiveProperty = function useRiveProperty(arg0, arg1, f31263) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = f31263;
  let tmp = hasOwnProperty(undefined);
  const items = [arg0, arg1];
  const disposableMemo = _mod4650.useDisposableMemo(() => {
    if (closure_0) {
      return closure_2(tmp, closure_1);
    }
  }, (dispose) => {
    let disposeResult;
    if (dispose != null) {
      disposeResult = dispose.dispose();
    }
    return disposeResult;
  }, items, tmp);
  [first, closure_6] = timestampProducer(undefined);
  const tmp5 = _slicedToArray(timestampProducer(null), 2);
  closure_7 = tmp5[1];
  const items1 = [arg1, arg0];
  React4(() => {
    closure_7(null);
  }, items1);
  const items2 = [arg0, disposableMemo, arg1];
  React4(() => {
    let tmp = closure_0;
    if (closure_0) {
      tmp = !disposableMemo;
    }
    if (tmp) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Property \"" + closure_1 + "\" not found in the ViewModel instance");
      closure_7(error);
    }
  }, items2);
  const items3 = [disposableMemo];
  React4(() => {
    if (disposableMemo) {
      closure_6(disposableMemo.value);
      closure_0 = disposableMemo.addListener((arg0) => {
        closure_1_6(arg0);
      });
      return () => {
        try {
          closure_0();
        } catch (err) {
        }
      };
    }
  }, items3);
  const items4 = [disposableMemo, first];
  const items5 = [
    first,
    React3((fn) => {
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
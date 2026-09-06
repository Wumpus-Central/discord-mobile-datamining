// _runtime/metro/04329__.js
import _mod4330 from "04330__.js";
import _slicedToArray from "00032__.js";

require = fn;
const noop = fn(19);
({ useCallback: c3, useEffect: closure_4, useRef: hasOwnProperty, useState: metroRequire } = noop);

export const useRiveProperty = function useRiveProperty(instance, FillColor, f30504) {
  closure_0 = instance;
  closure_1 = FillColor;
  closure_2 = f30504;
  let tmp = hasOwnProperty(undefined);
  const items = [instance, FillColor];
  const disposableMemo = _mod4330.useDisposableMemo(
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
  const tmp3 = _slicedToArray(timestampProducer(undefined), 2);
  const first = tmp3[0];
  closure_6 = tmp3[1];
  const tmp5 = _slicedToArray(timestampProducer(null), 2);
  closure_7 = tmp5[1];
  const items1 = [FillColor, instance];
  React4(() => {
    closure_7(null);
  }, items1);
  const items2 = [instance, disposableMemo, FillColor];
  React4(() => {
    let tmp = closure_0;
    if (closure_0) {
      tmp = !disposableMemo;
    }
    if (tmp) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error('Property "' + closure_1 + '" not found in the ViewModel instance');
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
        } catch (err) {}
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
    disposableMemo,
  ];
  return items5;
};

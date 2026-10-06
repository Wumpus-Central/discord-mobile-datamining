// _runtime/metro/04655__.js
import react2 from "../04650_react.js";
import _slicedToArray from "00032__slicedToArray.js";
import react from "../00019_react.js";

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ useCallback: c3, useEffect: closure_4, useRef: hasOwnProperty, useState: metroRequire } = react);

export const useRiveTrigger = function useRiveTrigger(arg0, arg1, cResult) {
  let first;
  let items4;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = cResult;
  if (cResult == null) {
    obj = {};
  }
  const onTrigger = obj.onTrigger;
  let tmp = hasOwnProperty(undefined);
  let closure_2 = tmp;
  const tmp2 = hasOwnProperty(false);
  let c3 = tmp2;
  const tmp3 = hasOwnProperty(onTrigger);
  let closure_4 = tmp3;
  tmp3.current = onTrigger;
  const items = [arg1, arg0];
  const obj2 = react2;
  const disposableMemo = obj2.useDisposableMemo(
    () => {
      if (closure_1) {
        return closure_1.triggerProperty(closure_0);
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
  if (tmp.current) {
    tmp2.current = true;
  }
  [first, metroRequire] = metroRequire(null);
  const items1 = [arg0, arg1];
  React3(() => {
    closure_6(null);
  }, items1);
  const items2 = [arg1, disposableMemo, arg0];
  React3(function () {
    const tmp = closure_1 && !disposableMemo;
    if (tmp) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error('Property "' + closure_0 + '" not found in the ViewModel instance');
      closure_6(error);
    }
  }, items2);
  const items3 = [disposableMemo];
  React3(() => {
    if (disposableMemo) {
      closure_0 = disposableMemo.addListener(() => {
        const current = ref.current;
        if (current != null) {
          current();
        }
      });
      return () => {
        try {
          closure_0();
        } catch (err) {}
      };
    }
  }, items3);
  const obj3 = {
    trigger: _false(() => {
      if (ref.current) {
        const current = ref.current;
        current.trigger();
      } else {
        const _console = console;
        const _HermesInternal = HermesInternal;
        if (ref2.current) {
          warn(
            concat(
              closure_0,
              "') called after dispose. The property has been cleaned up \u2014 this is likely a stale closure from an async callback that fired after unmount.",
            ),
          );
        } else {
          warn(
            concat(
              closure_0,
              "') called but the property is not available yet. The viewModelInstance may still be loading.",
            ),
          );
        }
      }
    }, items4),
    error: first,
  };
  items4 = [arg0];
  return obj3;
};

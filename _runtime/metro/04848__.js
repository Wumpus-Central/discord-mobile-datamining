// === Module 4848: ? ===

// Module 4848
import _mod4843 from "module_4843" /* 4843 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const noop = fn(19);
({ useCallback: c3, useEffect: closure_4, useRef: hasOwnProperty, useState: metroRequire } = noop);

export const useRiveTrigger = function useRiveTrigger(arg0, arg1, cResult) {
  closure_0 = arg0;
  closure_1 = arg1;
  let obj = cResult;
  if (cResult == null) {
    obj = {};
  }
  const onTrigger = obj.onTrigger;
  let tmp = hasOwnProperty(undefined);
  const tmp2 = hasOwnProperty(false);
  const tmp3 = hasOwnProperty(onTrigger);
  closure_4 = tmp3;
  tmp3.current = onTrigger;
  const items = [arg1, arg0];
  const disposableMemo = _mod4843.useDisposableMemo(() => {
    if (closure_1) {
      return closure_1.triggerProperty(closure_0);
    }
  }, (dispose) => {
    let disposeResult;
    if (dispose != null) {
      disposeResult = dispose.dispose();
    }
    return disposeResult;
  }, items, tmp);
  if (tmp.current) {
    tmp2.current = true;
  }
  const tmp5 = _slicedToArray(timestampProducer(null), 2);
  closure_6 = tmp5[1];
  const items1 = [arg0, arg1];
  React4(() => {
    closure_6(null);
  }, items1);
  const items2 = [arg1, disposableMemo, arg0];
  React4(() => {
    let tmp = closure_1;
    if (closure_1) {
      tmp = !disposableMemo;
    }
    if (tmp) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Property \"" + closure_0 + "\" not found in the ViewModel instance");
      closure_6(error);
    }
  }, items2);
  const items3 = [disposableMemo];
  React4(() => {
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
        } catch (err) {
        }
      };
    }
  }, items3);
  const obj3 = { trigger: null, error: tmp5[0] };
  const items4 = [arg0];
  obj3.trigger = React3(() => {
    if (ref.current) {
      const current = ref.current;
      current.trigger();
    } else {
      const _console = console;
      const _HermesInternal = HermesInternal;
      if (ref2.current) {
        warn(concat(closure_0, "') called after dispose. The property has been cleaned up \u2014 this is likely a stale closure from an async callback that fired after unmount."));
      } else {
        warn(concat(closure_0, "') called but the property is not available yet. The viewModelInstance may still be loading."));
      }
    }
  }, items4);
  return obj3;
};
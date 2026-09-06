// === Module 4335: ? ===

// Module 4335
import _mod4330 from "module_4330" /* 4330 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const noop = fn(19);
({ useCallback: c3, useEffect: closure_4, useRef: hasOwnProperty, useState: metroRequire } = noop);

export const useRiveTrigger = function useRiveTrigger(startAnimation, instance, arg2) {
  closure_0 = startAnimation;
  let obj = arg2;
  if (arg2 == null) {
    obj = {};
  }
  const onTrigger = obj.onTrigger;
  let tmp = hasOwnProperty(undefined);
  const tmp2 = hasOwnProperty(false);
  const tmp3 = hasOwnProperty(onTrigger);
  closure_4 = tmp3;
  tmp3.current = onTrigger;
  const items = [instance, startAnimation];
  const disposableMemo = _mod4330.useDisposableMemo(() => {
    if (instance) {
      return instance.triggerProperty(closure_0);
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
  const items1 = [startAnimation, instance];
  React4(() => {
    closure_6(null);
  }, items1);
  const items2 = [instance, disposableMemo, startAnimation];
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
  obj = { trigger: null, error: tmp5[0] };
  const items4 = [startAnimation];
  obj.trigger = React3(() => {
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
  return obj;
};
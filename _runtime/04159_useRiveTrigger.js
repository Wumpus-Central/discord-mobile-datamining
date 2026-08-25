// === Module 4159: useRiveTrigger ===

// Module 4159 (useRiveTrigger)
import closure_2 from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;

const require = arg1;
({ useCallback: c3, useEffect: c4, useRef: c5, useState: closure_6 } = noop);

export const useRiveTrigger = function useRiveTrigger(startAnimation, instance, arg2) {
  const _require = startAnimation;
  dependencyMap = instance;
  let obj = arg2;
  if (arg2 == null) {
    obj = {};
  }
  const onTrigger = obj.onTrigger;
  let tmp = disposableMemo(undefined);
  const callback = tmp;
  const tmp2 = disposableMemo(false);
  const callback2 = tmp2;
  const tmp3 = disposableMemo(onTrigger);
  const callback3 = tmp3;
  tmp3.current = onTrigger;
  const items = [instance, startAnimation];
  disposableMemo = _require(4154).useDisposableMemo(() => {
    if (closure_1) {
      return obj.triggerProperty(closure_0);
    }
    obj = closure_1;
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
  const tmp5 = callback(callback4(null), 2);
  callback4 = tmp5[1];
  const items1 = [startAnimation, instance];
  callback3(() => {
    callback(null);
  }, items1);
  const items2 = [instance, disposableMemo, startAnimation];
  callback3(() => {
    let tmp = closure_1;
    if (closure_1) {
      tmp = !disposableMemo;
    }
    if (tmp) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      error = new Error("Property \"" + closure_0 + "\" not found in the ViewModel instance");
      callback(error);
    }
  }, items2);
  const items3 = [disposableMemo];
  callback3(() => {
    if (disposableMemo) {
      closure_0 = obj.addListener(() => {
        const current = ref.current;
        if (current != null) {
          current();
        }
      });
      return () => {
        try {
          callback();
        } catch (err) {
        }
      };
    }
    obj = disposableMemo;
  }, items3);
  obj = {
    trigger: callback2(() => {
      if (ref.current) {
        const current = ref.current;
        current.trigger();
      } else {
        const _console = console;
        const _HermesInternal = HermesInternal;
        if (ref2.current) {
          warn(concat(tmp3, "') called after dispose. The property has been cleaned up \u2014 this is likely a stale closure from an async callback that fired after unmount."));
        } else {
          warn(concat(tmp3, "') called but the property is not available yet. The viewModelInstance may still be loading."));
        }
      }
    }, items4),
    error: tmp5[0]
  };
  items4 = [startAnimation];
  return obj;
};
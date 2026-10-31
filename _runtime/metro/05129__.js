// _runtime/metro/05129__.js
import _mod5130 from "05130__.js";
import _slicedToArray from "00032__.js";

require = fn;
const noop = fn(19);
({ useCallback: c3, useEffect: closure_4, useRef: hasOwnProperty, useState: metroRequire } = noop);

export function useRiveProperty(instance, device, f34221) {
  closure_0 = instance;
  closure_1 = device;
  closure_2 = f34221;
  let tmp = hasOwnProperty(undefined);
  const items = [instance, device];
  const disposableMemo = _mod5130.useDisposableMemo(
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
  [first, closure_6] = timestampProducer(undefined);
  const tmp5 = _slicedToArray(timestampProducer(null), 2);
  closure_7 = tmp5[1];
  const items1 = [device, instance];
  React4(() => {
    closure_7(null);
  }, items1);
  const items2 = [instance, disposableMemo, device];
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
}

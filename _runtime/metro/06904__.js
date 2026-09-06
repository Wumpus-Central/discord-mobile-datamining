// === Module 6904: ? ===

// Module 6904
import _mod6902 from "module_6902" /* 6902 */;
import _slicedToArray from "module_6857" /* 6857 */;

require = fn;
const noop = fn(19);
({ useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty, useState: metroRequire } = noop);
function useOnLoad(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = hasOwnProperty(false);
  React3(() => {
    let isFirstLayoutComplete = getDataLength.getIsFirstLayoutComplete();
    if (isFirstLayoutComplete) {
      isFirstLayoutComplete = !ref.current;
    }
    if (isFirstLayoutComplete) {
      ref.current = true;
      f80796();
    }
  });
}

export const useOnListLoad = (getDataLength, arg1) => {
  let f80796 = arg1;
  hasOwnProperty(Date.now());
  [tmp3, closure_3] = _slicedToArray(timestampProducer(false), 2);
  const dataLength = getDataLength.getDataLength();
  let obj = _mod6902;
  const requestAnimationFrame = obj.useUnmountAwareAnimationFrame().requestAnimationFrame;
  const items = [dataLength];
  React4(() => {
    closure_2.current = Date.now();
  }, items);
  if (typeof useOnLoad === "function") {
    f80796 = () => {
      const elapsedTimeInMs = Date.now() - ref.current;
      requestAnimationFrame(() => {
        elapsedTimeInMs.isFirstPaintOnUiComplete = true;
        if (f80796 != null) {
          const obj = { elapsedTimeInMs };
          tmp(obj);
        }
        closure_2_3(true);
      });
    };
    tmp(false);
    React3(() => {
      let isFirstLayoutComplete = getDataLength.getIsFirstLayoutComplete();
      if (isFirstLayoutComplete) {
        isFirstLayoutComplete = !ref.current;
      }
      if (isFirstLayoutComplete) {
        ref.current = true;
        f80796();
      }
    });
    obj = { isLoaded: tmp3 };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  tmp = hasOwnProperty;
  const tmp2 = _slicedToArray(timestampProducer(false), 2);
};
export { useOnLoad };
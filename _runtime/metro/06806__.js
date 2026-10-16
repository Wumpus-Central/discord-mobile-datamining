// === Module 6806: ? ===

// Module 6806
import _mod6804 from "module_6804" /* 6804 */;
import _slicedToArray from "module_6759" /* 6759 */;

require = fn;
const noop = fn(19);
({ useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty, useState: metroRequire } = noop);
function useOnLoad(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = hasOwnProperty(false);
  React3(() => {
    isFirstLayoutComplete = isFirstLayoutComplete.getIsFirstLayoutComplete();
    if (isFirstLayoutComplete) {
      isFirstLayoutComplete = !ref.current;
    }
    if (isFirstLayoutComplete) {
      ref.current = true;
      f95058();
    }
  });
}

export const useOnListLoad = (recyclerViewManager, onLoad) => {
  let isFirstLayoutComplete = recyclerViewManager;
  let f95058 = onLoad;
  hasOwnProperty(Date.now());
  [tmp3, closure_3] = timestampProducer(false);
  const dataLength = recyclerViewManager.getDataLength();
  const tmp2 = _slicedToArray(timestampProducer(false), 2);
  const requestAnimationFrame = _mod6804.useUnmountAwareAnimationFrame().requestAnimationFrame;
  const items = [dataLength];
  React4(() => {
    closure_2.current = Date.now();
  }, items);
  if (typeof useOnLoad === "function") {
    isFirstLayoutComplete = recyclerViewManager;
    f95058 = () => {
      const elapsedTimeInMs = Date.now() - ref.current;
      requestAnimationFrame(() => {
        elapsedTimeInMs.isFirstPaintOnUiComplete = true;
        if (f95058 != null) {
          const obj = { elapsedTimeInMs };
          tmp(obj);
        }
        closure_2_3(true);
      });
    };
    hasOwnProperty(false);
    React3(() => {
      isFirstLayoutComplete = isFirstLayoutComplete.getIsFirstLayoutComplete();
      if (isFirstLayoutComplete) {
        isFirstLayoutComplete = !ref.current;
      }
      if (isFirstLayoutComplete) {
        ref.current = true;
        f95058();
      }
    });
    const obj2 = { isLoaded: tmp3 };
    return obj2;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export { useOnLoad };
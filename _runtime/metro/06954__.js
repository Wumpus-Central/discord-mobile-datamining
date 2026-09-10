// === Module 6954: ? ===

// Module 6954
import _mod6952 from "module_6952" /* 6952 */;
import _slicedToArray from "module_6907" /* 6907 */;

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
      f81150();
    }
  });
}

export const useOnListLoad = (recyclerViewManager, onLoad) => {
  let isFirstLayoutComplete = recyclerViewManager;
  let f81150 = onLoad;
  hasOwnProperty(Date.now());
  [tmp3, closure_3] = _slicedToArray(timestampProducer(false), 2);
  const dataLength = recyclerViewManager.getDataLength();
  let obj = _mod6952;
  const requestAnimationFrame = obj.useUnmountAwareAnimationFrame().requestAnimationFrame;
  const items = [dataLength];
  React4(() => {
    closure_2.current = Date.now();
  }, items);
  if (typeof useOnLoad === "function") {
    isFirstLayoutComplete = recyclerViewManager;
    f81150 = () => {
      const elapsedTimeInMs = Date.now() - ref.current;
      requestAnimationFrame(() => {
        elapsedTimeInMs.isFirstPaintOnUiComplete = true;
        if (f81150 != null) {
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
        f81150();
      }
    });
    obj = { isLoaded: tmp3 };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  const tmp2 = _slicedToArray(timestampProducer(false), 2);
};
export { useOnLoad };
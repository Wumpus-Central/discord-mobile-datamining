// === Module 7088: useOnLoad ===

// Module 7088 (useOnLoad)
import _slicedToArray from "_slicedToArray" /* 7041 */;
import noop from "noop" /* 19 */;

const require = fn;
({ useEffect: c3, useMemo: c4, useRef: c5, useState: closure_6 } = noop);
function useOnLoad(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = callback3(false);
  callback2(() => {
    isFirstLayoutComplete = isFirstLayoutComplete.getIsFirstLayoutComplete();
    if (isFirstLayoutComplete) {
      isFirstLayoutComplete = !ref.current;
    }
    if (isFirstLayoutComplete) {
      ref.current = true;
      f79136();
    }
  });
}

export const useOnListLoad = (recyclerViewManager, onLoad) => {
  let _require = recyclerViewManager;
  let f79136 = onLoad;
  let callback = callback3(Date.now());
  [tmp3, closure_3] = callback(callback4(false), 2);
  const dataLength = recyclerViewManager.getDataLength();
  const tmp2 = callback(callback4(false), 2);
  const requestAnimationFrame = _require(f79136[2]).useUnmountAwareAnimationFrame().requestAnimationFrame;
  const items = [dataLength];
  requestAnimationFrame(() => {
    closure_2.current = Date.now();
  }, items);
  if (typeof useOnLoad !== "function") {
    HermesBuiltin.throwTypeError();
  }
  _require = recyclerViewManager;
  f79136 = () => {
    closure_0 = Date.now() - ref.current;
    requestAnimationFrame(() => {
      closure_0.isFirstPaintOnUiComplete = true;
      if (closure_1_1 != null) {
        const obj = { elapsedTimeInMs: null };
        obj[0] = closure_0;
        tmp(obj);
      }
      closure_1_3(true);
    });
  };
  callback = callback3(false);
  callback2(() => {
    isFirstLayoutComplete = isFirstLayoutComplete.getIsFirstLayoutComplete();
    if (isFirstLayoutComplete) {
      isFirstLayoutComplete = !ref.current;
    }
    if (isFirstLayoutComplete) {
      ref.current = true;
      f79136();
    }
  });
  return { isLoaded };
};
export { useOnLoad };
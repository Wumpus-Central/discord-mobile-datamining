// _runtime/metro/05343__.js
import _mod5341 from "05341__.js";
import _slicedToArray from "05296__.js";

require = fn;
const noop = fn(19);
({ useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty, useState: closure_6 } = noop);
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
      f88991();
    }
  });
}

export (recyclerViewManager, onLoad) => {
  let isFirstLayoutComplete = recyclerViewManager;
  let f88991 = onLoad;
  hasOwnProperty(Date.now());
  [tmp3, closure_3] = timestampProducer(false);
  const dataLength = recyclerViewManager.getDataLength();
  const tmp2 = _slicedToArray(timestampProducer(false), 2);
  const requestAnimationFrame = _mod5341.useUnmountAwareAnimationFrame().requestAnimationFrame;
  items = [dataLength];
  React4(() => {
    closure_2.current = Date.now();
  }, items);
  if (typeof useOnLoad === "function") {
    isFirstLayoutComplete = recyclerViewManager;
    f88991 = () => {
      const elapsedTimeInMs = Date.now() - ref.current;
      requestAnimationFrame(() => {
        elapsedTimeInMs.isFirstPaintOnUiComplete = true;
        if (f88991 != null) {
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
        f88991();
      }
    });
    const obj2 = { isLoaded: tmp3 };
    return obj2;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
export { useOnLoad };
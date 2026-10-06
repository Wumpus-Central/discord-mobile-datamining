// _runtime/metro/06396__.js
import _slicedToArray2 from "06394__slicedToArray.js";
import _slicedToArray from "06349__slicedToArray.js";
import react from "../00019_react.js";

let isFirstLayoutComplete;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty, useState: metroRequire } = react);
function useOnLoad(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = hasOwnProperty(false);
  _false(() => {
    isFirstLayoutComplete = isFirstLayoutComplete.getIsFirstLayoutComplete() && !ref.current;
    if (isFirstLayoutComplete) {
      ref.current = true;
      f92235();
    }
  });
}

export const useOnListLoad = (recyclerViewManager, onLoad) => {
  let closure_129_3;
  let tmp3;
  let closure_0 = recyclerViewManager;
  let closure_1 = onLoad;
  let closure_2 = hasOwnProperty(Date.now());
  [tmp3, closure_129_3] = metroRequire(false);
  _slicedToArray(metroRequire(false), 2);
  const dataLength = recyclerViewManager.getDataLength();
  let obj = _slicedToArray2;
  const requestAnimationFrame = obj.useUnmountAwareAnimationFrame().requestAnimationFrame;
  const items = [dataLength];
  React3(() => {
    closure_2.current = Date.now();
  }, items);
  if (typeof useOnLoad === "function") {
    closure_0 = recyclerViewManager;
    const f92235 = () => {
      const elapsedTimeInMs = Date.now() - ref.current;
      const tmp = closure_4(() => {
        elapsedTimeInMs.isFirstPaintOnUiComplete = true;
        if (f92235 != null) {
          const obj = { elapsedTimeInMs };
          tmp(obj);
        }
        closure_2_3(true);
      });
    };
    closure_2 = hasOwnProperty(false);
    _false(() => {
      isFirstLayoutComplete = isFirstLayoutComplete.getIsFirstLayoutComplete() && !ref.current;
      if (isFirstLayoutComplete) {
        ref.current = true;
        f92235();
      }
    });
    return { isLoaded: tmp3 };
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export { useOnLoad };

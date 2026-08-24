// === Module 7088: useOnLoad ===

// Module 7088 (useOnLoad)
import closure_2 from "_slicedToArray" /* 7041 */;
import noop from "noop" /* 19 */;

const require = arg1;
({ useEffect: c3, useMemo: c4, useRef: c5, useState: closure_6 } = noop);
function useOnLoad(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = callback3(false);
  callback2(() => {
    let isFirstLayoutComplete = getDataLength.getIsFirstLayoutComplete();
    if (isFirstLayoutComplete) {
      isFirstLayoutComplete = !ref.current;
    }
    if (isFirstLayoutComplete) {
      ref.current = true;
      f79136();
    }
  });
}

export const useOnListLoad = (getDataLength) => {
  let _require = getDataLength;
  let f79136 = arg1;
  let callback = callback3(Date.now());
  [tmp3, closure_3] = callback(callback4(false), 2);
  const dataLength = getDataLength.getDataLength();
  const tmp = callback3;
  const tmp2 = callback(callback4(false), 2);
  const requestAnimationFrame = _require(f79136[2]).useUnmountAwareAnimationFrame().requestAnimationFrame;
  const items = [dataLength];
  requestAnimationFrame(() => {
    closure_2.current = Date.now();
  }, items);
  if (typeof useOnLoad !== "function") {
    HermesBuiltin.throwTypeError();
  }
  _require = getDataLength;
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
  callback = tmp(false);
  callback2(() => {
    let isFirstLayoutComplete = getDataLength.getIsFirstLayoutComplete();
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
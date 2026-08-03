// === Module 5467: useOnLoad ===

// Module 5467 (useOnLoad)
import _slicedToArray from "_slicedToArray";
import noop from "noop";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ useEffect: c3, useMemo: c4, useRef: c5, useState: closure_6 } = noop);
function useOnLoad(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let _slicedToArray = callback3(false);
  callback2(() => {
    let isFirstLayoutComplete = getDataLength.getIsFirstLayoutComplete();
    if (isFirstLayoutComplete) {
      isFirstLayoutComplete = !ref.current;
    }
    if (isFirstLayoutComplete) {
      ref.current = true;
      f76472();
    }
  });
}

export const useOnListLoad = (getDataLength) => {
  let closure_3;
  let tmp3;
  let _require = getDataLength;
  let f76472 = arg1;
  let callback = callback3(Date.now());
  [tmp3, closure_3] = callback(callback4(false), 2);
  const dataLength = getDataLength.getDataLength();
  const tmp = callback3;
  const tmp2 = callback(callback4(false), 2);
  const requestAnimationFrame = _require(f76472[2]).useUnmountAwareAnimationFrame().requestAnimationFrame;
  const items = [dataLength];
  requestAnimationFrame(() => {
    _slicedToArray.current = Date.now();
  }, items);
  if (typeof useOnLoad !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  _require = getDataLength;
  f76472 = () => {
    let closure_0 = Date.now() - ref.current;
    requestAnimationFrame(() => {
      closure_0.isFirstPaintOnUiComplete = true;
      if (outer1_1 != null) {
        const obj = { elapsedTimeInMs: null };
        obj[0] = closure_0;
        tmp(obj);
      }
      outer1_3(true);
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
      f76472();
    }
  });
  return { isLoaded };
};
export { useOnLoad };
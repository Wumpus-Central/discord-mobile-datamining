// _runtime/05494_memo.js
import noop from "noop";
import "noop";
import { jsx } from "jsxProd";

let c3;
let forwardRef;
let memo;
let obj1;
({ useCallback: obj1, useEffect: c3 } = noop);
({ memo, forwardRef } = noop);
const memoResult = memo(forwardRef((onFocus, ref) => {
  onFocus = onFocus.onFocus;
  const onBlur = onFocus.onBlur;
  const merged = Object.assign(onFocus, Object.create(null));
  let shouldHandleKeyboardEvents;
  let obj = onFocus(onBlur[2]);
  shouldHandleKeyboardEvents = obj.useBottomSheetInternal().shouldHandleKeyboardEvents;
  const items = [onFocus, shouldHandleKeyboardEvents];
  const items1 = [onBlur, shouldHandleKeyboardEvents];
  const items2 = [shouldHandleKeyboardEvents];
  const tmp2 = shouldHandleKeyboardEvents((arg0) => {
    shouldHandleKeyboardEvents.value = true;
    if (onFocus) {
      tmp(arg0);
    }
  }, items);
  callback(() => () => {
    closure_2.value = false;
  }, items2);
  obj = {
    ref,
    onFocus: tmp2,
    onBlur: shouldHandleKeyboardEvents((arg0) => {
      shouldHandleKeyboardEvents.value = false;
      if (onBlur) {
        tmp(arg0);
      }
    }, items1)
  };
  const merged1 = Object.assign(merged);
  return jsx(onFocus(onBlur[3]).TextInput, {
    ref,
    onFocus: tmp2,
    onBlur: shouldHandleKeyboardEvents((arg0) => {
      shouldHandleKeyboardEvents.value = false;
      if (onBlur) {
        tmp(arg0);
      }
    }, items1)
  });
}));
memoResult.displayName = "BottomSheetTextInput";

export default memoResult;
// === Module 7002: ? ===

// Module 7002
import jsxProd from "jsxProd" /* 21 */;
import _mod6703 from "module_6703" /* 6703 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6726 */;
import noop from "module_19" /* 19 */;

({ useCallback: c2, useEffect: c3 } = noop);
({ memo, forwardRef } = noop);
const jsx = jsxProd.jsx;
const memoResult = memo(forwardRef((onFocus, ref) => {
  onFocus = onFocus.onFocus;
  const onBlur = onFocus.onBlur;
  const merged = Object.assign(onFocus, Object.assign({ onFocus: 0, onBlur: 0 }));
  let obj = _mod6703;
  const shouldHandleKeyboardEvents = obj.useBottomSheetInternal().shouldHandleKeyboardEvents;
  const items = [onFocus, shouldHandleKeyboardEvents];
  const items1 = [onBlur, shouldHandleKeyboardEvents];
  const items2 = [shouldHandleKeyboardEvents];
  const tmp2 = React2((arg0) => {
    shouldHandleKeyboardEvents.value = true;
    if (onFocus) {
      tmp(arg0);
    }
  }, items);
  React3(() => () => {
    shouldHandleKeyboardEvents.value = false;
  }, items2);
  obj = {
    ref,
    onFocus: tmp2,
    onBlur: React2((arg0) => {
      shouldHandleKeyboardEvents.value = false;
      if (onBlur) {
        tmp(arg0);
      }
    }, items1)
  };
  const merged1 = Object.assign(merged);
  return jsx(LegacyBaseButton.TextInput, {
    ref,
    onFocus: tmp2,
    onBlur: React2((arg0) => {
      shouldHandleKeyboardEvents.value = false;
      if (onBlur) {
        tmp(arg0);
      }
    }, items1)
  });
}));
memoResult.displayName = "BottomSheetTextInput";

export default memoResult;
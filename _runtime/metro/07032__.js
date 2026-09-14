// === Module 7032: ? ===

// Module 7032
import jsxProd from "jsxProd" /* 21 */;
import _mod6733 from "module_6733" /* 6733 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6756 */;
import noop_mod from "module_19" /* 19 */;

let noop = noop_mod;
({ useCallback: c2, useEffect: c3 } = noop);
({ memo, forwardRef } = noop);
let noop = noop_mod;
const jsx = jsxProd.jsx;
const memoResult = memo(forwardRef((onFocus, ref) => {
  onFocus = onFocus.onFocus;
  const onBlur = onFocus.onBlur;
  const merged = Object.assign(onFocus, Object.assign({ onFocus: 0, onBlur: 0 }));
  const shouldHandleKeyboardEvents = _mod6733.useBottomSheetInternal().shouldHandleKeyboardEvents;
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
  const tmp3 = React2((arg0) => {
    shouldHandleKeyboardEvents.value = false;
    if (onBlur) {
      tmp(arg0);
    }
  }, items1);
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
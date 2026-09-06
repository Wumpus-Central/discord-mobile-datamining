// _runtime/metro/06931__.js
import jsxProd from "../react/00021_jsxProd.js";
import _mod6632 from "06632__.js";
import LegacyBaseButton from "../06655_LegacyBaseButton.js";
import noop from "00019__.js";

({ useCallback: c2, useEffect: c3 } = noop);
({ memo, forwardRef } = noop);
const jsx = jsxProd.jsx;
const memoResult = memo(
  forwardRef((onFocus, ref) => {
    onFocus = onFocus.onFocus;
    const onBlur = onFocus.onBlur;
    const merged = Object.assign(onFocus, Object.assign({ onFocus: 0, onBlur: 0 }));
    let obj = _mod6632;
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
    React3(
      () => () => {
        shouldHandleKeyboardEvents.value = false;
      },
      items2,
    );
    obj = {
      ref,
      onFocus: tmp2,
      onBlur: React2((arg0) => {
        shouldHandleKeyboardEvents.value = false;
        if (onBlur) {
          tmp(arg0);
        }
      }, items1),
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
      }, items1),
    });
  }),
);
memoResult.displayName = "BottomSheetTextInput";

export default memoResult;

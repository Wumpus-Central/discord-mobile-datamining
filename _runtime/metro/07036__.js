// _runtime/metro/07036__.js
import jsxProd from "../react/00021_jsxProd.js";
import _mod6737 from "06737__.js";
import LegacyBaseButton from "../06760_LegacyBaseButton.js";
import noop_mod from "00019__.js";

let noop = noop_mod;
({ useCallback: c2, useEffect: c3 } = noop);
({ memo, forwardRef } = noop);
let noop = noop_mod;
const jsx = jsxProd.jsx;
const memoResult = memo(
  forwardRef((onFocus, ref) => {
    onFocus = onFocus.onFocus;
    const onBlur = onFocus.onBlur;
    const merged = Object.assign(onFocus, Object.assign({ onFocus: 0, onBlur: 0 }));
    const shouldHandleKeyboardEvents = _mod6737.useBottomSheetInternal().shouldHandleKeyboardEvents;
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
      }, items1),
    });
  }),
);
memoResult.displayName = "BottomSheetTextInput";

export default memoResult;

// === Module 6234: useBottomSheetKeyboardHandling ===

// Module 6234 (useBottomSheetKeyboardHandling)
import closure_2 from "noop" /* 19 */;

const require = arg1;
let result = require("set").fileFinishedImporting("design/components/Sheet/native/useBottomSheetKeyboardHandling.tsx");

export default function useBottomSheetKeyboardHandling(onFocus) {
  onFocus = onFocus.onFocus;
  const onBlur = onFocus.onBlur;
  let bottomSheetInternal;
  bottomSheetInternal = onFocus(onBlur[1]).useBottomSheetInternal(true);
  const items = [bottomSheetInternal, onBlur, onFocus];
  return bottomSheetInternal.useMemo(() => {
    if (null == bottomSheetInternal) {
      let obj = { onFocus: null, onBlur: null };
      obj[0] = onFocus;
      obj[1] = onBlur;
    } else {
      obj = { onFocus: null, onBlur: null };
      obj[0] = function onFocus(arg0) {
        const shouldHandleKeyboardEvents = closure_2.shouldHandleKeyboardEvents;
        const result = shouldHandleKeyboardEvents.set(true);
        if (closure_0 != null) {
          tmp2(arg0);
        }
      };
      obj[1] = function onBlur(arg0) {
        const shouldHandleKeyboardEvents = closure_2.shouldHandleKeyboardEvents;
        const result = shouldHandleKeyboardEvents.set(false);
        if (closure_1 != null) {
          tmp2(arg0);
        }
      };
    }
    return obj;
  }, items);
};
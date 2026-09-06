// === Module 6626: useBottomSheetKeyboardHandling ===

// Module 6626 (useBottomSheetKeyboardHandling)
import BottomSheetModal from "BottomSheetModal" /* 6627 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Sheet/native/useBottomSheetKeyboardHandling.tsx");

export default function useBottomSheetKeyboardHandling(onFocus) {
  onFocus = onFocus.onFocus;
  const onBlur = onFocus.onBlur;
  const bottomSheetInternal = BottomSheetModal.useBottomSheetInternal(true);
  const items = [bottomSheetInternal, onBlur, onFocus];
  return noop.useMemo(() => {
    if (null == bottomSheetInternal) {
      let obj = { onFocus, onBlur };
    } else {
      obj = {
        onFocus(arg0) {
            const shouldHandleKeyboardEvents = bottomSheetInternal.shouldHandleKeyboardEvents;
            const result = shouldHandleKeyboardEvents.set(true);
            if (onFocus != null) {
              tmp2(arg0);
            }
          },
        onBlur(arg0) {
            const shouldHandleKeyboardEvents = bottomSheetInternal.shouldHandleKeyboardEvents;
            const result = shouldHandleKeyboardEvents.set(false);
            if (onBlur != null) {
              tmp2(arg0);
            }
          }
      };
    }
    return obj;
  }, items);
};
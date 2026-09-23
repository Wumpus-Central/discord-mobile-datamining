// discord_app/design/components/Sheet/native/useBottomSheetKeyboardHandling.tsx
import BottomSheetModal from "../../../../../_runtime/06955_BottomSheetModal.js";
import noop from "../../../../../_runtime/metro/00019__.js";

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
      const obj2 = { onFocus, onBlur };
      let obj = obj2;
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
        },
      };
    }
    return obj;
  }, items);
}

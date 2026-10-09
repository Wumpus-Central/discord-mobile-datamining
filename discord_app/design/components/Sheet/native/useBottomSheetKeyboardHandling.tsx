// discord_app/design/components/Sheet/native/useBottomSheetKeyboardHandling.tsx
import c from "../../../../../_runtime/00576_c.js";
import BottomSheetModal from "../../../../../_runtime/06305_BottomSheetModal.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Sheet/native/useBottomSheetKeyboardHandling.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useBottomSheetKeyboardHandling(onFocus) {
      const cResult = c.c(12);
      onFocus = onFocus.onFocus;
      const onBlur = onFocus.onBlur;
      const bottomSheetInternal = BottomSheetModal.useBottomSheetInternal(true);
      if (null != bottomSheetInternal) {
        if (cResult[3] === bottomSheetInternal) {
          if (cResult[4] === onFocus) {
            let tmp4 = cResult[5];
          }
          if (cResult[6] === bottomSheetInternal) {
            if (cResult[7] === onBlur) {
              let tmp5 = cResult[8];
            }
            if (cResult[9] === tmp4) {
            }
            const obj3 = { onFocus: tmp4, onBlur: tmp5 };
            cResult[9] = tmp4;
            cResult[10] = tmp5;
            cResult[11] = obj3;
          }
          const fn2 = function t(arg0) {
            const shouldHandleKeyboardEvents = bottomSheetInternal.shouldHandleKeyboardEvents;
            const result = shouldHandleKeyboardEvents.set(false);
            if (onBlur != null) {
              tmp2(arg0);
            }
          };
          cResult[6] = bottomSheetInternal;
          cResult[7] = onBlur;
          cResult[8] = fn2;
          tmp5 = fn2;
        }
        const fn = function n(arg0) {
          const shouldHandleKeyboardEvents = bottomSheetInternal.shouldHandleKeyboardEvents;
          const result = shouldHandleKeyboardEvents.set(true);
          if (onFocus != null) {
            tmp2(arg0);
          }
        };
        cResult[3] = bottomSheetInternal;
        cResult[4] = onFocus;
        cResult[5] = fn;
        tmp4 = fn;
      } else {
        if (cResult[0] === onBlur) {
          if (cResult[1] === onFocus) {
            let tmp3 = cResult[2];
          }
          return tmp3;
        }
        const obj4 = { onFocus, onBlur };
        cResult[0] = onBlur;
        cResult[1] = onFocus;
        cResult[2] = obj4;
        tmp3 = obj4;
      }
    }
  : function useBottomSheetKeyboardHandling(onFocus) {
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
    };

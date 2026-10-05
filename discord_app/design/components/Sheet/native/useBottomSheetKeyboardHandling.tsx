// === Module 6111: useBottomSheetKeyboardHandling ===

// Module 6111 (useBottomSheetKeyboardHandling)
import react2 from "react" /* 576 */;
import BottomSheetModal from "BottomSheetModal" /* 6112 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onFocus;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((onFocus) => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(12);
  onFocus = onFocus.onFocus;
  const onBlur = onFocus.onBlur;
  const obj2 = BottomSheetModal;
  const bottomSheetInternal = obj2.useBottomSheetInternal(true);
  if (null != bottomSheetInternal) {
    if (cResult[3] === bottomSheetInternal) {
      let tmp4;
      if (cResult[4] === onFocus) {
        tmp4 = cResult[5];
      }
      if (cResult[6] === bottomSheetInternal) {
        let tmp5;
        if (cResult[7] === onBlur) {
          tmp5 = cResult[8];
        }
        if (cResult[9] === tmp4) {
          let tmp6;
          if (cResult[10] === tmp5) {
            tmp6 = cResult[11];
          }
          tmp3 = tmp6;
        }
        const obj3 = { onFocus: tmp4, onBlur: tmp5 };
        cResult[9] = tmp4;
        cResult[10] = tmp5;
        cResult[11] = obj3;
        tmp6 = obj3;
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
    const fn = function o(arg0) {
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
        tmp3 = cResult[2];
      }
    }
    const obj4 = { onFocus, onBlur };
    cResult[0] = onBlur;
    cResult[1] = onFocus;
    cResult[2] = obj4;
    tmp3 = obj4;
  }
  return tmp3;
}) : ((onFocus) => {
  onFocus = onFocus.onFocus;
  const onBlur = onFocus.onBlur;
  let obj = BottomSheetModal;
  const bottomSheetInternal = obj.useBottomSheetInternal(true);
  const items = [bottomSheetInternal, onBlur, onFocus];
  return react.useMemo(() => {
    let obj;
    if (null == bottomSheetInternal) {
      obj = { onFocus, onBlur };
      const obj2 = { onFocus, onBlur };
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
});
let result = size.fileFinishedImporting("design/components/Sheet/native/useBottomSheetKeyboardHandling.tsx");

export default tmp2;
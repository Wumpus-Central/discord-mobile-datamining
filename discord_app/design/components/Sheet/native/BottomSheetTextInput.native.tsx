// === Module 9157: BottomSheetTextInput ===

// Module 9157 (BottomSheetTextInput)
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("design/components/Sheet/native/BottomSheetTextInput.native.tsx");

export const BottomSheetTextInput = function BottomSheetTextInput(ref) {
  ref = ref.ref;
  ({ onFocus, onBlur } = ref);
  ref = undefined;
  const merged = Object.assign(ref, Object.create(null));
  ref = React.useRef(null);
  ({ onFocus: onFocus2, onBlur: onBlur2 } = ref(6114)({ onFocus, onBlur }));
  let obj = ref(6112);
  const keyboardBlurring = obj.useKeyboardBlurring(ref);
  obj = {
    ref(current) {
      ref.current = current;
      if (typeof ref === "function") {
        tmp(current);
      } else if (null != tmp) {
        tmp.current = current;
      }
    },
    onFocus: onFocus2,
    onBlur: onBlur2
  };
  const tmp3 = ref(6114)({ onFocus, onBlur });
  const merged1 = Object.assign(merged);
  return jsx(ref(9158), {
    ref(current) {
      ref.current = current;
      if (typeof ref === "function") {
        tmp(current);
      } else if (null != tmp) {
        tmp.current = current;
      }
    },
    onFocus: onFocus2,
    onBlur: onBlur2
  });
};
// === Module 9756: BottomSheetTextInput ===

// Module 9756 (BottomSheetTextInput)
import NativeTextInput from "NativeTextInput" /* 6624 */;
import useBottomSheetKeyboardHandlingDefault from "useBottomSheetKeyboardHandling" /* 6626 */;
import TextInput_TextInputDefault from "TextInput/TextInput" /* 9757 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheetTextInput.native.tsx");

export const BottomSheetTextInput = function BottomSheetTextInput(ref) {
  ref = ref.ref;
  ({ onFocus, onBlur } = ref);
  ref = undefined;
  const merged = Object.assign(ref, Object.assign({ onFocus: 0, onBlur: 0, ref: 0 }));
  ref = noop.useRef(null);
  ({ onFocus: onFocus2, onBlur: onBlur2 } = useBottomSheetKeyboardHandlingDefault({ onFocus, onBlur }));
  let obj = NativeTextInput;
  const keyboardBlurring = obj.useKeyboardBlurring(ref);
  obj = {
    ref(current) {
      ref.current = current;
      if (typeof ref === "function") {
        ref(current);
      } else if (null != ref) {
        ref.current = current;
      }
    },
    onFocus: onFocus2,
    onBlur: onBlur2
  };
  const tmp3 = useBottomSheetKeyboardHandlingDefault({ onFocus, onBlur });
  const merged1 = Object.assign(merged);
  return jsx(TextInput_TextInputDefault, {
    ref(current) {
      ref.current = current;
      if (typeof ref === "function") {
        ref(current);
      } else if (null != ref) {
        ref.current = current;
      }
    },
    onFocus: onFocus2,
    onBlur: onBlur2
  });
};
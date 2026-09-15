// === Module 9888: BottomSheetTextInput ===

// Module 9888 (BottomSheetTextInput)
import NativeTextInput from "NativeTextInput" /* 6729 */;
import useBottomSheetKeyboardHandlingDefault from "useBottomSheetKeyboardHandling" /* 6731 */;
import TextInput_TextInputDefault from "TextInput/TextInput" /* 9889 */;
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
  const tmp3 = useBottomSheetKeyboardHandlingDefault({ onFocus, onBlur });
  const keyboardBlurring = NativeTextInput.useKeyboardBlurring(ref);
  const obj2 = {
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
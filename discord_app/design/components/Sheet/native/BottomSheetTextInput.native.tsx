// discord_app/design/components/Sheet/native/BottomSheetTextInput.native.tsx
import NativeTextInput from "../../Input/native/NativeTextInput.native.tsx";
import useBottomSheetKeyboardHandlingDefault from "useBottomSheetKeyboardHandling.tsx";
import TextInput_TextInputDefault from "../../../void/TextInput/native/TextInput.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
        tmp(current);
      } else if (null != tmp) {
        tmp.current = current;
      }
    },
    onFocus: onFocus2,
    onBlur: onBlur2,
  };
  const tmp3 = useBottomSheetKeyboardHandlingDefault({ onFocus, onBlur });
  const merged1 = Object.assign(merged);
  return jsx(TextInput_TextInputDefault, {
    ref(current) {
      ref.current = current;
      if (typeof ref === "function") {
        tmp(current);
      } else if (null != tmp) {
        tmp.current = current;
      }
    },
    onFocus: onFocus2,
    onBlur: onBlur2,
  });
};

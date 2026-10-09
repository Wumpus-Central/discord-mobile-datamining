// === Module 8610: BottomSheetTextInput ===

// Module 8610 (BottomSheetTextInput)
import c from "c" /* 576 */;
import NativeTextInput from "NativeTextInput" /* 6302 */;
import useBottomSheetKeyboardHandlingDefault from "useBottomSheetKeyboardHandling" /* 6304 */;
import TextInput_TextInputDefault from "TextInput/TextInput" /* 8611 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["onFocus", "onBlur", "ref"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheetTextInput.native.tsx");

export const BottomSheetTextInput = ReactCompilerGating.isReactCompilerEnabled() ? (function BottomSheetTextInput(arg0) {
  const cResult = c.c(15);
  if (cResult[0] !== arg0) {
    ({ onFocus, onBlur, ref } = arg0);
    closure_0 = ref;
    const tmp10 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = onBlur;
    cResult[2] = onFocus;
    cResult[3] = tmp10;
    cResult[4] = ref;
    let tmp6 = tmp10;
    let tmp5 = onFocus;
    let tmp4 = onBlur;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    closure_0 = cResult[4];
  }
  if (cResult[5] === tmp4) {
    if (cResult[6] === tmp5) {
      let tmp12 = cResult[7];
    }
    ({ onFocus: onFocus2, onBlur: onBlur2 } = useBottomSheetKeyboardHandlingDefault(tmp12));
    const tmp14 = useBottomSheetKeyboardHandlingDefault(tmp12);
    const keyboardBlurring = NativeTextInput.useKeyboardBlurring(ref1);
    if (cResult[8] !== ref) {
      const fn = function h(current) {
        ref1.current = current;
        if (typeof closure_0 === "function") {
          closure_0(current);
        } else if (null != closure_0) {
          closure_0.current = current;
        }
      };
      cResult[8] = ref;
      cResult[9] = fn;
      let tmp16 = fn;
    } else {
      tmp16 = cResult[9];
    }
    if (cResult[10] === onBlur2) {
      if (cResult[11] === onFocus2) {
        if (cResult[12] === tmp6) {
          if (cResult[13] === tmp16) {
            let tmp17 = cResult[14];
          }
          return tmp17;
        }
      }
    }
    const obj2 = { ref: tmp16, onFocus: onFocus2, onBlur: onBlur2 };
    const tmpResult = NativeTextInput;
    const merged = Object.assign(tmp6);
    const tmp23 = jsx(TextInput_TextInputDefault, { ref: tmp16, onFocus: onFocus2, onBlur: onBlur2 });
    cResult[10] = onBlur2;
    cResult[11] = onFocus2;
    cResult[12] = tmp6;
    cResult[13] = tmp16;
    cResult[14] = tmp23;
    tmp17 = tmp23;
    const tmp13Result = TextInput_TextInputDefault;
  }
  const obj3 = { onFocus: tmp5, onBlur: tmp4 };
  cResult[5] = tmp4;
  cResult[6] = tmp5;
  cResult[7] = obj3;
  tmp12 = obj3;
  ref1 = noop.useRef(null);
}) : (function BottomSheetTextInput(ref) {
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
});
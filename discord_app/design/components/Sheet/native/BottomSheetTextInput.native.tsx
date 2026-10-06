// === Module 9271: Sheet/BottomSheetTextInput ===

// Module 9271 (Sheet/BottomSheetTextInput)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import NativeTextInput from "NativeTextInput" /* 6116 */;
import useBottomSheetKeyboardHandlingDefault from "useBottomSheetKeyboardHandling" /* 6118 */;
import void_TextInput_TextInputDefault from "void/TextInput/TextInput" /* 9272 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = ["onFocus", "onBlur", "ref"];
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let onBlur;
  let onBlur2;
  let onFocus;
  let onFocus2;
  let ref;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(15);
  if (cResult[0] !== arg0) {
    ({ onFocus, onBlur, ref } = arg0);
    let closure_0 = ref;
    const tmp10 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = onBlur;
    cResult[2] = onFocus;
    cResult[3] = tmp10;
    cResult[4] = ref;
    tmp6 = tmp10;
    tmp5 = onFocus;
    tmp4 = onBlur;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    closure_0 = cResult[4];
  }
  const ref1 = react.useRef(null);
  if (cResult[5] === tmp4) {
    let tmp12;
    let tmp16;
    if (cResult[6] === tmp5) {
      tmp12 = cResult[7];
    }
    ({ onFocus: onFocus2, onBlur: onBlur2 } = useBottomSheetKeyboardHandlingDefault(tmp12));
    useBottomSheetKeyboardHandlingDefault(tmp12);
    const tmpResult = NativeTextInput;
    const keyboardBlurring = tmpResult.useKeyboardBlurring(ref1);
    if (cResult[8] !== ref) {
      const fn = function y(current) {
        ref1.current = current;
        if (typeof closure_0 === "function") {
          closure_0(current);
        } else if (null != closure_0) {
          closure_0.current = current;
        }
      };
      cResult[8] = ref;
      cResult[9] = fn;
      tmp16 = fn;
    } else {
      tmp16 = cResult[9];
    }
    if (cResult[10] === onBlur2) {
      if (cResult[11] === onFocus2) {
        if (cResult[12] === tmp6) {
          let tmp17;
          if (cResult[13] === tmp16) {
            tmp17 = cResult[14];
          }
          return tmp17;
        }
      }
    }
    void_TextInput_TextInputDefault;
    const merged = Object.assign(tmp6);
    const tmp23 = <tmp13Result ref={tmp16} onFocus={onFocus2} onBlur={onBlur2} />;
    cResult[10] = onBlur2;
    cResult[11] = onFocus2;
    cResult[12] = tmp6;
    cResult[13] = tmp16;
    cResult[14] = tmp23;
    tmp17 = tmp23;
  }
  const obj3 = { onFocus: tmp5, onBlur: tmp4 };
  cResult[5] = tmp4;
  cResult[6] = tmp5;
  cResult[7] = obj3;
  tmp12 = obj3;
}) : ((ref) => {
  let onBlur;
  let onBlur2;
  let onFocus;
  let onFocus2;
  ref = ref.ref;
  ({ onFocus, onBlur } = ref);
  ref = undefined;
  const merged = Object.assign(ref, Object.assign({ onFocus: 0, onBlur: 0, ref: 0 }));
  ref = react.useRef(null);
  ({ onFocus: onFocus2, onBlur: onBlur2 } = useBottomSheetKeyboardHandlingDefault({ onFocus, onBlur }));
  const tmp3 = useBottomSheetKeyboardHandlingDefault({ onFocus, onBlur });
  const obj = NativeTextInput;
  const keyboardBlurring = obj.useKeyboardBlurring(ref);
  void_TextInput_TextInputDefault;
  const merged1 = Object.assign(merged);
  return <tmp5 ref={function ref(current) {
    ref.current = current;
    if (typeof ref === "function") {
      ref(current);
    } else if (null != ref) {
      ref.current = current;
    }
  }} onFocus={onFocus2} onBlur={onBlur2} />;
});
const result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheetTextInput.native.tsx");

export const BottomSheetTextInput = tmp2;
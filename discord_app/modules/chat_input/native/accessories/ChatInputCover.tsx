// === Module 11883: ChatInputCover ===

// Module 11883 (ChatInputCover)
import Fragment from "Fragment" /* 21 */;
import KeyboardTypes from "KeyboardTypes" /* 1616 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let react = react_mod;
({ StyleSheet: c3, TouchableWithoutFeedback: closure_4, View: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((onSelectKeyboard, arg1) => {
  let closure_2;
  let enabled;
  let keyboardType;
  let obj = keyboardType(onSelectKeyboard[4]);
  const cResult = obj.c(13);
  ({ enabled, keyboardType } = onSelectKeyboard);
  onSelectKeyboard = onSelectKeyboard.onSelectKeyboard;
  let tmp4 = undefined === enabled || enabled;
  react = tmp4;
  const tmpResult = keyboardType(onSelectKeyboard[5]);
  const isScreenReaderEnabled = tmpResult.useIsScreenReaderEnabled();
  if (cResult[0] === tmp4) {
    if (cResult[1] === isScreenReaderEnabled) {
      if (cResult[2] === keyboardType) {
        let tmp6;
        let tmp7;
        if (cResult[3] === onSelectKeyboard) {
          tmp6 = cResult[4];
        }
        if (cResult[5] !== onSelectKeyboard) {
          const fn2 = function c() {
            const obj = { type: KeyboardTypes.KeyboardTypes.SYSTEM };
            onSelectKeyboard(obj);
          };
          cResult[5] = onSelectKeyboard;
          cResult[6] = fn2;
          tmp7 = fn2;
        } else {
          tmp7 = cResult[6];
        }
        if (cResult[7] === tmp6) {
          let tmp8;
          if (cResult[8] === tmp7) {
            tmp8 = cResult[9];
          }
          const openSystemKeyboard = tmp8.openSystemKeyboard;
          const imperativeHandle = react.useImperativeHandle(arg1, tmp8.imperativeHandle);
          if (tmp4) {
            tmp4 = keyboardType !== keyboardType(tmp2[6]).KeyboardTypes.SYSTEM;
          }
          if (tmp4) {
            tmp4 = !isScreenReaderEnabled;
          }
          if (cResult[10] === tmp4) {
            let tmp12;
            if (cResult[11] === openSystemKeyboard) {
              tmp12 = cResult[12];
            }
            return tmp12;
          }
          let tmp13 = null;
          if (tmp4) {
            tmp13 = <closure_4 accessible={false} accessibilityRole="none" onPress={openSystemKeyboard}>{null}</closure_4>;
          }
          cResult[10] = tmp4;
          cResult[11] = openSystemKeyboard;
          cResult[12] = tmp13;
          tmp12 = tmp13;
        }
        const obj4 = { imperativeHandle: tmp6, openSystemKeyboard: tmp7 };
        cResult[7] = tmp6;
        cResult[8] = tmp7;
        cResult[9] = obj4;
        tmp8 = obj4;
      }
    }
  }
  const fn = function b() {
    let obj = {
      focused(arg0) {
        const tmp = closure_1_2 && arg0 && closure_1_0 !== keyboardType(onSelectKeyboard[6]).KeyboardTypes.SYSTEM && isScreenReaderEnabled;
        if (tmp) {
          const obj = { type: keyboardType(onSelectKeyboard[6]).KeyboardTypes.SYSTEM };
          closure_1_1(obj);
        }
      }
    };
    return obj;
  };
  cResult[0] = tmp4;
  cResult[1] = isScreenReaderEnabled;
  cResult[2] = keyboardType;
  cResult[3] = onSelectKeyboard;
  cResult[4] = fn;
  tmp6 = fn;
}) : ((enabled, arg1) => {
  let flag = enabled.enabled;
  if (flag === undefined) {
    flag = true;
  }
  const keyboardType = enabled.keyboardType;
  const onSelectKeyboard = enabled.onSelectKeyboard;
  let tmp = flag;
  let obj = flag(keyboardType[5]);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const items = [flag, isScreenReaderEnabled, keyboardType, onSelectKeyboard];
  const memo = onSelectKeyboard.useMemo(() => {
    let obj = {
      imperativeHandle() {
        let obj = {
          focused(arg0) {
            const tmp = closure_1_0 && arg0 && closure_1_1 !== flag(keyboardType[6]).KeyboardTypes.SYSTEM && closure_1_3;
            if (tmp) {
              const obj = { type: flag(keyboardType[6]).KeyboardTypes.SYSTEM };
              closure_1_2(obj);
            }
          }
        };
        return obj;
      },
      openSystemKeyboard() {
        const obj = { type: flag(keyboardType[6]).KeyboardTypes.SYSTEM };
        onSelectKeyboard(obj);
      }
    };
    return obj;
  }, items);
  const openSystemKeyboard = memo.openSystemKeyboard;
  const imperativeHandle = onSelectKeyboard.useImperativeHandle(arg1, memo.imperativeHandle);
  let tmp6 = null;
  const tmp2 = keyboardType;
  if (flag) {
    tmp6 = null;
    if (keyboardType !== tmp(tmp2[6]).KeyboardTypes.SYSTEM) {
      tmp6 = null;
      if (!isScreenReaderEnabled) {
        tmp6 = <closure_4 accessible={false} accessibilityRole="none" onPress={openSystemKeyboard}>{null}</closure_4>;
      }
    }
  }
  return tmp6;
}));
forwardRefResult.displayName = "ChatInputCover";
const memoResult = react.memo(forwardRefResult);
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputCover.tsx");

export default memoResult;
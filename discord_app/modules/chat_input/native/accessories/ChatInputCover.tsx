// === Module 12043: ChatInputCover ===

// Module 12043 (ChatInputCover)
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
({ StyleSheet: c3, TouchableWithoutFeedback: c4, View: c5 } = get_ActivityIndicator);
const forwardRefResult = importAllResult.forwardRef((enabled, ref) => {
  let flag = enabled.enabled;
  if (flag === undefined) {
    flag = true;
  }
  const keyboardType = enabled.keyboardType;
  const onSelectKeyboard = enabled.onSelectKeyboard;
  let isScreenReaderEnabled;
  let obj = flag(keyboardType[3]);
  isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const items = [flag, isScreenReaderEnabled, keyboardType, onSelectKeyboard];
  const memo = onSelectKeyboard.useMemo(() => ({
    imperativeHandle() {
      return {
        focused(controlsSpecs, arg1) {
          let tmp = closure_0;
          if (closure_0) {
            tmp = controlsSpecs;
          }
          if (tmp) {
            tmp = closure_1 !== closure_1_0(closure_1_1[4]).KeyboardTypes.SYSTEM;
          }
          if (tmp) {
            tmp = closure_3;
          }
          if (tmp) {
            const obj = { type: null };
            obj[0] = closure_1_0(closure_1_1[4]).KeyboardTypes.SYSTEM;
            callback(obj);
          }
        }
      };
    },
    openSystemKeyboard() {
      callback({ type: closure_1_0(closure_1_1[4]).KeyboardTypes.SYSTEM });
    }
  }), items);
  const imperativeHandle = onSelectKeyboard.useImperativeHandle(ref, memo.imperativeHandle);
  let tmp6 = null;
  if (flag) {
    tmp6 = null;
    if (keyboardType !== flag(keyboardType[4]).KeyboardTypes.SYSTEM) {
      tmp6 = null;
      if (!isScreenReaderEnabled) {
        obj = { accessible: false, accessibilityRole: "none", onPress: null, children: null };
        obj[2] = memo.openSystemKeyboard;
        obj = { style: null };
        obj[0] = isScreenReaderEnabled.absoluteFill;
        obj[3] = <closure_5 style={null} />;
        tmp6 = <closure_4 style={null} />;
      }
    }
  }
  return tmp6;
});
forwardRefResult.displayName = "ChatInputCover";
const memoResult = importAllResult.memo(forwardRefResult);
const result = require("set").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputCover.tsx");

export default memoResult;
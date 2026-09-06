// === Module 12253: ChatInputCover ===

// Module 12253 (ChatInputCover)
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, TouchableWithoutFeedback: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const forwardRefResult = noop.forwardRef((enabled, arg1) => {
  let flag = enabled.enabled;
  if (flag === undefined) {
    flag = true;
  }
  const keyboardType = enabled.keyboardType;
  const onSelectKeyboard = enabled.onSelectKeyboard;
  let obj = flag(keyboardType[3]);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const items = [flag, isScreenReaderEnabled, keyboardType, onSelectKeyboard];
  const memo = onSelectKeyboard.useMemo(() => ({
    imperativeHandle() {
      return {
        focused(controlsSpecs) {
          let tmp = closure_1_0;
          if (closure_1_0) {
            tmp = controlsSpecs;
          }
          if (tmp) {
            tmp = dependencyMap !== flag(1609).KeyboardTypes.SYSTEM;
          }
          if (tmp) {
            tmp = closure_1_3;
          }
          if (tmp) {
            const obj = { type: flag(1609).KeyboardTypes.SYSTEM };
            closure_1_2(obj);
          }
        }
      };
    },
    openSystemKeyboard() {
      onSelectKeyboard({ type: flag(keyboardType[4]).KeyboardTypes.SYSTEM });
    }
  }), items);
  const imperativeHandle = onSelectKeyboard.useImperativeHandle(arg1, memo.imperativeHandle);
  let tmp6 = null;
  if (flag) {
    tmp6 = null;
    if (keyboardType !== flag(keyboardType[4]).KeyboardTypes.SYSTEM) {
      tmp6 = null;
      if (!isScreenReaderEnabled) {
        obj = { accessible: false, accessibilityRole: "none", onPress: memo.openSystemKeyboard, children: null };
        obj = { style: isScreenReaderEnabled.absoluteFill };
        obj.children = <closure_5 style={isScreenReaderEnabled.absoluteFill} />;
        tmp6 = <closure_4 style={isScreenReaderEnabled.absoluteFill} />;
      }
    }
  }
  return tmp6;
});
forwardRefResult.displayName = "ChatInputCover";
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputCover.tsx");

export default noop.memo(forwardRefResult);
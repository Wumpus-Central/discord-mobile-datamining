// === Module 13761: ChatInputCover ===

// Module 13761 (ChatInputCover)
import noop from "module_19" /* 19 */;

const require = fn;
class ChatInputCover {
  constructor(arg0) {
    flag = global.enabled;
    if (flag === undefined) {
      flag = true;
    }
    c0 = flag;
    keyboardType = global.keyboardType;
    onSelectKeyboard = global.onSelectKeyboard;
    closure_3 = undefined;
    tmp = c0;
    tmp2 = keyboardType;
    obj = c0(keyboardType[3]);
    isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
    closure_3 = isScreenReaderEnabled;
    items = [, , , ];
    items[0] = flag;
    items[1] = isScreenReaderEnabled;
    items[2] = keyboardType;
    items[3] = onSelectKeyboard;
    memo = onSelectKeyboard.useMemo(() => ({
      imperativeHandle() {
        return {
          focused(controlsSpecs) {
            let tmp = closure_1_0;
            if (closure_1_0) {
              tmp = controlsSpecs;
            }
            if (tmp) {
              tmp = dependencyMap !== flag(1624).KeyboardTypes.SYSTEM;
            }
            if (tmp) {
              tmp = closure_1_3;
            }
            if (tmp) {
              const obj = { type: flag(1624).KeyboardTypes.SYSTEM };
              closure_1_2(obj);
            }
          }
        };
      },
      openSystemKeyboard() {
        onSelectKeyboard({ type: flag(keyboardType[4]).KeyboardTypes.SYSTEM });
      }
    }), items);
    imperativeHandle = onSelectKeyboard.useImperativeHandle(global.ref, memo.imperativeHandle);
    tmp6 = null;
    if (flag) {
      tmp6 = null;
      if (keyboardType !== tmp(tmp2[4]).KeyboardTypes.SYSTEM) {
        tmp6 = null;
        if (!isScreenReaderEnabled) {
          tmp7 = jsx;
          tmp8 = TouchableWithoutFeedback;
          obj1 = { accessible: false, accessibilityRole: "none", onPress: null, children: null };
          obj1.onPress = memo.openSystemKeyboard;
          tmp9 = View;
          obj4 = { style: null };
          tmp10 = closure_3;
          obj4.style = closure_3.absoluteFill;
          obj1.children = jsx(View, obj4);
          tmp6 = jsx(TouchableWithoutFeedback, obj1);
        }
      }
    }
    return tmp6;
  }
}
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, TouchableWithoutFeedback: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
ChatInputCover.displayName = "ChatInputCover";
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputCover.tsx");

export default noop.memo(ChatInputCover);
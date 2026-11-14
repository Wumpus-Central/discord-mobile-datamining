// === Module 14846: useChatInputKeyboardOffset ===

// Module 14846 (useChatInputKeyboardOffset)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import KeyboardTypes from "KeyboardTypes" /* 1628 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import KeyboardChatScrollView from "KeyboardChatScrollView" /* 1644 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 5503 */;
import useToken from "useToken" /* 5902 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 5914 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/chat_input/native/useChatInputKeyboardOffset.tsx");

export default function useChatInputKeyboardOffset() {
  const keyboardState = KeyboardChatScrollView.useKeyboardState((height) => height.height);
  let tmp4 = useCustomKeyboardHeightDefault();
  const tmp5 = useKeyboardTypeDefault();
  const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  if (obj3.isIOS()) {
    if (tmp5 === KeyboardTypes.KeyboardTypes.SYSTEM) {
      tmp4 = keyboardState;
    }
    const _Math = Math;
    const _Math2 = Math;
    return Math.max(0, tmp4 - Math.max(useSafeAreaInsetsDefault().bottom, token));
  } else {
    return 0;
  }
  obj3 = PlatformUtils;
};
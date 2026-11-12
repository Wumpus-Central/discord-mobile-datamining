// === Module 14733: useChatInputKeyboardOffset ===

// Module 14733 (useChatInputKeyboardOffset)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import KeyboardTypes from "KeyboardTypes" /* 1625 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import KeyboardChatScrollView from "KeyboardChatScrollView" /* 1641 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 5440 */;
import useToken from "useToken" /* 5839 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 5851 */;
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
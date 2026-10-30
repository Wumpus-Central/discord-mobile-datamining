// === Module 13944: useChatInputKeyboardOffset ===

// Module 13944 (useChatInputKeyboardOffset)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import KeyboardTypes from "KeyboardTypes" /* 1624 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import KeyboardChatScrollView from "KeyboardChatScrollView" /* 1640 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 5204 */;
import useToken from "useToken" /* 5591 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 5605 */;
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
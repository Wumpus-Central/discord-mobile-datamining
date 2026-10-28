// === Module 13564: useChatInputKeyboardOffset ===

// Module 13564 (useChatInputKeyboardOffset)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import KeyboardTypes from "KeyboardTypes" /* 1628 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import KeyboardChatScrollView from "KeyboardChatScrollView" /* 1644 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 5197 */;
import useToken from "useToken" /* 5288 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 5632 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/chat_input/native/useChatInputKeyboardOffset.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useChatInputKeyboardOffset() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(height) {
      return height.height;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const keyboardState = KeyboardChatScrollView.useKeyboardState(first);
  let tmp6 = useCustomKeyboardHeightDefault();
  const tmpResult = KeyboardChatScrollView;
  const tmp7 = useKeyboardTypeDefault();
  const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  const tmpResult3 = useToken;
  if (tmpResult4.isIOS()) {
    if (tmp7 === KeyboardTypes.KeyboardTypes.SYSTEM) {
      tmp6 = keyboardState;
    }
    const _Math = Math;
    const _Math2 = Math;
    return Math.max(0, tmp6 - Math.max(useSafeAreaInsetsDefault().bottom, token));
  } else {
    return 0;
  }
  tmpResult4 = PlatformUtils;
}) : (function useChatInputKeyboardOffset() {
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
});
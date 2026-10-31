// discord_app/modules/chat_input/native/useChatInputKeyboardOffset.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import KeyboardChatScrollView from "../../../../_runtime/01639_KeyboardChatScrollView.js";
import useKeyboardTypeDefault from "../../keyboard/native/useKeyboardType.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import useCustomKeyboardHeightDefault from "../../keyboard/native/useCustomKeyboardHeight.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
}

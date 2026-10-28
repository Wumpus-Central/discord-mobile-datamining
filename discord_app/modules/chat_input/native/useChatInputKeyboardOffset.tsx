// discord_app/modules/chat_input/native/useChatInputKeyboardOffset.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import KeyboardChatScrollView from "../../../../_runtime/01644_KeyboardChatScrollView.js";
import useKeyboardTypeDefault from "../../keyboard/native/useKeyboardType.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import useCustomKeyboardHeightDefault from "../../keyboard/native/useCustomKeyboardHeight.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/chat_input/native/useChatInputKeyboardOffset.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useChatInputKeyboardOffset() {
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
    }
  : function useChatInputKeyboardOffset() {
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

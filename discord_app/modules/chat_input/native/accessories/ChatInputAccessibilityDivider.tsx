// discord_app/modules/chat_input/native/accessories/ChatInputAccessibilityDivider.tsx
import SCREEN_READER_ENABLED_GETTER from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = arg1;
({ StyleSheet: obj1, View: c3 } = get_ActivityIndicator);
const memoResult = importAllResult.memo(() => {
  let obj = SCREEN_READER_ENABLED_GETTER;
  let tmp3 = null;
  if (obj.useIsScreenReaderEnabled()) {
    tmp3 = null;
    if (!tmpResult.isAndroid()) {
      obj = { nativeID: "chat-input-accessibility-divider", accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null };
      const intl = tmp(1236).intl;
      obj[2] = intl.string(tmp(1236).t["uKZtC/"]);
      const items = [absoluteFill.absoluteFill, { height: 1 }];
      obj[4] = items;
      tmp3 = <closure_3 nativeID="chat-input-accessibility-divider" accessible accessibilityLabel={null} accessibilityRole="header" style={null} />;
    }
    tmpResult = tmp(500);
  }
  return tmp3;
});
const result = require("set").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputAccessibilityDivider.tsx");

export const ChatInputAccessibilityDivider = memoResult;
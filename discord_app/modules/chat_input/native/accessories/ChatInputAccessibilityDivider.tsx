// === Module 12058: ChatInputAccessibilityDivider ===

// Module 12058 (ChatInputAccessibilityDivider)
import SCREEN_READER_ENABLED_GETTER from "SCREEN_READER_ENABLED_GETTER" /* 4916 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
({ StyleSheet: obj1, View: c3 } = get_ActivityIndicator);
const memoResult = importAllResult.memo(() => {
  let obj = SCREEN_READER_ENABLED_GETTER;
  let tmp3 = null;
  if (obj.useIsScreenReaderEnabled()) {
    tmp3 = null;
    if (!tmpResult.isAndroid()) {
      obj = { nativeID: "chat-input-accessibility-divider", accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null };
      const intl = tmp(1233).intl;
      obj[2] = intl.string(tmp(1233).t["uKZtC/"]);
      const items = [absoluteFill.absoluteFill, { height: 1 }];
      obj[4] = items;
      tmp3 = <closure_3 nativeID="chat-input-accessibility-divider" accessible accessibilityLabel={null} accessibilityRole="header" style={null} />;
    }
    tmpResult = tmp(1234);
  }
  return tmp3;
});
const result = require("set").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputAccessibilityDivider.tsx");

export const ChatInputAccessibilityDivider = memoResult;
// === Module 11436: ChatInputAccessibilityDivider ===

// Module 11436 (ChatInputAccessibilityDivider)
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import importAllResult from "noop";

let c3;
let obj1;
const require = arg1;
({ StyleSheet: obj1, View: c3 } = get_ActivityIndicator);
const memoResult = require("noop").memo(() => {
  let obj = require(4590) /* SCREEN_READER_ENABLED_GETTER */;
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
const result = require("jsxProd").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputAccessibilityDivider.tsx");

export const ChatInputAccessibilityDivider = memoResult;
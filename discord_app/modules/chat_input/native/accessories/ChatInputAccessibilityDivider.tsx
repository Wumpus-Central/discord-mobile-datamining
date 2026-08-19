// discord_app/modules/chat_input/native/accessories/ChatInputAccessibilityDivider.tsx
import obj132 from "../../../../utils/PlatformUtils.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import SCREEN_READER_ENABLED_GETTER from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = fn;
({ StyleSheet: obj1, View: c3 } = get_ActivityIndicator);
const memoResult = importAllResult.memo(() => {
  let obj = SCREEN_READER_ENABLED_GETTER;
  let tmp3 = null;
  if (obj.useIsScreenReaderEnabled()) {
    tmp3 = null;
    if (!tmpResult.isAndroid()) {
      obj = { nativeID: "chat-input-accessibility-divider", accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null };
      const intl = getSystemLocale.intl;
      obj[2] = intl.string(getSystemLocale.t["uKZtC/"]);
      const items = [absoluteFill.absoluteFill, { height: 1 }];
      obj[4] = items;
      tmp3 = <closure_3 nativeID="chat-input-accessibility-divider" accessible accessibilityLabel={null} accessibilityRole="header" style={null} />;
    }
    tmpResult = obj132;
  }
  return tmp3;
});
const result = require("obj132").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputAccessibilityDivider.tsx");

export const ChatInputAccessibilityDivider = memoResult;
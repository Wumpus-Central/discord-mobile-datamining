// === Module 12262: ChatInputAccessibilityDivider ===

// Module 12262 (ChatInputAccessibilityDivider)
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 4962 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c2, View: c3 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputAccessibilityDivider.tsx");

export const ChatInputAccessibilityDivider = noop.memo(() => {
  let obj = useIsScreenReaderEnabled;
  let tmp3 = null;
  if (obj.useIsScreenReaderEnabled()) {
    tmp3 = null;
    if (!tmpResult.isAndroid()) {
      obj = { nativeID: "chat-input-accessibility-divider", accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null };
      const intl = tmp(1114).intl;
      obj.accessibilityLabel = intl.string(tmp(1114).t["uKZtC/"]);
      const items = [absoluteFill.absoluteFill, { height: 1 }];
      obj.style = items;
      tmp3 = <React3 nativeID="chat-input-accessibility-divider" accessible accessibilityLabel={null} accessibilityRole="header" style={null} />;
    }
    tmpResult = tmp(1115);
  }
  return tmp3;
});
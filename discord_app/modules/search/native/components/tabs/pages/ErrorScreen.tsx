// === Module 16454: ? ===

// Module 16454
import Text from "Text" /* 4474 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5602 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
let c3 = importAllResult;
let closure_6 = createCacheKey.createStyles({ container: { justifyContent: "center", alignItems: "center", height: "100%", display: "flex" }, text: { textAlign: "center", width: "75%" } });
const memoResult = importAllResult.memo((text) => {
  text = text.text;
  require = text;
  const tmp = callback();
  const items = [text];
  const effect = importAllResult.useEffect(() => {
    const AccessibilityAnnouncer = text(closure_1_2[5]).AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(closure_0, "polite");
  }, items);
  obj = { style: items1, children: jsx(Text.Text, obj) };
  items1 = [tmp.container, { paddingBottom: useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom }];
  obj = { variant: "text-sm/medium", color: "text-muted", style: tmp.text, children: text };
  return <View variant="text-sm/medium" color="text-muted" style={tmp.text}>{text}</View>;
});
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/pages/ErrorScreen.tsx");

export default memoResult;
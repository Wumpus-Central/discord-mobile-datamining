// === Module 15862: ? ===

// Module 15862
import Text from "Text" /* 4734 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5441 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
let c3 = importAllResult;
let closure_6 = createCacheKey.createStyles({ container: { justifyContent: "center", alignItems: "center", height: "100%", display: "flex" }, text: { textAlign: "center", width: "75%" } });
const memoResult = importAllResult.memo((text) => {
  text = text.text;
  require = text;
  const tmp = callback();
  const items = [text];
  const effect = importAllResult.useEffect(() => {
    const AccessibilityAnnouncer = text(dependencyMap[5]).AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(closure_0, "polite");
  }, items);
  { style: items1, children: jsx(Text.Text, obj) };
  items1 = [tmp.container, { paddingBottom: useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom }];
  obj = { variant: "text-sm/medium", color: "text-muted", style: tmp.text, children: text };
  return <View variant="text-sm/medium" color="text-muted" style={tmp.text}>{text}</View>;
});
const result = require("obj132").fileFinishedImporting("modules/search/native/components/tabs/pages/ErrorScreen.tsx");

export default memoResult;
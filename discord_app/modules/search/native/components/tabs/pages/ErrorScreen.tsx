// discord_app/modules/search/native/components/tabs/pages/ErrorScreen.tsx
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let require = arg1;
let c3 = importAllResult;
let closure_6 = createCacheKey.createStyles({ container: { justifyContent: "center", alignItems: "center", height: "100%", display: "flex" }, text: { textAlign: "center", width: "75%" } });
const memoResult = importAllResult.memo((text) => {
  text = text.text;
  const require = text;
  const tmp = callback();
  const items = [text];
  const effect = importAllResult.useEffect(() => {
    const AccessibilityAnnouncer = text(outer1_2[5]).AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(closure_0, "polite");
  }, items);
  obj = { style: items1, children: jsx(require(4189) /* Text */.Text, obj) };
  items1 = [tmp.container, { paddingBottom: importDefault(5219)({ includeKeyboardHeight: true }).insets.bottom }];
  obj = { variant: "text-sm/medium", color: "text-muted", style: tmp.text, children: text };
  return <View variant="text-sm/medium" color="text-muted" style={tmp.text}>{text}</View>;
});
const result = require("jsxProd").fileFinishedImporting("modules/search/native/components/tabs/pages/ErrorScreen.tsx");

export default memoResult;
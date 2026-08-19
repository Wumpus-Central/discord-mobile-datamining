// discord_app/modules/search/native/components/tabs/pages/ErrorScreen.tsx
import Text from "../../../../../../design/components/Text/native/Text.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import importAllResult from "../../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../design/components/Styles/native/createStyles.tsx";

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
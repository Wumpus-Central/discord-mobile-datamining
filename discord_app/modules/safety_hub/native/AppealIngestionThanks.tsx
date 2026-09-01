// === Module 11481: AppealIngestionThanks ===

// Module 11481 (AppealIngestionThanks)
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 1297 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 5553 */;
import AppealIngestionModal from "AppealIngestionModal" /* 11469 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
let closure_4 = createCacheKey.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" } });
const result = require("set").fileFinishedImporting("modules/safety_hub/native/AppealIngestionThanks.tsx");

export default function AppealIngestionThanks() {
  const tmp = callback();
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { bottom: true, style: tmp.container, children: jsx(Button.LegacyText, { children: "TODO - Thanks" }) };
  obj[1] = jsx(SafeAreaPaddingView.SafeAreaPaddingView, { bottom: true, style: tmp.container, children: jsx(Button.LegacyText, { children: "TODO - Thanks" }) });
  obj[0] = <View bottom style={tmp.container}>{jsx(Button.LegacyText, { children: "TODO - Thanks" })}</View>;
  return jsx(AppealIngestionModal.AppealIngestionModalScreen, { bottom: true, style: tmp.container, children: jsx(Button.LegacyText, { children: "TODO - Thanks" }) });
};
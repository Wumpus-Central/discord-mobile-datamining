// discord_app/modules/safety_hub/native/AppealIngestionThanks.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_4 = createCacheKey.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/safety_hub/native/AppealIngestionThanks.tsx");

export default function AppealIngestionThanks() {
  const tmp = callback();
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { bottom: true, style: tmp.container, children: null };
  obj[2] = jsx(require("../../../design/void/native.tsx") /* Button */.LegacyText, { children: "TODO - Thanks" });
  obj[1] = jsx(require("../../../components_native/common/SafeAreaView.tsx") /* SafeAreaPaddingView */.SafeAreaPaddingView, { bottom: true, style: tmp.container, children: null });
  obj[0] = <View bottom style={tmp.container}>{null}</View>;
  return jsx(require("AppealIngestionModal.tsx") /* AppealIngestionModal */.AppealIngestionModalScreen, { bottom: true, style: tmp.container, children: null });
};
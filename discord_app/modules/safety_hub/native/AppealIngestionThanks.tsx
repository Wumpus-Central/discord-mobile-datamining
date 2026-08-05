// discord_app/modules/safety_hub/native/AppealIngestionThanks.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { SafeAreaPaddingView } from "../../../components_native/common/SafeAreaView.tsx";
import { Button } from "../../../design/void/native.tsx";
import { AppealIngestionModal } from "AppealIngestionModal.tsx";

const require = arg1;
let closure_4 = createCacheKey.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/safety_hub/native/AppealIngestionThanks.tsx");

export default function AppealIngestionThanks() {
  const tmp = callback();
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { bottom: true, style: tmp.container, children: null };
  obj[2] = jsx(Button /* Button */.LegacyText, { children: "TODO - Thanks" });
  obj[1] = jsx(SafeAreaPaddingView /* SafeAreaPaddingView */.SafeAreaPaddingView, { bottom: true, style: tmp.container, children: null });
  obj[0] = <View bottom style={tmp.container}>{null}</View>;
  return jsx(AppealIngestionModal /* AppealIngestionModal */.AppealIngestionModalScreen, { bottom: true, style: tmp.container, children: null });
};
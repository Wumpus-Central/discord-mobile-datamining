// discord_app/modules/safety_hub/native/AppealIngestionSpam.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import Button from "../../../design/void/native.tsx";
import SafeAreaPaddingView from "../../../components_native/common/SafeAreaView.tsx";
import AppealIngestionModal from "AppealIngestionModal.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = fn;
noopAll;
let closure_4 = createCacheKey.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" } });
const result = require("obj132").fileFinishedImporting("modules/safety_hub/native/AppealIngestionSpam.tsx");

export default function AppealIngestionSpam() {
  const tmp = callback();
  const obj = { bottom: true, style: tmp.container, children: jsx(Button.LegacyText, { children: "TODO - SPAM" }) };
  obj[1] = jsx(SafeAreaPaddingView.SafeAreaPaddingView, { bottom: true, style: tmp.container, children: jsx(Button.LegacyText, { children: "TODO - SPAM" }) });
  obj[0] = <View bottom style={tmp.container}>{jsx(Button.LegacyText, { children: "TODO - SPAM" })}</View>;
  return jsx(AppealIngestionModal.AppealIngestionModalScreen, { bottom: true, style: tmp.container, children: jsx(Button.LegacyText, { children: "TODO - SPAM" }) });
};
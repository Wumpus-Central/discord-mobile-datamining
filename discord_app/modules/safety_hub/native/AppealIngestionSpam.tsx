// === Module 12039: AppealIngestionSpam ===

// Module 12039 (AppealIngestionSpam)
import native from "native" /* 1176 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7226 */;
import AppealIngestionModal from "AppealIngestionModal" /* 12017 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let closure_4 = createStyles.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionSpam.tsx");

export default function AppealIngestionSpam() {
  const tmp = closure_4();
  const obj = { children: null };
  const obj2 = { style: tmp.container, children: jsx(common_SafeAreaView.SafeAreaPaddingView, { bottom: true, style: tmp.container, children: jsx(native.LegacyText, { children: "TODO - SPAM" }) }) };
  obj.children = <View style={tmp.container}>{jsx(common_SafeAreaView.SafeAreaPaddingView, { bottom: true, style: tmp.container, children: jsx(native.LegacyText, { children: "TODO - SPAM" }) })}</View>;
  return jsx(AppealIngestionModal.AppealIngestionModalScreen, { children: null });
};
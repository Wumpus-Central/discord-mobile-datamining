// === Module 11387: AppealIngestionSpam ===

// Module 11387 (AppealIngestionSpam)
import native from "native" /* 1177 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import AppealIngestionModal from "AppealIngestionModal" /* 11365 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
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
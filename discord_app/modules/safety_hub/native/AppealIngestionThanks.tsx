// === Module 11978: AppealIngestionThanks ===

// Module 11978 (AppealIngestionThanks)
import native from "native" /* 1178 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7175 */;
import AppealIngestionModal from "AppealIngestionModal" /* 11957 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4605);
let closure_4 = createStyles.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionThanks.tsx");

export default function AppealIngestionThanks() {
  const tmp = closure_4();
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { bottom: true, style: tmp.container, children: jsx(native.LegacyText, { children: "TODO - Thanks" }) };
  obj.children = jsx(common_SafeAreaView.SafeAreaPaddingView, { bottom: true, style: tmp.container, children: jsx(native.LegacyText, { children: "TODO - Thanks" }) });
  obj.children = <View bottom style={tmp.container}>{jsx(native.LegacyText, { children: "TODO - Thanks" })}</View>;
  return jsx(AppealIngestionModal.AppealIngestionModalScreen, { bottom: true, style: tmp.container, children: jsx(native.LegacyText, { children: "TODO - Thanks" }) });
};
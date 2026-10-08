// === Module 11530: AppealIngestionThanks ===

// Module 11530 (AppealIngestionThanks)
import c from "c" /* 576 */;
import native from "native" /* 1200 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6803 */;
import AppealIngestionModal from "AppealIngestionModal" /* 11503 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_4 = createStyles.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionThanks.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AppealIngestionThanks() {
  const cResult = c.c(6);
  const tmp4 = closure_4();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = jsx(native.LegacyText, { children: "TODO - Thanks" });
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.container) {
    const obj2 = { bottom: true, style: tmp4.container, children: first };
    const tmp10 = jsx(common_SafeAreaView.SafeAreaPaddingView, { bottom: true, style: tmp4.container, children: first });
    cResult[1] = tmp4.container;
    cResult[2] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp4.container) {
    if (cResult[4] === tmp8) {
      let tmp11 = cResult[5];
    }
    return tmp11;
  }
  const obj3 = { children: <View style={tmp4.container}>{tmp8}</View> };
  const tmp12 = jsx(AppealIngestionModal.AppealIngestionModalScreen, { children: <View style={tmp4.container}>{tmp8}</View> });
  cResult[3] = tmp4.container;
  cResult[4] = tmp8;
  cResult[5] = tmp12;
  tmp11 = tmp12;
  const obj4 = { style: tmp4.container, children: tmp8 };
}) : (function AppealIngestionThanks() {
  const tmp = closure_4();
  const obj = { children: null };
  const obj2 = { style: tmp.container, children: jsx(common_SafeAreaView.SafeAreaPaddingView, { bottom: true, style: tmp.container, children: jsx(native.LegacyText, { children: "TODO - Thanks" }) }) };
  obj.children = <View style={tmp.container}>{jsx(common_SafeAreaView.SafeAreaPaddingView, { bottom: true, style: tmp.container, children: jsx(native.LegacyText, { children: "TODO - Thanks" }) })}</View>;
  return jsx(AppealIngestionModal.AppealIngestionModalScreen, { children: null });
});
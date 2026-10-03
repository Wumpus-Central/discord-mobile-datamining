// === Module 16742: VibegrationsTraceFormat ===

// Module 16742 (VibegrationsTraceFormat)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import vibegrations_VibegrationsTraceFormat from "vibegrations/VibegrationsTraceFormat" /* 16743 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
let createStyles = fn(4890);
let obj2 = { model: { color: nativeDefault.colors.TEXT_BRAND }, subagent: null, context: null, tool: null, delegated: null };
const obj3 = { color: nativeDefault.colors.TEXT_BRAND };
obj2.subagent = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
const obj4 = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj2.context = { color: nativeDefault.colors.TEXT_SUBTLE };
const obj5 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj2.tool = { color: nativeDefault.colors.TEXT_MUTED };
const obj6 = { color: nativeDefault.colors.TEXT_MUTED };
obj2.delegated = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
const styles = createStyles.createStyles(obj2);
createStyles = fn(4890);
const obj9 = { model: null, subagent: null, context: null, tool: null, delegated: null };
const obj7 = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
obj9.model = { backgroundColor: nativeDefault.colors.TEXT_BRAND };
const obj10 = { backgroundColor: nativeDefault.colors.TEXT_BRAND };
obj9.subagent = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
const obj11 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj9.context = { backgroundColor: nativeDefault.colors.TEXT_SUBTLE };
const obj12 = { backgroundColor: nativeDefault.colors.TEXT_SUBTLE };
obj9.tool = { backgroundColor: nativeDefault.colors.TEXT_MUTED };
const obj13 = { backgroundColor: nativeDefault.colors.TEXT_MUTED };
obj9.delegated = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
const styles1 = createStyles.createStyles(obj9);
createStyles = fn(4890);
const obj16 = { dot: { width: 8, height: 8, borderRadius: 4 }, started: null, ok: null, error: null };
const obj14 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
obj16.started = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
const obj17 = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
obj16.ok = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
const obj18 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj16.error = { backgroundColor: nativeDefault.colors.STATUS_DANGER };
let closure_4 = createStyles.createStyles(obj16);
const ReactCompilerGating = fn(558);
const obj19 = { backgroundColor: nativeDefault.colors.STATUS_DANGER };
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsTraceFormat.tsx");

export const useTraceCategoryTextStyles = styles;
export const useTraceCategoryFillStyles = styles1;
export const TraceStatusDot = ReactCompilerGating.isReactCompilerEnabled() ? ((status) => {
  const cResult = c.c(8);
  status = status.status;
  const tmp4 = closure_4();
  if (cResult[0] === tmp4.dot) {
    if (cResult[1] === tmp5) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] !== status) {
      const statusLabelResult = vibegrations_VibegrationsTraceFormat.statusLabel(status);
      cResult[3] = status;
      cResult[4] = statusLabelResult;
      let tmp7 = statusLabelResult;
      const tmpResult = vibegrations_VibegrationsTraceFormat;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] === tmp6) {
      if (cResult[6] === tmp7) {
        let tmp9 = cResult[7];
      }
      return tmp9;
    }
    const obj2 = { style: tmp6, accessibilityRole: "image", accessibilityLabel: tmp7 };
    const tmp12 = <View style={tmp6} accessibilityRole="image" accessibilityLabel={tmp7} />;
    cResult[5] = tmp6;
    cResult[6] = tmp7;
    cResult[7] = tmp12;
    tmp9 = tmp12;
  }
  const items = [tmp4.dot, tmp4[status]];
  cResult[0] = tmp4.dot;
  cResult[1] = tmp4[status];
  cResult[2] = items;
  tmp6 = items;
}) : ((status) => {
  status = status.status;
  const tmp = closure_4();
  const obj = { style: null, accessibilityRole: "image", accessibilityLabel: vibegrations_VibegrationsTraceFormat.statusLabel(status) };
  const items = [tmp.dot, tmp[status]];
  obj.style = items;
  return <View style={null} accessibilityRole="image" accessibilityLabel={vibegrations_VibegrationsTraceFormat.statusLabel(status)} />;
});
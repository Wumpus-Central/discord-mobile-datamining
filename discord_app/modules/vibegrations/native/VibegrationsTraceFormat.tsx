// === Module 17072: VibegrationsTraceFormat ===

// Module 17072 (VibegrationsTraceFormat)
import nativeDefault from "native" /* 576 */;
import vibegrations_VibegrationsTraceFormat from "vibegrations/VibegrationsTraceFormat" /* 17073 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
let createStyles = fn(4756);
const obj2 = { model: { color: nativeDefault.colors.TEXT_BRAND }, subagent: null, context: null, tool: null, delegated: null };
const obj3 = { color: nativeDefault.colors.TEXT_BRAND };
obj2.subagent = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
const obj4 = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj2.context = { color: nativeDefault.colors.TEXT_SUBTLE };
const obj5 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj2.tool = { color: nativeDefault.colors.TEXT_MUTED };
const obj6 = { color: nativeDefault.colors.TEXT_MUTED };
obj2.delegated = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
const styles = createStyles.createStyles(obj2);
createStyles = fn(4756);
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
createStyles = fn(4756);
const obj16 = { dot: { width: 8, height: 8, borderRadius: 4 }, started: null, ok: null, error: null };
const obj14 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
obj16.started = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
const obj17 = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
obj16.ok = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
const obj18 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj16.error = { backgroundColor: nativeDefault.colors.STATUS_DANGER };
let closure_4 = createStyles.createStyles(obj16);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsTraceFormat.tsx");

export const useTraceCategoryTextStyles = styles;
export const useTraceCategoryFillStyles = styles1;
export const TraceStatusDot = function TraceStatusDot(status) {
  status = status.status;
  const tmp = closure_4();
  const obj = { style: null, accessibilityRole: "image", accessibilityLabel: vibegrations_VibegrationsTraceFormat.statusLabel(status) };
  const items = [tmp.dot, tmp[status]];
  obj.style = items;
  return <View style={null} accessibilityRole="image" accessibilityLabel={vibegrations_VibegrationsTraceFormat.statusLabel(status)} />;
};
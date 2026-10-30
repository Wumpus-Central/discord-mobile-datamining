// === Module 12972: ConjurePerfTraceStatusDot ===

// Module 12972 (ConjurePerfTraceStatusDot)
import nativeDefault from "native" /* 575 */;
import ConjurePerfTraceFormat from "ConjurePerfTraceFormat" /* 12968 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
const obj2 = { dot: { width: 8, height: 8, borderRadius: 4 }, running: { backgroundColor: nativeDefault.colors.STATUS_WARNING }, ok: null, error: null };
const obj3 = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
obj2.ok = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
const obj4 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj2.error = { backgroundColor: nativeDefault.colors.STATUS_DANGER };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/native/ConjurePerfTraceStatusDot.tsx");

export default function ConjurePerfTraceStatusDot(status) {
  status = status.status;
  const tmp = closure_4();
  const obj = { style: null, accessibilityRole: "image", accessibilityLabel: ConjurePerfTraceFormat.PERF_STATUS_LABELS[status] };
  const items = [tmp.dot, tmp[status]];
  obj.style = items;
  return <View style={null} accessibilityRole="image" accessibilityLabel={ConjurePerfTraceFormat.PERF_STATUS_LABELS[status]} />;
};
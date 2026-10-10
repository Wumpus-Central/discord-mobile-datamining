// discord_app/modules/conjure/debug/perf_trace/native/ConjurePerfTraceStatusDot.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ConjurePerfTraceFormat from "../ConjurePerfTraceFormat.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = {
  dot: { width: 8, height: 8, borderRadius: 4 },
  running: { backgroundColor: nativeDefault.colors.STATUS_WARNING },
  ok: null,
  error: null,
};
const obj3 = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
obj2.ok = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
const obj4 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj2.error = { backgroundColor: nativeDefault.colors.STATUS_DANGER };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj5 = { backgroundColor: nativeDefault.colors.STATUS_DANGER };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/native/ConjurePerfTraceStatusDot.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjurePerfTraceStatusDot(status) {
      const cResult = c.c(6);
      status = status.status;
      const tmp4 = closure_4();
      if (cResult[0] === tmp4.dot) {
        if (cResult[1] === tmp5) {
          let tmp6 = cResult[2];
        }
        const tmp7 = ConjurePerfTraceFormat.PERF_STATUS_LABELS[status];
        if (cResult[3] === tmp6) {
          if (cResult[4] === tmp7) {
            let tmp8 = cResult[5];
          }
          return tmp8;
        }
        const obj2 = { style: tmp6, accessibilityRole: "image", accessibilityLabel: tmp7 };
        const tmp11 = <View style={tmp6} accessibilityRole="image" accessibilityLabel={tmp7} />;
        cResult[3] = tmp6;
        cResult[4] = tmp7;
        cResult[5] = tmp11;
        tmp8 = tmp11;
      }
      const items = [tmp4.dot, tmp4[status]];
      cResult[0] = tmp4.dot;
      cResult[1] = tmp4[status];
      cResult[2] = items;
      tmp6 = items;
    }
  : function ConjurePerfTraceStatusDot(status) {
      status = status.status;
      const tmp = closure_4();
      const obj = {
        style: null,
        accessibilityRole: "image",
        accessibilityLabel: ConjurePerfTraceFormat.PERF_STATUS_LABELS[status],
      };
      const items = [tmp.dot, tmp[status]];
      obj.style = items;
      return (
        <View
          style={null}
          accessibilityRole="image"
          accessibilityLabel={ConjurePerfTraceFormat.PERF_STATUS_LABELS[status]}
        />
      );
    };

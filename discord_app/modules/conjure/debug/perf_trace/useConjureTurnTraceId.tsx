// === Module 12643: useConjureTurnTraceId ===

// Module 12643 (useConjureTurnTraceId)
import ConjureDebugStore from "ConjureDebugStore" /* 10857 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/useConjureTurnTraceId.tsx");

export default function useConjureTurnTraceId(arg0, role) {
  _require = arg0;
  let tmp3 = null;
  if (obj.useConjureTraceTabEnabled()) {
    tmp3 = null;
    if ("assistant" === role.role) {
      tmp3 = null;
      if (tmpResult.turnSettled(role)) {
        let turn_id = role.turn_id;
        if (turn_id == null) {
          const steps = role.steps;
          let found = steps.find((turn_id) => null != turn_id.turn_id);
          let turn_id1;
          if (found != null) {
            turn_id1 = found.turn_id;
          }
          turn_id = turn_id1;
        }
        if (turn_id == null) {
          turn_id = role.id.replace(/^turn:/, "");
        }
        tmp3 = turn_id;
      }
      tmpResult = tmp(tmp2[2]);
    }
  }
  turn_id = tmp3;
  obj = require("useConjureDebugAccess");
  const items = [ConjureDebugStore];
  const items1 = [arg0, tmp3];
  return require("initialize").useStateFromStores(items, () => {
    let findLastResult = null;
    if (null != turn_id) {
      const timingTraces = ConjureDebugStore.getTimingTraces(closure_0);
      findLastResult = timingTraces.findLast((spans) => {
        spans = spans.spans;
        let tmp = "turn" === spans.name;
        if (tmp) {
          const found = spans.find((parent) => null == parent.parent);
          turn_id = undefined;
          if (found != null) {
            const attrs = found.attrs;
            if (attrs != null) {
              turn_id = attrs.turn_id;
            }
          }
          tmp = turn_id === closure_1_1;
        }
        return tmp;
      });
    }
    let id = null;
    if (null != findLastResult) {
      id = null;
      if (!findLastResult.live) {
        id = findLastResult.id;
      }
    }
    return id;
  }, items1);
};
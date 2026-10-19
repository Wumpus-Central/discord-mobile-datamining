// === Module 12183: useConjureTurnTraceId ===

// Module 12183 (useConjureTurnTraceId)
import ConjureDebugStore from "ConjureDebugStore" /* 10983 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/useConjureTurnTraceId.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureTurnTraceId(arg0, role) {
  _require = arg0;
  const cResult = require("c").c(8);
  const obj = require("c");
  const conjureTraceTabEnabled = require("useConjureDebugAccess").useConjureTraceTabEnabled();
  if (cResult[0] === role) {
    if (cResult[1] === conjureTraceTabEnabled) {
      let tmp5 = cResult[2];
    }
    dependencyMap = tmp5;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [ConjureDebugStore];
      cResult[3] = items;
      let tmp10 = items;
    } else {
      tmp10 = cResult[3];
    }
    if (cResult[4] === arg0) {
      if (cResult[5] === tmp5) {
        let tmp12 = cResult[6];
        let tmp13 = cResult[7];
      }
      return tmp(504).useStateFromStores(tmp10, tmp12, tmp13);
    }
    const fn = function _() {
      let findLastResult = null;
      if (null != closure_1) {
        const timingTraces = ConjureDebugStore.getTimingTraces(closure_0);
        findLastResult = timingTraces.findLast((spans) => {
          spans = spans.spans;
          let tmp = "turn" === spans.name;
          if (tmp) {
            const found = spans.find((parent) => null == parent.parent);
            let turn_id;
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
    };
    const items1 = [arg0, tmp5];
    cResult[4] = arg0;
    cResult[5] = tmp5;
    cResult[6] = fn;
    cResult[7] = items1;
    tmp13 = items1;
    tmp12 = fn;
  }
  let tmp6 = null;
  if (conjureTraceTabEnabled) {
    tmp6 = null;
    if ("assistant" === role.role) {
      tmp6 = null;
      if (tmpResult2.turnSettled(role)) {
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
        tmp6 = turn_id;
      }
      tmpResult2 = tmp(10980);
    }
  }
  cResult[0] = role;
  cResult[1] = conjureTraceTabEnabled;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj2 = require("useConjureDebugAccess");
}) : (function useConjureTurnTraceId(arg0, role) {
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
      tmpResult = tmp(tmp2[4]);
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
});
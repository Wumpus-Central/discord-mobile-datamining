// discord_app/modules/conjure/debug/perf_trace/useConjureTurnTraceId.tsx
import ConjureChatStore from "../../chat/ConjureChatStore.tsx";
import ConjureDebugStore from "../ConjureDebugStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const turnSettled = ConjureChatStore.turnSettled;
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/useConjureTurnTraceId.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureTurnTraceId(arg0, role) {
  _require = arg0;
  const cResult = require("c").c(9);
  const obj = require("c");
  let tmp = _require;
  const conjureDebugPaneEnabled = require("useConjureDebugAccess").useConjureDebugPaneEnabled();
  const obj2 = require("useConjureDebugAccess");
  const conjureTraceTabEnabled = require("useConjureDebugAccess").useConjureTraceTabEnabled();
  if (cResult[0] === role) {
    if (cResult[1] === conjureDebugPaneEnabled) {
      if (cResult[2] === conjureTraceTabEnabled) {
        let tmp6 = cResult[3];
      }
      dependencyMap = tmp6;
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureDebugStore];
        cResult[4] = items;
        let tmp12 = items;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] === arg0) {
        if (cResult[6] === tmp6) {
          let tmp14 = cResult[7];
          let tmp15 = cResult[8];
        }
        return tmp(504).useStateFromStores(tmp12, tmp14, tmp15);
      }
      class T {
        constructor() {
          findLastResult = null;
          if (null != closure_1) {
            tmp2 = closure_3;
            tmp3 = closure_0;
            timingTraces = closure_3.getTimingTraces(closure_0);
            findLastResult = timingTraces.findLast((spans) => {
              spans = spans.spans;
              let tmp = "turn" === spans.name;
              if (tmp) {
                const found = spans.find(() => { ... });
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
          id = null;
          if (null != findLastResult) {
            id = null;
            if (!findLastResult.live) {
              id = findLastResult.id;
            }
          }
          return id;
        }
      }
      const items1 = [arg0, tmp6];
      cResult[5] = arg0;
      cResult[6] = tmp6;
      cResult[7] = T;
      cResult[8] = items1;
      tmp15 = items1;
      tmp14 = T;
    }
  }
  let tmp7 = null;
  if (conjureDebugPaneEnabled) {
    tmp7 = null;
    if (conjureTraceTabEnabled) {
      tmp7 = null;
      if ("assistant" === role.role) {
        tmp7 = null;
        if (turnSettled(role)) {
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
          tmp7 = turn_id;
        }
      }
    }
  }
  cResult[0] = role;
  cResult[1] = conjureDebugPaneEnabled;
  cResult[2] = conjureTraceTabEnabled;
  cResult[3] = tmp7;
  tmp6 = tmp7;
  const obj3 = require("useConjureDebugAccess");
}) : (function useConjureTurnTraceId(arg0, role) {
  _require = arg0;
  const conjureDebugPaneEnabled = require("useConjureDebugAccess").useConjureDebugPaneEnabled();
  require("useConjureDebugAccess");
  let tmp6 = null;
  if (conjureDebugPaneEnabled) {
    tmp6 = null;
    if (tmp5) {
      tmp6 = null;
      if ("assistant" === role.role) {
        tmp6 = null;
        if (turnSettled(role)) {
          turn_id = role.turn_id;
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
      }
    }
  }
  turn_id = tmp6;
  const obj = require("useConjureDebugAccess");
  const items = [ConjureDebugStore];
  const items1 = [arg0, tmp6];
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
// === Module 12833: useConjureDebugAgentState ===

// Module 12833 (useConjureDebugAgentState)
import conjureDebugConnection from "conjureDebugConnection" /* 10845 */;
import noop from "module_19" /* 19 */;
import ConjureChatStore from "ConjureChatStore" /* 10808 */;
import ConjureDebugStore from "ConjureDebugStore" /* 10814 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/useConjureDebugAgentState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureDebugAgentState(arg0, arg1) {
  _require = arg0;
  const cResult = require("c").c(44);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureDebugStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      return ConjureDebugStore.getLastTurnUsage(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ConjureDebugStore];
    cResult[4] = items2;
    let tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== arg0) {
    const fn2 = function p() {
      return ConjureDebugStore.getLastCompaction(closure_0);
    };
    const items3 = [arg0];
    cResult[5] = arg0;
    cResult[6] = fn2;
    cResult[7] = items3;
    let tmp12 = items3;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[6];
    tmp12 = cResult[7];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp9, tmp11, tmp12);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [ConjureDebugStore];
    cResult[8] = items4;
    let tmp14 = items4;
  } else {
    tmp14 = cResult[8];
  }
  if (cResult[9] !== arg0) {
    class F {
      constructor() {
        return closure_4.getLastCompactionDecline(closure_0);
      }
    }
    const items5 = [arg0];
    cResult[9] = arg0;
    cResult[10] = F;
    cResult[11] = items5;
    let tmp17 = items5;
  } else {
    class F {
      constructor() {
        return closure_4.getLastCompactionDecline(closure_0);
      }
    }
    tmp17 = cResult[11];
  }
  const tmpResult6 = require("initialize");
  const stateFromStores2 = require("initialize").useStateFromStores(tmp14, F, tmp17);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        return closure_4.getLastCompactionDecline(closure_0);
      }
    }
    const items6 = [ConjureDebugStore];
    cResult[12] = items6;
    const tmp19 = items6;
  } else {
    class F {
      constructor() {
        return closure_4.getLastCompactionDecline(closure_0);
      }
    }
  }
  if (cResult[13] !== arg0) {
    class F {
      constructor() {
        return closure_4.getLastCompactionDecline(closure_0);
      }
    }
    const items7 = [arg0];
    cResult[13] = arg0;
    cResult[14] = tmp22;
    cResult[15] = items7;
    let tmp21 = items7;
  } else {
    class F {
      constructor() {
        return closure_4.getLastCompactionDecline(closure_0);
      }
    }
    tmp21 = cResult[15];
  }
  const tmpResult7 = require("initialize");
  const stateFromStores3 = require("initialize").useStateFromStores(tmp19, tmp22, tmp21);
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        return closure_4.getLastCompactionDecline(closure_0);
      }
    }
    const items8 = [ConjureDebugStore];
    cResult[16] = items8;
    const tmp24 = items8;
  } else {
    class F {
      constructor() {
        return closure_4.getLastCompactionDecline(closure_0);
      }
    }
  }
  if (cResult[17] !== arg0) {
    class R {
      constructor() {
        return closure_4.getSandboxRestartState(closure_0);
      }
    }
    const items9 = [arg0];
    cResult[17] = arg0;
    cResult[18] = R;
    cResult[19] = items9;
    let tmp26 = items9;
  } else {
    class R {
      constructor() {
        return closure_4.getSandboxRestartState(closure_0);
      }
    }
    tmp26 = cResult[19];
  }
  const tmpResult8 = require("initialize");
  const stateFromStores4 = require("initialize").useStateFromStores(tmp24, R, tmp26);
  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        return closure_4.getSandboxRestartState(closure_0);
      }
    }
    const items10 = [ConjureChatStore];
    cResult[20] = items10;
    const tmp28 = items10;
  } else {
    class R {
      constructor() {
        return closure_4.getSandboxRestartState(closure_0);
      }
    }
  }
  if (cResult[21] !== arg0) {
    class A {
      constructor() {
        return closure_3.isThinking(closure_0);
      }
    }
    const items11 = [arg0];
    cResult[21] = arg0;
    cResult[22] = A;
    cResult[23] = items11;
    let tmp30 = items11;
  } else {
    class A {
      constructor() {
        return closure_3.isThinking(closure_0);
      }
    }
    tmp30 = cResult[23];
  }
  const tmpResult9 = require("initialize");
  const stateFromStores5 = require("initialize").useStateFromStores(tmp28, A, tmp30);
  if (cResult[24] !== arg0) {
    class W {
      constructor() {
        obj = closure_0(closure_1[6]);
        return obj.forceCompaction(closure_0);
      }
    }
    cResult[24] = arg0;
    cResult[25] = W;
  } else {
    class W {
      constructor() {
        obj = closure_0(closure_1[6]);
        return obj.forceCompaction(closure_0);
      }
    }
  }
  if (cResult[26] !== arg0) {
    class I {
      constructor() {
        obj = closure_0(closure_1[6]);
        return obj.forceCompaction(closure_0, true);
      }
    }
    cResult[26] = arg0;
    cResult[27] = I;
  } else {
    class I {
      constructor() {
        obj = closure_0(closure_1[6]);
        return obj.forceCompaction(closure_0, true);
      }
    }
  }
  if (cResult[28] !== arg0) {
    class P {
      constructor() {
        obj = closure_0(closure_1[6]);
        return obj.restartConjureSandbox(closure_0);
      }
    }
    cResult[28] = arg0;
    cResult[29] = P;
  } else {
    class P {
      constructor() {
        obj = closure_0(closure_1[6]);
        return obj.restartConjureSandbox(closure_0);
      }
    }
  }
  if (arg1 != null) {
    class P {
      constructor() {
        obj = closure_0(closure_1[6]);
        return obj.restartConjureSandbox(closure_0);
      }
    }
    if (tmp36 != null) {
      class P {
        constructor() {
          obj = closure_0(closure_1[6]);
          return obj.restartConjureSandbox(closure_0);
        }
      }
    }
  }
  if (undefined == null) {
    class P {
      constructor() {
        obj = closure_0(closure_1[6]);
        return obj.restartConjureSandbox(closure_0);
      }
    }
  }
  if (arg1 != null) {
    class P {
      constructor() {
        obj = closure_0(closure_1[6]);
        return obj.restartConjureSandbox(closure_0);
      }
    }
    if (tmp38 != null) {
      class P {
        constructor() {
          obj = closure_0(closure_1[6]);
          return obj.restartConjureSandbox(closure_0);
        }
      }
    }
  }
  if (undefined == null) {
    class P {
      constructor() {
        obj = closure_0(closure_1[6]);
        return obj.restartConjureSandbox(closure_0);
      }
    }
  }
  if (arg1 != null) {
    class P {
      constructor() {
        obj = closure_0(closure_1[6]);
        return obj.restartConjureSandbox(closure_0);
      }
    }
    if (tmp40 != null) {
      class P {
        constructor() {
          obj = closure_0(closure_1[6]);
          return obj.restartConjureSandbox(closure_0);
        }
      }
    }
  }
  if (undefined == null) {
    class P {
      constructor() {
        obj = closure_0(closure_1[6]);
        return obj.restartConjureSandbox(closure_0);
      }
    }
  }
  let tmp41;
  if (stateFromStores1 != null) {
    class P {
      constructor() {
        obj = closure_0(closure_1[6]);
        return obj.restartConjureSandbox(closure_0);
      }
    }
  }
  if (tmp41 == null) {
    class P {
      constructor() {
        obj = closure_0(closure_1[6]);
        return obj.restartConjureSandbox(closure_0);
      }
    }
    if (tmp35 != null) {
      class P {
        constructor() {
          obj = closure_0(closure_1[6]);
          return obj.restartConjureSandbox(closure_0);
        }
      }
    }
    tmp41 = tmp42;
  }
  if (tmp41 == null) {
    class P {
      constructor() {
        obj = closure_0(closure_1[6]);
        return obj.restartConjureSandbox(closure_0);
      }
    }
  }
  if (cResult[30] === stateFromStores3) {
    class P {
      constructor() {
        obj = closure_0(closure_1[6]);
        return obj.restartConjureSandbox(closure_0);
      }
    }
  }
  cResult[30] = stateFromStores3;
  cResult[31] = W;
  cResult[32] = I;
  cResult[33] = P;
  cResult[34] = stateFromStores1;
  cResult[35] = stateFromStores2;
  cResult[36] = stateFromStores;
  cResult[37] = undefined;
  cResult[38] = stateFromStores4;
  cResult[39] = undefined;
  cResult[40] = undefined;
  cResult[41] = tmp41;
  cResult[42] = stateFromStores5;
  cResult[43] = { lastTurn: stateFromStores, lastCompaction: stateFromStores1, lastDecline: stateFromStores2, forceState: stateFromStores3, restartState: stateFromStores4, turnRunning: stateFromStores5, handleForceCompaction: W, handleForceCompactionOverride: I, handleRestartWorkspace: P, lifetime: undefined, limits: undefined, session: undefined, contextCeiling: tmp41 };
  const obj2 = { lastTurn: stateFromStores, lastCompaction: stateFromStores1, lastDecline: stateFromStores2, forceState: stateFromStores3, restartState: stateFromStores4, turnRunning: stateFromStores5, handleForceCompaction: W, handleForceCompactionOverride: I, handleRestartWorkspace: P, lifetime: undefined, limits: undefined, session: undefined, contextCeiling: tmp41 };
  const tmpResult10 = require("initialize");
}) : (function useConjureDebugAgentState(arg0, agent) {
  _require = arg0;
  const items = [ConjureDebugStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ConjureDebugStore.getLastTurnUsage(closure_0), items1);
  const obj = require("initialize");
  const items2 = [ConjureDebugStore];
  const items3 = [arg0];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => ConjureDebugStore.getLastCompaction(closure_0), items3);
  const obj2 = require("initialize");
  const items4 = [ConjureDebugStore];
  const items5 = [arg0];
  const stateFromStores2 = require("initialize").useStateFromStores(items4, () => ConjureDebugStore.getLastCompactionDecline(closure_0), items5);
  const obj3 = require("initialize");
  const items6 = [ConjureDebugStore];
  const items7 = [arg0];
  const stateFromStores3 = require("initialize").useStateFromStores(items6, () => ConjureDebugStore.getForceCompactionState(closure_0), items7);
  const obj4 = require("initialize");
  const items8 = [ConjureDebugStore];
  const items9 = [arg0];
  const stateFromStores4 = require("initialize").useStateFromStores(items8, () => ConjureDebugStore.getSandboxRestartState(closure_0), items9);
  const obj5 = require("initialize");
  const items10 = [ConjureChatStore];
  const items11 = [arg0];
  const items12 = [arg0];
  const stateFromStores5 = require("initialize").useStateFromStores(items10, () => ConjureChatStore.isThinking(closure_0), items11);
  const items13 = [arg0];
  const callback = noop.useCallback(() => conjureDebugConnection.forceCompaction(closure_0), items12);
  const items14 = [arg0];
  const callback1 = noop.useCallback(() => conjureDebugConnection.forceCompaction(closure_0, true), items13);
  let limits;
  const callback2 = noop.useCallback(() => conjureDebugConnection.restartConjureSandbox(closure_0), items14);
  if (agent != null) {
    agent = agent.agent;
    if (agent != null) {
      limits = agent.limits;
    }
  }
  if (limits == null) {
    limits = null;
  }
  const obj7 = { lastTurn: stateFromStores, lastCompaction: stateFromStores1, lastDecline: stateFromStores2, forceState: stateFromStores3, restartState: stateFromStores4, turnRunning: stateFromStores5, handleForceCompaction: callback, handleForceCompactionOverride: callback1, handleRestartWorkspace: callback2, lifetime: null, limits: null, session: null, contextCeiling: null };
  let lifetime;
  if (agent != null) {
    const agent2 = agent.agent;
    if (agent2 != null) {
      lifetime = agent2.lifetime;
    }
  }
  if (lifetime == null) {
    lifetime = null;
  }
  obj7.lifetime = lifetime;
  obj7.limits = limits;
  let session;
  if (agent != null) {
    const agent3 = agent.agent;
    if (agent3 != null) {
      session = agent3.session;
    }
  }
  if (session == null) {
    session = null;
  }
  obj7.session = session;
  let promptCeiling;
  if (stateFromStores1 != null) {
    promptCeiling = stateFromStores1.promptCeiling;
  }
  if (promptCeiling == null) {
    let prop;
    if (limits != null) {
      prop = limits.context_window_tokens;
    }
    promptCeiling = prop;
  }
  if (promptCeiling == null) {
    promptCeiling = null;
  }
  obj7.contextCeiling = promptCeiling;
  return obj7;
});
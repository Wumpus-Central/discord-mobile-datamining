// === Module 12289: useConjureHeldPrompt ===

// Module 12289 (useConjureHeldPrompt)
import conjureScopeSetup from "conjureScopeSetup" /* 12290 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureChatStore from "ConjureChatStore" /* 10699 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10698 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;

const require = globalThis.__r;

require = fn;
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureScopeSetupPending(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      const project = ConjureProjectStore.getProject(closure_0);
      let install_scope_setup;
      if (project != null) {
        install_scope_setup = project.install_scope_setup;
      }
      return null != install_scope_setup;
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
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : (function useConjureScopeSetupPending(arg0) {
  _require = arg0;
  const items = [ConjureProjectStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const project = ConjureProjectStore.getProject(closure_0);
    let install_scope_setup;
    if (project != null) {
      install_scope_setup = project.install_scope_setup;
    }
    return null != install_scope_setup;
  }, items1);
});
let closure_7 = tmp2;
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/scope_setup/useConjureHeldPrompt.tsx");

export const useConjureScopeSetupPending = tmp2;
export const useConjureHeldPrompt = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureHeldPrompt(arg0) {
  _require = arg0;
  const cResult = require("c").c(25);
  const tmp4 = closure_7(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function p() {
      return null != ConjureProjectStore.getProject(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ConjureChatStore];
    cResult[4] = items2;
    let tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== arg0) {
    class C {
      constructor() {
        return closure_4.hasLoadedHistory(closure_0);
      }
    }
    const items3 = [arg0];
    cResult[5] = arg0;
    cResult[6] = C;
    cResult[7] = items3;
    let tmp13 = items3;
  } else {
    class C {
      constructor() {
        return closure_4.hasLoadedHistory(closure_0);
      }
    }
    tmp13 = cResult[7];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp10, C, tmp13);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        return closure_4.hasLoadedHistory(closure_0);
      }
    }
    const items4 = [ConjureChatStore];
    cResult[8] = items4;
    const tmp15 = items4;
  } else {
    class C {
      constructor() {
        return closure_4.hasLoadedHistory(closure_0);
      }
    }
  }
  if (cResult[9] !== arg0) {
    class C {
      constructor() {
        return closure_4.hasLoadedHistory(closure_0);
      }
    }
    const items5 = [arg0];
    cResult[9] = arg0;
    cResult[10] = tmp18;
    cResult[11] = items5;
    let tmp17 = items5;
  } else {
    class C {
      constructor() {
        return closure_4.hasLoadedHistory(closure_0);
      }
    }
    tmp17 = cResult[11];
  }
  const tmpResult4 = require("initialize");
  const stateFromStores2 = require("initialize").useStateFromStores(tmp15, tmp18, tmp17);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        return closure_4.hasLoadedHistory(closure_0);
      }
    }
    const items6 = [ConjureConnectionStore];
    cResult[12] = items6;
    const tmp20 = items6;
  } else {
    class C {
      constructor() {
        return closure_4.hasLoadedHistory(closure_0);
      }
    }
  }
  if (cResult[13] !== arg0) {
    class L {
      constructor() {
        return closure_5.getConnState(closure_0);
      }
    }
    const items7 = [arg0];
    cResult[13] = arg0;
    cResult[14] = L;
    cResult[15] = items7;
    let tmp22 = items7;
  } else {
    class L {
      constructor() {
        return closure_5.getConnState(closure_0);
      }
    }
    tmp22 = cResult[15];
  }
  const tmpResult5 = require("initialize");
  const stateFromStores3 = require("initialize").useStateFromStores(tmp20, L, tmp22);
  const tmpResult6 = require("initialize");
  [r10100, dependencyMap] = noop.useState(0);
  if (cResult[16] !== arg0) {
    class L {
      constructor() {
        return closure_5.getConnState(closure_0);
      }
    }
    cResult[16] = arg0;
    cResult[17] = tmp26;
  } else {
    class L {
      constructor() {
        return closure_5.getConnState(closure_0);
      }
    }
  }
  if (cResult[18] === stateFromStores3) {
    class L {
      constructor() {
        return closure_5.getConnState(closure_0);
      }
    }
  }
  const items8 = [arg0, stateFromStores, stateFromStores1, stateFromStores2, tmp4, stateFromStores3];
  cResult[18] = stateFromStores3;
  cResult[19] = stateFromStores1;
  cResult[20] = stateFromStores2;
  cResult[21] = arg0;
  cResult[22] = stateFromStores;
  cResult[23] = tmp4;
  cResult[24] = items8;
  const tmp24 = _slicedToArray(noop.useState(0), 2);
}) : (function useConjureHeldPrompt(arg0) {
  _require = arg0;
  const tmp = closure_7(arg0);
  const items = [ConjureProjectStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => null != ConjureProjectStore.getProject(closure_0), items1);
  const obj = require("initialize");
  const items2 = [ConjureChatStore];
  const items3 = [arg0];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => ConjureChatStore.hasLoadedHistory(closure_0), items3);
  const obj2 = require("initialize");
  const items4 = [ConjureChatStore];
  const items5 = [arg0];
  const stateFromStores2 = require("initialize").useStateFromStores(items4, () => ConjureChatStore.getMessages(closure_0), items5);
  const obj3 = require("initialize");
  const items6 = [ConjureConnectionStore];
  const items7 = [arg0];
  const stateFromStores3 = require("initialize").useStateFromStores(items6, () => ConjureConnectionStore.getConnState(closure_0), items7);
  const tmp6 = _slicedToArray(noop.useState(0), 2);
  dependencyMap = tmp6[1];
  const items8 = [arg0, stateFromStores, stateFromStores1, stateFromStores2, tmp, stateFromStores3];
  const layoutEffect = noop.useLayoutEffect(() => {
    const result = conjureScopeSetup.reconcileHeldConjurePrompt(closure_0, () => closure_1_1((arg0) => arg0 + 1));
  }, items8);
  return tmp6[0];
});
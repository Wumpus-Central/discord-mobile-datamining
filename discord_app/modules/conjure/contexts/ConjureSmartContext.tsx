// === Module 11733: ConjureSmartContext ===

// Module 11733 (ConjureSmartContext)
import conjureSmartContextConnection from "conjureSmartContextConnection" /* 10761 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureChatStore from "ConjureChatStore" /* 10657 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10656 */;
import ConjureSmartContextStore from "ConjureSmartContextStore" /* 10666 */;

const require = globalThis.__r;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureContextSwitchRow(arg0, id) {
  _require = arg0;
  const frame = id;
  const cResult = require("c").c(27);
  id = id.id;
  ({ status, error } = id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureConnectionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class S {
      constructor() {
        return "open" === closure_6.getConnState(closure_0);
      }
    }
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = S;
    cResult[3] = items1;
    let tmp7 = items1;
  } else {
    class S {
      constructor() {
        return "open" === closure_6.getConnState(closure_0);
      }
    }
    tmp7 = cResult[3];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, S, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return "open" === closure_6.getConnState(closure_0);
      }
    }
    const items2 = [ConjureChatStore];
    cResult[4] = items2;
    const tmp9 = items2;
  } else {
    class S {
      constructor() {
        return "open" === closure_6.getConnState(closure_0);
      }
    }
  }
  if (cResult[5] !== arg0) {
    class S {
      constructor() {
        return "open" === closure_6.getConnState(closure_0);
      }
    }
    const items3 = [arg0];
    cResult[5] = arg0;
    cResult[6] = tmp12;
    cResult[7] = items3;
    let tmp11 = items3;
  } else {
    class S {
      constructor() {
        return "open" === closure_6.getConnState(closure_0);
      }
    }
    tmp11 = cResult[7];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp9, tmp12, tmp11);
  const tmpResult2 = require("initialize");
  [r10062, _slicedToArray] = noop.useState(null);
  if (cResult[8] === id) {
    class S {
      constructor() {
        return "open" === closure_6.getConnState(closure_0);
      }
    }
  }
  const fn = function p() {
    const obj = { frame, ok: conjureSmartContextConnection.undoContextSwitch(closure_0, id) };
    return _slicedToArray(obj);
  };
  cResult[8] = id;
  cResult[9] = id;
  cResult[10] = arg0;
  cResult[11] = fn;
  const tmp14 = _slicedToArray(noop.useState(null), 2);
}) : (function useConjureContextSwitchRow(arg0, id) {
  _require = arg0;
  importDefault = id;
  id = id.id;
  ({ status, error } = id);
  const items = [ConjureConnectionStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => "open" === ConjureConnectionStore.getConnState(closure_0), items1);
  let obj = require("initialize");
  const items2 = [ConjureChatStore];
  const items3 = [arg0];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    const isThinkingResult = ConjureChatStore.isThinking(closure_0);
    let tmp3 = !isThinkingResult;
    if (!isThinkingResult) {
      tmp3 = !ConjureChatStore.isCompacting(closure_0);
    }
    return tmp3;
  }, items3);
  const obj2 = require("initialize");
  [tmp6, _slicedToArray] = noop.useState(null);
  const items4 = [id, arg0, id];
  let frame;
  const callback = noop.useCallback(() => {
    const obj = { frame, ok: conjureSmartContextConnection.undoContextSwitch(closure_0, id) };
    return _slicedToArray(obj);
  }, items4);
  if (tmp6 != null) {
    frame = tmp6.frame;
  }
  let tmp9 = null;
  if (frame === id) {
    tmp9 = tmp6;
  }
  let ok;
  if (tmp9 != null) {
    ok = tmp9.ok;
  }
  if ("undone" === status) {
    return null;
  } else if ("reverted" === status) {
    const obj3 = { label: null, body: null, note: null, action: null };
    const intl5 = tmp(tmp2[9]).intl;
    obj3.label = intl5.string(require("module_3830").uQRAzS);
    const intl6 = tmp(tmp2[9]).intl;
    obj3.body = intl6.string(require("module_3830")["24OcbD"]);
    return obj3;
  } else {
    let tmp13 = "failed" === error;
    if (!tmp13) {
      let ok1;
      if (tmp9 != null) {
        ok1 = tmp9.ok;
      }
      tmp13 = false === ok1;
    }
    const obj4 = { label: null, body: null, note: null, action: null };
    const intl = tmp(tmp2[9]).intl;
    obj4.label = intl.string(require("module_3830").iBrh0c);
    const intl2 = tmp(tmp2[9]).intl;
    obj4.body = intl2.string(require("module_3830").sRY8wn);
    if ("busy" === error) {
      const intl4 = tmp(tmp2[9]).intl;
      let stringResult = intl4.string(tmp14(tmp2[10]).QoixaY);
    } else {
      stringResult = null;
      if (tmp13) {
        const intl3 = tmp(tmp2[9]).intl;
        stringResult = intl3.string(tmp14(tmp2[10])["9fvHNe"]);
      }
    }
    obj4.note = stringResult;
    let tmp16 = null;
    if ("expired" !== status) {
      const intl7 = tmp(tmp2[9]).intl;
      if ("active" === status) {
        let FzX9h8 = tmp14(tmp2[10])["7q2YyD"];
      } else {
        FzX9h8 = tmp14(tmp2[10]).FzX9h8;
      }
      const obj5 = { text: intl7.string(FzX9h8), confirm: null, disabled: null, onPress: null };
      let tmp17 = "committed" === status;
      obj5.confirm = tmp17;
      let tmp18 = !stateFromStores;
      if (stateFromStores) {
        tmp18 = tmp11;
      }
      if (!tmp18) {
        if (tmp17) {
          tmp17 = !stateFromStores1;
        }
        tmp18 = tmp17;
      }
      obj5.disabled = tmp18;
      obj5.onPress = callback;
      tmp16 = obj5;
    }
    obj4.action = tmp16;
    return obj4;
  }
  tmp11 = true === ok && stateFromStores;
  const tmp5 = _slicedToArray(noop.useState(null), 2);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/contexts/ConjureSmartContext.tsx");

export const useConjureContextSwitchRow = tmp2;
export const useConjureSmartContextSetting = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureSmartContextSetting(arg0) {
  _require = arg0;
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureSmartContextStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return ConjureSmartContextStore.getSmartContext(closure_0);
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
  if (cResult[4] !== arg0) {
    const fn2 = function c(arg0) {
      return conjureSmartContextConnection.sendSmartContext(closure_0, arg0);
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[5];
  }
  const tmpResult = require("initialize");
  return require("useToggleDraft").useToggleDraft(stateFromStores, tmp9);
}) : (function useConjureSmartContextSetting(arg0) {
  _require = arg0;
  const items = [ConjureSmartContextStore];
  const items1 = [arg0];
  const items2 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ConjureSmartContextStore.getSmartContext(closure_0), items1);
  const callback = noop.useCallback((arg0) => conjureSmartContextConnection.sendSmartContext(closure_0, arg0), items2);
  const obj = require("initialize");
  return require("useToggleDraft").useToggleDraft(stateFromStores, callback);
});
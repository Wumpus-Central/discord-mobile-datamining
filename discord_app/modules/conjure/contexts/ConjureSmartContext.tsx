// === Module 11334: ConjureSmartContext ===

// Module 11334 (ConjureSmartContext)
import conjureSmartContextConnection from "conjureSmartContextConnection" /* 10754 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureChatStore from "ConjureChatStore" /* 10664 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10663 */;
import ConjureSmartContextStore from "ConjureSmartContextStore" /* 10672 */;

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
    obj3.label = intl5.string(require("module_3849").uQRAzS);
    const intl6 = tmp(tmp2[9]).intl;
    obj3.body = intl6.string(require("module_3849")["24OcbD"]);
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
    obj4.label = intl.string(require("module_3849").iBrh0c);
    const intl2 = tmp(tmp2[9]).intl;
    obj4.body = intl2.string(require("module_3849").sRY8wn);
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
  const cResult = require("c").c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureSmartContextStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
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
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  [flag] = noop.useState(null);
  if (tmp11) {
    tmp10(null);
  }
  let tmp13 = null != flag;
  if (tmp13) {
    let flag2 = stateFromStores;
    if (stateFromStores == null) {
      flag2 = false;
    }
    tmp13 = flag !== flag2;
  }
  dependencyMap = tmp13;
  if (cResult[4] === tmp13) {
    if (cResult[5] === flag) {
      if (cResult[6] === arg0) {
        let tmp14 = cResult[7];
      }
      if (flag == null) {
        flag = stateFromStores;
      }
      if (flag == null) {
        flag = false;
      }
      if (cResult[8] === tmp13) {
        if (cResult[9] === tmp14) {
          if (cResult[10] === flag) {
            let tmp15 = cResult[11];
          }
          return tmp15;
        }
      }
      const obj2 = { checked: flag, changed: tmp13, setChecked: tmp10, save: tmp14 };
      cResult[8] = tmp13;
      cResult[9] = tmp14;
      cResult[10] = flag;
      cResult[11] = obj2;
      tmp15 = obj2;
    }
  }
  const fn2 = function x() {
    let sendSmartContextResult = !closure_2;
    if (closure_2) {
      sendSmartContextResult = null == flag;
    }
    if (!sendSmartContextResult) {
      sendSmartContextResult = conjureSmartContextConnection.sendSmartContext(closure_0, flag);
    }
    return sendSmartContextResult;
  };
  cResult[4] = tmp13;
  cResult[5] = flag;
  cResult[6] = arg0;
  cResult[7] = fn2;
  tmp14 = fn2;
  tmp11 = null != flag && flag === stateFromStores;
  const tmpResult = require("initialize");
}) : (function useConjureSmartContextSetting(arg0) {
  _require = arg0;
  const items = [ConjureSmartContextStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ConjureSmartContextStore.getSmartContext(closure_0), items1);
  [checked, setChecked] = noop.useState(null);
  if (tmp4) {
    setChecked(null);
  }
  changed = null != checked;
  if (changed) {
    let flag2 = stateFromStores;
    if (stateFromStores == null) {
      flag2 = false;
    }
    changed = checked !== flag2;
  }
  const items2 = [changed, checked, arg0];
  const save = noop.useCallback(() => {
    let sendSmartContextResult = !changed;
    if (changed) {
      sendSmartContextResult = null == checked;
    }
    if (!sendSmartContextResult) {
      sendSmartContextResult = conjureSmartContextConnection.sendSmartContext(closure_0, checked);
    }
    return sendSmartContextResult;
  }, items2);
  if (checked == null) {
    checked = stateFromStores;
  }
  if (checked == null) {
    checked = false;
  }
  return { checked, changed, setChecked, save };
});
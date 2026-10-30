// discord_app/modules/conjure/contexts/ConjureSmartContext.tsx
import conjureSmartContextConnection from "conjureSmartContextConnection.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureChatStore from "../chat/ConjureChatStore.tsx";
import ConjureConnectionStore from "../connection/ConjureConnectionStore.tsx";
import ConjureSmartContextStore from "ConjureSmartContextStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/contexts/ConjureSmartContext.tsx");

export function useConjureContextSwitchRow(projectId, contextSwitch) {
  _require = projectId;
  importDefault = contextSwitch;
  const id = contextSwitch.id;
  ({ status, error } = contextSwitch);
  const items = [ConjureConnectionStore];
  const items1 = [projectId];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => "open" === ConjureConnectionStore.getConnState(closure_0),
    items1,
  );
  let obj = require("initialize");
  const items2 = [ConjureChatStore];
  const items3 = [projectId];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items2,
    () => {
      const isThinkingResult = ConjureChatStore.isThinking(closure_0);
      let tmp3 = !isThinkingResult;
      if (!isThinkingResult) {
        tmp3 = !ConjureChatStore.isCompacting(closure_0);
      }
      return tmp3;
    },
    items3,
  );
  const obj2 = require("initialize");
  [tmp6, _slicedToArray] = noop.useState(null);
  const items4 = [contextSwitch, projectId, id];
  let frame;
  const callback = noop.useCallback(() => {
    const obj = { frame, ok: conjureSmartContextConnection.undoContextSwitch(closure_0, id) };
    return _slicedToArray(obj);
  }, items4);
  if (tmp6 != null) {
    frame = tmp6.frame;
  }
  let tmp9 = null;
  if (frame === contextSwitch) {
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
    const intl5 = tmp(tmp2[7]).intl;
    obj3.label = intl5.string(require("../intl/ConjureUntranslated.messages.js").uQRAzS);
    const intl6 = tmp(tmp2[7]).intl;
    obj3.body = intl6.string(require("../intl/ConjureUntranslated.messages.js")["24OcbD"]);
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
    const intl = tmp(tmp2[7]).intl;
    obj4.label = intl.string(require("../intl/ConjureUntranslated.messages.js").iBrh0c);
    const intl2 = tmp(tmp2[7]).intl;
    obj4.body = intl2.string(require("../intl/ConjureUntranslated.messages.js").sRY8wn);
    if ("busy" === error) {
      const intl4 = tmp(tmp2[7]).intl;
      let stringResult = intl4.string(tmp14(tmp2[8]).QoixaY);
    } else {
      stringResult = null;
      if (tmp13) {
        const intl3 = tmp(tmp2[7]).intl;
        stringResult = intl3.string(tmp14(tmp2[8])["9fvHNe"]);
      }
    }
    obj4.note = stringResult;
    let tmp16 = null;
    if ("expired" !== status) {
      const intl7 = tmp(tmp2[7]).intl;
      if ("active" === status) {
        let FzX9h8 = tmp14(tmp2[8])["7q2YyD"];
      } else {
        FzX9h8 = tmp14(tmp2[8]).FzX9h8;
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
}
export function useConjureSmartContextSetting(arg0) {
  _require = arg0;
  const items = [ConjureSmartContextStore];
  const items1 = [arg0];
  const items2 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => ConjureSmartContextStore.getSmartContext(closure_0),
    items1,
  );
  const callback = noop.useCallback((arg0) => conjureSmartContextConnection.sendSmartContext(closure_0, arg0), items2);
  const obj = require("initialize");
  return require("useToggleDraft").useToggleDraft(stateFromStores, callback);
}

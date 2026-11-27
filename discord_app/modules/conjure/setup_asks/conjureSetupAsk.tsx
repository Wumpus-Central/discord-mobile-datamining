// === Module 18655: conjureSetupAsk ===

// Module 18655 (conjureSetupAsk)
import conjureChatTurns from "conjureChatTurns" /* 7660 */;
import conjureSettingsRequest from "conjureSettingsRequest" /* 18529 */;
import ConjureSecretRequestState from "ConjureSecretRequestState" /* 18654 */;
import conjureSettingsAsks from "conjureSettingsAsks" /* 18656 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 7710 */;

const require = globalThis.__r;

require = fn;
function conjureSetupAskState(ask, settings) {
  if ("keys" === ask.kind) {
    ({ request, status } = ask);
    let secrets;
    if (settings != null) {
      secrets = settings.secrets;
    }
    if (secrets == null) {
      secrets = [];
    }
    const found = secrets.filter((set) => set.set);
    const fields = request.fields;
    length = fields.filter((name) => !set.has(name.name)).length;
    let str3 = "saved";
    if ("received" !== status) {
      str3 = status;
    }
    const obj2 = { status: str3, presentation: "button", needed: null, form: null };
    let num2 = 0;
    if ("open" === status) {
      if (length <= 0) {
        length = request.fields.length;
      }
      num2 = length;
    }
    obj2.needed = num2;
    const obj3 = { kind: "keys", request };
    obj2.form = obj3;
    return obj2;
  } else {
    ({ request: request2, saved } = ask);
    ({ askId, superseded } = ask);
    let str2 = "saved";
    if (!obj7.conjureSettingsRequestDone(request2, settings, saved)) {
      let str = "open";
      if (superseded) {
        str = "superseded";
      }
      str2 = str;
    }
    const obj = { status: str2, presentation: null, needed: null, form: null };
    obj7 = conjureSettingsAsks;
    obj.presentation = conjureSettingsRequest.conjureSettingsRequestPresentation(request2, settings);
    const tmp7Result = conjureSettingsRequest;
    obj.needed = conjureSettingsRequest.conjureSettingsRequestNeeded(request2, settings, saved);
    const obj4 = { kind: "settings", request: request2, askId };
    obj.form = obj4;
    return obj;
  }
}
function newestOpenSetupAsk(memo, stateFromStores) {
  let tmp3;
  let tmp7;
  let tmp = savedSettingsRequests;
  if (savedSettingsRequests === undefined) {
    tmp = set;
  }
  let diff = memo.length - 1;
  if (0 <= diff) {
    while (true) {
      tmp3 = memo[diff];
      if (null != tmp3) {
        if ("assistant" === tmp3.role) {
          let obj10 = conjureChatTurns;
          let secretRequest;
          if (obj10.turnSettled(tmp3)) {
            secretRequest = tmp3.secretRequest;
          }
          if (null != secretRequest) {
            if (secretRequest.fields.length > 0) {
              let obj = { kind: "keys", request: secretRequest, status: null };
              let tmp13Result = ConjureSecretRequestState;
              let secrets;
              if (stateFromStores != null) {
                secrets = stateFromStores.secrets;
              }
              let result = tmp13Result.secretRequestStatuses(memo, secrets);
              let str = result.get(tmp3.render_id);
              if (str == null) {
                str = "open";
              }
              obj.status = str;
              tmp7 = obj;
              if (null != tmp7) {
                break;
              }
            }
          }
          let tmp13Result4 = conjureSettingsAsks;
          let result1 = tmp13Result4.messageSettingsRequest(tmp3);
          tmp7 = null;
          if (null != result1) {
            let obj2 = { kind: "settings", request: result1, askId: tmp3.id, saved: null, superseded: null };
            let tmp13Result5 = conjureSettingsAsks;
            obj2.saved = tmp13Result5.conjureSettingsRequestSaved(tmp3.id, memo, tmp);
            let tmp13Result6 = conjureSettingsAsks;
            let result2 = tmp13Result6.supersededSettingsRequests(memo);
            obj2.superseded = result2.has(tmp3.id);
            tmp7 = obj2;
          }
        }
      }
      diff = diff - 1;
    }
    const needed = conjureSetupAskState(tmp7, stateFromStores).needed;
    let tmp12 = null;
    if (needed > 0) {
      const obj3 = { id: tmp3.id, needed, form: tmp11 };
      tmp12 = obj3;
    }
    return tmp12;
  }
  return null;
}
const set = new Set();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/setup_asks/conjureSetupAsk.tsx");

export { conjureSetupAskState };
export { newestOpenSetupAsk };
export function useConjureSetupAskBar(projectId, memo) {
  _require = projectId;
  dependencyMap = memo;
  items = [closure_4];
  const items1 = [projectId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ConjureSettingsStore.getSettings(closure_0), items1);
  const obj = require("initialize");
  const savedSettingsRequests = require("conjureSettingsAsks").useSavedSettingsRequests();
  const items2 = [memo, stateFromStores, savedSettingsRequests];
  memo = savedSettingsRequests.useMemo(() => newestOpenSetupAsk(closure_1, stateFromStores, savedSettingsRequests), items2);
  const tmp4 = stateFromStores(savedSettingsRequests.useState(null), 2);
  closure_4 = tmp4[1];
  let id;
  if (memo != null) {
    id = memo.id;
  }
  const items3 = [id];
  let ask = null;
  const dismiss = savedSettingsRequests.useCallback(() => {
    if (null != id) {
      closure_4(tmp);
    }
  }, items3);
  if (null != memo) {
    ask = null;
    if (memo.id !== tmp4[0]) {
      ask = memo;
    }
  }
  return { ask, dismiss };
}
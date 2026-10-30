// === Module 12619: conjureSettingsAsks ===

// Module 12619 (conjureSettingsAsks)
import conjureChatTurns from "conjureChatTurns" /* 10832 */;
import conjureSettingsRequest from "conjureSettingsRequest" /* 12580 */;
import conjureSettingsSummary from "conjureSettingsSummary" /* 12620 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import ConjureChatStore from "ConjureChatStore" /* 10831 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 10849 */;

const require = globalThis.__r;

require = fn;
function subscribe(arg0) {
  closure_0 = arg0;
  set1.add(arg0);
  return () => {
    set1.delete(closure_0);
  };
}
function markSettingsRequestSaved(arg0) {
  if (!set.has(arg0)) {
    const _Set = Set;
    const items = [];
    items[HermesBuiltin.arraySpread(set, 0)] = arg0;
    set = new Set(items);
    for (const item10021 of set1) {
      let item10021Result = item10021();
      continue;
    }
  }
}
function supersededSettingsRequests(messages) {
  set = new Set();
  let diff = messages.length - 1;
  let flag = false;
  let flag2 = false;
  if (0 <= diff) {
    do {
      let tmp2 = messages[diff];
      let someResult = flag2;
      let tmp6 = flag;
      let flag3 = flag2;
      if (null != tmp2) {
        tmp6 = flag;
        flag3 = someResult;
        if ("assistant" === tmp2.role) {
          tmp6 = flag;
          flag3 = someResult;
          if (null != tmp2.settingsRequest) {
            let obj3 = conjureChatTurns;
            tmp6 = flag;
            flag3 = someResult;
            if (obj3.turnSettled(tmp2)) {
              let keys = tmp2.settingsRequest.keys;
              if (keys == null) {
                keys = [];
              }
              let tmp7 = flag;
              if (!flag) {
                if (0 !== keys.length) {
                  someResult = keys.some((item) => set1.has(item));
                }
                tmp7 = someResult;
              }
              if (tmp7) {
                let addResult = set.add(tmp2.id);
              }
              for (const item10039 of keys) {
                let addResult1 = set1.add(item10039);
                continue;
              }
              let tmp12 = flag;
              if (!flag) {
                tmp12 = 0 === keys.length;
              }
              tmp6 = tmp12;
              flag3 = true;
            }
          }
        }
      }
      diff = diff - 1;
      flag = tmp6;
      flag2 = flag3;
    } while (0 <= diff);
  }
  return set;
}
let set = new Set();
const set1 = new Set();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsAsks.tsx");

export { markSettingsRequestSaved };
export function useSavedSettingsRequests() {
  return noop.useSyncExternalStore(subscribe, () => set);
}
export { supersededSettingsRequests };
export function conjureSettingsRequestDone(settingsRequest, settings, arg2) {
  if (arg2) {
    if (null != settings) {
      const result = conjureSettingsRequest.conjureSettingsRequestKeys(settingsRequest, settings);
      let tmp6 = result.length > 0;
      if (tmp6) {
        const obj2 = { keys: result };
        tmp6 = !conjureSettingsRequest.conjureSettingsRequestBlocks(obj2, settings);
        const tmp4Result = conjureSettingsRequest;
      }
      return tmp6;
    }
  }
  return false;
}
export function hasOtherOpenSetupAsk(arr, arg1, secrets, arg3) {
  _require = arg1;
  dependencyMap = secrets;
  secrets = undefined;
  if (secrets != null) {
    secrets = secrets.secrets;
  }
  closure_3 = require("ConjureSecretRequestState").secretRequestStatuses(arr, secrets);
  supersededSettingsRequests(arr);
  return arr.some((role) => {
    let tmp = "assistant" !== role.role;
    if (!tmp) {
      tmp = role.id === closure_0;
    }
    if (!tmp) {
      tmp = !conjureChatTurns.turnSettled(role);
    }
    let tmp5 = !tmp;
    if (!tmp) {
      let tmp7 = null != role.secretRequest;
      if (tmp7) {
        tmp7 = "open" === closure_3.get(role.render_id);
      }
      if (!tmp7) {
        let tmp9 = null != role.settingsRequest;
        if (tmp9) {
          tmp9 = !set2.has(role.id);
        }
        if (tmp9) {
          let flag = false;
          if (set.has(role.id)) {
            flag = false;
            if (null != closure_1) {
              const result = conjureSettingsRequest.conjureSettingsRequestKeys(role.settingsRequest, closure_1);
              let tmp15 = result.length > 0;
              if (tmp15) {
                const obj3 = { keys: result };
                tmp15 = !conjureSettingsRequest.conjureSettingsRequestBlocks(obj3, closure_1);
                const tmp13Result = conjureSettingsRequest;
              }
              flag = tmp15;
            }
          }
          tmp9 = !flag;
        }
        tmp7 = tmp9;
      }
      tmp5 = tmp7;
    }
    return tmp5;
  });
}
export function useConjureSettingsAsk(projectId, request, askId) {
  _require = projectId;
  dependencyMap = request;
  _slicedToArray = askId;
  const syncExternalStore = noop.useSyncExternalStore(subscribe, () => set);
  [tmp2, noop] = noop.useState(false);
  if (null != askId) {
    let hasItem = syncExternalStore.has(askId);
  }
  let items = [askId];
  let obj2 = { done: null, superseded: null, summary: null, markSaved: null };
  const callback = noop.useCallback(() => {
    if (null != closure_2) {
      markSettingsRequestSaved(tmp);
    } else {
      noop(true);
    }
  }, items);
  const tmp = _slicedToArray(noop.useState(false), 2);
  const items1 = [ConjureSettingsStore];
  const items2 = [projectId, request, hasItem];
  obj2.done = require("initialize").useStateFromStores(items1, () => {
    const settings = ConjureSettingsStore.getSettings(closure_0);
    let flag = false;
    if (hasItem) {
      flag = false;
      if (null != settings) {
        const result = conjureSettingsRequest.conjureSettingsRequestKeys(closure_1, settings);
        let tmp6 = result.length > 0;
        if (tmp6) {
          const obj2 = { keys: result };
          tmp6 = !conjureSettingsRequest.conjureSettingsRequestBlocks(obj2, settings);
          const tmp4Result = conjureSettingsRequest;
        }
        flag = tmp6;
      }
    }
    return flag;
  }, items2);
  const obj4 = require("initialize");
  const items3 = [ConjureChatStore];
  const items4 = [projectId, askId];
  obj2.superseded = require("initialize").useStateFromStores(items3, () => {
    hasItem = null != closure_2;
    if (hasItem) {
      hasItem = supersededSettingsRequests(ConjureChatStore.getMessages(closure_0)).has(tmp);
      const obj = supersededSettingsRequests(ConjureChatStore.getMessages(closure_0));
    }
    return hasItem;
  }, items4);
  const obj5 = require("initialize");
  const items5 = [ConjureSettingsStore, hasItem];
  const items6 = [projectId, request];
  obj2.summary = require("initialize").useStateFromStoresArray(items5, () => {
    const settings = ConjureSettingsStore.getSettings(closure_0);
    if (null == settings) {
      let items = [];
    } else {
      const result = conjureSettingsSummary.conjureSettingsSummary(closure_1, settings, (arg0) => {
        channel = channel.getChannel(arg0);
        let name;
        if (channel != null) {
          name = channel.name;
        }
        if (name == null) {
          name = null;
        }
        return name;
      });
      items = result.map((text) => text.text);
    }
    return items;
  }, items6);
  obj2.markSaved = callback;
  return obj2;
}
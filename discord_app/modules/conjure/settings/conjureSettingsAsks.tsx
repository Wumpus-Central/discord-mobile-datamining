// discord_app/modules/conjure/settings/conjureSettingsAsks.tsx
import util from "../../../intl/index.native.tsx";
import conjureChatTurns from "../chat/conjureChatTurns.tsx";
import conjureSettingsRequest from "conjureSettingsRequest.tsx";
import conjureRemixSettingsRequest from "../remix/conjureRemixSettingsRequest.tsx";
import conjureSettingsSummary from "conjureSettingsSummary.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import ConjureChatStore from "../chat/ConjureChatStore.tsx";
import ConjureSettingsStore from "ConjureSettingsStore.tsx";

const require = globalThis.__r;

require = fn;
function subscribe(arg0) {
  closure_0 = arg0;
  set1.add(arg0);
  return () => {
    set1.delete(closure_0);
  };
}
function messageSettingsRequest(role) {
  if ("assistant" !== role.role) {
    return null;
  } else {
    let result = conjureRemixSettingsRequest.conjureRemixSettingsRequest(role.projectEvent);
    if (null == result) {
      let tmp5 = null;
      if (tmpResult.turnSettled(role)) {
        let settingsRequest = role.settingsRequest;
        if (settingsRequest == null) {
          settingsRequest = null;
        }
        tmp5 = settingsRequest;
      }
      result = tmp5;
      tmpResult = conjureChatTurns;
    }
    return result;
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
      let tmp6 = null;
      if (null != tmp2) {
        tmp6 = messageSettingsRequest(tmp2);
      }
      let tmp8 = flag;
      let flag3 = someResult;
      if (null != tmp2) {
        tmp8 = flag;
        flag3 = someResult;
        if (null != tmp6) {
          let keys = tmp6.keys;
          if (keys == null) {
            keys = [];
          }
          let tmp9 = flag;
          if (!flag) {
            if (0 !== keys.length) {
              someResult = keys.some((item) => set1.has(item));
            }
            tmp9 = someResult;
          }
          if (tmp9) {
            let addResult = set.add(tmp2.id);
          }
          for (const item10040 of keys) {
            let addResult1 = set1.add(item10040);
            continue;
          }
          let tmp14 = flag;
          if (!flag) {
            tmp14 = 0 === keys.length;
          }
          tmp8 = tmp14;
          flag3 = true;
        }
      }
      diff = diff - 1;
      flag = tmp8;
      flag2 = flag3;
    } while (0 <= diff);
  }
  return set;
}
function confirmedSettingsRequests(messages) {
  set = new Set();
  const intl = util.intl;
  let diff = messages.length - 1;
  let flag = false;
  if (0 <= diff) {
    let trimmed = messages[diff];
    while (null == trimmed) {
      diff = diff - 1;
      flag = tmp5;
    }
    if ("user" === trimmed.role) {
      if (!flag) {
        trimmed = trimmed.content.trim();
        const tmp16 = trimmed === tmp;
      }
    } else {
      let tmp13 = flag;
      if (flag) {
        let tmp7 = null;
        if ("assistant" === trimmed.role) {
          let result = conjureRemixSettingsRequest.conjureRemixSettingsRequest(trimmed.projectEvent);
          if (null == result) {
            let tmp11 = null;
            if (tmp8Result.turnSettled(trimmed)) {
              let settingsRequest = trimmed.settingsRequest;
              if (settingsRequest == null) {
                settingsRequest = null;
              }
              tmp11 = settingsRequest;
            }
            result = tmp11;
            tmp8Result = conjureChatTurns;
          }
          tmp7 = result;
        }
        tmp13 = null != tmp7;
      }
      if (tmp13) {
        set.add(trimmed.id);
      }
    }
  }
  return set;
}
let set = new Set();
const set1 = new Set();
let closure_13 = [];
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsAsks.tsx");

export function markSettingsRequestSaved(askId) {
  if (!set.has(askId)) {
    const _Set = Set;
    items = [];
    items[HermesBuiltin.arraySpread(set, 0)] = askId;
    set = new Set(items);
    for (const item10021 of set1) {
      let item10021Result = item10021();
      continue;
    }
  }
}
export function useSavedSettingsRequests() {
  return noop.useSyncExternalStore(subscribe, () => set);
}
export { messageSettingsRequest };
export { supersededSettingsRequests };
export { confirmedSettingsRequests };
export function conjureSettingsRequestDone(request2, settings, saved) {
  if (saved) {
    if (null != settings) {
      const result = conjureSettingsRequest.conjureSettingsRequestKeys(request2, settings);
      let tmp6 = result.length > 0;
      if (tmp6) {
        const obj2 = { keys: result };
        tmp6 = 0 === conjureSettingsRequest.conjureSettingsRequestNeeded(obj2, settings, true);
        const tmp4Result = conjureSettingsRequest;
      }
      return tmp6;
    }
  }
  return false;
}
export function conjureSettingsRequestSaved(id, messages, set) {
  let hasItem = set.has(id);
  if (!hasItem) {
    hasItem = confirmedSettingsRequests(messages).has(id);
    const obj = confirmedSettingsRequests(messages);
  }
  return hasItem;
}
export function useConjureSettingsAskSource(projectId, memo, askId) {
  _require = projectId;
  closure_1 = memo;
  dependencyMap = askId;
  syncExternalStore = syncExternalStore.useSyncExternalStore(subscribe, () => set);
  let obj = { saved: null, superseded: null, summary: null };
  items = [ConjureChatStore];
  const items1 = [projectId, askId, syncExternalStore];
  obj.saved = require("initialize").useStateFromStores(
    items,
    () => {
      let tmp2 = null != closure_2;
      if (tmp2) {
        const messages = ConjureChatStore.getMessages(closure_0);
        let hasItem = syncExternalStore.has(closure_2);
        if (!hasItem) {
          hasItem = confirmedSettingsRequests(messages).has(closure_2);
          const obj = confirmedSettingsRequests(messages);
        }
        tmp2 = hasItem;
      }
      return tmp2;
    },
    items1,
  );
  const obj2 = require("initialize");
  const items2 = [ConjureChatStore];
  const items3 = [projectId, askId];
  obj.superseded = require("initialize").useStateFromStores(
    items2,
    () => {
      let hasItem = null != closure_2;
      if (hasItem) {
        hasItem = supersededSettingsRequests(ConjureChatStore.getMessages(closure_0)).has(tmp);
        const obj = supersededSettingsRequests(ConjureChatStore.getMessages(closure_0));
      }
      return hasItem;
    },
    items3,
  );
  const obj3 = require("initialize");
  const items4 = [ConjureSettingsStore, ChannelStore];
  const items5 = [projectId, memo];
  obj.summary = require("initialize").useStateFromStoresArray(
    items4,
    () => {
      const settings = ConjureSettingsStore.getSettings(closure_0);
      if (null != closure_1) {
        if (null != settings) {
          const result = conjureSettingsSummary.conjureSettingsSummary(tmp2, settings, (arg0) => {
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
          let mapped = result.map((text) => text.text);
        }
        return mapped;
      }
      mapped = closure_13;
    },
    items5,
  );
  return obj;
}

// discord_app/stores/native/NUFStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import createGuildRecordFromRust from "../GuildStore.tsx";
import markAllUserIdListsStale from "../RelationshipStore.tsx";

function handleCacheOrSocketLoaded() {
  let flag = false;
  c2 = false;
  const tmp = store.getGuildCount() > 0;
  if (tmp !== closure_3) {
    closure_3 = tmp;
    flag = true;
  }
  if (tmp !== closure_4) {
    closure_4 = tmp;
    flag = true;
  }
  return flag;
}
function handleUpdate() {
  if (c2) {
    return false;
  } else {
    const tmp2 = store.getGuildCount() > 0;
    let flag = false;
    if (tmp2 !== closure_3) {
      closure_3 = tmp2;
      flag = true;
    }
    if (tmp2 !== closure_4) {
      closure_4 = tmp2;
      flag = true;
    }
    return flag;
  }
}
let c2 = false;
let c3 = false;
let c4 = false;
const PersistedStore = initializeDefault.PersistedStore;
class NUFStore extends PersistedStore {
}
const prototype = NUFStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_1, closure_0);
  const items = [closure_1, closure_0];
  this.syncWith(items, handleUpdate);
};
prototype["getState"] = function getState() {
  return {};
};
Object.defineProperty(prototype, "showMentionsInNotificationTab", {
  get: function showMentionsInNotificationTab() {
    return c4;
  },
  set: undefined
});
Object.defineProperty(prototype, "showQuickSwitcher", {
  get: function showQuickSwitcher() {
    return c3;
  },
  set: undefined
});
NUFStore.displayName = "NUFStore";
NUFStore.persistKey = "NUFStore";
const nUFStore = new NUFStore(dispatcherDefault, {
  CACHE_LOADED: function handleCacheLoaded() {
    c2 = true;
  },
  CACHE_LOADED_LAZY: handleCacheOrSocketLoaded,
  CONNECTION_OPEN: handleCacheOrSocketLoaded
});
const result = require("obj132").fileFinishedImporting("stores/native/NUFStore.tsx");

export default nUFStore;
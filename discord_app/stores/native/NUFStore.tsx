// === Module 7643: NUFStore ===

// Module 7643 (NUFStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GuildStore from "GuildStore" /* 1979 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

function handleCacheOrSocketLoaded() {
  let flag = false;
  c2 = false;
  const tmp = GuildStore.getGuildCount() > 0;
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
    const tmp2 = GuildStore.getGuildCount() > 0;
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
let closure_3 = false;
let closure_4 = false;
const PersistedStore = initializeDefault.PersistedStore;
class NUFStore extends PersistedStore {
}
const prototype = NUFStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(RelationshipStore, GuildStore);
  const items = [RelationshipStore, GuildStore];
  this.syncWith(items, handleUpdate);
};
prototype["getState"] = function getState() {
  return {};
};
Object.defineProperty(prototype, "showMentionsInNotificationTab", {
  get: function showMentionsInNotificationTab() {
    return closure_4;
  },
  set: undefined
});
Object.defineProperty(prototype, "showQuickSwitcher", {
  get: function showQuickSwitcher() {
    return closure_3;
  },
  set: undefined
});
NUFStore.displayName = "NUFStore";
NUFStore.persistKey = "NUFStore";
const nUFStore = new NUFStore(DispatcherDefault, {
  CACHE_LOADED: function handleCacheLoaded() {
    c2 = true;
  },
  CACHE_LOADED_LAZY: handleCacheOrSocketLoaded,
  CONNECTION_OPEN: handleCacheOrSocketLoaded
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/native/NUFStore.tsx");

export default nUFStore;
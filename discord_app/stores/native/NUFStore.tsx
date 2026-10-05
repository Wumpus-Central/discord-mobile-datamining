// === Module 7127: NUFStore ===

// Module 7127 (NUFStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GuildStore from "GuildStore" /* 2074 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import size from "module_2" /* 2 */;

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
    const tmp3 = GuildStore.getGuildCount() > 0;
    let flag = false;
    if (tmp3 !== closure_3) {
      closure_3 = tmp3;
      flag = true;
    }
    if (tmp3 !== closure_4) {
      closure_4 = tmp3;
      flag = true;
    }
    return flag;
  }
}
let c2 = false;
let closure_3 = false;
let closure_4 = false;
const PersistedStore = get_initializedDefault.PersistedStore;
class NUFStore extends PersistedStore {
  initialize() {
    this.waitFor(RelationshipStore, GuildStore);
    const items = [RelationshipStore, GuildStore];
    this.syncWith(items, handleUpdate);
  }
  getState() {
    return {};
  }
}
const prototype = NUFStore.prototype;
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
const obj = {
  CACHE_LOADED: function handleCacheLoaded() {
    c2 = true;
  },
  CACHE_LOADED_LAZY: handleCacheOrSocketLoaded,
  CONNECTION_OPEN: handleCacheOrSocketLoaded
};
const nUFStore = new NUFStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/native/NUFStore.tsx");

export default nUFStore;
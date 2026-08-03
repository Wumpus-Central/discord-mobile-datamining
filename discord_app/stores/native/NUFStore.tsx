import createGuildRecordFromRust from "createGuildRecordFromRust";
import upsertRelationship from "upsertRelationship";
import { PersistedStore } from "initialize";

function handleCacheOrSocketLoaded() {
  let flag = false;
  let c2 = false;
  const tmp = store.getGuildCount() > 0;
  if (tmp !== c3) {
    c3 = tmp;
    flag = true;
  }
  if (tmp !== c4) {
    c4 = tmp;
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
    if (tmp2 !== c3) {
      c3 = tmp2;
      flag = true;
    }
    if (tmp2 !== c4) {
      c4 = tmp2;
      flag = true;
    }
    return flag;
  }
}
let c2 = false;
let c3 = false;
let c4 = false;
class NUFStore extends PersistedStore {
}
const prototype = NUFStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(upsertRelationship, createGuildRecordFromRust);
  const items = [upsertRelationship, createGuildRecordFromRust];
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
const nUFStore = new NUFStore(require("dispatcher"), {
  CACHE_LOADED: function handleCacheLoaded() {
    let c2 = true;
  },
  CACHE_LOADED_LAZY: handleCacheOrSocketLoaded,
  CONNECTION_OPEN: handleCacheOrSocketLoaded
});
const result = require("initialize").fileFinishedImporting("stores/native/NUFStore.tsx");

export default nUFStore;
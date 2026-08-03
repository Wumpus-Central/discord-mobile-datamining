import { Store } from "initialize";
import set from "dispatcher";

const require = arg1;
let map = new Map();
let set = new Set();
let c4 = null;
let c5 = false;
let c6 = false;
class ContentInventoryOutboxStore extends Store {
}
const prototype = ContentInventoryOutboxStore.prototype;
prototype["getMatchingOutboxEntry"] = function getMatchingOutboxEntry(activity) {
  activity = activity.activity;
  const value = map.get(activity.userId);
  if (null != value) {
    if (null != activity) {
      return require(8176) /* isMatchingListeningActivity */.findMatchingEntry(value.entries, activity);
    }
  }
};
prototype["getUserOutbox"] = function getUserOutbox(closure_0) {
  return map.get(closure_0);
};
prototype["isFetchingUserOutbox"] = function isFetchingUserOutbox(closure_0) {
  return set.has(closure_0);
};
Object.defineProperty(prototype, "deleteOutboxEntryError", {
  get: function deleteOutboxEntryError() {
    return c4;
  },
  set: undefined
});
Object.defineProperty(prototype, "isDeletingEntryHistory", {
  get: function isDeletingEntryHistory() {
    return c5;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasInitialized", {
  get: function hasInitialized() {
    return c6;
  },
  set: undefined
});
ContentInventoryOutboxStore.displayName = "ContentInventoryOutboxStore";
const contentInventoryOutboxStore = new ContentInventoryOutboxStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    const map = new Map();
    const set = new Set();
    let c4 = null;
    let c5 = false;
    let c6 = true;
  },
  LOGOUT: function handleLogOut() {
    const map = new Map();
    const set = new Set();
    let c4 = null;
    let c5 = false;
  },
  CONTENT_INVENTORY_FETCH_OUTBOX_START: function handleFetchOutboxStart(userId) {
    set.add(userId.userId);
  },
  CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS: function handleFetchOutboxSuccess(userId) {
    userId = userId.userId;
    const obj = {};
    const merged = Object.assign(userId.outbox);
    obj.lastFetched = Date.now();
    const result = map.set(userId, obj);
    set.delete(userId);
  },
  CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE: function handleFetchOutboxFailure(userId) {
    set.delete(userId.userId);
  },
  CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START: function handleDeleteOutboxEntryStart() {
    let c4 = null;
    let c5 = true;
  },
  CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS: function handleDeleteOutboxEntrySuccess(arg0) {
    let require;
    let userId;
    ({ entry: require, userId } = arg0);
    let c4 = null;
    const value = map.get(userId);
    if (null == value) {
      return false;
    } else {
      const entries = value.entries;
      const obj = {};
      const found = entries.filter((id) => id.id !== id.id);
      const merged = Object.assign(value);
      obj.entries = found;
      const result = map.set(userId, obj);
      let c5 = false;
    }
  },
  CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE: function handleDeleteOutboxEntryFailure(error) {
    error = error.error;
    let c5 = false;
  },
  CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR: function handleClearError() {
    let c4 = null;
    let c5 = false;
  }
});
let result = set.fileFinishedImporting("modules/content_inventory/ContentInventoryOutboxStore.tsx");

export default contentInventoryOutboxStore;
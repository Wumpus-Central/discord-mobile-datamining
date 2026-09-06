// discord_app/modules/content_inventory/ContentInventoryOutboxStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import matchUtils from "matchUtils.tsx";

require = fn;
let map = new Map();
let set = new Set();
let c4 = null;
let c5 = false;
let c6 = false;
const Store = initializeDefault.Store;
class ContentInventoryOutboxStore extends Store {}
const prototype = ContentInventoryOutboxStore.prototype;
prototype["getMatchingOutboxEntry"] = function getMatchingOutboxEntry(activity) {
  activity = activity.activity;
  value = map.get(activity.userId);
  if (null != value) {
    if (null != activity) {
      return matchUtils.findMatchingEntry(value.entries, activity);
    }
  }
};
prototype["getUserOutbox"] = function getUserOutbox(id) {
  return map.get(id);
};
prototype["isFetchingUserOutbox"] = function isFetchingUserOutbox(arg0) {
  return set.has(arg0);
};
Object.defineProperty(prototype, "deleteOutboxEntryError", {
  get: function deleteOutboxEntryError() {
    return c4;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isDeletingEntryHistory", {
  get: function isDeletingEntryHistory() {
    return c5;
  },
  set: undefined,
});
Object.defineProperty(prototype, "hasInitialized", {
  get: function hasInitialized() {
    return c6;
  },
  set: undefined,
});
ContentInventoryOutboxStore.displayName = "ContentInventoryOutboxStore";
const contentInventoryOutboxStore = new ContentInventoryOutboxStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    map = new Map();
    set = new Set();
    c4 = null;
    c5 = false;
    c6 = true;
  },
  LOGOUT: function handleLogOut() {
    map = new Map();
    set = new Set();
    c4 = null;
    c5 = false;
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
    c4 = null;
    c5 = true;
  },
  CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS: function handleDeleteOutboxEntrySuccess(arg0) {
    ({ entry: require, userId } = arg0);
    c4 = null;
    value = map.get(userId);
    if (null == value) {
      return false;
    } else {
      const entries = value.entries;
      const obj = {};
      const found = entries.filter((id) => id.id !== id.id);
      const merged = Object.assign(value);
      obj.entries = found;
      const result = map.set(userId, obj);
      c5 = false;
    }
  },
  CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE: function handleDeleteOutboxEntryFailure(error) {
    error = error.error;
    c5 = false;
  },
  CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR: function handleClearError() {
    c4 = null;
    c5 = false;
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/content_inventory/ContentInventoryOutboxStore.tsx");

export default contentInventoryOutboxStore;

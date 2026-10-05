// === Module 8447: ContentInventoryOutboxStore ===

// Module 8447 (ContentInventoryOutboxStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import matchUtils from "matchUtils" /* 8013 */;
import size from "module_2" /* 2 */;

let map = new Map();
let set = new Set();
let c4 = null;
let c5 = false;
let c6 = false;
const Store = get_initializedDefault.Store;
class ContentInventoryOutboxStore extends Store {
  getMatchingOutboxEntry(activity) {
    activity = activity.activity;
    const value = map.get(activity.userId);
    if (null != value) {
      if (null != activity) {
        const obj = matchUtils;
        return obj.findMatchingEntry(value.entries, activity);
      }
    }
  }
  getUserOutbox(id) {
    return map.get(id);
  }
  isFetchingUserOutbox(userId) {
    return set.has(userId);
  }
}
const prototype = ContentInventoryOutboxStore.prototype;
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
let obj = {
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
    const obj = { lastFetched: Date.now() };
    const merged = Object.assign(userId.outbox);
    const result = set(userId, obj);
    map.set.delete(userId);
  },
  CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE: function handleFetchOutboxFailure(userId) {
    set.delete(userId.userId);
  },
  CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START: function handleDeleteOutboxEntryStart() {
    c4 = null;
    c5 = true;
  },
  CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS: function handleDeleteOutboxEntrySuccess(arg0) {
    let closure_129_0;
    let found;
    let userId;
    ({ entry: closure_129_0, userId } = arg0);
    c4 = null;
    const value = map.get(userId);
    if (null == value) {
      return false;
    } else {
      const entries = value.entries;
      const obj = { entries: found };
      found = entries.filter((id) => id.id !== id.id);
      set = map.set;
      const merged = Object.assign(value);
      const result = set(userId, obj);
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
  }
};
const contentInventoryOutboxStore = new ContentInventoryOutboxStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/content_inventory/ContentInventoryOutboxStore.tsx");

export default contentInventoryOutboxStore;
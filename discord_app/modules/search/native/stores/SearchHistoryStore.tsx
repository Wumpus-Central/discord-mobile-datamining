// discord_app/modules/search/native/stores/SearchHistoryStore.tsx
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import SearchConstants from "../../SearchConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4;

let NATIVE_SEARCH_HISTORY_STORAGE_KEY;
let NATIVE_SEARCH_HISTORY_STORE_DISPLAY_NAME;
const SearchHistoryItemTypes = SearchConstants.SearchHistoryItemTypes;
class SearchHistory {
  constructor() {
    const merged = Object.assign({ items: null });
    merged[0] = [];
    return merged;
  }
  deserialize(arr) {
    this.items = arr.slice(0, 3);
    const items = this.items;
    this.items = items.filter((type) => {
      let everyResult = type.type !== constants.TEXT || null == type.tags;
      if (!everyResult) {
        const tags = type.tags;
        everyResult = tags.every((item) => {
          const obj = closure_1_0(closure_1_1[1]);
          return obj.hasOwnProperty(item, "type");
        });
      }
      return everyResult;
    });
  }
  serialize() {
    return this.items;
  }
  add(type) {
    let tmp = type.type === SearchHistoryItemTypes.TEXT;
    if (tmp) {
      const str = type.text;
      tmp = "" === str.trim();
    }
    if (tmp) {
      tmp = null == type.tags || 0 === type.tags.length;
      const tmp3 = null == type.tags || 0 === type.tags.length;
    }
    if (!tmp) {
      const self = this;
      this.remove(type);
      const items = this.items;
      items.unshift(type);
      const items1 = this.items;
      this.items = items1.slice(0, 3);
    }
  }
  remove(arg0) {
    let closure_0 = arg0;
    const items = this.items;
    this.items = items.filter((item) => {
      const obj = _mod12;
      return !obj.isEqual(item, closure_0);
    });
  }
}
const prototype = SearchHistory.prototype;
const React3 = {};
({ NATIVE_SEARCH_HISTORY_STORAGE_KEY, NATIVE_SEARCH_HISTORY_STORE_DISPLAY_NAME } = SearchConstants);
const PersistedStore = get_initializedDefault.PersistedStore;
class SearchHistoryStore extends PersistedStore {
  getState() {
    const searchHistories = {};
    const entries = Object.entries(closure_4);
    const item = entries.forEach((item) => {
      let serializer;
      let tmp;
      [tmp, serializer] = item;
      if (null != serializer) {
        searchHistories[tmp] = serializer.serialize();
      }
    });
    return { searchHistories };
  }
  initialize(searchHistories) {
    searchHistories = undefined;
    if (searchHistories != null) {
      searchHistories = searchHistories.searchHistories;
    }
    if (null != searchHistories) {
      const obj = _mod12;
      closure_4 = obj.mapValues(searchHistories, (arg0) => {
        if (typeof SearchHistory === "function") {
          const deserializer = Object.assign({ items: null });
          deserializer[0] = [];
          deserializer.deserialize(arg0);
          return deserializer;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
    }
  }
  getSearchHistory(handleChange) {
    let serializer = closure_4[handleChange];
    if (serializer == null) {
      const self = this;
      if (typeof SearchHistory === "function") {
        const merged = Object.assign({ items: null });
        merged[0] = [];
        serializer = merged;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    closure_4[handleChange] = serializer;
    return serializer.serialize();
  }
}
const prototype2 = SearchHistoryStore.prototype;
SearchHistoryStore.displayName = NATIVE_SEARCH_HISTORY_STORE_DISPLAY_NAME;
SearchHistoryStore.persistKey = NATIVE_SEARCH_HISTORY_STORAGE_KEY;
let obj = {
  SEARCH_HISTORY_NATIVE_CLEAR_ITEMS: function handleSearchHistoryClearItems(arg0) {
    delete closure_4[arg0.id];
  },
  SEARCH_HISTORY_NATIVE_REMOVE_ITEM: function handleSearchHistoryRemoveItem(id) {
    id = id.id;
    let obj = closure_4[id];
    const item = id.item;
    if (obj == null) {
      const self = this;
      if (typeof SearchHistory === "function") {
        const merged = Object.assign({ items: null });
        merged[0] = [];
        obj = merged;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    closure_4[id] = obj;
    obj.remove(item);
  },
  SEARCH_HISTORY_NATIVE_ADD_ITEM: function handleSearchHistoryAddItem(id) {
    id = id.id;
    let obj = closure_4[id];
    const item = id.item;
    if (obj == null) {
      const self = this;
      if (typeof SearchHistory === "function") {
        const merged = Object.assign({ items: null });
        merged[0] = [];
        obj = merged;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    closure_4[id] = obj;
    obj.add(item);
  },
};
const searchHistoryStore = new SearchHistoryStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/search/native/stores/SearchHistoryStore.tsx");

export default searchHistoryStore;

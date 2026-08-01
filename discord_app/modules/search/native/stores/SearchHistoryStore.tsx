// === Module 15501: deserialize ===

// Module 15501 (deserialize)
import MessageEmbedTypes from "MessageEmbedTypes";
import { PersistedStore } from "initialize";

let NATIVE_SEARCH_HISTORY_STORAGE_KEY;
let NATIVE_SEARCH_HISTORY_STORE_DISPLAY_NAME;
const SearchHistoryItemTypes = MessageEmbedTypes.SearchHistoryItemTypes;
class SearchHistory {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj[0] = [];
    return obj;
  }
}
const prototype = SearchHistory.prototype;
prototype["deserialize"] = function deserialize(arr) {
  this.items = arr.slice(0, 3);
  const items = this.items;
  this.items = items.filter((type) => {
    let everyResult = type.type !== constants.TEXT;
    if (!everyResult) {
      everyResult = null == type.tags;
    }
    if (!everyResult) {
      const tags = type.tags;
      everyResult = tags.every((key10009) => callback(table[1]).hasOwnProperty(key10009, "type"));
    }
    return everyResult;
  });
};
prototype["serialize"] = function serialize() {
  return this.items;
};
prototype["add"] = function add(type) {
  let tmp = type.type === SearchHistoryItemTypes.TEXT;
  if (tmp) {
    tmp = "" === type.text.trim();
    const str = type.text;
  }
  if (tmp) {
    let tmp3 = null == type.tags;
    if (!tmp3) {
      tmp3 = 0 === type.tags.length;
    }
    tmp = tmp3;
  }
  if (!tmp) {
    const self = this;
    this.remove(type);
    const items = this.items;
    items.unshift(type);
    const items1 = this.items;
    this.items = items1.slice(0, 3);
  }
};
prototype["remove"] = function remove(arg0) {
  let closure_0 = arg0;
  const items = this.items;
  this.items = items.filter((arg0) => !callback(outer1_1[2]).isEqual(arg0, callback));
};
let closure_4 = {};
({ NATIVE_SEARCH_HISTORY_STORAGE_KEY, NATIVE_SEARCH_HISTORY_STORE_DISPLAY_NAME } = MessageEmbedTypes);
class SearchHistoryStore extends PersistedStore {
}
const prototype2 = SearchHistoryStore.prototype;
prototype2["getState"] = function getState() {
  const searchHistories = {};
  const entries = Object.entries(closure_4);
  const item = entries.forEach((arg0) => {
    let obj;
    let tmp;
    [tmp, obj] = arg0;
    if (null != obj) {
      searchHistories[tmp] = obj.serialize();
    }
  });
  return { searchHistories };
};
prototype2["initialize"] = function initialize(searchHistories) {
  searchHistories = undefined;
  if (searchHistories != null) {
    searchHistories = searchHistories.searchHistories;
  }
  if (null != searchHistories) {
    let closure_4 = require(12) /* apply */.mapValues(searchHistories, (arg0) => {
      if (typeof closure_3 !== "fileFinishedImporting") {
        HermesBuiltin.throwTypeError();
      }
      const obj = Object.create(closure_3.prototype);
      obj[0] = [];
      obj.deserialize(arg0);
      return obj;
    });
    let obj = require(12) /* apply */;
  }
};
prototype2["getSearchHistory"] = function getSearchHistory(handleChange) {
  let obj = dependencyMap[handleChange];
  if (obj == null) {
    if (typeof SearchHistory !== "fileFinishedImporting") {
      HermesBuiltin.throwTypeError();
    }
    obj = Object.create(SearchHistory.prototype);
    obj[0] = [];
    const tmp = SearchHistory;
  }
  dependencyMap[handleChange] = obj;
  return obj.serialize();
};
SearchHistoryStore.displayName = NATIVE_SEARCH_HISTORY_STORE_DISPLAY_NAME;
SearchHistoryStore.persistKey = NATIVE_SEARCH_HISTORY_STORAGE_KEY;
const searchHistoryStore = new SearchHistoryStore(require("dispatcher"), {
  SEARCH_HISTORY_NATIVE_CLEAR_ITEMS: function handleSearchHistoryClearItems(arg0) {
    delete tmp[tmp2];
  },
  SEARCH_HISTORY_NATIVE_REMOVE_ITEM: function handleSearchHistoryRemoveItem(id) {
    id = id.id;
    let obj = dependencyMap[id];
    if (obj == null) {
      if (typeof SearchHistory !== "fileFinishedImporting") {
        HermesBuiltin.throwTypeError();
      }
      obj = Object.create(SearchHistory.prototype);
      obj[0] = [];
      const tmp = SearchHistory;
    }
    dependencyMap[id] = obj;
    obj.remove(id.item);
  },
  SEARCH_HISTORY_NATIVE_ADD_ITEM: function handleSearchHistoryAddItem(id) {
    id = id.id;
    let obj = dependencyMap[id];
    if (obj == null) {
      if (typeof SearchHistory !== "fileFinishedImporting") {
        HermesBuiltin.throwTypeError();
      }
      obj = Object.create(SearchHistory.prototype);
      obj[0] = [];
      const tmp = SearchHistory;
    }
    dependencyMap[id] = obj;
    obj.add(id.item);
  }
});
const result = require("apply").fileFinishedImporting("modules/search/native/stores/SearchHistoryStore.tsx");

export default searchHistoryStore;
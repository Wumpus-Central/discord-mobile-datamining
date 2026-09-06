// discord_app/modules/search/native/stores/SearchHistoryStore.tsx
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import initializeDefault from "../../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import SearchConstants from "../../SearchConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const SearchHistoryItemTypes = SearchConstants.SearchHistoryItemTypes;
class SearchHistory {
  constructor() {
    merged = Object.assign({ items: null });
    merged[0] = [];
    return merged;
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
      everyResult = tags.every((item) => closure_1_0(closure_1_1[1]).hasOwnProperty(item, "type"));
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
  closure_0 = arg0;
  const items = this.items;
  this.items = items.filter((item) => !_mod12.isEqual(item, closure_0));
};
const dependencyMap = {};
({ NATIVE_SEARCH_HISTORY_STORAGE_KEY, NATIVE_SEARCH_HISTORY_STORE_DISPLAY_NAME } = SearchConstants);
const PersistedStore = initializeDefault.PersistedStore;
class SearchHistoryStore extends PersistedStore {}
const prototype2 = SearchHistoryStore.prototype;
prototype2["getState"] = function getState() {
  const searchHistories = {};
  const entries = Object.entries(closure_4);
  const item = entries.forEach((item) => {
    [tmp, serializer] = item;
    if (null != serializer) {
      searchHistories[tmp] = serializer.serialize();
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
    closure_4 = _mod12.mapValues(searchHistories, (arg0) => {
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
};
prototype2["getSearchHistory"] = function getSearchHistory(handleChange) {
  let serializer = dependencyMap[handleChange];
  if (serializer == null) {
    if (typeof SearchHistory === "function") {
      const merged = Object.assign({ items: null });
      merged[0] = [];
      serializer = merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  dependencyMap[handleChange] = serializer;
  return serializer.serialize();
};
SearchHistoryStore.displayName = NATIVE_SEARCH_HISTORY_STORE_DISPLAY_NAME;
SearchHistoryStore.persistKey = NATIVE_SEARCH_HISTORY_STORAGE_KEY;
const searchHistoryStore = new SearchHistoryStore(DispatcherDefault, {
  SEARCH_HISTORY_NATIVE_CLEAR_ITEMS: function handleSearchHistoryClearItems(arg0) {
    delete tmp[tmp2];
  },
  SEARCH_HISTORY_NATIVE_REMOVE_ITEM: function handleSearchHistoryRemoveItem(id) {
    id = id.id;
    let obj = dependencyMap[id];
    if (obj == null) {
      if (typeof SearchHistory === "function") {
        const merged = Object.assign({ items: null });
        merged[0] = [];
        obj = merged;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    dependencyMap[id] = obj;
    obj.remove(id.item);
  },
  SEARCH_HISTORY_NATIVE_ADD_ITEM: function handleSearchHistoryAddItem(id) {
    id = id.id;
    let obj = dependencyMap[id];
    if (obj == null) {
      if (typeof SearchHistory === "function") {
        const merged = Object.assign({ items: null });
        merged[0] = [];
        obj = merged;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    dependencyMap[id] = obj;
    obj.add(id.item);
  },
});
const result = size.fileFinishedImporting("modules/search/native/stores/SearchHistoryStore.tsx");

export default searchHistoryStore;

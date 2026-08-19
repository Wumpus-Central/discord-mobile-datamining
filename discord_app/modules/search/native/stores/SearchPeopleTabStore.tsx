// discord_app/modules/search/native/stores/SearchPeopleTabStore.tsx
import applyDefault from "../../../../../_runtime/00012_apply.js";
import initializeDefault from "../../../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../../../Dispatcher.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import _toPropertyKey from "../../../main_tabs_v2/native/shared_components/user_list/useUserListData.tsx";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import handleChannelSelect from "../../../../stores/FrecencyStore.tsx";

require = fn;
let closure_5 = [];
class PeopleSearchManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.count = null;
    obj.searchQueryString = "";
    obj.groupDMs = [];
    obj.userIndexes = {};
    obj.results = [];
    userSearch = new require("_toPropertyKey").UserSearch(() => obj.processResults());
    obj.userSearch = userSearch;
    userSearch = obj.userSearch;
    subscription = userSearch.subscribe(() => obj.processResults(), true);
    return obj;
  }
}
const prototype = PeopleSearchManager.prototype;
prototype["teardown"] = function teardown() {
  const userSearch = this.userSearch;
  userSearch.unsubscribe();
};
prototype["search"] = function search(str) {
  const self = this;
  str = str.toLowerCase();
  const trimmed = str.trim();
  this.searchQueryString = trimmed;
  if ("" === trimmed) {
    self.processResults();
  } else {
    let userSearch = self.userSearch;
    self.userIndexes = userSearch.filter(trimmed);
    userSearch = self.userSearch;
    const response = userSearch.fetch(trimmed, true);
    const trimmed1 = trimmed.toLocaleLowerCase().trim();
    if (0 === trimmed1.length) {
      let items = [];
    } else {
      const values = applyDefault.chain(mutablePrivateChannels.getMutablePrivateChannels()).values();
      const found = values.filter(trimmed1(11539).filterGroupDMs);
      const mapped = found.map((item, index) => {
        const items = [item, trimmed1(dependencyMap[3]).matchGroupDM(item, trimmed1), closure_1_4.getScoreWithoutFetchingLatest(item.id)];
        return items;
      });
      const found1 = mapped.filter((item, index) => {
        [, tmp] = item;
        return tmp > 0;
      });
      const sorted = found1.sort((arg0, arg1) => {
        let diff = arg1[1] - arg0[1];
        if (0 === diff) {
          diff = arg1[2] - arg0[2];
        }
        return diff;
      });
      const chainResult = applyDefault.chain(mutablePrivateChannels.getMutablePrivateChannels());
      items = sorted.map((item, index) => {
        [tmp] = item;
        return tmp;
      }).value();
      const iter = sorted.map((item, index) => {
        [tmp] = item;
        return tmp;
      });
    }
    self.groupDMs = items;
    const str2 = trimmed.toLocaleLowerCase();
  }
};
prototype["processResults"] = function processResults() {
  const self = this;
  const userSearch = this.userSearch;
  this.userIndexes = userSearch.filter(this.searchQueryString);
  let obj = { data: this.userIndexes, withGuildMembers: true, withAffinitySuggestions: true, withFriends: true, withFriendSuggestions: false, withFriendRequests: false, withFriendRequestsIncoming: false, withFriendRequestsOutgoing: false, excludeCurrentUser: true };
  const result = obj.parseUserSearchResults(obj);
  let arr3 = result;
  if (this.groupDMs.length > 0) {
    arr3 = result;
    if ("" !== self.searchQueryString) {
      obj = { title: null, items: null };
      let intl = getSystemLocale.intl;
      obj[0] = intl.string(getSystemLocale.t.qGlQrW);
      obj[1] = self.groupDMs;
      const findIndexResult = result.findIndex((item, index) => {
        const intl = callback(1236).intl;
        return item.title === intl.string(callback(1236).t.y29JXs);
      });
      if (-1 === findIndexResult) {
        const items = [];
        items[HermesBuiltin.arraySpread(result, 0)] = obj;
        arr3 = items;
      } else {
        const items1 = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(result.slice(0, findIndexResult), 0);
        items1[arraySpreadResult] = obj;
        arraySpreadResult = HermesBuiltin.arraySpread(result.slice(findIndexResult), arraySpreadResult + 1);
        arr3 = items1;
      }
    }
  }
  if (self.searchQueryString.length > 0) {
    self.count = arr3.reduce((acc, item, index) => acc + item.items.length, 0);
  } else {
    self.count = null;
  }
  self.results = arr3;
  searchPeopleTabStoreImpl.emitChange();
};
prototype["getResults"] = function getResults() {
  return this.results;
};
prototype["getCount"] = function getCount() {
  return this.count;
};
const map = new Map();
const Store = initializeDefault.Store;
class SearchPeopleTabStoreImpl extends Store {
}
const prototype2 = SearchPeopleTabStoreImpl.prototype;
prototype2["initialize"] = function initialize() {
  this.waitFor(closure_3, closure_4);
};
prototype2["getResults"] = function getResults(arg0) {
  const value = map.get(arg0);
  let results;
  if (value != null) {
    results = value.getResults();
  }
  if (results == null) {
    results = closure_5;
  }
  return results;
};
prototype2["getCount"] = function getCount(arg0) {
  const value = map.get(arg0);
  let count;
  if (value != null) {
    count = value.getCount();
  }
  if (count == null) {
    count = null;
  }
  return count;
};
SearchPeopleTabStoreImpl.displayName = "SearchPeopleTabStore";
const searchPeopleTabStoreImpl = new SearchPeopleTabStoreImpl(dispatcherDefault, {
  SEARCH_PEOPLE_TAB_SEARCH: function handleSearchPeopleTabSearch(id) {
    id = id.id;
    let obj = map;
    let value = map.get(id);
    if (value == null) {
      if (typeof PeopleSearchManager !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = Object.create(PeopleSearchManager.prototype);
      obj.count = null;
      obj.searchQueryString = "";
      obj.groupDMs = [];
      obj.userIndexes = {};
      obj.results = [];
      let userSearch = new obj(9636).UserSearch(() => obj.processResults());
      obj.userSearch = userSearch;
      userSearch = obj.userSearch;
      const subscription = userSearch.subscribe(() => obj.processResults(), true);
      value = obj;
    }
    const result = obj.set(id, value);
    value.search(id.searchQueryString);
  },
  SEARCH_PEOPLE_TAB_CLEANUP: function handleSearchPeopleTabCleanup(id) {
    id = id.id;
    const value = map.get(id);
    if (value != null) {
      value.teardown();
    }
    map.delete(id);
  }
});
let result = require("obj132").fileFinishedImporting("modules/search/native/stores/SearchPeopleTabStore.tsx");

export default searchPeopleTabStoreImpl;
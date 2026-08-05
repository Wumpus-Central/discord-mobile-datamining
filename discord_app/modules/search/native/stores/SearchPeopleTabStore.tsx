import { apply } from "../../../../../_runtime/00012_apply.js";
import { _toPropertyKey } from "../../../main_tabs_v2/native/shared_components/user_list/useUserListData.tsx";
// discord_app/modules/search/native/stores/SearchPeopleTabStore.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import handleChannelSelect from "handleChannelSelect";
import { Store } from "initialize";

const require = arg1;
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
  const trimmed = str.toLowerCase().trim();
  this.searchQueryString = trimmed;
  if ("" === trimmed) {
    self.processResults();
  } else {
    let userSearch = self.userSearch;
    self.userIndexes = userSearch.filter(trimmed);
    userSearch = self.userSearch;
    const response = userSearch.fetch(trimmed, true);
    let trimmed1;
    trimmed1 = trimmed.toLocaleLowerCase().trim();
    if (0 === trimmed1.length) {
      let items = [];
    } else {
      const obj2 = apply;
      const values = apply.chain(mutablePrivateChannels.getMutablePrivateChannels()).values();
      const found = values.filter(trimmed1(11652).filterGroupDMs);
      const mapped = found.map((id) => {
        const items = [id, trimmed1(outer1_2[3]).matchGroupDM(id, trimmed1), outer1_4.getScoreWithoutFetchingLatest(id.id)];
        return items;
      });
      const found1 = mapped.filter((arg0) => {
        let tmp;
        [, tmp] = arg0;
        return tmp > 0;
      });
      const sorted = found1.sort((arg0, arg1) => {
        let diff = arg1[1] - arg0[1];
        if (0 === diff) {
          diff = arg1[2] - arg0[2];
        }
        return diff;
      });
      const chainResult = apply.chain(mutablePrivateChannels.getMutablePrivateChannels());
      items = sorted.map((arg0) => {
        let tmp;
        [tmp] = arg0;
        return tmp;
      }).value();
      const iter = sorted.map((arg0) => {
        let tmp;
        [tmp] = arg0;
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
  let obj = _toPropertyKey /* _toPropertyKey */;
  obj = { data: this.userIndexes, withGuildMembers: true, withAffinitySuggestions: true, withFriends: true, withFriendSuggestions: false, withFriendRequests: false, withFriendRequestsIncoming: false, withFriendRequestsOutgoing: false, excludeCurrentUser: true };
  const result = obj.parseUserSearchResults(obj);
  let arr3 = result;
  if (this.groupDMs.length > 0) {
    arr3 = result;
    if ("" !== self.searchQueryString) {
      obj = { title: null, items: null };
      let intl = tmp(1236).intl;
      obj[0] = intl.string(tmp(1236).t.qGlQrW);
      obj[1] = self.groupDMs;
      const findIndexResult = result.findIndex((title) => {
        const intl = callback(1236).intl;
        return title.title === intl.string(callback(1236).t.y29JXs);
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
    self.count = arr3.reduce((arg0, items) => arg0 + items.items.length, 0);
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
class SearchPeopleTabStoreImpl extends Store {
}
const prototype2 = SearchPeopleTabStoreImpl.prototype;
prototype2["initialize"] = function initialize() {
  this.waitFor(ensureGuildLoaded, handleChannelSelect);
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
const searchPeopleTabStoreImpl = new SearchPeopleTabStoreImpl(require("dispatcher"), {
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
      let userSearch = new obj(9541).UserSearch(() => obj.processResults());
      obj.userSearch = userSearch;
      userSearch = obj.userSearch;
      const subscription = userSearch.subscribe(() => obj.processResults(), true);
      value = obj;
      const tmp11 = PeopleSearchManager;
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
let result = require("apply").fileFinishedImporting("modules/search/native/stores/SearchPeopleTabStore.tsx");

export default searchPeopleTabStoreImpl;
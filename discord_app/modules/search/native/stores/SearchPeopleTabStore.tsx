// discord_app/modules/search/native/stores/SearchPeopleTabStore.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import initializeDefault from "../../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import util from "../../../../intl/index.native.tsx";
import useUserListData from "../../../main_tabs_v2/native/shared_components/user_list/useUserListData.tsx";
import NewMessageUserList from "../../../main_tabs_v2/native/shared_components/user_list/NewMessageUserList.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import FrecencyStore from "../../../../stores/FrecencyStore.tsx";

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
    userSearch = new closure_0(closure_2[4]).UserSearch(() => obj.processResults());
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
      const values = _modDef12.chain(ChannelStore.getMutablePrivateChannels()).values();
      const found = values.filter(trimmed1(12366).filterGroupDMs);
      const mapped = found.map((id) => {
        const items = [
          id,
          NewMessageUserList.matchGroupDM(id, trimmed1),
          FrecencyStore.getScoreWithoutFetchingLatest(id.id),
        ];
        return items;
      });
      const found1 = mapped.filter((item) => {
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
      const chainResult = _modDef12.chain(ChannelStore.getMutablePrivateChannels());
      items = sorted
        .map((item) => {
          [tmp] = item;
          return tmp;
        })
        .value();
      const iter = sorted.map((item) => {
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
  let obj = {
    data: this.userIndexes,
    withGuildMembers: true,
    withAffinitySuggestions: true,
    withFriends: true,
    withFriendSuggestions: false,
    withFriendRequests: false,
    withFriendRequestsIncoming: false,
    withFriendRequestsOutgoing: false,
    excludeCurrentUser: true,
  };
  const result = obj.parseUserSearchResults(obj);
  let arr3 = result;
  if (this.groupDMs.length > 0) {
    arr3 = result;
    if ("" !== self.searchQueryString) {
      obj = { title: null, items: null };
      let intl = util.intl;
      obj.title = intl.string(util.t.qGlQrW);
      obj.items = self.groupDMs;
      const findIndexResult = result.findIndex((title) => {
        const intl = util.intl;
        return title.title === intl.string(util.t.y29JXs);
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
    self.count = arr3.reduce((acc, items) => acc + items.items.length, 0);
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
class SearchPeopleTabStoreImpl extends Store {}
const prototype2 = SearchPeopleTabStoreImpl.prototype;
prototype2["initialize"] = function initialize() {
  this.waitFor(ChannelStore, FrecencyStore);
};
prototype2["getResults"] = function getResults(arg0) {
  value = map.get(arg0);
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
  value = map.get(arg0);
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
const searchPeopleTabStoreImpl = new SearchPeopleTabStoreImpl(DispatcherDefault, {
  SEARCH_PEOPLE_TAB_SEARCH: function handleSearchPeopleTabSearch(id) {
    id = id.id;
    let obj = map;
    value = map.get(id);
    if (value == null) {
      if (typeof PeopleSearchManager === "function") {
        obj = Object.create(PeopleSearchManager.prototype);
        obj.count = null;
        obj.searchQueryString = "";
        obj.groupDMs = [];
        obj.userIndexes = {};
        obj.results = [];
        let userSearch = new useUserListData.UserSearch(() => obj.processResults());
        obj.userSearch = userSearch;
        userSearch = obj.userSearch;
        const subscription = userSearch.subscribe(() => obj.processResults(), true);
        value = obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    const result = obj.set(id, value);
    value.search(id.searchQueryString);
  },
  SEARCH_PEOPLE_TAB_CLEANUP: function handleSearchPeopleTabCleanup(id) {
    id = id.id;
    value = map.get(id);
    if (value != null) {
      value.teardown();
    }
    map.delete(id);
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/stores/SearchPeopleTabStore.tsx");

export default searchPeopleTabStoreImpl;

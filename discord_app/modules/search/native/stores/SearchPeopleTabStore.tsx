// discord_app/modules/search/native/stores/SearchPeopleTabStore.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import useUserListData from "../../../main_tabs_v2/native/shared_components/user_list/useUserListData.tsx";
import NewMessageUserList from "../../../main_tabs_v2/native/shared_components/user_list/NewMessageUserList.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import FrecencyStore from "../../../../stores/FrecencyStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let title;

let closure_5 = [];
class PeopleSearchManager {
  constructor() {
    const obj = Object.create(new.target.prototype);
    obj.count = null;
    obj.searchQueryString = "";
    obj.groupDMs = [];
    obj.userIndexes = {};
    obj.results = [];
    const userSearch1 = new useUserListData.UserSearch(() => obj2.processResults());
    obj.userSearch = userSearch1;
    const userSearch = obj.userSearch;
    const subscription = userSearch.subscribe(() => obj2.processResults(), true);
    return obj;
  }
  teardown() {
    const userSearch = this.userSearch;
    userSearch.unsubscribe();
  }
  search(str) {
    const self = this;
    str = str.toLowerCase();
    const trimmed = str.trim();
    this.searchQueryString = trimmed;
    if ("" !== trimmed) {
      let items;
      const userSearch1 = self.userSearch;
      self.userIndexes = userSearch1.filter(trimmed);
      const userSearch = self.userSearch;
      const response = userSearch.fetch(trimmed, true);
      const str2 = trimmed.toLocaleLowerCase();
      const trimmed1 = str2.trim();
      if (0 === trimmed1.length) {
        items = [];
      } else {
        const obj2 = _modDef12;
        const chainResult = obj2.chain(ChannelStore.getMutablePrivateChannels());
        const values = chainResult.values();
        const found = values.filter(trimmed1(12010).filterGroupDMs);
        const mapped = found.map((id) => {
          const items = [id, ,];
          const obj = NewMessageUserList;
          items[1] = obj.matchGroupDM(id, trimmed1);
          items[2] = FrecencyStore.getScoreWithoutFetchingLatest(id.id);
          return items;
        });
        const found1 = mapped.filter((item) => {
          let tmp;
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
        const iter = sorted.map((item) => {
          let tmp;
          [tmp] = item;
          return tmp;
        });
        items = iter.value();
      }
      self.groupDMs = items;
    }
    self.processResults();
  }
  processResults() {
    let intl;
    const self = this;
    const userSearch = this.userSearch;
    this.userIndexes = userSearch.filter(this.searchQueryString);
    const obj = useUserListData;
    const obj2 = {
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
    const result = obj.parseUserSearchResults(obj2);
    let arr3 = result;
    if (this.groupDMs.length > 0) {
      arr3 = result;
      if ("" !== self.searchQueryString) {
        const obj3 = { title: intl.string(intl2.t.qGlQrW), items: self.groupDMs };
        intl = intl2.intl;
        const findIndexResult = result.findIndex((title) => {
          title = title.title;
          const intl = intl2.intl;
          return title === intl.string(intl2.t.y29JXs);
        });
        if (-1 === findIndexResult) {
          const items = [];
          items[HermesBuiltin.arraySpread(items, result, 0)] = obj3;
          arr3 = items;
        } else {
          const items1 = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(items1, result.slice(0, findIndexResult), 0);
          items1[arraySpreadResult] = obj3;
          HermesBuiltin.arraySpread(items1, result.slice(findIndexResult), arraySpreadResult + 1);
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
  }
  getResults() {
    return this.results;
  }
  getCount() {
    return this.count;
  }
}
const prototype = PeopleSearchManager.prototype;
const map = new Map();
const Store = get_initializedDefault.Store;
class SearchPeopleTabStoreImpl extends Store {
  initialize() {
    this.waitFor(ChannelStore, FrecencyStore);
  }
  getResults(arg0) {
    const value = map.get(arg0);
    let results;
    if (value != null) {
      results = value.getResults();
    }
    if (results == null) {
      results = closure_5;
    }
    return results;
  }
  getCount(arg0) {
    const value = map.get(arg0);
    let count;
    if (value != null) {
      count = value.getCount();
    }
    if (count == null) {
      count = null;
    }
    return count;
  }
}
const prototype2 = SearchPeopleTabStoreImpl.prototype;
SearchPeopleTabStoreImpl.displayName = "SearchPeopleTabStore";
let obj = {
  SEARCH_PEOPLE_TAB_SEARCH: function handleSearchPeopleTabSearch(id) {
    id = id.id;
    const searchQueryString = id.searchQueryString;
    let value = map.get(id);
    if (value == null) {
      const self3 = this;
      if (typeof PeopleSearchManager === "function") {
        const obj2 = Object.create(PeopleSearchManager.prototype);
        obj2.count = null;
        obj2.searchQueryString = "";
        obj2.groupDMs = [];
        obj2.userIndexes = {};
        obj2.results = [];
        const self = this;
        const self2 = this;
        const userSearch1 = new useUserListData.UserSearch(() => obj2.processResults());
        obj2.userSearch = userSearch1;
        const userSearch = obj2.userSearch;
        const subscription = userSearch.subscribe(() => obj2.processResults(), true);
        value = obj2;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    const result = map.set(id, value);
    value.search(searchQueryString);
  },
  SEARCH_PEOPLE_TAB_CLEANUP: function handleSearchPeopleTabCleanup(id) {
    id = id.id;
    const value = map.get(id);
    if (value != null) {
      value.teardown();
    }
    map.delete(id);
  },
};
const searchPeopleTabStoreImpl = new SearchPeopleTabStoreImpl(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/search/native/stores/SearchPeopleTabStore.tsx");

export default searchPeopleTabStoreImpl;

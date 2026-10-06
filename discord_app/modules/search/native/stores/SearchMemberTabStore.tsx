// === Module 12008: SearchMemberTabStore ===

// Module 12008 (SearchMemberTabStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import GuildUtilsDefault from "GuildUtils" /* 5711 */;
import _modDef9509 from "module_9509" /* 9509 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
let closure_6 = [];
class GuildMemberSearchManager {
  constructor() {
    const obj = Object.create(new.target.prototype);
    obj.count = null;
    obj.isFetching = false;
    obj.searchQueryString = "";
    obj.targetChannelId = null;
    obj.results = [];
    obj.onAutocompleterResultsChange = function onAutocompleterResultsChange(arr, arg1) {
      if (arg1 === obj2.searchQueryString) {
        obj2.isFetching = false;
        const items = [];
        const channel = ChannelStore.getChannel(obj2.targetChannelId);
        const item = arr.forEach((type) => {
          if (type.type === obj2(closure_2_3[2]).AutocompleterResultTypes.USER) {
            if (null != closure_1) {
              closure_2_2(closure_2_3[3]);
            }
            items.push(type);
          }
        });
        obj2.results = items;
        if (obj2.searchQueryString.length > 0) {
          obj2.count = items.length;
        } else {
          obj2.count = null;
        }
        searchGuildMemberTabStoreImpl.emitChange();
      }
    };
    const items = [];
    const tmp2 = _modDef9509;
    items[0] = obj(9509).AutocompleterResultTypes.USER;
    obj.autocompleter = new tmp2(obj.onAutocompleterResultsChange, items, 50);
    const autocompleter = obj.autocompleter;
    new tmp2(obj.onAutocompleterResultsChange, items, 50);
    const searchContext = autocompleter.createSearchContext();
    return obj;
  }
  setAutocompleteOptions(arg0) {
    const autocompleter = this.autocompleter;
    autocompleter.setOptions(arg0);
  }
  teardown() {
    const autocompleter = this.autocompleter;
    autocompleter.clean();
  }
  search(arg0, targetChannelId, str) {
    this.targetChannelId = targetChannelId;
    this.isFetching = true;
    str = str.toLowerCase();
    const trimmed = str.trim();
    this.searchQueryString = trimmed;
    const obj = GuildUtilsDefault;
    const members = obj.requestMembers(arg0, trimmed, 50);
    const autocompleter = this.autocompleter;
    autocompleter.search(trimmed);
  }
  getResults() {
    return this.results;
  }
  getCount() {
    return this.count;
  }
  getIsFetching() {
    return this.isFetching;
  }
}
const prototype = GuildMemberSearchManager.prototype;
const map = new Map();
const Store = get_initializedDefault.Store;
class SearchGuildMemberTabStoreImpl extends Store {
  initialize() {
    this.waitFor(ChannelStore);
  }
  getResults(arg0) {
    const value = map.get(arg0);
    let results;
    if (value != null) {
      results = value.getResults();
    }
    if (results == null) {
      results = closure_6;
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
  getIsFetching(arg0) {
    const value = map.get(arg0);
    let flag;
    if (value != null) {
      flag = value.getIsFetching();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
}
const prototype2 = SearchGuildMemberTabStoreImpl.prototype;
SearchGuildMemberTabStoreImpl.displayName = "SearchGuildMemberTabStore";
let obj = {
  SEARCH_GUILD_MEMBER_TAB_SEARCH: function handleSearchGuildMemberTabSearch(arg0) {
    let channelId;
    let guildId;
    let id;
    let searchQueryString;
    let threadId;
    ({ id, guildId, threadId } = arg0);
    ({ channelId, searchQueryString } = arg0);
    let value = map.get(id);
    if (value == null) {
      const self3 = this;
      if (typeof GuildMemberSearchManager === "function") {
        const obj2 = Object.create(GuildMemberSearchManager.prototype);
        obj2.count = null;
        obj2.isFetching = false;
        obj2.searchQueryString = "";
        obj2.targetChannelId = null;
        obj2.results = [];
        obj2.onAutocompleterResultsChange = function onAutocompleterResultsChange(arr, arg1) {
          if (arg1 === obj2.searchQueryString) {
            obj2.isFetching = false;
            const items = [];
            const channel = ChannelStore.getChannel(obj2.targetChannelId);
            const item = arr.forEach((type) => {
              if (type.type === obj2(closure_2_3[2]).AutocompleterResultTypes.USER) {
                if (null != closure_1) {
                  closure_2_2(closure_2_3[3]);
                }
                items.push(type);
              }
            });
            obj2.results = items;
            if (obj2.searchQueryString.length > 0) {
              obj2.count = items.length;
            } else {
              obj2.count = null;
            }
            searchGuildMemberTabStoreImpl.emitChange();
          }
        };
        let items = [];
        const tmp4 = _modDef9509;
        items[0] = obj2(9509).AutocompleterResultTypes.USER;
        const self = this;
        const self2 = this;
        obj2.autocompleter = new tmp4(obj2.onAutocompleterResultsChange, items, 50);
        const autocompleter = obj2.autocompleter;
        const tmp42 = new tmp4(obj2.onAutocompleterResultsChange, items, 50);
        const searchContext = autocompleter.createSearchContext();
        value = obj2;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    const result = map.set(id, value);
    const setAutocompleteOptions = value.setAutocompleteOptions;
    const obj3 = { guild: guildId, strict: true, thread: threadId };
    const result1 = setAutocompleteOptions({ frecencyBoosters: true, allowSnowflake: true, userFilters: obj3 });
    value.search(guildId, channelId, searchQueryString);
  },
  SEARCH_GUILD_MEMBER_TAB_CLEANUP: function handleSearchGuildMemberTabCleanup(id) {
    id = id.id;
    const value = map.get(id);
    if (value != null) {
      value.teardown();
    }
    map.delete(id);
  }
};
const searchGuildMemberTabStoreImpl = new SearchGuildMemberTabStoreImpl(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/search/native/stores/SearchMemberTabStore.tsx");

export default searchGuildMemberTabStoreImpl;
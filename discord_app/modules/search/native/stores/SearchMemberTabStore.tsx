// discord_app/modules/search/native/stores/SearchMemberTabStore.tsx
import initializeDefault from "../../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import PermissionUtilsAll from "../../../../utils/PermissionUtils.tsx";
import GuildUtilsDefault from "../../../../utils/GuildUtils.tsx";
import sortByMatchScoreDefault from "../../../autocompleter/index.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

const require = fn;
const Permissions = fn(1074).Permissions;
let closure_6 = [];
class GuildMemberSearchManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.count = null;
    obj.isFetching = false;
    obj.searchQueryString = "";
    obj.targetChannelId = null;
    obj.results = [];
    obj.onAutocompleterResultsChange = function onAutocompleterResultsChange(arr, arg1) {
      if (arg1 === obj.searchQueryString) {
        tmp.isFetching = false;
        let items = [];
        const channel = ChannelStore.getChannel(tmp.targetChannelId);
        const item = arr.forEach((type) => {
          if (type.type === obj(dependencyMap[2]).AutocompleterResultTypes.USER) {
            if (null != closure_1) {
              obj = { permission: constants.VIEW_CHANNEL, user: type.record, context: tmp2 };
            }
            items.push(type);
          }
        });
        tmp.results = items;
        if (tmp.searchQueryString.length > 0) {
          tmp.count = items.length;
        } else {
          tmp.count = null;
        }
        items = searchGuildMemberTabStoreImpl;
        searchGuildMemberTabStoreImpl.emitChange();
      }
    };
    tmp2 = closure_1(closure_3[2]);
    items = [];
    items[0] = closure_0(closure_3[2]).AutocompleterResultTypes.USER;
    tmp2 = new tmp2(obj.onAutocompleterResultsChange, items, 50);
    obj.autocompleter = tmp2;
    autocompleter = obj.autocompleter;
    searchContext = autocompleter.createSearchContext();
    return obj;
  }
}
const prototype = GuildMemberSearchManager.prototype;
prototype["setAutocompleteOptions"] = function setAutocompleteOptions(arg0) {
  const autocompleter = this.autocompleter;
  autocompleter.setOptions(arg0);
};
prototype["teardown"] = function teardown() {
  const autocompleter = this.autocompleter;
  autocompleter.clean();
};
prototype["search"] = function search(arg0, targetChannelId, str) {
  this.targetChannelId = targetChannelId;
  this.isFetching = true;
  const trimmed = str.toLowerCase().trim();
  this.searchQueryString = trimmed;
  str = str.toLowerCase();
  const members = GuildUtilsDefault.requestMembers(arg0, trimmed, 50);
  const autocompleter = this.autocompleter;
  autocompleter.search(trimmed);
};
prototype["getResults"] = function getResults() {
  return this.results;
};
prototype["getCount"] = function getCount() {
  return this.count;
};
prototype["getIsFetching"] = function getIsFetching() {
  return this.isFetching;
};
const map = new Map();
const Store = initializeDefault.Store;
class SearchGuildMemberTabStoreImpl extends Store {}
const prototype2 = SearchGuildMemberTabStoreImpl.prototype;
prototype2["initialize"] = function initialize() {
  this.waitFor(ChannelStore);
};
prototype2["getResults"] = function getResults(arg0) {
  value = map.get(arg0);
  let results;
  if (value != null) {
    results = value.getResults();
  }
  if (results == null) {
    results = closure_6;
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
prototype2["getIsFetching"] = function getIsFetching(arg0) {
  value = map.get(arg0);
  let flag;
  if (value != null) {
    flag = value.getIsFetching();
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
SearchGuildMemberTabStoreImpl.displayName = "SearchGuildMemberTabStore";
const searchGuildMemberTabStoreImpl = new SearchGuildMemberTabStoreImpl(DispatcherDefault, {
  SEARCH_GUILD_MEMBER_TAB_SEARCH: function handleSearchGuildMemberTabSearch(arg0) {
    ({ id, guildId, threadId } = arg0);
    let userFilters = map;
    ({ channelId, searchQueryString } = arg0);
    value = map.get(id);
    if (value == null) {
      if (typeof GuildMemberSearchManager === "function") {
        userFilters = Object.create(GuildMemberSearchManager.prototype);
        userFilters.count = null;
        userFilters.isFetching = false;
        userFilters.searchQueryString = "";
        userFilters.targetChannelId = null;
        userFilters.results = [];
        userFilters.onAutocompleterResultsChange = function onAutocompleterResultsChange(arr, arg1) {
          if (arg1 === obj.searchQueryString) {
            tmp.isFetching = false;
            let items = [];
            const channel = ChannelStore.getChannel(tmp.targetChannelId);
            const item = arr.forEach((type) => {
              if (type.type === obj(dependencyMap[2]).AutocompleterResultTypes.USER) {
                if (null != closure_1) {
                  obj = { permission: constants.VIEW_CHANNEL, user: type.record, context: tmp2 };
                }
                items.push(type);
              }
            });
            tmp.results = items;
            if (tmp.searchQueryString.length > 0) {
              tmp.count = items.length;
            } else {
              tmp.count = null;
            }
            items = searchGuildMemberTabStoreImpl;
            searchGuildMemberTabStoreImpl.emitChange();
          }
        };
        let tmp4 = sortByMatchScoreDefault;
        let items = [userFilters(9835).AutocompleterResultTypes.USER];
        tmp4 = new tmp4(onAutocompleterResultsChange, items, 50);
        userFilters.autocompleter = tmp4;
        const autocompleter = userFilters.autocompleter;
        const searchContext = autocompleter.createSearchContext();
        value = userFilters;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    const result = userFilters.set(id, value);
    userFilters = { guild: guildId, strict: true, thread: threadId };
    const result1 = value.setAutocompleteOptions({ frecencyBoosters: true, allowSnowflake: true, userFilters });
    value.search(guildId, channelId, searchQueryString);
  },
  SEARCH_GUILD_MEMBER_TAB_CLEANUP: function handleSearchGuildMemberTabCleanup(id) {
    id = id.id;
    value = map.get(id);
    if (value != null) {
      value.teardown();
    }
    map.delete(id);
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/stores/SearchMemberTabStore.tsx");

export default searchGuildMemberTabStoreImpl;

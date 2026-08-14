// discord_app/modules/search/native/stores/SearchMemberTabStore.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import { Permissions } from "ME";
import { Store } from "initialize";
import { getGuildNameSuggestion } from "../../../../utils/GuildUtils.tsx";
import { sortByMatchScore } from "../../../autocompleter/index.tsx";

const require = arg1;
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
    obj.onAutocompleterResultsChange = function onAutocompleterResultsChange(arr) {
      if (arg1 === items.searchQueryString) {
        tmp.isFetching = false;
        items = [];
        const channel = outer1_4.getChannel(tmp.targetChannelId);
        const item = arr.forEach((type) => {
          if (type.type === items(outer1_3[2]).AutocompleterResultTypes.USER) {
            if (null != closure_1) {
              let obj = outer1_2(outer1_3[3]);
              obj = { permission: null, user: null, context: null };
              obj[0] = outer1_5.VIEW_CHANNEL;
              obj[1] = type.record;
              obj[2] = tmp2;
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
        items = outer1_9;
        outer1_9.emitChange();
      }
    };
    tmp2 = require("sortByMatchScore");
    items = [];
    items[0] = require("sortByMatchScore").AutocompleterResultTypes.USER;
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
  const members = getGuildNameSuggestion.requestMembers(arg0, trimmed, 50);
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
class SearchGuildMemberTabStoreImpl extends Store {
}
const prototype2 = SearchGuildMemberTabStoreImpl.prototype;
prototype2["initialize"] = function initialize() {
  this.waitFor(ensureGuildLoaded);
};
prototype2["getResults"] = function getResults(arg0) {
  const value = map.get(arg0);
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
prototype2["getIsFetching"] = function getIsFetching(arg0) {
  const value = map.get(arg0);
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
const searchGuildMemberTabStoreImpl = new SearchGuildMemberTabStoreImpl(require("dispatcher"), {
  SEARCH_GUILD_MEMBER_TAB_SEARCH: function handleSearchGuildMemberTabSearch(arg0) {
    let channelId;
    let guildId;
    let id;
    let searchQueryString;
    let threadId;
    ({ id, guildId, threadId } = arg0);
    let obj = map;
    ({ channelId, searchQueryString } = arg0);
    let value = map.get(id);
    if (value == null) {
      if (typeof GuildMemberSearchManager !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = Object.create(GuildMemberSearchManager.prototype);
      obj.count = null;
      obj.isFetching = false;
      obj.searchQueryString = "";
      obj.targetChannelId = null;
      obj.results = [];
      obj.onAutocompleterResultsChange = function onAutocompleterResultsChange(arr) {
        if (arg1 === items.searchQueryString) {
          tmp.isFetching = false;
          items = [];
          const channel = outer1_4.getChannel(tmp.targetChannelId);
          const item = arr.forEach((type) => {
            if (type.type === items(outer1_3[2]).AutocompleterResultTypes.USER) {
              if (null != closure_1) {
                let obj = outer1_2(outer1_3[3]);
                obj = { permission: null, user: null, context: null };
                obj[0] = outer1_5.VIEW_CHANNEL;
                obj[1] = type.record;
                obj[2] = tmp2;
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
          items = outer1_9;
          outer1_9.emitChange();
        }
      };
      let tmp4 = sortByMatchScore;
      let items = [obj(7375).AutocompleterResultTypes.USER];
      tmp4 = new tmp4(onAutocompleterResultsChange, items, 50);
      obj.autocompleter = tmp4;
      const autocompleter = obj.autocompleter;
      const searchContext = autocompleter.createSearchContext();
      value = obj;
      const tmp16 = GuildMemberSearchManager;
    }
    const result = obj.set(id, value);
    obj = { guild: guildId, strict: true, thread: null };
    obj[2] = threadId;
    const result1 = value.setAutocompleteOptions({ frecencyBoosters: true, allowSnowflake: true, userFilters: obj });
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
});
let result = require("sortByMatchScore").fileFinishedImporting("modules/search/native/stores/SearchMemberTabStore.tsx");

export default searchGuildMemberTabStoreImpl;
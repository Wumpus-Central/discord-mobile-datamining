// discord_app/modules/directory_channels/GuildDirectorySearchStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";

const require = arg1;
let closure_2 = [];
let closure_3 = {};
let closure_4 = {};
const Store = initializeDefault.Store;
class GuildDirectorySearchStore extends Store {
}
const prototype = GuildDirectorySearchStore.prototype;
prototype["getSearchState"] = function getSearchState(arg0) {
  let obj = dependencyMap[arg0];
  if (obj == null) {
    obj = { mostRecentQuery: "", fetching: false };
  }
  return obj;
};
prototype["getSearchResults"] = function getSearchResults(arg0, arg1) {
  let results;
  if (dependencyMap2[arg0] != null) {
    if (tmp[arg1] != null) {
      results = tmp4.results;
    }
  }
  if (results == null) {
    results = closure_2;
  }
  return results;
};
prototype["shouldFetch"] = function shouldFetch(arg0, arg1) {
  let lastSearchedAt;
  if (dependencyMap2[arg0] != null) {
    if (tmp[arg1] != null) {
      lastSearchedAt = tmp4.lastSearchedAt;
    }
  }
  let tmp5 = null == lastSearchedAt;
  if (!tmp5) {
    const _Date = Date;
    tmp5 = Date.now() - lastSearchedAt > 120000;
  }
  return tmp5;
};
GuildDirectorySearchStore.displayName = "GuildDirectorySearchStore";
const guildDirectorySearchStore = new GuildDirectorySearchStore(dispatcherDefault, {
  GUILD_DIRECTORY_SEARCH_START: function handleSearchStart(channelId) {
    closure_3[channelId.channelId] = { fetching: true, mostRecentQuery: channelId.query };
  },
  GUILD_DIRECTORY_SEARCH_SUCCESS: function handleSearchSuccess(query) {
    ({ channelId, results } = query);
    let items;
    let obj = {};
    const merged = Object.assign(dependencyMap[channelId]);
    obj.fetching = false;
    dependencyMap[channelId] = obj;
    items = [];
    const item = results.forEach((entry) => {
      items.push(items(closure_1_1[0]).guildDirectoryEntryFromServer(entry));
    });
    obj = {};
    const merged1 = Object.assign(dependencyMap2[channelId]);
    obj = { results: items(11788).orderByTotalMemberCount(items), lastSearchedAt: Date.now() };
    obj[query.query] = obj;
    dependencyMap2[channelId] = obj;
  },
  GUILD_DIRECTORY_SEARCH_FAILURE: function handleSearchFailure(channelId) {
    channelId = channelId.channelId;
    const obj = {};
    const merged = Object.assign(dependencyMap[channelId]);
    obj.fetching = false;
    dependencyMap[channelId] = obj;
  },
  GUILD_DIRECTORY_SEARCH_CLEAR: function handleSearchClear(channelId) {
    closure_3[channelId.channelId] = { fetching: false, mostRecentQuery: "" };
  },
  GUILD_DIRECTORY_CACHED_SEARCH: function handleUpdateQuery(channelId) {
    closure_3[channelId.channelId] = { fetching: false, mostRecentQuery: channelId.query };
  },
  GUILD_DIRECTORY_ENTRY_DELETE: function handleDeleteEntry(arg0) {
    ({ channelId, guildId: require } = arg0);
    let mostRecentQuery;
    if (dependencyMap[channelId] != null) {
      mostRecentQuery = tmp2.mostRecentQuery;
    }
    if (null != mostRecentQuery) {
      if (null != dependencyMap2[channelId][mostRecentQuery]) {
        const results = tmp5.results;
        let obj = {};
        const found = results.filter((guildId) => guildId.guildId !== closure_0);
        const merged = Object.assign(tmp4[channelId]);
        obj = {};
        const merged1 = Object.assign(tmp5);
        obj.results = found;
        obj[dependencyMap[channelId].mostRecentQuery] = obj;
        tmp4[channelId] = obj;
      }
    }
  }
});
const result = require("set").fileFinishedImporting("modules/directory_channels/GuildDirectorySearchStore.tsx");

export default guildDirectorySearchStore;
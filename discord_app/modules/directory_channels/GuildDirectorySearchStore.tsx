// === Module 12303: GuildDirectorySearchStore ===

// Module 12303 (GuildDirectorySearchStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GuildDirectoryUtils from "GuildDirectoryUtils" /* 12304 */;

require = fn;
let closure_2 = [];
const dependencyMap = {};
const dependencyMap2 = {};
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
const guildDirectorySearchStore = new GuildDirectorySearchStore(DispatcherDefault, {
  GUILD_DIRECTORY_SEARCH_START: function handleSearchStart(channelId) {
    closure_3[channelId.channelId] = { fetching: true, mostRecentQuery: channelId.query };
  },
  GUILD_DIRECTORY_SEARCH_SUCCESS: function handleSearchSuccess(query) {
    ({ channelId, results } = query);
    let obj = {};
    const merged = Object.assign(dependencyMap[channelId]);
    obj.fetching = false;
    dependencyMap[channelId] = obj;
    const items = [];
    const item = results.forEach((item) => {
      items.push(GuildDirectoryUtils.guildDirectoryEntryFromServer(item));
    });
    obj = {};
    const merged1 = Object.assign(dependencyMap2[channelId]);
    obj = { results: items(12304).orderByTotalMemberCount(items), lastSearchedAt: Date.now() };
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
        const found = results.filter((guildId) => guildId.guildId !== require);
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/GuildDirectorySearchStore.tsx");

export default guildDirectorySearchStore;
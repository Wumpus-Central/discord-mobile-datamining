// === Module 11945: GuildDirectorySearchStore ===

// Module 11945 (GuildDirectorySearchStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GuildDirectoryUtils from "GuildDirectoryUtils" /* 11946 */;
import size from "module_2" /* 2 */;

let closure_2 = [];
const _false = {};
const React3 = {};
const Store = get_initializedDefault.Store;
class GuildDirectorySearchStore extends Store {
  getSearchState(arg0) {
    let obj = closure_3[arg0];
    if (obj == null) {
      obj = { mostRecentQuery: "", fetching: false };
    }
    return obj;
  }
  getSearchResults(arg0, arg1) {
    let results;
    if (closure_4[arg0] != null) {
      if (closure_4[arg0][arg1] != null) {
        results = tmp4.results;
      }
    }
    if (results == null) {
      results = closure_2;
    }
    return results;
  }
  shouldFetch(arg0, arg1) {
    let lastSearchedAt;
    if (closure_4[arg0] != null) {
      if (closure_4[arg0][arg1] != null) {
        lastSearchedAt = tmp4.lastSearchedAt;
      }
    }
    let tmp5 = null == lastSearchedAt;
    if (!tmp5) {
      const _Date = Date;
      tmp5 = Date.now() - lastSearchedAt > 120000;
    }
    return tmp5;
  }
}
const prototype = GuildDirectorySearchStore.prototype;
GuildDirectorySearchStore.displayName = "GuildDirectorySearchStore";
let obj = {
  GUILD_DIRECTORY_SEARCH_START: function handleSearchStart(channelId) {
    closure_3[channelId.channelId] = { fetching: true, mostRecentQuery: channelId.query };
  },
  GUILD_DIRECTORY_SEARCH_SUCCESS: function handleSearchSuccess(query) {
    let channelId;
    let obj4;
    let results;
    ({ channelId, results } = query);
    let obj = { fetching: false };
    query = query.query;
    const merged = Object.assign(closure_3[channelId]);
    closure_3[channelId] = obj;
    const items = [];
    const item = results.forEach((item) => {
      const obj = GuildDirectoryUtils;
      items.push(obj.guildDirectoryEntryFromServer(item));
    });
    const obj2 = {};
    const merged1 = Object.assign(closure_4[channelId]);
    const obj3 = { results: obj4.orderByTotalMemberCount(items), lastSearchedAt: Date.now() };
    obj2[query] = obj3;
    closure_4[channelId] = obj2;
    obj4 = items(11946);
  },
  GUILD_DIRECTORY_SEARCH_FAILURE: function handleSearchFailure(channelId) {
    channelId = channelId.channelId;
    const obj = { fetching: false };
    const merged = Object.assign(closure_3[channelId]);
    closure_3[channelId] = obj;
  },
  GUILD_DIRECTORY_SEARCH_CLEAR: function handleSearchClear(channelId) {
    closure_3[channelId.channelId] = { fetching: false, mostRecentQuery: "" };
  },
  GUILD_DIRECTORY_CACHED_SEARCH: function handleUpdateQuery(channelId) {
    closure_3[channelId.channelId] = { fetching: false, mostRecentQuery: channelId.query };
  },
  GUILD_DIRECTORY_ENTRY_DELETE: function handleDeleteEntry(arg0) {
    let channelId;
    let closure_129_0;
    ({ channelId, guildId: closure_129_0 } = arg0);
    let mostRecentQuery1;
    if (closure_3[channelId] != null) {
      mostRecentQuery1 = tmp2.mostRecentQuery;
    }
    if (null != mostRecentQuery1) {
      if (null != closure_4[channelId][mostRecentQuery1]) {
        const results = tmp5.results;
        const obj = {};
        const found = results.filter((guildId) => guildId.guildId !== closure_1_0);
        const merged = Object.assign(closure_4[channelId]);
        const mostRecentQuery = closure_3[channelId].mostRecentQuery;
        const obj2 = { results: found };
        const merged1 = Object.assign(tmp5);
        obj[mostRecentQuery] = obj2;
        closure_4[channelId] = obj;
      }
    }
  }
};
const guildDirectorySearchStore = new GuildDirectorySearchStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/directory_channels/GuildDirectorySearchStore.tsx");

export default guildDirectorySearchStore;
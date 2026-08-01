// === Module 11474: ? ===

// Module 11474
import { SearchTypes } from "ME";
import handleSearchQuery from "handleSearchQuery";
import prototype from "prototype";

const result = require("prototype").fileFinishedImporting("modules/search/native/SearchPlatformActionCreators.tsx");

export default {
  searchPeopleTab(closure_0, searchQueryString) {
    let obj = require(10116) /* SearchTokenTypes */;
    const searchContextId = obj.getSearchContextId(closure_0);
    obj = { type: "SEARCH_PEOPLE_TAB_SEARCH", id: searchContextId, searchQueryString };
    importDefault(709).dispatch(obj);
  },
  cleanupPeopleTab(closure_0) {
    const searchContextId = require(10116) /* SearchTokenTypes */.getSearchContextId(closure_0);
    const obj = require(10116) /* SearchTokenTypes */;
    importDefault(709).dispatch({ type: "SEARCH_PEOPLE_TAB_CLEANUP", id: searchContextId });
  },
  searchGuildMemberTab(arg0) {
    let channelId;
    let guildId;
    let searchContext;
    let searchQueryString;
    let threadId;
    ({ searchContext, searchQueryString, guildId, channelId, threadId } = arg0);
    const searchContextId = require(10116) /* SearchTokenTypes */.getSearchContextId(searchContext);
    const obj = require(10116) /* SearchTokenTypes */;
    importDefault(709).dispatch({ type: "SEARCH_GUILD_MEMBER_TAB_SEARCH", id: searchContextId, searchQueryString, guildId, channelId, threadId });
  },
  cleanupGuildMemberTab(closure_0) {
    const searchContextId = require(10116) /* SearchTokenTypes */.getSearchContextId(closure_0);
    const obj = require(10116) /* SearchTokenTypes */;
    importDefault(709).dispatch({ type: "SEARCH_GUILD_MEMBER_TAB_CLEANUP", id: searchContextId });
  },
  searchGuildChannelTab(arg0) {
    let guildId;
    let searchContext;
    let searchQueryString;
    ({ searchContext, searchQueryString, guildId } = arg0);
    const searchContextId = require(10116) /* SearchTokenTypes */.getSearchContextId(searchContext);
    const obj = require(10116) /* SearchTokenTypes */;
    importDefault(709).dispatch({ type: "SEARCH_GUILD_CHANNEL_TAB_SEARCH", id: searchContextId, searchQueryString, guildId });
  },
  cleanupGuildChannelTab(closure_0) {
    const searchContextId = require(10116) /* SearchTokenTypes */.getSearchContextId(closure_0);
    const obj = require(10116) /* SearchTokenTypes */;
    importDefault(709).dispatch({ type: "SEARCH_GUILD_CHANNEL_TAB_CLEANUP", id: searchContextId });
  },
  addSearchHistoryItem(closure_0, arg1) {
    if (closure_0.type === SearchTypes.DMS) {
      let obj = require(10116) /* SearchTokenTypes */;
      const searchContextId = obj.getSearchContextId(closure_0);
      obj = { type: "SEARCH_HISTORY_NATIVE_ADD_ITEM", id: null, item: null };
      obj[1] = searchContextId;
      obj[2] = arg1;
      importDefault(709).dispatch(obj);
      const obj2 = importDefault(709);
    }
  },
  removeSearchHistoryItem(searchContext, searchHistoryItem) {
    let obj = require(10116) /* SearchTokenTypes */;
    const searchContextId = obj.getSearchContextId(searchContext);
    obj = { type: "SEARCH_HISTORY_NATIVE_REMOVE_ITEM", id: searchContextId, item: searchHistoryItem };
    importDefault(709).dispatch(obj);
  },
  clearSearchHistory(searchContext) {
    const searchContextId = require(10116) /* SearchTokenTypes */.getSearchContextId(searchContext);
    const obj = require(10116) /* SearchTokenTypes */;
    importDefault(709).dispatch({ type: "SEARCH_HISTORY_NATIVE_CLEAR_ITEMS", id: searchContextId });
  },
  updateSearchQuery(closure_0, updater) {
    let obj = require(10116) /* SearchTokenTypes */;
    const searchContextId = obj.getSearchContextId(closure_0);
    obj = { type: "SEARCH_QUERY_NATIVE_UPDATE", id: searchContextId, searchContext: closure_0, updater };
    importDefault(709).dispatch(obj);
  },
  deleteSearchQuery(closure_5) {
    const searchContextId = require(10116) /* SearchTokenTypes */.getSearchContextId(closure_5);
    const obj = require(10116) /* SearchTokenTypes */;
    importDefault(709).dispatch({ type: "SEARCH_QUERY_NATIVE_DELETE", id: searchContextId });
  },
  initializeSearchQuery(channelDetailsSearchContext) {
    let obj = require(10116) /* SearchTokenTypes */;
    const searchContextId = obj.getSearchContextId(channelDetailsSearchContext);
    obj = { type: "SEARCH_QUERY_NATIVE_INITIALIZE", id: searchContextId, searchContext: channelDetailsSearchContext };
    importDefault(709).dispatch(obj);
  }
};
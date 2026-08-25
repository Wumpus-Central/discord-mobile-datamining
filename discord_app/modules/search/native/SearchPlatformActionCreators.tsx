// === Module 11930: ? ===

// Module 11930
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import SearchTokenTypes from "SearchTokenTypes" /* 11907 */;
import handleSearchQuery from "handleSearchQuery" /* 11931 */;
import prototype from "prototype" /* 11906 */;

const SearchTypes = ME.SearchTypes;
const result = set.fileFinishedImporting("modules/search/native/SearchPlatformActionCreators.tsx");

export default {
  searchPeopleTab(closure_0, searchQueryString) {
    let obj = SearchTokenTypes;
    const searchContextId = obj.getSearchContextId(closure_0);
    obj = { type: "SEARCH_PEOPLE_TAB_SEARCH", id: searchContextId, searchQueryString };
    dispatcherDefault.dispatch(obj);
  },
  cleanupPeopleTab(closure_0) {
    const searchContextId = SearchTokenTypes.getSearchContextId(closure_0);
    const obj = SearchTokenTypes;
    dispatcherDefault.dispatch({ type: "SEARCH_PEOPLE_TAB_CLEANUP", id: searchContextId });
  },
  searchGuildMemberTab(arg0) {
    ({ searchContext, searchQueryString, guildId, channelId, threadId } = arg0);
    const searchContextId = SearchTokenTypes.getSearchContextId(searchContext);
    const obj = SearchTokenTypes;
    dispatcherDefault.dispatch({ type: "SEARCH_GUILD_MEMBER_TAB_SEARCH", id: searchContextId, searchQueryString, guildId, channelId, threadId });
  },
  cleanupGuildMemberTab(closure_0) {
    const searchContextId = SearchTokenTypes.getSearchContextId(closure_0);
    const obj = SearchTokenTypes;
    dispatcherDefault.dispatch({ type: "SEARCH_GUILD_MEMBER_TAB_CLEANUP", id: searchContextId });
  },
  searchGuildChannelTab(arg0) {
    ({ searchContext, searchQueryString, guildId } = arg0);
    const searchContextId = SearchTokenTypes.getSearchContextId(searchContext);
    const obj = SearchTokenTypes;
    dispatcherDefault.dispatch({ type: "SEARCH_GUILD_CHANNEL_TAB_SEARCH", id: searchContextId, searchQueryString, guildId });
  },
  cleanupGuildChannelTab(closure_0) {
    const searchContextId = SearchTokenTypes.getSearchContextId(closure_0);
    const obj = SearchTokenTypes;
    dispatcherDefault.dispatch({ type: "SEARCH_GUILD_CHANNEL_TAB_CLEANUP", id: searchContextId });
  },
  addSearchHistoryItem(closure_0, arg1) {
    if (closure_0.type === SearchTypes.DMS) {
      let obj = SearchTokenTypes;
      const searchContextId = obj.getSearchContextId(closure_0);
      obj = { type: "SEARCH_HISTORY_NATIVE_ADD_ITEM", id: null, item: null };
      obj[1] = searchContextId;
      obj[2] = arg1;
      dispatcherDefault.dispatch(obj);
      const obj2 = dispatcherDefault;
    }
  },
  removeSearchHistoryItem(searchContext, searchHistoryItem) {
    let obj = SearchTokenTypes;
    const searchContextId = obj.getSearchContextId(searchContext);
    obj = { type: "SEARCH_HISTORY_NATIVE_REMOVE_ITEM", id: searchContextId, item: searchHistoryItem };
    dispatcherDefault.dispatch(obj);
  },
  clearSearchHistory(searchContext) {
    const searchContextId = SearchTokenTypes.getSearchContextId(searchContext);
    const obj = SearchTokenTypes;
    dispatcherDefault.dispatch({ type: "SEARCH_HISTORY_NATIVE_CLEAR_ITEMS", id: searchContextId });
  },
  updateSearchQuery(closure_0, updater) {
    let obj = SearchTokenTypes;
    const searchContextId = obj.getSearchContextId(closure_0);
    obj = { type: "SEARCH_QUERY_NATIVE_UPDATE", id: searchContextId, searchContext: closure_0, updater };
    dispatcherDefault.dispatch(obj);
  },
  deleteSearchQuery(closure_5) {
    const searchContextId = SearchTokenTypes.getSearchContextId(closure_5);
    const obj = SearchTokenTypes;
    dispatcherDefault.dispatch({ type: "SEARCH_QUERY_NATIVE_DELETE", id: searchContextId });
  },
  initializeSearchQuery(channelDetailsSearchContext) {
    let obj = SearchTokenTypes;
    const searchContextId = obj.getSearchContextId(channelDetailsSearchContext);
    obj = { type: "SEARCH_QUERY_NATIVE_INITIALIZE", id: searchContextId, searchContext: channelDetailsSearchContext };
    dispatcherDefault.dispatch(obj);
  }
};
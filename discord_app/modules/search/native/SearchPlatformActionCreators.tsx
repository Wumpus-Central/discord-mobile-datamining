// === Module 11844: SearchPlatformActionCreators ===

// Module 11844 (SearchPlatformActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import SearchUtils from "SearchUtils" /* 11823 */;
import SearchTabsLayoutStore from "SearchTabsLayoutStore" /* 11845 */;
import SearchQueryStore from "SearchQueryStore" /* 11822 */;
import size from "module_2" /* 2 */;

const SearchTypes = Constants.SearchTypes;
const result = size.fileFinishedImporting("modules/search/native/SearchPlatformActionCreators.tsx");

export default {
  searchPeopleTab(searchContext, searchQueryString) {
    const searchContextId = SearchUtils.getSearchContextId(searchContext);
    DispatcherDefault.dispatch({ type: "SEARCH_PEOPLE_TAB_SEARCH", id: searchContextId, searchQueryString });
  },
  cleanupPeopleTab(searchContext) {
    const searchContextId = SearchUtils.getSearchContextId(searchContext);
    DispatcherDefault.dispatch({ type: "SEARCH_PEOPLE_TAB_CLEANUP", id: searchContextId });
  },
  searchGuildMemberTab(arg0) {
    ({ searchContext, searchQueryString, guildId, channelId, threadId } = arg0);
    const searchContextId = SearchUtils.getSearchContextId(searchContext);
    DispatcherDefault.dispatch({ type: "SEARCH_GUILD_MEMBER_TAB_SEARCH", id: searchContextId, searchQueryString, guildId, channelId, threadId });
  },
  cleanupGuildMemberTab(searchContext) {
    const searchContextId = SearchUtils.getSearchContextId(searchContext);
    DispatcherDefault.dispatch({ type: "SEARCH_GUILD_MEMBER_TAB_CLEANUP", id: searchContextId });
  },
  searchGuildChannelTab(arg0) {
    ({ searchContext, searchQueryString, guildId } = arg0);
    const searchContextId = SearchUtils.getSearchContextId(searchContext);
    DispatcherDefault.dispatch({ type: "SEARCH_GUILD_CHANNEL_TAB_SEARCH", id: searchContextId, searchQueryString, guildId });
  },
  cleanupGuildChannelTab(searchContext) {
    const searchContextId = SearchUtils.getSearchContextId(searchContext);
    DispatcherDefault.dispatch({ type: "SEARCH_GUILD_CHANNEL_TAB_CLEANUP", id: searchContextId });
  },
  addSearchHistoryItem(type, item) {
    if (type.type === SearchTypes.DMS) {
      const searchContextId = SearchUtils.getSearchContextId(type);
      const obj3 = { type: "SEARCH_HISTORY_NATIVE_ADD_ITEM", id: searchContextId, item };
      DispatcherDefault.dispatch(obj3);
    }
  },
  removeSearchHistoryItem(searchContext, searchHistoryItem) {
    const searchContextId = SearchUtils.getSearchContextId(searchContext);
    DispatcherDefault.dispatch({ type: "SEARCH_HISTORY_NATIVE_REMOVE_ITEM", id: searchContextId, item: searchHistoryItem });
  },
  clearSearchHistory(searchContext) {
    const searchContextId = SearchUtils.getSearchContextId(searchContext);
    DispatcherDefault.dispatch({ type: "SEARCH_HISTORY_NATIVE_CLEAR_ITEMS", id: searchContextId });
  },
  updateSearchQuery(searchContext, updater) {
    const searchContextId = SearchUtils.getSearchContextId(searchContext);
    DispatcherDefault.dispatch({ type: "SEARCH_QUERY_NATIVE_UPDATE", id: searchContextId, searchContext, updater });
  },
  deleteSearchQuery(searchContext) {
    const searchContextId = SearchUtils.getSearchContextId(searchContext);
    DispatcherDefault.dispatch({ type: "SEARCH_QUERY_NATIVE_DELETE", id: searchContextId });
  },
  initializeSearchQuery(channelDetailsSearchContext) {
    const searchContextId = SearchUtils.getSearchContextId(channelDetailsSearchContext);
    DispatcherDefault.dispatch({ type: "SEARCH_QUERY_NATIVE_INITIALIZE", id: searchContextId, searchContext: channelDetailsSearchContext });
  }
};
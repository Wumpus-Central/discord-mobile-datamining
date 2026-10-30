// discord_app/modules/search/native/SearchPlatformActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import Constants from "../../../Constants.tsx";
import SearchUtils from "../SearchUtils.tsx";
import SearchTabsLayoutStore from "stores/SearchTabsLayoutStore.tsx";
import SearchQueryStore from "stores/SearchQueryStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
    DispatcherDefault.dispatch({
      type: "SEARCH_GUILD_MEMBER_TAB_SEARCH",
      id: searchContextId,
      searchQueryString,
      guildId,
      channelId,
      threadId,
    });
  },
  cleanupGuildMemberTab(searchContext) {
    const searchContextId = SearchUtils.getSearchContextId(searchContext);
    DispatcherDefault.dispatch({ type: "SEARCH_GUILD_MEMBER_TAB_CLEANUP", id: searchContextId });
  },
  searchGuildChannelTab(arg0) {
    ({ searchContext, searchQueryString, guildId } = arg0);
    const searchContextId = SearchUtils.getSearchContextId(searchContext);
    DispatcherDefault.dispatch({
      type: "SEARCH_GUILD_CHANNEL_TAB_SEARCH",
      id: searchContextId,
      searchQueryString,
      guildId,
    });
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
    DispatcherDefault.dispatch({
      type: "SEARCH_HISTORY_NATIVE_REMOVE_ITEM",
      id: searchContextId,
      item: searchHistoryItem,
    });
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
    DispatcherDefault.dispatch({
      type: "SEARCH_QUERY_NATIVE_INITIALIZE",
      id: searchContextId,
      searchContext: channelDetailsSearchContext,
    });
  },
};

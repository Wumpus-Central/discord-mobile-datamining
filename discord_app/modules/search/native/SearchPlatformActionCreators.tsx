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
    let obj = SearchUtils;
    const searchContextId = obj.getSearchContextId(searchContext);
    obj = { type: "SEARCH_PEOPLE_TAB_SEARCH", id: searchContextId, searchQueryString };
    DispatcherDefault.dispatch(obj);
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
      let obj = SearchUtils;
      const searchContextId = obj.getSearchContextId(type);
      obj = { type: "SEARCH_HISTORY_NATIVE_ADD_ITEM", id: searchContextId, item };
      DispatcherDefault.dispatch(obj);
    }
  },
  removeSearchHistoryItem(searchContext, searchHistoryItem) {
    let obj = SearchUtils;
    const searchContextId = obj.getSearchContextId(searchContext);
    obj = { type: "SEARCH_HISTORY_NATIVE_REMOVE_ITEM", id: searchContextId, item: searchHistoryItem };
    DispatcherDefault.dispatch(obj);
  },
  clearSearchHistory(searchContext) {
    const searchContextId = SearchUtils.getSearchContextId(searchContext);
    DispatcherDefault.dispatch({ type: "SEARCH_HISTORY_NATIVE_CLEAR_ITEMS", id: searchContextId });
  },
  updateSearchQuery(searchContext, updater) {
    let obj = SearchUtils;
    const searchContextId = obj.getSearchContextId(searchContext);
    obj = { type: "SEARCH_QUERY_NATIVE_UPDATE", id: searchContextId, searchContext, updater };
    DispatcherDefault.dispatch(obj);
  },
  deleteSearchQuery(searchContext) {
    const searchContextId = SearchUtils.getSearchContextId(searchContext);
    DispatcherDefault.dispatch({ type: "SEARCH_QUERY_NATIVE_DELETE", id: searchContextId });
  },
  initializeSearchQuery(channelDetailsSearchContext) {
    let obj = SearchUtils;
    const searchContextId = obj.getSearchContextId(channelDetailsSearchContext);
    obj = { type: "SEARCH_QUERY_NATIVE_INITIALIZE", id: searchContextId, searchContext: channelDetailsSearchContext };
    DispatcherDefault.dispatch(obj);
  },
};

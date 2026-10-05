// discord_app/modules/search/native/SearchPlatformActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import Constants from "../../../Constants.tsx";
import SearchUtils from "../SearchUtils.tsx";
import SearchTabsLayoutStore from "stores/SearchTabsLayoutStore.tsx";
import SearchQueryStore from "stores/SearchQueryStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const SearchTypes = Constants.SearchTypes;
let obj = {
  searchPeopleTab(searchContext, searchQueryString) {
    const obj = SearchUtils;
    const searchContextId = obj.getSearchContextId(searchContext);
    const obj2 = DispatcherDefault;
    const obj3 = { type: "SEARCH_PEOPLE_TAB_SEARCH", id: searchContextId, searchQueryString };
    obj2.dispatch(obj3);
  },
  cleanupPeopleTab(searchContext) {
    const obj = SearchUtils;
    const searchContextId = obj.getSearchContextId(searchContext);
    const obj2 = DispatcherDefault;
    obj2.dispatch({ type: "SEARCH_PEOPLE_TAB_CLEANUP", id: searchContextId });
  },
  searchGuildMemberTab(arg0) {
    let channelId;
    let guildId;
    let searchContext;
    let searchQueryString;
    let threadId;
    ({ searchContext, searchQueryString, guildId, channelId, threadId } = arg0);
    const obj = SearchUtils;
    const searchContextId = obj.getSearchContextId(searchContext);
    const obj2 = DispatcherDefault;
    obj2.dispatch({
      type: "SEARCH_GUILD_MEMBER_TAB_SEARCH",
      id: searchContextId,
      searchQueryString,
      guildId,
      channelId,
      threadId,
    });
  },
  cleanupGuildMemberTab(searchContext) {
    const obj = SearchUtils;
    const searchContextId = obj.getSearchContextId(searchContext);
    const obj2 = DispatcherDefault;
    obj2.dispatch({ type: "SEARCH_GUILD_MEMBER_TAB_CLEANUP", id: searchContextId });
  },
  searchGuildChannelTab(arg0) {
    let guildId;
    let searchContext;
    let searchQueryString;
    ({ searchContext, searchQueryString, guildId } = arg0);
    const obj = SearchUtils;
    const searchContextId = obj.getSearchContextId(searchContext);
    const obj2 = DispatcherDefault;
    obj2.dispatch({ type: "SEARCH_GUILD_CHANNEL_TAB_SEARCH", id: searchContextId, searchQueryString, guildId });
  },
  cleanupGuildChannelTab(searchContext) {
    const obj = SearchUtils;
    const searchContextId = obj.getSearchContextId(searchContext);
    const obj2 = DispatcherDefault;
    obj2.dispatch({ type: "SEARCH_GUILD_CHANNEL_TAB_CLEANUP", id: searchContextId });
  },
  addSearchHistoryItem(type, item) {
    if (type.type === SearchTypes.DMS) {
      const obj = SearchUtils;
      const searchContextId = obj.getSearchContextId(type);
      const obj3 = { type: "SEARCH_HISTORY_NATIVE_ADD_ITEM", id: searchContextId, item };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
  },
  removeSearchHistoryItem(searchContext, searchHistoryItem) {
    const obj = SearchUtils;
    const searchContextId = obj.getSearchContextId(searchContext);
    const obj2 = DispatcherDefault;
    const obj3 = { type: "SEARCH_HISTORY_NATIVE_REMOVE_ITEM", id: searchContextId, item: searchHistoryItem };
    obj2.dispatch(obj3);
  },
  clearSearchHistory(searchContext) {
    const obj = SearchUtils;
    const searchContextId = obj.getSearchContextId(searchContext);
    const obj2 = DispatcherDefault;
    obj2.dispatch({ type: "SEARCH_HISTORY_NATIVE_CLEAR_ITEMS", id: searchContextId });
  },
  updateSearchQuery(searchContext, updater) {
    const obj = SearchUtils;
    const searchContextId = obj.getSearchContextId(searchContext);
    const obj2 = DispatcherDefault;
    const obj3 = { type: "SEARCH_QUERY_NATIVE_UPDATE", id: searchContextId, searchContext, updater };
    obj2.dispatch(obj3);
  },
  deleteSearchQuery(searchContext) {
    const obj = SearchUtils;
    const searchContextId = obj.getSearchContextId(searchContext);
    const obj2 = DispatcherDefault;
    obj2.dispatch({ type: "SEARCH_QUERY_NATIVE_DELETE", id: searchContextId });
  },
  initializeSearchQuery(channelDetailsSearchContext) {
    const obj = SearchUtils;
    const searchContextId = obj.getSearchContextId(channelDetailsSearchContext);
    const obj2 = DispatcherDefault;
    const obj3 = {
      type: "SEARCH_QUERY_NATIVE_INITIALIZE",
      id: searchContextId,
      searchContext: channelDetailsSearchContext,
    };
    obj2.dispatch(obj3);
  },
};
const result = size.fileFinishedImporting("modules/search/native/SearchPlatformActionCreators.tsx");

export default obj;

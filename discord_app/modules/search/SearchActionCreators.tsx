// discord_app/modules/search/SearchActionCreators.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import DispatcherDefault from "../../Dispatcher.tsx";
import UserSettingsProtoActionCreators from "../user_settings/UserSettingsProtoActionCreators.tsx";
import SearchTabsFetchManagerDefault from "managers/SearchTabsFetchManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

let body;

let obj = {
  fetchTabMessages(searchContext) {
    let getLimit;
    let onFetchStart;
    let pagination;
    let searchAnalyticsIds;
    let searchMode;
    let searchQueryString;
    let searchTabs;
    let tmpResult6;
    let trackExactTotalHits;
    searchContext = searchContext.searchContext;
    ({
      searchTabs,
      searchQueryString,
      getId: importDefault,
      onFetchStart,
      onFetchSuccess: dependencyMap,
      searchAnalyticsIds,
    } = searchContext);
    let guildIdFromSearchContext;
    let mapped;
    const tmp = searchContext;
    ({ pagination, trackExactTotalHits, getLimit, searchMode } = searchContext);
    let obj = searchContext(11987);
    const tokenizeQueryResult = obj.tokenizeQuery(searchQueryString);
    let obj2 = searchContext(11987);
    const searchQueryFromTokens = obj2.getSearchQueryFromTokens(tokenizeQueryResult);
    if (Array.isArray(searchQueryFromTokens.pinned)) {
      const pinned = searchQueryFromTokens.pinned;
      searchQueryFromTokens.pinned = pinned.some((item) => true === item);
    }
    const tmpResult = tmp(11987);
    const result = tmpResult.searchModeToSearchQueryParams(searchMode);
    let obj3 = {};
    const merged = Object.assign(searchQueryFromTokens);
    const merged1 = Object.assign(result);
    const merged2 = Object.assign(searchAnalyticsIds);
    const tmpResult4 = tmp(11987);
    guildIdFromSearchContext = tmpResult4.getGuildIdFromSearchContext(searchContext);
    if (null != guildIdFromSearchContext) {
      const tmpResult5 = tmp(11987);
      tmpResult5.setIncludeNSFW(obj3, guildIdFromSearchContext);
    }
    const obj4 = {
      id: tmpResult6.getSearchContextId(searchContext),
      searchContext,
      searchQuery: obj3,
      searchTabs,
      getLimit,
      pagination,
      trackExactTotalHits,
    };
    const create = SearchTabsFetchManagerDefault.create;
    SearchTabsFetchManagerDefault;
    tmpResult6 = tmp(11987);
    const obj5 = create(obj4);
    if (onFetchStart != null) {
      const obj6 = { searchContext, searchQueryString, searchQuery: obj3 };
      onFetchStart(obj6);
    }
    mapped = searchTabs.map((item) => importDefault(item));
    const tmp11Result = DispatcherDefault;
    tmp11Result.dispatch({ type: "SEARCH_MESSAGES_START", ids: mapped });
    const response = obj5.fetch(
      (body) => {
        body = body.body;
        const entries = Object.entries(body.tabs);
        let obj = DispatcherDefault;
        const obj2 = {
          type: "SEARCH_MESSAGES_SUCCESS",
          guildId: guildIdFromSearchContext,
          data: entries.map((item) => {
            let channels;
            let members;
            let threads;
            let tmp;
            let tmp2;
            let tmp6;
            [tmp, tmp2] = item;
            const cursor = tmp2.cursor;
            const obj = {
              id: importDefault(tmp),
              analyticsId: body.analytics_id,
              totalResults: tmp2.total_results,
              cursor: tmp6,
              messages: null,
              channels,
              threads,
              members: members.map((item) => closure_1_1(closure_1_2[4])(item)),
              doingHistoricalIndex: null,
              documentsIndexed: null,
            };
            if (null == cursor) {
              tmp6 = cursor;
            } else {
              _modDef12;
              tmp6 = null;
            }
            ({ messages: obj.messages, channels } = tmp2);
            if (channels == null) {
              channels = [];
            }
            threads = tmp2.threads;
            if (threads == null) {
              threads = [];
            }
            members = tmp2.members;
            if (members == null) {
              members = [];
            }
            ({ doing_deep_historical_index: obj.doingHistoricalIndex, documents_indexed: obj.documentsIndexed } = body);
            return obj;
          }),
        };
        obj.dispatch(obj2);
        if (dependencyMap != null) {
          const obj3 = { searchContext: body, tabEntries: entries };
          tmp2(obj3);
        }
      },
      () => {
        const obj = DispatcherDefault;
        const obj2 = { type: "SEARCH_MESSAGES_INDEXING", ids: mapped };
        obj.dispatch(obj2);
      },
      (error) => {
        const obj = DispatcherDefault;
        const obj2 = { type: "SEARCH_MESSAGES_FAILURE", ids: mapped, error };
        obj.dispatch(obj2);
      },
    );
    return true;
  },
  fetchMessages(arg0) {
    let items;
    let onFetchStart;
    let pagination;
    let searchAnalyticsIds;
    let searchContext;
    let searchEverywhere;
    let searchMode;
    let searchQueryString;
    ({ searchContext, searchQueryString, onFetchStart, searchAnalyticsIds } = arg0);
    let guildIdFromSearchContext;
    let searchContextId;
    const tmp = guildIdFromSearchContext;
    ({ pagination, searchMode, searchEverywhere } = arg0);
    let obj = guildIdFromSearchContext(11987);
    let obj2 = { offset: pagination.offset };
    const tokenizeQueryResult = obj.tokenizeQuery(searchQueryString);
    const obj3 = guildIdFromSearchContext(11987);
    const merged = Object.assign(obj3.getSearchQueryFromTokens(tokenizeQueryResult));
    const obj4 = guildIdFromSearchContext(11987);
    const merged1 = Object.assign(obj4.searchModeToSearchQueryParams(searchMode));
    const merged2 = Object.assign(searchAnalyticsIds);
    const obj5 = guildIdFromSearchContext(11987);
    guildIdFromSearchContext = obj5.getGuildIdFromSearchContext(searchContext);
    if (null != guildIdFromSearchContext) {
      const tmpResult = tmp(11987);
      tmpResult.setIncludeNSFW(obj2, guildIdFromSearchContext);
    }
    if (searchEverywhere) {
      obj2.search_everywhere = true;
    }
    const tmpResult2 = tmp(11987);
    searchContextId = tmpResult2.getSearchContextId(searchContext);
    const obj6 = { id: searchContextId, searchType: searchContext.type, searchQuery: obj2 };
    const obj8 = searchContextId(12018);
    const obj7 = obj8.create(obj6);
    const tmp10 = searchContextId;
    if (onFetchStart != null) {
      const obj9 = { searchContext, searchQueryString, searchQuery: obj2 };
      onFetchStart(obj9);
    }
    const obj10 = { type: "SEARCH_MESSAGES_START", ids: items };
    items = [searchContextId];
    const tmp10Result = tmp10(584);
    tmp10Result.dispatch(obj10);
    const response = obj7.fetch(
      (analyticsId) => {
        let channels;
        let items;
        let members;
        let threads;
        const obj = { type: "SEARCH_MESSAGES_SUCCESS", guildId: guildIdFromSearchContext, data: items };
        const obj2 = {
          id: searchContextId,
          analyticsId: analyticsId.body.analytics_id,
          totalResults: analyticsId.body.total_results,
          messages: analyticsId.body.messages,
          threads,
          members: members.map((item) => searchContextId(closure_1_2[4])(item)),
          doingHistoricalIndex: analyticsId.body.doing_deep_historical_index,
          documentsIndexed: analyticsId.body.documents_indexed,
          channels,
          cursor: null,
        };
        threads = analyticsId.body.threads;
        const dispatch = DispatcherDefault.dispatch;
        DispatcherDefault;
        if (threads == null) {
          threads = [];
        }
        members = analyticsId.body.members;
        if (members == null) {
          members = [];
        }
        channels = analyticsId.body.channels;
        if (channels == null) {
          channels = [];
        }
        items = [obj2];
        dispatch(obj);
      },
      () => {
        let items;
        const obj2 = { type: "SEARCH_MESSAGES_INDEXING", ids: items };
        items = [searchContextId];
        const obj = DispatcherDefault;
        obj.dispatch(obj2);
      },
      (error) => {
        let items;
        const obj2 = { type: "SEARCH_MESSAGES_FAILURE", ids: items, error };
        items = [searchContextId];
        const obj = DispatcherDefault;
        obj.dispatch(obj2);
      },
    );
  },
  clearSearchRecentMessages() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "SEARCH_RECENT_MESSAGES_CLEAR" });
  },
  clearAllSearchMesssages() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "SEARCH_MESSAGES_CLEAR_ALL" });
  },
  clearSearchMessages(id) {
    const obj = DispatcherDefault;
    const obj2 = { type: "SEARCH_MESSAGES_CLEAR", id };
    obj.dispatch(obj2);
  },
  initializeAutocomplete(channelDetailsSearchContext) {
    const obj = DispatcherDefault;
    const obj2 = { type: "SEARCH_AUTOCOMPLETE_INITIALIZE", searchContext: channelDetailsSearchContext };
    obj.dispatch(obj2);
  },
  updateAutocompleteQuery(arg0) {
    let cursorScope;
    let queryString;
    let searchContext;
    let tokens;
    ({ queryString, searchContext, tokens, cursorScope } = arg0);
    if (queryString.trim().length > 0) {
      const FrecencyUserSettingsActionCreators = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators;
      const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    }
    const obj = DispatcherDefault;
    obj.dispatch({ type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE", searchContext, tokens, cursorScope });
  },
};
let result = size.fileFinishedImporting("modules/search/SearchActionCreators.tsx");

export default obj;

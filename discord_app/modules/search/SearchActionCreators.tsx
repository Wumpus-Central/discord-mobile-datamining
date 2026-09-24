// discord_app/modules/search/SearchActionCreators.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import DispatcherDefault from "../../Dispatcher.tsx";
import UserSettingsProtoActionCreators from "../user_settings/UserSettingsProtoActionCreators.tsx";
import SearchTabsFetchManagerDefault from "managers/SearchTabsFetchManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/search/SearchActionCreators.tsx");

export default {
  fetchTabMessages(searchContext) {
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
    ({ pagination, trackExactTotalHits, getLimit, searchMode } = searchContext);
    let obj = searchContext(12683);
    const tokenizeQueryResult = searchContext(12683).tokenizeQuery(searchQueryString);
    const searchQueryFromTokens = searchContext(12683).getSearchQueryFromTokens(tokenizeQueryResult);
    if (Array.isArray(searchQueryFromTokens.pinned)) {
      const pinned = searchQueryFromTokens.pinned;
      searchQueryFromTokens.pinned = pinned.some((item) => true === item);
    }
    const obj2 = searchContext(12683);
    const result = searchContext(12683).searchModeToSearchQueryParams(searchMode);
    let obj3 = {};
    const merged = Object.assign(searchQueryFromTokens);
    const merged1 = Object.assign(result);
    const merged2 = Object.assign(searchAnalyticsIds);
    const tmpResult = searchContext(12683);
    guildIdFromSearchContext = searchContext(12683).getGuildIdFromSearchContext(searchContext);
    if (null != guildIdFromSearchContext) {
      tmp(12683).setIncludeNSFW(obj3, guildIdFromSearchContext);
      const tmpResult5 = tmp(12683);
    }
    const tmpResult4 = searchContext(12683);
    const obj4 = {
      id: null,
      searchContext: null,
      searchQuery: null,
      searchTabs: null,
      getLimit: null,
      pagination: null,
      trackExactTotalHits: null,
    };
    const obj7 = SearchTabsFetchManagerDefault;
    obj4.id = searchContext(12683).getSearchContextId(searchContext);
    obj4.searchContext = searchContext;
    obj4.searchQuery = obj3;
    obj4.searchTabs = searchTabs;
    obj4.getLimit = getLimit;
    obj4.pagination = pagination;
    obj4.trackExactTotalHits = trackExactTotalHits;
    const tmpResult6 = searchContext(12683);
    if (onFetchStart != null) {
      const obj6 = { searchContext, searchQueryString, searchQuery: obj3 };
      onFetchStart(obj6);
    }
    mapped = searchTabs.map((item) => importDefault(item));
    const obj5 = obj7.create(obj4);
    DispatcherDefault.dispatch({ type: "SEARCH_MESSAGES_START", ids: mapped });
    const response = obj5.fetch(
      (body) => {
        body = body.body;
        const entries = Object.entries(body.tabs);
        let obj = DispatcherDefault;
        obj.dispatch({
          type: "SEARCH_MESSAGES_SUCCESS",
          guildId: guildIdFromSearchContext,
          data: entries.map((item) => {
            [tmp, tmp2] = item;
            const cursor = tmp2.cursor;
            const obj = {
              id: closure_2_1(tmp),
              analyticsId: body.analytics_id,
              totalResults: tmp2.total_results,
              cursor: null,
              messages: null,
              channels: null,
              threads: null,
              members: null,
              doingHistoricalIndex: null,
              documentsIndexed: null,
            };
            if (null == cursor) {
              let tmp6 = cursor;
            } else {
              _modDef12;
              tmp6 = null;
            }
            obj.cursor = tmp6;
            ({ messages: obj.messages, channels } = tmp2);
            if (channels == null) {
              channels = [];
            }
            obj.channels = channels;
            let threads = tmp2.threads;
            if (threads == null) {
              threads = [];
            }
            obj.threads = threads;
            let members = tmp2.members;
            if (members == null) {
              members = [];
            }
            obj.members = members.map((item) => closure_1_1(closure_1_2[4])(item));
            ({ doing_deep_historical_index: obj.doingHistoricalIndex, documents_indexed: obj.documentsIndexed } = body);
            return obj;
          }),
        });
        if (closure_2 != null) {
          const obj3 = { searchContext: body, tabEntries: entries };
          tmp2(obj3);
        }
      },
      () => {
        DispatcherDefault.dispatch({ type: "SEARCH_MESSAGES_INDEXING", ids: mapped });
      },
      (error) => {
        DispatcherDefault.dispatch({ type: "SEARCH_MESSAGES_FAILURE", ids: mapped, error });
      },
    );
    return true;
  },
  fetchMessages(arg0) {
    ({ searchContext, searchQueryString, onFetchStart, searchAnalyticsIds } = arg0);
    let guildIdFromSearchContext;
    let searchContextId;
    ({ pagination, searchMode, searchEverywhere } = arg0);
    let obj2 = {};
    const obj = guildIdFromSearchContext(12683);
    const tokenizeQueryResult = guildIdFromSearchContext(12683).tokenizeQuery(searchQueryString);
    const merged = Object.assign(guildIdFromSearchContext(12683).getSearchQueryFromTokens(tokenizeQueryResult));
    let obj3 = guildIdFromSearchContext(12683);
    const merged1 = Object.assign(guildIdFromSearchContext(12683).searchModeToSearchQueryParams(searchMode));
    const merged2 = Object.assign(searchAnalyticsIds);
    obj2.offset = pagination.offset;
    const obj4 = guildIdFromSearchContext(12683);
    guildIdFromSearchContext = guildIdFromSearchContext(12683).getGuildIdFromSearchContext(searchContext);
    if (null != guildIdFromSearchContext) {
      tmp(12683).setIncludeNSFW(obj2, guildIdFromSearchContext);
      const tmpResult = tmp(12683);
    }
    if (searchEverywhere) {
      obj2.search_everywhere = true;
    }
    const obj5 = guildIdFromSearchContext(12683);
    searchContextId = guildIdFromSearchContext(12683).getSearchContextId(searchContext);
    const tmp10 = searchContextId;
    const tmpResult2 = guildIdFromSearchContext(12683);
    const obj6 = { id: searchContextId, searchType: searchContext.type, searchQuery: obj2 };
    const obj8 = searchContextId(12694);
    if (onFetchStart != null) {
      const obj9 = { searchContext, searchQueryString, searchQuery: obj2 };
      onFetchStart(obj9);
    }
    const obj7 = searchContextId(12694).create({
      id: searchContextId,
      searchType: searchContext.type,
      searchQuery: obj2,
    });
    const obj10 = { type: "SEARCH_MESSAGES_START", ids: null };
    let items = [searchContextId];
    obj10.ids = items;
    tmp10(573).dispatch(obj10);
    const response = obj7.fetch(
      (analyticsId) => {
        const obj2 = { type: "SEARCH_MESSAGES_SUCCESS", guildId: guildIdFromSearchContext, data: null };
        const obj3 = {
          id: searchContextId,
          analyticsId: analyticsId.body.analytics_id,
          totalResults: analyticsId.body.total_results,
          messages: analyticsId.body.messages,
          threads: null,
          members: null,
          doingHistoricalIndex: null,
          documentsIndexed: null,
          channels: null,
          cursor: null,
        };
        let threads = analyticsId.body.threads;
        if (threads == null) {
          threads = [];
        }
        obj3.threads = threads;
        let members = analyticsId.body.members;
        if (members == null) {
          members = [];
        }
        obj3.members = members.map((item) => searchContextId(closure_1_2[4])(item));
        obj3.doingHistoricalIndex = analyticsId.body.doing_deep_historical_index;
        obj3.documentsIndexed = analyticsId.body.documents_indexed;
        let channels = analyticsId.body.channels;
        if (channels == null) {
          channels = [];
        }
        obj3.channels = channels;
        const items = [obj3];
        obj2.data = items;
        DispatcherDefault.dispatch(obj2);
      },
      () => {
        const obj2 = { type: "SEARCH_MESSAGES_INDEXING", ids: null };
        const items = [searchContextId];
        obj2.ids = items;
        DispatcherDefault.dispatch(obj2);
      },
      (error) => {
        const obj2 = { type: "SEARCH_MESSAGES_FAILURE", ids: null, error };
        const items = [searchContextId];
        obj2.ids = items;
        DispatcherDefault.dispatch(obj2);
      },
    );
    const tmp10Result = tmp10(573);
  },
  clearSearchRecentMessages() {
    DispatcherDefault.dispatch({ type: "SEARCH_RECENT_MESSAGES_CLEAR" });
  },
  clearAllSearchMesssages() {
    DispatcherDefault.dispatch({ type: "SEARCH_MESSAGES_CLEAR_ALL" });
  },
  clearSearchMessages(id) {
    DispatcherDefault.dispatch({ type: "SEARCH_MESSAGES_CLEAR", id });
  },
  initializeAutocomplete(channelDetailsSearchContext) {
    DispatcherDefault.dispatch({ type: "SEARCH_AUTOCOMPLETE_INITIALIZE", searchContext: channelDetailsSearchContext });
  },
  updateAutocompleteQuery(arg0) {
    ({ queryString, searchContext, tokens, cursorScope } = arg0);
    if (queryString.trim().length > 0) {
      const FrecencyUserSettingsActionCreators = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators;
      const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    }
    DispatcherDefault.dispatch({ type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE", searchContext, tokens, cursorScope });
  },
  markSearchTokensRefreshed() {
    DispatcherDefault.dispatch({ type: "SEARCH_TOKENS_REFRESHED" });
  },
};

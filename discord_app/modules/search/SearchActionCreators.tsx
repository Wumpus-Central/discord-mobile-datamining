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
    } = searchContext);
    let guildIdFromSearchContext;
    let mapped;
    ({ pagination, trackExactTotalHits, getLimit, searchMode } = searchContext);
    let obj = searchContext(12340);
    let obj1 = searchContext(12340);
    const searchQueryFromTokens = obj1.getSearchQueryFromTokens(obj.tokenizeQuery(searchQueryString));
    if (Array.isArray(searchQueryFromTokens.pinned)) {
      const pinned = searchQueryFromTokens.pinned;
      searchQueryFromTokens.pinned = pinned.some((item) => true === item);
    }
    let tmpResult = tmp(12340);
    const result = tmpResult.searchModeToSearchQueryParams(searchMode);
    obj = {};
    const merged = Object.assign(searchQueryFromTokens);
    const merged1 = Object.assign(result);
    tmpResult = tmp(12340);
    guildIdFromSearchContext = tmpResult.getGuildIdFromSearchContext(searchContext);
    if (null != guildIdFromSearchContext) {
      tmp(12340).setIncludeNSFW(obj, guildIdFromSearchContext);
      const tmpResult1 = tmp(12340);
    }
    const tokenizeQueryResult = obj.tokenizeQuery(searchQueryString);
    obj = {
      id: null,
      searchContext: null,
      searchQuery: null,
      searchTabs: null,
      getLimit: null,
      pagination: null,
      trackExactTotalHits: null,
    };
    const obj7 = SearchTabsFetchManagerDefault;
    obj.id = searchContext(12340).getSearchContextId(searchContext);
    obj.searchContext = searchContext;
    obj.searchQuery = obj;
    obj.searchTabs = searchTabs;
    obj.getLimit = getLimit;
    obj.pagination = pagination;
    obj.trackExactTotalHits = trackExactTotalHits;
    obj1 = obj7.create(obj);
    if (onFetchStart != null) {
      const obj2 = { searchContext, searchQueryString, searchQuery: obj };
      onFetchStart(obj2);
    }
    mapped = searchTabs.map((item) => importDefault(item));
    const tmpResult2 = searchContext(12340);
    DispatcherDefault.dispatch({ type: "SEARCH_MESSAGES_START", ids: mapped });
    const response = obj1.fetch(
      (body) => {
        body = body.body;
        const entries = Object.entries(body.tabs);
        let obj = {
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
        };
        obj.dispatch(obj);
        if (closure_2 != null) {
          obj = { searchContext: body, tabEntries: entries };
          tmp2(obj);
        }
      },
      () => {
        const obj = { type: "SEARCH_MESSAGES_INDEXING", ids: mapped };
        obj.dispatch(obj);
      },
      (error) => {
        const obj = { type: "SEARCH_MESSAGES_FAILURE", ids: mapped, error };
        obj.dispatch(obj);
      },
    );
    return true;
  },
  fetchMessages(arg0) {
    ({ searchContext, searchQueryString, onFetchStart } = arg0);
    let guildIdFromSearchContext;
    let searchContextId;
    ({ pagination, searchMode, searchEverywhere } = arg0);
    guildIdFromSearchContext(12340);
    let obj = {};
    let obj2 = guildIdFromSearchContext(12340);
    const merged = Object.assign(obj2.getSearchQueryFromTokens(obj.tokenizeQuery(searchQueryString)));
    let obj3 = guildIdFromSearchContext(12340);
    const merged1 = Object.assign(obj3.searchModeToSearchQueryParams(searchMode));
    obj.offset = pagination.offset;
    const tokenizeQueryResult = obj.tokenizeQuery(searchQueryString);
    guildIdFromSearchContext = guildIdFromSearchContext(12340).getGuildIdFromSearchContext(searchContext);
    if (null != guildIdFromSearchContext) {
      let tmpResult = tmp(12340);
      tmpResult.setIncludeNSFW(obj, guildIdFromSearchContext);
    }
    if (searchEverywhere) {
      obj.search_everywhere = true;
    }
    tmpResult = tmp(12340);
    searchContextId = tmpResult.getSearchContextId(searchContext);
    const obj5 = guildIdFromSearchContext(12340);
    const tmp9 = searchContextId;
    obj = { id: searchContextId, searchType: searchContext.type, searchQuery: obj };
    const obj8 = searchContextId(12351);
    if (onFetchStart != null) {
      obj2 = { searchContext, searchQueryString, searchQuery: obj };
      onFetchStart(obj2);
    }
    const obj1 = searchContextId(12351).create(obj);
    obj3 = { type: "SEARCH_MESSAGES_START", ids: null };
    let items = [searchContextId];
    obj3.ids = items;
    tmp9(573).dispatch(obj3);
    const response = obj1.fetch(
      (analyticsId) => {
        let obj = { type: "SEARCH_MESSAGES_SUCCESS", guildId: guildIdFromSearchContext, data: null };
        obj = {
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
        obj.threads = threads;
        let members = analyticsId.body.members;
        if (members == null) {
          members = [];
        }
        obj.members = members.map((item) => searchContextId(closure_1_2[4])(item));
        obj.doingHistoricalIndex = analyticsId.body.doing_deep_historical_index;
        obj.documentsIndexed = analyticsId.body.documents_indexed;
        let channels = analyticsId.body.channels;
        if (channels == null) {
          channels = [];
        }
        obj.channels = channels;
        const items = [obj];
        obj.data = items;
        obj.dispatch(obj);
      },
      () => {
        const obj = { type: "SEARCH_MESSAGES_INDEXING", ids: null };
        const items = [searchContextId];
        obj.ids = items;
        obj.dispatch(obj);
      },
      (error) => {
        const obj = { type: "SEARCH_MESSAGES_FAILURE", ids: null, error };
        const items = [searchContextId];
        obj.ids = items;
        obj.dispatch(obj);
      },
    );
    const tmp9Result = tmp9(573);
  },
  clearSearchRecentMessages() {
    DispatcherDefault.dispatch({ type: "SEARCH_RECENT_MESSAGES_CLEAR" });
  },
  clearAllSearchMesssages() {
    DispatcherDefault.dispatch({ type: "SEARCH_MESSAGES_CLEAR_ALL" });
  },
  clearSearchMessages(id) {
    const obj = { type: "SEARCH_MESSAGES_CLEAR", id };
    obj.dispatch(obj);
  },
  initializeAutocomplete(channelDetailsSearchContext) {
    const obj = { type: "SEARCH_AUTOCOMPLETE_INITIALIZE", searchContext: channelDetailsSearchContext };
    obj.dispatch(obj);
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

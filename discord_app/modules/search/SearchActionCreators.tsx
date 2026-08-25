// discord_app/modules/search/SearchActionCreators.tsx
import set from "../../../_runtime/00002_set.js";
import dispatcherDefault from "../../Dispatcher.tsx";
import updateUserGuildSettings from "../user_settings/UserSettingsProtoActionCreators.tsx";
import createRequestPayloadDefault from "managers/SearchTabsFetchManager.tsx";

let result = set.fileFinishedImporting("modules/search/SearchActionCreators.tsx");

export default {
  fetchTabMessages(searchContext) {
    searchContext = searchContext.searchContext;
    ({ searchTabs, searchQueryString, getId: importDefault, onFetchStart, onFetchSuccess: dependencyMap } = searchContext);
    let guildIdFromSearchContext;
    let mapped;
    ({ pagination, trackExactTotalHits, getLimit, searchMode } = searchContext);
    let obj = searchContext(11907);
    obj1 = searchContext(11907);
    const searchQueryFromTokens = obj1.getSearchQueryFromTokens(obj.tokenizeQuery(searchQueryString));
    if (Array.isArray(searchQueryFromTokens.pinned)) {
      const pinned = searchQueryFromTokens.pinned;
      searchQueryFromTokens.pinned = pinned.some((arg0) => true === arg0);
    }
    let tmpResult = tmp(11907);
    const result = tmpResult.searchModeToSearchQueryParams(searchMode);
    obj = {};
    const merged = Object.assign(searchQueryFromTokens);
    const merged1 = Object.assign(result);
    tmpResult = tmp(11907);
    guildIdFromSearchContext = tmpResult.getGuildIdFromSearchContext(searchContext);
    if (null != guildIdFromSearchContext) {
      tmp(11907).setIncludeNSFW(obj, guildIdFromSearchContext);
      const tmpResult1 = tmp(11907);
    }
    const tmp10 = importDefault;
    const tokenizeQueryResult = obj.tokenizeQuery(searchQueryString);
    obj = { id: null, searchContext: null, searchQuery: null, searchTabs: null, getLimit: null, pagination: null, trackExactTotalHits: null };
    const obj7 = createRequestPayloadDefault;
    obj[0] = searchContext(11907).getSearchContextId(searchContext);
    obj[1] = searchContext;
    obj[2] = obj;
    obj[3] = searchTabs;
    obj[4] = getLimit;
    obj[5] = pagination;
    obj[6] = trackExactTotalHits;
    obj1 = obj7.create(obj);
    if (onFetchStart != null) {
      let obj2 = { searchContext: null, searchQueryString: null, searchQuery: null };
      obj2[0] = searchContext;
      obj2[1] = searchQueryString;
      obj2[2] = obj;
      onFetchStart(obj2);
    }
    mapped = searchTabs.map((arg0) => callback(arg0));
    const tmpResult2 = searchContext(11907);
    dispatcherDefault.dispatch({ type: "SEARCH_MESSAGES_START", ids: mapped });
    const response = obj1.fetch((body) => {
      body = body.body;
      const entries = Object.entries(body.tabs);
      let obj = closure_1_1(closure_1_2[2]);
      obj = {
        type: "SEARCH_MESSAGES_SUCCESS",
        guildId: guildIdFromSearchContext,
        data: entries.map((arg0) => {
          [tmp, tmp2] = arg0;
          const cursor = tmp2.cursor;
          const obj = { id: closure_1_1(tmp), analyticsId: body.analytics_id, totalResults: tmp2.total_results, cursor: null, messages: null, channels: null, threads: null, members: null, doingHistoricalIndex: null, documentsIndexed: null };
          if (null == cursor) {
            let tmp6 = cursor;
          } else {
            tmp6 = null;
            const obj2 = closure_2_1(closure_2_2[3]);
          }
          obj[3] = tmp6;
          ({ messages: obj[4], channels } = tmp2);
          if (channels == null) {
            channels = [];
          }
          obj[5] = channels;
          let threads = tmp2.threads;
          if (threads == null) {
            threads = [];
          }
          obj[6] = threads;
          let members = tmp2.members;
          if (members == null) {
            members = [];
          }
          obj[7] = members.map((arg0) => callback(table[4])(arg0));
          ({ doing_deep_historical_index: obj[8], documents_indexed: obj[9] } = body);
          return obj;
        })
      };
      obj.dispatch(obj);
      if (closure_2 != null) {
        obj = { searchContext: null, tabEntries: null };
        obj[0] = body;
        obj[1] = entries;
        tmp2(obj);
      }
    }, () => {
      let obj = closure_1_1(closure_1_2[2]);
      obj = { type: "SEARCH_MESSAGES_INDEXING", ids: mapped };
      obj.dispatch(obj);
    }, (error) => {
      let obj = closure_1_1(closure_1_2[2]);
      obj = { type: "SEARCH_MESSAGES_FAILURE", ids: mapped, error };
      obj.dispatch(obj);
    });
    return true;
  },
  fetchMessages(arg0) {
    ({ searchContext, searchQueryString, onFetchStart } = arg0);
    let guildIdFromSearchContext;
    let searchContextId;
    ({ pagination, searchMode, searchEverywhere } = arg0);
    let obj = guildIdFromSearchContext(11907);
    obj = {};
    let obj2 = guildIdFromSearchContext(11907);
    const merged = Object.assign(obj2.getSearchQueryFromTokens(obj.tokenizeQuery(searchQueryString)));
    const tokenizeQueryResult = obj.tokenizeQuery(searchQueryString);
    const merged1 = Object.assign(guildIdFromSearchContext(11907).searchModeToSearchQueryParams(searchMode));
    obj.offset = pagination.offset;
    const obj4 = guildIdFromSearchContext(11907);
    guildIdFromSearchContext = guildIdFromSearchContext(11907).getGuildIdFromSearchContext(searchContext);
    if (null != guildIdFromSearchContext) {
      let tmpResult = tmp(11907);
      tmpResult.setIncludeNSFW(obj, guildIdFromSearchContext);
    }
    if (searchEverywhere) {
      obj.search_everywhere = true;
    }
    tmpResult = tmp(11907);
    searchContextId = tmpResult.getSearchContextId(searchContext);
    const obj5 = guildIdFromSearchContext(11907);
    const tmp9 = searchContextId;
    obj = { id: searchContextId, searchType: searchContext.type, searchQuery: obj };
    const obj8 = searchContextId(11918);
    if (onFetchStart != null) {
      obj2 = { searchContext: null, searchQueryString: null, searchQuery: null };
      obj2[0] = searchContext;
      obj2[1] = searchQueryString;
      obj2[2] = obj;
      onFetchStart(obj2);
    }
    obj1 = searchContextId(11918).create(obj);
    let items = [searchContextId];
    tmp9(709).dispatch({ type: "SEARCH_MESSAGES_START", ids: items });
    const response = obj1.fetch((analyticsId) => {
      let obj = searchContextId(closure_1_2[2]);
      obj = { type: "SEARCH_MESSAGES_SUCCESS", guildId: guildIdFromSearchContext, data: null };
      obj = { id: searchContextId, analyticsId: analyticsId.body.analytics_id, totalResults: analyticsId.body.total_results, messages: analyticsId.body.messages, threads: null, members: null, doingHistoricalIndex: null, documentsIndexed: null, channels: null, cursor: null };
      let threads = analyticsId.body.threads;
      if (threads == null) {
        threads = [];
      }
      obj[4] = threads;
      let members = analyticsId.body.members;
      if (members == null) {
        members = [];
      }
      obj[5] = members.map((arg0) => callback(table[4])(arg0));
      obj[6] = analyticsId.body.doing_deep_historical_index;
      obj[7] = analyticsId.body.documents_indexed;
      let channels = analyticsId.body.channels;
      if (channels == null) {
        channels = [];
      }
      obj[8] = channels;
      const items = [obj];
      obj[2] = items;
      obj.dispatch(obj);
    }, () => {
      const items = [searchContextId];
      searchContextId(closure_1_2[2]).dispatch({ type: "SEARCH_MESSAGES_INDEXING", ids: items });
    }, (error) => {
      let obj = searchContextId(closure_1_2[2]);
      obj = { type: "SEARCH_MESSAGES_FAILURE", ids: items, error };
      items = [searchContextId];
      obj.dispatch(obj);
    });
  },
  clearSearchRecentMessages() {
    dispatcherDefault.dispatch({ type: "SEARCH_RECENT_MESSAGES_CLEAR" });
  },
  clearAllSearchMesssages() {
    dispatcherDefault.dispatch({ type: "SEARCH_MESSAGES_CLEAR_ALL" });
  },
  clearSearchMessages(id) {
    let obj = dispatcherDefault;
    obj = { type: "SEARCH_MESSAGES_CLEAR", id };
    obj.dispatch(obj);
  },
  initializeAutocomplete(channelDetailsSearchContext) {
    let obj = dispatcherDefault;
    obj = { type: "SEARCH_AUTOCOMPLETE_INITIALIZE", searchContext: channelDetailsSearchContext };
    obj.dispatch(obj);
  },
  updateAutocompleteQuery(arg0) {
    ({ queryString, searchContext, tokens, cursorScope } = arg0);
    if (queryString.trim().length > 0) {
      const FrecencyUserSettingsActionCreators = updateUserGuildSettings.FrecencyUserSettingsActionCreators;
      const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    }
    dispatcherDefault.dispatch({ type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE", searchContext, tokens, cursorScope });
  },
  markSearchTokensRefreshed() {
    dispatcherDefault.dispatch({ type: "SEARCH_TOKENS_REFRESHED" });
  }
};
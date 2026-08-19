// === Module 11518: ? ===

// Module 11518
import obj132 from "obj132" /* 2 */;
import applyDefault from "apply" /* 12 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import updateUserGuildSettings from "updateUserGuildSettings" /* 1374 */;
import createRequestPayloadDefault from "createRequestPayload" /* 11519 */;

let result = obj132.fileFinishedImporting("modules/search/SearchActionCreators.tsx");

export default {
  fetchTabMessages(searchContext) {
    searchContext = searchContext.searchContext;
    ({ searchTabs, searchQueryString, getId: importDefault, onFetchStart, onFetchSuccess: dependencyMap } = searchContext);
    let guildIdFromSearchContext;
    let mapped;
    ({ pagination, trackExactTotalHits, getLimit, searchMode } = searchContext);
    let obj = searchContext(11511);
    obj1 = searchContext(11511);
    const searchQueryFromTokens = obj1.getSearchQueryFromTokens(obj.tokenizeQuery(searchQueryString));
    if (Array.isArray(searchQueryFromTokens.pinned)) {
      const pinned = searchQueryFromTokens.pinned;
      searchQueryFromTokens.pinned = pinned.some((item, index) => true === item);
    }
    let tmpResult = tmp(11511);
    const result = tmpResult.searchModeToSearchQueryParams(searchMode);
    obj = {};
    const merged = Object.assign(searchQueryFromTokens);
    const merged1 = Object.assign(result);
    tmpResult = tmp(11511);
    guildIdFromSearchContext = tmpResult.getGuildIdFromSearchContext(searchContext);
    if (null != guildIdFromSearchContext) {
      tmp(11511).setIncludeNSFW(obj, guildIdFromSearchContext);
      const tmpResult1 = tmp(11511);
    }
    const tokenizeQueryResult = obj.tokenizeQuery(searchQueryString);
    obj = { id: null, searchContext: null, searchQuery: null, searchTabs: null, getLimit: null, pagination: null, trackExactTotalHits: null };
    const obj7 = createRequestPayloadDefault;
    obj[0] = searchContext(11511).getSearchContextId(searchContext);
    obj[1] = searchContext;
    obj[2] = obj;
    obj[3] = searchTabs;
    obj[4] = getLimit;
    obj[5] = pagination;
    obj[6] = trackExactTotalHits;
    obj1 = obj7.create(obj);
    if (onFetchStart != null) {
      const obj2 = { searchContext: null, searchQueryString: null, searchQuery: null };
      obj2[0] = searchContext;
      obj2[1] = searchQueryString;
      obj2[2] = obj;
      onFetchStart(obj2);
    }
    mapped = searchTabs.map((item, index) => callback(item));
    const tmpResult2 = searchContext(11511);
    dispatcherDefault.dispatch({ type: "SEARCH_MESSAGES_START", ids: mapped });
    const response = obj1.fetch((body) => {
      body = body.body;
      const entries = Object.entries(body.tabs);
      let obj = {
        type: "SEARCH_MESSAGES_SUCCESS",
        guildId: guildIdFromSearchContext,
        data: entries.map((item, index) => {
          [tmp, tmp2] = item;
          const cursor = tmp2.cursor;
          const obj = { id: closure_1_1(tmp), analyticsId: body.analytics_id, totalResults: tmp2.total_results, cursor: null, messages: null, channels: null, threads: null, members: null, doingHistoricalIndex: null, documentsIndexed: null };
          if (null == cursor) {
            let tmp6 = cursor;
          } else {
            applyDefault;
            tmp6 = null;
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
          obj[7] = members.map((item, index) => callback(table[4])(item));
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
      const obj = { type: "SEARCH_MESSAGES_INDEXING", ids: mapped };
      obj.dispatch(obj);
    }, (error) => {
      const obj = { type: "SEARCH_MESSAGES_FAILURE", ids: mapped, error };
      obj.dispatch(obj);
    });
    return true;
  },
  fetchMessages(arg0) {
    ({ searchContext, searchQueryString, onFetchStart } = arg0);
    let guildIdFromSearchContext;
    let searchContextId;
    ({ pagination, searchMode, searchEverywhere } = arg0);
    guildIdFromSearchContext(11511);
    let obj = {};
    let obj2 = guildIdFromSearchContext(11511);
    const merged = Object.assign(obj2.getSearchQueryFromTokens(obj.tokenizeQuery(searchQueryString)));
    const tokenizeQueryResult = obj.tokenizeQuery(searchQueryString);
    const merged1 = Object.assign(guildIdFromSearchContext(11511).searchModeToSearchQueryParams(searchMode));
    obj.offset = pagination.offset;
    const obj4 = guildIdFromSearchContext(11511);
    guildIdFromSearchContext = guildIdFromSearchContext(11511).getGuildIdFromSearchContext(searchContext);
    if (null != guildIdFromSearchContext) {
      let tmpResult = tmp(11511);
      tmpResult.setIncludeNSFW(obj, guildIdFromSearchContext);
    }
    if (searchEverywhere) {
      obj.search_everywhere = true;
    }
    tmpResult = tmp(11511);
    searchContextId = tmpResult.getSearchContextId(searchContext);
    const obj5 = guildIdFromSearchContext(11511);
    const tmp9 = searchContextId;
    obj = { id: searchContextId, searchType: searchContext.type, searchQuery: obj };
    const obj8 = searchContextId(11522);
    if (onFetchStart != null) {
      obj2 = { searchContext: null, searchQueryString: null, searchQuery: null };
      obj2[0] = searchContext;
      obj2[1] = searchQueryString;
      obj2[2] = obj;
      onFetchStart(obj2);
    }
    obj1 = searchContextId(11522).create(obj);
    let items = [searchContextId];
    tmp9(709).dispatch({ type: "SEARCH_MESSAGES_START", ids: items });
    const response = obj1.fetch((analyticsId) => {
      searchContextId(dependencyMap[2]);
      const obj = { id: searchContextId, analyticsId: analyticsId.body.analytics_id, totalResults: analyticsId.body.total_results, messages: analyticsId.body.messages, threads: null, members: null, doingHistoricalIndex: null, documentsIndexed: null, channels: null, cursor: null };
      let threads = analyticsId.body.threads;
      if (threads == null) {
        threads = [];
      }
      obj[4] = threads;
      let members = analyticsId.body.members;
      if (members == null) {
        members = [];
      }
      obj[5] = members.map((item, index) => callback(table[4])(item));
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
      searchContextId(dependencyMap[2]).dispatch({ type: "SEARCH_MESSAGES_INDEXING", ids: items });
    }, (error) => {
      searchContextId(dependencyMap[2]);
      const obj = { type: "SEARCH_MESSAGES_FAILURE", ids: items, error };
      items = [searchContextId];
      obj.dispatch(obj);
    });
    const tmp9Result = tmp9(709);
  },
  clearSearchRecentMessages() {
    dispatcherDefault.dispatch({ type: "SEARCH_RECENT_MESSAGES_CLEAR" });
  },
  clearAllSearchMesssages() {
    dispatcherDefault.dispatch({ type: "SEARCH_MESSAGES_CLEAR_ALL" });
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
      const FrecencyUserSettingsActionCreators = updateUserGuildSettings.FrecencyUserSettingsActionCreators;
      const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    }
    dispatcherDefault.dispatch({ type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE", searchContext, tokens, cursorScope });
  },
  markSearchTokensRefreshed() {
    dispatcherDefault.dispatch({ type: "SEARCH_TOKENS_REFRESHED" });
  }
};
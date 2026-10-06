// === Module 12004: SmartSearchAnalyticsManager ===

// Module 12004 (SmartSearchAnalyticsManager)
import shallowEqualDefault from "shallowEqual" /* 568 */;
import Constants from "Constants" /* 1085 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5076 */;
import SearchUtils from "SearchUtils" /* 11987 */;
import SuggestedSearchStore from "SuggestedSearchStore" /* 11981 */;
import size from "module_2" /* 2 */;

let set;

function getCitationCompositionProperties(citations) {
  set = new Set();
  const items = [];
  const items1 = [];
  const items2 = [];
  const iter = citations[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let author = nextResult.message.author;
    let id;
    if (author != null) {
      id = author.id;
    }
    if (null != id) {
      let addResult = set.add(tmp4);
    }
    let arr = items.push(tmp2.sourceType);
    let arr2 = items1.push(tmp2.channelId);
    let arr3 = items2.push(tmp2.messageId);
    continue;
  }
  return { num_citation_authors: set.size, citation_source_types: items, citation_channel_ids: items1, citation_message_ids: items2 };
}
const AnalyticEvents = Constants.AnalyticEvents;
const re5 = /\s+/;
class SmartSearchAnalyticsManager {
  constructor() {
    const merged = Object.assign({ rowVisibilityState: null, dwellStartTime: null, lastShownAnswerKey: null, lastShownSuggestionKey: null, parentSuggestedSearch: null });
    merged[0] = { isRowViewable: false, isTabActive: false, isAppActive: true, currentAnswer: null };
    return merged;
  }
  getParentSuggestedSearch() {
    return this.parentSuggestedSearch;
  }
  setIsRowViewable(isViewable, getQueryId) {
    const obj = { isRowViewable: isViewable };
    this.updateVisibility(obj, getQueryId);
  }
  setIsTabActive(isTabActive, getQueryId) {
    const obj = { isTabActive };
    this.updateVisibility(obj, getQueryId);
  }
  setIsAppActive(stateFromStores, getQueryId) {
    const obj = { isAppActive: stateFromStores };
    this.updateVisibility(obj, getQueryId);
  }
  setAnswer(currentAnswer, getQueryId) {
    const obj = { currentAnswer };
    this.updateVisibility(obj, getQueryId);
  }
  resetSession(getQueryId) {
    this.updateVisibility({ currentAnswer: null }, getQueryId);
    this.lastShownAnswerKey = null;
    this.lastShownSuggestionKey = null;
    this.parentSuggestedSearch = null;
  }
  updateVisibility(arg0, getQueryId) {
    const self = this;
    const rowVisibilityState = this.rowVisibilityState;
    const obj = {};
    const merged = Object.assign(rowVisibilityState);
    const merged1 = Object.assign(arg0);
    if (!shallowEqualDefault(obj, rowVisibilityState)) {
      self.rowVisibilityState = obj;
      let tmp3 = obj.isRowViewable && obj.isTabActive && obj.isAppActive && null != obj.currentAnswer;
      if (null != self.dwellStartTime) {
        if (!tmp3) {
          const _performance = performance;
          self.dwellStartTime = null;
          if (null != rowVisibilityState.currentAnswer) {
            const obj2 = { smartSearchQuery: rowVisibilityState.currentAnswer.smartSearchQuery, dwellDurationMs: tmp10 };
            const result = self.trackSmartSearchAnswerDwelled(obj2, getQueryId);
          }
        } else {
          const currentAnswer = obj.currentAnswer;
          let requestKey;
          if (currentAnswer != null) {
            requestKey = currentAnswer.smartSearchQuery.requestKey;
          }
          const currentAnswer2 = rowVisibilityState.currentAnswer;
          let requestKey1;
          if (currentAnswer2 != null) {
            requestKey1 = currentAnswer2.smartSearchQuery.requestKey;
          }
        }
      }
      if (tmp3) {
        tmp3 = null != obj.currentAnswer;
      }
      if (tmp3) {
        tmp3 = null == self.dwellStartTime;
      }
      if (tmp3) {
        const _performance2 = performance;
        self.dwellStartTime = performance.now();
        const result1 = self.trackSmartSearchAnswerShownDeduped(obj.currentAnswer, getQueryId);
      }
    }
  }
  getParentSuggestedSearchId(queryText) {
    const self = this;
    let tmp = null;
    if (null != this.parentSuggestedSearch) {
      let suggestionId;
      if (queryText === self.parentSuggestedSearch.suggestedSearchText) {
        suggestionId = self.parentSuggestedSearch.suggestionId;
      } else {
        self.parentSuggestedSearch = null;
        suggestionId = null;
      }
      tmp = suggestionId;
    }
    return tmp;
  }
  getContextualProperties(smartSearchQuery, getQueryId) {
    let obj2;
    let parentSuggestedSearchId;
    const queryId = getQueryId.getQueryId(smartSearchQuery.searchContext);
    const obj = { search_session_id: getQueryId.getSessionId(smartSearchQuery.searchContext), search_query_id: queryId, search_location: getQueryId.getLocation(smartSearchQuery.searchContext), guild_id: smartSearchQuery.guildId, channel_id: obj2.getChannelIdFromSearchContext(smartSearchQuery.searchContext), filter_channel_ids: smartSearchQuery.channelIds, num_filter_channels: smartSearchQuery.channelIds.length, parent_suggested_search_id: parentSuggestedSearchId };
    parentSuggestedSearchId = this.getParentSuggestedSearchId(smartSearchQuery.queryText);
    obj2 = SearchUtils;
    return obj;
  }
  trackSmartSearchAnswerReturned(arg0, c2) {
    let answerText;
    let citations;
    let durationMs;
    let parentSuggestedSearch;
    let requestId;
    let responseStatus;
    let smartSearchQuery;
    let smartSearchStatus;
    let str2;
    let suggestionId;
    ({ smartSearchQuery, answerText, citations, parentSuggestedSearch } = arg0);
    const str = smartSearchQuery.queryText;
    ({ requestId, durationMs, responseStatus, smartSearchStatus } = arg0);
    const trimmed = str.trim();
    const length = trimmed.length;
    const parts = trimmed.split(re5);
    const length2 = parts.filter(Boolean).length;
    const trimmed1 = answerText.trim();
    const length3 = trimmed1.length;
    const parts1 = trimmed1.split(re5);
    const length4 = parts1.filter(Boolean).length;
    const obj = { parent_suggested_search_id: suggestionId, request_id: requestId, duration_ms: Math.round(durationMs), response_status: responseStatus, smart_search_status: smartSearchStatus, search_query_length: str2.trim().length, search_query_content_length: length, num_query_words: length2, answer_length: length3, num_answer_words: length4, num_citations_returned: citations.length };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const SMART_SEARCH_ANSWER_RETURNED = AnalyticEvents.SMART_SEARCH_ANSWER_RETURNED;
    AppAnalyticsUtilsDefault;
    const merged = Object.assign(this.getContextualProperties(smartSearchQuery, c2));
    suggestionId = undefined;
    if (parentSuggestedSearch != null) {
      suggestionId = parentSuggestedSearch.suggestionId;
    }
    if (suggestionId == null) {
      suggestionId = null;
    }
    const merged1 = Object.assign(getCitationCompositionProperties(citations));
    str2 = smartSearchQuery.searchQueryString;
    trackWithMetadata(SMART_SEARCH_ANSWER_RETURNED, obj);
  }
  trackSuggestedSearchesReturned(arg0, getQueryId) {
    let durationMs;
    let parentSuggestedSearch;
    let requestId;
    let responseStatusCode;
    let smartSearchQuery;
    let suggestedSearches;
    let suggestionId;
    ({ suggestedSearches, parentSuggestedSearch } = arg0);
    ({ smartSearchQuery, requestId, durationMs, responseStatusCode } = arg0);
    const obj = { parent_suggested_search_id: suggestionId, request_id: requestId, duration_ms: Math.round(durationMs), response_status_code: responseStatusCode, suggested_search_ids: suggestedSearches.map((suggestionId) => suggestionId.suggestionId) };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const SUGGESTED_SEARCHES_RETURNED = AnalyticEvents.SUGGESTED_SEARCHES_RETURNED;
    AppAnalyticsUtilsDefault;
    const merged = Object.assign(this.getContextualProperties(smartSearchQuery, getQueryId));
    suggestionId = undefined;
    if (parentSuggestedSearch != null) {
      suggestionId = parentSuggestedSearch.suggestionId;
    }
    if (suggestionId == null) {
      suggestionId = null;
    }
    trackWithMetadata(SUGGESTED_SEARCHES_RETURNED, obj);
  }
  trackSmartSearchAnswerToggled(arg0, getQueryId) {
    let isCollapsed;
    let smartSearchQuery;
    ({ smartSearchQuery, isCollapsed } = arg0);
    const obj = { is_collapsed: isCollapsed };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const SMART_SEARCH_ANSWER_TOGGLED = AnalyticEvents.SMART_SEARCH_ANSWER_TOGGLED;
    AppAnalyticsUtilsDefault;
    const merged = Object.assign(this.getContextualProperties(smartSearchQuery, getQueryId));
    trackWithMetadata(SMART_SEARCH_ANSWER_TOGGLED, obj);
  }
  trackSmartSearchCitationOpened(citation, getQueryId) {
    let index;
    let numCitationsPresented;
    let smartSearchQuery;
    citation = citation.citation;
    ({ smartSearchQuery, index, numCitationsPresented } = citation);
    const obj = { citation_index: index, num_citations_presented: numCitationsPresented };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const SMART_SEARCH_CITATION_OPENED = AnalyticEvents.SMART_SEARCH_CITATION_OPENED;
    AppAnalyticsUtilsDefault;
    const merged = Object.assign(this.getContextualProperties(smartSearchQuery, getQueryId));
    ({ sourceId: obj.citation_source_id, sourceType: obj.citation_source_type, channelId: obj.citation_channel_id, messageId: obj.citation_message_id } = citation);
    trackWithMetadata(SMART_SEARCH_CITATION_OPENED, obj);
  }
  trackSuggestedSearchStarted(arg0, getQueryId) {
    let index;
    let numSuggestedSearches;
    let requestId;
    let smartSearchQuery;
    let suggestedSearch;
    let suggestionSource;
    let tmp5;
    ({ smartSearchQuery, suggestedSearch } = arg0);
    ({ suggestionSource, index, numSuggestedSearches } = arg0);
    const stateForScope = SuggestedSearchStore.getStateForScope(smartSearchQuery);
    let num;
    if (stateForScope != null) {
      const suggestedSearches = stateForScope.suggestedSearches;
      num = suggestedSearches.findIndex((suggestionId) => suggestionId.suggestionId === suggestedSearch.suggestionId);
    }
    if (num == null) {
      num = -1;
    }
    const obj = { suggested_search_id: suggestedSearch.suggestionId, shown_index: index, suggestion_source: suggestionSource, num_suggested_searches: numSuggestedSearches, fetch_request_id: requestId, global_index: tmp5 };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const SUGGESTED_SEARCH_STARTED = AnalyticEvents.SUGGESTED_SEARCH_STARTED;
    AppAnalyticsUtilsDefault;
    const merged = Object.assign(this.getContextualProperties(smartSearchQuery, getQueryId));
    requestId = undefined;
    if (stateForScope != null) {
      requestId = stateForScope.requestId;
    }
    tmp5 = null;
    if (num >= 0) {
      tmp5 = num;
    }
    trackWithMetadata(SUGGESTED_SEARCH_STARTED, obj);
    this.parentSuggestedSearch = suggestedSearch;
  }
  trackSuggestedSearchesShownDeduped(arg0, getQueryId) {
    let smartSearchQuery;
    let suggestedSearches;
    let suggestionSource;
    const self = this;
    ({ smartSearchQuery, suggestedSearches, suggestionSource } = arg0);
    const combined = "" + suggestionSource + ":" + smartSearchQuery.requestKey;
    if (this.lastShownSuggestionKey !== combined) {
      self.lastShownSuggestionKey = combined;
      const obj = { suggested_search_ids: suggestedSearches.map((suggestionId) => suggestionId.suggestionId), suggestion_source: suggestionSource };
      const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
      const SUGGESTED_SEARCHES_SHOWN = AnalyticEvents.SUGGESTED_SEARCHES_SHOWN;
      AppAnalyticsUtilsDefault;
      const merged = Object.assign(self.getContextualProperties(smartSearchQuery, getQueryId));
      trackWithMetadata(SUGGESTED_SEARCHES_SHOWN, obj);
    }
  }
  trackSmartSearchAnswerShownDeduped(currentAnswer, getQueryId) {
    let answerText;
    let presentedCitations;
    let smartSearchQuery;
    let str;
    const self = this;
    ({ smartSearchQuery, answerText, presentedCitations } = currentAnswer);
    if (this.lastShownAnswerKey !== smartSearchQuery.requestKey) {
      self.lastShownAnswerKey = smartSearchQuery.requestKey;
      const trimmed = answerText.trim();
      const length = trimmed.length;
      const parts = trimmed.split(re5);
      const _Boolean = Boolean;
      const length2 = parts.filter(Boolean).length;
      const obj = { num_citations_presented: presentedCitations.length, answer_length: length, num_answer_words: length2, search_query_length: str.trim().length, has_keyword_results: tmp };
      const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
      const SMART_SEARCH_ANSWER_SHOWN = AnalyticEvents.SMART_SEARCH_ANSWER_SHOWN;
      AppAnalyticsUtilsDefault;
      const merged = Object.assign(self.getContextualProperties(smartSearchQuery, getQueryId));
      const merged1 = Object.assign(getCitationCompositionProperties(presentedCitations));
      str = smartSearchQuery.searchQueryString;
      trackWithMetadata(SMART_SEARCH_ANSWER_SHOWN, obj);
    }
  }
  trackSmartSearchAnswerDwelled(arg0, getQueryId) {
    let dwellDurationMs;
    let smartSearchQuery;
    ({ smartSearchQuery, dwellDurationMs } = arg0);
    const obj = { dwell_duration_ms: Math.round(dwellDurationMs) };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const SMART_SEARCH_ANSWER_DWELLED = AnalyticEvents.SMART_SEARCH_ANSWER_DWELLED;
    AppAnalyticsUtilsDefault;
    const merged = Object.assign(this.getContextualProperties(smartSearchQuery, getQueryId));
    trackWithMetadata(SMART_SEARCH_ANSWER_DWELLED, obj);
  }
}
const prototype = SmartSearchAnalyticsManager.prototype;
let merged = Object.assign({ rowVisibilityState: null, dwellStartTime: null, lastShownAnswerKey: null, lastShownSuggestionKey: null, parentSuggestedSearch: null });
merged[0] = { isRowViewable: false, isTabActive: false, isAppActive: true, currentAnswer: null };
let result = size.fileFinishedImporting("modules/intelligence_layer/search/SmartSearchAnalyticsManager.tsx");

export default merged;
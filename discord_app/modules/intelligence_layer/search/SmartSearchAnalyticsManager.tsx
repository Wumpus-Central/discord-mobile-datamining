// === Module 13182: SmartSearchAnalyticsManager ===

// Module 13182 (SmartSearchAnalyticsManager)
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 568 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5697 */;
import SearchUtils from "SearchUtils" /* 13165 */;
import SuggestedSearchStore from "SuggestedSearchStore" /* 13159 */;

require = fn;
function getCitationCompositionProperties(citations) {
  const set = new Set();
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
const AnalyticEvents = fn(1087).AnalyticEvents;
const re5 = /\s+/;
class SmartSearchAnalyticsManager {
  constructor() {
    merged = Object.assign({ rowVisibilityState: null, dwellStartTime: null, lastShownAnswerKey: null, lastShownSuggestionKey: null, parentSuggestedSearch: null });
    merged[0] = { isRowViewable: false, isTabActive: false, isAppActive: true, currentAnswer: null };
    return merged;
  }
}
const prototype = SmartSearchAnalyticsManager.prototype;
prototype["setIsRowViewable"] = function setIsRowViewable(isViewable, getSessionId) {
  this.updateVisibility({ isRowViewable: isViewable }, getSessionId);
};
prototype["setIsTabActive"] = function setIsTabActive(isTabActive, getSessionId) {
  this.updateVisibility({ isTabActive }, getSessionId);
};
prototype["setIsAppActive"] = function setIsAppActive(stateFromStores, getSessionId) {
  this.updateVisibility({ isAppActive: stateFromStores }, getSessionId);
};
prototype["setAnswer"] = function setAnswer(currentAnswer, getSessionId) {
  this.updateVisibility({ currentAnswer }, getSessionId);
};
prototype["resetSession"] = function resetSession(getSessionId) {
  this.updateVisibility({ currentAnswer: null }, getSessionId);
  this.lastShownAnswerKey = null;
  this.lastShownSuggestionKey = null;
  this.parentSuggestedSearch = null;
};
prototype["updateVisibility"] = function updateVisibility(arg0, getSessionId) {
  const self = this;
  const rowVisibilityState = this.rowVisibilityState;
  const obj = {};
  const merged = Object.assign(rowVisibilityState);
  const merged1 = Object.assign(arg0);
  if (!discord_common_shallowEqualDefault(obj, rowVisibilityState)) {
    self.rowVisibilityState = obj;
    let tmp3 = obj.isRowViewable && obj.isTabActive && obj.isAppActive;
    if (tmp3) {
      tmp3 = null != obj.currentAnswer;
    }
    if (null != self.dwellStartTime) {
      if (!tmp3) {
        const _performance = performance;
        self.dwellStartTime = null;
        if (null != rowVisibilityState.currentAnswer) {
          const obj2 = { smartSearchQuery: rowVisibilityState.currentAnswer.smartSearchQuery, dwellDurationMs: tmp10 };
          const result = self.trackSmartSearchAnswerDwelled(obj2, getSessionId);
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
      const result1 = self.trackSmartSearchAnswerShownDeduped(obj.currentAnswer, getSessionId);
    }
  }
};
prototype["getContextualProperties"] = function getContextualProperties(smartSearchQuery, getSessionId) {
  const obj = { search_session_id: getSessionId.getSessionId(smartSearchQuery.searchContext), search_query_id: getSessionId.getQueryId(smartSearchQuery.searchContext), search_location: getSessionId.getLocation(smartSearchQuery.searchContext), guild_id: smartSearchQuery.guildId, channel_id: SearchUtils.getChannelIdFromSearchContext(smartSearchQuery.searchContext), filter_channel_ids: smartSearchQuery.channelIds, num_filter_channels: smartSearchQuery.channelIds.length, parent_suggested_search_id: null };
  const parentSuggestedSearch = this.parentSuggestedSearch;
  let suggestedSearchText;
  if (parentSuggestedSearch != null) {
    suggestedSearchText = parentSuggestedSearch.suggestedSearchText;
  }
  let tmp2 = null;
  if (smartSearchQuery.queryText === suggestedSearchText) {
    const parentSuggestedSearch2 = this.parentSuggestedSearch;
    let suggestionId;
    if (parentSuggestedSearch2 != null) {
      suggestionId = parentSuggestedSearch2.suggestionId;
    }
    tmp2 = suggestionId;
  }
  obj.parent_suggested_search_id = tmp2;
  return obj;
};
prototype["trackSmartSearchAnswerReturned"] = function trackSmartSearchAnswerReturned(arg0) {
  ({ smartSearchQuery, answerText, citations } = arg0);
  ({ requestId, durationMs, responseStatus, smartSearchStatus, contextualProperties } = arg0);
  const str2 = smartSearchQuery.queryText.trim();
  const parts = str2.split(re5);
  const str3 = answerText.trim();
  const parts1 = str3.split(re5);
  const obj2 = {};
  const merged = Object.assign(contextualProperties);
  const merged1 = Object.assign(getCitationCompositionProperties(citations));
  obj2.request_id = requestId;
  obj2.duration_ms = Math.round(durationMs);
  obj2.response_status = responseStatus;
  obj2.smart_search_status = smartSearchStatus;
  obj2.search_query_length = smartSearchQuery.searchQueryString.trim().length;
  obj2.search_query_content_length = str2.length;
  obj2.num_query_words = parts.filter(Boolean).length;
  obj2.answer_length = str3.length;
  obj2.num_answer_words = parts1.filter(Boolean).length;
  obj2.num_citations_returned = citations.length;
  AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.SMART_SEARCH_ANSWER_RETURNED, obj2);
};
prototype["trackSuggestedSearchesReturned"] = function trackSuggestedSearchesReturned(suggestedSearches) {
  suggestedSearches = suggestedSearches.suggestedSearches;
  ({ requestId, durationMs, responseStatusCode, contextualProperties } = suggestedSearches);
  const obj2 = {};
  const merged = Object.assign(contextualProperties);
  obj2.request_id = requestId;
  obj2.duration_ms = Math.round(durationMs);
  obj2.response_status_code = responseStatusCode;
  obj2.suggested_search_ids = suggestedSearches.map((suggestionId) => suggestionId.suggestionId);
  AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.SUGGESTED_SEARCHES_RETURNED, obj2);
};
prototype["trackSmartSearchAnswerToggled"] = function trackSmartSearchAnswerToggled(arg0, getSessionId) {
  ({ smartSearchQuery, isCollapsed } = arg0);
  const obj2 = {};
  const merged = Object.assign(this.getContextualProperties(smartSearchQuery, getSessionId));
  obj2.is_collapsed = isCollapsed;
  AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.SMART_SEARCH_ANSWER_TOGGLED, obj2);
};
prototype["trackSmartSearchCitationOpened"] = function trackSmartSearchCitationOpened(citation, getSessionId) {
  ({ smartSearchQuery, index, numCitationsPresented } = citation);
  const obj3 = {};
  const merged = Object.assign(this.getContextualProperties(smartSearchQuery, getSessionId));
  ({ sourceId: obj2.citation_source_id, sourceType: obj2.citation_source_type, channelId: obj2.citation_channel_id, messageId: obj2.citation_message_id } = citation.citation);
  obj3.citation_index = index;
  obj3.num_citations_presented = numCitationsPresented;
  AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.SMART_SEARCH_CITATION_OPENED, obj3);
};
prototype["trackSuggestedSearchStarted"] = function trackSuggestedSearchStarted(arg0, getSessionId) {
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
  const obj2 = {};
  const merged = Object.assign(this.getContextualProperties(smartSearchQuery, getSessionId));
  obj2.suggested_search_id = suggestedSearch.suggestionId;
  obj2.shown_index = index;
  obj2.suggestion_source = suggestionSource;
  obj2.num_suggested_searches = numSuggestedSearches;
  let requestId;
  if (stateForScope != null) {
    requestId = stateForScope.requestId;
  }
  obj2.fetch_request_id = requestId;
  let tmp4 = null;
  if (num >= 0) {
    tmp4 = num;
  }
  obj2.global_index = tmp4;
  AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.SUGGESTED_SEARCH_STARTED, obj2);
  this.parentSuggestedSearch = suggestedSearch;
};
prototype["trackSuggestedSearchesShownDeduped"] = function trackSuggestedSearchesShownDeduped(arg0, getSessionId) {
  const self = this;
  ({ smartSearchQuery, suggestedSearches, suggestionSource } = arg0);
  const combined = "" + suggestionSource + ":" + smartSearchQuery.requestKey;
  if (this.lastShownSuggestionKey !== combined) {
    self.lastShownSuggestionKey = combined;
    const obj2 = {};
    const merged = Object.assign(self.getContextualProperties(smartSearchQuery, getSessionId));
    obj2.suggested_search_ids = suggestedSearches.map((suggestionId) => suggestionId.suggestionId);
    obj2.suggestion_source = suggestionSource;
    AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.SUGGESTED_SEARCHES_SHOWN, obj2);
  }
};
prototype["trackSmartSearchAnswerShownDeduped"] = function trackSmartSearchAnswerShownDeduped(currentAnswer, getSessionId) {
  const self = this;
  ({ smartSearchQuery, answerText, presentedCitations } = currentAnswer);
  if (this.lastShownAnswerKey !== smartSearchQuery.requestKey) {
    self.lastShownAnswerKey = smartSearchQuery.requestKey;
    const str = answerText.trim();
    const parts = str.split(re5);
    const _Boolean = Boolean;
    const obj2 = {};
    const merged = Object.assign(self.getContextualProperties(smartSearchQuery, getSessionId));
    const merged1 = Object.assign(getCitationCompositionProperties(presentedCitations));
    obj2.num_citations_presented = presentedCitations.length;
    obj2.answer_length = str.length;
    obj2.num_answer_words = parts.filter(Boolean).length;
    obj2.search_query_length = smartSearchQuery.searchQueryString.trim().length;
    obj2.has_keyword_results = tmp;
    AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.SMART_SEARCH_ANSWER_SHOWN, obj2);
  }
};
prototype["trackSmartSearchAnswerDwelled"] = function trackSmartSearchAnswerDwelled(arg0, getSessionId) {
  ({ smartSearchQuery, dwellDurationMs } = arg0);
  const obj2 = {};
  const merged = Object.assign(this.getContextualProperties(smartSearchQuery, getSessionId));
  obj2.dwell_duration_ms = Math.round(dwellDurationMs);
  AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.SMART_SEARCH_ANSWER_DWELLED, obj2);
};
prototype["trackSmartSearchFeedbackGiven"] = function trackSmartSearchFeedbackGiven(arg0, SearchSessionAnalyticsManager) {
  ({ smartSearchQuery, hasPositiveFeedback } = arg0);
  const obj2 = {};
  const merged = Object.assign(this.getContextualProperties(smartSearchQuery, SearchSessionAnalyticsManager));
  obj2.is_positive_feedback = hasPositiveFeedback;
  AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.SMART_SEARCH_FEEDBACK_GIVEN, obj2);
};
let merged = Object.assign({ rowVisibilityState: null, dwellStartTime: null, lastShownAnswerKey: null, lastShownSuggestionKey: null, parentSuggestedSearch: null });
merged[0] = { isRowViewable: false, isTabActive: false, isAppActive: true, currentAnswer: null };
const size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/SmartSearchAnalyticsManager.tsx");

export default merged;
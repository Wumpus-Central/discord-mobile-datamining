// === Module 13261: SmartSearchActionCreators ===

// Module 13261 (SmartSearchActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import SmartSearchResultsStoreDefault from "SmartSearchResultsStore" /* 13226 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13246 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import RelationshipStore from "RelationshipStore" /* 4913 */;
import SuggestedSearchStore from "SuggestedSearchStore" /* 13223 */;

const require = fn;
let closure_8 = async function _fetchAnswer(arg0) {
  ({ searchContext: closure_129_0, searchQueryString: closure_129_1, SearchSessionAnalyticsManager: closure_129_2 } = closure_0);
  await "Reflect";
  if (1 === tmp7) {
    if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c6 = 3;
      return { value, done: true };
    } else {
      const smartSearchQuery = closure_130_0(closure_130_2[5]).getSmartSearchQuery(closure_129_0, closure_129_1);
      if (null != smartSearchQuery) {
        if (obj21.isNlpSearchEnabled(smartSearchQuery.guildId, "fetch_answer")) {
          const queryText = smartSearchQuery.queryText;
          const guildId = smartSearchQuery.guildId;
          const channelIds = smartSearchQuery.channelIds;
          const requestKey = smartSearchQuery.requestKey;
          if (0 !== queryText.length) {
            if (!closure_130_6.hasSuggestions(smartSearchQuery)) {
              const initialSuggestedSearches = closure_130_0(closure_130_2[7]).fetchInitialSuggestedSearches(smartSearchQuery, closure_129_2);
              closure_130_0(closure_130_2[7]);
            }
            if (!closure_130_5.hasAnswer(guildId, requestKey)) {
              const _performance2 = performance;
              closure_129_8 = performance.now();
              const contextualProperties = closure_130_1(closure_130_2[8]).getContextualProperties(smartSearchQuery, closure_129_2);
              closure_130_1(closure_130_2[8]);
              closure_130_1(closure_130_2[9]).dispatch({ type: "SMART_SEARCH_FETCH_START", smartSearchQuery });
              c4 = 1;
              const HTTP = closure_130_0(closure_130_2[10]).HTTP;
              const request = { url: closure_130_7.SMART_SEARCH(guildId), body: null, oldFormErrors: true, rejectWithError: true };
              request.body = { query_text: queryText, channel_ids: channelIds };
              c5 = 3;
              c6 = 1;
              return { value: HTTP.post(request), done: false };
            }
          }
        }
        obj21 = closure_130_0(closure_130_2[6]);
      }
      c6 = 3;
      closure_130_0(closure_130_2[5]);
    }
  } else if (2 === tmp7) {
    c4 = 0;
    let status;
    if (tmp70 != null) {
      status = tmp70.status;
    }
    closure_129_13 = status;
    if (404 === closure_129_13) {
      let ERROR = closure_130_0(closure_130_2[11]).SmartSearchStatus.EMPTY;
    } else {
      ERROR = closure_130_0(closure_130_2[11]).SmartSearchStatus.ERROR;
    }
    closure_129_14 = ERROR;
    closure_130_1(closure_130_2[9]).dispatch({ type: "SMART_SEARCH_FETCH_FAILURE", smartSearchQuery, status: closure_129_14 });
    closure_130_1(closure_130_2[9]);
    const obj14 = { smartSearchQuery, requestId: null, durationMs: null, responseStatus: null, smartSearchStatus: null, answerText: "", citations: null, contextualProperties: null };
    const _performance = performance;
    obj14.durationMs = performance.now() - closure_129_8;
    let str = "error";
    if (404 === closure_129_13) {
      str = "no_results";
    }
    obj14.responseStatus = str;
    obj14.smartSearchStatus = closure_129_14;
    obj14.citations = [];
    obj14.contextualProperties = contextualProperties;
    const result = closure_130_1(closure_130_2[8]).trackSmartSearchAnswerReturned(obj14);
    closure_130_1(closure_130_2[8]);
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_129_10 = value;
    closure_129_11 = (function hydrateAndFilterCitations(message_citations) {
      const mapped = message_citations.map((sourceId) => {
        const obj = { sourceId: sourceId.source_id, sourceType: sourceId.source_type, guildId: sourceId.guild_id, channelId: sourceId.channel_id, messageId: sourceId.message_id, message: closure_1_0(dependencyMap[12]).createMessageRecord(sourceId.message) };
        return obj;
      });
      return mapped.filter((message) => !blockedOrIgnoredForMessage.isBlockedOrIgnoredForMessage(message.message));
    })(closure_129_10.body.message_citations);
    closure_129_12 = (function resolveSearchStatus(search_status, length) {
      if ("not_qualified" === search_status) {
        return closure_1_0(13227).SmartSearchStatus.NOT_QUALIFIED;
      } else if ("no_results" === search_status) {
        return closure_1_0(13227).SmartSearchStatus.EMPTY;
      } else if ("success" === search_status) {
        if (length > 0) {
          let EMPTY = closure_1_0(13227).SmartSearchStatus.LOADED;
        } else {
          EMPTY = closure_1_0(13227).SmartSearchStatus.EMPTY;
        }
        return EMPTY;
      } else {
        return closure_1_0(13227).SmartSearchStatus.ERROR;
      }
    })(closure_129_10.body.search_status, closure_129_11.length);
    const obj15 = { type: "SMART_SEARCH_FETCH_SUCCESS", smartSearchQuery, smartSearchStatus: closure_129_12, answerText: closure_129_10.body.answer_text, citations: closure_129_11, messages: null };
    const message_citations = closure_129_10.body.message_citations;
    obj15.messages = message_citations.map((message) => message.message);
    closure_130_1(closure_130_2[9]).dispatch(obj15);
    closure_130_1(closure_130_2[9]);
    const obj17 = { smartSearchQuery, requestId: closure_129_10.body.request_id, durationMs: null, responseStatus: null, smartSearchStatus: null, answerText: null, citations: null, contextualProperties: null };
    const _performance3 = performance;
    obj17.durationMs = performance.now() - closure_129_8;
    obj17.responseStatus = closure_129_10.body.search_status;
    obj17.smartSearchStatus = closure_129_12;
    obj17.answerText = closure_129_10.body.answer_text;
    obj17.citations = closure_129_11;
    obj17.contextualProperties = contextualProperties;
    const result1 = closure_130_1(closure_130_2[8]).trackSmartSearchAnswerReturned(obj17);
    c4 = 0;
    closure_130_1(closure_130_2[8]);
  }
  return value;
};
SmartSearchResultsStoreDefault;
const Endpoints = fn(1087).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/SmartSearchActionCreators.tsx");

export const fetchAnswer = function fetchAnswer() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setResultFeedback = function setResultFeedback(SearchSessionAnalyticsManager) {
  ({ smartSearchQuery, hasPositiveFeedback } = SearchSessionAnalyticsManager);
  DispatcherDefault.dispatch({ type: "SMART_SEARCH_SET_RESULT_FEEDBACK", smartSearchQuery, hasPositiveFeedback });
  const result = SmartSearchAnalyticsManagerDefault.trackSmartSearchFeedbackGiven({ smartSearchQuery, hasPositiveFeedback }, SearchSessionAnalyticsManager.SearchSessionAnalyticsManager);
};
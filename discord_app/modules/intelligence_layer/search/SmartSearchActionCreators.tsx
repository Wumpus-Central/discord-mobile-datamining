// === Module 12092: SmartSearchActionCreators ===

// Module 12092 (SmartSearchActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import SmartSearchResultsStoreDefault from "SmartSearchResultsStore" /* 12057 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 12077 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;
import UserStore from "UserStore" /* 1389 */;
import SuggestedSearchStore from "SuggestedSearchStore" /* 12054 */;

const require = fn;
let closure_10 = async function _fetchAnswer(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          dependencyMap = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          ({ searchContext: closure_129_0, searchQueryString: closure_129_1, SearchSessionAnalyticsManager: closure_129_2 } = closure_0);
          let smartSearchQuery;
          let queryText;
          let guildId;
          let channelIds;
          let requestKey;
          closure_129_8 = undefined;
          closure_129_9 = undefined;
          let parentSuggestedSearch;
          closure_129_11 = undefined;
          closure_129_12 = undefined;
          closure_129_13 = undefined;
          closure_129_14 = undefined;
          closure_129_15 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "Reflect", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            smartSearchQuery = closure_130_0(closure_130_2[6]).getSmartSearchQuery(closure_129_0, closure_129_1);
            if (null != smartSearchQuery) {
              if (obj22.isNlpSearchEnabled(smartSearchQuery.guildId, "fetch_answer")) {
                queryText = smartSearchQuery.queryText;
                guildId = smartSearchQuery.guildId;
                channelIds = smartSearchQuery.channelIds;
                requestKey = smartSearchQuery.requestKey;
                if (0 !== queryText.length) {
                  if (!closure_130_7.hasSuggestions(smartSearchQuery)) {
                    const initialSuggestedSearches = closure_130_0(closure_130_2[8]).fetchInitialSuggestedSearches(smartSearchQuery, closure_129_2);
                    const obj6 = closure_130_0(closure_130_2[8]);
                  }
                  if (!closure_130_6.hasAnswer(guildId, requestKey)) {
                    const _performance2 = performance;
                    closure_129_8 = performance.now();
                    const currentUser = closure_130_5.getCurrentUser();
                    let isStaffResult;
                    if (currentUser != null) {
                      isStaffResult = currentUser.isStaff();
                    }
                    let str2 = "";
                    if (true === isStaffResult) {
                      str2 = closure_130_9;
                    }
                    closure_129_9 = str2;
                    parentSuggestedSearch = closure_130_1(closure_130_2[9]).getParentSuggestedSearch();
                    const obj8 = closure_130_1(closure_130_2[9]);
                    const obj10 = { type: "SMART_SEARCH_FETCH_START", smartSearchQuery };
                    closure_130_1(closure_130_2[10]).dispatch(obj10);
                    c4 = 1;
                    const HTTP = closure_130_0(closure_130_2[11]).HTTP;
                    const request = { url: closure_130_8.SMART_SEARCH(guildId), body: null, oldFormErrors: true, rejectWithError: true };
                    const obj11 = { query_text: queryText, channel_ids: channelIds, extra_params_json: closure_129_9 };
                    request.body = obj11;
                    c5 = 3;
                    c6 = 1;
                    const obj12 = { value: HTTP.post(request), done: false };
                    return obj12;
                  }
                }
              }
              obj22 = closure_130_0(closure_130_2[7]);
            }
            c6 = 3;
            const obj21 = closure_130_0(closure_130_2[6]);
          }
        } else if (2 === tmp7) {
          c4 = 0;
          let status;
          if (tmp75 != null) {
            status = tmp75.status;
          }
          closure_129_14 = status;
          if (404 === closure_129_14) {
            let ERROR = closure_130_0(closure_130_2[12]).SmartSearchStatus.EMPTY;
          } else {
            ERROR = closure_130_0(closure_130_2[12]).SmartSearchStatus.ERROR;
          }
          closure_129_15 = ERROR;
          const obj13 = { type: "SMART_SEARCH_FETCH_FAILURE", smartSearchQuery, status: closure_129_15 };
          closure_130_1(closure_130_2[10]).dispatch(obj13);
          const obj2 = closure_130_1(closure_130_2[10]);
          const obj14 = { smartSearchQuery, requestId: null, durationMs: null, responseStatus: null, smartSearchStatus: null, answerText: "", citations: null, parentSuggestedSearch: null };
          const _performance = performance;
          obj14.durationMs = performance.now() - closure_129_8;
          let str = "error";
          if (404 === closure_129_14) {
            str = "no_results";
          }
          obj14.responseStatus = str;
          obj14.smartSearchStatus = closure_129_15;
          obj14.citations = [];
          obj14.parentSuggestedSearch = parentSuggestedSearch;
          const result = closure_130_1(closure_130_2[9]).trackSmartSearchAnswerReturned(obj14, closure_129_2);
          const obj4 = closure_130_1(closure_130_2[9]);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_11 = value;
          closure_129_12 = (function hydrateAndFilterCitations(message_citations) {
            const mapped = message_citations.map((sourceId) => {
              const obj = { sourceId: sourceId.source_id, sourceType: sourceId.source_type, guildId: sourceId.guild_id, channelId: sourceId.channel_id, messageId: sourceId.message_id, message: closure_1_0(dependencyMap[13]).createMessageRecord(sourceId.message) };
              return obj;
            });
            return mapped.filter((message) => !blockedOrIgnoredForMessage.isBlockedOrIgnoredForMessage(message.message));
          })(closure_129_11.body.message_citations);
          closure_129_13 = (function resolveSearchStatus(search_status, length) {
            if ("not_qualified" === search_status) {
              return closure_1_0(12058).SmartSearchStatus.NOT_QUALIFIED;
            } else if ("no_results" === search_status) {
              return closure_1_0(12058).SmartSearchStatus.EMPTY;
            } else if ("success" === search_status) {
              if (length > 0) {
                let EMPTY = closure_1_0(12058).SmartSearchStatus.LOADED;
              } else {
                EMPTY = closure_1_0(12058).SmartSearchStatus.EMPTY;
              }
              return EMPTY;
            } else {
              return closure_1_0(12058).SmartSearchStatus.ERROR;
            }
          })(closure_129_11.body.search_status, closure_129_12.length);
          const obj15 = { type: "SMART_SEARCH_FETCH_SUCCESS", smartSearchQuery, smartSearchStatus: closure_129_13, answerText: closure_129_11.body.answer_text, citations: closure_129_12, messages: null };
          const message_citations = closure_129_11.body.message_citations;
          obj15.messages = message_citations.map((message) => message.message);
          closure_130_1(closure_130_2[10]).dispatch(obj15);
          const obj17 = closure_130_1(closure_130_2[10]);
          const obj16 = { smartSearchQuery, requestId: closure_129_11.body.request_id, durationMs: null, responseStatus: null, smartSearchStatus: null, answerText: null, citations: null, parentSuggestedSearch: null };
          const _performance3 = performance;
          obj16.durationMs = performance.now() - closure_129_8;
          obj16.responseStatus = closure_129_11.body.search_status;
          obj16.smartSearchStatus = closure_129_13;
          obj16.answerText = closure_129_11.body.answer_text;
          obj16.citations = closure_129_12;
          obj16.parentSuggestedSearch = parentSuggestedSearch;
          const result1 = closure_130_1(closure_130_2[9]).trackSmartSearchAnswerReturned(obj16, closure_129_2);
          c4 = 0;
          const obj19 = closure_130_1(closure_130_2[9]);
        }
        c4 = 0;
        c6 = 3;
        let obj = { value, done: true };
        return obj;
      }
    } catch (tmp75) {
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp75;
      } else {
        c5 = tmp;
      }
    }
  }
};
SmartSearchResultsStoreDefault;
const Endpoints = fn(1085).Endpoints;
let closure_9 = JSON.stringify({ arbiter: { enabled: false } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/SmartSearchActionCreators.tsx");

export const fetchAnswer = function fetchAnswer() {
  const self = this;
  const apply = closure_10.apply;
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
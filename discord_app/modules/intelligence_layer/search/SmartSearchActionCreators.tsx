// discord_app/modules/intelligence_layer/search/SmartSearchActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import SmartSearchResultsStoreDefault from "SmartSearchResultsStore.tsx";
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import SuggestedSearchStore from "SuggestedSearchStore.tsx";

const require = fn;
let closure_8 = async function _fetchAnswer(arg0) {
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
      return { value: "IconComponent", done: "+51" };
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
          ({
            searchContext: closure_129_0,
            searchQueryString: closure_129_1,
            SearchSessionAnalyticsManager: closure_129_2,
          } = closure_0);
          let smartSearchQuery;
          let queryText;
          let guildId;
          let channelIds;
          let requestKey;
          closure_129_8 = undefined;
          let parentSuggestedSearch;
          closure_129_10 = undefined;
          closure_129_11 = undefined;
          closure_129_12 = undefined;
          closure_129_13 = undefined;
          closure_129_14 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "Set", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            smartSearchQuery = closure_130_0(closure_130_2[5]).getSmartSearchQuery(closure_129_0, closure_129_1);
            if (null != smartSearchQuery) {
              if (obj21.isNlpSearchEnabled(smartSearchQuery.guildId, "fetch_answer")) {
                queryText = smartSearchQuery.queryText;
                guildId = smartSearchQuery.guildId;
                channelIds = smartSearchQuery.channelIds;
                requestKey = smartSearchQuery.requestKey;
                if (0 !== queryText.length) {
                  if (!closure_130_6.hasSuggestions(smartSearchQuery)) {
                    const initialSuggestedSearches = closure_130_0(closure_130_2[7]).fetchInitialSuggestedSearches(
                      smartSearchQuery,
                      closure_129_2,
                    );
                    const obj6 = closure_130_0(closure_130_2[7]);
                  }
                  if (!closure_130_5.hasAnswer(guildId, requestKey)) {
                    const _performance2 = performance;
                    closure_129_8 = performance.now();
                    parentSuggestedSearch = closure_130_1(closure_130_2[8]).getParentSuggestedSearch();
                    const obj7 = closure_130_1(closure_130_2[8]);
                    const obj10 = { type: "SMART_SEARCH_FETCH_START", smartSearchQuery };
                    closure_130_1(closure_130_2[9]).dispatch(obj10);
                    c4 = 1;
                    const HTTP = closure_130_0(closure_130_2[10]).HTTP;
                    const request = {
                      url: closure_130_7.SMART_SEARCH(guildId),
                      body: null,
                      oldFormErrors: true,
                      rejectWithError: true,
                    };
                    const obj11 = { query_text: queryText, channel_ids: channelIds };
                    request.body = obj11;
                    c5 = 3;
                    c6 = 1;
                    const obj12 = { value: HTTP.post(request), done: false };
                    return obj12;
                  }
                }
              }
              obj21 = closure_130_0(closure_130_2[6]);
            }
            c6 = 3;
            const obj20 = closure_130_0(closure_130_2[5]);
          }
        } else if (2 === tmp7) {
          c4 = 0;
          let status;
          if (tmp69 != null) {
            status = tmp69.status;
          }
          closure_129_13 = status;
          if (404 === closure_129_13) {
            let ERROR = closure_130_0(closure_130_2[11]).SmartSearchStatus.EMPTY;
          } else {
            ERROR = closure_130_0(closure_130_2[11]).SmartSearchStatus.ERROR;
          }
          closure_129_14 = ERROR;
          const obj13 = { type: "SMART_SEARCH_FETCH_FAILURE", smartSearchQuery, status: closure_129_14 };
          closure_130_1(closure_130_2[9]).dispatch(obj13);
          const obj2 = closure_130_1(closure_130_2[9]);
          const obj14 = {
            smartSearchQuery,
            requestId: null,
            durationMs: null,
            responseStatus: null,
            smartSearchStatus: null,
            answerText: "",
            citations: null,
            parentSuggestedSearch: null,
          };
          const _performance = performance;
          obj14.durationMs = performance.now() - closure_129_8;
          let str = "error";
          if (404 === closure_129_13) {
            str = "no_results";
          }
          obj14.responseStatus = str;
          obj14.smartSearchStatus = closure_129_14;
          obj14.citations = [];
          obj14.parentSuggestedSearch = parentSuggestedSearch;
          const result = closure_130_1(closure_130_2[8]).trackSmartSearchAnswerReturned(obj14, closure_129_2);
          const obj4 = closure_130_1(closure_130_2[8]);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_10 = value;
          closure_129_11 = (function hydrateAndFilterCitations(message_citations) {
            const mapped = message_citations.map((sourceId) => {
              const obj = {
                sourceId: sourceId.source_id,
                sourceType: sourceId.source_type,
                guildId: sourceId.guild_id,
                channelId: sourceId.channel_id,
                messageId: sourceId.message_id,
                message: closure_1_0(dependencyMap[12]).createMessageRecord(sourceId.message),
              };
              return obj;
            });
            return mapped.filter(
              (message) => !blockedOrIgnoredForMessage.isBlockedOrIgnoredForMessage(message.message),
            );
          })(closure_129_10.body.message_citations);
          closure_129_12 = (function resolveSearchStatus(search_status, length) {
            if ("not_qualified" === search_status) {
              return closure_1_0(12039).SmartSearchStatus.NOT_QUALIFIED;
            } else if ("no_results" === search_status) {
              return closure_1_0(12039).SmartSearchStatus.EMPTY;
            } else if ("success" === search_status) {
              if (length > 0) {
                let EMPTY = closure_1_0(12039).SmartSearchStatus.LOADED;
              } else {
                EMPTY = closure_1_0(12039).SmartSearchStatus.EMPTY;
              }
              return EMPTY;
            } else {
              return closure_1_0(12039).SmartSearchStatus.ERROR;
            }
          })(closure_129_10.body.search_status, closure_129_11.length);
          const obj15 = {
            type: "SMART_SEARCH_FETCH_SUCCESS",
            smartSearchQuery,
            smartSearchStatus: closure_129_12,
            answerText: closure_129_10.body.answer_text,
            citations: closure_129_11,
            messages: null,
          };
          const message_citations = closure_129_10.body.message_citations;
          obj15.messages = message_citations.map((message) => message.message);
          closure_130_1(closure_130_2[9]).dispatch(obj15);
          const obj16 = closure_130_1(closure_130_2[9]);
          const obj17 = {
            smartSearchQuery,
            requestId: closure_129_10.body.request_id,
            durationMs: null,
            responseStatus: null,
            smartSearchStatus: null,
            answerText: null,
            citations: null,
            parentSuggestedSearch: null,
          };
          const _performance3 = performance;
          obj17.durationMs = performance.now() - closure_129_8;
          obj17.responseStatus = closure_129_10.body.search_status;
          obj17.smartSearchStatus = closure_129_12;
          obj17.answerText = closure_129_10.body.answer_text;
          obj17.citations = closure_129_11;
          obj17.parentSuggestedSearch = parentSuggestedSearch;
          const result1 = closure_130_1(closure_130_2[8]).trackSmartSearchAnswerReturned(obj17, closure_129_2);
          c4 = 0;
          const obj18 = closure_130_1(closure_130_2[8]);
        }
        c4 = 0;
        c6 = 3;
        let obj = { value, done: true };
        return obj;
      }
    } catch (tmp69) {
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp69;
      } else {
        c5 = tmp;
      }
    }
  }
};
SmartSearchResultsStoreDefault;
const Endpoints = fn(1085).Endpoints;
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
  const result = SmartSearchAnalyticsManagerDefault.trackSmartSearchFeedbackGiven(
    { smartSearchQuery, hasPositiveFeedback },
    SearchSessionAnalyticsManager.SearchSessionAnalyticsManager,
  );
};

// discord_app/modules/intelligence_layer/search/SmartSearchActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import SmartSearchResultsStoreDefault from "SmartSearchResultsStore.tsx";
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import SuggestedSearchStore from "SuggestedSearchStore.tsx";

const require = fn;
let closure_9 = async function _fetchAnswer(arg0) {
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
      return { value: "HermesInternal", done: "HermesInternal" };
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
          let status2;
          closure_129_9 = undefined;
          let contextualProperties;
          closure_129_11 = undefined;
          closure_129_12 = undefined;
          closure_129_13 = undefined;
          closure_129_14 = undefined;
          closure_129_15 = undefined;
          let status3;
          c5 = 1;
          c6 = 1;
          return { value: "Path", done: true };
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
            smartSearchQuery = closure_130_0(closure_130_2[6]).getSmartSearchQuery(closure_129_0, closure_129_1);
            if (null != smartSearchQuery) {
              if (obj21.isNlpSearchEnabled(smartSearchQuery.guildId, "fetch_answer")) {
                queryText = smartSearchQuery.queryText;
                guildId = smartSearchQuery.guildId;
                channelIds = smartSearchQuery.channelIds;
                requestKey = smartSearchQuery.requestKey;
                if (0 !== queryText.length) {
                  if (!closure_130_6.hasSuggestions(smartSearchQuery)) {
                    const initialSuggestedSearches = closure_130_0(closure_130_2[8]).fetchInitialSuggestedSearches(
                      smartSearchQuery,
                      closure_129_2,
                    );
                    const obj6 = closure_130_0(closure_130_2[8]);
                  }
                  status2 = closure_130_5.getStatus(guildId, requestKey);
                  const _performance2 = performance;
                  closure_129_9 = performance.now();
                  contextualProperties = closure_130_1(closure_130_2[10]).getContextualProperties(
                    smartSearchQuery,
                    closure_129_2,
                  );
                  const obj7 = closure_130_1(closure_130_2[10]);
                  const obj10 = { type: "SMART_SEARCH_FETCH_START", smartSearchQuery };
                  closure_130_1(closure_130_2[11]).dispatch(obj10);
                  c4 = 1;
                  const HTTP = closure_130_0(closure_130_2[12]).HTTP;
                  const request = {
                    url: closure_130_8.SMART_SEARCH(guildId),
                    body: null,
                    oldFormErrors: true,
                    rejectWithError: true,
                    failImmediatelyWhenRateLimited: true,
                    timeout: null,
                  };
                  const obj11 = { query_text: queryText, channel_ids: channelIds };
                  request.body = obj11;
                  request.timeout = closure_130_7;
                  c5 = 3;
                  c6 = 1;
                  const obj12 = { value: HTTP.post(request), done: false };
                  return obj12;
                }
              }
              obj21 = closure_130_0(closure_130_2[7]);
            }
            c6 = 3;
            const obj20 = closure_130_0(closure_130_2[6]);
          }
        } else if (2 === tmp7) {
          c4 = 0;
          let status;
          if (tmp98 != null) {
            status = tmp98.status;
          }
          closure_129_14 = status;
          if (404 === closure_129_14) {
            let ERROR = closure_130_0(closure_130_2[9]).SmartSearchStatus.EMPTY;
          } else {
            ERROR = closure_130_0(closure_130_2[9]).SmartSearchStatus.ERROR;
          }
          closure_129_15 = ERROR;
          status3 = closure_130_5.getStatus(guildId, requestKey);
          let tmp26 = status3 !== closure_130_0(closure_130_2[9]).SmartSearchStatus.LOADED;
          if (tmp26) {
            tmp26 = status3 !== closure_130_0(closure_130_2[9]).SmartSearchStatus.EMPTY;
          }
          if (tmp26) {
            tmp26 = status3 !== closure_130_0(closure_130_2[9]).SmartSearchStatus.NOT_QUALIFIED;
          }
          if (tmp26) {
            const obj13 = { type: "SMART_SEARCH_FETCH_FAILURE", smartSearchQuery, status: closure_129_15 };
            closure_130_1(closure_130_2[11]).dispatch(obj13);
            const obj2 = closure_130_1(closure_130_2[11]);
          }
          const obj14 = {
            smartSearchQuery,
            requestId: null,
            durationMs: null,
            responseStatus: null,
            smartSearchStatus: null,
            answerText: "",
            citations: null,
            contextualProperties: null,
          };
          const _performance = performance;
          obj14.durationMs = performance.now() - closure_129_9;
          let str = "error";
          if (404 === closure_129_14) {
            str = "no_results";
          }
          obj14.responseStatus = str;
          obj14.smartSearchStatus = closure_129_15;
          obj14.citations = [];
          obj14.contextualProperties = contextualProperties;
          const result = closure_130_1(closure_130_2[10]).trackSmartSearchAnswerReturned(obj14);
          const obj4 = closure_130_1(closure_130_2[10]);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_11 = value;
          closure_129_12 = (function hydrateAndFilterCitations(message_citations) {
            const mapped = message_citations.map((sourceId) => {
              const obj = {
                sourceId: sourceId.source_id,
                sourceType: sourceId.source_type,
                guildId: sourceId.guild_id,
                channelId: sourceId.channel_id,
                messageId: sourceId.message_id,
                message: closure_1_0(dependencyMap[13]).createMessageRecord(sourceId.message),
              };
              return obj;
            });
            return mapped.filter(
              (message) => !blockedOrIgnoredForMessage.isBlockedOrIgnoredForMessage(message.message),
            );
          })(closure_129_11.body.message_citations);
          closure_129_13 = (function resolveSearchStatus(search_status, length) {
            if ("not_qualified" === search_status) {
              return closure_1_0(13239).SmartSearchStatus.NOT_QUALIFIED;
            } else if ("no_results" === search_status) {
              return closure_1_0(13239).SmartSearchStatus.EMPTY;
            } else if ("success" === search_status) {
              if (length > 0) {
                let EMPTY = closure_1_0(13239).SmartSearchStatus.LOADED;
              } else {
                EMPTY = closure_1_0(13239).SmartSearchStatus.EMPTY;
              }
              return EMPTY;
            } else {
              return closure_1_0(13239).SmartSearchStatus.ERROR;
            }
          })(closure_129_11.body.search_status, closure_129_12.length);
          const obj15 = {
            type: "SMART_SEARCH_FETCH_SUCCESS",
            smartSearchQuery,
            smartSearchStatus: closure_129_13,
            answerText: closure_129_11.body.answer_text,
            citations: closure_129_12,
            messages: null,
          };
          const message_citations = closure_129_11.body.message_citations;
          obj15.messages = message_citations.map((message) => message.message);
          closure_130_1(closure_130_2[11]).dispatch(obj15);
          const obj16 = closure_130_1(closure_130_2[11]);
          const obj17 = {
            smartSearchQuery,
            requestId: closure_129_11.body.request_id,
            durationMs: null,
            responseStatus: null,
            smartSearchStatus: null,
            answerText: null,
            citations: null,
            contextualProperties: null,
          };
          const _performance3 = performance;
          obj17.durationMs = performance.now() - closure_129_9;
          obj17.responseStatus = closure_129_11.body.search_status;
          obj17.smartSearchStatus = closure_129_13;
          obj17.answerText = closure_129_11.body.answer_text;
          obj17.citations = closure_129_12;
          obj17.contextualProperties = contextualProperties;
          const result1 = closure_130_1(closure_130_2[10]).trackSmartSearchAnswerReturned(obj17);
          c4 = 0;
          const obj18 = closure_130_1(closure_130_2[10]);
        }
        c4 = 0;
        c6 = 3;
        let obj = { value, done: true };
        return obj;
      }
    } catch (tmp98) {
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp98;
      } else {
        c5 = tmp;
      }
    }
  }
};
SmartSearchResultsStoreDefault;
let closure_7 = fn(13236).SMART_SEARCH_REQUEST_TIMEOUT_MS;
const Endpoints = fn(1071).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/SmartSearchActionCreators.tsx");

export function fetchAnswer() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function setResultFeedback(SearchSessionAnalyticsManager) {
  ({ smartSearchQuery, hasPositiveFeedback } = SearchSessionAnalyticsManager);
  DispatcherDefault.dispatch({ type: "SMART_SEARCH_SET_RESULT_FEEDBACK", smartSearchQuery, hasPositiveFeedback });
  const result = SmartSearchAnalyticsManagerDefault.trackSmartSearchFeedbackGiven(
    { smartSearchQuery, hasPositiveFeedback },
    SearchSessionAnalyticsManager.SearchSessionAnalyticsManager,
  );
}

// discord_app/modules/intelligence_layer/search/SmartSearchActionCreators.tsx
import Constants from "../../../Constants.tsx";
import SmartSearchResultsStoreDefault from "SmartSearchResultsStore.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import SuggestedSearchStore from "SuggestedSearchStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c5;

let obj = function _fetchAnswer() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c2;
    let closure_1;
    let closure_2;
    let closure_8;
    let message_citations;
    let obj10;
    let parentSuggestedSearch;
    let smartSearchQuery;
    let str;
    function hydrateAndFilterCitations(message_citations) {
      let blockedOrIgnoredForMessage;
      const mapped = message_citations.map((sourceId) => {
        let obj2;
        obj = {
          sourceId: sourceId.source_id,
          sourceType: sourceId.source_type,
          guildId: sourceId.guild_id,
          channelId: sourceId.channel_id,
          messageId: sourceId.message_id,
          message: obj2.createMessageRecord(sourceId.message),
        };
        obj2 = closure_1_0(closure_1_2[13]);
        return obj;
      });
      return mapped.filter((message) => !blockedOrIgnoredForMessage.isBlockedOrIgnoredForMessage(message.message));
    }
    function resolveSearchStatus(search_status, length) {
      if ("not_qualified" === search_status) {
        return closure_1_0(closure_1_2[12]).SmartSearchStatus.NOT_QUALIFIED;
      } else if ("no_results" === search_status) {
        return closure_1_0(closure_1_2[12]).SmartSearchStatus.EMPTY;
      } else if ("success" === search_status) {
        let EMPTY;
        if (length > 0) {
          EMPTY = closure_1_0(closure_1_2[12]).SmartSearchStatus.LOADED;
        } else {
          EMPTY = closure_1_0(closure_1_2[12]).SmartSearchStatus.EMPTY;
        }
        return EMPTY;
      } else {
        return closure_1_0(closure_1_2[12]).SmartSearchStatus.ERROR;
      }
    }
    let closure_0 = arg0;
    if (1 === c5) {
      if (arg0 === 1) {
        let c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        const obj18 = closure_130_0(closure_130_2[6]);
        smartSearchQuery = obj18.getSmartSearchQuery(c0, c1);
        if (null != smartSearchQuery) {
          const obj19 = closure_130_0(closure_130_2[7]);
          if (obj19.isNlpSearchEnabled(smartSearchQuery.guildId, "fetch_answer")) {
            const queryText = smartSearchQuery.queryText;
            const guildId = smartSearchQuery.guildId;
            const channelIds = smartSearchQuery.channelIds;
            const requestKey = smartSearchQuery.requestKey;
            if (0 !== queryText.length) {
              if (!closure_130_7.hasSuggestions(smartSearchQuery)) {
                const obj5 = closure_130_0(closure_130_2[8]);
                const initialSuggestedSearches = obj5.fetchInitialSuggestedSearches(smartSearchQuery, c2);
              }
              if (!closure_130_6.hasAnswer(guildId, requestKey)) {
                const _performance2 = performance;
                closure_8 = performance.now();
                const currentUser = closure_130_5.getCurrentUser();
                let isStaffResult;
                if (currentUser != null) {
                  isStaffResult = currentUser.isStaff();
                }
                let str2 = "";
                if (true === isStaffResult) {
                  str2 = closure_130_9;
                }
                const obj7 = closure_130_1(closure_130_2[9]);
                parentSuggestedSearch = obj7.getParentSuggestedSearch();
                const obj9 = { type: "SMART_SEARCH_FETCH_START", smartSearchQuery };
                const obj8 = closure_130_1(closure_130_2[10]);
                obj8.dispatch(obj9);
                let c4 = 1;
                const HTTP = closure_130_0(closure_130_2[11]).HTTP;
                const request = {
                  url: closure_130_8.SMART_SEARCH(guildId),
                  body: obj10,
                  oldFormErrors: true,
                  rejectWithError: true,
                };
                const post = HTTP.post;
                obj10 = { query_text: queryText, channel_ids: channelIds, extra_params_json: str2 };
                c5 = 3;
                c6 = 1;
                const obj11 = { value: post(request), done: false };
                return obj11;
              }
            }
          }
        }
      }
    } else if (2 === c5) {
      let ERROR;
      c4 = 0;
      let status;
      if (smartSearchQuery != null) {
        status = smartSearchQuery.status;
      }
      if (404 === status) {
        ERROR = closure_130_0(closure_130_2[12]).SmartSearchStatus.EMPTY;
      } else {
        ERROR = closure_130_0(closure_130_2[12]).SmartSearchStatus.ERROR;
      }
      let obj2 = closure_130_1(closure_130_2[10]);
      const obj12 = { type: "SMART_SEARCH_FETCH_FAILURE", smartSearchQuery, status: ERROR };
      obj2.dispatch(obj12);
      const obj13 = {
        smartSearchQuery,
        requestId: null,
        durationMs: performance.now() - closure_8,
        responseStatus: str,
        smartSearchStatus: ERROR,
        answerText: "",
        citations: [],
        parentSuggestedSearch,
      };
      const _performance = performance;
      const trackSmartSearchAnswerReturned = closure_130_1(closure_130_2[9]).trackSmartSearchAnswerReturned;
      str = "error";
      if (404 === status) {
        str = "no_results";
      }
      const result = trackSmartSearchAnswerReturned(obj13, c2);
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 0;
      c6 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      let closure_11 = value;
      const citations = hydrateAndFilterCitations(closure_11.body.message_citations);
      const smartSearchStatus = resolveSearchStatus(closure_11.body.search_status, citations.length);
      const obj14 = {
        type: "SMART_SEARCH_FETCH_SUCCESS",
        smartSearchQuery,
        smartSearchStatus,
        answerText: closure_11.body.answer_text,
        citations,
        messages: message_citations.map((message) => message.message),
      };
      message_citations = closure_11.body.message_citations;
      const dispatch = closure_130_1(closure_130_2[10]).dispatch;
      const tmp88 = closure_130_1(closure_130_2[10]);
      dispatch(obj14);
      const obj15 = {
        smartSearchQuery,
        requestId: closure_11.body.request_id,
        durationMs: performance.now() - closure_8,
        responseStatus: closure_11.body.search_status,
        smartSearchStatus,
        answerText: closure_11.body.answer_text,
        citations,
        parentSuggestedSearch,
      };
      const _performance3 = performance;
      const trackSmartSearchAnswerReturned2 = closure_130_1(closure_130_2[9]).trackSmartSearchAnswerReturned;
      const result1 = trackSmartSearchAnswerReturned2(obj15, c2);
      c4 = 0;
    }
    await "IconComponent";
    ({ searchContext: c0, searchQueryString: c1, SearchSessionAnalyticsManager: c2 } = closure_0);
    return "Reflect";
  });
  return obj(...arguments);
};
SmartSearchResultsStoreDefault;
const Endpoints = Constants.Endpoints;
let closure_9 = JSON.stringify({ arbiter: { enabled: false } });
let result = size.fileFinishedImporting("modules/intelligence_layer/search/SmartSearchActionCreators.tsx");

export const fetchAnswer = function fetchAnswer() {
  return obj(...arguments);
};

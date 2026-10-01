// === Module 12068: SmartSearchActionCreators ===

// Module 12068 (SmartSearchActionCreators)
import SmartSearchResultsStoreDefault from "SmartSearchResultsStore" /* 12057 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1372 */;
import SuggestedSearchStore from "SuggestedSearchStore" /* 12069 */;

const require = fn;
let closure_9 = async function _fetchAnswer(arg0) {
  closure_2 = tmp3;
  ({ searchContext: closure_129_0, searchQueryString: closure_129_1 } = closure_0);
  await "flex";
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
        if (obj17.isNlpSearchEnabled(smartSearchQuery.guildId, "fetch_answer")) {
          const queryText = smartSearchQuery.queryText;
          const guildId = smartSearchQuery.guildId;
          const channelIds = smartSearchQuery.channelIds;
          const requestKey = smartSearchQuery.requestKey;
          if (0 !== queryText.length) {
            if (!closure_130_6.hasSuggestions(guildId, channelIds)) {
              const initialSuggestedSearches = closure_130_0(closure_130_2[7]).fetchInitialSuggestedSearches(guildId, channelIds);
              closure_130_0(closure_130_2[7]);
            }
            if (!closure_130_5.hasAnswer(guildId, requestKey)) {
              const currentUser = closure_130_4.getCurrentUser();
              let isStaffResult;
              if (currentUser != null) {
                isStaffResult = currentUser.isStaff();
              }
              let str = "";
              if (true === isStaffResult) {
                str = closure_130_8;
              }
              closure_129_7 = str;
              closure_130_1(closure_130_2[8]).dispatch({ type: "SMART_SEARCH_FETCH_START", requestKey, guildId, queryText, channelIds });
              c4 = 1;
              const HTTP = closure_130_0(closure_130_2[9]).HTTP;
              const request = { url: closure_130_7.SMART_SEARCH(guildId), body: null, oldFormErrors: true, rejectWithError: true };
              request.body = { query_text: queryText, channel_ids: channelIds, extra_params_json: closure_129_7 };
              c5 = 3;
              c6 = 1;
              return { value: HTTP.post(request), done: false };
            }
          }
        }
        obj17 = closure_130_0(closure_130_2[6]);
      }
      c6 = 3;
      closure_130_0(closure_130_2[5]);
    }
  } else if (2 === tmp7) {
    c4 = 0;
    let status;
    if (tmp69 != null) {
      status = tmp69.status;
    }
    closure_129_9 = status;
    if (404 === closure_129_9) {
      let ERROR = closure_130_0(closure_130_2[10]).SmartSearchStatus.EMPTY;
    } else {
      ERROR = closure_130_0(closure_130_2[10]).SmartSearchStatus.ERROR;
    }
    closure_129_10 = ERROR;
    closure_130_1(closure_130_2[8]).dispatch({ type: "SMART_SEARCH_FETCH_FAILURE", requestKey, guildId, status: closure_129_10, queryText, channelIds });
    closure_130_1(closure_130_2[8]);
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_129_8 = value;
    const obj12 = { type: "SMART_SEARCH_FETCH_SUCCESS", requestKey, guildId, response: closure_129_8.body, messages: null, channelIds: null };
    const message_citations = closure_129_8.body.message_citations;
    obj12.messages = message_citations.map((message) => message.message);
    obj12.channelIds = channelIds;
    closure_130_1(closure_130_2[8]).dispatch(obj12);
    c4 = 0;
    closure_130_1(closure_130_2[8]);
  }
  return value;
};
SmartSearchResultsStoreDefault;
const Endpoints = fn(1074).Endpoints;
let closure_8 = JSON.stringify({ arbiter: { enabled: false } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/SmartSearchActionCreators.tsx");

export const fetchAnswer = function fetchAnswer() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
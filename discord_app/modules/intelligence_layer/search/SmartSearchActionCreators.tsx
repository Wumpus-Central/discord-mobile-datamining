// discord_app/modules/intelligence_layer/search/SmartSearchActionCreators.tsx
import SmartSearchResultsStoreDefault from "SmartSearchResultsStore.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import UserStore from "../../../stores/UserStore.tsx";
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
      return { value: "HermesInternal", done: null };
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
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          ({ searchContext: closure_129_0, searchQueryString: closure_129_1 } = closure_0);
          let smartSearchQuery;
          let queryText;
          let guildId;
          let channelIds;
          let requestKey;
          closure_129_7 = undefined;
          closure_129_8 = undefined;
          closure_129_9 = undefined;
          closure_129_10 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "flex", done: true };
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
            smartSearchQuery = closure_130_0(closure_130_2[5]).getSmartSearchQuery(closure_129_0, closure_129_1);
            if (null != smartSearchQuery) {
              if (obj17.isNlpSearchEnabled(smartSearchQuery.guildId, "fetch_answer")) {
                queryText = smartSearchQuery.queryText;
                guildId = smartSearchQuery.guildId;
                channelIds = smartSearchQuery.channelIds;
                requestKey = smartSearchQuery.requestKey;
                if (0 !== queryText.length) {
                  if (!closure_130_6.hasSuggestions(guildId, channelIds)) {
                    const initialSuggestedSearches = closure_130_0(closure_130_2[7]).fetchInitialSuggestedSearches(
                      guildId,
                      channelIds,
                    );
                    const obj4 = closure_130_0(closure_130_2[7]);
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
                    const obj8 = { type: "SMART_SEARCH_FETCH_START", requestKey, guildId, queryText, channelIds };
                    closure_130_1(closure_130_2[8]).dispatch(obj8);
                    c4 = 1;
                    const HTTP = closure_130_0(closure_130_2[9]).HTTP;
                    const request = {
                      url: closure_130_7.SMART_SEARCH(guildId),
                      body: null,
                      oldFormErrors: true,
                      rejectWithError: true,
                    };
                    const obj9 = { query_text: queryText, channel_ids: channelIds, extra_params_json: closure_129_7 };
                    request.body = obj9;
                    c5 = 3;
                    c6 = 1;
                    const obj10 = { value: HTTP.post(request), done: false };
                    return obj10;
                  }
                }
              }
              obj17 = closure_130_0(closure_130_2[6]);
            }
            c6 = 3;
            const obj16 = closure_130_0(closure_130_2[5]);
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
          const obj11 = {
            type: "SMART_SEARCH_FETCH_FAILURE",
            requestKey,
            guildId,
            status: closure_129_10,
            queryText,
            channelIds,
          };
          closure_130_1(closure_130_2[8]).dispatch(obj11);
          const obj2 = closure_130_1(closure_130_2[8]);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_8 = value;
          const obj12 = {
            type: "SMART_SEARCH_FETCH_SUCCESS",
            requestKey,
            guildId,
            response: closure_129_8.body,
            messages: null,
            channelIds: null,
          };
          const message_citations = closure_129_8.body.message_citations;
          obj12.messages = message_citations.map((message) => message.message);
          obj12.channelIds = channelIds;
          closure_130_1(closure_130_2[8]).dispatch(obj12);
          c4 = 0;
          const obj14 = closure_130_1(closure_130_2[8]);
        }
        c4 = 0;
        c6 = 3;
        const obj = { value, done: true };
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

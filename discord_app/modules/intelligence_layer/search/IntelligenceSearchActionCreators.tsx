// === Module 11857: IntelligenceSearchActionCreators ===

// Module 11857 (IntelligenceSearchActionCreators)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1372 */;
import IntelligenceSearchStore from "IntelligenceSearchStore" /* 11846 */;

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
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          ({ searchContext: closure_129_0, searchQueryString: closure_129_1 } = closure_0);
          let guildIdFromSearchContext;
          let intelligenceSearchQuery;
          let searchTabFetchId;
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          closure_129_8 = undefined;
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
            const obj8 = { value, done: true };
            return obj8;
          } else {
            if (obj17.isSupportedSearchContext(closure_129_0)) {
              guildIdFromSearchContext = closure_130_0(closure_130_2[6]).getGuildIdFromSearchContext(closure_129_0);
              if (null != guildIdFromSearchContext) {
                if (obj18.isNlpSearchEnabled(guildIdFromSearchContext, "fetch_answer")) {
                  intelligenceSearchQuery = closure_130_0(closure_130_2[5]).getIntelligenceSearchQuery(closure_129_1);
                  if (null != intelligenceSearchQuery) {
                    searchTabFetchId = closure_130_0(closure_130_2[6]).getSearchTabFetchId(closure_129_0, closure_130_7.MESSAGES, closure_129_1);
                    if (!closure_130_5.hasAnswer(guildIdFromSearchContext, searchTabFetchId)) {
                      const currentUser = closure_130_4.getCurrentUser();
                      let isStaffResult;
                      if (currentUser != null) {
                        isStaffResult = currentUser.isStaff();
                      }
                      let str = "";
                      if (true === isStaffResult) {
                        str = closure_130_8;
                      }
                      closure_129_5 = str;
                      const obj9 = { type: "INTELLIGENCE_SEARCH_FETCH_START", requestKey: searchTabFetchId, guildId: guildIdFromSearchContext, queryText: intelligenceSearchQuery.queryText, channelIds: intelligenceSearchQuery.channelIds };
                      closure_130_1(closure_130_2[8]).dispatch(obj9);
                      c4 = 1;
                      const HTTP = closure_130_0(closure_130_2[9]).HTTP;
                      const request = { url: closure_130_6.INTELLIGENCE_LAYER_SEARCH(guildIdFromSearchContext), body: null, oldFormErrors: true, rejectWithError: true };
                      const obj10 = { query_text: intelligenceSearchQuery.queryText, channel_ids: intelligenceSearchQuery.channelIds, extra_params_json: closure_129_5 };
                      request.body = obj10;
                      c5 = 3;
                      c6 = 1;
                      const obj11 = { value: HTTP.post(request), done: false };
                      return obj11;
                    }
                    const obj19 = closure_130_0(closure_130_2[6]);
                  }
                  const obj5 = closure_130_0(closure_130_2[5]);
                }
                obj18 = closure_130_0(closure_130_2[7]);
              }
              const obj4 = closure_130_0(closure_130_2[6]);
            }
            c6 = 3;
            obj17 = closure_130_0(closure_130_2[5]);
          }
        } else if (2 === tmp7) {
          c4 = 0;
          let status;
          if (tmp63 != null) {
            status = tmp63.status;
          }
          closure_129_7 = status;
          if (404 === closure_129_7) {
            let ERROR = closure_130_0(closure_130_2[10]).IntelligenceSearchStatus.EMPTY;
          } else {
            ERROR = closure_130_0(closure_130_2[10]).IntelligenceSearchStatus.ERROR;
          }
          closure_129_8 = ERROR;
          const obj12 = { type: "INTELLIGENCE_SEARCH_FETCH_FAILURE", requestKey: searchTabFetchId, guildId: guildIdFromSearchContext, status: closure_129_8, queryText: intelligenceSearchQuery.queryText, channelIds: intelligenceSearchQuery.channelIds };
          closure_130_1(closure_130_2[8]).dispatch(obj12);
          const obj2 = closure_130_1(closure_130_2[8]);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_6 = value;
          const obj13 = { type: "INTELLIGENCE_SEARCH_FETCH_SUCCESS", requestKey: searchTabFetchId, guildId: guildIdFromSearchContext, response: closure_129_6.body, messages: null, channelIds: null };
          const message_citations = closure_129_6.body.message_citations;
          obj13.messages = message_citations.map((message) => message.message);
          obj13.channelIds = intelligenceSearchQuery.channelIds;
          closure_130_1(closure_130_2[8]).dispatch(obj13);
          c4 = 0;
          const obj15 = closure_130_1(closure_130_2[8]);
        }
        c4 = 0;
        c6 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp63) {
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp63;
      } else {
        c5 = tmp;
      }
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const SearchTabs = fn(7303).SearchTabs;
let closure_8 = JSON.stringify({ arbiter: { enabled: false } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/IntelligenceSearchActionCreators.tsx");

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
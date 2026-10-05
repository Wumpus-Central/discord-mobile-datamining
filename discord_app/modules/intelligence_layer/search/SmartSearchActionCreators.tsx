// discord_app/modules/intelligence_layer/search/SmartSearchActionCreators.tsx
import Constants from "../../../Constants.tsx";
import SmartSearchResultsStoreDefault from "SmartSearchResultsStore.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import UserStore from "../../../stores/UserStore.tsx";
import SuggestedSearchStore from "SuggestedSearchStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c5;

let obj = function _fetchAnswer() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let channelIds;
    let closure_1;
    let closure_2;
    let guildId;
    let message_citations;
    let obj9;
    let queryText;
    let requestKey;
    let closure_0 = arg0;
    if (1 === c5) {
      if (arg0 === 1) {
        let c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        const obj15 = closure_130_0(closure_130_2[5]);
        const tmp = obj15.getSmartSearchQuery(c0, c1);
        if (null != tmp) {
          const obj16 = closure_130_0(closure_130_2[6]);
          if (obj16.isNlpSearchEnabled(tmp.guildId, "fetch_answer")) {
            queryText = tmp.queryText;
            guildId = tmp.guildId;
            channelIds = tmp.channelIds;
            requestKey = tmp.requestKey;
            if (0 !== queryText.length) {
              if (!closure_130_6.hasSuggestions(guildId, channelIds)) {
                const obj4 = closure_130_0(closure_130_2[7]);
                const initialSuggestedSearches = obj4.fetchInitialSuggestedSearches(guildId, channelIds);
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
                const obj8 = { type: "SMART_SEARCH_FETCH_START", requestKey, guildId, queryText, channelIds };
                const obj6 = closure_130_1(closure_130_2[8]);
                obj6.dispatch(obj8);
                let c4 = 1;
                const HTTP = closure_130_0(closure_130_2[9]).HTTP;
                const request = {
                  url: closure_130_7.SMART_SEARCH(guildId),
                  body: obj9,
                  oldFormErrors: true,
                  rejectWithError: true,
                };
                const post = HTTP.post;
                obj9 = { query_text: queryText, channel_ids: channelIds, extra_params_json: str };
                c5 = 3;
                c6 = 1;
                const obj10 = { value: post(request), done: false };
                return obj10;
              }
            }
          }
        }
      }
    } else if (2 === c5) {
      let ERROR;
      c4 = 0;
      let status;
      if (status != null) {
        status = status.status;
      }
      if (404 === status) {
        ERROR = closure_130_0(closure_130_2[10]).SmartSearchStatus.EMPTY;
      } else {
        ERROR = closure_130_0(closure_130_2[10]).SmartSearchStatus.ERROR;
      }
      const obj11 = { type: "SMART_SEARCH_FETCH_FAILURE", requestKey, guildId, status: ERROR, queryText, channelIds };
      const obj2 = closure_130_1(closure_130_2[8]);
      obj2.dispatch(obj11);
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 0;
      c6 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      closure_8 = value;
      const obj12 = {
        type: "SMART_SEARCH_FETCH_SUCCESS",
        requestKey,
        guildId,
        response: closure_8.body,
        messages: message_citations.map((message) => message.message),
        channelIds,
      };
      message_citations = closure_8.body.message_citations;
      const dispatch = closure_130_1(closure_130_2[8]).dispatch;
      const tmp77 = closure_130_1(closure_130_2[8]);
      dispatch(obj12);
      c4 = 0;
    }
    await "IconComponent";
    ({ searchContext: c0, searchQueryString: c1 } = closure_0);
    return "Set";
  });
  return obj(...arguments);
};
SmartSearchResultsStoreDefault;
const Endpoints = Constants.Endpoints;
let closure_8 = JSON.stringify({ arbiter: { enabled: false } });
const result = size.fileFinishedImporting("modules/intelligence_layer/search/SmartSearchActionCreators.tsx");

export const fetchAnswer = function fetchAnswer() {
  return obj(...arguments);
};

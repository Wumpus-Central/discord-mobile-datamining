// === Module 7663: FriendSuggestionActionCreators ===

// Module 7663 (FriendSuggestionActionCreators)
import HTTPUtils from "HTTPUtils" /* 1272 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/friend_suggestions/FriendSuggestionActionCreators.tsx");

export default {
  fetch() {
    return (async () => {
      closure_1 = tmp3;
      const HTTP = HTTPUtils.HTTP;
      await HTTP.get({ url: constants.FRIEND_SUGGESTIONS, rejectWithError: true });
      if (1 === tmp7) {
        c3 = 0;
        let obj3 = closure_129_1(closure_129_2[3]);
        obj3.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_FAILURE" });
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_128_0 = value;
        obj3 = { type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS", suggestions: closure_128_0.body };
        closure_129_1(closure_129_2[3]).dispatch(obj3);
        c3 = 0;
        closure_129_1(closure_129_2[3]);
      }
      return value;
    })();
  },
  ignore(id) {
    const HTTP = HTTPUtils.HTTP;
    HTTP.del({ url: Endpoints.FRIEND_SUGGESTION(id), rejectWithError: true });
  }
};
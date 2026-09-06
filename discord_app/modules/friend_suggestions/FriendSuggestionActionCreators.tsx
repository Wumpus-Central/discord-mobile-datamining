// discord_app/modules/friend_suggestions/FriendSuggestionActionCreators.tsx
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

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
        throw arg1;
      } else if (arg0 !== 2) {
        closure_128_0 = arg1;
        obj3 = { type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS", suggestions: closure_128_0.body };
        closure_129_1(closure_129_2[3]).dispatch(obj3);
        c3 = 0;
        closure_129_1(closure_129_2[3]);
      }
      return arg1;
    })();
  },
  ignore(id) {
    const HTTP = HTTPUtils.HTTP;
    HTTP.del({ url: Endpoints.FRIEND_SUGGESTION(id), rejectWithError: true });
  },
};

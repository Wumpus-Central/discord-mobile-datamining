// === Module 5411: ? ===

// Module 5411
import sendRequest from "sendRequest" /* 530 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 676 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/friend_suggestions/FriendSuggestionActionCreators.tsx");

export default {
  fetch() {
    return callback(function*() {
      const callback = tmp3;
      c3 = 1;
      const HTTP = closure_1_0(closure_1_2[2]).HTTP;
      obj1 = { url: null, rejectWithError: true };
      obj1[0] = constants.FRIEND_SUGGESTIONS;
      yield HTTP.get(obj1);
      if (1 === tmp7) {
        c3 = 0;
        let obj3 = callback(709);
        obj3.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_FAILURE" });
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        const body = arg1;
        const obj = callback(709);
        obj3 = { type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS", suggestions: null };
        obj3[1] = body.body;
        obj.dispatch(obj3);
        c3 = 0;
      }
      c3 = 0;
      return arg1;
    })();
  },
  ignore(id) {
    const HTTP = sendRequest.HTTP;
    HTTP.del({ url: Endpoints.FRIEND_SUGGESTION(id), rejectWithError: true });
  }
};
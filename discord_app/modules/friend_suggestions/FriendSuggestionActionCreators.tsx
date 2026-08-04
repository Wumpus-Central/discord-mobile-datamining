// discord_app/modules/friend_suggestions/FriendSuggestionActionCreators.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
const result = require("sendRequest").fileFinishedImporting("modules/friend_suggestions/FriendSuggestionActionCreators.tsx");

export default {
  fetch() {
    return callback(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const callback = tmp3;
              let body = tmp7;
              body = undefined;
              let c3 = 1;
              const HTTP = outer1_0(outer1_2[2]).HTTP;
              const obj1 = { url: null, rejectWithError: true };
              obj1[0] = constants.FRIEND_SUGGESTIONS;
              constants = 2;
              c5 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              let obj3 = callback(709);
              obj3.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_FAILURE" });
              c5 = 3;
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              body = arg1;
              obj = callback(709);
              obj3 = { type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS", suggestions: null };
              obj3[1] = body.body;
              obj.dispatch(obj3);
              c3 = 0;
            }
            c3 = 0;
            c5 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          }
        } catch (tmp22) {
          const dependencyMap = tmp22;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp22;
          } else {
            constants = tmp;
          }
        }
      }
    })();
  },
  ignore(id) {
    const HTTP = require(530) /* sendRequest */.HTTP;
    HTTP.del({ url: Endpoints.FRIEND_SUGGESTION(id), rejectWithError: true });
  }
};
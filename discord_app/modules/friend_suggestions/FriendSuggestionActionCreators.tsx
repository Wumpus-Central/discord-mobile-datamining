// discord_app/modules/friend_suggestions/FriendSuggestionActionCreators.tsx
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

let c4, c5;

const Endpoints = Constants.Endpoints;
let obj = {
  fetch() {
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let body;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp;
              body = undefined;
              c3 = 1;
              const HTTP = HTTPUtils.HTTP;
              const obj5 = { url: constants.FRIEND_SUGGESTIONS, rejectWithError: true };
              c4 = 2;
              c5 = 1;
              const obj6 = { value: HTTP.get(obj5), done: false };
              return obj6;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              const obj4 = closure_129_1(closure_129_2[3]);
              obj4.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_FAILURE" });
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              body = value;
              const obj8 = { type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS", suggestions: body.body };
              const obj = closure_129_1(closure_129_2[3]);
              obj.dispatch(obj8);
              c3 = 0;
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp19) {
          let closure_2 = tmp19;
          if (0 === c3) {
            c5 = 3;
            throw tmp19;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  ignore(id) {
    const HTTP = HTTPUtils.HTTP;
    const obj = { url: Endpoints.FRIEND_SUGGESTION(id), rejectWithError: true };
    HTTP.del(obj);
  },
};
const result = size.fileFinishedImporting("modules/friend_suggestions/FriendSuggestionActionCreators.tsx");

export default obj;

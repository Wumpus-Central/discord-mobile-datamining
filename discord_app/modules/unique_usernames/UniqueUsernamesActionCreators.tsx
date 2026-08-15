// discord_app/modules/unique_usernames/UniqueUsernamesActionCreators.tsx
import expandEventProperties from "expandEventProperties";
import ME from "ME";
import { dispatcher } from "../../Dispatcher.tsx";

let c4;
let c5;
const require = arg1;
({ AnalyticEvents: c4, Endpoints: c5 } = ME);
const result = require("getSystemLocale").fileFinishedImporting("modules/unique_usernames/UniqueUsernamesActionCreators.tsx");

export default {
  resetSuggestions() {
    return dispatcher.dispatch({ type: "UNIQUE_USERNAME_SUGGESTIONS_RESET" });
  },
  fetchSuggestionsRegistration(arg0) {
    let closure_0 = arg0;
    let num = arg1;
    if (arg1 === undefined) {
      num = 1500;
    }
    return callback(function*() {
      let closure_1 = tmp3;
      outer1_1(outer1_2[3]).dispatch({ type: "UNIQUE_USERNAME_SUGGESTIONS_RESET" });
      let c3 = 1;
      const HTTP = outer1_0(outer1_2[4]).HTTP;
      const obj1 = { url: null, query: null, timeout: null, rejectWithError: true, failImmediatelyWhenRateLimited: true };
      obj1[0] = constants.POMELO_SUGGESTIONS_UNAUTHED;
      if (null != outer1_0) {
        const obj2 = { global_name: null };
        obj2[0] = outer1_0;
        const tmp17 = obj2;
      }
      obj1[1] = tmp17;
      obj1[2] = outer1_1;
      yield HTTP.get(obj1);
      if (1 === tmp7) {
        c3 = 0;
        constants = 3;
      } else if (arg0 === 1) {
        constants = 3;
        throw arg1;
      } else if (arg0 === 2) {
        c3 = 0;
        constants = 3;
        const obj4 = { value: null, done: true };
        obj4[0] = arg1;
        return obj4;
      } else {
        let closure_0 = arg1;
        const body = closure_0.body;
        let username;
        if (body != null) {
          username = body.username;
        }
        if (null == username) {
          c3 = 0;
        }
      }
      const obj = outer1_1(outer1_2[3]);
      const obj5 = { type: "UNIQUE_USERNAME_REGISTRATION_SUGGESTIONS_SUCCESS", suggestion: null, source: null };
      obj5[1] = closure_0.body;
      obj5[2] = closure_0;
      c3 = 0;
      return obj.dispatch(obj5);
    })();
  },
  attemptUsername(arg0, arg1, arg2, expandEventProperties) {
    let closure_0 = arg0;
    let str = arg1;
    if (arg1 === undefined) {
      str = "modal";
    }
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    let flag2 = expandEventProperties;
    if (expandEventProperties === undefined) {
      flag2 = false;
    }
    return flag2(function*() {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp3;
              let c1 = tmp7;
              let closure_0;
              c1 = undefined;
              closure_2 = undefined;
              const tmp84 = (function validate(outer1_0) {
                if (false === obj.test(outer1_0)) {
                  const intl3 = callback(1236).intl;
                  let stringResult = intl3.string(callback(1236).t.z7c4bP);
                } else if (outer1_0.includes("..")) {
                  const intl2 = callback(1236).intl;
                  stringResult = intl2.string(callback(1236).t["C7G+gr"]);
                } else if (outer1_0.length < 2) {
                  const intl = callback(1236).intl;
                  stringResult = intl.formatToPlainString(callback(1236).t.IpijXA, { maxNum: 32, minNum: 2 });
                }
                return stringResult;
              })(outer1_0);
              if (null != tmp84) {
                const obj1 = { reason: null, username_error: true, location: null, one_click_flow: null };
                obj1[0] = tmp84;
                obj1[2] = outer1_1;
                obj1[3] = outer1_3;
                outer1_1(outer1_2[5]).track(constants.POMELO_ERRORS, obj1);
                const obj14 = outer1_1(outer1_2[5]);
                let obj2 = { type: "UNIQUE_USERNAME_ATTEMPT_FAILURE", username: null, error: null };
                obj2[1] = outer1_0;
                obj2[2] = tmp84;
                c6 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = outer1_1(outer1_2[3]).dispatch(obj2);
                return obj3;
              } else {
                constants = 1;
                let post = outer1_1(outer1_2[6]).post;
                let obj4 = c5;
                if (outer1_2) {
                  let POMELO_ATTEMPT = obj4.POMELO_ATTEMPT_UNAUTHED;
                } else {
                  POMELO_ATTEMPT = obj4.POMELO_ATTEMPT;
                }
                obj4 = { url: null, body: null, trackedActionData: null, rejectWithError: false };
                obj4[0] = POMELO_ATTEMPT;
                let obj5 = { username: null };
                obj5[0] = outer1_0;
                obj4[1] = obj5;
                const obj6 = { event: null, properties: null };
                obj6[0] = outer1_0(outer1_2[7]).NetworkActionNames.POMELO_ATTEMPT;
                let obj7 = { requested_username: null };
                obj7[0] = outer1_0;
                obj6[1] = obj7;
                obj4[2] = obj6;
                post = post(obj4);
                c5 = 2;
                c6 = 1;
                const tmp87 = outer1_1(outer1_2[6]);
              }
            }
          } else {
            if (1 === tmp7) {
              constants = 0;
              outer1_3 = expandEventProperties;
              const aPIError = new outer1_0(outer1_2[8]).APIError(outer1_3);
              outer1_1 = aPIError;
              const anyErrorMessage = outer1_1.getAnyErrorMessage();
              closure_0 = anyErrorMessage;
              if (anyErrorMessage == null) {
                closure_0 = undefined;
              }
              closure_2 = closure_0;
              obj5 = outer1_1(outer1_2[5]);
              const obj8 = { reason: null, username_error: true, location: null, one_click_flow: null };
              obj8[0] = closure_2;
              obj8[2] = c1;
              obj8[3] = expandEventProperties;
              obj5.track(constants.POMELO_ERRORS, obj8);
              obj7 = outer1_1(outer1_2[3]);
              const obj9 = { username: null, type: "UNIQUE_USERNAME_ATTEMPT_FAILURE", error: null, statusCode: null, retryAfter: null };
              obj9[0] = closure_0;
              let tmp49;
              if (null != c1.status) {
                if (c1.status < 500) {
                  if (401 !== c1.status) {
                    tmp49 = closure_2;
                  }
                }
              }
              obj9[2] = tmp49;
              obj9[3] = c1.status;
              obj9[4] = c1.retryAfter;
              obj7.dispatch(obj9);
              c6 = 3;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              closure_0 = arg1;
              if (closure_0.body.taken) {
                obj = outer1_1(outer1_2[5]);
                const obj10 = { reason: "already_taken", username_error: true, location: null, one_click_flow: null };
                obj10[2] = c1;
                obj10[3] = expandEventProperties;
                obj.track(constants.POMELO_ERRORS, obj10);
              }
              obj2 = outer1_1(outer1_2[3]);
              const obj11 = { type: "UNIQUE_USERNAME_ATTEMPT_SUCCESS", username: null, taken: null };
              obj11[1] = closure_0;
              obj11[2] = closure_0.body.taken;
              obj2.dispatch(obj11);
              constants = 0;
            }
            constants = 0;
            c6 = 3;
            const obj12 = { value: null, done: true };
            obj12[0] = arg1;
            return obj12;
          }
        } catch (tmp72) {
          expandEventProperties = tmp72;
          if (tmp4 === constants) {
            c6 = tmp2;
            throw tmp72;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  }
};
// === Module 14797: UniqueUsernamesActionCreators ===

// Module 14797 (UniqueUsernamesActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
const Constants = fn(1074);
({ AnalyticEvents: closure_4, Endpoints: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/unique_usernames/UniqueUsernamesActionCreators.tsx");

export default {
  resetSuggestions() {
    return DispatcherDefault.dispatch({ type: "UNIQUE_USERNAME_SUGGESTIONS_RESET" });
  },
  fetchSuggestionsRegistration(globalName) {
    closure_0 = globalName;
    return (async () => {
      tmp3(tmp19[3]).dispatch({ type: "UNIQUE_USERNAME_SUGGESTIONS_RESET" });
      const HTTP = global_name(tmp19[4]).HTTP;
      const request = { url: constants.POMELO_SUGGESTIONS_UNAUTHED, query: null, timeout: null, rejectWithError: true, failImmediatelyWhenRateLimited: true };
      if (null != global_name) {
        const tmp17 = { global_name };
      }
      request.query = tmp17;
      request.timeout = num;
      await HTTP.get(request);
      if (1 === tmp7) {
        c3 = 0;
        constants = 3;
      } else if (arg0 === 1) {
        constants = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        constants = 3;
        return { value, done: true };
      } else {
        closure_128_0 = value;
        const body = closure_128_0.body;
        let username;
        if (body != null) {
          username = body.username;
        }
        if (null == username) {
          c3 = 0;
        }
      }
      return tmp3(tmp19[3]).dispatch({ type: "UNIQUE_USERNAME_REGISTRATION_SUGGESTIONS_SUCCESS", suggestion: closure_128_0.body, source: closure_129_0 });
    })();
  },
  attemptUsername(arg0) {
    closure_0 = arg0;
    if (registration === undefined) {
      let str = "modal";
    }
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    let flag2 = flag3;
    if (flag3 === undefined) {
      flag2 = false;
    }
    return flag2(function*() {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              str = tmp7;
              closure_129_0 = undefined;
              closure_129_1 = undefined;
              closure_129_2 = undefined;
              const tmp83 = (function validate(arr) {
                if (false === obj.test(arr)) {
                  const intl3 = _undefined(1114).intl;
                  let stringResult = intl3.string(_undefined(1114).t.z7c4bP);
                } else if (arr.includes("..")) {
                  const intl2 = _undefined(1114).intl;
                  stringResult = intl2.string(_undefined(1114).t["C7G+gr"]);
                } else if (arr.length < 2) {
                  const intl = _undefined(1114).intl;
                  stringResult = intl.formatToPlainString(_undefined(1114).t.IpijXA, { maxNum: 32, minNum: 2 });
                }
                return stringResult;
              })(_undefined);
              if (null != tmp83) {
                const obj5 = { reason: tmp83, username_error: true, location: str, one_click_flow: flag2 };
                str(tmp3[5]).track(constants.POMELO_ERRORS, obj5);
                const obj14 = str(tmp3[5]);
                const obj7 = { type: "UNIQUE_USERNAME_ATTEMPT_FAILURE", username: _undefined, error: tmp83 };
                c6 = 3;
                const obj9 = { value: str(tmp3[3]).dispatch(obj7), done: true };
                return obj9;
              } else {
                constants = 1;
                let post = str(tmp3[6]).post;
                let request = c5;
                if (flag) {
                  let POMELO_ATTEMPT = request.POMELO_ATTEMPT_UNAUTHED;
                } else {
                  POMELO_ATTEMPT = request.POMELO_ATTEMPT;
                }
                request = { url: POMELO_ATTEMPT, body: null, trackedActionData: null, rejectWithError: false };
                const obj10 = { username: _undefined };
                request.body = obj10;
                const obj11 = { event: _undefined(tmp3[7]).NetworkActionNames.POMELO_ATTEMPT, properties: null };
                const obj12 = { requested_username: _undefined };
                obj11.properties = obj12;
                request.trackedActionData = obj11;
                post = post(request);
                c5 = 2;
                c6 = 1;
                const tmp86 = str(tmp3[6]);
              }
            }
          } else {
            if (1 === tmp7) {
              constants = 0;
              closure_129_3 = closure_3;
              const aPIError = new _undefined(tmp3[8]).APIError(closure_129_3);
              closure_129_1 = aPIError;
              const anyErrorMessage = closure_129_1.getAnyErrorMessage();
              _undefined = anyErrorMessage;
              if (anyErrorMessage == null) {
                _undefined = undefined;
              }
              closure_129_2 = _undefined;
              const obj13 = { reason: closure_129_2, username_error: true, location: closure_130_1, one_click_flow: closure_130_3 };
              str(tmp3[5]).track(constants.POMELO_ERRORS, obj13);
              const obj6 = str(tmp3[5]);
              const obj15 = { username: closure_130_0, type: "UNIQUE_USERNAME_ATTEMPT_FAILURE", error: null, statusCode: null, retryAfter: null };
              let tmp49;
              if (null != closure_129_1.status) {
                if (closure_129_1.status < 500) {
                  if (401 !== closure_129_1.status) {
                    tmp49 = closure_129_2;
                  }
                }
              }
              obj15.error = tmp49;
              obj15.statusCode = closure_129_1.status;
              obj15.retryAfter = closure_129_1.retryAfter;
              str(tmp3[3]).dispatch(obj15);
              c6 = 3;
              const obj8 = str(tmp3[3]);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_129_0 = value;
              if (closure_129_0.body.taken) {
                const obj17 = { reason: "already_taken", username_error: true, location: closure_130_1, one_click_flow: closure_130_3 };
                str(tmp3[5]).track(constants.POMELO_ERRORS, obj17);
                const obj = str(tmp3[5]);
              }
              const obj18 = { type: "UNIQUE_USERNAME_ATTEMPT_SUCCESS", username: closure_130_0, taken: closure_129_0.body.taken };
              str(tmp3[3]).dispatch(obj18);
              constants = 0;
              const obj3 = str(tmp3[3]);
            }
            constants = 0;
            c6 = 3;
            const obj19 = { value, done: true };
            return obj19;
          }
        } catch (tmp72) {
          closure_3 = tmp72;
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
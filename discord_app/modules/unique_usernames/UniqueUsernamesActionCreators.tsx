// === Module 14520: UniqueUsernamesActionCreators ===

// Module 14520 (UniqueUsernamesActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c4, c5, c6, closure_2, closure_3, constants;

let closure_4;
let hasOwnProperty;
({ AnalyticEvents: closure_4, Endpoints: hasOwnProperty } = Constants);
let obj = {
  resetSuggestions() {
    const obj = DispatcherDefault;
    return obj.dispatch({ type: "UNIQUE_USERNAME_SUGGESTIONS_RESET" });
  },
  fetchSuggestionsRegistration(globalName) {
    let num;
    let closure_0 = globalName;
    return (async () => {
      let closure_1;
      let obj;
      let tmp14;
      if (constants === 2) {
        constants = 3;
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
          let global_name;
          constants = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              constants = 3;
              throw value;
            } else if (arg0 === 2) {
              constants = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              global_name = undefined;
              const obj9 = tmp(closure_2[3]);
              obj9.dispatch({ type: "UNIQUE_USERNAME_SUGGESTIONS_RESET" });
              c3 = 1;
              const HTTP = global_name(closure_2[4]).HTTP;
              const request = { url: constants.POMELO_SUGGESTIONS_UNAUTHED, query: tmp14, timeout: 2, rejectWithError: true, failImmediatelyWhenRateLimited: true };
              tmp14 = undefined;
              const get = HTTP.get;
              if (null != global_name) {
                const obj4 = { global_name };
                tmp14 = obj4;
              }
              c4 = 2;
              constants = 1;
              const obj5 = { value: get(request), done: false };
              return obj5;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
            } else if (arg0 === 1) {
              constants = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              constants = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              global_name = value;
              const body = global_name.body;
              let username;
              if (body != null) {
                username = body.username;
              }
              if (null != username) {
                const obj7 = { type: "UNIQUE_USERNAME_REGISTRATION_SUGGESTIONS_SUCCESS", suggestion: global_name.body, source: closure_129_0 };
                c3 = 0;
                constants = 3;
                const obj8 = { value: obj.dispatch(obj7), done: true };
                obj = tmp(closure_2[3]);
                return obj8;
              } else {
                c3 = 0;
              }
            }
            constants = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp16) {
          closure_2 = tmp16;
          if (0 === c3) {
            constants = 3;
            throw tmp16;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  attemptUsername(arg0) {
    let closure_0 = arg0;
    let str = registration;
    if (registration === undefined) {
      str = "modal";
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
      let closure_1;
      let obj10;
      let obj11;
      let obj16;
      let obj9;
      let tmp45;
      function validate(arr) {
        let stringResult;
        const obj = /^[A-Za-z0-9_.]*$/;
        if (false === obj.test(arr)) {
          const intl3 = _undefined(reason[2]).intl;
          stringResult = intl3.string(_undefined(reason[2]).t.z7c4bP);
        } else if (arr.includes("..")) {
          const intl2 = _undefined(reason[2]).intl;
          stringResult = intl2.string(_undefined(reason[2]).t["C7G+gr"]);
        } else if (arr.length < 2) {
          const intl = _undefined(reason[2]).intl;
          stringResult = intl.formatToPlainString(_undefined(reason[2]).t.IpijXA, { maxNum: 32, minNum: 2 });
        }
        return stringResult;
      }
      if (c6 === 2) {
        c6 = 3;
        str = "Generator functions may not be called on executing generators";
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
        try {
          let _undefined;
          let aPIError;
          let reason;
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
              str = tmp4;
              _undefined = undefined;
              aPIError = undefined;
              reason = undefined;
              const tmp78 = validate(_undefined);
              if (null != tmp78) {
                const obj5 = { reason: tmp78, username_error: true, location: str, one_click_flow: flag2 };
                const obj14 = str(reason[5]);
                obj14.track(constants.POMELO_ERRORS, obj5);
                const obj7 = { type: "UNIQUE_USERNAME_ATTEMPT_FAILURE", username: _undefined, error: tmp78 };
                c6 = 3;
                const obj8 = { value: obj16.dispatch(obj7), done: true };
                obj16 = str(reason[3]);
                return obj8;
              } else {
                let POMELO_ATTEMPT;
                constants = 1;
                const post = str(reason[6]).post;
                const tmp81 = str(reason[6]);
                if (flag) {
                  POMELO_ATTEMPT = tmp83.POMELO_ATTEMPT_UNAUTHED;
                } else {
                  POMELO_ATTEMPT = tmp83.POMELO_ATTEMPT;
                }
                const request = { url: POMELO_ATTEMPT, body: obj9, trackedActionData: obj10, rejectWithError: false };
                obj9 = { username: _undefined };
                obj10 = { event: _undefined(reason[7]).NetworkActionNames.POMELO_ATTEMPT, properties: obj11 };
                obj11 = { requested_username: _undefined };
                c5 = 2;
                c6 = 1;
                const obj12 = { value: post(request), done: false };
                return obj12;
              }
            }
          } else {
            if (1 === c5) {
              constants = 0;
              const self = this;
              const self2 = this;
              aPIError = new _undefined(reason[8]).APIError(closure_3);
              const anyErrorMessage = aPIError.getAnyErrorMessage();
              _undefined = anyErrorMessage;
              if (anyErrorMessage == null) {
                _undefined = undefined;
              }
              reason = _undefined;
              const obj13 = { reason, username_error: true, location: closure_130_1, one_click_flow: closure_130_3 };
              const obj6 = str(reason[5]);
              obj6.track(constants.POMELO_ERRORS, obj13);
              const obj15 = { username: closure_130_0, type: "UNIQUE_USERNAME_ATTEMPT_FAILURE", error: tmp45, statusCode: aPIError.status, retryAfter: aPIError.retryAfter };
              tmp45 = undefined;
              const dispatch = str(reason[3]).dispatch;
              const tmp42 = str(reason[3]);
              if (null != aPIError.status) {
                if (aPIError.status < 500) {
                  if (401 !== aPIError.status) {
                    tmp45 = reason;
                  }
                }
              }
              dispatch(obj15);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              constants = 0;
              c6 = 3;
              const obj17 = { value, done: true };
              return obj17;
            } else {
              _undefined = value;
              if (_undefined.body.taken) {
                let obj = str(reason[5]);
                const obj18 = { reason: "already_taken", username_error: true, location: closure_130_1, one_click_flow: closure_130_3 };
                obj.track(constants.POMELO_ERRORS, obj18);
              }
              const obj19 = { type: "UNIQUE_USERNAME_ATTEMPT_SUCCESS", username: closure_130_0, taken: _undefined.body.taken };
              const obj3 = str(reason[3]);
              obj3.dispatch(obj19);
              constants = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp68) {
          closure_3 = tmp68;
          if (0 === constants) {
            c6 = 3;
            throw tmp68;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  }
};
const result = size.fileFinishedImporting("modules/unique_usernames/UniqueUsernamesActionCreators.tsx");

export default obj;
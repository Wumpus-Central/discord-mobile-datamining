// === Module 11506: SafetyHubActionCreators ===

// Module 11506 (SafetyHubActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SafetyHubStore from "SafetyHubStore" /* 8139 */;
import SafetyHubConstants from "SafetyHubConstants" /* 8126 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c0, suspendedUserToken;

let metroImportAll;
let metroImportDefault;
let metroRequire;
const f108164 = (filename) => {
  filename = filename.filename;
  obj = closure_1_0(closure_1_2[7]);
  let isImageFileResult = obj.isImageFile(filename);
  if (!isImageFileResult) {
    const tmpResult = closure_1_0(closure_1_2[7]);
    isImageFileResult = tmpResult.isVideoFile(filename);
  }
  return isImageFileResult;
};
function getSafetyHubData() {
  return obj(...arguments);
}
let obj = function _getSafetyHubData() {
  obj = _asyncToGenerator(async () => {
    let nextPromise;
    let obj3;
    let obj5;
    let obj6;
    if (c0 === 2) {
      c0 = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let SAFETY_HUB;
            let postResult;
            const obj10 = DispatcherDefault;
            const dispatchResult = obj10.dispatch({ type: "SAFETY_HUB_FETCH_START" });
            suspendedUserToken = suspendedUserToken.getSuspendedUserToken();
            if (null != suspendedUserToken) {
              SAFETY_HUB = constants.SAFETY_HUB_SUSPENDED;
            } else {
              SAFETY_HUB = constants.SAFETY_HUB;
            }
            if (null != suspendedUserToken) {
              const HTTP2 = HTTPUtils.HTTP;
              const request = { url: SAFETY_HUB, body: obj5, rejectWithError: obj6.rejectWithMigratedError() };
              obj5 = { token: suspendedUserToken };
              const post = HTTP2.post;
              obj6 = HTTPUtils;
              postResult = post(request);
            } else {
              const HTTP = HTTPUtils.HTTP;
              const obj7 = { url: SAFETY_HUB, rejectWithError: obj3.rejectWithMigratedError() };
              const get = HTTP.get;
              obj3 = HTTPUtils;
              postResult = get(obj7);
            }
            c1 = 1;
            c0 = 1;
            const obj8 = {
              value: nextPromise.catch((error) => {
                        let str;
                        const dispatch = closure_1_1(closure_1_2[5]).dispatch;
                        closure_1_1(closure_1_2[5]);
                        if (error != null) {
                          const body = error.body;
                          if (body != null) {
                            str = body.message;
                          }
                        }
                        if (str == null) {
                          str = "Unknown error";
                        }
                        dispatch({ type: "SAFETY_HUB_FETCH_FAILURE", error: str });
                      }),
              done: false
            };
            nextPromise = postResult.then((body) => {
              let account_standing;
              let appeal_eligibility;
              let classifications;
              let expressive_modal_v2_enabled;
              let guild_classifications;
              let is_appeal_eligible;
              let is_dsa_eligible;
              let manual_review_decided_underage;
              let manual_review_fallback_enabled;
              let show_expressive_modal_subtitle_alt;
              let username;
              ({ classifications, guild_classifications, appeal_eligibility, expressive_modal_v2_enabled, show_expressive_modal_subtitle_alt, manual_review_fallback_enabled, manual_review_decided_underage, account_standing, is_dsa_eligible, username, is_appeal_eligible } = body.body);
              const mapped = classifications.map((flagged_content) => {
                if (null != flagged_content.flagged_content) {
                  if (flagged_content.flagged_content.length > 0) {
                    let items;
                    const first = flagged_content.flagged_content[0];
                    const attachments = first.attachments;
                    first.attachments = attachments.filter(f108164);
                    obj = closure_1_0(closure_1_2[8]);
                    if (obj.isFlaggedContentEmpty(first)) {
                      items = [];
                    } else {
                      items = [first];
                    }
                    flagged_content.flagged_content = items;
                  }
                }
                return flagged_content;
              });
              const dispatch = closure_1_1(closure_1_2[5]).dispatch;
              const concat = mapped.concat;
              closure_1_1(closure_1_2[5]);
              if (guild_classifications == null) {
                guild_classifications = [];
              }
              obj = { type: "SAFETY_HUB_FETCH_SUCCESS", classifications: concat(guild_classifications), accountStanding: account_standing, isDsaEligible: is_dsa_eligible, username, isAppealEligible: is_appeal_eligible, appealEligibility: appeal_eligibility, expressiveModalV2Enabled: expressive_modal_v2_enabled, showExpressiveModalSubtitleAlt: show_expressive_modal_subtitle_alt, manualReviewFallbackEnabled: manual_review_fallback_enabled, manualReviewDecidedUnderage: manual_review_decided_underage };
              if (appeal_eligibility == null) {
                appeal_eligibility = [];
              }
              if (expressive_modal_v2_enabled == null) {
                expressive_modal_v2_enabled = false;
              }
              if (show_expressive_modal_subtitle_alt == null) {
                show_expressive_modal_subtitle_alt = false;
              }
              if (manual_review_fallback_enabled == null) {
                manual_review_fallback_enabled = false;
              }
              if (manual_review_decided_underage == null) {
                manual_review_decided_underage = false;
              }
              dispatch(obj);
            });
            return obj8;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c0 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp8) {
        c0 = 3;
        throw tmp8;
      }
    }
  });
  return obj(...arguments);
};
obj = function _getSafetyHubDataForClassification() {
  obj = _asyncToGenerator(async (classificationId) => {
    let c2 = 0;
    let c1 = 0;
    return (async (arg0) => {
      let nextPromise;
      let obj3;
      let obj6;
      let obj7;
      if (c1 === 2) {
        c1 = 3;
        let str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              let obj4 = { value, done: true };
              return obj4;
            } else {
              let SAFETY_HUB;
              let postResult;
              let obj5 = { type: "SAFETY_HUB_FETCH_CLASSIFICATION_START", classificationId };
              const obj10 = DispatcherDefault;
              obj10.dispatch(obj5);
              suspendedUserToken = suspendedUserToken.getSuspendedUserToken();
              if (null != suspendedUserToken) {
                SAFETY_HUB = constants.SAFETY_HUB_SUSPENDED;
              } else {
                SAFETY_HUB = constants.SAFETY_HUB;
              }
              if (null != suspendedUserToken) {
                const HTTP2 = HTTPUtils.HTTP;
                const request = { url: SAFETY_HUB, body: obj7, rejectWithError: obj6.rejectWithMigratedError() };
                const post = HTTP2.post;
                obj7 = { token: suspendedUserToken };
                obj6 = HTTPUtils;
                postResult = post(request);
              } else {
                const HTTP = HTTPUtils.HTTP;
                const get = HTTP.get;
                const obj8 = { url: SAFETY_HUB, rejectWithError: obj3.rejectWithMigratedError() };
                obj3 = HTTPUtils;
                postResult = get(obj8);
              }
              c2 = 1;
              c1 = 1;
              const obj9 = {
                value: nextPromise.catch((error) => {
                          let str;
                          const dispatch = closure_2_1(closure_2_2[5]).dispatch;
                          closure_2_1(closure_2_2[5]);
                          if (error != null) {
                            const body = error.body;
                            if (body != null) {
                              str = body.message;
                            }
                          }
                          if (str == null) {
                            str = "Unknown error";
                          }
                          obj = { type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE", error: str, classificationId };
                          dispatch(obj);
                        }),
                done: false
              };
              nextPromise = postResult.then((body) => {
                let account_standing;
                let classifications;
                let is_appeal_eligible;
                let is_dsa_eligible;
                let username;
                ({ classifications, account_standing, is_dsa_eligible, username, is_appeal_eligible } = body.body);
                const found = classifications.find((id) => id.id === classificationId);
                if (null != found) {
                  if (null != found.flagged_content) {
                    if (found.flagged_content.length > 0) {
                      let items;
                      const first = found.flagged_content[0];
                      const attachments = first.attachments;
                      first.attachments = attachments.filter(f108164);
                      const obj3 = closure_2_0(closure_2_2[8]);
                      if (obj3.isFlaggedContentEmpty(first)) {
                        items = [];
                      } else {
                        items = [first];
                      }
                      found.flagged_content = items;
                    }
                  }
                  const obj2 = { type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS", classification: found, accountStanding: account_standing, isDsaEligible: is_dsa_eligible, username, isAppealEligible: is_appeal_eligible };
                  const obj4 = closure_2_1(closure_2_2[5]);
                  obj4.dispatch(obj2);
                } else {
                  const obj5 = { type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE", error: "Classification not found.", classificationId };
                  obj = closure_2_1(closure_2_2[5]);
                  obj.dispatch(obj5);
                }
              });
              return obj9;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c1 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp8) {
          c1 = 3;
          throw tmp8;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _requestReview() {
  obj = _asyncToGenerator(async (arg0, signal, user_input) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c3 = 0;
    return (async (arg0, value, arg2) => {
      let nextPromise;
      let obj4;
      let obj5;
      let obj6;
      let obj7;
      if (c3 === 2) {
        c3 = 3;
        let str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              let result;
              let put2Result;
              let tmp8;
              suspendedUserToken = suspendedUserToken.getSuspendedUserToken();
              if (null != suspendedUserToken) {
                result = Endpoints.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(closure_0);
              } else {
                result = Endpoints.SAFETY_HUB_REQUEST_REVIEW(closure_0);
              }
              if (null != suspendedUserToken) {
                const HTTP2 = HTTPUtils.HTTP;
                const request = { url: result, body: obj5, rejectWithError: obj7.rejectWithMigratedError() };
                const put2 = HTTP2.put;
                obj5 = { signal, user_input, token: suspendedUserToken };
                obj7 = HTTPUtils;
                put2Result = put2(request);
                tmp8 = dependencyMap;
              } else {
                tmp8 = dependencyMap;
                const HTTP = HTTPUtils.HTTP;
                const request1 = { url: result, body: obj6, rejectWithError: obj4.rejectWithMigratedError() };
                const put = HTTP.put;
                obj6 = { signal, user_input };
                obj4 = HTTPUtils;
                put2Result = put(request1);
              }
              const obj8 = require("Dispatcher");
              obj8.dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_START" });
              c4 = 1;
              c3 = 1;
              const obj9 = {
                value: nextPromise.catch((error) => {
                          let str;
                          const dispatch = signal(user_input[5]).dispatch;
                          signal(user_input[5]);
                          if (error != null) {
                            const body = error.body;
                            if (body != null) {
                              str = body.message;
                            }
                          }
                          if (str == null) {
                            str = "Unknown error";
                          }
                          dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE", error: str });
                          throw error;
                        }),
                done: false
              };
              nextPromise = put2Result.then(() => {
                obj = signal(user_input[5]);
                const obj2 = { type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS", classificationId };
                obj.dispatch(obj2);
              });
              return obj9;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp13) {
          c3 = 3;
          throw tmp13;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _requestSuspendedUserAgeVerification() {
  obj = _asyncToGenerator(async (from_classification_id) => {
    let c2 = 0;
    let c1 = 0;
    return (async (arg0) => {
      let nextPromise;
      let obj4;
      let obj8;
      if (c1 === 2) {
        c1 = 3;
        let str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              return { value, done: true };
            } else {
              const obj5 = DispatcherDefault;
              obj5.dispatch({ type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START" });
              suspendedUserToken = suspendedUserToken.getSuspendedUserToken();
              const SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION = constants.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION, body: obj4, rejectWithError: obj8.rejectWithMigratedError() };
              const post = HTTP.post;
              obj4 = { token: suspendedUserToken, from_classification_id };
              obj8 = HTTPUtils;
              c2 = 1;
              c1 = 1;
              const postResult = post(request);
              const obj6 = {
                value: nextPromise.catch((error) => {
                          let str;
                          const dispatch = closure_1_1(closure_1_2[5]).dispatch;
                          closure_1_1(closure_1_2[5]);
                          if (error != null) {
                            const body = error.body;
                            if (body != null) {
                              str = body.message;
                            }
                          }
                          if (str == null) {
                            str = "Unknown error";
                          }
                          dispatch({ type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE", error: str });
                        }),
                done: false
              };
              nextPromise = postResult.then((body) => {
                let verification_request_id;
                let verification_webview_url;
                ({ verification_request_id, verification_webview_url } = body.body);
                obj = closure_1_1(closure_1_2[5]);
                obj.dispatch({ type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS", verificationRequestId: verification_request_id, verificationWebviewUrl: verification_webview_url });
              });
              return obj6;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c1 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp4) {
          c1 = 3;
          throw tmp4;
        }
      }
    })();
  });
  return obj(...arguments);
};
function checkSuspendedUserAgeVerification() {
  return obj(...arguments);
}
obj = function _checkSuspendedUserAgeVerification() {
  let ageCheckAttempts;
  obj = _asyncToGenerator(async () => {
    let nextPromise;
    let obj4;
    let obj8;
    if (c0 === 2) {
      c0 = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj5 = DispatcherDefault;
            const dispatchResult = obj5.dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START" });
            suspendedUserToken = suspendedUserToken.getSuspendedUserToken();
            const ageCheckAttempts2 = ageCheckAttempts.getAgeCheckAttempts();
            const SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION = constants.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION, body: obj4, rejectWithError: obj8.rejectWithMigratedError() };
            obj4 = { token: suspendedUserToken };
            const post = HTTP.post;
            obj8 = HTTPUtils;
            const postResult = post(request);
            c1 = 1;
            c0 = 1;
            const obj6 = {
              value: nextPromise.catch((error) => {
                        let str;
                        const dispatch = closure_1_1(closure_1_2[5]).dispatch;
                        closure_1_1(closure_1_2[5]);
                        if (error != null) {
                          const body = error.body;
                          if (body != null) {
                            str = body.message;
                          }
                        }
                        if (str == null) {
                          str = "Unknown error";
                        }
                        dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE", error: str });
                      }),
              done: false
            };
            nextPromise = postResult.then((body) => {
              const success = body.body.success;
              const tmp = !success && closure_0 < closure_2_7;
              if (tmp) {
                const _setTimeout = setTimeout;
                const timerId = setTimeout(() => closure_1_15(), closure_2_6);
              }
              obj = closure_2_1(closure_2_2[5]);
              obj.dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS", success });
            });
            return obj6;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c0 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp4) {
        c0 = 3;
        throw tmp4;
      }
    }
  });
  return obj(...arguments);
};
function checkSuspendedUserAgeVerificationV2() {
  return obj(...arguments);
}
obj = function _checkSuspendedUserAgeVerificationV() {
  let ageCheckAttempts;
  obj = _asyncToGenerator(async (requested_at) => {
    let c2 = 0;
    let c1 = 0;
    return (async (arg0) => {
      let nextPromise;
      let obj4;
      let obj8;
      if (c1 === 2) {
        c1 = 3;
        let str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              const obj5 = DispatcherDefault;
              obj5.dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START" });
              suspendedUserToken = suspendedUserToken.getSuspendedUserToken();
              const ageCheckAttempts2 = ageCheckAttempts.getAgeCheckAttempts();
              const SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION_V2 = Endpoints.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION_V2;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION_V2, body: obj4, rejectWithError: obj8.rejectWithMigratedError() };
              const post = HTTP.post;
              obj4 = { token: suspendedUserToken, requested_at };
              obj8 = HTTPUtils;
              c2 = 1;
              c1 = 1;
              const postResult = post(request);
              const obj6 = {
                value: nextPromise.catch((error) => {
                          let str;
                          const dispatch = closure_1_1(closure_1_2[5]).dispatch;
                          closure_1_1(closure_1_2[5]);
                          if (error != null) {
                            const body = error.body;
                            if (body != null) {
                              str = body.message;
                            }
                          }
                          if (str == null) {
                            str = "Unknown error";
                          }
                          dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE", error: str });
                        }),
                done: false
              };
              nextPromise = postResult.then((body) => {
                const status = body.body.status;
                if (status !== constants.PENDING) {
                  const tmp10 = status !== constants.UNBANNED && status !== constants.VERIFIED_OTHER_VIOLATIONS_REMAIN;
                  if (!tmp10) {
                    closure_2_10();
                  }
                  const obj3 = { type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS_V2", status };
                  const obj2 = closure_2_1(closure_2_2[5]);
                  obj2.dispatch(obj3);
                } else if (closure_1 < closure_2_7) {
                  const _setTimeout = setTimeout;
                  const timerId = setTimeout(() => closure_2_17(closure_1_0), closure_2_6);
                } else {
                  obj = closure_2_1(closure_2_2[5]);
                  obj.dispatch({ type: "SAFETY_HUB_RESET_AGE_CHECK_STATUS" });
                }
              });
              return obj6;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c1 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp4) {
          c1 = 3;
          throw tmp4;
        }
      }
    })();
  });
  return obj(...arguments);
};
({ AGE_CHECK_POLL_INTERVAL_MS: metroRequire, AGE_CHECK_MAX_POLL_ATTEMPTS: metroImportDefault, SuspendedAgeCheckStatus: metroImportAll } = SafetyHubConstants);
const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("modules/safety_hub/SafetyHubActionCreators.tsx");

export { getSafetyHubData };
export const getSafetyHubDataForClassification = function getSafetyHubDataForClassification() {
  return obj(...arguments);
};
export const requestReview = function requestReview() {
  return obj(...arguments);
};
export const requestSuspendedUserAgeVerification = function requestSuspendedUserAgeVerification() {
  return obj(...arguments);
};
export { checkSuspendedUserAgeVerification };
export { checkSuspendedUserAgeVerificationV2 };
export const resetAgeCheckStatus = function resetAgeCheckStatus() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "SAFETY_HUB_RESET_AGE_CHECK_STATUS" });
};
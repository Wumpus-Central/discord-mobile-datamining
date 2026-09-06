// === Module 11881: SafetyHubActionCreators ===

// Module 11881 (SafetyHubActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SafetyHubStore from "SafetyHubStore" /* 8430 */;

require = fn;
function getSafetyHubData() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _getSafetyHubData() {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          let result = dependencyMap;
          DispatcherDefault.dispatch({ type: "SAFETY_HUB_FETCH_START" });
          suspendedUserToken = suspendedUserToken.getSuspendedUserToken();
          if (null != suspendedUserToken) {
            let SAFETY_HUB_SUSPENDED = constants.SAFETY_HUB_SUSPENDED;
          } else {
            SAFETY_HUB_SUSPENDED = constants.SAFETY_HUB;
          }
          if (null != suspendedUserToken) {
            const HTTP2 = require("HTTPUtils").HTTP;
            const request = { url: SAFETY_HUB_SUSPENDED, body: null, rejectWithError: null };
            SAFETY_HUB_SUSPENDED = { token: suspendedUserToken };
            request.body = SAFETY_HUB_SUSPENDED;
            result = require("HTTPUtils").rejectWithMigratedError();
            request.rejectWithError = result;
            let postResult = HTTP2.post(request);
            const obj6 = require("HTTPUtils");
          } else {
            const HTTP = require("HTTPUtils").HTTP;
            const obj1 = { url: SAFETY_HUB_SUSPENDED, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
            postResult = HTTP.get(obj1);
            const obj4 = require("HTTPUtils");
          }
          postResult.then((body) => {
            ({ classifications, guild_classifications, appeal_eligibility, expressive_modal_v2_enabled, show_expressive_modal_subtitle_alt, account_standing, is_dsa_eligible, username, is_appeal_eligible } = body.body);
            const mapped = classifications.map((flagged_content) => {
              if (null != flagged_content.flagged_content) {
                if (flagged_content.flagged_content.length > 0) {
                  const first = flagged_content.flagged_content[0];
                  const attachments = first.attachments;
                  first.attachments = attachments.filter((filename) => {
                    filename = filename.filename;
                    let isImageFileResult = closure_1_0(dependencyMap[7]).isImageFile(filename);
                    if (!isImageFileResult) {
                      isImageFileResult = closure_1_0(dependencyMap[7]).isVideoFile(filename);
                      const tmpResult = closure_1_0(dependencyMap[7]);
                    }
                    return isImageFileResult;
                  });
                  if (obj.isFlaggedContentEmpty(first)) {
                    let items = [];
                  } else {
                    items = [first];
                  }
                  flagged_content.flagged_content = items;
                  obj = closure_1_0(dependencyMap[8]);
                }
              }
              return flagged_content;
            });
            if (guild_classifications == null) {
              guild_classifications = [];
            }
            let obj = { type: "SAFETY_HUB_FETCH_SUCCESS", classifications: mapped.concat(guild_classifications), accountStanding: account_standing, isDsaEligible: is_dsa_eligible, username, isAppealEligible: is_appeal_eligible, appealEligibility: null, expressiveModalV2Enabled: null, showExpressiveModalSubtitleAlt: null };
            if (appeal_eligibility == null) {
              appeal_eligibility = [];
            }
            obj.appealEligibility = appeal_eligibility;
            if (expressive_modal_v2_enabled == null) {
              expressive_modal_v2_enabled = false;
            }
            obj.expressiveModalV2Enabled = expressive_modal_v2_enabled;
            if (show_expressive_modal_subtitle_alt == null) {
              show_expressive_modal_subtitle_alt = false;
            }
            obj.showExpressiveModalSubtitleAlt = show_expressive_modal_subtitle_alt;
            closure_1_1(573).dispatch(obj);
          }).catch((error) => {
            let str;
            if (error != null) {
              const body = error.body;
              if (body != null) {
                str = body.message;
              }
            }
            if (str == null) {
              str = "Unknown error";
            }
            closure_1_1(573).dispatch({ type: "SAFETY_HUB_FETCH_FAILURE", error: str });
          });
          c1 = 1;
          c0 = 1;
          const nextPromise = postResult.then((body) => {
            ({ classifications, guild_classifications, appeal_eligibility, expressive_modal_v2_enabled, show_expressive_modal_subtitle_alt, account_standing, is_dsa_eligible, username, is_appeal_eligible } = body.body);
            const mapped = classifications.map((flagged_content) => {
              if (null != flagged_content.flagged_content) {
                if (flagged_content.flagged_content.length > 0) {
                  const first = flagged_content.flagged_content[0];
                  const attachments = first.attachments;
                  first.attachments = attachments.filter((filename) => {
                    filename = filename.filename;
                    let isImageFileResult = closure_1_0(dependencyMap[7]).isImageFile(filename);
                    if (!isImageFileResult) {
                      isImageFileResult = closure_1_0(dependencyMap[7]).isVideoFile(filename);
                      const tmpResult = closure_1_0(dependencyMap[7]);
                    }
                    return isImageFileResult;
                  });
                  if (obj.isFlaggedContentEmpty(first)) {
                    let items = [];
                  } else {
                    items = [first];
                  }
                  flagged_content.flagged_content = items;
                  obj = closure_1_0(dependencyMap[8]);
                }
              }
              return flagged_content;
            });
            if (guild_classifications == null) {
              guild_classifications = [];
            }
            let obj = { type: "SAFETY_HUB_FETCH_SUCCESS", classifications: mapped.concat(guild_classifications), accountStanding: account_standing, isDsaEligible: is_dsa_eligible, username, isAppealEligible: is_appeal_eligible, appealEligibility: null, expressiveModalV2Enabled: null, showExpressiveModalSubtitleAlt: null };
            if (appeal_eligibility == null) {
              appeal_eligibility = [];
            }
            obj.appealEligibility = appeal_eligibility;
            if (expressive_modal_v2_enabled == null) {
              expressive_modal_v2_enabled = false;
            }
            obj.expressiveModalV2Enabled = expressive_modal_v2_enabled;
            if (show_expressive_modal_subtitle_alt == null) {
              show_expressive_modal_subtitle_alt = false;
            }
            obj.showExpressiveModalSubtitleAlt = show_expressive_modal_subtitle_alt;
            closure_1_1(573).dispatch(obj);
          });
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
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp11) {
      c0 = tmp;
      throw tmp11;
    }
  }
};
let closure_12 = async function _getSafetyHubDataForClassification() {
  c2 = 0;
  c1 = 0;
  return (async (arg0) => {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            let result = dependencyMap;
            const obj1 = { type: "SAFETY_HUB_FETCH_CLASSIFICATION_START", classificationId };
            DispatcherDefault.dispatch(obj1);
            suspendedUserToken = suspendedUserToken.getSuspendedUserToken();
            if (null != suspendedUserToken) {
              let SAFETY_HUB_SUSPENDED = constants.SAFETY_HUB_SUSPENDED;
            } else {
              SAFETY_HUB_SUSPENDED = constants.SAFETY_HUB;
            }
            if (null != suspendedUserToken) {
              const HTTP2 = require("HTTPUtils").HTTP;
              const request = { url: SAFETY_HUB_SUSPENDED, body: null, rejectWithError: null };
              SAFETY_HUB_SUSPENDED = { token: suspendedUserToken };
              request.body = SAFETY_HUB_SUSPENDED;
              result = require("HTTPUtils").rejectWithMigratedError();
              request.rejectWithError = result;
              let postResult = HTTP2.post(request);
              const obj6 = require("HTTPUtils");
            } else {
              const HTTP = require("HTTPUtils").HTTP;
              const obj2 = { url: SAFETY_HUB_SUSPENDED, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
              postResult = HTTP.get(obj2);
              let obj4 = require("HTTPUtils");
            }
            postResult.then((body) => {
              ({ classifications, account_standing, is_dsa_eligible, username, is_appeal_eligible } = body.body);
              const found = classifications.find((id) => id.id === classificationId);
              if (null != found) {
                if (null != found.flagged_content) {
                  if (found.flagged_content.length > 0) {
                    const first = found.flagged_content[0];
                    const attachments = first.attachments;
                    first.attachments = attachments.filter((filename) => {
                      filename = filename.filename;
                      let isImageFileResult = closure_1_0(dependencyMap[7]).isImageFile(filename);
                      if (!isImageFileResult) {
                        isImageFileResult = closure_1_0(dependencyMap[7]).isVideoFile(filename);
                        const tmpResult = closure_1_0(dependencyMap[7]);
                      }
                      return isImageFileResult;
                    });
                    if (obj3.isFlaggedContentEmpty(first)) {
                      let items = [];
                    } else {
                      items = [first];
                    }
                    found.flagged_content = items;
                    obj3 = classificationId(8418);
                  }
                }
                let obj = { type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS", classification: found, accountStanding: account_standing, isDsaEligible: is_dsa_eligible, username, isAppealEligible: is_appeal_eligible };
                c1(573).dispatch(obj);
                const obj4 = c1(573);
              } else {
                c1(573);
                obj = { type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE", error: "Classification not found.", classificationId };
                obj.dispatch(obj);
              }
            }).catch((error) => {
              let obj = c1(573);
              let str;
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
              obj.dispatch(obj);
            });
            c2 = 1;
            c1 = 1;
            const nextPromise = postResult.then((body) => {
              ({ classifications, account_standing, is_dsa_eligible, username, is_appeal_eligible } = body.body);
              const found = classifications.find((id) => id.id === classificationId);
              if (null != found) {
                if (null != found.flagged_content) {
                  if (found.flagged_content.length > 0) {
                    const first = found.flagged_content[0];
                    const attachments = first.attachments;
                    first.attachments = attachments.filter((filename) => {
                      filename = filename.filename;
                      let isImageFileResult = closure_1_0(dependencyMap[7]).isImageFile(filename);
                      if (!isImageFileResult) {
                        isImageFileResult = closure_1_0(dependencyMap[7]).isVideoFile(filename);
                        const tmpResult = closure_1_0(dependencyMap[7]);
                      }
                      return isImageFileResult;
                    });
                    if (obj3.isFlaggedContentEmpty(first)) {
                      let items = [];
                    } else {
                      items = [first];
                    }
                    found.flagged_content = items;
                    obj3 = classificationId(8418);
                  }
                }
                let obj = { type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS", classification: found, accountStanding: account_standing, isDsaEligible: is_dsa_eligible, username, isAppealEligible: is_appeal_eligible };
                c1(573).dispatch(obj);
                const obj4 = c1(573);
              } else {
                c1(573);
                obj = { type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE", error: "Classification not found.", classificationId };
                obj.dispatch(obj);
              }
            });
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp11) {
        c1 = tmp;
        throw tmp11;
      }
    }
  })();
};
let closure_13 = async function _requestReview(arg0) {
  closure_0 = arg0;
  closure_2 = arg2;
  c4 = 0;
  c3 = 0;
  return (async (arg0, value, arg2) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            suspendedUserToken = suspendedUserToken.getSuspendedUserToken();
            if (null != suspendedUserToken) {
              let result = Endpoints.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(classificationId);
            } else {
              result = Endpoints.SAFETY_HUB_REQUEST_REVIEW(classificationId);
            }
            if (null != suspendedUserToken) {
              const HTTP2 = HTTPUtils.HTTP;
              const request = { url: result, body: null, rejectWithError: null };
              const obj1 = { signal, user_input: dependencyMap, token: suspendedUserToken };
              request.body = obj1;
              result = HTTPUtils.rejectWithMigratedError();
              request.rejectWithError = result;
              let putResult = HTTP2.put(request);
            } else {
              const HTTP = HTTPUtils.HTTP;
              const request1 = { url: result, body: null, rejectWithError: null };
              const obj2 = { signal, user_input: dependencyMap };
              request1.body = obj2;
              request1.rejectWithError = HTTPUtils.rejectWithMigratedError();
              putResult = HTTP.put(request1);
            }
            DispatcherDefault.dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_START" });
            putResult.then(() => {
              closure_1(573);
              const obj = { type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS", classificationId };
              obj.dispatch(obj);
            }).catch((error) => {
              let str;
              if (error != null) {
                const body = error.body;
                if (body != null) {
                  str = body.message;
                }
              }
              if (str == null) {
                str = "Unknown error";
              }
              signal(573).dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE", error: str });
              throw error;
            });
            c4 = 1;
            c3 = 1;
            const nextPromise = putResult.then(() => {
              closure_1(573);
              const obj = { type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS", classificationId };
              obj.dispatch(obj);
            });
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp15) {
        c3 = tmp;
        throw tmp15;
      }
    }
  })();
};
let closure_14 = async function _requestSuspendedUserAgeVerification() {
  c2 = 0;
  c1 = 0;
  return (async (arg0) => {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            DispatcherDefault.dispatch({ type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START" });
            suspendedUserToken = suspendedUserToken.getSuspendedUserToken();
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION, body: null, rejectWithError: null };
            const obj1 = { token: suspendedUserToken, from_classification_id };
            request.body = obj1;
            request.rejectWithError = HTTPUtils.rejectWithMigratedError();
            const postResult = HTTP.post(request);
            c2 = 1;
            c1 = 1;
            const obj2 = {
              value: HTTP.post(request).then((body) => {
                        ({ verification_request_id, verification_webview_url } = body.body);
                        closure_1_1(573).dispatch({ type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS", verificationRequestId: verification_request_id, verificationWebviewUrl: verification_webview_url });
                      }).catch((error) => {
                        let str;
                        if (error != null) {
                          const body = error.body;
                          if (body != null) {
                            str = body.message;
                          }
                        }
                        if (str == null) {
                          str = "Unknown error";
                        }
                        closure_1_1(573).dispatch({ type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE", error: str });
                      }),
              done: false
            };
            return obj2;
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp5) {
        c1 = tmp;
        throw tmp5;
      }
    }
  })();
};
function checkSuspendedUserAgeVerification() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_16 = async function _checkSuspendedUserAgeVerification() {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          DispatcherDefault.dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START" });
          suspendedUserToken = suspendedUserToken.getSuspendedUserToken();
          const ageCheckAttempts2 = ageCheckAttempts.getAgeCheckAttempts();
          const HTTP = HTTPUtils.HTTP;
          const request = { url: constants.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION, body: null, rejectWithError: null };
          const obj1 = { token: suspendedUserToken };
          request.body = obj1;
          request.rejectWithError = HTTPUtils.rejectWithMigratedError();
          const postResult = HTTP.post(request);
          c1 = 1;
          c0 = 1;
          const obj2 = {
            value: HTTP.post(request).then((body) => {
                      const success = body.body.success;
                      let tmp = !success;
                      if (!success) {
                        tmp = closure_0 < closure_2_7;
                      }
                      if (tmp) {
                        const _setTimeout = setTimeout;
                        const timerId = setTimeout(() => closure_1_15(), closure_2_6);
                      }
                      c1(dependencyMap[5]).dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS", success });
                      const obj = c1(dependencyMap[5]);
                    }).catch((error) => {
                      let str;
                      if (error != null) {
                        const body = error.body;
                        if (body != null) {
                          str = body.message;
                        }
                      }
                      if (str == null) {
                        str = "Unknown error";
                      }
                      closure_1_1(closure_1_2[5]).dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE", error: str });
                    }),
            done: false
          };
          return obj2;
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
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp5) {
      c0 = tmp;
      throw tmp5;
    }
  }
};
function checkSuspendedUserAgeVerificationV2() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_18 = async function _checkSuspendedUserAgeVerificationV() {
  c2 = 0;
  c1 = 0;
  return (async (arg0) => {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            DispatcherDefault.dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START" });
            suspendedUserToken = suspendedUserToken.getSuspendedUserToken();
            const ageCheckAttempts2 = ageCheckAttempts.getAgeCheckAttempts();
            const HTTP = HTTPUtils.HTTP;
            const request = { url: Endpoints.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION_V2, body: null, rejectWithError: null };
            const obj1 = { token: suspendedUserToken, requested_at };
            request.body = obj1;
            request.rejectWithError = HTTPUtils.rejectWithMigratedError();
            const postResult = HTTP.post(request);
            c2 = 1;
            c1 = 1;
            let obj2 = {
              value: HTTP.post(request).then((body) => {
                        const status = body.body.status;
                        if (status !== constants.PENDING) {
                          if (!tmp10) {
                            closure_2_10();
                          }
                          let obj = { type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS_V2", status };
                          c1(573).dispatch(obj);
                          const obj2 = c1(573);
                          tmp10 = status !== constants.UNBANNED && status !== constants.VERIFIED_OTHER_VIOLATIONS_REMAIN;
                        } else if (closure_1 < closure_2_7) {
                          const _setTimeout = setTimeout;
                          const timerId = setTimeout(() => closure_2_17(closure_1_0), closure_2_6);
                        } else {
                          obj = c1(573);
                          obj.dispatch({ type: "SAFETY_HUB_RESET_AGE_CHECK_STATUS" });
                        }
                      }).catch((error) => {
                        let str;
                        if (error != null) {
                          const body = error.body;
                          if (body != null) {
                            str = body.message;
                          }
                        }
                        if (str == null) {
                          str = "Unknown error";
                        }
                        closure_1(573).dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE", error: str });
                      }),
              done: false
            };
            return obj2;
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp5) {
        c1 = tmp;
        throw tmp5;
      }
    }
  })();
};
const SafetyHubConstants = fn(8419);
({ AGE_CHECK_POLL_INTERVAL_MS: metroRequire, AGE_CHECK_MAX_POLL_ATTEMPTS: closure_7, SuspendedAgeCheckStatus: closure_8 } = SafetyHubConstants);
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("modules/safety_hub/SafetyHubActionCreators.tsx");

export { getSafetyHubData };
export const getSafetyHubDataForClassification = function getSafetyHubDataForClassification() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const requestReview = function requestReview() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const requestSuspendedUserAgeVerification = function requestSuspendedUserAgeVerification() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { checkSuspendedUserAgeVerification };
export { checkSuspendedUserAgeVerificationV2 };
export const resetAgeCheckStatus = function resetAgeCheckStatus() {
  DispatcherDefault.dispatch({ type: "SAFETY_HUB_RESET_AGE_CHECK_STATUS" });
};
// === Module 11208: _getSafetyHubData ===

// Module 11208 (_getSafetyHubData)
import dispatcher from "dispatcher";
import fetchFingerprint from "fetchFingerprint";
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction";
import SafetyHubView from "SafetyHubView";
import { Endpoints } from "ME";

let closure_6;
let error;
const require = arg1;
function _getSafetyHubData() {
  const self = this;
  const tmp = callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        v0 = 2;
        if (0 === v02) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let result = outer1_2;
            v02(outer1_2[5]).dispatch({ type: "SAFETY_HUB_FETCH_START" });
            const suspendedUserToken = outer1_4.getSuspendedUserToken();
            if (null != suspendedUserToken) {
              let SAFETY_HUB_SUSPENDED = outer1_8.SAFETY_HUB_SUSPENDED;
            } else {
              SAFETY_HUB_SUSPENDED = outer1_8.SAFETY_HUB;
            }
            if (null != suspendedUserToken) {
              const HTTP2 = v0(result[6]).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: null };
              obj1[0] = SAFETY_HUB_SUSPENDED;
              SAFETY_HUB_SUSPENDED = { token: null };
              SAFETY_HUB_SUSPENDED[0] = suspendedUserToken;
              obj1[1] = SAFETY_HUB_SUSPENDED;
              result = v0(result[6]).rejectWithMigratedError();
              obj1[2] = result;
              let postResult = HTTP2.post(obj1);
              const obj6 = v0(result[6]);
            } else {
              const HTTP = v0(result[6]).HTTP;
              const obj2 = { url: null, rejectWithError: null };
              obj2[0] = SAFETY_HUB_SUSPENDED;
              obj2[1] = v0(result[6]).rejectWithMigratedError();
              postResult = HTTP.get(obj2);
              const obj4 = v0(result[6]);
            }
            const obj9 = v02(outer1_2[5]);
            postResult.then((body) => {
              let account_standing;
              let appeal_eligibility;
              let classifications;
              let guild_classifications;
              let is_appeal_eligible;
              let is_dsa_eligible;
              let username;
              ({ classifications, guild_classifications, appeal_eligibility, account_standing, is_dsa_eligible, username, is_appeal_eligible } = body.body);
              const mapped = classifications.map((flagged_content) => {
                if (null != flagged_content.flagged_content) {
                  if (flagged_content.flagged_content.length > 0) {
                    const first = flagged_content.flagged_content[0];
                    const attachments = first.attachments;
                    first.attachments = attachments.filter((filename) => {
                      filename = filename.filename;
                      let isImageFileResult = callback(table[7]).isImageFile(filename);
                      if (!isImageFileResult) {
                        isImageFileResult = callback(table[7]).isVideoFile(filename);
                        const tmpResult = callback(table[7]);
                      }
                      return isImageFileResult;
                    });
                    if (obj.isFlaggedContentEmpty(first)) {
                      let items = [];
                    } else {
                      items = [first];
                    }
                    flagged_content.flagged_content = items;
                    obj = callback(table[8]);
                  }
                }
                return flagged_content;
              });
              if (guild_classifications == null) {
                guild_classifications = [];
              }
              let obj = { type: "SAFETY_HUB_FETCH_SUCCESS", classifications: mapped.concat(guild_classifications), accountStanding: account_standing, isDsaEligible: is_dsa_eligible, username, isAppealEligible: is_appeal_eligible, appealEligibility: null };
              if (appeal_eligibility == null) {
                appeal_eligibility = [];
              }
              obj[6] = appeal_eligibility;
              v1(709).dispatch(obj);
            }).catch((body) => {
              let str;
              if (body != null) {
                body = body.body;
                if (body != null) {
                  str = body.message;
                }
              }
              if (str == null) {
                str = "Unknown error";
              }
              v1(709).dispatch({ type: "SAFETY_HUB_FETCH_FAILURE", error: str });
            });
            v02 = 1;
            v0 = 1;
            const nextPromise = postResult.then((body) => {
              let account_standing;
              let appeal_eligibility;
              let classifications;
              let guild_classifications;
              let is_appeal_eligible;
              let is_dsa_eligible;
              let username;
              ({ classifications, guild_classifications, appeal_eligibility, account_standing, is_dsa_eligible, username, is_appeal_eligible } = body.body);
              const mapped = classifications.map((flagged_content) => {
                if (null != flagged_content.flagged_content) {
                  if (flagged_content.flagged_content.length > 0) {
                    const first = flagged_content.flagged_content[0];
                    const attachments = first.attachments;
                    first.attachments = attachments.filter((filename) => {
                      filename = filename.filename;
                      let isImageFileResult = callback(table[7]).isImageFile(filename);
                      if (!isImageFileResult) {
                        isImageFileResult = callback(table[7]).isVideoFile(filename);
                        const tmpResult = callback(table[7]);
                      }
                      return isImageFileResult;
                    });
                    if (obj.isFlaggedContentEmpty(first)) {
                      let items = [];
                    } else {
                      items = [first];
                    }
                    flagged_content.flagged_content = items;
                    obj = callback(table[8]);
                  }
                }
                return flagged_content;
              });
              if (guild_classifications == null) {
                guild_classifications = [];
              }
              let obj = { type: "SAFETY_HUB_FETCH_SUCCESS", classifications: mapped.concat(guild_classifications), accountStanding: account_standing, isDsaEligible: is_dsa_eligible, username, isAppealEligible: is_appeal_eligible, appealEligibility: null };
              if (appeal_eligibility == null) {
                appeal_eligibility = [];
              }
              obj[6] = appeal_eligibility;
              v1(709).dispatch(obj);
            });
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          v0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp11) {
        v0 = tmp;
        throw tmp11;
      }
    }
  });
  const _getSafetyHubData = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getSafetyHubDataForClassification() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0) {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          v0 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let result = table;
              const obj1 = { type: "SAFETY_HUB_FETCH_CLASSIFICATION_START", classificationId: null };
              obj1[1] = callback;
              v0(table[5]).dispatch(obj1);
              const suspendedUserToken = outer1_4.getSuspendedUserToken();
              if (null != suspendedUserToken) {
                let SAFETY_HUB_SUSPENDED = outer1_8.SAFETY_HUB_SUSPENDED;
              } else {
                SAFETY_HUB_SUSPENDED = outer1_8.SAFETY_HUB;
              }
              if (null != suspendedUserToken) {
                const HTTP2 = callback(result[6]).HTTP;
                const obj2 = { url: null, body: null, rejectWithError: null };
                obj2[0] = SAFETY_HUB_SUSPENDED;
                SAFETY_HUB_SUSPENDED = { token: null };
                SAFETY_HUB_SUSPENDED[0] = suspendedUserToken;
                obj2[1] = SAFETY_HUB_SUSPENDED;
                result = callback(result[6]).rejectWithMigratedError();
                obj2[2] = result;
                let postResult = HTTP2.post(obj2);
                const obj6 = callback(result[6]);
              } else {
                const HTTP = callback(result[6]).HTTP;
                let obj3 = { url: null, rejectWithError: null };
                obj3[0] = SAFETY_HUB_SUSPENDED;
                obj3 = callback(result[6]);
                obj3[1] = obj3.rejectWithMigratedError();
                postResult = HTTP.get(obj3);
              }
              const obj9 = v0(table[5]);
              postResult.then((body) => {
                let account_standing;
                let classifications;
                let is_appeal_eligible;
                let is_dsa_eligible;
                let username;
                ({ classifications, account_standing, is_dsa_eligible, username, is_appeal_eligible } = body.body);
                const found = classifications.find((id) => id.id === closure_0);
                if (null != found) {
                  if (null != found.flagged_content) {
                    if (found.flagged_content.length > 0) {
                      const first = found.flagged_content[0];
                      const attachments = first.attachments;
                      first.attachments = attachments.filter((filename) => {
                        filename = filename.filename;
                        let isImageFileResult = callback(table[7]).isImageFile(filename);
                        if (!isImageFileResult) {
                          isImageFileResult = callback(table[7]).isVideoFile(filename);
                          const tmpResult = callback(table[7]);
                        }
                        return isImageFileResult;
                      });
                      if (obj3.isFlaggedContentEmpty(first)) {
                        let items = [];
                      } else {
                        items = [first];
                      }
                      found.flagged_content = items;
                      obj3 = callback(7715);
                    }
                  }
                  let obj = { type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS", classification: null, accountStanding: null, isDsaEligible: null, username: null, isAppealEligible: null };
                  obj[1] = found;
                  obj[2] = account_standing;
                  obj[3] = is_dsa_eligible;
                  obj[4] = username;
                  obj[5] = is_appeal_eligible;
                  v3(709).dispatch(obj);
                  const obj4 = v3(709);
                } else {
                  obj = v3(709);
                  obj = { type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE", error: "Classification not found.", classificationId: null };
                  obj[2] = callback;
                  obj.dispatch(obj);
                }
              }).catch((body) => {
                let obj = v3(709);
                let str;
                if (body != null) {
                  body = body.body;
                  if (body != null) {
                    str = body.message;
                  }
                }
                if (str == null) {
                  str = "Unknown error";
                }
                obj = { type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE", error: str, classificationId: closure_0 };
                obj.dispatch(obj);
              });
              table = 1;
              v0 = 1;
              const nextPromise = postResult.then((body) => {
                let account_standing;
                let classifications;
                let is_appeal_eligible;
                let is_dsa_eligible;
                let username;
                ({ classifications, account_standing, is_dsa_eligible, username, is_appeal_eligible } = body.body);
                const found = classifications.find((id) => id.id === closure_0);
                if (null != found) {
                  if (null != found.flagged_content) {
                    if (found.flagged_content.length > 0) {
                      const first = found.flagged_content[0];
                      const attachments = first.attachments;
                      first.attachments = attachments.filter((filename) => {
                        filename = filename.filename;
                        let isImageFileResult = callback(table[7]).isImageFile(filename);
                        if (!isImageFileResult) {
                          isImageFileResult = callback(table[7]).isVideoFile(filename);
                          const tmpResult = callback(table[7]);
                        }
                        return isImageFileResult;
                      });
                      if (obj3.isFlaggedContentEmpty(first)) {
                        let items = [];
                      } else {
                        items = [first];
                      }
                      found.flagged_content = items;
                      obj3 = callback(7715);
                    }
                  }
                  let obj = { type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS", classification: null, accountStanding: null, isDsaEligible: null, username: null, isAppealEligible: null };
                  obj[1] = found;
                  obj[2] = account_standing;
                  obj[3] = is_dsa_eligible;
                  obj[4] = username;
                  obj[5] = is_appeal_eligible;
                  v3(709).dispatch(obj);
                  const obj4 = v3(709);
                } else {
                  obj = v3(709);
                  obj = { type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE", error: "Classification not found.", classificationId: null };
                  obj[2] = callback;
                  obj.dispatch(obj);
                }
              });
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            v0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp11) {
          v0 = tmp;
          throw tmp11;
        }
      }
    })();
  });
  const _getSafetyHubDataForClassification = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _requestReview() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c4 = 0;
    let c3 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c3 = 2;
          if (0 === suspendedUserToken) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              suspendedUserToken = suspendedUserToken.getSuspendedUserToken();
              if (null != suspendedUserToken) {
                let result = outer1_8.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(tmp21);
              } else {
                result = outer1_8.SAFETY_HUB_REQUEST_REVIEW(tmp21);
              }
              if (null != suspendedUserToken) {
                const HTTP2 = callback(530).HTTP;
                const obj1 = { url: null, body: null, rejectWithError: null };
                obj1[0] = result;
                const obj2 = { signal: null, user_input: null, token: null };
                obj2[0] = tmp22;
                obj2[1] = tmp23;
                obj2[2] = suspendedUserToken;
                obj1[1] = obj2;
                result = callback(530).rejectWithMigratedError();
                obj1[2] = result;
                let putResult = HTTP2.put(obj1);
                const obj7 = callback(530);
              } else {
                const HTTP = callback(530).HTTP;
                let obj3 = { url: null, body: null, rejectWithError: null };
                obj3[0] = result;
                const obj4 = { signal: null, user_input: null };
                obj4[0] = tmp22;
                obj4[1] = tmp23;
                obj3[1] = obj4;
                obj3 = callback(530);
                obj3[2] = obj3.rejectWithMigratedError();
                putResult = HTTP.put(obj3);
              }
              callback2(709).dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_START" });
              const obj8 = callback2(709);
              putResult.then(() => {
                let obj = outer1_1(outer1_2[5]);
                obj = { type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS", classificationId: closure_0 };
                obj.dispatch(obj);
              }).catch((body) => {
                let str;
                if (body != null) {
                  body = body.body;
                  if (body != null) {
                    str = body.message;
                  }
                }
                if (str == null) {
                  str = "Unknown error";
                }
                callback(table[5]).dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE", error: str });
                throw body;
              });
              suspendedUserToken = 1;
              c3 = 1;
              const nextPromise = putResult.then(() => {
                let obj = outer1_1(outer1_2[5]);
                obj = { type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS", classificationId: closure_0 };
                obj.dispatch(obj);
              });
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
  });
  const _requestReview = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _requestSuspendedUserAgeVerification() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0) {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          v0 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              v0(709).dispatch({ type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START" });
              const suspendedUserToken = outer1_4.getSuspendedUserToken();
              const HTTP = callback(530).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: null };
              obj1[0] = outer1_8.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION;
              const obj2 = { token: null, from_classification_id: null };
              obj2[0] = suspendedUserToken;
              obj2[1] = callback;
              obj1[1] = obj2;
              const obj5 = v0(709);
              obj1[2] = callback(530).rejectWithMigratedError();
              const obj8 = callback(530);
              const postResult = HTTP.post(obj1);
              dependencyMap = 1;
              v0 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1).then((body) => {
                let verification_request_id;
                let verification_webview_url;
                ({ verification_request_id, verification_webview_url } = body.body);
                v3(709).dispatch({ type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS", verificationRequestId: verification_request_id, verificationWebviewUrl: verification_webview_url });
              }).catch((body) => {
                let str;
                if (body != null) {
                  body = body.body;
                  if (body != null) {
                    str = body.message;
                  }
                }
                if (str == null) {
                  str = "Unknown error";
                }
                v3(709).dispatch({ type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE", error: str });
              });
              return obj3;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            v0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp5) {
          v0 = tmp;
          throw tmp5;
        }
      }
    })();
  });
  const _requestSuspendedUserAgeVerification = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function checkSuspendedUserAgeVerification() {
  const self = this;
  const apply = _checkSuspendedUserAgeVerification.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _checkSuspendedUserAgeVerification() {
  const self = this;
  let tmp = callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        v0 = 2;
        if (0 === v02) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            v02(outer1_2[5]).dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START" });
            const suspendedUserToken = outer1_4.getSuspendedUserToken();
            v0 = outer1_5.getAgeCheckAttempts();
            const HTTP = v0(outer1_2[6]).HTTP;
            const obj1 = { url: null, body: null, rejectWithError: null };
            obj1[0] = outer1_8.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION;
            const obj2 = { token: null };
            obj2[0] = suspendedUserToken;
            obj1[1] = obj2;
            const obj5 = v02(outer1_2[5]);
            obj1[2] = v0(outer1_2[6]).rejectWithMigratedError();
            const obj8 = v0(outer1_2[6]);
            const postResult = HTTP.post(obj1);
            v02 = 1;
            v0 = 1;
            const obj3 = { value: null, done: false };
            obj3[0] = HTTP.post(obj1).then((body) => {
              const success = body.body.success;
              let tmp = !success;
              if (!success) {
                tmp = c0 < outer1_7;
              }
              if (tmp) {
                const _setTimeout = setTimeout;
                const timerId = setTimeout(() => callback(), outer1_6);
              }
              v1(outer1_2[5]).dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS", success });
            }).catch((body) => {
              let str;
              if (body != null) {
                body = body.body;
                if (body != null) {
                  str = body.message;
                }
              }
              if (str == null) {
                str = "Unknown error";
              }
              v1(table[5]).dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE", error: str });
            });
            return obj3;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          v0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp5) {
        v0 = tmp;
        throw tmp5;
      }
    }
  });
  const _checkSuspendedUserAgeVerification = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AGE_CHECK_POLL_INTERVAL_MS: closure_6, AGE_CHECK_MAX_POLL_ATTEMPTS: error } = SafetyHubView);
let result = require("handleSafetyHubRequestAgeVerificationResetModalAction").fileFinishedImporting("modules/safety_hub/SafetyHubActionCreators.tsx");

export const getSafetyHubData = function getSafetyHubData() {
  const self = this;
  const apply = _getSafetyHubData.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getSafetyHubDataForClassification = function getSafetyHubDataForClassification(closure_0) {
  const self = this;
  const apply = _getSafetyHubDataForClassification.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const requestReview = function requestReview(arg0, outer1_0, outer1_1) {
  const self = this;
  const apply = _requestReview.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const requestSuspendedUserAgeVerification = function requestSuspendedUserAgeVerification(classificationId) {
  const self = this;
  const apply = _requestSuspendedUserAgeVerification.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { checkSuspendedUserAgeVerification };
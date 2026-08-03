// === Module 6757: requestAgeVerification ===

// Module 6757 (requestAgeVerification)
import sendRequest from "sendRequest";
import fetchFingerprint from "fetchFingerprint";
import { VerificationVendorName } from "set";
import { Endpoints } from "ME";

const require = arg1;
function requestAgeVerification(arg0) {
  const self = this;
  const apply = _requestAgeVerification.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _requestAgeVerification() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let table = tmp5;
              c1 = tmp2;
              let callback;
              c1 = undefined;
              table = undefined;
              ({ method: c0, classificationId: c1, vendor: c2 } = callback);
              c3 = 1;
              c4 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              if (obj10.isCurrentUserSuspended()) {
                const obj2 = { classificationId: null, method: null };
                obj2[0] = c1;
                obj2[1] = callback;
                c3 = 3;
                c4 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = callback3(obj2);
                return obj3;
              } else {
                c3 = 2;
                c4 = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = callback2(callback, table);
                return obj4;
              }
              obj10 = callback(table[4]);
            }
          } else {
            if (2 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c4 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          }
        } catch (tmp13) {
          c4 = tmp;
          throw tmp13;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _requestAgeVerification = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _requestIncodeMethodSession() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0, incode_parameters) {
      if (interview_id === 2) {
        interview_id = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw incode_parameters;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = incode_parameters;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          interview_id = 2;
          if (0 === consent_id) {
            if (arg0 === 1) {
              interview_id = 3;
              throw incode_parameters;
            } else if (arg0 === 2) {
              interview_id = 3;
              obj = { value: null, done: true };
              obj[0] = incode_parameters;
              return obj;
            } else {
              let session_token = tmp4;
              let closure_0;
              let api_url;
              session_token = undefined;
              consent_id = undefined;
              interview_id = undefined;
              const obj1 = { method: null, vendor: null };
              obj1[0] = closure_0;
              obj1[1] = outer1_5.INCODE;
              consent_id = 1;
              interview_id = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = outer1_7(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            interview_id = 3;
            throw incode_parameters;
          } else if (arg0 === 2) {
            interview_id = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = incode_parameters;
            return obj3;
          } else {
            incode_parameters = incode_parameters.incode_parameters;
            api_url = incode_parameters;
            if (incode_parameters == null) {
              api_url = {};
            }
            closure_0 = api_url;
            api_url = closure_0.api_url;
            session_token = closure_0.session_token;
            consent_id = closure_0.consent_id;
            interview_id = closure_0.interview_id;
            let tmp12 = null;
            if (null != api_url) {
              tmp12 = null;
              if (null != session_token) {
                tmp12 = null;
                if (null != consent_id) {
                  tmp12 = null;
                  if (null != interview_id) {
                    obj = { apiUrl: null, sessionToken: null, consentId: null, interviewId: null };
                    obj[0] = api_url;
                    obj[1] = session_token;
                    obj[2] = consent_id;
                    obj[3] = interview_id;
                    tmp12 = obj;
                  }
                }
              }
            }
            interview_id = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = tmp12;
            return obj4;
          }
        } catch (tmp27) {
          interview_id = tmp;
          throw tmp27;
        }
      }
    })();
  });
  const _requestIncodeMethodSession = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function initiateAgeVerification(arg0) {
  const self = this;
  const apply = _initiateAgeVerification.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _initiateAgeVerification() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c2 = 0;
    return (function*(arg0, body) {
      if (table === 2) {
        table = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          table = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              table = 3;
              throw body;
            } else if (arg0 === 2) {
              table = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              const HTTP = callback(table[5]).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: true };
              obj1[0] = outer1_6.VERIFY_AGE;
              const obj2 = { method: null, vendor: null };
              obj2[0] = callback;
              obj2[1] = closure_1;
              obj1[1] = obj2;
              c3 = 1;
              table = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            table = 3;
            throw body;
          } else if (arg0 === 2) {
            table = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = body;
            return obj4;
          } else {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp10) {
          table = tmp;
          throw tmp10;
        }
      }
    })();
  });
  const _initiateAgeVerification = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _initiateAgeVerificationV() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c2 = 0;
    return (function*(arg0, body) {
      if (table === 2) {
        table = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          table = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              table = 3;
              throw body;
            } else if (arg0 === 2) {
              table = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              const HTTP = callback(table[5]).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: true };
              obj1[0] = outer1_6.VERIFY_AGE_V2;
              const obj2 = { method: null, vendor: null };
              obj2[0] = callback;
              obj2[1] = closure_1;
              obj1[1] = obj2;
              c3 = 1;
              table = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            table = 3;
            throw body;
          } else if (arg0 === 2) {
            table = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = body;
            return obj4;
          } else {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp10) {
          table = tmp;
          throw tmp10;
        }
      }
    })();
  });
  const _initiateAgeVerificationV = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function initiateSuspendedUserAgeVerification() {
  const self = this;
  const apply = _initiateSuspendedUserAgeVerification.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _initiateSuspendedUserAgeVerification() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0, body) {
      let c0;
      let c1;
      if (suspendedUserToken === 2) {
        suspendedUserToken = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          suspendedUserToken = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              suspendedUserToken = 3;
              throw body;
            } else if (arg0 === 2) {
              suspendedUserToken = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let table = tmp5;
              c1 = tmp2;
              let callback;
              c1 = undefined;
              ({ classificationId: c0, method: c1 } = callback);
              table = undefined;
              c3 = 1;
              suspendedUserToken = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              suspendedUserToken = 3;
              throw body;
            } else if (arg0 === 2) {
              suspendedUserToken = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = body;
              return obj1;
            } else {
              table = suspendedUserToken.getSuspendedUserToken();
              const HTTP = callback(table[5]).HTTP;
              const obj2 = { url: null, body: null, rejectWithError: true };
              obj2[0] = constants.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION;
              const obj3 = { token: null, from_classification_id: null, method: null };
              obj3[0] = table;
              obj3[1] = callback;
              obj3[2] = c1;
              obj2[1] = obj3;
              c3 = 2;
              suspendedUserToken = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.post(obj2);
              return obj4;
            }
          } else if (arg0 === 1) {
            suspendedUserToken = 3;
            throw body;
          } else if (arg0 === 2) {
            suspendedUserToken = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = body;
            return obj5;
          } else {
            suspendedUserToken = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp7) {
          suspendedUserToken = tmp;
          throw tmp7;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _initiateSuspendedUserAgeVerification = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _registerIncodeInterview() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
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
          c1 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const HTTP = callback(table[5]).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: true };
              obj1[0] = outer1_6.REGISTER_INCODE_INTERVIEW;
              const obj2 = { interview_id: null };
              obj2[0] = callback;
              obj1[1] = obj2;
              table = 1;
              c1 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c1 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          c1 = tmp;
          throw tmp9;
        }
      }
    })();
  });
  const _registerIncodeInterview = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _requestIncodeSessionBootstrap() {
  const self = this;
  const tmp = callback(() => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0, body) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw body;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              const table = tmp5;
              let closure_1 = tmp2;
              let obj1;
              if (obj1 === undefined) {
                obj1 = {};
              }
              c3 = 1;
              c4 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw body;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = body;
              return obj2;
            } else {
              let tmp8;
              const HTTP = obj1(table[5]).HTTP;
              const obj3 = { url: null, body: null, rejectWithError: true };
              obj3[0] = constants.CREATE_INCODE_SESSION;
              if (null != obj1.previousInterviewId) {
                const obj4 = { previous_interview_id: null };
                obj4[0] = obj1.previousInterviewId;
                tmp8 = obj4;
              }
              obj3[1] = tmp8;
              c3 = 2;
              c4 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = HTTP.post(obj3);
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw body;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = body;
            return obj6;
          } else {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp9) {
          c4 = tmp;
          throw tmp9;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _requestIncodeSessionBootstrap = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getAgeVerificationMethods() {
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
            v02(outer1_2[6]).dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_START" });
            const obj6 = v02(outer1_2[6]);
            if (obj7.isCurrentUserSuspended()) {
              let promise = outer1_19();
            } else {
              promise = outer1_18();
            }
            let catchPromise;
            if (promise != null) {
              catchPromise = promise.then((body) => {
                let obj = v1(709);
                obj = { type: "AGE_VERIFICATION_METHODS_LOAD_SUCCESS", methods: body.body.methods };
                obj.dispatch(obj);
              }).catch(() => {
                v1(709).dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_FAILURE" });
              });
              const nextPromise = promise.then((body) => {
                let obj = v1(709);
                obj = { type: "AGE_VERIFICATION_METHODS_LOAD_SUCCESS", methods: body.body.methods };
                obj.dispatch(obj);
              });
            }
            v02 = 1;
            v0 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = catchPromise;
            return obj1;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp9) {
        v0 = tmp;
        throw tmp9;
      }
    }
  });
  const _getAgeVerificationMethods = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function fetchAgeVerificationMethods() {
  const HTTP = require(530) /* sendRequest */.HTTP;
  return HTTP.get({ url: Endpoints.AGE_VERIFICATION_METHODS, rejectWithError: true });
}
function fetchAgeVerificationMethodsSuspendedUser() {
  suspendedUserToken = suspendedUserToken.getSuspendedUserToken();
  const HTTP = require(530) /* sendRequest */.HTTP;
  return HTTP.post({ url: Endpoints.SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS, rejectWithError: true, body: { token: suspendedUserToken } });
}
const result = require("set").fileFinishedImporting("modules/age_assurance/AgeVerificationURLActionCreators.tsx");

export { requestAgeVerification };
export const requestIncodeMethodSession = function requestIncodeMethodSession(closure_0) {
  const self = this;
  const apply = _requestIncodeMethodSession.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { initiateAgeVerification };
export const initiateAgeVerificationV2 = function initiateAgeVerificationV2(closure_0, closure_1) {
  const self = this;
  const apply = _initiateAgeVerificationV.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { initiateSuspendedUserAgeVerification };
export const registerIncodeInterview = function registerIncodeInterview(interviewId) {
  const self = this;
  const apply = _registerIncodeInterview.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const requestIncodeSessionBootstrap = function requestIncodeSessionBootstrap(arg0) {
  const self = this;
  const apply = _requestIncodeSessionBootstrap.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getAgeVerificationMethods = function getAgeVerificationMethods() {
  const self = this;
  const apply = _getAgeVerificationMethods.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { fetchAgeVerificationMethods };
export { fetchAgeVerificationMethodsSuspendedUser };
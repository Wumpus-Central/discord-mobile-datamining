// === Module 8417: AgeVerificationURLActionCreators ===

// Module 8417 (AgeVerificationURLActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import SafetyHubUtils from "SafetyHubUtils" /* 8418 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
function requestAgeVerification() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = async function _requestAgeVerification(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          ({ method: closure_129_0, classificationId: closure_129_1, vendor: closure_129_2 } = closure_0);
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          if (obj10.isCurrentUserSuspended()) {
            const obj2 = { classificationId: closure_129_1, method: closure_129_0 };
            c3 = 3;
            c4 = 1;
            const obj3 = { value: closure_130_17(obj2), done: false };
            return obj3;
          } else {
            c3 = 2;
            c4 = 1;
            const obj4 = { value: closure_130_10(closure_129_0, closure_129_2), done: false };
            return obj4;
          }
          obj10 = closure_130_0(closure_130_2[4]);
        }
      } else {
        if (2 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        }
        c4 = 3;
        const obj6 = { value, done: true };
        return obj6;
      }
    } catch (tmp13) {
      c4 = tmp;
      throw tmp13;
    }
  }
};
let closure_9 = async function _requestIncodeMethodSession(method) {
  c3 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    closure_2 = tmp4;
    await requestAgeVerification({ method, vendor: constants.INCODE });
    const incode_parameters = value.incode_parameters;
    closure_1 = incode_parameters;
    if (incode_parameters == null) {
      closure_1 = {};
    }
    closure_130_0 = closure_1;
    const api_url = closure_130_0.api_url;
    const session_token = closure_130_0.session_token;
    const consent_id = closure_130_0.consent_id;
    const interview_id = closure_130_0.interview_id;
    let tmp12 = null;
    if (null != api_url) {
      tmp12 = null;
      if (null != session_token) {
        tmp12 = null;
        if (null != consent_id) {
          tmp12 = null;
          if (null != interview_id) {
            tmp12 = { apiUrl: api_url, sessionToken: session_token, consentId: consent_id, interviewId: interview_id };
          }
        }
      }
    }
    return tmp12;
  })();
};
function initiateAgeVerification() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _initiateAgeVerification(method, vendor) {
  c3 = 0;
  c2 = 0;
  return (async (arg0, value) => {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: constants.VERIFY_AGE, body: { method, vendor }, rejectWithError: true };
    await HTTP.post(request);
    return value.body;
  })();
};
function initiateAgeVerificationV2() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_13 = async function _initiateAgeVerificationV(method, vendor) {
  c3 = 0;
  c2 = 0;
  return (async (arg0, value) => {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: VERIFY_AGE_V2.VERIFY_AGE_V2, body: { method, vendor }, rejectWithError: true };
    await HTTP.post(request);
    return value.body;
  })();
};
function initiateSuspendedUserAgeVerificationV2() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_15 = async function _initiateSuspendedUserAgeVerificationV(method, vendor) {
  c3 = 0;
  c2 = 0;
  return (async (arg0, value) => {
    suspendedUserToken = suspendedUserToken.getSuspendedUserToken();
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION_V2, body: { token: suspendedUserToken, method, vendor }, rejectWithError: true };
    await HTTP.post(request);
    return value.body;
  })();
};
let closure_16 = async function _requestAgeVerificationV(arg0, value) {
  if (c2 === 2) {
    c2 = 3;
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
      c2 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          let obj3 = SafetyHubUtils;
          if (obj3.isCurrentUserSuspended()) {
            c3 = 2;
            c2 = 1;
            const obj1 = { value: initiateSuspendedUserAgeVerificationV2(tmp5, tmp6), done: false };
            return obj1;
          } else {
            c3 = 1;
            c2 = 1;
            const obj2 = { value: initiateAgeVerificationV2(tmp5, tmp6), done: false };
            return obj2;
          }
        }
      } else {
        if (1 === tmp4) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj3 = { value, done: true };
            return obj3;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        }
        c2 = 3;
        const obj4 = { value, done: true };
        return obj4;
      }
    } catch (tmp11) {
      c2 = tmp;
      throw tmp11;
    }
  }
};
function initiateSuspendedUserAgeVerification() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_18 = async function _initiateSuspendedUserAgeVerification(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          ({ classificationId: closure_129_0, method: closure_129_1 } = closure_0);
          let suspendedUserToken;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          suspendedUserToken = closure_130_4.getSuspendedUserToken();
          const HTTP = closure_130_0(closure_130_2[5]).HTTP;
          const request = { url: closure_130_6.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION, body: null, rejectWithError: true };
          const obj2 = { token: suspendedUserToken, from_classification_id: closure_129_0, method: closure_129_1 };
          request.body = obj2;
          c3 = 2;
          c4 = 1;
          const obj3 = { value: HTTP.post(request), done: false };
          return obj3;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        c4 = 3;
        obj = { value: value.body, done: true };
        return obj;
      }
    } catch (tmp7) {
      c4 = tmp;
      throw tmp7;
    }
  }
};
let closure_19 = async function _registerIncodeInterview(interview_id) {
  c2 = 0;
  c1 = 0;
  return (async (arg0, value) => {
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
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.REGISTER_INCODE_INTERVIEW, body: null, rejectWithError: true };
            const obj1 = { interview_id };
            request.body = obj1;
            c2 = 1;
            c1 = 1;
            const obj2 = { value: HTTP.post(request), done: false };
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
      } catch (tmp9) {
        c1 = tmp;
        throw tmp9;
      }
    }
  })();
};
let closure_20 = async function _requestIncodeSessionBootstrap(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          let obj1 = closure_0;
          if (closure_0 === undefined) {
            obj1 = {};
          }
          closure_129_0 = obj1;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          let tmp8;
          const HTTP = closure_130_0(closure_130_2[5]).HTTP;
          const request = { url: closure_130_6.CREATE_INCODE_SESSION, body: null, rejectWithError: true };
          if (null != closure_129_0.previousInterviewId) {
            const obj3 = { previous_interview_id: closure_129_0.previousInterviewId };
            tmp8 = obj3;
          }
          request.body = tmp8;
          c3 = 2;
          c4 = 1;
          const obj4 = { value: HTTP.post(request), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        c4 = 3;
        obj = { value: value.body, done: true };
        return obj;
      }
    } catch (tmp9) {
      c4 = tmp;
      throw tmp9;
    }
  }
};
let closure_21 = async function _getAgeVerificationMethods() {
  DispatcherDefault.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_START" });
  if (obj7.isCurrentUserSuspended()) {
    let promise = fetchAgeVerificationMethodsSuspendedUser();
  } else {
    promise = fetchAgeVerificationMethods();
  }
  if (promise != null) {
    promise.then((body) => {
      closure_1_1(573);
      const obj = { type: "AGE_VERIFICATION_METHODS_LOAD_SUCCESS", methods: body.body.methods };
      obj.dispatch(obj);
    });
    const catchPromise = promise.then((body) => {
      closure_1_1(573);
      const obj = { type: "AGE_VERIFICATION_METHODS_LOAD_SUCCESS", methods: body.body.methods };
      obj.dispatch(obj);
    }).catch(() => {
      closure_1_1(573).dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_FAILURE" });
    });
  }
  await catchPromise;
  return arg1;
};
function fetchAgeVerificationMethods() {
  const HTTP = HTTPUtils.HTTP;
  return HTTP.get({ url: Endpoints.AGE_VERIFICATION_METHODS, rejectWithError: true });
}
function fetchAgeVerificationMethodsSuspendedUser() {
  const suspendedUserToken = AuthenticationStore.getSuspendedUserToken();
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS, rejectWithError: true, body: { token: suspendedUserToken } };
  return HTTP.post(request);
}
const VerificationVendorName = fn(8412).VerificationVendorName;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationURLActionCreators.tsx");

export { requestAgeVerification };
export const requestIncodeMethodSession = function requestIncodeMethodSession() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { initiateAgeVerification };
export { initiateAgeVerificationV2 };
export { initiateSuspendedUserAgeVerificationV2 };
export const requestAgeVerificationV2 = function requestAgeVerificationV2() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { initiateSuspendedUserAgeVerification };
export const registerIncodeInterview = function registerIncodeInterview() {
  const self = this;
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const requestIncodeSessionBootstrap = function requestIncodeSessionBootstrap() {
  const self = this;
  const apply = closure_20.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getAgeVerificationMethods = function getAgeVerificationMethods() {
  const self = this;
  const apply = closure_21.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { fetchAgeVerificationMethods };
export { fetchAgeVerificationMethodsSuspendedUser };
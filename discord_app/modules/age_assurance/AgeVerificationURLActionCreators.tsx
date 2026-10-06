// discord_app/modules/age_assurance/AgeVerificationURLActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import AgeVerificationConstants from "AgeVerificationConstants.tsx";
import SafetyHubUtils from "../safety_hub/SafetyHubUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let from_classification_id;

function requestAgeVerification() {
  return obj(...arguments);
}
let obj = function _requestAgeVerification() {
  obj = _asyncToGenerator(async (method) => {
    let c0;
    let c1;
    let c2;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (method === 1) {
        throw value;
      } else if (method === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let classificationId;
        c4 = 2;
        if (0 === c3) {
          if (method === 1) {
            c4 = 3;
            throw value;
          } else if (method === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            method = undefined;
            classificationId = undefined;
            c2 = undefined;
            ({ method: c0, classificationId: c1, vendor: c2 } = closure_0);
            c3 = 1;
            c4 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c3) {
          if (method === 1) {
            c4 = 3;
            throw value;
          } else if (method === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj10 = closure_130_0(closure_130_2[4]);
            if (obj10.isCurrentUserSuspended()) {
              const obj5 = { classificationId, method };
              c3 = 3;
              c4 = 1;
              const obj6 = { value: closure_130_17(obj5), done: false };
              return obj6;
            } else {
              c3 = 2;
              c4 = 1;
              const obj7 = { value: closure_130_10(method, c2), done: false };
              return obj7;
            }
          }
        } else {
          if (2 === c3) {
            if (method === 1) {
              c4 = 3;
              throw value;
            } else if (method === 2) {
              c4 = 3;
              const obj8 = { value, done: true };
              return obj8;
            }
          } else if (method === 1) {
            c4 = 3;
            throw value;
          } else if (method === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          }
          c4 = 3;
          const obj9 = { value, done: true };
          return obj9;
        }
      } catch (tmp12) {
        c4 = 3;
        throw tmp12;
      }
    }
  });
  return obj(...arguments);
};
obj = function _requestIncodeMethodSession() {
  obj = _asyncToGenerator(async (method) => {
    let closure_2;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      const obj4 = { method, vendor: constants.INCODE };
      await requestAgeVerification(obj4);
      const incode_parameters = value.incode_parameters;
      closure_1 = incode_parameters;
      if (incode_parameters == null) {
        closure_1 = {};
      }
      method = closure_1;
      const api_url = method.api_url;
      const session_token = method.session_token;
      const consent_id = method.consent_id;
      const interview_id = method.interview_id;
      let tmp11 = null;
      if (null != api_url) {
        tmp11 = null;
        if (null != session_token) {
          tmp11 = null;
          if (null != consent_id) {
            tmp11 = null;
            if (null != interview_id) {
              tmp11 = {
                apiUrl: api_url,
                sessionToken: session_token,
                consentId: consent_id,
                interviewId: interview_id,
              };
            }
          }
        }
      }
      return tmp11;
    })();
  });
  return obj(...arguments);
};
function initiateAgeVerification() {
  return obj(...arguments);
}
obj = function _initiateAgeVerification() {
  obj = _asyncToGenerator(async (method, vendor) => {
    let c3 = 0;
    let c2 = 0;
    return (async (arg0, value) => {
      let obj4;
      const HTTP = HTTPUtils.HTTP;
      const request = { url: constants.VERIFY_AGE, body: obj4, rejectWithError: true };
      obj4 = { method, vendor };
      await HTTP.post(request);
      return value.body;
    })();
  });
  return obj(...arguments);
};
function initiateAgeVerificationV2() {
  return obj(...arguments);
}
obj = function _initiateAgeVerificationV() {
  let VERIFY_AGE_V2;
  obj = _asyncToGenerator(async (method, vendor) => {
    let c3 = 0;
    let c2 = 0;
    return (async (arg0, value) => {
      let obj4;
      const HTTP = HTTPUtils.HTTP;
      const request = { url: VERIFY_AGE_V2.VERIFY_AGE_V2, body: obj4, rejectWithError: true };
      obj4 = { method, vendor };
      await HTTP.post(request);
      return value.body;
    })();
  });
  return obj(...arguments);
};
function initiateSuspendedUserAgeVerificationV2() {
  return obj(...arguments);
}
obj = function _initiateSuspendedUserAgeVerificationV() {
  obj = _asyncToGenerator(async (method, vendor) => {
    let c3 = 0;
    let c2 = 0;
    return (async (arg0, value) => {
      let obj4;
      suspendedUserToken = suspendedUserToken.getSuspendedUserToken();
      const HTTP = HTTPUtils.HTTP;
      const request = {
        url: Endpoints.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION_V2,
        body: obj4,
        rejectWithError: true,
      };
      obj4 = { token: suspendedUserToken, method, vendor };
      await HTTP.post(request);
      return value.body;
    })();
  });
  return obj(...arguments);
};
obj = function _requestAgeVerificationV() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c2 === 2) {
      c2 = 3;
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
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj4 = SafetyHubUtils;
            if (obj4.isCurrentUserSuspended()) {
              c3 = 2;
              c2 = 1;
              const obj5 = { value: initiateSuspendedUserAgeVerificationV2(closure_0, closure_1), done: false };
              return obj5;
            } else {
              c3 = 1;
              c2 = 1;
              const obj6 = { value: initiateAgeVerificationV2(closure_0, closure_1), done: false };
              return obj6;
            }
          }
        } else {
          if (1 === tmp3) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj7 = { value, done: true };
              return obj7;
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
          const obj8 = { value, done: true };
          return obj8;
        }
      } catch (tmp10) {
        c2 = 3;
        throw tmp10;
      }
    }
  });
  return obj(...arguments);
};
function initiateSuspendedUserAgeVerification() {
  return obj(...arguments);
}
obj = function _initiateSuspendedUserAgeVerification() {
  obj = _asyncToGenerator(async (from_classification_id) => {
    let c0;
    let c1;
    let obj5;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (from_classification_id === 1) {
        throw value;
      } else if (from_classification_id === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let method;
        let token;
        c4 = 2;
        if (0 === c3) {
          if (from_classification_id === 1) {
            c4 = 3;
            throw value;
          } else if (from_classification_id === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            from_classification_id = undefined;
            method = undefined;
            ({ classificationId: c0, method: c1 } = closure_0);
            token = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c3) {
          if (from_classification_id === 1) {
            c4 = 3;
            throw value;
          } else if (from_classification_id === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            token = closure_130_4.getSuspendedUserToken();
            const HTTP = closure_130_0(closure_130_2[5]).HTTP;
            const request = {
              url: closure_130_6.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
              body: obj5,
              rejectWithError: true,
            };
            obj5 = { token, from_classification_id, method };
            c3 = 2;
            c4 = 1;
            const obj6 = { value: HTTP.post(request), done: false };
            return obj6;
          }
        } else if (from_classification_id === 1) {
          c4 = 3;
          throw value;
        } else if (from_classification_id === 2) {
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c4 = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp6) {
        c4 = 3;
        throw tmp6;
      }
    }
  });
  return obj(...arguments);
};
obj = function _registerIncodeInterview() {
  obj = _asyncToGenerator(async (interview_id) => {
    let c2 = 0;
    let c1 = 0;
    return (async (arg0) => {
      let obj4;
      if (c1 === 2) {
        c1 = 3;
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
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.REGISTER_INCODE_INTERVIEW, body: obj4, rejectWithError: true };
              c2 = 1;
              c1 = 1;
              obj4 = { interview_id };
              const obj5 = { value: HTTP.post(request), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            return { value, done: true };
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
obj = function _requestIncodeSessionBootstrap() {
  obj = _asyncToGenerator(async () => {
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
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
        let obj4;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            obj4 = closure_0;
            if (closure_0 === undefined) {
              obj4 = {};
            }
            c3 = 1;
            c4 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let tmp7;
            const HTTP = closure_130_0(closure_130_2[5]).HTTP;
            const request = { url: closure_130_6.CREATE_INCODE_SESSION, body: tmp7, rejectWithError: true };
            const post = HTTP.post;
            if (null != obj4.previousInterviewId) {
              const obj6 = { previous_interview_id: obj4.previousInterviewId };
              tmp7 = obj6;
            }
            c3 = 2;
            c4 = 1;
            const obj7 = { value: post(request), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          c4 = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp8) {
        c4 = 3;
        throw tmp8;
      }
    }
  });
  return obj(...arguments);
};
obj = function _getAgeVerificationMethods() {
  obj = _asyncToGenerator(async () => {
    let c0;
    let c1;
    let catchPromise;
    let promise;
    const obj6 = DispatcherDefault;
    const dispatchResult = obj6.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_START" });
    const obj7 = SafetyHubUtils;
    if (obj7.isCurrentUserSuspended()) {
      promise = fetchAgeVerificationMethodsSuspendedUser();
    } else {
      promise = fetchAgeVerificationMethods();
    }
    if (promise != null) {
      const nextPromise = promise.then((body) => {
        obj = closure_1_1(closure_1_2[6]);
        const obj2 = { type: "AGE_VERIFICATION_METHODS_LOAD_SUCCESS", methods: body.body.methods };
        obj.dispatch(obj2);
      });
      catchPromise = nextPromise.catch(() => {
        obj = closure_1_1(closure_1_2[6]);
        obj.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_FAILURE" });
      });
    }
    await catchPromise;
    return value;
  });
  return obj(...arguments);
};
function fetchAgeVerificationMethods() {
  const HTTP = HTTPUtils.HTTP;
  obj = { url: Endpoints.AGE_VERIFICATION_METHODS, rejectWithError: true };
  return HTTP.get(obj);
}
function fetchAgeVerificationMethodsSuspendedUser() {
  const suspendedUserToken = AuthenticationStore.getSuspendedUserToken();
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: Endpoints.SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS,
    rejectWithError: true,
    body: { token: suspendedUserToken },
  };
  return HTTP.post(request);
}
const VerificationVendorName = AgeVerificationConstants.VerificationVendorName;
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationURLActionCreators.tsx");

export { requestAgeVerification };
export const requestIncodeMethodSession = function requestIncodeMethodSession() {
  return obj(...arguments);
};
export { initiateAgeVerification };
export { initiateAgeVerificationV2 };
export { initiateSuspendedUserAgeVerificationV2 };
export const requestAgeVerificationV2 = function requestAgeVerificationV2() {
  return obj(...arguments);
};
export { initiateSuspendedUserAgeVerification };
export const registerIncodeInterview = function registerIncodeInterview() {
  return obj(...arguments);
};
export const requestIncodeSessionBootstrap = function requestIncodeSessionBootstrap() {
  return obj(...arguments);
};
export const getAgeVerificationMethods = function getAgeVerificationMethods() {
  return obj(...arguments);
};
export { fetchAgeVerificationMethods };
export { fetchAgeVerificationMethodsSuspendedUser };

// discord_app/modules/age_assurance/GoogleWalletActionCreators.native.tsx
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import SafetyHubUtils from "../safety_hub/SafetyHubUtils.tsx";
import NativeDigitalCredentialModuleDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeDigitalCredentialModule.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";

require = fn;
let closure_6 = async function _requestGoogleWalletVerification() {
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
          const result = SafetyHubUtils.isCurrentUserSuspended();
          const HTTP = HTTPUtils.HTTP;
          const post = HTTP.post;
          const request = { url: null, body: null, rejectWithError: true, failImmediatelyWhenRateLimited: true };
          if (result) {
            request.url = Endpoints.GOOGLE_WALLET_REQUEST_SUSPENDED_USER;
            const obj1 = { token: suspendedUserToken.getSuspendedUserToken() };
            request.body = obj1;
            c1 = 2;
            c0 = 1;
            const obj2 = { value: post(request), done: false };
            return obj2;
          } else {
            request.url = Endpoints.GOOGLE_WALLET_REQUEST;
            request.body = {};
            c1 = 1;
            c0 = 1;
            const obj3 = { value: post(request), done: false };
            return obj3;
          }
        }
      } else {
        if (1 === tmp4) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const body2 = value.body;
            c0 = 3;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const body = value.body;
        }
        c0 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp6) {
      c0 = tmp;
      throw tmp6;
    }
  }
};
let closure_7 = async function _verifyGoogleWalletCredential() {
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
            const result = SafetyHubUtils.isCurrentUserSuspended();
            const HTTP = HTTPUtils.HTTP;
            const post = HTTP.post;
            const request = { url: null, body: null, rejectWithError: true, failImmediatelyWhenRateLimited: true };
            if (result) {
              request.url = Endpoints.GOOGLE_WALLET_VERIFY_SUSPENDED_USER;
              const obj1 = { token: suspendedUserToken.getSuspendedUserToken(), credential_json };
              request.body = obj1;
              c2 = 2;
              c1 = 1;
              const obj2 = { value: post(request), done: false };
              return obj2;
            } else {
              request.url = Endpoints.GOOGLE_WALLET_VERIFY;
              const obj3 = { credential_json };
              request.body = obj3;
              c2 = 1;
              c1 = 1;
              const obj4 = { value: post(request), done: false };
              return obj4;
            }
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              const obj5 = { value, done: true };
              return obj5;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value, done: true };
            return obj;
          }
          c1 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp6) {
        c1 = tmp;
        throw tmp6;
      }
    }
  })();
};
let closure_8 = async function _checkGoogleWalletAvailable() {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
          c2 = 1;
          let tmp7 = null != NativeDigitalCredentialModuleDefault;
          if (tmp7) {
            c1 = 2;
            c0 = 1;
            const obj1 = { value: NativeDigitalCredentialModuleDefault.isAvailable(), done: false };
            return obj1;
          }
        }
      } else if (1 === tmp6) {
        c2 = 0;
        c0 = 3;
        return { value: false, done: true };
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else {
        tmp7 = value;
        if (arg0 === 2) {
          c2 = 0;
          c0 = 3;
          obj = { value, done: true };
          return obj;
        }
      }
      c2 = 0;
      c0 = 3;
      const obj2 = { value: tmp7, done: true };
      return obj2;
    } catch (tmp10) {
      if (tmp3 === c2) {
        c0 = tmp2;
        throw tmp10;
      } else {
        c1 = tmp;
      }
    }
  }
};
let closure_9 = async function _getGoogleWalletCredential() {
  if (null == NativeDigitalCredentialModuleDefault) {
    const _Error = Error;
    const error = new Error("Digital credential module is not available");
    throw error;
  }
  await NativeDigitalCredentialModuleDefault.getCredential(closure_0);
  return value;
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/GoogleWalletActionCreators.native.tsx");

export const requestGoogleWalletVerification = function requestGoogleWalletVerification() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const verifyGoogleWalletCredential = function verifyGoogleWalletCredential() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const checkGoogleWalletAvailable = function checkGoogleWalletAvailable() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getGoogleWalletCredential = function getGoogleWalletCredential() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};

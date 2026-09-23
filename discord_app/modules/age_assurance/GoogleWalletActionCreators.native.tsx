// === Module 8787: GoogleWalletActionCreators ===

// Module 8787 (GoogleWalletActionCreators)
import HTTPUtils from "HTTPUtils" /* 1271 */;
import SafetyHubUtils from "SafetyHubUtils" /* 8765 */;
import NativeDigitalCredentialModuleDefault from "NativeDigitalCredentialModule" /* 8788 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
let closure_6 = async function _requestGoogleWalletVerification() {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
          const result = SafetyHubUtils.isCurrentUserSuspended();
          const HTTP = HTTPUtils.HTTP;
          const post = HTTP.post;
          const request = { url: null, body: null, rejectWithError: true, failImmediatelyWhenRateLimited: true };
          if (result) {
            request.url = Endpoints.GOOGLE_WALLET_REQUEST_SUSPENDED_USER;
            const obj4 = { token: suspendedUserToken.getSuspendedUserToken() };
            request.body = obj4;
            c1 = 2;
            c0 = 1;
            const obj5 = { value: post(request), done: false };
            return obj5;
          } else {
            request.url = Endpoints.GOOGLE_WALLET_REQUEST;
            request.body = {};
            c1 = 1;
            c0 = 1;
            const obj6 = { value: post(request), done: false };
            return obj6;
          }
        }
      } else {
        if (1 === tmp4) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj7 = { value, done: true };
            return obj7;
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
        const obj = { value, done: true };
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
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const result = SafetyHubUtils.isCurrentUserSuspended();
            const HTTP = HTTPUtils.HTTP;
            const post = HTTP.post;
            const request = { url: null, body: null, rejectWithError: true, failImmediatelyWhenRateLimited: true };
            if (result) {
              request.url = Endpoints.GOOGLE_WALLET_VERIFY_SUSPENDED_USER;
              const obj4 = { token: suspendedUserToken.getSuspendedUserToken(), credential_json };
              request.body = obj4;
              c2 = 2;
              c1 = 1;
              const obj5 = { value: post(request), done: false };
              return obj5;
            } else {
              request.url = Endpoints.GOOGLE_WALLET_VERIFY;
              const obj6 = { credential_json };
              request.body = obj6;
              c2 = 1;
              c1 = 1;
              const obj7 = { value: post(request), done: false };
              return obj7;
            }
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              const obj8 = { value, done: true };
              return obj8;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj = { value, done: true };
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
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c2 = 1;
          let tmp7 = null != NativeDigitalCredentialModuleDefault;
          if (tmp7) {
            c1 = 2;
            c0 = 1;
            const obj4 = { value: NativeDigitalCredentialModuleDefault.isAvailable(), done: false };
            return obj4;
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
          const obj = { value, done: true };
          return obj;
        }
      }
      c2 = 0;
      c0 = 3;
      const obj5 = { value: tmp7, done: true };
      return obj5;
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
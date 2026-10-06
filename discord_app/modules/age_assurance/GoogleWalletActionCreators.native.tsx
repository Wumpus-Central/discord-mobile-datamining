// === Module 8149: GoogleWalletActionCreators ===

// Module 8149 (GoogleWalletActionCreators)
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import SafetyHubUtils from "SafetyHubUtils" /* 8125 */;
import react_nativeDefault from "react-native" /* 8150 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let c0;

let obj = function _requestGoogleWalletVerification() {
  let suspendedUserToken;
  obj = _asyncToGenerator(async () => {
    if (c0 === 2) {
      c0 = 3;
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
            const obj9 = SafetyHubUtils;
            const result = obj9.isCurrentUserSuspended();
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
          let body;
          if (1 === tmp3) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              body = value.body;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            body = value.body;
          }
          c0 = 3;
          const obj8 = { value: body, done: true };
          return obj8;
        }
      } catch (tmp5) {
        c0 = 3;
        throw tmp5;
      }
    }
  });
  return obj(...arguments);
};
obj = function _verifyGoogleWalletCredential() {
  let suspendedUserToken;
  obj = _asyncToGenerator(async (credential_json) => {
    let c2 = 0;
    let c1 = 0;
    return (async (arg0) => {
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
              const obj9 = SafetyHubUtils;
              const result = obj9.isCurrentUserSuspended();
              const HTTP = HTTPUtils.HTTP;
              const post = HTTP.post;
              const request = { url: null, body: null, rejectWithError: true, failImmediatelyWhenRateLimited: true };
              if (result) {
                request.url = Endpoints.GOOGLE_WALLET_VERIFY_SUSPENDED_USER;
                request.body = { token: suspendedUserToken.getSuspendedUserToken(), credential_json };
                c2 = 2;
                c1 = 1;
                const obj4 = { token: suspendedUserToken.getSuspendedUserToken(), credential_json };
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
            if (1 === tmp3) {
              if (arg0 === 1) {
                c1 = 3;
                throw value;
              } else if (arg0 === 2) {
                c1 = 3;
                return { value, done: true };
              }
            } else if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              return { value, done: true };
            }
            c1 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp5) {
          c1 = 3;
          throw tmp5;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _checkGoogleWalletAvailable() {
  obj = _asyncToGenerator(async () => {
    let tmp5Result;
    if (c0 === 2) {
      c0 = 3;
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
      let c2;
      try {
        let tmp4;
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
            tmp4 = null != react_nativeDefault;
            if (tmp4) {
              c1 = 2;
              c0 = 1;
              const obj4 = { value: tmp5Result.isAvailable(), done: false };
              tmp5Result = react_nativeDefault;
              return obj4;
            }
          }
        } else if (1 === tmp3) {
          c2 = 0;
          c0 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else {
          tmp4 = value;
          if (arg0 === 2) {
            c2 = 0;
            c0 = 3;
            obj = { value, done: true };
            return obj;
          }
        }
        c2 = 0;
        c0 = 3;
        const obj5 = { value: tmp4, done: true };
        return obj5;
      } catch (tmp7) {
        if (0 === c2) {
          c0 = 3;
          throw tmp7;
        } else {
          c1 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _getGoogleWalletCredential() {
  obj = _asyncToGenerator(async function(arg0) {
    let tmp5Result;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
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
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else if (null == react_nativeDefault) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("Digital credential module is not available");
            throw error;
          } else {
            c2 = 1;
            c1 = 1;
            const obj4 = { value: tmp5Result.getCredential(closure_0), done: false };
            tmp5Result = react_nativeDefault;
            return obj4;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp11) {
        c1 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("modules/age_assurance/GoogleWalletActionCreators.native.tsx");

export const requestGoogleWalletVerification = function requestGoogleWalletVerification() {
  return obj(...arguments);
};
export const verifyGoogleWalletCredential = function verifyGoogleWalletCredential() {
  return obj(...arguments);
};
export const checkGoogleWalletAvailable = function checkGoogleWalletAvailable() {
  return obj(...arguments);
};
export const getGoogleWalletCredential = function getGoogleWalletCredential() {
  return obj(...arguments);
};
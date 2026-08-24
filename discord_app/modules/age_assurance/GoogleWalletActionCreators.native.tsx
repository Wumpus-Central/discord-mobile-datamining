// === Module 6601: _requestGoogleWalletVerification ===

// Module 6601 (_requestGoogleWalletVerification)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 676 */;

const require = arg1;
function _requestGoogleWalletVerification() {
  const self = this;
  const tmp = callback(function*() {
    const HTTP = v0(closure_1_2[2]).HTTP;
    obj1 = { url: null, body: null, rejectWithError: true, failImmediatelyWhenRateLimited: true };
    obj1[0] = closure_1_4.GOOGLE_WALLET_REQUEST;
    obj1[1] = {};
    yield HTTP.post(obj1);
    return arg1.body;
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _verifyGoogleWalletCredential() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
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
              const HTTP = callback(table[2]).HTTP;
              obj1 = { url: null, body: null, rejectWithError: true, failImmediatelyWhenRateLimited: true };
              obj1[0] = closure_1_4.GOOGLE_WALLET_VERIFY;
              const obj2 = { credential_json: null };
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
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _checkGoogleWalletAvailable() {
  const self = this;
  const tmp = callback(function*() {
    if (c0 === 2) {
      c0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp5 === 3) {
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
        c0 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            c0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let table = 1;
            let tmp7 = null != v0(table[3]);
            if (tmp7) {
              v0 = 2;
              c0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = tmp8(tmp9[3]).isAvailable();
              return obj1;
            }
            tmp8 = v0;
            tmp9 = table;
          }
        } else if (1 === tmp6) {
          table = 0;
          c0 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c0 = 3;
          throw arg1;
        } else {
          tmp7 = arg1;
          if (arg0 === 2) {
            table = 0;
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        }
        table = 0;
        c0 = 3;
        const obj2 = { value: null, done: true };
        obj2[0] = tmp7;
        return obj2;
      } catch (tmp10) {
        if (tmp3 === table) {
          c0 = tmp2;
          throw tmp10;
        } else {
          v0 = tmp;
        }
      }
    }
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getGoogleWalletCredential() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
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
              if (null == v0(table[3])) {
                const _Error = Error;
                error = new Error("Digital credential module is not available");
                throw error;
              } else {
                table = 1;
                v0 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = tmp6(tmp7[3]).getCredential(tmp5);
                return obj1;
              }
              tmp5 = closure_0;
              tmp6 = v0;
              tmp7 = table;
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
        } catch (tmp14) {
          v0 = tmp;
          throw tmp14;
        }
      }
    })();
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/age_assurance/GoogleWalletActionCreators.native.tsx");

export const requestGoogleWalletVerification = function requestGoogleWalletVerification() {
  const self = this;
  const apply = _requestGoogleWalletVerification.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const verifyGoogleWalletCredential = function verifyGoogleWalletCredential(closure_1) {
  const self = this;
  const apply = _verifyGoogleWalletCredential.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const checkGoogleWalletAvailable = function checkGoogleWalletAvailable() {
  const self = this;
  const apply = _checkGoogleWalletAvailable.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getGoogleWalletCredential = function getGoogleWalletCredential(request_json) {
  const self = this;
  const apply = _getGoogleWalletCredential.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
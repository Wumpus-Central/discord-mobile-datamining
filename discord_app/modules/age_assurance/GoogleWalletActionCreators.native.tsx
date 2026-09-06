// discord_app/modules/age_assurance/GoogleWalletActionCreators.native.tsx
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../stores/AuthenticationStore.tsx";
import { Endpoints } from "../../Constants.tsx";

const require = arg1;
function _requestGoogleWalletVerification() {
  const self = this;
  const tmp = callback(function* () {
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
        if (0 === c1) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const result = v0(closure_1_2[3]).isCurrentUserSuspended();
            const HTTP = v0(closure_1_2[4]).HTTP;
            const post = HTTP.post;
            obj1 = { url: null, body: null, rejectWithError: true, failImmediatelyWhenRateLimited: true };
            if (result) {
              obj1[0] = tmp15.GOOGLE_WALLET_REQUEST_SUSPENDED_USER;
              const obj2 = { token: null };
              obj2[0] = closure_1_4.getSuspendedUserToken();
              obj1[1] = obj2;
              c1 = 2;
              v0 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = post(obj1);
              return obj3;
            } else {
              obj1[0] = tmp15.GOOGLE_WALLET_REQUEST;
              obj1[1] = {};
              c1 = 1;
              v0 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = post(obj1);
              return obj4;
            }
            const obj8 = v0(closure_1_2[3]);
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            } else {
              const body2 = arg1.body;
              v0 = 3;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            const body = arg1.body;
          }
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp6) {
        v0 = tmp;
        throw tmp6;
      }
    }
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
function _verifyGoogleWalletCredential() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function* (arg0) {
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
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const result = callback(8418).isCurrentUserSuspended();
              const HTTP = callback(1272).HTTP;
              const post = HTTP.post;
              obj1 = { url: null, body: null, rejectWithError: true, failImmediatelyWhenRateLimited: true };
              if (result) {
                obj1[0] = tmp16.GOOGLE_WALLET_VERIFY_SUSPENDED_USER;
                const obj2 = { token: null, credential_json: null };
                obj2[0] = closure_1_4.getSuspendedUserToken();
                obj2[1] = tmp12;
                obj1[1] = obj2;
                dependencyMap = 2;
                c1 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = post(obj1);
                return obj3;
              } else {
                obj1[0] = tmp16.GOOGLE_WALLET_VERIFY;
                const obj4 = { credential_json: null };
                obj4[0] = tmp12;
                obj1[1] = obj4;
                dependencyMap = 1;
                c1 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = post(obj1);
                return obj5;
              }
              const obj9 = callback(8418);
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                c1 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c1 = 3;
                const obj6 = { value: null, done: true };
                obj6[0] = arg1;
                return obj6;
              }
            } else if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
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
function _checkGoogleWalletAvailable() {
  const self = this;
  const tmp = callback(function* () {
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
            let tmp7 = null != v0(table[5]);
            if (tmp7) {
              v0 = 2;
              c0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = tmp8(tmp9[5]).isAvailable();
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
  closure_8 = tmp;
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
    return (function* (arg0) {
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
              if (null == v0(table[5])) {
                const _Error = Error;
                error = new Error("Digital credential module is not available");
                throw error;
              } else {
                table = 1;
                v0 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = tmp6(tmp7[5]).getCredential(tmp5);
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
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("set").fileFinishedImporting("modules/age_assurance/GoogleWalletActionCreators.native.tsx");

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

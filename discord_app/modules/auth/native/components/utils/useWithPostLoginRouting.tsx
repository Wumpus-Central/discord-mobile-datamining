// === Module 6450: useWithPostLoginRouting ===

// Module 6450 (useWithPostLoginRouting)
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6089 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, arr, arr1, arr2, arr3, c3, c4, closure_0, closure_2, obj1, tmp11, tmp12, tmp14, tmp15, tmp17, tmp18, tmp19, tmp20, tmp21, tmp23, tmp24, tmp26, tmp27, tmp28, tmp29, tmp30, tmp5, tmp8;

let metroImportAll;
let metroImportDefault;
let _asyncToGenerator = _asyncToGenerator_mod;
({ LoginStates: metroImportDefault, AuthStates: metroImportAll } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, handleLogin) => {
  let closure_3;
  let first;
  let loginStatus;
  let tmp6;
  let tmp7;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(8);
  const tmp4 = loginStatus(react.useState(), 2);
  const tmp2 = first;
  first = tmp4[0];
  _asyncToGenerator = tmp4[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function u() {
      const obj = { loginStatus: authStore.getLoginStatus() };
      return obj;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = fn;
    tmp6 = items;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = tmp(tmp2[7]);
  loginStatus = tmpResult.useStateFromStoresObject(tmp6, tmp7).loginStatus;
  if (cResult[2] === handleLogin) {
    if (cResult[3] === loginStatus) {
      if (cResult[4] === arg0) {
        let tmp9;
        let tmp10;
        if (cResult[5] === first) {
          tmp9 = cResult[6];
          tmp10 = cResult[7];
        }
        const effect = react.useEffect(tmp9, tmp10);
      }
    }
  }
  class S {
    constructor() {
      tmp2 = closure_1_7;
      if (closure_2 !== closure_1_7.LOGGING_IN) {
        if (tmp !== tmp2.FORGOT_PASSWORD) {
          tmp3 = closure_3;
          tmp4 = loginStatus;
          tmp5 = closure_3(loginStatus);
        }
        return;
      }
      tmp6 = loginStatus;
      if (tmp2.MFA_STEP === loginStatus) {
        tmp14 = login;
        tmp15 = closure_1_8;
        arr = login.push(closure_1_8.MFA);
      } else {
        if (tmp2.ACCOUNT_SCHEDULED_FOR_DELETION !== tmp6) {
          if (tmp2.ACCOUNT_DISABLED !== tmp6) {
            if (tmp2.LOGIN_AGE_GATE === tmp6) {
              tmp7 = login;
              tmp8 = closure_1_8;
              arr1 = login.push(closure_1_8.AGE_GATE_UNDERAGE, { existingUser: true });
            }
          }
        }
        tmp10 = login;
        tmp11 = closure_1_8;
        obj = { handleLogin: null };
        tmp12 = password;
        obj.handleLogin = password;
        arr2 = login.push(closure_1_8.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED, obj);
      }
      if (tmp2.PASSWORD_RECOVERY_PHONE_VERIFICATION === tmp6) {
        tmp17 = closure_1_6;
        tmp18 = login;
        tmp19 = closure_1_8;
        obj1 = { title: null, description: null, phone: null, onPhoneTokenReceived: null, onClose: null };
        tmp20 = closure_0;
        tmp21 = closure_2;
        login = closure_1_6.getCredentials().login;
        replace = login.replace;
        VERIFY_PHONE = closure_1_8.VERIFY_PHONE;
        intl = closure_0(closure_2[8]).intl;
        obj1.title = intl.string(closure_0(closure_2[8]).t["+xqy3d"]);
        intl2 = closure_0(closure_2[8]).intl;
        obj1.description = intl2.string(closure_0(closure_2[8]).t.myKyqh);
        obj1.phone = login;
        obj1.onPhoneTokenReceived = function onPhoneTokenReceived(arg0) {
          const obj = { externalURL: handleLogin(first[9])(arg0) };
          const replaced = closure_0.replace(constants2.EXTERNAL_LINK, obj);
        };
        obj1.onClose = function onClose() {
          const obj = handleLogin(closure_2[10]);
          obj.loginReset();
        };
        replaced = replace(VERIFY_PHONE, obj1);
      } else if (tmp2.PHONE_IP_AUTHORIZATION === tmp6) {
        tmp24 = closure_1_6;
        credentials = closure_1_6.getCredentials();
        ({ login, password } = credentials);
        tmp26 = login;
        tmp27 = closure_1_8;
        obj4 = { title: null, description: null, phone: null, onPhoneTokenReceived: null, onClose: null };
        tmp28 = closure_0;
        tmp29 = closure_2;
        push = login.push;
        VERIFY_PHONE2 = closure_1_8.VERIFY_PHONE;
        intl3 = closure_0(closure_2[8]).intl;
        obj4.title = intl3.string(closure_0(closure_2[8]).t.w55Oco);
        intl4 = closure_0(closure_2[8]).intl;
        obj4.description = intl4.string(closure_0(closure_2[8]).t["0/ALaJ"]);
        obj4.phone = closure_1_6.getCredentials().login;
        tmp30 = closure_3;
        closure_2 = closure_3(function*(arg0) {
          let obj2;
          closure_0 = arg0;
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
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
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  let c2 = 0;
                  let closure_1 = tmp;
                  closure_0 = undefined;
                  c3 = 1;
                  c4 = 1;
                  const obj5 = { value: obj2.authorizeIPAddress(closure_0), done: false };
                  obj2 = handleLogin(closure_2[10]);
                  return obj5;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                const routes = closure_0.getState().routes;
                closure_0 = routes.findIndex(() => { /* body not rendered: F154651 */ });
                if (closure_0 >= 0) {
                  closure_0.pop(closure_0);
                } else {
                  closure_0.pop();
                }
                c4 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp16) {
              c4 = 3;
              throw tmp16;
            }
          }
        });
        obj4.onPhoneTokenReceived = function() {
          return closure_2(...arguments);
        };
        obj4.onClose = function onClose(arg0) {
          const tmp = arg0;
          if (tmp) {
            const tmp7 = null != handleLogin && "" !== handleLogin;
            if (tmp7) {
              handleLogin(closure_0, handleLogin);
            }
          } else {
            const obj = AuthenticationActionCreatorsDefault;
            obj.loginReset();
          }
        };
        arr3 = push(VERIFY_PHONE2, obj4);
      }
      tmp23 = closure_3(tmp6);
      return;
    }
  }
  const items1 = [arg0, handleLogin, loginStatus, first];
  cResult[2] = handleLogin;
  cResult[3] = loginStatus;
  cResult[4] = arg0;
  cResult[5] = first;
  cResult[6] = S;
  cResult[7] = items1;
  tmp10 = items1;
  tmp9 = S;
}) : ((arg0, handleLogin) => {
  let loginStatus;
  _require = arg0;
  let tmp = loginStatus(react.useState(), 2);
  const first = tmp[0];
  let closure_3 = tmp[1];
  let obj = require("get initialized");
  const items = [AuthenticationStore];
  loginStatus = obj.useStateFromStoresObject(items, () => {
    const obj = { loginStatus: authStore.getLoginStatus() };
    return obj;
  }).loginStatus;
  const items1 = [arg0, handleLogin, loginStatus, first];
  const effect = react.useEffect(() => {
    let closure_1;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let login;
    let tmp;
    if (closure_2 !== constants.LOGGING_IN) {
      if (tmp !== constants.FORGOT_PASSWORD) {
        closure_3(loginStatus);
      }
    }
    if (constants.MFA_STEP === loginStatus) {
      closure_0.push(constants2.MFA);
    } else {
      if (constants.ACCOUNT_SCHEDULED_FOR_DELETION !== loginStatus) {
        if (constants.ACCOUNT_DISABLED !== loginStatus) {
          if (constants.LOGIN_AGE_GATE === loginStatus) {
            closure_0.push(constants2.AGE_GATE_UNDERAGE, { existingUser: true });
          }
        }
      }
      let obj = { handleLogin };
      closure_0.push(constants2.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED, obj);
    }
    if (constants.PASSWORD_RECOVERY_PHONE_VERIFICATION === loginStatus) {
      let obj2 = {
        title: intl.string(closure_0(first[8]).t["+xqy3d"]),
        description: intl2.string(closure_0(first[8]).t.myKyqh),
        phone: login,
        onPhoneTokenReceived(arg0) {
            const obj = { externalURL: handleLogin(first[9])(arg0) };
            const replaced = closure_0.replace(constants2.EXTERNAL_LINK, obj);
          },
        onClose() {
            const obj = handleLogin(closure_2[10]);
            obj.loginReset();
          }
      };
      login = authStore.getCredentials().login;
      const replace = closure_0.replace;
      const VERIFY_PHONE = constants2.VERIFY_PHONE;
      intl = closure_0(first[8]).intl;
      intl2 = closure_0(first[8]).intl;
      let replaced = replace(VERIFY_PHONE, obj2);
    } else if (constants.PHONE_IP_AUTHORIZATION === loginStatus) {
      const credentials = authStore.getCredentials();
      ({ login: closure_0, password: closure_1 } = credentials);
      let obj3 = {
        title: intl3.string(closure_0(first[8]).t.w55Oco),
        description: intl4.string(closure_0(first[8]).t["0/ALaJ"]),
        phone: authStore.getCredentials().login,
        onPhoneTokenReceived: function() {
            return closure_2(...arguments);
          },
        onClose(arg0) {
            const tmp = arg0;
            if (tmp) {
              const tmp7 = null != handleLogin && "" !== handleLogin;
              if (tmp7) {
                handleLogin(closure_0, handleLogin);
              }
            } else {
              const obj = AuthenticationActionCreatorsDefault;
              obj.loginReset();
            }
          }
      };
      const push = closure_0.push;
      const VERIFY_PHONE2 = constants2.VERIFY_PHONE;
      intl3 = closure_0(first[8]).intl;
      intl4 = closure_0(first[8]).intl;
      closure_2 = closure_3(function*(arg0) {
        let obj2;
        closure_0 = arg0;
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
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
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let c2 = 0;
                let closure_1 = tmp;
                closure_0 = undefined;
                c3 = 1;
                c4 = 1;
                const obj5 = { value: obj2.authorizeIPAddress(closure_0), done: false };
                obj2 = handleLogin(closure_2[10]);
                return obj5;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              const routes = closure_0.getState().routes;
              closure_0 = routes.findIndex((name) => name.name === constants.LOGIN);
              if (closure_0 >= 0) {
                closure_0.pop(closure_0);
              } else {
                closure_0.pop();
              }
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp16) {
            c4 = 3;
            throw tmp16;
          }
        }
      });
      push(VERIFY_PHONE2, obj3);
    }
    closure_3(loginStatus);
  }, items1);
});
const result = size.fileFinishedImporting("modules/auth/native/components/utils/useWithPostLoginRouting.tsx");

export default tmp3;
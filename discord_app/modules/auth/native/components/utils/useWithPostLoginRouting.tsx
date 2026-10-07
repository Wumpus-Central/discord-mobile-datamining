// === Module 6450: useWithPostLoginRouting ===

// Module 6450 (useWithPostLoginRouting)
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6089 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;

const require = fn;
const Constants = fn(1085);
({ LoginStates: closure_7, AuthStates: closure_8 } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/utils/useWithPostLoginRouting.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, handleLogin) => {
  _require = arg0;
  const cResult = require("c").c(8);
  const tmp4 = loginStatus(noop.useState(), 2);
  first = tmp4[0];
  asyncGeneratorStep = tmp4[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function u() {
      return { loginStatus: authStore.getLoginStatus() };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  let obj = require("c");
  loginStatus = require("initialize").useStateFromStoresObject(tmp6, tmp7).loginStatus;
  if (cResult[2] === handleLogin) {
    if (cResult[3] === loginStatus) {
      if (cResult[4] === arg0) {
        if (cResult[5] === first) {
          let tmp9 = cResult[6];
          let tmp10 = cResult[7];
        }
        const effect = noop.useEffect(tmp9, tmp10);
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
          return;
        }
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
        intl = closure_0(closure_2[8]).intl;
        obj1.title = intl.string(closure_0(closure_2[8]).t["+xqy3d"]);
        intl2 = closure_0(closure_2[8]).intl;
        obj1.description = intl2.string(closure_0(closure_2[8]).t.myKyqh);
        obj1.phone = closure_1_6.getCredentials().login;
        obj1.onPhoneTokenReceived = function onPhoneTokenReceived(arg0) {
          const replaced = closure_1_0.replace(constants2.EXTERNAL_LINK, { externalURL: closure_1(first[9])(arg0) });
        };
        obj1.onClose = function onClose() {
          handleLogin(dependencyMap[10]).loginReset();
        };
        replaced = login.replace(closure_1_8.VERIFY_PHONE, obj1);
      } else if (tmp2.PHONE_IP_AUTHORIZATION === tmp6) {
        tmp24 = closure_1_6;
        credentials = closure_1_6.getCredentials();
        ({ login, password } = credentials);
        tmp26 = login;
        tmp27 = closure_1_8;
        obj4 = { title: null, description: null, phone: null, onPhoneTokenReceived: null, onClose: null };
        tmp28 = closure_0;
        tmp29 = closure_2;
        intl3 = closure_0(closure_2[8]).intl;
        obj4.title = intl3.string(closure_0(closure_2[8]).t.w55Oco);
        intl4 = closure_0(closure_2[8]).intl;
        obj4.description = intl4.string(closure_0(closure_2[8]).t["0/ALaJ"]);
        obj4.phone = closure_1_6.getCredentials().login;
        tmp30 = closure_3;
        closure_2 = closure_3(function*(arg0) {
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
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
                  c2 = 0;
                  closure_1 = tmp2;
                  closure_129_0 = undefined;
                  c3 = 1;
                  c4 = 1;
                  const obj5 = { value: handleLogin(dependencyMap[10]).authorizeIPAddress(closure_0), done: false };
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
                closure_129_0 = routes.findIndex(() => { ... });
                if (closure_129_0 >= 0) {
                  closure_0.pop(closure_129_0);
                } else {
                  closure_0.pop();
                }
                c4 = 3;
              }
            } catch (tmp17) {
              c4 = tmp;
              throw tmp17;
            }
          }
        });
        obj4.onPhoneTokenReceived = function() {
          const self = this;
          const apply = closure_2.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        obj4.onClose = function onClose(arg0) {
          if (arg0) {
            let tmp6 = null != handleLogin;
            if (tmp6) {
              tmp6 = "" !== handleLogin;
            }
            if (tmp6) {
              closure_1(closure_1_0, handleLogin);
            }
          } else {
            AuthenticationActionCreatorsDefault.loginReset();
          }
        };
        arr3 = login.push(closure_1_8.VERIFY_PHONE, obj4);
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
  const tmpResult = require("initialize");
}) : ((arg0, handleLogin) => {
  _require = arg0;
  const tmp = loginStatus(noop.useState(), 2);
  const first = tmp[0];
  closure_3 = tmp[1];
  const items = [AuthenticationStore];
  loginStatus = require("initialize").useStateFromStoresObject(items, () => ({ loginStatus: authStore.getLoginStatus() })).loginStatus;
  const items1 = [arg0, handleLogin, loginStatus, first];
  const effect = noop.useEffect(() => {
    if (dependencyMap !== constants.LOGGING_IN) {
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
      const obj2 = { title: null, description: null, phone: null, onPhoneTokenReceived: null, onClose: null };
      const intl = closure_0(first[8]).intl;
      obj2.title = intl.string(closure_0(first[8]).t["+xqy3d"]);
      const intl2 = closure_0(first[8]).intl;
      obj2.description = intl2.string(closure_0(first[8]).t.myKyqh);
      obj2.phone = authStore.getCredentials().login;
      obj2.onPhoneTokenReceived = function onPhoneTokenReceived(arg0) {
        const replaced = closure_1_0.replace(constants2.EXTERNAL_LINK, { externalURL: closure_1(first[9])(arg0) });
      };
      obj2.onClose = function onClose() {
        handleLogin(dependencyMap[10]).loginReset();
      };
      let replaced = closure_0.replace(constants2.VERIFY_PHONE, obj2);
    } else if (constants.PHONE_IP_AUTHORIZATION === loginStatus) {
      const credentials = authStore.getCredentials();
      ({ login: closure_0, password: closure_1 } = credentials);
      let obj3 = { title: null, description: null, phone: null, onPhoneTokenReceived: null, onClose: null };
      const intl3 = closure_0(first[8]).intl;
      obj3.title = intl3.string(closure_0(first[8]).t.w55Oco);
      const intl4 = closure_0(first[8]).intl;
      obj3.description = intl4.string(closure_0(first[8]).t["0/ALaJ"]);
      obj3.phone = authStore.getCredentials().login;
      dependencyMap = closure_3(function*(arg0) {
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
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
                c2 = 0;
                closure_1 = tmp2;
                closure_129_0 = undefined;
                c3 = 1;
                c4 = 1;
                const obj5 = { value: handleLogin(dependencyMap[10]).authorizeIPAddress(closure_0), done: false };
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
              closure_129_0 = routes.findIndex((name) => name.name === constants.LOGIN);
              if (closure_129_0 >= 0) {
                closure_0.pop(closure_129_0);
              } else {
                closure_0.pop();
              }
              c4 = 3;
            }
          } catch (tmp17) {
            c4 = tmp;
            throw tmp17;
          }
        }
      });
      obj3.onPhoneTokenReceived = function() {
        const self = this;
        const apply = closure_2.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj3.onClose = function onClose(arg0) {
        if (arg0) {
          let tmp6 = null != handleLogin;
          if (tmp6) {
            tmp6 = "" !== handleLogin;
          }
          if (tmp6) {
            closure_1(closure_1_0, handleLogin);
          }
        } else {
          AuthenticationActionCreatorsDefault.loginReset();
        }
      };
      closure_0.push(constants2.VERIFY_PHONE, obj3);
    }
    closure_3(loginStatus);
  }, items1);
});
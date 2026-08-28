// === Module 7675: useWithPostLoginRouting ===

// Module 7675 (useWithPostLoginRouting)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import closure_6 from "fetchFingerprint" /* 1218 */;
import ME from "ME" /* 676 */;

const require = arg1;
({ LoginStates: error, AuthStates: closure_8 } = ME);
const result = require("set").fileFinishedImporting("modules/auth/native/components/utils/useWithPostLoginRouting.tsx");

export default function useWithPostLoginRouting(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  const tmp = loginStatus(React.useState(), 2);
  const first = tmp[0];
  closure_3 = tmp[1];
  const items = [closure_6];
  loginStatus = _require(first[5]).useStateFromStoresObject(items, () => ({ loginStatus: loginStatus.getLoginStatus() })).loginStatus;
  const items1 = [arg0, arg1, loginStatus, first];
  const effect = React.useEffect(() => {
    if (closure_2 !== closure_1_7.LOGGING_IN) {
      if (tmp !== tmp2.FORGOT_PASSWORD) {
        callback(loginStatus);
      }
    }
    if (closure_1_7.MFA_STEP === loginStatus) {
      arr = arr.push(closure_1_8.MFA);
    } else {
      if (tmp2.ACCOUNT_SCHEDULED_FOR_DELETION !== tmp6) {
        if (tmp2.ACCOUNT_DISABLED !== tmp6) {
          if (tmp2.LOGIN_AGE_GATE === tmp6) {
            arr = arr.push(closure_1_8.AGE_GATE_UNDERAGE, { existingUser: true });
          }
        }
      }
      let obj = { handleLogin: null };
      obj[0] = closure_1;
      arr.push(closure_1_8.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED, obj);
    }
    if (closure_1_7.PASSWORD_RECOVERY_PHONE_VERIFICATION === loginStatus) {
      obj = { title: null, description: null, phone: null, onPhoneTokenReceived: null, onClose: null };
      const intl = arr(first[6]).intl;
      obj[0] = intl.string(arr(first[6]).t["+xqy3d"]);
      const intl2 = arr(first[6]).intl;
      obj[1] = intl2.string(arr(first[6]).t.myKyqh);
      obj[2] = closure_1_6.getCredentials().login;
      obj[3] = function onPhoneTokenReceived(arg0) {
        const replaced = closure_0.replace(closure_1_8.EXTERNAL_LINK, { externalURL: closure_1_1(7676)(arg0) });
      };
      obj[4] = function onClose() {
        callback(6017).loginReset();
      };
      let replaced = arr.replace(closure_1_8.VERIFY_PHONE, obj);
    } else if (tmp2.PHONE_IP_AUTHORIZATION === tmp6) {
      const credentials = closure_1_6.getCredentials();
      ({ login: closure_0, password: closure_1 } = credentials);
      obj = { title: null, description: null, phone: null, onPhoneTokenReceived: null, onClose: null };
      const intl3 = arr(first[6]).intl;
      obj[0] = intl3.string(arr(first[6]).t.w55Oco);
      const intl4 = arr(first[6]).intl;
      obj[1] = intl4.string(arr(first[6]).t["0/ALaJ"]);
      obj[2] = closure_1_6.getCredentials().login;
      closure_2 = callback((arg0) => {
        closure_0 = arg0;
        c3 = 0;
        c4 = 0;
        return (function*(arg0) {
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
                  c2 = 0;
                  closure_1 = tmp2;
                  let arr;
                  obj1 = closure_2_1(table[8]);
                  c3 = 1;
                  c4 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = obj1.authorizeIPAddress(arr);
                  return obj1;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                const routes = arr.getState().routes;
                arr = routes.findIndex((name) => name.name === constants.LOGIN);
                if (arr >= 0) {
                  arr = arr.pop(arr);
                } else {
                  arr = arr.pop();
                }
                c4 = 3;
              }
            } catch (tmp17) {
              c4 = tmp;
              throw tmp17;
            }
          }
        })();
      });
      obj[3] = function() {
        const self = this;
        const apply = closure_2.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj[4] = function onClose(arg0) {
        if (arg0) {
          let tmp6 = null != callback;
          if (tmp6) {
            tmp6 = "" !== tmp4;
          }
          if (tmp6) {
            closure_1_1(closure_0, tmp4);
          }
        } else {
          callback(first[8]).loginReset();
          const obj = callback(first[8]);
        }
      };
      arr.push(closure_1_8.VERIFY_PHONE, obj);
    }
    callback(loginStatus);
  }, items1);
};
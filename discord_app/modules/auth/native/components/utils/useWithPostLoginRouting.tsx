// discord_app/modules/auth/native/components/utils/useWithPostLoginRouting.tsx
import AuthenticationActionCreatorsDefault from "../../../../../actions/AuthenticationActionCreators.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../../../stores/AuthenticationStore.tsx";

const require = fn;
const Constants = fn(1074);
({ LoginStates: closure_7, AuthStates: closure_8 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/utils/useWithPostLoginRouting.tsx");

export default function useWithPostLoginRouting(arg0, handleLogin) {
  _require = arg0;
  const tmp = loginStatus(noop.useState(), 2);
  const first = tmp[0];
  closure_3 = tmp[1];
  const items = [AuthenticationStore];
  loginStatus = require("initialize").useStateFromStoresObject(items, () => ({
    loginStatus: authStore.getLoginStatus(),
  })).loginStatus;
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
      obj = { title: null, description: null, phone: null, onPhoneTokenReceived: null, onClose: null };
      const intl = closure_0(first[6]).intl;
      obj.title = intl.string(closure_0(first[6]).t["+xqy3d"]);
      const intl2 = closure_0(first[6]).intl;
      obj.description = intl2.string(closure_0(first[6]).t.myKyqh);
      obj.phone = authStore.getCredentials().login;
      obj.onPhoneTokenReceived = function onPhoneTokenReceived(arg0) {
        const replaced = closure_1_0.replace(constants2.EXTERNAL_LINK, { externalURL: closure_1(first[7])(arg0) });
      };
      obj.onClose = function onClose() {
        handleLogin(dependencyMap[8]).loginReset();
      };
      let replaced = closure_0.replace(constants2.VERIFY_PHONE, obj);
    } else if (constants.PHONE_IP_AUTHORIZATION === loginStatus) {
      const credentials = authStore.getCredentials();
      ({ login: closure_0, password: closure_1 } = credentials);
      obj = { title: null, description: null, phone: null, onPhoneTokenReceived: null, onClose: null };
      const intl3 = closure_0(first[6]).intl;
      obj.title = intl3.string(closure_0(first[6]).t.w55Oco);
      const intl4 = closure_0(first[6]).intl;
      obj.description = intl4.string(closure_0(first[6]).t["0/ALaJ"]);
      obj.phone = authStore.getCredentials().login;
      dependencyMap = closure_3(function* (arg0) {
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
                c2 = 0;
                closure_1 = tmp2;
                closure_129_0 = undefined;
                let obj1 = handleLogin(dependencyMap[8]);
                c3 = 1;
                c4 = 1;
                obj1 = { value: null, done: false };
                obj1.value = obj1.authorizeIPAddress(closure_0);
                return obj1;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value, done: true };
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
      obj.onPhoneTokenReceived = function () {
        const self = this;
        const apply = closure_2.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj.onClose = function onClose(arg0) {
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
      closure_0.push(constants2.VERIFY_PHONE, obj);
    }
    closure_3(loginStatus);
  }, items1);
}

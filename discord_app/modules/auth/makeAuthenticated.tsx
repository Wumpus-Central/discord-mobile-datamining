// discord_app/modules/auth/makeAuthenticated.tsx
import AuthenticationUtils from "../../utils/AuthenticationUtils.tsx";
import RedirectUnauthenticatedDefault from "RedirectUnauthenticated.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";

require = fn;
const LoginStates = fn(1074).LoginStates;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/makeAuthenticated.tsx");

export const makeAuthenticated = function makeAuthenticated(displayName, arg1) {
  _require = displayName;
  importDefault = arg1;
  if (arg2 === undefined) {
    let obj = { passProps: true };
  }
  let str = displayName.displayName;
  if (str == null) {
    str = displayName.name;
  }
  if (str == null) {
    str = "<Unknown>";
  }
  class Authenticated {
    constructor(arg0) {
      tmp = closure_2;
      obj = closure_0(closure_2[4]);
      if (!obj.isAuthenticated()) {
        obj2 = closure_3;
        tmp2 = LoginStates;
        if (closure_3.getLoginStatus() !== LoginStates.LOGGING_IN) {
          if (obj2.allowLogoutRedirect()) {
            tmp4 = null;
            if (null != closure_1) {
              tmp8 = jsx;
              obj = { renderRedirect: null };
              tmp9 = closure_1;
              obj.renderRedirect = jsx(closure_1(tmp[5]), {});
              tmp10Result = jsx(tmp3, obj);
            } else {
              tmp5 = jsx;
              tmp6 = closure_1;
              tmp10Result = jsx(closure_1(tmp[5]), {});
            }
          }
          return tmp10Result;
        }
      }
      tmp12 = null;
      tmp10 = jsx;
      tmp11 = closure_0;
      if (closure_2.passProps) {
        tmp12 = displayName;
      }
      obj1 = {};
      merged = Object.assign(tmp12);
      tmp10Result = tmp10(tmp11, obj1);
      return;
    }
  }
  Authenticated.displayName = "Authenticated(" + str + ")";
  return Authenticated;
};

import "noop";
import fetchFingerprint from "fetchFingerprint";
import { LoginStates } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/auth/makeAuthenticated.tsx");

export const makeAuthenticated = function makeAuthenticated(displayName) {
  let closure_0 = displayName;
  let closure_1 = arg1;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = { passProps: true };
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
        obj2 = outer1_3;
        tmp2 = outer1_4;
        if (outer1_3.getLoginStatus() !== outer1_4.LOGGING_IN) {
          if (obj2.allowLogoutRedirect()) {
            tmp4 = null;
            if (null != closure_1) {
              tmp8 = outer1_5;
              obj = { renderRedirect: null };
              tmp9 = closure_1;
              obj[0] = outer1_5(closure_1(tmp[5]), {});
              tmp10Result = outer1_5(tmp3, obj);
            } else {
              tmp5 = outer1_5;
              tmp6 = closure_1;
              tmp10Result = outer1_5(closure_1(tmp[5]), {});
            }
          }
          return tmp10Result;
        }
      }
      tmp12 = null;
      tmp10 = outer1_5;
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
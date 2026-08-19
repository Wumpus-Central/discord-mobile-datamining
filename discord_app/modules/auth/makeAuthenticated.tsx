// === Module 15963: makeAuthenticated ===

// Module 15963 (makeAuthenticated)
import noopAll from "noop" /* 19 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import { LoginStates } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/auth/makeAuthenticated.tsx");

export const makeAuthenticated = function makeAuthenticated(displayName) {
  closure_0 = displayName;
  closure_1 = arg1;
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
        obj2 = closure_1_3;
        tmp2 = closure_1_4;
        if (closure_1_3.getLoginStatus() !== closure_1_4.LOGGING_IN) {
          if (obj2.allowLogoutRedirect()) {
            tmp4 = null;
            if (null != closure_1) {
              tmp8 = closure_1_5;
              obj = { renderRedirect: null };
              tmp9 = closure_1;
              obj[0] = closure_1_5(closure_1(tmp[5]), {});
              tmp10Result = closure_1_5(tmp3, obj);
            } else {
              tmp5 = closure_1_5;
              tmp6 = closure_1;
              tmp10Result = closure_1_5(closure_1(tmp[5]), {});
            }
          }
          return tmp10Result;
        }
      }
      tmp12 = null;
      tmp10 = closure_1_5;
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
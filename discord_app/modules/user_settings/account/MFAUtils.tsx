// === Module 14965: account/MFAUtils ===

// Module 14965 (account/MFAUtils)
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import MFAUtils from "MFAUtils" /* 6631 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

require = fn;
const Constants = fn(1085);
({ GuildFeatures: hasOwnProperty, Permissions: metroRequire, UserFlags: closure_7 } = Constants);
fn(558);
const obj2 = { AVAILABLE: "available", UNAVAILABLE_NO_CRYPTO: "unavailable_no_crypto", UNAVAILABLE_UNVERIFIED: "unavailable_unverified" };
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsMFAEnabled() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      currentUser = currentUser.getCurrentUser();
      return null != currentUser && currentUser.mfaEnabled;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return useStateFromStores.useStateFromStores(tmp4, tmp5);
}) : (function useIsMFAEnabled() {
  const items = [UserStore];
  return useStateFromStores.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    return null != currentUser && currentUser.mfaEnabled;
  });
});
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMFAAvailability() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      currentUser = currentUser.getCurrentUser();
      let verified;
      if (currentUser != null) {
        verified = currentUser.verified;
      }
      return verified;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = useStateFromStores.useStateFromStores(tmp4, tmp5);
  if (MFAUtils.hasCrypto) {
    if (false === stateFromStores) {
      let AVAILABLE = obj2.UNAVAILABLE_UNVERIFIED;
    } else {
      AVAILABLE = obj2.AVAILABLE;
    }
  } else {
    return obj2.UNAVAILABLE_NO_CRYPTO;
  }
  const tmpResult = useStateFromStores;
}) : (function useMFAAvailability() {
  const items = [UserStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let verified;
    if (currentUser != null) {
      verified = currentUser.verified;
    }
    return verified;
  });
  if (MFAUtils.hasCrypto) {
    if (false === stateFromStores) {
      let AVAILABLE = obj2.UNAVAILABLE_UNVERIFIED;
    } else {
      AVAILABLE = obj2.AVAILABLE;
    }
  } else {
    return obj2.UNAVAILABLE_NO_CRYPTO;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/MFAUtils.tsx");

export const getSMSBackupDisabledMessage = function getSMSBackupDisabledMessage(stateFromStores) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (null == stateFromStores) {
    return null;
  } else {
    if (!stateFromStores.hasAnyStaffLevel()) {
      if (stateFromStores.hasFlag(constants.PARTNER)) {
        const intl2 = util.intl;
        const string2 = intl2.string;
        let t = util.t;
        if (flag) {
          t = t["9UucjT"];
          let string2Result = string2(t);
        } else {
          string2Result = string2(t.Sq6Q1u);
        }
      } else if (null == stateFromStores.email) {
        const intl = util.intl;
        const string = intl.string;
        let t1 = util.t;
        if (flag) {
          t1 = t1["9VWpT9"];
          let stringResult = string(t1);
        } else {
          stringResult = string(t1.LfCBZG);
        }
      }
    }
    const intl3 = util.intl;
    const string3 = intl3.string;
    let YJGvuD = util.t;
    if (flag) {
      YJGvuD = YJGvuD.YJGvuD;
      let string3Result = string3(YJGvuD);
    } else {
      string3Result = string3(YJGvuD["3iKih7"]);
    }
  }
};
export const useIsMFAEnabled = tmp3;
export const MFAAvailability = obj2;
export const useMFAAvailability = tmp4;
export const use2FARemoveDisableReason = ReactCompilerGating.isReactCompilerEnabled() ? (function use2FARemoveDisableReason(arg0) {
  const cResult = require("c").c(3);
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, PermissionStore, UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== (undefined !== arg0 && arg0)) {
    class S {
      constructor() {
        currentUser = closure_4.getCurrentUser();
        hasAnyStaffLevelResult = undefined;
        if (currentUser != null) {
          hasAnyStaffLevelResult = currentUser.hasAnyStaffLevel();
        }
        if (hasAnyStaffLevelResult) {
          tmp9 = closure_0;
          tmp10 = closure_0;
          tmp11 = closure_1;
          intl2 = closure_0(closure_1[4]).intl;
          string2 = intl2.string;
          hxf9fX = closure_0(closure_1[4]).t;
          if (closure_0) {
            hxf9fX = hxf9fX.hxf9fX;
            string2Result = string2(hxf9fX);
          } else {
            string2Result = string2(hxf9fX["3iKih7"]);
          }
          tmp13 = string2Result;
        } else {
          tmp2 = closure_2;
          guildsArray = closure_2.getGuildsArray();
          tmp3 = null;
          if (!guildsArray.some(() => { ... })) {
            return null;
          } else {
            tmp4 = closure_0;
            tmp5 = closure_0;
            tmp6 = closure_1;
            intl = closure_0(closure_1[4]).intl;
            string = intl.string;
            OYTCUh = closure_0(closure_1[4]).t;
            if (closure_0) {
              OYTCUh = OYTCUh.OYTCUh;
              stringResult = string(OYTCUh);
            } else {
              stringResult = string(OYTCUh.HC8uSZ);
            }
            tmp8 = stringResult;
          }
        }
        return;
      }
    }
    cResult[1] = tmp4;
    cResult[2] = S;
  } else {
    class S {
      constructor() {
        currentUser = closure_4.getCurrentUser();
        hasAnyStaffLevelResult = undefined;
        if (currentUser != null) {
          hasAnyStaffLevelResult = currentUser.hasAnyStaffLevel();
        }
        if (hasAnyStaffLevelResult) {
          tmp9 = closure_0;
          tmp10 = closure_0;
          tmp11 = closure_1;
          intl2 = closure_0(closure_1[4]).intl;
          string2 = intl2.string;
          hxf9fX = closure_0(closure_1[4]).t;
          if (closure_0) {
            hxf9fX = hxf9fX.hxf9fX;
            string2Result = string2(hxf9fX);
          } else {
            string2Result = string2(hxf9fX["3iKih7"]);
          }
          tmp13 = string2Result;
        } else {
          tmp2 = closure_2;
          guildsArray = closure_2.getGuildsArray();
          tmp3 = null;
          if (!guildsArray.some(() => { ... })) {
            return null;
          } else {
            tmp4 = closure_0;
            tmp5 = closure_0;
            tmp6 = closure_1;
            intl = closure_0(closure_1[4]).intl;
            string = intl.string;
            OYTCUh = closure_0(closure_1[4]).t;
            if (closure_0) {
              OYTCUh = OYTCUh.OYTCUh;
              stringResult = string(OYTCUh);
            } else {
              stringResult = string(OYTCUh.HC8uSZ);
            }
            tmp8 = stringResult;
          }
        }
        return;
      }
    }
  }
  const obj = require("c");
  return require("useStateFromStores").useStateFromStores(first, S);
}) : (function use2FARemoveDisableReason() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const items = [GuildStore, PermissionStore, UserStore];
  return flag(573).useStateFromStores(items, () => {
    const currentUser = UserStore.getCurrentUser();
    let hasAnyStaffLevelResult;
    if (currentUser != null) {
      hasAnyStaffLevelResult = currentUser.hasAnyStaffLevel();
    }
    if (hasAnyStaffLevelResult) {
      const intl2 = util.intl;
      const string2 = intl2.string;
      let hxf9fX = util.t;
      if (flag) {
        hxf9fX = hxf9fX.hxf9fX;
        let string2Result = string2(hxf9fX);
      } else {
        string2Result = string2(hxf9fX["3iKih7"]);
      }
    } else {
      const guildsArray = GuildStore.getGuildsArray();
      if (!guildsArray.some((features) => {
        features = features.features;
        let hasItem = features.has(constants.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
        if (hasItem) {
          hasItem = closure_1_3.can(constants2.ADMINISTRATOR, features);
        }
        return hasItem;
      })) {
        return null;
      } else {
        const intl = util.intl;
        const string = intl.string;
        let OYTCUh = util.t;
        if (flag) {
          OYTCUh = OYTCUh.OYTCUh;
          let stringResult = string(OYTCUh);
        } else {
          stringResult = string(OYTCUh.HC8uSZ);
        }
      }
    }
  });
});
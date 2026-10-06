// discord_app/modules/user_settings/account/MFAUtils.tsx
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import react from "../../../../_runtime/00576_react.js";
import intl4 from "../../../intl/index.native.tsx";
import MFAUtils from "../../../utils/MFAUtils.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import Constants from "../../../Constants.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, features, tmp10, tmp2, tmp6, tmp8, tmp9;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ GuildFeatures: hasOwnProperty, Permissions: metroRequire, UserFlags: metroImportDefault } = Constants);
let ReactCompilerGating = ReactCompilerGating_mod;
const MFAAvailability = {
  AVAILABLE: "available",
  UNAVAILABLE_NO_CRYPTO: "unavailable_no_crypto",
  UNAVAILABLE_UNVERIFIED: "unavailable_unverified",
};
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
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
      const tmpResult = useStateFromStores;
      return tmpResult.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      const items = [UserStore];
      const obj = useStateFromStores;
      return obj.useStateFromStores(items, () => {
        currentUser = currentUser.getCurrentUser();
        return null != currentUser && currentUser.mfaEnabled;
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let UNAVAILABLE_NO_CRYPTO;
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
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
      const tmpResult = useStateFromStores;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (MFAUtils.hasCrypto) {
        let AVAILABLE;
        if (false === stateFromStores) {
          AVAILABLE = obj.UNAVAILABLE_UNVERIFIED;
        } else {
          AVAILABLE = obj.AVAILABLE;
        }
        UNAVAILABLE_NO_CRYPTO = AVAILABLE;
      } else {
        UNAVAILABLE_NO_CRYPTO = obj.UNAVAILABLE_NO_CRYPTO;
      }
      return UNAVAILABLE_NO_CRYPTO;
    }
  : () => {
      let UNAVAILABLE_NO_CRYPTO;
      const obj = useStateFromStores;
      const items = [UserStore];
      const stateFromStores = obj.useStateFromStores(items, () => {
        currentUser = currentUser.getCurrentUser();
        let verified;
        if (currentUser != null) {
          verified = currentUser.verified;
        }
        return verified;
      });
      if (MFAUtils.hasCrypto) {
        let AVAILABLE;
        if (false === stateFromStores) {
          AVAILABLE = obj.UNAVAILABLE_UNVERIFIED;
        } else {
          AVAILABLE = obj.AVAILABLE;
        }
        UNAVAILABLE_NO_CRYPTO = AVAILABLE;
      } else {
        UNAVAILABLE_NO_CRYPTO = obj.UNAVAILABLE_NO_CRYPTO;
      }
      return UNAVAILABLE_NO_CRYPTO;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      _require = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore, PermissionStore, UserStore];
        cResult[0] = items;
        first = items;
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
              tmp8 = closure_0;
              tmp9 = closure_0;
              tmp10 = closure_1;
              intl2 = closure_0(closure_1[4]).intl;
              string2 = intl2.string;
              t2 = closure_0(closure_1[4]).t;
              if (closure_0) {
                string2Result = string2(t2.hxf9fX);
              } else {
                string2Result = string2(t2["3iKih7"]);
              }
              tmp3 = string2Result;
            } else {
              tmp2 = closure_2;
              guildsArray = closure_2.getGuildsArray();
              tmp3 = null;
              if (
                guildsArray.some(() => {
                  /* body not rendered: F144200 */
                })
              ) {
                tmp4 = closure_0;
                tmp5 = closure_0;
                tmp6 = closure_1;
                intl = closure_0(closure_1[4]).intl;
                string = intl.string;
                t = closure_0(closure_1[4]).t;
                if (closure_0) {
                  stringResult = string(t.OYTCUh);
                } else {
                  stringResult = string(t.HC8uSZ);
                }
                tmp3 = stringResult;
              }
            }
            return tmp3;
          }
        }
        cResult[1] = undefined !== arg0 && arg0;
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
              tmp8 = closure_0;
              tmp9 = closure_0;
              tmp10 = closure_1;
              intl2 = closure_0(closure_1[4]).intl;
              string2 = intl2.string;
              t2 = closure_0(closure_1[4]).t;
              if (closure_0) {
                string2Result = string2(t2.hxf9fX);
              } else {
                string2Result = string2(t2["3iKih7"]);
              }
              tmp3 = string2Result;
            } else {
              tmp2 = closure_2;
              guildsArray = closure_2.getGuildsArray();
              tmp3 = null;
              if (
                guildsArray.some(() => {
                  /* body not rendered: F144200 */
                })
              ) {
                tmp4 = closure_0;
                tmp5 = closure_0;
                tmp6 = closure_1;
                intl = closure_0(closure_1[4]).intl;
                string = intl.string;
                t = closure_0(closure_1[4]).t;
                if (closure_0) {
                  stringResult = string(t.OYTCUh);
                } else {
                  stringResult = string(t.HC8uSZ);
                }
                tmp3 = stringResult;
              }
            }
            return tmp3;
          }
        }
      }
      const tmpResult = tmp(573);
      return tmpResult.useStateFromStores(first, S);
    }
  : () => {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      const items = [GuildStore, PermissionStore, UserStore];
      const obj = flag(573);
      return obj.useStateFromStores(items, () => {
        let constants2;
        let tmp3;
        const currentUser = UserStore.getCurrentUser();
        let hasAnyStaffLevelResult;
        if (currentUser != null) {
          hasAnyStaffLevelResult = currentUser.hasAnyStaffLevel();
        }
        if (hasAnyStaffLevelResult) {
          let string2Result;
          const intl2 = intl4.intl;
          const string2 = intl2.string;
          const t2 = intl4.t;
          if (flag) {
            string2Result = string2(t2.hxf9fX);
          } else {
            string2Result = string2(t2["3iKih7"]);
          }
          tmp3 = string2Result;
        } else {
          const guildsArray = GuildStore.getGuildsArray();
          tmp3 = null;
          if (
            guildsArray.some((features) => {
              features = features.features;
              const hasItem =
                features.has(constants.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                closure_1_3.can(constants2.ADMINISTRATOR, features);
              return hasItem;
            })
          ) {
            let stringResult;
            const intl = intl4.intl;
            const string = intl.string;
            const t = intl4.t;
            if (flag) {
              stringResult = string(t.OYTCUh);
            } else {
              stringResult = string(t.HC8uSZ);
            }
            tmp3 = stringResult;
          }
        }
        return tmp3;
      });
    };
const result = size.fileFinishedImporting("modules/user_settings/account/MFAUtils.tsx");

export const getSMSBackupDisabledMessage = function getSMSBackupDisabledMessage(stateFromStores) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let tmp = null;
  if (null != stateFromStores) {
    let tmp3;
    if (stateFromStores.hasAnyStaffLevel()) {
      let string3Result;
      const intl3 = intl4.intl;
      const string3 = intl3.string;
      const t3 = intl4.t;
      if (flag) {
        string3Result = string3(t3.YJGvuD);
      } else {
        string3Result = string3(t3["3iKih7"]);
      }
      tmp3 = string3Result;
    } else if (stateFromStores.hasFlag(metroImportDefault.PARTNER)) {
      let string2Result;
      const intl2 = intl4.intl;
      const string2 = intl2.string;
      const t2 = intl4.t;
      if (flag) {
        string2Result = string2(t2["9UucjT"]);
      } else {
        string2Result = string2(t2.Sq6Q1u);
      }
      tmp3 = string2Result;
    } else {
      tmp3 = null;
      if (null == stateFromStores.email) {
        let stringResult;
        const intl = intl4.intl;
        const string = intl.string;
        const t = intl4.t;
        if (flag) {
          stringResult = string(t["9VWpT9"]);
        } else {
          stringResult = string(t.LfCBZG);
        }
        tmp3 = stringResult;
      }
    }
    tmp = tmp3;
  }
  return tmp;
};
export const useIsMFAEnabled = tmp3;
export { MFAAvailability };
export const useMFAAvailability = tmp4;
export const use2FARemoveDisableReason = tmp5;

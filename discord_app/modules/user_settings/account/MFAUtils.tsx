// discord_app/modules/user_settings/account/MFAUtils.tsx
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import util from "../../../intl/index.native.tsx";
import MFAUtils from "../../../utils/MFAUtils.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const Constants = fn(1074);
({ GuildFeatures: hasOwnProperty, Permissions: metroRequire, UserFlags: closure_7 } = Constants);
const MFAAvailability = {
  AVAILABLE: "available",
  UNAVAILABLE_NO_CRYPTO: "unavailable_no_crypto",
  UNAVAILABLE_UNVERIFIED: "unavailable_unverified",
};
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
export const useIsMFAEnabled = function useIsMFAEnabled() {
  const items = [UserStore];
  return useStateFromStores.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    return null != currentUser && currentUser.mfaEnabled;
  });
};
export { MFAAvailability };
export const useMFAAvailability = function useMFAAvailability() {
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
    if (false === stateFromStores) {
      let AVAILABLE = obj.UNAVAILABLE_UNVERIFIED;
    } else {
      AVAILABLE = obj.AVAILABLE;
    }
  } else {
    return obj.UNAVAILABLE_NO_CRYPTO;
  }
};
export const use2FARemoveDisableReason = function use2FARemoveDisableReason() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const items = [GuildStore, PermissionStore, UserStore];
  return flag(563).useStateFromStores(items, () => {
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
      if (
        !guildsArray.some((features) => {
          features = features.features;
          let hasItem = features.has(constants.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
          if (hasItem) {
            hasItem = closure_1_3.can(constants2.ADMINISTRATOR, features);
          }
          return hasItem;
        })
      ) {
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
};

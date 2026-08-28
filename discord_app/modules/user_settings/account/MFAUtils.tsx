// === Module 14333: getSMSBackupDisabledMessage ===

// Module 14333 (getSMSBackupDisabledMessage)
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _crypto from "_crypto" /* 7671 */;
import closure_2 from "createGuildRecordFromRust" /* 1910 */;
import closure_3 from "getUncachedChannelPermissions" /* 4090 */;
import closure_4 from "mergeGuildAvatar" /* 1923 */;
import ME from "ME" /* 676 */;

require = arg1;
({ GuildFeatures: c5, Permissions: closure_6, UserFlags: error } = ME);
let obj = { AVAILABLE: "available", UNAVAILABLE_NO_CRYPTO: "unavailable_no_crypto", UNAVAILABLE_UNVERIFIED: "unavailable_unverified" };
const result = require("set").fileFinishedImporting("modules/user_settings/account/MFAUtils.tsx");

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
        const intl2 = getSystemLocale.intl;
        const string2 = intl2.string;
        if (flag) {
          let string2Result = string2(_9UucjT);
        } else {
          string2Result = string2(_9UucjT.Sq6Q1u);
        }
      } else if (null == stateFromStores.email) {
        const intl = getSystemLocale.intl;
        const string = intl.string;
        if (flag) {
          let stringResult = string(_9VWpT9);
        } else {
          stringResult = string(_9VWpT9.LfCBZG);
        }
      }
    }
    const intl3 = getSystemLocale.intl;
    const string3 = intl3.string;
    let YJGvuD = getSystemLocale.t;
    if (flag) {
      YJGvuD = YJGvuD.YJGvuD;
      let string3Result = string3(YJGvuD);
    } else {
      string3Result = string3(YJGvuD["3iKih7"]);
    }
  }
};
export const useIsMFAEnabled = function useIsMFAEnabled() {
  const items = [closure_4];
  return defaultAreStatesEqual.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    return null != currentUser && currentUser.mfaEnabled;
  });
};
export const MFAAvailability = obj;
export const useMFAAvailability = function useMFAAvailability() {
  obj = defaultAreStatesEqual;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let verified;
    if (currentUser != null) {
      verified = currentUser.verified;
    }
    return verified;
  });
  if (_crypto.hasCrypto) {
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
  const items = [closure_2, closure_3, closure_4];
  return flag(647).useStateFromStores(items, () => {
    const currentUser = closure_1_4.getCurrentUser();
    let hasAnyStaffLevelResult;
    if (currentUser != null) {
      hasAnyStaffLevelResult = currentUser.hasAnyStaffLevel();
    }
    if (hasAnyStaffLevelResult) {
      const intl2 = flag(closure_1_1[4]).intl;
      const string2 = intl2.string;
      let hxf9fX = flag(closure_1_1[4]).t;
      if (flag) {
        hxf9fX = hxf9fX.hxf9fX;
        let string2Result = string2(hxf9fX);
      } else {
        string2Result = string2(hxf9fX["3iKih7"]);
      }
    } else {
      const guildsArray = closure_1_2.getGuildsArray();
      if (!guildsArray.some((features) => {
        features = features.features;
        let hasItem = features.has(constants.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
        if (hasItem) {
          hasItem = closure_3.can(constants2.ADMINISTRATOR, features);
        }
        return hasItem;
      })) {
        return null;
      } else {
        const intl = flag(closure_1_1[4]).intl;
        const string = intl.string;
        let OYTCUh = flag(closure_1_1[4]).t;
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
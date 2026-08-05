// discord_app/modules/user_settings/account/MFAUtils.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { _crypto } from "../../../utils/MFAUtils.tsx";

let c5;
let closure_6;
let error;
const require = arg1;
({ GuildFeatures: c5, Permissions: closure_6, UserFlags: error } = ME);
let obj = { AVAILABLE: "available", UNAVAILABLE_NO_CRYPTO: "unavailable_no_crypto", UNAVAILABLE_UNVERIFIED: "unavailable_unverified" };
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/user_settings/account/MFAUtils.tsx");

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
        const intl2 = getSystemLocale /* getSystemLocale */.intl;
        const string2 = intl2.string;
        if (flag) {
          let string2Result = string2(_9UucjT);
        } else {
          string2Result = string2(_9UucjT.Sq6Q1u);
        }
      } else if (null == stateFromStores.email) {
        const intl = getSystemLocale /* getSystemLocale */.intl;
        const string = intl.string;
        if (flag) {
          let stringResult = string(_9VWpT9);
        } else {
          stringResult = string(_9VWpT9.LfCBZG);
        }
      }
    }
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    const string3 = intl3.string;
    let YJGvuD = getSystemLocale /* getSystemLocale */.t;
    if (flag) {
      YJGvuD = YJGvuD.YJGvuD;
      let string3Result = string3(YJGvuD);
    } else {
      string3Result = string3(YJGvuD["3iKih7"]);
    }
  }
};
export const useIsMFAEnabled = function useIsMFAEnabled() {
  const items = [mergeGuildAvatar];
  return defaultAreStatesEqual /* defaultAreStatesEqual */.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    return null != currentUser && currentUser.mfaEnabled;
  });
};
export const MFAAvailability = obj;
export const useMFAAvailability = function useMFAAvailability() {
  const obj = defaultAreStatesEqual /* defaultAreStatesEqual */;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let verified;
    if (currentUser != null) {
      verified = currentUser.verified;
    }
    return verified;
  });
  if (_crypto /* _crypto */.hasCrypto) {
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
  const items = [createGuildRecordFromRust, getUncachedChannelPermissions, mergeGuildAvatar];
  return flag(647).useStateFromStores(items, () => {
    const currentUser = outer1_4.getCurrentUser();
    let hasAnyStaffLevelResult;
    if (currentUser != null) {
      hasAnyStaffLevelResult = currentUser.hasAnyStaffLevel();
    }
    if (hasAnyStaffLevelResult) {
      const intl2 = flag(outer1_1[4]).intl;
      const string2 = intl2.string;
      let hxf9fX = flag(outer1_1[4]).t;
      if (flag) {
        hxf9fX = hxf9fX.hxf9fX;
        let string2Result = string2(hxf9fX);
      } else {
        string2Result = string2(hxf9fX["3iKih7"]);
      }
    } else {
      const guildsArray = outer1_2.getGuildsArray();
      if (!guildsArray.some((features) => {
        features = features.features;
        let hasItem = features.has(constants.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
        if (hasItem) {
          hasItem = getUncachedChannelPermissions.can(constants2.ADMINISTRATOR, features);
        }
        return hasItem;
      })) {
        return null;
      } else {
        const intl = flag(outer1_1[4]).intl;
        const string = intl.string;
        let OYTCUh = flag(outer1_1[4]).t;
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
// discord_app/modules/group_dm/native/GroupDMNitroUpsellModel.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import isPremiumAtLeast from "../../../utils/PremiumTypeUtils.tsx";
import closure_2 from "../../../stores/UserStore.tsx";
import { MAX_GROUP_DM_PARTICIPANTS } from "../../../Constants.tsx";
import { PremiumTypes } from "../../premium/PremiumConstants.tsx";

require = arg1;
let obj = { MARKETING: "marketing", CHECKOUT: "checkout" };
obj = { NONE: "none", MANAGE: "manage", MARKETING: "marketing", CHECKOUT: "checkout" };
const result = require("set").fileFinishedImporting("modules/group_dm/native/GroupDMNitroUpsellModel.tsx");

export const GroupDMNitroAcquisitionStrategy = obj;
export const GroupDMNitroUpsellRoute = obj;
export const getGroupDMNitroAudience = function getGroupDMNitroAudience(premiumType, flag) {
  if (flag === undefined) {
    flag = false;
  }
  let str = "staff";
  if (!flag) {
    let str2 = "entitled";
    if (!obj.isPremiumAtLeast(premiumType, PremiumTypes.TIER_2)) {
      let str3 = "acquire";
      if (null != premiumType) {
        str3 = "upgrade";
      }
      str2 = str3;
    }
    str = str2;
    obj = isPremiumAtLeast;
  }
  return str;
};
export const useGroupDMNitroAudience = function useGroupDMNitroAudience() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    if (currentUser != null) {
      const premiumType = currentUser.premiumType;
    }
    let flag;
    if (currentUser != null) {
      flag = currentUser.isStaff();
    }
    if (flag == null) {
      flag = false;
    }
    if (flag === undefined) {
      flag = false;
    }
    let str = "staff";
    if (!flag) {
      let str2 = "entitled";
      if (!obj2.isPremiumAtLeast(premiumType, TIER_2.TIER_2)) {
        let str3 = "acquire";
        if (null != premiumType) {
          str3 = "upgrade";
        }
        str2 = str3;
      }
      str = str2;
      obj2 = callback(table[3]);
    }
    return str;
  });
};
export function isGroupDMNitroUpsellAudience(groupDMNitroAudience) {
  let tmp = "upgrade" === groupDMNitroAudience;
  if (!tmp) {
    tmp = "acquire" === groupDMNitroAudience;
  }
  return tmp;
}
export const shouldUseGroupDMParticipantLimitUI = function shouldUseGroupDMParticipantLimitUI(enabled, arg1) {
  let tmp = enabled;
  if (!enabled) {
    tmp = arg1 > MAX_GROUP_DM_PARTICIPANTS;
  }
  return tmp;
};
export const getGroupDMNitroCapCTAMessage = function getGroupDMNitroCapCTAMessage(groupDMNitroAudience) {
  if ("upgrade" === groupDMNitroAudience) {
    let yZOtoD = getSystemLocale.t.KfitWs;
  } else if ("acquire" === groupDMNitroAudience) {
    yZOtoD = getSystemLocale.t.Sqrz1V;
  } else {
    yZOtoD = getSystemLocale.t.yZOtoD;
  }
  return yZOtoD;
};
export const getGroupDMNitroUpsellRoute = function getGroupDMNitroUpsellRoute(audience, acquisitionStrategy) {
  let tmp2 = tmp;
  if ("upgrade" !== audience) {
    tmp2 = "acquire" === audience;
  }
  if (tmp2) {
    if (tmp) {
      let CHECKOUT = obj.MANAGE;
    } else if (acquisitionStrategy === obj.MARKETING) {
      CHECKOUT = obj.MARKETING;
    } else {
      CHECKOUT = obj.CHECKOUT;
    }
  } else {
    return obj.NONE;
  }
};
export const getGroupDMAddMembersEntryAction = function getGroupDMAddMembersEntryAction(audience) {
  audience = audience.audience;
  let str = "open";
  if (audience.memberCount >= audience.recipientLimit) {
    let str3 = "full";
    if (tmp) {
      let tmp2 = "upgrade" === audience;
      if (!tmp2) {
        tmp2 = "acquire" === audience;
      }
      str3 = "full";
      if (tmp2) {
        str3 = "upsell";
      }
    }
    str = str3;
  }
  return str;
};

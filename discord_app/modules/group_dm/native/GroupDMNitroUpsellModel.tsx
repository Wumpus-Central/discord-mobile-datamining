// discord_app/modules/group_dm/native/GroupDMNitroUpsellModel.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../_runtime/00576_react.js";
import Constants from "../../../Constants.tsx";
import intl from "../../../intl/index.native.tsx";
import PremiumConstants from "../../premium/PremiumConstants.tsx";
import PremiumTypeUtils from "../../../utils/PremiumTypeUtils.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let currentUser;

const MAX_GROUP_DM_PARTICIPANTS = Constants.MAX_GROUP_DM_PARTICIPANTS;
const PremiumTypes = PremiumConstants.PremiumTypes;
const GroupDMNitroAcquisitionStrategy = { MARKETING: "marketing", CHECKOUT: "checkout" };
let obj2 = { NONE: "none", MANAGE: "manage", MARKETING: "marketing", CHECKOUT: "checkout" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let TIER_2;
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function o() {
          let premiumType;
          currentUser = currentUser.getCurrentUser();
          if (currentUser != null) {
            premiumType = currentUser.premiumType;
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
            obj2 = PremiumTypeUtils;
            if (!obj2.isPremiumAtLeast(premiumType, TIER_2.TIER_2)) {
              let str3 = "acquire";
              if (null != premiumType) {
                str3 = "upgrade";
              }
              str2 = str3;
            }
            str = str2;
          }
          return str;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      let TIER_2;
      const items = [UserStore];
      const obj = get_initialized;
      return obj.useStateFromStores(items, () => {
        let premiumType;
        currentUser = currentUser.getCurrentUser();
        if (currentUser != null) {
          premiumType = currentUser.premiumType;
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
          obj2 = PremiumTypeUtils;
          if (!obj2.isPremiumAtLeast(premiumType, TIER_2.TIER_2)) {
            let str3 = "acquire";
            if (null != premiumType) {
              str3 = "upgrade";
            }
            str2 = str3;
          }
          str = str2;
        }
        return str;
      });
    };
function getGroupDMNitroAudience(premiumType) {
  let str = "staff";
  if (!flag) {
    let str2 = "entitled";
    const obj = PremiumTypeUtils;
    if (!obj.isPremiumAtLeast(premiumType, PremiumTypes.TIER_2)) {
      let str3 = "acquire";
      if (null != premiumType) {
        str3 = "upgrade";
      }
      str2 = str3;
    }
    str = str2;
  }
  return str;
}
function isGroupDMNitroUpsellAudience(groupDMNitroAudience) {
  return "upgrade" === groupDMNitroAudience || "acquire" === groupDMNitroAudience;
}
const result = size.fileFinishedImporting("modules/group_dm/native/GroupDMNitroUpsellModel.tsx");

export { GroupDMNitroAcquisitionStrategy };
export const GroupDMNitroUpsellRoute = obj2;
export { getGroupDMNitroAudience };
export const useGroupDMNitroAudience = tmp2;
export { isGroupDMNitroUpsellAudience };
export const shouldUseGroupDMParticipantLimitUI = function shouldUseGroupDMParticipantLimitUI(enabled, arg1) {
  return enabled || arg1 > MAX_GROUP_DM_PARTICIPANTS;
};
export const getGroupDMNitroCapCTAMessage = function getGroupDMNitroCapCTAMessage(groupDMNitroAudience) {
  let yZOtoD;
  if ("upgrade" === groupDMNitroAudience) {
    yZOtoD = intl.t.KfitWs;
  } else if ("acquire" === groupDMNitroAudience) {
    yZOtoD = intl.t.Sqrz1V;
  } else {
    yZOtoD = intl.t.yZOtoD;
  }
  return yZOtoD;
};
export const getGroupDMNitroUpsellRoute = function getGroupDMNitroUpsellRoute(audience, acquisitionStrategy) {
  let NONE;
  const tmp2 = tmp || "acquire" === audience;
  if (tmp2) {
    let CHECKOUT;
    if ("upgrade" === audience) {
      CHECKOUT = obj2.MANAGE;
    } else if (acquisitionStrategy === obj.MARKETING) {
      CHECKOUT = obj2.MARKETING;
    } else {
      CHECKOUT = obj2.CHECKOUT;
    }
    NONE = CHECKOUT;
  } else {
    NONE = obj2.NONE;
  }
  return NONE;
};
export const getGroupDMAddMembersEntryAction = function getGroupDMAddMembersEntryAction(audience) {
  audience = audience.audience;
  let str = "open";
  if (audience.memberCount >= audience.recipientLimit) {
    let str3 = "full";
    if (tmp) {
      str3 = "full";
      const tmp2 = "upgrade" === audience || "acquire" === audience;
      if (tmp2) {
        str3 = "upsell";
      }
    }
    str = str3;
  }
  return str;
};

// discord_app/modules/premium/tiered_tenure_badging/hooks/useTenureBadging.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import tDefault from "../../../../../_runtime/03975_t.js";
import getTieredTenureBadgeData from "../../../user_profile/TieredTenureBadgeUtils.tsx";
import useTieredTenureBadgeForUser from "useTieredTenureBadgeForUser.tsx";
import createUserWidgetFromServer from "../../../user_profile/UserProfileStore.tsx";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import reset from "../../../../stores/billing/SubscriptionStore.tsx";
import GuildFeatures from "../../PremiumConstants.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

require = fn;
function usePremiumSince() {
  const items = [closure_4];
  const stateFromStores = id(589).useStateFromStores(items, () => currentUser.getCurrentUser());
  obj = id(589);
  const isPremiumExactlyResult = id(1945).isPremiumExactly(stateFromStores, closure_6.TIER_2);
  id = isPremiumExactlyResult;
  const obj2 = id(1945);
  const items1 = [closure_5];
  const items2 = [isPremiumExactlyResult];
  let stateFromStores1 = id(589).useStateFromStores(items1, () => {
    const premiumSubscription = closure_1_5.getPremiumSubscription();
    let premiumSince = null;
    if (null != premiumSubscription) {
      premiumSince = null;
      if (id) {
        premiumSince = premiumSubscription.premiumSince;
      }
    }
    return premiumSince;
  }, items2);
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const obj3 = id(589);
  const items3 = [closure_3];
  if (stateFromStores1 == null) {
    stateFromStores1 = tmpResult.useStateFromStores(items3, () => {
      if (null == id) {
        return null;
      } else {
        const userProfile = closure_1_3.getUserProfile(tmp);
        let premiumSince;
        if (userProfile != null) {
          premiumSince = userProfile.premiumSince;
        }
        return premiumSince;
      }
    });
  }
  return stateFromStores1;
}
({ PremiumTypes: closure_6, TENURE_BADGES: error } = GuildFeatures);
let obj = { UPCOMING: "upcoming", EARNED: "earned" };
const result = require("obj132").fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTenureBadging.tsx");

export const TieredTenureBadgeStatus = obj;
export const useTieredTenureBadge = function useTieredTenureBadge() {
  const items = [closure_4];
  const stateFromStores = initialize.useStateFromStores(items, () => authStore.getCurrentUser());
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tieredTenureBadgeForUser = useTieredTenureBadgeForUser.useTieredTenureBadgeForUser(id);
  if (tieredTenureBadgeForUser == null) {
    tieredTenureBadgeForUser = null;
  }
  return tieredTenureBadgeForUser;
};
export const usePremiumSinceForUser = function usePremiumSinceForUser(userId) {
  const _require = userId;
  const items = [closure_3];
  return require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    if (null == id) {
      return null;
    } else {
      const userProfile = closure_1_3.getUserProfile(tmp);
      let premiumSince;
      if (userProfile != null) {
        premiumSince = userProfile.premiumSince;
      }
      return premiumSince;
    }
  });
};
export { usePremiumSince };
export const useTieredTenureBadgesFromSubscriptionData = function useTieredTenureBadgesFromSubscriptionData() {
  const values = Object.values(closure_7);
  const items = [closure_4];
  const stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => currentUser.getCurrentUser());
  obj = initialize;
  const items1 = [closure_5];
  const stateFromStores1 = require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const obj2 = initialize;
  if (obj3.isPremiumExactly(stateFromStores, closure_6.TIER_2)) {
    if (null != stateFromStores1) {
      if (null != stateFromStores1.premiumSince) {
        const obj4 = tDefault();
        _require = obj4.diff(tDefault(stateFromStores1.premiumSince).add(1, "day"), "months");
        return values.reduce((acc, item, index) => {
          let id = acc;
          if (closure_0 >= item.tenureReqNumMonths) {
            id = item.id;
          }
          return id;
        }, null);
      }
    }
  }
  return null;
};
export const useTieredTenureEarnedOnDate = function useTieredTenureEarnedOnDate() {
  const items = [closure_4];
  const stateFromStores = initialize.useStateFromStores(items, () => authStore.getCurrentUser());
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tieredTenureBadgeForUser = useTieredTenureBadgeForUser.useTieredTenureBadgeForUser(id);
  if (tieredTenureBadgeForUser == null) {
    tieredTenureBadgeForUser = null;
  }
  let tmpResult = initialize;
  const items1 = [closure_5];
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let earnedOnDate = null;
  if (null != tieredTenureBadgeForUser) {
    earnedOnDate = null;
    if (null != stateFromStores1) {
      earnedOnDate = null;
      if (null != stateFromStores1.premiumSince) {
        tmpResult = getTieredTenureBadgeData;
        earnedOnDate = tmpResult.getEarnedOnDate(tieredTenureBadgeForUser, stateFromStores1.premiumSince);
      }
    }
  }
  return earnedOnDate;
};
export const useTieredTenureBadgeData = function useTieredTenureBadgeData() {
  obj = initialize;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => authStore.getCurrentUser());
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmpResult = useTieredTenureBadgeForUser;
  const tieredTenureBadgeForUser = tmpResult.useTieredTenureBadgeForUser(id);
  let tmp7 = null;
  if (null != tieredTenureBadgeForUser) {
    tmp7 = dependencyMap[tieredTenureBadgeForUser];
  }
  tmpResult = initialize;
  const items1 = [closure_4];
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => authStore.getCurrentUser());
  let id1;
  if (stateFromStores1 != null) {
    id1 = stateFromStores1.id;
  }
  let tieredTenureBadgeForUser1 = useTieredTenureBadgeForUser.useTieredTenureBadgeForUser(id1);
  if (tieredTenureBadgeForUser1 == null) {
    tieredTenureBadgeForUser1 = null;
  }
  const tmpResult1 = useTieredTenureBadgeForUser;
  const items2 = [closure_5];
  const stateFromStores2 = initialize.useStateFromStores(items2, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let earnedOnDate = null;
  if (null != tieredTenureBadgeForUser1) {
    earnedOnDate = null;
    if (null != stateFromStores2) {
      earnedOnDate = null;
      if (null != stateFromStores2.premiumSince) {
        earnedOnDate = getTieredTenureBadgeData.getEarnedOnDate(tieredTenureBadgeForUser1, stateFromStores2.premiumSince);
        const tmpResult3 = getTieredTenureBadgeData;
      }
    }
  }
  if (null != tmp7) {
    obj = {};
    const merged = Object.assign(tmp7);
    obj.earnedOnDate = earnedOnDate;
    obj.status = obj.EARNED;
    let tmp15 = obj;
  } else {
    tmp15 = null;
    if (null != tmp14) {
      obj = {};
      const _Object = Object;
      const merged1 = Object.assign(Object.values(dependencyMap)[0]);
      obj.status = obj.UPCOMING;
      tmp15 = obj;
    }
  }
  return tmp15;
};
export const useTieredTenureBadgeDataForUser = function useTieredTenureBadgeDataForUser(userId) {
  const tieredTenureBadgeForUser = useTieredTenureBadgeForUser.useTieredTenureBadgeForUser(userId);
  let tmp2 = null;
  if (null != tieredTenureBadgeForUser) {
    tmp2 = dependencyMap[tieredTenureBadgeForUser];
  }
  return tmp2;
};
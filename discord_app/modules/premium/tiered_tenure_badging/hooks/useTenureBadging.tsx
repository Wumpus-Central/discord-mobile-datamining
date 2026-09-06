// === Module 11184: useTenureBadging ===

// Module 11184 (useTenureBadging)
import initialize from "initialize" /* 504 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1885 */;
import TieredTenureBadgeUtils from "TieredTenureBadgeUtils" /* 7634 */;
import useTieredTenureBadgeForUser from "useTieredTenureBadgeForUser" /* 11185 */;
import TenureBadgeWithheldStateExperiment from "TenureBadgeWithheldStateExperiment" /* 11186 */;
import UserProfileStore from "UserProfileStore" /* 7621 */;
import UserStore from "UserStore" /* 1371 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;

require = fn;
function usePremiumSince() {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const isPremiumExactlyResult = PremiumTypeUtils.isPremiumExactly(stateFromStores, TIER_2.TIER_2);
  const require = isPremiumExactlyResult;
  const items1 = [SubscriptionStore];
  const items2 = [isPremiumExactlyResult];
  let stateFromStores1 = initialize.useStateFromStores(items1, () => {
    const premiumSubscription = SubscriptionStore.getPremiumSubscription();
    let premiumSince = null;
    if (null != premiumSubscription) {
      premiumSince = null;
      if (isPremiumExactlyResult) {
        premiumSince = premiumSubscription.premiumSince;
      }
    }
    return premiumSince;
  }, items2);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  closure_129_0 = id;
  const items3 = [UserProfileStore];
  if (stateFromStores1 == null) {
    stateFromStores1 = tmpResult.useStateFromStores(items3, () => {
      if (null == isPremiumExactlyResult) {
        return null;
      } else {
        const userProfile = UserProfileStore.getUserProfile(tmp);
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
const PremiumConstants = fn(1373);
({ PremiumTypes: hasOwnProperty, TENURE_BADGES: metroRequire } = PremiumConstants);
const TieredTenureBadgeStatus = { UPCOMING: "upcoming", WITHHELD: "withheld", EARNED: "earned" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTenureBadging.tsx");

export { TieredTenureBadgeStatus };
export const useTieredTenureBadge = function useTieredTenureBadge() {
  const items = [UserStore];
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
  _require = userId;
  const items = [UserProfileStore];
  return require("initialize").useStateFromStores(items, () => {
    if (null == isPremiumExactlyResult) {
      return null;
    } else {
      const userProfile = UserProfileStore.getUserProfile(tmp);
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
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [SubscriptionStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let earnedTenureBadge = null;
  if (obj3.isPremiumExactly(stateFromStores, hasOwnProperty.TIER_2)) {
    let premiumSince;
    if (stateFromStores1 != null) {
      premiumSince = stateFromStores1.premiumSince;
    }
    earnedTenureBadge = TieredTenureBadgeUtils.getEarnedTenureBadge(premiumSince);
    const tmpResult = TieredTenureBadgeUtils;
  }
  return earnedTenureBadge;
};
export const useTieredTenureEarnedOnDate = function useTieredTenureEarnedOnDate() {
  const items = [UserStore];
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
  const items1 = [SubscriptionStore];
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let earnedOnDate = null;
  if (null != tieredTenureBadgeForUser) {
    earnedOnDate = null;
    if (null != stateFromStores1) {
      earnedOnDate = null;
      if (null != stateFromStores1.premiumSince) {
        tmpResult = TieredTenureBadgeUtils;
        earnedOnDate = tmpResult.getEarnedOnDate(tieredTenureBadgeForUser, stateFromStores1.premiumSince);
      }
    }
  }
  return earnedOnDate;
};
export const useTieredTenureBadgeData = function useTieredTenureBadgeData() {
  let obj = initialize;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => authStore.getCurrentUser());
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmpResult = useTieredTenureBadgeForUser;
  const tieredTenureBadgeForUser = tmpResult.useTieredTenureBadgeForUser(id);
  let tmp6 = null;
  if (null != tieredTenureBadgeForUser) {
    tmp6 = dependencyMap[tieredTenureBadgeForUser];
  }
  tmpResult = initialize;
  const items1 = [UserStore];
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
  const items2 = [SubscriptionStore];
  const stateFromStores2 = initialize.useStateFromStores(items2, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let earnedOnDate = null;
  if (null != tieredTenureBadgeForUser1) {
    earnedOnDate = null;
    if (null != stateFromStores2) {
      earnedOnDate = null;
      if (null != stateFromStores2.premiumSince) {
        earnedOnDate = TieredTenureBadgeUtils.getEarnedOnDate(tieredTenureBadgeForUser1, stateFromStores2.premiumSince);
        const tmpResult3 = TieredTenureBadgeUtils;
      }
    }
  }
  const tmp13 = usePremiumSince();
  if (null != tmp6) {
    obj = {};
    const merged = Object.assign(tmp6);
    obj.earnedOnDate = earnedOnDate;
    obj.status = obj.EARNED;
    return obj;
  } else if (null == tmp13) {
    return null;
  } else {
    let result;
    if (stateFromStores != null) {
      result = stateFromStores.hasPaidTier2Subscription();
    }
    if (!result) {
      const earnedTenureBadge = TieredTenureBadgeUtils.getEarnedTenureBadge(tmp13);
      if (null != earnedTenureBadge) {
        if (tmpResult5.shouldShowWithheldTenureBadge("useTieredTenureBadgeData")) {
          obj = {};
          const merged1 = Object.assign(dependencyMap[earnedTenureBadge]);
          obj.earnedOnDate = TieredTenureBadgeUtils.getEarnedOnDate(earnedTenureBadge, tmp13);
          obj.status = obj.WITHHELD;
          return obj;
        }
        tmpResult5 = TenureBadgeWithheldStateExperiment;
      }
      const tmpResult4 = TieredTenureBadgeUtils;
    }
    const obj1 = {};
    const _Object = Object;
    const merged2 = Object.assign(Object.values(dependencyMap)[0]);
    obj1.status = obj.UPCOMING;
    return obj1;
  }
  const tmpResult2 = initialize;
};
export const useTieredTenureBadgeDataForUser = function useTieredTenureBadgeDataForUser(userId) {
  const tieredTenureBadgeForUser = useTieredTenureBadgeForUser.useTieredTenureBadgeForUser(userId);
  let tmp2 = null;
  if (null != tieredTenureBadgeForUser) {
    tmp2 = dependencyMap[tieredTenureBadgeForUser];
  }
  return tmp2;
};
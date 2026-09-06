// discord_app/modules/premium/tiered_tenure_badging/hooks/useTenureBadging.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getTieredTenureBadgeData from "../../../user_profile/TieredTenureBadgeUtils.tsx";
import useTieredTenureBadgeForUser from "useTieredTenureBadgeForUser.tsx";
import closure_2 from "../../../user_profile/UserProfileStore.tsx";
import closure_3 from "../../../../stores/UserStore.tsx";
import closure_4 from "../../../../stores/billing/SubscriptionStore.tsx";
import GuildFeatures from "../../PremiumConstants.tsx";

require = arg1;
function usePremiumSince() {
  const items = [closure_3];
  const stateFromStores = id(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  obj = id(504);
  const tmp = id;
  const isPremiumExactlyResult = id(1885).isPremiumExactly(stateFromStores, closure_5.TIER_2);
  id = isPremiumExactlyResult;
  const obj2 = id(1885);
  const items1 = [closure_4];
  const items2 = [isPremiumExactlyResult];
  let stateFromStores1 = id(504).useStateFromStores(
    items1,
    () => {
      const premiumSubscription = closure_1_4.getPremiumSubscription();
      let premiumSince = null;
      if (null != premiumSubscription) {
        premiumSince = null;
        if (id) {
          premiumSince = premiumSubscription.premiumSince;
        }
      }
      return premiumSince;
    },
    items2,
  );
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const obj3 = id(504);
  const items3 = [closure_2];
  if (stateFromStores1 == null) {
    stateFromStores1 = tmpResult.useStateFromStores(items3, () => {
      if (null == id) {
        return null;
      } else {
        const userProfile = closure_1_2.getUserProfile(tmp);
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
({ PremiumTypes: c5, TENURE_BADGES: closure_6 } = GuildFeatures);
let obj = { UPCOMING: "upcoming", WITHHELD: "withheld", EARNED: "earned" };
let result = require("set").fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTenureBadging.tsx");

export const TieredTenureBadgeStatus = obj;
export const useTieredTenureBadge = function useTieredTenureBadge() {
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => authStore.getCurrentUser());
  obj = initialize;
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
  const items = [closure_2];
  return require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    if (null == id) {
      return null;
    } else {
      const userProfile = closure_1_2.getUserProfile(tmp);
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
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  obj = initialize;
  const tmp = require;
  const items1 = [closure_4];
  const stateFromStores1 = initialize.useStateFromStores(items1, () =>
    premiumTypeSubscription.getPremiumTypeSubscription(),
  );
  const obj2 = initialize;
  let earnedTenureBadge = null;
  if (obj3.isPremiumExactly(stateFromStores, closure_5.TIER_2)) {
    let premiumSince;
    if (stateFromStores1 != null) {
      premiumSince = stateFromStores1.premiumSince;
    }
    earnedTenureBadge = getTieredTenureBadgeData.getEarnedTenureBadge(premiumSince);
    const tmpResult = getTieredTenureBadgeData;
  }
  return earnedTenureBadge;
};
export const useTieredTenureEarnedOnDate = function useTieredTenureEarnedOnDate() {
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => authStore.getCurrentUser());
  obj = initialize;
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tieredTenureBadgeForUser = useTieredTenureBadgeForUser.useTieredTenureBadgeForUser(id);
  if (tieredTenureBadgeForUser == null) {
    tieredTenureBadgeForUser = null;
  }
  let tmpResult = tmp(504);
  const items1 = [closure_4];
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () =>
    premiumTypeSubscription.getPremiumTypeSubscription(),
  );
  let earnedOnDate = null;
  if (null != tieredTenureBadgeForUser) {
    earnedOnDate = null;
    if (null != stateFromStores1) {
      earnedOnDate = null;
      if (null != stateFromStores1.premiumSince) {
        tmpResult = tmp(7634);
        earnedOnDate = tmpResult.getEarnedOnDate(tieredTenureBadgeForUser, stateFromStores1.premiumSince);
      }
    }
  }
  return earnedOnDate;
};
export const useTieredTenureBadgeData = function useTieredTenureBadgeData() {
  obj = initialize;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => authStore.getCurrentUser());
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmpResult = tmp(11185);
  const tieredTenureBadgeForUser = tmpResult.useTieredTenureBadgeForUser(id);
  let tmp6 = null;
  if (null != tieredTenureBadgeForUser) {
    tmp6 = dependencyMap[tieredTenureBadgeForUser];
  }
  tmpResult = tmp(504);
  const items1 = [closure_3];
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => authStore.getCurrentUser());
  let id1;
  if (stateFromStores1 != null) {
    id1 = stateFromStores1.id;
  }
  let tieredTenureBadgeForUser1 = useTieredTenureBadgeForUser.useTieredTenureBadgeForUser(id1);
  if (tieredTenureBadgeForUser1 == null) {
    tieredTenureBadgeForUser1 = null;
  }
  const tmp3 = closure_3;
  const tmpResult1 = useTieredTenureBadgeForUser;
  const items2 = [closure_4];
  const stateFromStores2 = initialize.useStateFromStores(items2, () =>
    premiumTypeSubscription.getPremiumTypeSubscription(),
  );
  let earnedOnDate = null;
  if (null != tieredTenureBadgeForUser1) {
    earnedOnDate = null;
    if (null != stateFromStores2) {
      earnedOnDate = null;
      if (null != stateFromStores2.premiumSince) {
        earnedOnDate = tmp(7634).getEarnedOnDate(tieredTenureBadgeForUser1, stateFromStores2.premiumSince);
        const tmpResult3 = tmp(7634);
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
      const earnedTenureBadge = tmp(7634).getEarnedTenureBadge(tmp13);
      if (null != earnedTenureBadge) {
        if (tmpResult5.shouldShowWithheldTenureBadge("useTieredTenureBadgeData")) {
          obj = {};
          const merged1 = Object.assign(dependencyMap[earnedTenureBadge]);
          obj.earnedOnDate = tmp(7634).getEarnedOnDate(earnedTenureBadge, tmp13);
          obj.status = obj.WITHHELD;
          return obj;
        }
        tmpResult5 = tmp(11186);
      }
      const tmpResult4 = tmp(7634);
    }
    obj1 = {};
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

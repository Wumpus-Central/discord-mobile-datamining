// discord_app/modules/premium/tiered_tenure_badging/hooks/useTenureBadging.tsx
import createUserWidgetFromServer from "createUserWidgetFromServer";
import mergeGuildAvatar from "mergeGuildAvatar";
import reset from "reset";
import GuildFeatures from "GuildFeatures";

let closure_6;
let error;
const require = arg1;
function usePremiumSince() {
  const items = [mergeGuildAvatar];
  const stateFromStores = id(589).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = id(589);
  const tmp = id;
  const isPremiumExactlyResult = id(1897).isPremiumExactly(stateFromStores, closure_6.TIER_2);
  id = isPremiumExactlyResult;
  const obj2 = id(1897);
  const items1 = [reset];
  const items2 = [isPremiumExactlyResult];
  let stateFromStores1 = id(589).useStateFromStores(items1, () => {
    const premiumSubscription = outer1_5.getPremiumSubscription();
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
  const items3 = [createUserWidgetFromServer];
  if (stateFromStores1 == null) {
    stateFromStores1 = tmpResult.useStateFromStores(items3, () => {
      if (null == id) {
        return null;
      } else {
        const userProfile = outer1_3.getUserProfile(tmp);
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
const result = require("reset").fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTenureBadging.tsx");

export const TieredTenureBadgeStatus = obj;
export const useTieredTenureBadge = function useTieredTenureBadge() {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => authStore.getCurrentUser());
  const obj = require(589) /* initialize */;
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tieredTenureBadgeForUser = require(8435) /* useTieredTenureBadgeForUser */.useTieredTenureBadgeForUser(id);
  if (tieredTenureBadgeForUser == null) {
    tieredTenureBadgeForUser = null;
  }
  return tieredTenureBadgeForUser;
};
export const usePremiumSinceForUser = function usePremiumSinceForUser(userId) {
  const _require = userId;
  const items = [createUserWidgetFromServer];
  return _require(589).useStateFromStores(items, () => {
    if (null == id) {
      return null;
    } else {
      const userProfile = outer1_3.getUserProfile(tmp);
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
  const items = [mergeGuildAvatar];
  const stateFromStores = _require(589).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = _require(589);
  const items1 = [reset];
  const stateFromStores1 = _require(589).useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const obj2 = _require(589);
  if (obj3.isPremiumExactly(stateFromStores, closure_6.TIER_2)) {
    if (null != stateFromStores1) {
      if (null != stateFromStores1.premiumSince) {
        const obj4 = importDefault(3775)();
        _require = obj4.diff(importDefault(3775)(stateFromStores1.premiumSince).add(1, "day"), "months");
        return values.reduce((arg0, tenureReqNumMonths) => {
          let id = arg0;
          if (closure_0 >= tenureReqNumMonths.tenureReqNumMonths) {
            id = tenureReqNumMonths.id;
          }
          return id;
        }, null);
      }
    }
  }
  return null;
};
export const useTieredTenureEarnedOnDate = function useTieredTenureEarnedOnDate() {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => authStore.getCurrentUser());
  const obj = require(589) /* initialize */;
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tieredTenureBadgeForUser = require(8435) /* useTieredTenureBadgeForUser */.useTieredTenureBadgeForUser(id);
  if (tieredTenureBadgeForUser == null) {
    tieredTenureBadgeForUser = null;
  }
  let tmpResult = tmp(589);
  const items1 = [reset];
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let earnedOnDate = null;
  if (null != tieredTenureBadgeForUser) {
    earnedOnDate = null;
    if (null != stateFromStores1) {
      earnedOnDate = null;
      if (null != stateFromStores1.premiumSince) {
        tmpResult = tmp(5923);
        earnedOnDate = tmpResult.getEarnedOnDate(tieredTenureBadgeForUser, stateFromStores1.premiumSince);
      }
    }
  }
  return earnedOnDate;
};
export const useTieredTenureBadgeData = function useTieredTenureBadgeData() {
  let obj = require(589) /* initialize */;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => authStore.getCurrentUser());
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmpResult = tmp(8435);
  const tieredTenureBadgeForUser = tmpResult.useTieredTenureBadgeForUser(id);
  let tmp7 = null;
  if (null != tieredTenureBadgeForUser) {
    tmp7 = dependencyMap[tieredTenureBadgeForUser];
  }
  tmpResult = tmp(589);
  const items1 = [mergeGuildAvatar];
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => authStore.getCurrentUser());
  let id1;
  if (stateFromStores1 != null) {
    id1 = stateFromStores1.id;
  }
  let tieredTenureBadgeForUser1 = require(8435) /* useTieredTenureBadgeForUser */.useTieredTenureBadgeForUser(id1);
  if (tieredTenureBadgeForUser1 == null) {
    tieredTenureBadgeForUser1 = null;
  }
  const tmp3 = mergeGuildAvatar;
  const tmpResult1 = require(8435) /* useTieredTenureBadgeForUser */;
  const items2 = [reset];
  const stateFromStores2 = require(589) /* initialize */.useStateFromStores(items2, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let earnedOnDate = null;
  if (null != tieredTenureBadgeForUser1) {
    earnedOnDate = null;
    if (null != stateFromStores2) {
      earnedOnDate = null;
      if (null != stateFromStores2.premiumSince) {
        earnedOnDate = tmp(5923).getEarnedOnDate(tieredTenureBadgeForUser1, stateFromStores2.premiumSince);
        const tmpResult3 = tmp(5923);
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
  const tieredTenureBadgeForUser = require(8435) /* useTieredTenureBadgeForUser */.useTieredTenureBadgeForUser(userId);
  let tmp2 = null;
  if (null != tieredTenureBadgeForUser) {
    tmp2 = dependencyMap[tieredTenureBadgeForUser];
  }
  return tmp2;
};
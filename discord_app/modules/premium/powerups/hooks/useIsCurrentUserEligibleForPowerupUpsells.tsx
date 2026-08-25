// === Module 15524: useIsCurrentUserEligibleForPowerupUpsells ===

// Module 15524 (useIsCurrentUserEligibleForPowerupUpsells)
import closure_2 from "trackCommunicationDisabled" /* 1992 */;
import closure_3 from "insertUnsortedGuilds" /* 5262 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;
import closure_5 from "handleGuildBoostsUpdate" /* 4272 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useIsCurrentUserEligibleForPowerupUpsells.tsx");

export default function useIsCurrentUserEligibleForPowerupUpsells() {
  let items = [closure_4];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = stateFromStores(589);
  const tmp = stateFromStores;
  const items1 = [closure_5];
  const stateFromStoresArray = stateFromStores(589).useStateFromStoresArray(items1, () => {
    if (hasFetched.hasFetched) {
      const _Object = Object;
      let items = Object.values(tmp.boostSlots);
    } else {
      items = [];
    }
    return items;
  });
  const obj3 = stateFromStores(589);
  const items2 = [closure_3];
  const stateFromStores1 = stateFromStores(589).useStateFromStores(items2, () => flattenedGuildIds.getFlattenedGuildIds());
  let tmp3 = null != stateFromStores;
  if (tmp3) {
    const isPremiumGroupMemberResult = stateFromStores.isPremiumGroupMember();
    let tmp5 = !isPremiumGroupMemberResult;
    if (!isPremiumGroupMemberResult) {
      let isPremiumResult = tmp(1946).isPremium(stateFromStores, PremiumTypes.TIER_2);
      if (!isPremiumResult) {
        isPremiumResult = stateFromStoresArray.some((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription) || stateFromStores1.some((arg0) => {
          const member = closure_1_2.getMember(arg0, currentUser.id);
          let premiumSince;
          if (member != null) {
            premiumSince = member.premiumSince;
          }
          return null != premiumSince;
        });
        const tmp8 = stateFromStoresArray.some((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription) || stateFromStores1.some((arg0) => {
          const member = closure_1_2.getMember(arg0, currentUser.id);
          let premiumSince;
          if (member != null) {
            premiumSince = member.premiumSince;
          }
          return null != premiumSince;
        });
      }
      tmp5 = isPremiumResult;
      const tmpResult = tmp(1946);
    }
    tmp3 = tmp5;
  }
  return tmp3;
};
export const getIsCurrentUserEligibleForPowerupUpsells = function getIsCurrentUserEligibleForPowerupUpsells() {
  currentUser = currentUser.getCurrentUser();
  if (hasFetched.hasFetched) {
    const _Object = Object;
    let items = Object.values(tmp.boostSlots);
  } else {
    items = [];
  }
  flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
  let tmp3 = null != currentUser;
  if (tmp3) {
    const isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
    let tmp5 = !isPremiumGroupMemberResult;
    if (!isPremiumGroupMemberResult) {
      let isPremiumResult = currentUser(1946).isPremium(currentUser, PremiumTypes.TIER_2);
      if (!isPremiumResult) {
        isPremiumResult = items.some((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription) || flattenedGuildIds.some((arg0) => {
          const member = closure_1_2.getMember(arg0, currentUser.id);
          let premiumSince;
          if (member != null) {
            premiumSince = member.premiumSince;
          }
          return null != premiumSince;
        });
        const tmp10 = items.some((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription) || flattenedGuildIds.some((arg0) => {
          const member = closure_1_2.getMember(arg0, currentUser.id);
          let premiumSince;
          if (member != null) {
            premiumSince = member.premiumSince;
          }
          return null != premiumSince;
        });
      }
      tmp5 = isPremiumResult;
      const obj3 = currentUser(1946);
    }
    tmp3 = tmp5;
  }
  return tmp3;
};
// === Module 15428: useIsCurrentUserEligibleForPowerupUpsells ===

// Module 15428 (useIsCurrentUserEligibleForPowerupUpsells)
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import insertUnsortedGuilds from "insertUnsortedGuilds" /* 5078 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import handleGuildBoostsUpdate from "handleGuildBoostsUpdate" /* 4267 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/hooks/useIsCurrentUserEligibleForPowerupUpsells.tsx");

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
      let isPremiumResult = tmp(1945).isPremium(stateFromStores, PremiumTypes.TIER_2);
      if (!isPremiumResult) {
        isPremiumResult = stateFromStoresArray.some((item, index) => null != item.premiumGuildSubscription) || stateFromStores1.some((item, index) => {
          const member = closure_1_2.getMember(item, currentUser.id);
          let premiumSince;
          if (member != null) {
            premiumSince = member.premiumSince;
          }
          return null != premiumSince;
        });
        const tmp8 = stateFromStoresArray.some((item, index) => null != item.premiumGuildSubscription) || stateFromStores1.some((item, index) => {
          const member = closure_1_2.getMember(item, currentUser.id);
          let premiumSince;
          if (member != null) {
            premiumSince = member.premiumSince;
          }
          return null != premiumSince;
        });
      }
      tmp5 = isPremiumResult;
      const tmpResult = tmp(1945);
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
      let isPremiumResult = currentUser(1945).isPremium(currentUser, PremiumTypes.TIER_2);
      if (!isPremiumResult) {
        isPremiumResult = items.some((item, index) => null != item.premiumGuildSubscription) || flattenedGuildIds.some((item, index) => {
          const member = closure_1_2.getMember(item, currentUser.id);
          let premiumSince;
          if (member != null) {
            premiumSince = member.premiumSince;
          }
          return null != premiumSince;
        });
        const tmp10 = items.some((item, index) => null != item.premiumGuildSubscription) || flattenedGuildIds.some((item, index) => {
          const member = closure_1_2.getMember(item, currentUser.id);
          let premiumSince;
          if (member != null) {
            premiumSince = member.premiumSince;
          }
          return null != premiumSince;
        });
      }
      tmp5 = isPremiumResult;
      const obj3 = currentUser(1945);
    }
    tmp3 = tmp5;
  }
  return tmp3;
};
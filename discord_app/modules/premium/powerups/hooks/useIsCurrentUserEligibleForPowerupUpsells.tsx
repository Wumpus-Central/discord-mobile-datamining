// === Module 15160: useIsCurrentUserEligibleForPowerupUpsells ===

// Module 15160 (useIsCurrentUserEligibleForPowerupUpsells)
import trackCommunicationDisabled from "trackCommunicationDisabled";
import insertUnsortedGuilds from "insertUnsortedGuilds";
import mergeGuildAvatar from "mergeGuildAvatar";
import handleGuildBoostsUpdate from "handleGuildBoostsUpdate";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/premium/powerups/hooks/useIsCurrentUserEligibleForPowerupUpsells.tsx");

export default function useIsCurrentUserEligibleForPowerupUpsells() {
  let items = [mergeGuildAvatar];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = stateFromStores(589);
  const tmp = stateFromStores;
  const items1 = [handleGuildBoostsUpdate];
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
  const items2 = [insertUnsortedGuilds];
  const stateFromStores1 = stateFromStores(589).useStateFromStores(items2, () => flattenedGuildIds.getFlattenedGuildIds());
  let tmp3 = null != stateFromStores;
  if (tmp3) {
    const isPremiumGroupMemberResult = stateFromStores.isPremiumGroupMember();
    let tmp5 = !isPremiumGroupMemberResult;
    if (!isPremiumGroupMemberResult) {
      let isPremiumResult = tmp(1897).isPremium(stateFromStores, PremiumTypes.TIER_2);
      if (!isPremiumResult) {
        isPremiumResult = stateFromStoresArray.some((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription) || stateFromStores1.some((arg0) => {
          const member = outer1_2.getMember(arg0, currentUser.id);
          let premiumSince;
          if (member != null) {
            premiumSince = member.premiumSince;
          }
          return null != premiumSince;
        });
        const tmp8 = stateFromStoresArray.some((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription) || stateFromStores1.some((arg0) => {
          const member = outer1_2.getMember(arg0, currentUser.id);
          let premiumSince;
          if (member != null) {
            premiumSince = member.premiumSince;
          }
          return null != premiumSince;
        });
      }
      tmp5 = isPremiumResult;
      const tmpResult = tmp(1897);
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
      let isPremiumResult = currentUser(1897).isPremium(currentUser, PremiumTypes.TIER_2);
      if (!isPremiumResult) {
        isPremiumResult = items.some((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription) || flattenedGuildIds.some((arg0) => {
          const member = outer1_2.getMember(arg0, currentUser.id);
          let premiumSince;
          if (member != null) {
            premiumSince = member.premiumSince;
          }
          return null != premiumSince;
        });
        const tmp10 = items.some((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription) || flattenedGuildIds.some((arg0) => {
          const member = outer1_2.getMember(arg0, currentUser.id);
          let premiumSince;
          if (member != null) {
            premiumSince = member.premiumSince;
          }
          return null != premiumSince;
        });
      }
      tmp5 = isPremiumResult;
      const obj3 = currentUser(1897);
    }
    tmp3 = tmp5;
  }
  return tmp3;
};
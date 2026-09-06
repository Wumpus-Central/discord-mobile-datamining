// === Module 16167: useIsCurrentUserEligibleForPowerupUpsells ===

// Module 16167 (useIsCurrentUserEligibleForPowerupUpsells)
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import SortedGuildStore from "SortedGuildStore" /* 5438 */;
import UserStore from "UserStore" /* 1371 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 4455 */;

const require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useIsCurrentUserEligibleForPowerupUpsells.tsx");

export default function useIsCurrentUserEligibleForPowerupUpsells() {
  let items = [UserStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = stateFromStores(504);
  const tmp = stateFromStores;
  const items1 = [GuildBoostSlotStore];
  const stateFromStoresArray = stateFromStores(504).useStateFromStoresArray(items1, () => {
    if (hasFetched.hasFetched) {
      const _Object = Object;
      let items = Object.values(tmp.boostSlots);
    } else {
      items = [];
    }
    return items;
  });
  const obj3 = stateFromStores(504);
  const items2 = [SortedGuildStore];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items2, () => flattenedGuildIds.getFlattenedGuildIds());
  let tmp3 = null != stateFromStores;
  if (tmp3) {
    const isPremiumGroupMemberResult = stateFromStores.isPremiumGroupMember();
    let tmp5 = !isPremiumGroupMemberResult;
    if (!isPremiumGroupMemberResult) {
      let isPremiumResult = tmp(1885).isPremium(stateFromStores, PremiumTypes.TIER_2);
      if (!isPremiumResult) {
        isPremiumResult = stateFromStoresArray.some((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription) || stateFromStores1.some((item) => {
          const member = GuildMemberStore.getMember(item, currentUser.id);
          let premiumSince;
          if (member != null) {
            premiumSince = member.premiumSince;
          }
          return null != premiumSince;
        });
        const tmp8 = stateFromStoresArray.some((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription) || stateFromStores1.some((item) => {
          const member = GuildMemberStore.getMember(item, currentUser.id);
          let premiumSince;
          if (member != null) {
            premiumSince = member.premiumSince;
          }
          return null != premiumSince;
        });
      }
      tmp5 = isPremiumResult;
      const tmpResult = tmp(1885);
    }
    tmp3 = tmp5;
  }
  return tmp3;
};
export const getIsCurrentUserEligibleForPowerupUpsells = function getIsCurrentUserEligibleForPowerupUpsells() {
  const currentUser = UserStore.getCurrentUser();
  if (GuildBoostSlotStore.hasFetched) {
    const _Object = Object;
    let items = Object.values(tmp.boostSlots);
  } else {
    items = [];
  }
  const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
  let tmp3 = null != currentUser;
  if (tmp3) {
    const isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
    let tmp5 = !isPremiumGroupMemberResult;
    if (!isPremiumGroupMemberResult) {
      let isPremiumResult = currentUser(1885).isPremium(currentUser, PremiumTypes.TIER_2);
      if (!isPremiumResult) {
        isPremiumResult = items.some((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription) || flattenedGuildIds.some((item) => {
          const member = GuildMemberStore.getMember(item, currentUser.id);
          let premiumSince;
          if (member != null) {
            premiumSince = member.premiumSince;
          }
          return null != premiumSince;
        });
        const tmp10 = items.some((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription) || flattenedGuildIds.some((item) => {
          const member = GuildMemberStore.getMember(item, currentUser.id);
          let premiumSince;
          if (member != null) {
            premiumSince = member.premiumSince;
          }
          return null != premiumSince;
        });
      }
      tmp5 = isPremiumResult;
      const obj3 = currentUser(1885);
    }
    tmp3 = tmp5;
  }
  return tmp3;
};
// === Module 7212: GuildCapUpsellHooks ===

// Module 7212 (GuildCapUpsellHooks)
import initialize from "initialize" /* 504 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import HotspotStore2 from "HotspotStore" /* 7213 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const MAX_USER_GUILDS = fn(1074).MAX_USER_GUILDS;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/GuildCapUpsellHooks.tsx");

export const useShouldShowInlineGuildCapUpsell = function useShouldShowInlineGuildCapUpsell() {
  const items = [GuildStore];
  let stateFromStores = initialize.useStateFromStores(items, () => guildCount.getGuildCount() >= 95);
  const items1 = [HotspotStore2.HotspotStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => {
    const HotspotStore = HotspotStore2.HotspotStore;
    return HotspotStore.hasHotspot(HotspotStore2.HotspotLocations.GUILD_CAP_INLINE_UPSELL);
  });
  const items2 = [UserStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items2, () => !PremiumUtilsDefault.isPremium(currentUser.getCurrentUser()));
  if (stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  if (stateFromStores) {
    stateFromStores = stateFromStoresObject;
  }
  return stateFromStores;
};
export const hideInlineGuildCapUpsell = function hideInlineGuildCapUpsell() {
  HotspotStore2.hideHotspot(HotspotStore2.HotspotLocations.GUILD_CAP_INLINE_UPSELL);
};
export const hasIncreasedGuildCap = function hasIncreasedGuildCap(currentUser) {
  let result = PremiumUtilsDefault.canUseIncreasedGuildCap(currentUser);
  if (!result) {
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    result = true === isStaffResult;
  }
  return result;
};
export const isAtGuildCapAndNonPremium = function isAtGuildCapAndNonPremium() {
  let tmp = GuildStore.getGuildCount() >= MAX_USER_GUILDS;
  if (tmp) {
    const currentUser = UserStore.getCurrentUser();
    let result = PremiumUtilsDefault.canUseIncreasedGuildCap(currentUser);
    if (!result) {
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      result = true === isStaffResult;
    }
    tmp = !result;
  }
  return tmp;
};
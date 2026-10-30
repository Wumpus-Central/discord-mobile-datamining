// === Module 7374: GuildCapUpsellHooks ===

// Module 7374 (GuildCapUpsellHooks)
import initialize from "initialize" /* 504 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2048 */;
import HotspotStore2 from "HotspotStore" /* 7375 */;
import GuildStore from "GuildStore" /* 4880 */;
import UserStore from "UserStore" /* 1384 */;

require = fn;
const MAX_USER_GUILDS = fn(1072).MAX_USER_GUILDS;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/GuildCapUpsellHooks.tsx");

export function useShouldShowInlineGuildCapUpsell() {
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
}
export function hideInlineGuildCapUpsell() {
  HotspotStore2.hideHotspot(HotspotStore2.HotspotLocations.GUILD_CAP_INLINE_UPSELL);
}
export function hasIncreasedGuildCap(currentUser) {
  let result = PremiumUtilsDefault.canUseIncreasedGuildCap(currentUser);
  if (!result) {
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    result = true === isStaffResult;
  }
  return result;
}
export function isAtGuildCapAndNonPremium() {
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
}
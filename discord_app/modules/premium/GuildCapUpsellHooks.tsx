// === Module 6068: useShouldShowInlineGuildCapUpsell ===

// Module 6068 (useShouldShowInlineGuildCapUpsell)
import initialize from "initialize" /* 586 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4139 */;
import HotspotStore2 from "HotspotStore" /* 6069 */;
import closure_3 from "createGuildRecordFromRust" /* 1908 */;
import closure_4 from "mergeGuildAvatar" /* 1921 */;
import { MAX_USER_GUILDS } from "ME" /* 673 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/premium/GuildCapUpsellHooks.tsx");

export const useShouldShowInlineGuildCapUpsell = function useShouldShowInlineGuildCapUpsell() {
  const items = [closure_3];
  let stateFromStores = initialize.useStateFromStores(items, () => guildCount.getGuildCount() >= 95);
  const obj = initialize;
  const items1 = [HotspotStore2.HotspotStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => {
    const HotspotStore = callback(6069).HotspotStore;
    return HotspotStore.hasHotspot(callback(6069).HotspotLocations.GUILD_CAP_INLINE_UPSELL);
  });
  const obj2 = initialize;
  const items2 = [closure_4];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items2, () => !callback2(4139).isPremium(currentUser.getCurrentUser()));
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
  let result = getPremiumPlanItemDefault.canUseIncreasedGuildCap(currentUser);
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
  let tmp = guildCount.getGuildCount() >= MAX_USER_GUILDS;
  if (tmp) {
    currentUser = currentUser.getCurrentUser();
    let result = getPremiumPlanItemDefault.canUseIncreasedGuildCap(currentUser);
    if (!result) {
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      result = true === isStaffResult;
    }
    tmp = !result;
    const obj2 = getPremiumPlanItemDefault;
  }
  return tmp;
};
// discord_app/modules/premium/GuildCapUpsellHooks.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import { MAX_USER_GUILDS } from "ME";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { getPremiumPlanItem } from "../../utils/PremiumUtils.tsx";
import { HotspotStore } from "../hotspot/index.tsx";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/premium/GuildCapUpsellHooks.tsx");

export const useShouldShowInlineGuildCapUpsell = function useShouldShowInlineGuildCapUpsell() {
  const items = [createGuildRecordFromRust];
  let stateFromStores = initialize.useStateFromStores(items, () => guildCount.getGuildCount() >= 95);
  const obj = initialize;
  const items1 = [HotspotStore.HotspotStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => {
    const HotspotStore = callback(5896).HotspotStore;
    return HotspotStore.hasHotspot(callback(5896).HotspotLocations.GUILD_CAP_INLINE_UPSELL);
  });
  const obj2 = initialize;
  const items2 = [mergeGuildAvatar];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items2, () => !callback2(4007).isPremium(currentUser.getCurrentUser()));
  if (stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  if (stateFromStores) {
    stateFromStores = stateFromStoresObject;
  }
  return stateFromStores;
};
export const hideInlineGuildCapUpsell = function hideInlineGuildCapUpsell() {
  HotspotStore.hideHotspot(HotspotStore.HotspotLocations.GUILD_CAP_INLINE_UPSELL);
};
export const hasIncreasedGuildCap = function hasIncreasedGuildCap(currentUser) {
  let result = getPremiumPlanItem.canUseIncreasedGuildCap(currentUser);
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
    let result = getPremiumPlanItem.canUseIncreasedGuildCap(currentUser);
    if (!result) {
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      result = true === isStaffResult;
    }
    tmp = !result;
    const obj2 = getPremiumPlanItem;
  }
  return tmp;
};
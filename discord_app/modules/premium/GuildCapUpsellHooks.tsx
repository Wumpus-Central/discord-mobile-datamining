// discord_app/modules/premium/GuildCapUpsellHooks.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import { MAX_USER_GUILDS } from "ME";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/premium/GuildCapUpsellHooks.tsx");

export const useShouldShowInlineGuildCapUpsell = function useShouldShowInlineGuildCapUpsell() {
  const items = [createGuildRecordFromRust];
  let stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => guildCount.getGuildCount() >= 95);
  const obj = require("../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const items1 = [require("../hotspot/index.tsx") /* HotspotStore */.HotspotStore];
  const stateFromStores1 = require("../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items1, () => {
    const HotspotStore = callback(5744).HotspotStore;
    return HotspotStore.hasHotspot(callback(5744).HotspotLocations.GUILD_CAP_INLINE_UPSELL);
  });
  const obj2 = require("../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const items2 = [mergeGuildAvatar];
  const stateFromStoresObject = require("../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStoresObject(items2, () => !callback2(3931).isPremium(currentUser.getCurrentUser()));
  if (stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  if (stateFromStores) {
    stateFromStores = stateFromStoresObject;
  }
  return stateFromStores;
};
export const hideInlineGuildCapUpsell = function hideInlineGuildCapUpsell() {
  require("../hotspot/index.tsx") /* HotspotStore */.hideHotspot(require("../hotspot/index.tsx") /* HotspotStore */.HotspotLocations.GUILD_CAP_INLINE_UPSELL);
};
export const hasIncreasedGuildCap = function hasIncreasedGuildCap(currentUser) {
  let result = require("../../utils/PremiumUtils.tsx").canUseIncreasedGuildCap(currentUser);
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
    let result = require("../../utils/PremiumUtils.tsx").canUseIncreasedGuildCap(currentUser);
    if (!result) {
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      result = true === isStaffResult;
    }
    tmp = !result;
    const obj2 = require("../../utils/PremiumUtils.tsx");
  }
  return tmp;
};
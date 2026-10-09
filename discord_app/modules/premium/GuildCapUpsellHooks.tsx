// === Module 6901: GuildCapUpsellHooks ===

// Module 6901 (GuildCapUpsellHooks)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4728 */;
import HotspotStore2 from "HotspotStore" /* 6902 */;
import GuildStore from "GuildStore" /* 2086 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const MAX_USER_GUILDS = fn(1085).MAX_USER_GUILDS;
const ReactCompilerGating = fn(558);
function hasIncreasedGuildCap(currentUser) {
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/GuildCapUpsellHooks.tsx");

export const useShouldShowInlineGuildCapUpsell = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldShowInlineGuildCapUpsell() {
  const cResult = c.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    const fn = function n() {
      return guildCount.getGuildCount() >= 95;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [HotspotStore2.HotspotStore];
    const fn2 = function p() {
      const HotspotStore = HotspotStore2.HotspotStore;
      return HotspotStore.hasHotspot(HotspotStore2.HotspotLocations.GUILD_CAP_INLINE_UPSELL);
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = initialize;
  const stateFromStores1 = initialize.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserStore];
    class C {
      constructor() {
        obj = closure_1_1(closure_1_2[7]);
        return !obj.isPremium(closure_1_4.getCurrentUser());
      }
    }
    cResult[4] = items2;
    cResult[5] = C;
    let tmp12 = C;
    let tmp11 = items2;
  } else {
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  const tmpResult3 = initialize;
  const stateFromStoresObject = initialize.useStateFromStoresObject(tmp11, tmp12);
  if (stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  if (stateFromStores) {
    stateFromStores = stateFromStoresObject;
  }
  return stateFromStores;
}) : (function useShouldShowInlineGuildCapUpsell() {
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
});
export const hideInlineGuildCapUpsell = function hideInlineGuildCapUpsell() {
  HotspotStore2.hideHotspot(HotspotStore2.HotspotLocations.GUILD_CAP_INLINE_UPSELL);
};
export { hasIncreasedGuildCap };
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
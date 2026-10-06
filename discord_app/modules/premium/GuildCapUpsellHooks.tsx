// === Module 6718: GuildCapUpsellHooks ===

// Module 6718 (GuildCapUpsellHooks)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4534 */;
import HotspotStore2 from "HotspotStore" /* 6719 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const MAX_USER_GUILDS = Constants.MAX_USER_GUILDS;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let currentUser;
  let guildCount;
  let tmp11;
  let tmp12;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let obj = react;
  const cResult = obj.c(6);
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
  const tmpResult = get_initialized;
  let stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [HotspotStore2.HotspotStore];
    const fn2 = function c() {
      const HotspotStore = HotspotStore2.HotspotStore;
      return HotspotStore.hasHotspot(HotspotStore2.HotspotLocations.GUILD_CAP_INLINE_UPSELL);
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult3 = get_initialized;
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserStore];
    class C {
      constructor() {
        const obj = PremiumUtilsDefault;
        return !obj.isPremium(currentUser.getCurrentUser());
      }
    }
    cResult[4] = items2;
    cResult[5] = C;
    tmp12 = C;
    tmp11 = items2;
  } else {
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  const tmpResult4 = get_initialized;
  const stateFromStoresObject = tmpResult4.useStateFromStoresObject(tmp11, tmp12);
  if (stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  if (stateFromStores) {
    stateFromStores = stateFromStoresObject;
  }
  return stateFromStores;
}) : (() => {
  let currentUser;
  let guildCount;
  let obj = get_initialized;
  const items = [GuildStore];
  let stateFromStores = obj.useStateFromStores(items, () => guildCount.getGuildCount() >= 95);
  const useStateFromStores = get_initialized.useStateFromStores;
  const items1 = [];
  get_initialized;
  items1[0] = HotspotStore2.HotspotStore;
  const stateFromStores1 = useStateFromStores(items1, () => {
    const HotspotStore = HotspotStore2.HotspotStore;
    return HotspotStore.hasHotspot(HotspotStore2.HotspotLocations.GUILD_CAP_INLINE_UPSELL);
  });
  const items2 = [UserStore];
  const obj2 = get_initialized;
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => {
    const obj = PremiumUtilsDefault;
    return !obj.isPremium(currentUser.getCurrentUser());
  });
  if (stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  if (stateFromStores) {
    stateFromStores = stateFromStoresObject;
  }
  return stateFromStores;
});
function hasIncreasedGuildCap(currentUser) {
  const obj = PremiumUtilsDefault;
  let result = obj.canUseIncreasedGuildCap(currentUser);
  if (!result) {
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    result = true === isStaffResult;
  }
  return result;
}
let result = size.fileFinishedImporting("modules/premium/GuildCapUpsellHooks.tsx");

export const useShouldShowInlineGuildCapUpsell = tmp2;
export const hideInlineGuildCapUpsell = function hideInlineGuildCapUpsell() {
  const obj = HotspotStore2;
  obj.hideHotspot(HotspotStore2.HotspotLocations.GUILD_CAP_INLINE_UPSELL);
};
export { hasIncreasedGuildCap };
export const isAtGuildCapAndNonPremium = function isAtGuildCapAndNonPremium() {
  let tmp = GuildStore.getGuildCount() >= MAX_USER_GUILDS;
  if (tmp) {
    const currentUser = UserStore.getCurrentUser();
    const obj2 = PremiumUtilsDefault;
    let result = obj2.canUseIncreasedGuildCap(currentUser);
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
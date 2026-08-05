// discord_app/modules/premium/promotions/PromotionsHooks.tsx
import noop from "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import createEmptyPromotionsByType from "createEmptyPromotionsByType";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
function useEligibleActiveOutboundPromotions(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.includeClaimedPromotions;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStoresArray;
  let stateFromStores;
  let stateFromStores1;
  const items = [createEmptyPromotionsByType];
  stateFromStoresArray = flag(stateFromStores[4]).useStateFromStoresArray(items, () => createEmptyPromotionsByType.outboundPromotions);
  const obj2 = flag(stateFromStores[4]);
  const items1 = [createEmptyPromotionsByType];
  stateFromStores = flag(stateFromStores[4]).useStateFromStores(items1, () => createEmptyPromotionsByType.consumedInboundPromotionId);
  let obj3 = flag(stateFromStores[4]);
  const items2 = [createEmptyPromotionsByType];
  stateFromStores1 = flag(stateFromStores[4]).useStateFromStores(items2, () => createEmptyPromotionsByType.claimedOutboundPromotionCodes);
  const items3 = [stateFromStoresArray, stateFromStores, stateFromStores1, flag];
  return stateFromStores1.useMemo(() => {
    let set = null;
    if (set) {
      const _Set = Set;
      set = new Set(stateFromStores1.map((promotion) => promotion.promotion.id));
    }
    return stateFromStoresArray.filter((id) => {
      let tmp = id.id !== outer1_2;
      if (tmp) {
        let result = flag(stateFromStores[5]).shouldShowOutboundPromotionOnPlatform(id);
        if (result) {
          result = tmp2(tmp3[5]).isDedicatedSurfacePromotion(id);
          flag = !result;
          if (!result) {
            flag = true;
            if (set != null) {
              const hasItem = obj3.has(id.id);
              flag = true;
            }
            obj3 = set;
          }
          result = flag;
          const tmp2Result = tmp2(tmp3[5]);
        }
        tmp = result;
        const obj = flag(stateFromStores[5]);
        tmp2 = flag;
        tmp3 = stateFromStores;
      }
      return tmp;
    });
  }, items3);
}
let result = require("createEmptyPromotionsByType").fileFinishedImporting("modules/premium/promotions/PromotionsHooks.tsx");

export { useEligibleActiveOutboundPromotions };
export const useOutboundPromotions = function useOutboundPromotions() {
  const items = [createEmptyPromotionsByType];
  stateFromStores = stateFromStores(stateFromStores2[4]).useStateFromStores(items, () => createEmptyPromotionsByType.lastFetchedActivePromotions);
  let obj = stateFromStores(stateFromStores2[4]);
  const items1 = [mergeGuildAvatar];
  const stateFromStores1 = stateFromStores(stateFromStores2[4]).useStateFromStores(items1, () => currentUser.getCurrentUser());
  const obj2 = stateFromStores(stateFromStores2[4]);
  let obj3 = importDefault(stateFromStores2[6]);
  const isPremiumExactlyResult = importDefault(stateFromStores2[6]).isPremiumExactly(stateFromStores1, PremiumTypes.TIER_2);
  const isPremiumResult = importDefault(stateFromStores2[6]).isPremium(stateFromStores1);
  let tmp8 = !isPremiumResult;
  if (isPremiumResult) {
    tmp8 = isPremiumExactlyResult;
  }
  importDefault = tmp8;
  let tmpResult = tmp(tmp2[4]);
  const items2 = [createEmptyPromotionsByType];
  stateFromStores2 = tmpResult.useStateFromStores(items2, () => createEmptyPromotionsByType.claimedOutboundPromotionCodes);
  tmpResult = tmp(tmp2[4]);
  const items3 = [createEmptyPromotionsByType];
  let promotionsLoaded = tmpResult.useStateFromStores(items3, () => createEmptyPromotionsByType.claimedOutboundPromotionCodesLoaded);
  const items4 = [stateFromStores];
  const effect = activeOutboundPromotions.useEffect(() => {
    if (null != stateFromStores) {
      tmp8(stateFromStores2[7]).wait(() => callback(table[8]).markOutboundPromotionsSeen());
      const obj = tmp8(stateFromStores2[7]);
    }
  }, items4);
  const items5 = [stateFromStores, tmp8];
  const effect1 = activeOutboundPromotions.useEffect(() => {
    tmp8(stateFromStores2[7]).wait(() => {
      let tmp = closure_1;
      if (closure_1) {
        tmp = null == closure_0;
      }
      if (tmp) {
        const activePromotions = outer1_1(outer1_2[8]).fetchActivePromotions();
        const obj = outer1_1(outer1_2[8]);
      }
    });
  }, items5);
  const effect2 = activeOutboundPromotions.useEffect(() => {
    tmp8(stateFromStores2[7]).wait(() => {
      const claimedOutboundPromotionCodes = callback(table[8]).fetchClaimedOutboundPromotionCodes();
    });
  }, []);
  const items6 = [stateFromStores2];
  const claimedOutboundPromotionCodeMap = activeOutboundPromotions.useMemo(() => stateFromStores(stateFromStores2[5]).getClaimedOutboundPromotionCodeMap(stateFromStores2), items6);
  activeOutboundPromotions = useEligibleActiveOutboundPromotions({ includeClaimedPromotions: true });
  const items7 = [activeOutboundPromotions, stateFromStores2];
  const claimedEndedOutboundPromotions = activeOutboundPromotions.useMemo(() => {
    const set = new Set(activeOutboundPromotions.map((id) => id.id));
    return stateFromStores2.filter((promotion) => {
      promotion = promotion.promotion;
      const hasItem = set.has(promotion.id);
      let result = !hasItem;
      if (!hasItem) {
        let obj = set(outer1_2[5]);
        obj = { promotionType: null };
        obj[0] = promotion.promotionType;
        result = false === obj.isRecurringPromotion(obj);
      }
      if (result) {
        result = !set(outer1_2[5]).isDedicatedSurfacePromotion(promotion);
        const obj3 = set(outer1_2[5]);
      }
      if (result) {
        result = set(outer1_2[5]).shouldShowOutboundPromotionOnPlatform(promotion);
        const obj4 = set(outer1_2[5]);
      }
      return result;
    });
  }, items7);
  if (promotionsLoaded) {
    let tmp17 = !tmp8;
    if (tmp8) {
      tmp17 = null != stateFromStores;
    }
    promotionsLoaded = tmp17;
  }
  return { promotionsLoaded, activeOutboundPromotions, claimedEndedOutboundPromotions, claimedOutboundPromotionCodeMap };
};
export const useUnseenOutboundPromotions = function useUnseenOutboundPromotions() {
  const items = [createEmptyPromotionsByType];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => obj.lastSeenOutboundPromotionStartDate);
  const tmp2 = useEligibleActiveOutboundPromotions();
  const importDefault = tmp2;
  const items1 = [tmp2, stateFromStores];
  const memo = React.useMemo(() => {
    if (null == stateFromStores) {
      let found = tmp2;
    } else {
      found = tmp2.filter((startDate) => {
        const date = new Date(startDate.startDate);
        return date > new Date(closure_0);
      });
    }
    return found;
  }, items1);
  return memo.filter((promotion) => stateFromStores(table[5]).shouldShowOutboundPromotionOnPlatform(promotion));
};
export const useBogoPromotion = function useBogoPromotion() {
  const obj = { promotion: null };
  const items = [createEmptyPromotionsByType];
  obj[0] = require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => bogoPromotion.bogoPromotion);
  return obj;
};
export const useIsInPromotion = function useIsInPromotion(arg0) {
  const _require = arg0;
  const items = [createEmptyPromotionsByType];
  return _require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => outer1_5.hasPromotion(closure_0));
};
export const useHasActiveBogoPromotion = function useHasActiveBogoPromotion() {
  const effect = React.useEffect(() => {
    const result = callback(table[8]).maybeFetchActivePromotions();
  }, []);
  const items = [createEmptyPromotionsByType];
  return require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => null != activeBogoRewardPromotion.getActiveBogoRewardPromotion());
};
// discord_app/modules/premium/promotions/PromotionsHooks.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import createEmptyPromotionsByType from "PromotionsStore.tsx";
import { PremiumTypes } from "../PremiumConstants.tsx";

require = fn;
function useEligibleActiveOutboundPromotions(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.includeClaimedPromotions;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  const items = [closure_5];
  const stateFromStoresArray = flag(stateFromStores[4]).useStateFromStoresArray(items, () => closure_5.outboundPromotions);
  const obj2 = flag(stateFromStores[4]);
  const items1 = [closure_5];
  stateFromStores = flag(stateFromStores[4]).useStateFromStores(items1, () => closure_5.consumedInboundPromotionId);
  const obj3 = flag(stateFromStores[4]);
  const items2 = [closure_5];
  const stateFromStores1 = flag(stateFromStores[4]).useStateFromStores(items2, () => closure_5.claimedOutboundPromotionCodes);
  const items3 = [stateFromStoresArray, stateFromStores, stateFromStores1, flag];
  return stateFromStores1.useMemo(() => {
    let set = null;
    if (set) {
      const _Set = Set;
      set = new Set(stateFromStores1.map((item, index) => item.promotion.id));
    }
    return stateFromStoresArray.filter((item, index) => {
      let tmp = item.id !== closure_1_2;
      if (tmp) {
        let result = flag(stateFromStores[5]).shouldShowOutboundPromotionOnPlatform(item);
        if (result) {
          result = tmp2(stateFromStores[5]).isDedicatedSurfacePromotion(item);
          flag = !result;
          if (!result) {
            flag = true;
            if (set != null) {
              const hasItem = set.has(item.id);
              flag = true;
            }
          }
          result = flag;
          const tmp2Result = tmp2(stateFromStores[5]);
        }
        tmp = result;
        const obj = flag(stateFromStores[5]);
        tmp2 = flag;
      }
      return tmp;
    });
  }, items3);
}
let result = require("obj132").fileFinishedImporting("modules/premium/promotions/PromotionsHooks.tsx");

export { useEligibleActiveOutboundPromotions };
export const useOutboundPromotions = function useOutboundPromotions() {
  const items = [closure_5];
  stateFromStores = stateFromStores(stateFromStores2[4]).useStateFromStores(items, () => closure_5.lastFetchedActivePromotions);
  let obj = stateFromStores(stateFromStores2[4]);
  const items1 = [closure_4];
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
  const items2 = [closure_5];
  stateFromStores2 = tmpResult.useStateFromStores(items2, () => closure_5.claimedOutboundPromotionCodes);
  tmpResult = tmp(tmp2[4]);
  const items3 = [closure_5];
  let promotionsLoaded = tmpResult.useStateFromStores(items3, () => closure_5.claimedOutboundPromotionCodesLoaded);
  const items4 = [stateFromStores];
  const effect = activeOutboundPromotions.useEffect(() => {
    if (null != stateFromStores) {
      isPremiumExactlyResult(stateFromStores2[7]).wait(() => callback(table[8]).markOutboundPromotionsSeen());
      const obj = isPremiumExactlyResult(stateFromStores2[7]);
    }
  }, items4);
  const items5 = [stateFromStores, tmp8];
  const effect1 = activeOutboundPromotions.useEffect(() => {
    isPremiumExactlyResult(stateFromStores2[7]).wait(() => {
      let tmp = closure_1;
      if (closure_1) {
        tmp = null == closure_0;
      }
      if (tmp) {
        const activePromotions = closure_1_1(stateFromStores2[8]).fetchActivePromotions();
        const obj = closure_1_1(stateFromStores2[8]);
      }
    });
  }, items5);
  const effect2 = activeOutboundPromotions.useEffect(() => {
    isPremiumExactlyResult(stateFromStores2[7]).wait(() => {
      const claimedOutboundPromotionCodes = callback(table[8]).fetchClaimedOutboundPromotionCodes();
    });
  }, []);
  const items6 = [stateFromStores2];
  const claimedOutboundPromotionCodeMap = activeOutboundPromotions.useMemo(() => stateFromStores(stateFromStores2[5]).getClaimedOutboundPromotionCodeMap(stateFromStores2), items6);
  activeOutboundPromotions = useEligibleActiveOutboundPromotions({ includeClaimedPromotions: true });
  const items7 = [activeOutboundPromotions, stateFromStores2];
  const claimedEndedOutboundPromotions = activeOutboundPromotions.useMemo(() => {
    const set = new Set(activeOutboundPromotions.map((item, index) => item.id));
    return stateFromStores2.filter((item, index) => {
      const promotion = item.promotion;
      const hasItem = set.has(promotion.id);
      let result = !hasItem;
      if (!hasItem) {
        set(stateFromStores2[5]);
        const obj = { promotionType: null };
        obj[0] = promotion.promotionType;
        result = false === obj.isRecurringPromotion(obj);
      }
      if (result) {
        result = !set(stateFromStores2[5]).isDedicatedSurfacePromotion(promotion);
        const obj3 = set(stateFromStores2[5]);
      }
      if (result) {
        result = set(stateFromStores2[5]).shouldShowOutboundPromotionOnPlatform(promotion);
        const obj4 = set(stateFromStores2[5]);
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
  const items = [closure_5];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => obj.lastSeenOutboundPromotionStartDate);
  const tmp2 = useEligibleActiveOutboundPromotions();
  closure_1 = tmp2;
  const items1 = [tmp2, stateFromStores];
  const memo = React.useMemo(() => {
    if (null == stateFromStores) {
      let found = closure_1;
    } else {
      found = closure_1.filter((item, index) => {
        const date = new Date(item.startDate);
        return date > new Date(closure_0);
      });
    }
    return found;
  }, items1);
  return memo.filter((item, index) => stateFromStores(table[5]).shouldShowOutboundPromotionOnPlatform(item));
};
export const useBogoPromotion = function useBogoPromotion() {
  const obj = { promotion: initialize.useStateFromStores(items, () => bogoPromotion.bogoPromotion) };
  items = [closure_5];
  return obj;
};
export const useIsInPromotion = function useIsInPromotion(arg0) {
  const _require = arg0;
  const items = [closure_5];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_1_5.hasPromotion(closure_0));
};
export const useHasActiveBogoPromotion = function useHasActiveBogoPromotion() {
  const effect = React.useEffect(() => {
    const result = callback(table[8]).maybeFetchActivePromotions();
  }, []);
  const items = [closure_5];
  return initialize.useStateFromStores(items, () => null != activeBogoRewardPromotion.getActiveBogoRewardPromotion());
};
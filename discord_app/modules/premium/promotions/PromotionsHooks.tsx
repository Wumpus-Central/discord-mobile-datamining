// discord_app/modules/premium/promotions/PromotionsHooks.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import PromotionUtils from "PromotionUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import PromotionsStore from "PromotionsStore.tsx";

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
  const items = [PromotionsStore];
  const stateFromStoresArray = flag(stateFromStores[4]).useStateFromStoresArray(
    items,
    () => PromotionsStore.outboundPromotions,
  );
  const obj2 = flag(stateFromStores[4]);
  const items1 = [PromotionsStore];
  stateFromStores = flag(stateFromStores[4]).useStateFromStores(
    items1,
    () => PromotionsStore.consumedInboundPromotionId,
  );
  const obj3 = flag(stateFromStores[4]);
  const items2 = [PromotionsStore];
  const stateFromStores1 = flag(stateFromStores[4]).useStateFromStores(
    items2,
    () => PromotionsStore.claimedOutboundPromotionCodes,
  );
  const items3 = [stateFromStoresArray, stateFromStores, stateFromStores1, flag];
  return stateFromStores1.useMemo(() => {
    let set = null;
    if (set) {
      const _Set = Set;
      set = new Set(stateFromStores1.map((promotion) => promotion.promotion.id));
    }
    return stateFromStoresArray.filter((id) => {
      let tmp = id.id !== stateFromStores;
      if (tmp) {
        let result = PromotionUtils.shouldShowOutboundPromotionOnPlatform(id);
        if (result) {
          result = PromotionUtils.isDedicatedSurfacePromotion(id);
          flag = !result;
          if (!result) {
            flag = true;
            if (set != null) {
              const hasItem = set.has(id.id);
              flag = true;
            }
          }
          result = flag;
          const tmp2Result = PromotionUtils;
        }
        tmp = result;
      }
      return tmp;
    });
  }, items3);
}
const PremiumTypes = fn(1373).PremiumTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/promotions/PromotionsHooks.tsx");

export { useEligibleActiveOutboundPromotions };
export const useOutboundPromotions = function useOutboundPromotions() {
  const items = [PromotionsStore];
  stateFromStores = stateFromStores(stateFromStores2[4]).useStateFromStores(
    items,
    () => PromotionsStore.lastFetchedActivePromotions,
  );
  let obj = stateFromStores(stateFromStores2[4]);
  const items1 = [UserStore];
  const stateFromStores1 = stateFromStores(stateFromStores2[4]).useStateFromStores(items1, () =>
    currentUser.getCurrentUser(),
  );
  const obj2 = stateFromStores(stateFromStores2[4]);
  let obj3 = require("PremiumUtils");
  const isPremiumExactlyResult = require("PremiumUtils").isPremiumExactly(stateFromStores1, PremiumTypes.TIER_2);
  const isPremiumResult = require("PremiumUtils").isPremium(stateFromStores1);
  let tmp8 = !isPremiumResult;
  if (isPremiumResult) {
    tmp8 = isPremiumExactlyResult;
  }
  importDefault = tmp8;
  let tmpResult = tmp(tmp2[4]);
  const items2 = [PromotionsStore];
  stateFromStores2 = tmpResult.useStateFromStores(items2, () => PromotionsStore.claimedOutboundPromotionCodes);
  tmpResult = tmp(tmp2[4]);
  const items3 = [PromotionsStore];
  let promotionsLoaded = tmpResult.useStateFromStores(
    items3,
    () => PromotionsStore.claimedOutboundPromotionCodesLoaded,
  );
  const items4 = [stateFromStores];
  const effect = activeOutboundPromotions.useEffect(() => {
    if (null != stateFromStores) {
      DispatcherDefault.wait(() => closure_1_1(stateFromStores2[8]).markOutboundPromotionsSeen());
    }
  }, items4);
  const items5 = [stateFromStores, tmp8];
  const effect1 = activeOutboundPromotions.useEffect(() => {
    DispatcherDefault.wait(() => {
      let tmp = closure_1_1;
      if (closure_1_1) {
        tmp = null == stateFromStores;
      }
      if (tmp) {
        const activePromotions = isPremiumExactlyResult(stateFromStores2[8]).fetchActivePromotions();
        const obj = isPremiumExactlyResult(stateFromStores2[8]);
      }
    });
  }, items5);
  const effect2 = activeOutboundPromotions.useEffect(() => {
    isPremiumExactlyResult(stateFromStores2[7]).wait(() => {
      const claimedOutboundPromotionCodes = closure_1_1(stateFromStores2[8]).fetchClaimedOutboundPromotionCodes();
    });
  }, []);
  const items6 = [stateFromStores2];
  const claimedOutboundPromotionCodeMap = activeOutboundPromotions.useMemo(
    () => PromotionUtils.getClaimedOutboundPromotionCodeMap(stateFromStores2),
    items6,
  );
  activeOutboundPromotions = useEligibleActiveOutboundPromotions({ includeClaimedPromotions: true });
  const items7 = [activeOutboundPromotions, stateFromStores2];
  const claimedEndedOutboundPromotions = activeOutboundPromotions.useMemo(() => {
    const set = new Set(activeOutboundPromotions.map((id) => id.id));
    return stateFromStores2.filter((promotion) => {
      promotion = promotion.promotion;
      const hasItem = set.has(promotion.id);
      let result = !hasItem;
      if (!hasItem) {
        stateFromStores(stateFromStores2[5]);
        const obj = { promotionType: promotion.promotionType };
        result = false === obj.isRecurringPromotion(obj);
      }
      if (result) {
        result = !stateFromStores(stateFromStores2[5]).isDedicatedSurfacePromotion(promotion);
        const obj3 = stateFromStores(stateFromStores2[5]);
      }
      if (result) {
        result = stateFromStores(stateFromStores2[5]).shouldShowOutboundPromotionOnPlatform(promotion);
        const obj4 = stateFromStores(stateFromStores2[5]);
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
  return {
    promotionsLoaded,
    activeOutboundPromotions,
    claimedEndedOutboundPromotions,
    claimedOutboundPromotionCodeMap,
  };
};
export const useUnseenOutboundPromotions = function useUnseenOutboundPromotions() {
  const items = [PromotionsStore];
  stateFromStores = stateFromStores(504).useStateFromStores(
    items,
    () => PromotionsStore.lastSeenOutboundPromotionStartDate,
  );
  const tmp2 = useEligibleActiveOutboundPromotions();
  closure_1 = tmp2;
  const items1 = [tmp2, stateFromStores];
  const memo = noop.useMemo(() => {
    if (null == stateFromStores) {
      let found = closure_1;
    } else {
      found = closure_1.filter((startDate) => {
        const date = new Date(startDate.startDate);
        return date > new Date(stateFromStores);
      });
    }
    return found;
  }, items1);
  return memo.filter((item) => stateFromStores(dependencyMap[5]).shouldShowOutboundPromotionOnPlatform(item));
};
export const useBogoPromotion = function useBogoPromotion() {
  const obj = { promotion: null };
  const items = [PromotionsStore];
  obj.promotion = initialize.useStateFromStores(items, () => bogoPromotion.bogoPromotion);
  return obj;
};
export const useIsInPromotion = function useIsInPromotion(arg0) {
  _require = arg0;
  const items = [PromotionsStore];
  return require("initialize").useStateFromStores(items, () => PromotionsStore.hasPromotion(closure_0));
};
export const useHasActiveBogoPromotion = function useHasActiveBogoPromotion() {
  const effect = noop.useEffect(() => {
    const result = require("PromotionsActionCreators").maybeFetchActivePromotions();
  }, []);
  const items = [PromotionsStore];
  return initialize.useStateFromStores(items, () => null != activeBogoRewardPromotion.getActiveBogoRewardPromotion());
};

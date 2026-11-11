// === Module 9944: usePromotionMarketingSurface ===

// Module 9944 (usePromotionMarketingSurface)
import noop from "module_19" /* 19 */;
import UserOfferStore from "UserOfferStore" /* 9232 */;
import PromotionsStore from "PromotionsStore" /* 9557 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/hooks/usePromotionMarketingSurface.tsx");

export function usePromotionMarketingSurface(PREMIUM_TAB) {
  _require = PREMIUM_TAB;
  closure_129_0 = () => PromotionsStore.getMarketingComponentBySurface(closure_0);
  const effect = noop.useEffect(() => {
    const result = PREMIUM_TAB(promotionId[3]).maybeFetchActivePromotions();
  }, []);
  items = [PromotionsStore, UserOfferStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const tmp = PREMIUM_TAB();
    if (null == tmp) {
      return null;
    } else {
      const marketingPromotionForEligibility = PromotionsStore.getMarketingPromotionForEligibility(tmp.promotionId);
      let trialId;
      if (marketingPromotionForEligibility != null) {
        trialId = marketingPromotionForEligibility.trialId;
      }
      if (null != trialId) {
        const userTrialOffer = UserOfferStore.getUserTrialOffer(marketingPromotionForEligibility.trialId);
        return null;
      }
      return tmp;
    }
  });
  closure_129_1 = stateFromStores;
  const obj2 = require("initialize");
  const items1 = [PromotionsStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    let str;
    if (promotionId != null) {
      str = promotionId.promotionId;
    }
    if (str == null) {
      str = "";
    }
    return PromotionsStore.getMarketingPromotionForEligibility(str);
  });
  let endDate;
  if (stateFromStores1 != null) {
    endDate = stateFromStores1.endDate;
  }
  closure_129_2 = endDate;
  const items2 = [endDate];
  const memo = noop.useMemo(() => {
    const obj = { endDate, expired: false };
    closure_1 = { endDate, expired: true };
    return () => {
      if (null != endDate) {
        const _Date = Date;
        const time = endDate.getTime();
        if (time <= Date.now()) {
          let tmp3 = closure_1;
        }
        return tmp3;
      }
      tmp3 = endDate;
    };
  }, items2);
  const items3 = [endDate];
  let tmp6 = null;
  if (!noop.useSyncExternalStore(noop.useCallback((arg0) => {
    closure_0 = arg0;
    if (null == endDate) {
      return () => {

      };
    } else {
      const time = endDate.getTime();
      const _Date = Date;
      let diff = time - Date.now();
      if (diff > 0) {
        if (diff < 86400000) {
          function checkExpiry() {
            const diff = time - Date.now();
            if (diff > 0) {
              const _setTimeout = setTimeout;
              const timeout = setTimeout(checkExpiry, diff);
            } else {
              closure_0();
            }
          }
          let _setTimeout = setTimeout;
          let timeout = setTimeout(checkExpiry, diff);
          return () => clearTimeout(closure_1);
        }
      }
      return () => {

      };
    }
  }, items3), memo, memo).expired) {
    tmp6 = stateFromStores;
  }
  return tmp6;
}
export function usePromotionMarketingComponentData(arg0) {
  _require = arg0;
  const effect = endDate.useEffect(() => {
    const result = PREMIUM_TAB(promotionId[3]).maybeFetchActivePromotions();
  }, []);
  items = [PromotionsStore, UserOfferStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    const tmp = PREMIUM_TAB();
    if (null == tmp) {
      return null;
    } else {
      const marketingPromotionForEligibility = PromotionsStore.getMarketingPromotionForEligibility(tmp.promotionId);
      let trialId;
      if (marketingPromotionForEligibility != null) {
        trialId = marketingPromotionForEligibility.trialId;
      }
      if (null != trialId) {
        const userTrialOffer = UserOfferStore.getUserTrialOffer(marketingPromotionForEligibility.trialId);
        return null;
      }
      return tmp;
    }
  });
  const obj2 = require("initialize");
  const items1 = [PromotionsStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    let str;
    if (promotionId != null) {
      str = promotionId.promotionId;
    }
    if (str == null) {
      str = "";
    }
    return PromotionsStore.getMarketingPromotionForEligibility(str);
  });
  endDate = undefined;
  if (stateFromStores1 != null) {
    endDate = stateFromStores1.endDate;
  }
  const items2 = [endDate];
  const memo = obj.useMemo(() => {
    const obj = { endDate, expired: false };
    closure_1 = { endDate, expired: true };
    return () => {
      if (null != endDate) {
        const _Date = Date;
        const time = endDate.getTime();
        if (time <= Date.now()) {
          let tmp3 = closure_1;
        }
        return tmp3;
      }
      tmp3 = endDate;
    };
  }, items2);
  const items3 = [endDate];
  let tmp6 = null;
  if (!endDate.useSyncExternalStore(endDate.useCallback((arg0) => {
    closure_0 = arg0;
    if (null == endDate) {
      return () => {

      };
    } else {
      const time = endDate.getTime();
      const _Date = Date;
      let diff = time - Date.now();
      if (diff > 0) {
        if (diff < 86400000) {
          function checkExpiry() {
            const diff = time - Date.now();
            if (diff > 0) {
              const _setTimeout = setTimeout;
              const timeout = setTimeout(checkExpiry, diff);
            } else {
              closure_0();
            }
          }
          let _setTimeout = setTimeout;
          let timeout = setTimeout(checkExpiry, diff);
          return () => clearTimeout(closure_1);
        }
      }
      return () => {

      };
    }
  }, items3), memo, memo).expired) {
    tmp6 = stateFromStores;
  }
  return tmp6;
}
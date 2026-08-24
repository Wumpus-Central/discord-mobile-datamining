// === Module 7966: usePromotionMarketingComponent ===

// Module 7966 (usePromotionMarketingComponent)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "emitChanges" /* 7459 */;
import closure_5 from "createEmptyPromotionsByType" /* 7666 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/premium/hooks/usePromotionMarketingComponent.tsx");

export const usePromotionMarketingComponent = function usePromotionMarketingComponent(PREMIUM_TAB) {
  const _require = PREMIUM_TAB;
  const effect = React.useEffect(() => {
    const result = PREMIUM_TAB(stateFromStores[4]).maybeFetchActivePromotions();
  }, []);
  const items = [closure_5, closure_4];
  stateFromStores = _require(stateFromStores[5]).useStateFromStores(items, () => {
    const marketingComponentByType = closure_1_5.getMarketingComponentByType(PREMIUM_TAB);
    if (null == marketingComponentByType) {
      return null;
    } else {
      const promotionByTypeAndId = obj.getPromotionByTypeAndId(PREMIUM_TAB(stateFromStores[6]).PromotionTypes.MARKETING_MOMENT, marketingComponentByType.promotionId);
      let trialId;
      if (promotionByTypeAndId != null) {
        trialId = promotionByTypeAndId.trialId;
      }
      if (null != trialId) {
        const userTrialOffer = ref.getUserTrialOffer(promotionByTypeAndId.trialId);
        return null;
      }
      return marketingComponentByType;
    }
    obj = closure_1_5;
  });
  const obj2 = _require(stateFromStores[5]);
  const items1 = [closure_5];
  const stateFromStores1 = _require(stateFromStores[5]).useStateFromStores(items1, () => {
    let str;
    if (stateFromStores != null) {
      str = stateFromStores.promotionId;
    }
    if (str == null) {
      str = "";
    }
    return closure_1_5.getPromotionByTypeAndId(PREMIUM_TAB(stateFromStores[6]).PromotionTypes.MARKETING_MOMENT, str);
  });
  let endDate;
  if (stateFromStores1 != null) {
    endDate = stateFromStores1.endDate;
  }
  const obj3 = _require(stateFromStores[5]);
  [tmp6, closure_3] = endDate(React.useState(false), 2);
  closure_4 = obj.useRef(null);
  const items2 = [endDate];
  const effect1 = obj.useEffect(() => {
    if (null != endDate) {
      const _Date = Date;
      const time = endDate.getTime();
      const diff = time - Date.now();
      if (diff > 0) {
        if (diff < 86400000) {
          callback(false);
          const _clearTimeout2 = clearTimeout;
          clearTimeout(ref.current);
          const _setTimeout = setTimeout;
          ref.current = setTimeout(() => {
            callback(true);
          }, diff);
        }
        return () => {
          clearTimeout(ref.current);
        };
      }
      if (diff <= 0) {
        callback(true);
      }
    } else {
      callback(false);
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
  }, items2);
  let tmp8 = null;
  if (!tmp6) {
    tmp8 = stateFromStores;
  }
  return tmp8;
};
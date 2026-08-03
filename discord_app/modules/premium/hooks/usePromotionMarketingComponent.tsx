import _slicedToArray from "_slicedToArray";
import noop from "noop";
import emitChanges from "emitChanges";
import createEmptyPromotionsByType from "createEmptyPromotionsByType";

const require = arg1;
let result = require("emitChanges").fileFinishedImporting("modules/premium/hooks/usePromotionMarketingComponent.tsx");

export const usePromotionMarketingComponent = function usePromotionMarketingComponent(PREMIUM_TAB) {
  let noop;
  let tmp6;
  const _require = PREMIUM_TAB;
  const effect = React.useEffect(() => {
    const result = PREMIUM_TAB(stateFromStores[4]).maybeFetchActivePromotions();
  }, []);
  const items = [createEmptyPromotionsByType, emitChanges];
  stateFromStores = _require(stateFromStores[5]).useStateFromStores(items, () => {
    const marketingComponentByType = outer1_5.getMarketingComponentByType(PREMIUM_TAB);
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
        if (null != userTrialOffer) {
          if (null != userTrialOffer.expires_at) {
            const _Date = Date;
            const _Date2 = Date;
            const parsed = Date.parse(userTrialOffer.expires_at);
          }
        }
        return null;
      }
      return marketingComponentByType;
    }
    obj = outer1_5;
  });
  const obj2 = _require(stateFromStores[5]);
  const items1 = [createEmptyPromotionsByType];
  const stateFromStores1 = _require(stateFromStores[5]).useStateFromStores(items1, () => {
    let str;
    if (stateFromStores != null) {
      str = stateFromStores.promotionId;
    }
    if (str == null) {
      str = "";
    }
    return outer1_5.getPromotionByTypeAndId(PREMIUM_TAB(stateFromStores[6]).PromotionTypes.MARKETING_MOMENT, str);
  });
  let endDate;
  if (stateFromStores1 != null) {
    endDate = stateFromStores1.endDate;
  }
  const obj3 = _require(stateFromStores[5]);
  [tmp6, noop] = endDate(React.useState(false), 2);
  emitChanges = obj.useRef(null);
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
// === Module 13352: usePromotionMarketingComponent ===

// Module 13352 (usePromotionMarketingComponent)
import constants from "constants" /* 10697 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserOfferStore from "UserOfferStore" /* 7450 */;
import PromotionsStore from "PromotionsStore" /* 10665 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/hooks/usePromotionMarketingComponent.tsx");

export const usePromotionMarketingComponent = function usePromotionMarketingComponent(PREMIUM_TAB) {
  _require = PREMIUM_TAB;
  const effect = noop.useEffect(() => {
    const result = PREMIUM_TAB(stateFromStores[4]).maybeFetchActivePromotions();
  }, []);
  const items = [PromotionsStore, ref];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    const marketingComponentByType = PromotionsStore.getMarketingComponentByType(closure_0);
    if (null == marketingComponentByType) {
      return null;
    } else {
      const promotionByTypeAndId = PromotionsStore.getPromotionByTypeAndId(constants.PromotionTypes.MARKETING_MOMENT, marketingComponentByType.promotionId);
      let trialId;
      if (promotionByTypeAndId != null) {
        trialId = promotionByTypeAndId.trialId;
      }
      if (null != trialId) {
        const userTrialOffer = UserOfferStore.getUserTrialOffer(promotionByTypeAndId.trialId);
        return null;
      }
      return marketingComponentByType;
    }
  });
  const obj2 = require("initialize");
  const items1 = [PromotionsStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    let str;
    if (stateFromStores != null) {
      str = stateFromStores.promotionId;
    }
    if (str == null) {
      str = "";
    }
    return PromotionsStore.getPromotionByTypeAndId(constants.PromotionTypes.MARKETING_MOMENT, str);
  });
  let endDate;
  if (stateFromStores1 != null) {
    endDate = stateFromStores1.endDate;
  }
  const obj3 = require("initialize");
  [tmp6, noop] = endDate(noop.useState(false), 2);
  const tmp5 = endDate(noop.useState(false), 2);
  const items2 = [endDate];
  const effect1 = noop.useEffect(() => {
    if (null != endDate) {
      const _Date = Date;
      const time = endDate.getTime();
      const diff = time - Date.now();
      if (diff > 0) {
        if (diff < 86400000) {
          noop(false);
          const _clearTimeout2 = clearTimeout;
          clearTimeout(ref.current);
          const _setTimeout = setTimeout;
          ref.current = setTimeout(() => {
            closure_1_3(true);
          }, diff);
        }
        return () => {
          clearTimeout(ref.current);
        };
      }
      if (diff <= 0) {
        noop(true);
      }
    } else {
      noop(false);
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
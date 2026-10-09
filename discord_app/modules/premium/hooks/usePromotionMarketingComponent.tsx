// === Module 13636: usePromotionMarketingComponent ===

// Module 13636 (usePromotionMarketingComponent)
import constants from "constants" /* 9133 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserOfferStore from "UserOfferStore" /* 7166 */;
import PromotionsStore from "PromotionsStore" /* 9101 */;

const require = globalThis.__r;

require = fn;
let c6 = 86400000;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/hooks/usePromotionMarketingComponent.tsx");

export const usePromotionMarketingComponent = ReactCompilerGating.isReactCompilerEnabled() ? (function usePromotionMarketingComponent(arg0) {
  _require = arg0;
  const cResult = require("c").c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      const result = closure_0(stateFromStores[6]).maybeFetchActivePromotions();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const effect = noop.useEffect(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PromotionsStore, UserOfferStore];
    cResult[2] = items1;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    const fn2 = function p() {
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
    };
    cResult[3] = arg0;
    cResult[4] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
  }
  const obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(tmp7, tmp10);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PromotionsStore];
    cResult[5] = items2;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[5];
  }
  let promotionId;
  if (stateFromStores != null) {
    promotionId = stateFromStores.promotionId;
  }
  if (cResult[6] !== promotionId) {
    let promotionId1;
    if (stateFromStores != null) {
      promotionId1 = stateFromStores.promotionId;
    }
    class M {
      constructor() {
        tmp = closure_5;
        str = undefined;
        if (closure_1 != null) {
          str = closure_1.promotionId;
        }
        if (str == null) {
          str = "";
        }
        return closure_5.getPromotionByTypeAndId(closure_0(closure_1[7]).PromotionTypes.MARKETING_MOMENT, str);
      }
    }
    cResult[6] = promotionId1;
    cResult[7] = M;
    let tmp15 = M;
  } else {
    tmp15 = cResult[7];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp12, tmp15);
  let endDate;
  if (stateFromStores1 != null) {
    endDate = stateFromStores1.endDate;
  }
  const tmpResult2 = require("initialize");
  [tmp20, noop] = endDate(noop.useState(false), 2);
  UserOfferStore = noop.useRef(null);
  if (cResult[8] !== endDate) {
    class E {
      constructor() {
        obj = endDate;
        if (null != endDate) {
          tmp7 = globalThis;
          _Date = Date;
          time = obj.getTime();
          diff = time - Date.now();
          num = 0;
          if (diff > 0) {
            tmp9 = c6;
            if (diff < c6) {
              tmp12 = closure_3;
              flag3 = false;
              tmp13 = closure_3(false);
              _clearTimeout2 = clearTimeout;
              tmp14 = closure_4;
              clearTimeoutResult = clearTimeout(closure_4.current);
              _setTimeout = setTimeout;
              closure_4.current = setTimeout(() => {
                closure_1_3(true);
              }, diff);
            }
            return () => {
              clearTimeout(ref.current);
            };
          }
          if (diff <= 0) {
            tmp10 = closure_3;
            flag2 = true;
            tmp11 = closure_3(true);
          }
        } else {
          tmp = closure_3;
          flag = false;
          tmp2 = closure_3(false);
          tmp3 = globalThis;
          _clearTimeout = clearTimeout;
          tmp4 = closure_4;
          clearTimeoutResult1 = clearTimeout(closure_4.current);
          return;
        }
        return;
      }
    }
    const items3 = [];
    class M {
      constructor() {
        tmp = closure_5;
        str = undefined;
        if (closure_1 != null) {
          str = closure_1.promotionId;
        }
        if (str == null) {
          str = "";
        }
        return closure_5.getPromotionByTypeAndId(closure_0(closure_1[7]).PromotionTypes.MARKETING_MOMENT, str);
      }
    }
    cResult[8] = endDate;
    cResult[9] = E;
    cResult[10] = items3;
    let tmp22 = items3;
  } else {
    class E {
      constructor() {
        obj = endDate;
        if (null != endDate) {
          tmp7 = globalThis;
          _Date = Date;
          time = obj.getTime();
          diff = time - Date.now();
          num = 0;
          if (diff > 0) {
            tmp9 = c6;
            if (diff < c6) {
              tmp12 = closure_3;
              flag3 = false;
              tmp13 = closure_3(false);
              _clearTimeout2 = clearTimeout;
              tmp14 = closure_4;
              clearTimeoutResult = clearTimeout(closure_4.current);
              _setTimeout = setTimeout;
              closure_4.current = setTimeout(() => {
                closure_1_3(true);
              }, diff);
            }
            return () => {
              clearTimeout(ref.current);
            };
          }
          if (diff <= 0) {
            tmp10 = closure_3;
            flag2 = true;
            tmp11 = closure_3(true);
          }
        } else {
          tmp = closure_3;
          flag = false;
          tmp2 = closure_3(false);
          tmp3 = globalThis;
          _clearTimeout = clearTimeout;
          tmp4 = closure_4;
          clearTimeoutResult1 = clearTimeout(closure_4.current);
          return;
        }
        return;
      }
    }
    tmp22 = cResult[10];
  }
  const effect1 = noop.useEffect(E, tmp22);
  if (!tmp20) {
    class E {
      constructor() {
        obj = endDate;
        if (null != endDate) {
          tmp7 = globalThis;
          _Date = Date;
          time = obj.getTime();
          diff = time - Date.now();
          num = 0;
          if (diff > 0) {
            tmp9 = c6;
            if (diff < c6) {
              tmp12 = closure_3;
              flag3 = false;
              tmp13 = closure_3(false);
              _clearTimeout2 = clearTimeout;
              tmp14 = closure_4;
              clearTimeoutResult = clearTimeout(closure_4.current);
              _setTimeout = setTimeout;
              closure_4.current = setTimeout(() => {
                closure_1_3(true);
              }, diff);
            }
            return () => {
              clearTimeout(ref.current);
            };
          }
          if (diff <= 0) {
            tmp10 = closure_3;
            flag2 = true;
            tmp11 = closure_3(true);
          }
        } else {
          tmp = closure_3;
          flag = false;
          tmp2 = closure_3(false);
          tmp3 = globalThis;
          _clearTimeout = clearTimeout;
          tmp4 = closure_4;
          clearTimeoutResult1 = clearTimeout(closure_4.current);
          return;
        }
        return;
      }
    }
  }
  return null;
}) : (function usePromotionMarketingComponent(arg0) {
  _require = arg0;
  const effect = noop.useEffect(() => {
    const result = closure_0(stateFromStores[6]).maybeFetchActivePromotions();
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
        if (diff < c6) {
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
});
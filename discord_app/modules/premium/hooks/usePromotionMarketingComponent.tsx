// discord_app/modules/premium/hooks/usePromotionMarketingComponent.tsx
import promotions_constants from "../promotions/constants.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import UserOfferStore_mod from "../../../stores/billing/UserOfferStore.tsx";
import PromotionsStore from "../promotions/PromotionsStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, clearTimeoutResult, clearTimeoutResult1, flag, flag2, flag3, num, tmp, tmp11, tmp13, tmp3, tmp9;

let UserOfferStore = UserOfferStore_mod;
let c6 = 86400000;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let ref;
      let stateFromStores;
      let tmp10;
      let tmp12;
      let tmp16;
      let tmp21;
      let tmp23;
      let tmp4;
      let tmp5;
      let tmp7;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function c() {
          const obj = closure_0(stateFromStores[6]);
          const result = obj.maybeFetchActivePromotions();
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp4 = fn;
        tmp5 = items;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const effect = react.useEffect(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [PromotionsStore, UserOfferStore];
        cResult[2] = items1;
        tmp7 = items1;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== arg0) {
        const fn2 = function p() {
          const marketingComponentByType = PromotionsStore.getMarketingComponentByType(closure_0);
          if (null == marketingComponentByType) {
            return null;
          } else {
            const promotionByTypeAndId = PromotionsStore.getPromotionByTypeAndId(
              promotions_constants.PromotionTypes.MARKETING_MOMENT,
              marketingComponentByType.promotionId,
            );
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
        tmp10 = fn2;
      } else {
        tmp10 = cResult[4];
      }
      const tmpResult = require("get initialized");
      stateFromStores = tmpResult.useStateFromStores(tmp7, tmp10);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [PromotionsStore];
        cResult[5] = items2;
        tmp12 = items2;
      } else {
        tmp12 = cResult[5];
      }
      let promotionId;
      const tmp14 = cResult[6];
      if (stateFromStores != null) {
        promotionId = stateFromStores.promotionId;
      }
      if (tmp14 !== promotionId) {
        let promotionId1;
        if (stateFromStores != null) {
          promotionId1 = stateFromStores.promotionId;
        }
        class M {
          constructor() {
            const getPromotionByTypeAndId = PromotionsStore.getPromotionByTypeAndId;
            let str;
            const MARKETING_MOMENT = promotions_constants.PromotionTypes.MARKETING_MOMENT;
            if (stateFromStores != null) {
              str = stateFromStores.promotionId;
            }
            if (str == null) {
              str = "";
            }
            return getPromotionByTypeAndId(MARKETING_MOMENT, str);
          }
        }
        cResult[6] = promotionId1;
        cResult[7] = M;
        tmp16 = M;
      } else {
        tmp16 = cResult[7];
      }
      const tmpResult2 = require("get initialized");
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp12, tmp16);
      let endDate;
      if (stateFromStores1 != null) {
        endDate = stateFromStores1.endDate;
      }
      const tmp20 = endDate(react.useState(false), 2);
      [tmp21, react] = tmp20;
      UserOfferStore = react.useRef(null);
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
            const getPromotionByTypeAndId = PromotionsStore.getPromotionByTypeAndId;
            let str;
            const MARKETING_MOMENT = promotions_constants.PromotionTypes.MARKETING_MOMENT;
            if (stateFromStores != null) {
              str = stateFromStores.promotionId;
            }
            if (str == null) {
              str = "";
            }
            return getPromotionByTypeAndId(MARKETING_MOMENT, str);
          }
        }
        cResult[8] = endDate;
        cResult[9] = E;
        cResult[10] = items3;
        tmp23 = items3;
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
        tmp23 = cResult[10];
      }
      const effect1 = react.useEffect(E, tmp23);
      if (!tmp21) {
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
    }
  : (arg0) => {
      let closure_0;
      let ref;
      let stateFromStores;
      let tmp6;
      _require = arg0;
      const effect = react.useEffect(() => {
        const obj = closure_0(stateFromStores[6]);
        const result = obj.maybeFetchActivePromotions();
      }, []);
      const items = [PromotionsStore, ref];
      const obj2 = require("get initialized");
      stateFromStores = obj2.useStateFromStores(items, () => {
        const marketingComponentByType = PromotionsStore.getMarketingComponentByType(closure_0);
        if (null == marketingComponentByType) {
          return null;
        } else {
          const promotionByTypeAndId = PromotionsStore.getPromotionByTypeAndId(
            promotions_constants.PromotionTypes.MARKETING_MOMENT,
            marketingComponentByType.promotionId,
          );
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
      const items1 = [PromotionsStore];
      const obj3 = require("get initialized");
      const stateFromStores1 = obj3.useStateFromStores(items1, () => {
        const getPromotionByTypeAndId = PromotionsStore.getPromotionByTypeAndId;
        let str;
        const MARKETING_MOMENT = promotions_constants.PromotionTypes.MARKETING_MOMENT;
        if (stateFromStores != null) {
          str = stateFromStores.promotionId;
        }
        if (str == null) {
          str = "";
        }
        return getPromotionByTypeAndId(MARKETING_MOMENT, str);
      });
      let endDate;
      if (stateFromStores1 != null) {
        endDate = stateFromStores1.endDate;
      }
      const tmp5 = endDate(react.useState(false), 2);
      [tmp6, react] = tmp5;
      ref = react.useRef(null);
      const items2 = [endDate];
      const effect1 = react.useEffect(() => {
        if (null != endDate) {
          const _Date = Date;
          const time = endDate.getTime();
          const diff = time - Date.now();
          if (diff > 0) {
            if (diff < c6) {
              react(false);
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
            react(true);
          }
        } else {
          react(false);
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
let result = size.fileFinishedImporting("modules/premium/hooks/usePromotionMarketingComponent.tsx");

export const usePromotionMarketingComponent = tmp2;

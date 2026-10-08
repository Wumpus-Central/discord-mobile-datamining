// discord_app/modules/collectibles/hooks/useTrackProductCardImpression.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import CollectiblesUtils from "../CollectiblesUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";

const require = globalThis.__r;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useTrackProductCardImpression.tsx");

export const useTrackProductCardImpression = ReactCompilerGating.isReactCompilerEnabled()
  ? function useTrackProductCardImpression(sku_id, page_type, arg2) {
      const _require = sku_id;
      importDefault = page_type;
      const cResult = require("c").c(23);
      str = "product";
      if (undefined !== arg2) {
        str = arg2;
      }
      let obj = require("c");
      const collectiblesAnalyticsContext = require("CollectiblesAnalyticsContext").useCollectiblesAnalyticsContext();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [stateFromStores];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== sku_id) {
        const fn = function p() {
          return CollectiblesCategoryStore.getProduct(closure_0);
        };
        cResult[1] = sku_id;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = require("CollectiblesAnalyticsContext");
      stateFromStores = require("initialize").useStateFromStores(first, tmp7);
      const tmpResult3 = require("initialize");
      const currentUser = require("useCurrentUser").useCurrentUser();
      if (cResult[3] !== currentUser) {
        const canUseShopDiscountsResult = require("PremiumUtils").canUseShopDiscounts(currentUser);
        cResult[3] = currentUser;
        cResult[4] = canUseShopDiscountsResult;
        let tmp10 = canUseShopDiscountsResult;
        const obj5 = require("PremiumUtils");
      } else {
        tmp10 = cResult[4];
      }
      closure_5 = tmp10;
      collectiblesAnalyticsContext.useRef(null);
      let categoryPosition;
      if (collectiblesAnalyticsContext != null) {
        categoryPosition = collectiblesAnalyticsContext.categoryPosition;
      }
      if (cResult[5] === categoryPosition) {
        let pageCategory;
        if (collectiblesAnalyticsContext != null) {
          pageCategory = collectiblesAnalyticsContext.pageCategory;
        }
        if (cResult[6] === pageCategory) {
          let pageSection;
          if (collectiblesAnalyticsContext != null) {
            pageSection = collectiblesAnalyticsContext.pageSection;
          }
          if (cResult[7] === pageSection) {
            let sessionId;
            if (collectiblesAnalyticsContext != null) {
              sessionId = collectiblesAnalyticsContext.sessionId;
            }
            if (cResult[8] === sessionId) {
              let tilePosition;
              if (collectiblesAnalyticsContext != null) {
                tilePosition = collectiblesAnalyticsContext.tilePosition;
              }
              if (cResult[9] === tilePosition) {
                if (cResult[10] === tmp10) {
                  if (cResult[11] === page_type) {
                    if (cResult[12] === stateFromStores) {
                      if (cResult[13] === sku_id) {
                        if (cResult[14] === str) {
                          let tmp18 = cResult[15];
                        }
                        closure_7 = tmp18;
                        if (cResult[16] !== tmp18) {
                          const fn2 = function k(arg0) {
                            const current = ref.current;
                            if (arg0) {
                              if (null === current) {
                                const _setTimeout = setTimeout;
                                ref.current = setTimeout(() => {
                                  closure_1_7();
                                  ref.current = null;
                                }, 1000);
                              }
                            } else if (null !== current) {
                              const _clearTimeout = clearTimeout;
                              clearTimeout(ref.current);
                              ref.current = null;
                            }
                          };
                          cResult[16] = tmp18;
                          cResult[17] = fn2;
                          let tmp24 = fn2;
                        } else {
                          tmp24 = cResult[17];
                        }
                        const _Symbol = Symbol;
                        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                          const fn3 = function f() {
                            return () => {
                              if (null !== ref.current) {
                                const _clearTimeout = clearTimeout;
                                clearTimeout(ref.current);
                                ref.current = null;
                              }
                            };
                          };
                          cResult[18] = fn3;
                          let tmp25 = fn3;
                        } else {
                          tmp25 = cResult[18];
                        }
                        if (cResult[19] !== sku_id) {
                          const items1 = [sku_id];
                          cResult[19] = sku_id;
                          cResult[20] = items1;
                          let tmp26 = items1;
                        } else {
                          tmp26 = cResult[20];
                        }
                        const effect = collectiblesAnalyticsContext.useEffect(tmp25, tmp26);
                        if (cResult[21] !== tmp24) {
                          let obj2 = { handleCardVisibilityChange: tmp24 };
                          cResult[21] = tmp24;
                          cResult[22] = obj2;
                          let tmp28 = obj2;
                        } else {
                          tmp28 = cResult[22];
                        }
                        return tmp28;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      let categoryPosition1;
      if (collectiblesAnalyticsContext != null) {
        categoryPosition1 = collectiblesAnalyticsContext.categoryPosition;
      }
      cResult[5] = categoryPosition1;
      let pageCategory1;
      if (collectiblesAnalyticsContext != null) {
        pageCategory1 = collectiblesAnalyticsContext.pageCategory;
      }
      cResult[6] = pageCategory1;
      let pageSection1;
      if (collectiblesAnalyticsContext != null) {
        pageSection1 = collectiblesAnalyticsContext.pageSection;
      }
      cResult[7] = pageSection1;
      let sessionId1;
      if (collectiblesAnalyticsContext != null) {
        sessionId1 = collectiblesAnalyticsContext.sessionId;
      }
      cResult[8] = sessionId1;
      let tilePosition1;
      if (collectiblesAnalyticsContext != null) {
        tilePosition1 = collectiblesAnalyticsContext.tilePosition;
      }
      class I {
        constructor() {
          tmp = closure_4;
          priceForCollectiblesProduct = null;
          if (null != closure_4) {
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj = closure_0(closure_2[9]);
            tmp5 = closure_5;
            flag = true;
            priceForCollectiblesProduct = obj.getPriceForCollectiblesProduct(tmp, closure_5, true);
          }
          strikeThroughPriceAmountForCollectiblesProduct = undefined;
          if (null != tmp) {
            tmp7 = closure_0;
            tmp8 = closure_2;
            obj2 = closure_0(closure_2[9]);
            tmp9 = closure_5;
            flag2 = true;
            strikeThroughPriceAmountForCollectiblesProduct = obj2.getStrikeThroughPriceAmountForCollectiblesProduct(
              tmp,
              closure_5,
              true,
            );
          }
          obj3 = closure_1(closure_2[10]);
          tmp10 = closure_3;
          sessionId = undefined;
          if (closure_3 != null) {
            sessionId = tmp10.sessionId;
          }
          obj1 = {
            collectibles_shop_session_id: sessionId,
            sku_id: closure_0,
            display_price: null,
            display_price_currency: null,
            display_price_strikethrough: null,
            position: null,
            page_type: null,
            page_category: null,
            page_section: null,
            type: null,
            category_position: null,
          };
          amount = undefined;
          if (priceForCollectiblesProduct != null) {
            amount = priceForCollectiblesProduct.amount;
          }
          obj1.display_price = amount;
          str1 = undefined;
          if (priceForCollectiblesProduct != null) {
            str = priceForCollectiblesProduct.currency;
            str1 = str.toString();
          }
          obj1.display_price_currency = str1;
          obj1.display_price_strikethrough = strikeThroughPriceAmountForCollectiblesProduct;
          tilePosition = undefined;
          if (tmp10 != null) {
            tilePosition = tmp10.tilePosition;
          }
          obj1.position = tilePosition;
          obj1.page_type = closure_1;
          pageCategory = undefined;
          if (tmp10 != null) {
            pageCategory = tmp10.pageCategory;
          }
          obj1.page_category = pageCategory;
          pageSection = undefined;
          if (tmp10 != null) {
            pageSection = tmp10.pageSection;
          }
          obj1.page_section = pageSection;
          obj1.type = closure_2;
          categoryPosition = undefined;
          if (tmp10 != null) {
            categoryPosition = tmp10.categoryPosition;
          }
          obj1.category_position = categoryPosition;
          trackResult = obj3.track(AnalyticEvents.COLLECTIBLES_TILE_IMPRESSION, obj1);
          return;
        }
      }
      cResult[9] = tilePosition1;
      cResult[10] = tmp10;
      cResult[11] = page_type;
      cResult[12] = stateFromStores;
      cResult[13] = sku_id;
      cResult[14] = str;
      cResult[15] = I;
      tmp18 = I;
    }
  : function useTrackProductCardImpression(sku_id, page_type) {
      const _require = sku_id;
      importDefault = page_type;
      let str = arg2;
      if (arg2 === undefined) {
        str = "product";
      }
      let stateFromStores;
      let callback;
      const collectiblesAnalyticsContext = require("CollectiblesAnalyticsContext").useCollectiblesAnalyticsContext();
      let obj = require("CollectiblesAnalyticsContext");
      const items = [stateFromStores];
      stateFromStores = require("initialize").useStateFromStores(items, () =>
        CollectiblesCategoryStore.getProduct(closure_0),
      );
      let obj2 = require("initialize");
      const currentUser = require("useCurrentUser").useCurrentUser();
      let obj3 = require("useCurrentUser");
      const canUseShopDiscountsResult = require("PremiumUtils").canUseShopDiscounts(currentUser);
      c5 = canUseShopDiscountsResult;
      collectiblesAnalyticsContext.useRef(null);
      let sessionId;
      if (collectiblesAnalyticsContext != null) {
        sessionId = collectiblesAnalyticsContext.sessionId;
      }
      const items1 = [sessionId, , , , , , , , ,];
      let categoryPosition;
      if (collectiblesAnalyticsContext != null) {
        categoryPosition = collectiblesAnalyticsContext.categoryPosition;
      }
      items1[1] = categoryPosition;
      let pageCategory;
      if (collectiblesAnalyticsContext != null) {
        pageCategory = collectiblesAnalyticsContext.pageCategory;
      }
      items1[2] = pageCategory;
      let pageSection;
      if (collectiblesAnalyticsContext != null) {
        pageSection = collectiblesAnalyticsContext.pageSection;
      }
      items1[3] = pageSection;
      let tilePosition;
      if (collectiblesAnalyticsContext != null) {
        tilePosition = collectiblesAnalyticsContext.tilePosition;
      }
      items1[4] = tilePosition;
      items1[5] = canUseShopDiscountsResult;
      items1[6] = page_type;
      items1[7] = stateFromStores;
      items1[8] = sku_id;
      items1[9] = str;
      callback = collectiblesAnalyticsContext.useCallback(() => {
        let priceForCollectiblesProduct = null;
        if (null != stateFromStores) {
          priceForCollectiblesProduct = CollectiblesUtils.getPriceForCollectiblesProduct(stateFromStores, c5, true);
        }
        let strikeThroughPriceAmountForCollectiblesProduct;
        if (null != stateFromStores) {
          strikeThroughPriceAmountForCollectiblesProduct =
            CollectiblesUtils.getStrikeThroughPriceAmountForCollectiblesProduct(stateFromStores, c5, true);
        }
        let sessionId;
        if (collectiblesAnalyticsContext != null) {
          sessionId = collectiblesAnalyticsContext.sessionId;
        }
        const obj4 = {
          collectibles_shop_session_id: sessionId,
          sku_id,
          display_price: null,
          display_price_currency: null,
          display_price_strikethrough: null,
          position: null,
          page_type: null,
          page_category: null,
          page_section: null,
          type: null,
          category_position: null,
        };
        let amount;
        if (priceForCollectiblesProduct != null) {
          amount = priceForCollectiblesProduct.amount;
        }
        obj4.display_price = amount;
        let str1;
        if (priceForCollectiblesProduct != null) {
          str1 = str.toString();
        }
        obj4.display_price_currency = str1;
        obj4.display_price_strikethrough = strikeThroughPriceAmountForCollectiblesProduct;
        let tilePosition;
        if (collectiblesAnalyticsContext != null) {
          tilePosition = collectiblesAnalyticsContext.tilePosition;
        }
        obj4.position = tilePosition;
        obj4.page_type = page_type;
        let pageCategory;
        if (collectiblesAnalyticsContext != null) {
          pageCategory = collectiblesAnalyticsContext.pageCategory;
        }
        obj4.page_category = pageCategory;
        let pageSection;
        if (collectiblesAnalyticsContext != null) {
          pageSection = collectiblesAnalyticsContext.pageSection;
        }
        obj4.page_section = pageSection;
        obj4.type = str;
        let categoryPosition;
        if (collectiblesAnalyticsContext != null) {
          categoryPosition = collectiblesAnalyticsContext.categoryPosition;
        }
        obj4.category_position = categoryPosition;
        AnalyticsUtilsDefault.track(AnalyticEvents.COLLECTIBLES_TILE_IMPRESSION, obj4);
      }, items1);
      const items2 = [callback];
      const items3 = [sku_id];
      const handleCardVisibilityChange = obj5.useCallback((arg0) => {
        const current = ref.current;
        if (arg0) {
          if (null === current) {
            const _setTimeout = setTimeout;
            ref.current = setTimeout(() => {
              callback();
              ref.current = null;
            }, 1000);
          }
        } else if (null !== current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
          ref.current = null;
        }
      }, items2);
      const effect = obj5.useEffect(
        () => () => {
          if (null !== ref.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(ref.current);
            ref.current = null;
          }
        },
        items3,
      );
      return { handleCardVisibilityChange };
    };

// discord_app/modules/collectibles/hooks/useTrackPdpClick.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import CollectiblesUtils from "../CollectiblesUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useTrackPdpClick.tsx");

export const useTrackPdpClick = ReactCompilerGating.isReactCompilerEnabled()
  ? function useTrackPdpClick(skuId) {
      const cResult = skuId(analyticsLocations[3]).c(9);
      skuId = skuId.skuId;
      const productSkuIds = skuId.productSkuIds;
      analyticsLocations = skuId.analyticsLocations;
      let obj = skuId(analyticsLocations[3]);
      let collectiblesAnalyticsContext = skuId(analyticsLocations[4]).useCollectiblesAnalyticsContext();
      if (collectiblesAnalyticsContext == null) {
        collectiblesAnalyticsContext = {};
      }
      const cardId = collectiblesAnalyticsContext.cardId;
      const sessionId = collectiblesAnalyticsContext.sessionId;
      let obj2 = skuId(analyticsLocations[4]);
      const currentUserIfAvailable = skuId(analyticsLocations[5]).useCurrentUserIfAvailable();
      if (cResult[0] !== currentUserIfAvailable) {
        const shopDiscountSource = tmp(tmp2[6]).getShopDiscountSource(currentUserIfAvailable);
        cResult[0] = currentUserIfAvailable;
        cResult[1] = shopDiscountSource;
        let tmp5 = shopDiscountSource;
        const tmpResult2 = tmp(tmp2[6]);
      } else {
        tmp5 = cResult[1];
      }
      closure_5 = tmp5;
      if (cResult[2] === analyticsLocations) {
        if (cResult[3] === cardId) {
          if (cResult[4] === tmp5) {
            if (cResult[5] === productSkuIds) {
              if (cResult[6] === sessionId) {
                if (cResult[7] === skuId) {
                  let tmp7 = cResult[8];
                }
                return tmp7;
              }
            }
          }
        }
      }
      class I {
        constructor(arg0, arg1) {
          tmp = arg1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[7]);
          if (arg1 == null) {
            tmp = skuId;
          }
          obj1 = {
            sku_id: tmp,
            cta: skuId,
            shop_session_id: sessionId,
            card_id: cardId,
            product_sku_ids: productSkuIds,
            location_stack: analyticsLocations,
            discount_source: null,
          };
          obj3 = closure_0(tmp2[6]);
          obj1.discount_source = obj3.getAnalyticsShopDiscountSource(closure_5);
          trackResult = obj.track(AnalyticEvents.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, obj1);
          return;
        }
      }
      cResult[2] = analyticsLocations;
      cResult[3] = cardId;
      cResult[4] = tmp5;
      cResult[5] = productSkuIds;
      cResult[6] = sessionId;
      cResult[7] = skuId;
      cResult[8] = I;
      tmp7 = I;
    }
  : function useTrackPdpClick(skuId) {
      skuId = skuId.skuId;
      const productSkuIds = skuId.productSkuIds;
      const analyticsLocations = skuId.analyticsLocations;
      let cardId;
      let sessionId;
      let shopDiscountSource;
      let collectiblesAnalyticsContext = skuId(analyticsLocations[4]).useCollectiblesAnalyticsContext();
      if (collectiblesAnalyticsContext == null) {
        collectiblesAnalyticsContext = {};
      }
      cardId = collectiblesAnalyticsContext.cardId;
      sessionId = collectiblesAnalyticsContext.sessionId;
      let obj = skuId(analyticsLocations[4]);
      const currentUserIfAvailable = skuId(analyticsLocations[5]).useCurrentUserIfAvailable();
      const tmpResult = skuId(analyticsLocations[5]);
      shopDiscountSource = skuId(analyticsLocations[6]).getShopDiscountSource(currentUserIfAvailable);
      const items = [skuId, analyticsLocations, cardId, productSkuIds, sessionId, shopDiscountSource];
      return cardId.useCallback((cta, arg1) => {
        let tmp = arg1;
        if (arg1 == null) {
          tmp = skuId;
        }
        const obj2 = {
          sku_id: tmp,
          cta,
          shop_session_id: sessionId,
          card_id: cardId,
          product_sku_ids: productSkuIds,
          location_stack: analyticsLocations,
          discount_source: null,
        };
        const obj = AnalyticsUtilsDefault;
        obj2.discount_source = CollectiblesUtils.getAnalyticsShopDiscountSource(shopDiscountSource);
        obj.track(AnalyticEvents.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, obj2);
      }, items);
    };

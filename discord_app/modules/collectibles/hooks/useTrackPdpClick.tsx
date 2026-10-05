// discord_app/modules/collectibles/hooks/useTrackPdpClick.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import CollectiblesUtils from "../CollectiblesUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let skuId, tmp3, trackResult;

const AnalyticEvents = Constants.AnalyticEvents;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (skuId) => {
      let analyticsLocations;
      let tmp5;
      let tmp = skuId;
      let obj = skuId(analyticsLocations[3]);
      const cResult = obj.c(9);
      skuId = skuId.skuId;
      const productSkuIds = skuId.productSkuIds;
      analyticsLocations = skuId.analyticsLocations;
      let obj2 = skuId(analyticsLocations[4]);
      let collectiblesAnalyticsContext = obj2.useCollectiblesAnalyticsContext();
      if (collectiblesAnalyticsContext == null) {
        collectiblesAnalyticsContext = {};
      }
      const cardId = collectiblesAnalyticsContext.cardId;
      const sessionId = collectiblesAnalyticsContext.sessionId;
      const tmpResult = tmp(analyticsLocations[5]);
      const currentUserIfAvailable = tmpResult.useCurrentUserIfAvailable();
      if (cResult[0] !== currentUserIfAvailable) {
        const tmpResult2 = tmp(analyticsLocations[6]);
        const shopDiscountSource = tmpResult2.getShopDiscountSource(currentUserIfAvailable);
        cResult[0] = currentUserIfAvailable;
        cResult[1] = shopDiscountSource;
        tmp5 = shopDiscountSource;
      } else {
        tmp5 = cResult[1];
      }
      let closure_5 = tmp5;
      if (cResult[2] === analyticsLocations) {
        if (cResult[3] === cardId) {
          if (cResult[4] === tmp5) {
            if (cResult[5] === productSkuIds) {
              if (cResult[6] === sessionId) {
                let tmp7;
                if (cResult[7] === skuId) {
                  tmp7 = cResult[8];
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
          tmp3 = closure_1(closure_2[7]);
          track = tmp3.track;
          SHOP_PRODUCT_DETAIL_PAGE_CLICKED = AnalyticEvents.SHOP_PRODUCT_DETAIL_PAGE_CLICKED;
          if (arg1 == null) {
            tmp = skuId;
          }
          obj = {
            sku_id: tmp,
            cta: skuId,
            shop_session_id: sessionId,
            card_id: cardId,
            product_sku_ids: productSkuIds,
            location_stack: analyticsLocations,
            discount_source: null,
          };
          obj2 = closure_0(tmp2[6]);
          obj.discount_source = obj2.getAnalyticsShopDiscountSource(closure_5);
          trackResult = track(SHOP_PRODUCT_DETAIL_PAGE_CLICKED, obj);
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
  : (skuId) => {
      skuId = skuId.skuId;
      const productSkuIds = skuId.productSkuIds;
      const analyticsLocations = skuId.analyticsLocations;
      let cardId;
      let sessionId;
      let shopDiscountSource;
      let tmp = skuId;
      let obj = skuId(analyticsLocations[4]);
      let collectiblesAnalyticsContext = obj.useCollectiblesAnalyticsContext();
      if (collectiblesAnalyticsContext == null) {
        collectiblesAnalyticsContext = {};
      }
      cardId = collectiblesAnalyticsContext.cardId;
      sessionId = collectiblesAnalyticsContext.sessionId;
      const tmpResult = tmp(analyticsLocations[5]);
      const currentUserIfAvailable = tmpResult.useCurrentUserIfAvailable();
      const tmpResult2 = tmp(analyticsLocations[6]);
      shopDiscountSource = tmpResult2.getShopDiscountSource(currentUserIfAvailable);
      const items = [skuId, analyticsLocations, cardId, productSkuIds, sessionId, shopDiscountSource];
      return cardId.useCallback((cta, arg1) => {
        let obj2;
        let tmp = arg1;
        const track = AnalyticsUtilsDefault.track;
        const SHOP_PRODUCT_DETAIL_PAGE_CLICKED = AnalyticEvents.SHOP_PRODUCT_DETAIL_PAGE_CLICKED;
        AnalyticsUtilsDefault;
        if (arg1 == null) {
          tmp = skuId;
        }
        const obj = {
          sku_id: tmp,
          cta,
          shop_session_id: sessionId,
          card_id: cardId,
          product_sku_ids: productSkuIds,
          location_stack: analyticsLocations,
          discount_source: obj2.getAnalyticsShopDiscountSource(shopDiscountSource),
        };
        obj2 = CollectiblesUtils;
        track(SHOP_PRODUCT_DETAIL_PAGE_CLICKED, obj);
      }, items);
    };
const result = size.fileFinishedImporting("modules/collectibles/hooks/useTrackPdpClick.tsx");

export const useTrackPdpClick = tmp2;

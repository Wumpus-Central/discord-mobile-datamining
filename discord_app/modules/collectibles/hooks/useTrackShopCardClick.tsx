// discord_app/modules/collectibles/hooks/useTrackShopCardClick.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import CollectiblesProductUtils from "../utils/CollectiblesProductUtils.tsx";
import CollectiblesUtils from "../CollectiblesUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const useSelectedVariantIndex = fn(8517).useSelectedVariantIndex;
const AnalyticEvents = fn(1085).AnalyticEvents;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useTrackShopCardClick.tsx");

export const useTrackShopCardClick = ReactCompilerGating.isReactCompilerEnabled()
  ? (product) => {
      const cResult = require("c").c(10);
      product = product.product;
      require = product;
      const analyticsLocations = product.analyticsLocations;
      let obj = require("c");
      let collectiblesAnalyticsContext = require("CollectiblesAnalyticsContext").useCollectiblesAnalyticsContext();
      if (collectiblesAnalyticsContext == null) {
        collectiblesAnalyticsContext = {};
      }
      cardId = collectiblesAnalyticsContext.cardId;
      const sessionId = collectiblesAnalyticsContext.sessionId;
      const tilePosition = collectiblesAnalyticsContext.tilePosition;
      let tmp4 = tilePosition(product);
      closure_5 = tmp4;
      let obj2 = require("CollectiblesAnalyticsContext");
      const currentUserIfAvailable = require("useCurrentUser").useCurrentUserIfAvailable();
      if (cResult[0] !== currentUserIfAvailable) {
        const shopDiscountSource = tmp(tmp2[7]).getShopDiscountSource(currentUserIfAvailable);
        cResult[0] = currentUserIfAvailable;
        cResult[1] = shopDiscountSource;
        let tmp6 = shopDiscountSource;
        let tmpResult2 = tmp(tmp2[7]);
      } else {
        tmp6 = cResult[1];
      }
      closure_6 = tmp6;
      if (cResult[2] === analyticsLocations) {
        if (cResult[3] === cardId) {
          if (cResult[4] === tmp6) {
            if (cResult[5] === product) {
              if (cResult[6] === tmp4) {
                if (cResult[7] === sessionId) {
                  if (cResult[8] === tilePosition) {
                    let tmp8 = cResult[9];
                  }
                  return tmp8;
                }
              }
            }
          }
        }
      }
      const fn = function v(cta, arg1) {
        if (obj.getIsVariantProduct(product)) {
          let tmp4 = arg1;
          if (arg1 == null) {
            tmp4 = closure_5;
          }
          let skuId1;
          if (product.variants[tmp4] != null) {
            skuId1 = tmp6.skuId;
          }
          if (skuId1 == null) {
            skuId1 = product.skuId;
          }
          let skuId = skuId1;
        } else {
          skuId = product.skuId;
        }
        obj = CollectiblesProductUtils;
        const obj3 = {
          sku_id: skuId,
          cta,
          shop_session_id: sessionId,
          card_id: cardId,
          product_sku_ids: null,
          location_stack: null,
          position_in_section: null,
          discount_source: null,
        };
        const obj2 = AnalyticsUtilsDefault;
        obj3.product_sku_ids = CollectiblesProductUtils.getProductSkuIds(product);
        obj3.location_stack = analyticsLocations;
        obj3.position_in_section = tilePosition;
        const tmpResult = CollectiblesProductUtils;
        obj3.discount_source = CollectiblesUtils.getAnalyticsShopDiscountSource(closure_6);
        obj2.track(AnalyticEvents.SHOP_CARD_CLICKED, obj3);
        const tmpResult2 = CollectiblesUtils;
      };
      cResult[2] = analyticsLocations;
      cResult[3] = cardId;
      cResult[4] = tmp6;
      cResult[5] = product;
      cResult[6] = tmp4;
      cResult[7] = sessionId;
      cResult[8] = tilePosition;
      cResult[9] = fn;
      tmp8 = fn;
    }
  : (product) => {
      product = product.product;
      require = product;
      const analyticsLocations = product.analyticsLocations;
      let cardId;
      let sessionId;
      let tilePosition;
      closure_5 = undefined;
      let shopDiscountSource;
      let collectiblesAnalyticsContext = require("CollectiblesAnalyticsContext").useCollectiblesAnalyticsContext();
      if (collectiblesAnalyticsContext == null) {
        collectiblesAnalyticsContext = {};
      }
      cardId = collectiblesAnalyticsContext.cardId;
      sessionId = collectiblesAnalyticsContext.sessionId;
      tilePosition = collectiblesAnalyticsContext.tilePosition;
      const tmp3 = tilePosition(product);
      closure_5 = tmp3;
      let obj = require("CollectiblesAnalyticsContext");
      const currentUserIfAvailable = require("useCurrentUser").useCurrentUserIfAvailable();
      let tmpResult = require("useCurrentUser");
      shopDiscountSource = require("CollectiblesUtils").getShopDiscountSource(currentUserIfAvailable);
      const items = [product, tmp3, sessionId, cardId, analyticsLocations, tilePosition, shopDiscountSource];
      return sessionId.useCallback((cta, arg1) => {
        if (obj.getIsVariantProduct(product)) {
          let tmp4 = arg1;
          if (arg1 == null) {
            tmp4 = closure_5;
          }
          let skuId1;
          if (product.variants[tmp4] != null) {
            skuId1 = tmp6.skuId;
          }
          if (skuId1 == null) {
            skuId1 = product.skuId;
          }
          let skuId = skuId1;
        } else {
          skuId = product.skuId;
        }
        obj = CollectiblesProductUtils;
        const obj3 = {
          sku_id: skuId,
          cta,
          shop_session_id: sessionId,
          card_id: cardId,
          product_sku_ids: null,
          location_stack: null,
          position_in_section: null,
          discount_source: null,
        };
        const obj2 = AnalyticsUtilsDefault;
        obj3.product_sku_ids = CollectiblesProductUtils.getProductSkuIds(product);
        obj3.location_stack = analyticsLocations;
        obj3.position_in_section = tilePosition;
        const tmpResult = CollectiblesProductUtils;
        obj3.discount_source = CollectiblesUtils.getAnalyticsShopDiscountSource(shopDiscountSource);
        obj2.track(AnalyticEvents.SHOP_CARD_CLICKED, obj3);
        const tmpResult2 = CollectiblesUtils;
      }, items);
    };

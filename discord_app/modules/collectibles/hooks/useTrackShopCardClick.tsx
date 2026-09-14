// discord_app/modules/collectibles/hooks/useTrackShopCardClick.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import CollectiblesProductUtils from "../utils/CollectiblesProductUtils.tsx";
import CollectiblesUtils from "../CollectiblesUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const useSelectedVariantIndex = fn(8955).useSelectedVariantIndex;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useTrackShopCardClick.tsx");

export const useTrackShopCardClick = function useTrackShopCardClick(product) {
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

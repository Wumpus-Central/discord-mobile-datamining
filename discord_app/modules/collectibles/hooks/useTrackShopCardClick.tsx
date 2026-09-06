// === Module 8827: useTrackShopCardClick ===

// Module 8827 (useTrackShopCardClick)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7553 */;
import noop from "module_19" /* 19 */;

require = fn;
const useSelectedVariantIndex = fn(8828).useSelectedVariantIndex;
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
  let tmpResult = tmp(tmp2[4]);
  const currentUserIfAvailable = tmpResult.useCurrentUserIfAvailable();
  tmpResult = tmp(tmp2[5]);
  shopDiscountSource = tmpResult.getShopDiscountSource(currentUserIfAvailable);
  const items = [product, tmp3, sessionId, cardId, analyticsLocations, tilePosition, shopDiscountSource];
  return sessionId.useCallback((cta, arg1) => {
    let obj = CollectiblesProductUtils;
    if (obj.getIsVariantProduct(product)) {
      let tmp4 = arg1;
      if (arg1 == null) {
        tmp4 = closure_5;
      }
      let skuId;
      if (tmp3.variants[tmp4] != null) {
        skuId = tmp6.skuId;
      }
      if (skuId == null) {
        skuId = tmp3.skuId;
      }
    } else {
      skuId = tmp3.skuId;
    }
    obj = { sku_id: skuId, cta, shop_session_id: sessionId, card_id: cardId, product_sku_ids: null, location_stack: null, position_in_section: null, discount_source: null };
    let tmpResult = tmp(7553);
    obj.product_sku_ids = tmpResult.getProductSkuIds(product);
    obj.location_stack = analyticsLocations;
    obj.position_in_section = tilePosition;
    tmpResult = tmp(7554);
    obj.discount_source = tmpResult.getAnalyticsShopDiscountSource(shopDiscountSource);
    AnalyticsUtilsDefault.track(AnalyticEvents.SHOP_CARD_CLICKED, obj);
  }, items);
};
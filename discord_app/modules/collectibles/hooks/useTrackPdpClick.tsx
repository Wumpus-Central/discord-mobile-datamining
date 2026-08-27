// === Module 12442: useTrackPdpClick ===

// Module 12442 (useTrackPdpClick)
import closure_3 from "noop" /* 19 */;
import { AnalyticEvents } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useTrackPdpClick.tsx");

export const useTrackPdpClick = function useTrackPdpClick(skuId) {
  skuId = skuId.skuId;
  const productSkuIds = skuId.productSkuIds;
  const analyticsLocations = skuId.analyticsLocations;
  let cardId;
  let sessionId;
  let shopDiscountSource;
  let collectiblesAnalyticsContext = skuId(analyticsLocations[2]).useCollectiblesAnalyticsContext();
  if (collectiblesAnalyticsContext == null) {
    collectiblesAnalyticsContext = {};
  }
  cardId = collectiblesAnalyticsContext.cardId;
  sessionId = collectiblesAnalyticsContext.sessionId;
  let tmpResult = tmp(tmp2[3]);
  const currentUserIfAvailable = tmpResult.useCurrentUserIfAvailable();
  tmpResult = tmp(tmp2[4]);
  shopDiscountSource = tmpResult.getShopDiscountSource(currentUserIfAvailable);
  const items = [skuId, analyticsLocations, cardId, productSkuIds, sessionId, shopDiscountSource];
  return cardId.useCallback((cta) => {
    let tmp = arg1;
    let obj = productSkuIds(analyticsLocations[5]);
    if (arg1 == null) {
      tmp = skuId;
    }
    obj = { sku_id: tmp, cta, shop_session_id: sessionId, card_id: cardId, product_sku_ids: productSkuIds, location_stack: analyticsLocations, discount_source: skuId(analyticsLocations[4]).getAnalyticsShopDiscountSource(shopDiscountSource) };
    obj.track(sessionId.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, obj);
  }, items);
};
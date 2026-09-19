// === Module 13437: useTrackPdpClick ===

// Module 13437 (useTrackPdpClick)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7794 */;
import noop from "module_19" /* 19 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useTrackPdpClick.tsx");

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
  let obj = skuId(analyticsLocations[2]);
  const currentUserIfAvailable = skuId(analyticsLocations[3]).useCurrentUserIfAvailable();
  const tmpResult = skuId(analyticsLocations[3]);
  shopDiscountSource = skuId(analyticsLocations[4]).getShopDiscountSource(currentUserIfAvailable);
  const items = [skuId, analyticsLocations, cardId, productSkuIds, sessionId, shopDiscountSource];
  return cardId.useCallback((cta, arg1) => {
    let tmp = arg1;
    if (arg1 == null) {
      tmp = skuId;
    }
    const obj2 = { sku_id: tmp, cta, shop_session_id: sessionId, card_id: cardId, product_sku_ids: productSkuIds, location_stack: analyticsLocations, discount_source: null };
    const obj = AnalyticsUtilsDefault;
    obj2.discount_source = CollectiblesUtils.getAnalyticsShopDiscountSource(shopDiscountSource);
    obj.track(AnalyticEvents.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, obj2);
  }, items);
};
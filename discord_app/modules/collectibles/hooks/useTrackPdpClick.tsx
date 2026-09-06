// discord_app/modules/collectibles/hooks/useTrackPdpClick.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import CollectiblesUtils from "../CollectiblesUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
  let tmpResult = tmp(tmp2[3]);
  const currentUserIfAvailable = tmpResult.useCurrentUserIfAvailable();
  tmpResult = tmp(tmp2[4]);
  shopDiscountSource = tmpResult.getShopDiscountSource(currentUserIfAvailable);
  const items = [skuId, analyticsLocations, cardId, productSkuIds, sessionId, shopDiscountSource];
  return cardId.useCallback((cta, arg1) => {
    let tmp = arg1;
    let obj = AnalyticsUtilsDefault;
    if (arg1 == null) {
      tmp = skuId;
    }
    obj = {
      sku_id: tmp,
      cta,
      shop_session_id: sessionId,
      card_id: cardId,
      product_sku_ids: productSkuIds,
      location_stack: analyticsLocations,
      discount_source: CollectiblesUtils.getAnalyticsShopDiscountSource(shopDiscountSource),
    };
    obj.track(AnalyticEvents.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, obj);
  }, items);
};

// discord_app/modules/collectibles/hooks/useTrackShopCardClick.tsx
import noop from "../../../../_runtime/00019_noop.js";
import { useSelectedVariantIndex } from "../CollectiblesShopVariantsUIStore.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";

let require = fn;
const result = require("obj132").fileFinishedImporting("modules/collectibles/hooks/useTrackShopCardClick.tsx");

export const useTrackShopCardClick = function useTrackShopCardClick(product) {
  product = product.product;
  require = product;
  const analyticsLocations = product.analyticsLocations;
  let cardId;
  let sessionId;
  let tilePosition;
  closure_5 = undefined;
  let shopDiscountSource;
  let collectiblesAnalyticsContext = require(cardId[3]).useCollectiblesAnalyticsContext();
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
  return sessionId.useCallback((cta) => {
    let obj = product(cardId[6]);
    if (obj.getIsVariantProduct(product)) {
      let tmp4 = arg1;
      if (arg1 == null) {
        tmp4 = constants;
      }
      let skuId;
      if (product.variants[tmp4] != null) {
        skuId = tmp6.skuId;
      }
      if (skuId == null) {
        skuId = product.skuId;
      }
    } else {
      skuId = product.skuId;
    }
    obj = { sku_id: skuId, cta, shop_session_id: sessionId, card_id: cardId, product_sku_ids: null, location_stack: null, position_in_section: null, discount_source: null };
    let tmpResult = product(cardId[6]);
    obj[4] = tmpResult.getProductSkuIds(product);
    obj[5] = analyticsLocations;
    obj[6] = tilePosition;
    tmpResult = product(cardId[5]);
    obj[7] = tmpResult.getAnalyticsShopDiscountSource(shopDiscountSource);
    analyticsLocations(cardId[7]).track(constants.SHOP_CARD_CLICKED, obj);
    const obj2 = analyticsLocations(cardId[7]);
  }, items);
};
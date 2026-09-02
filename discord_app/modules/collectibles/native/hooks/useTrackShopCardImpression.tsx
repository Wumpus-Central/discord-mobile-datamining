// discord_app/modules/collectibles/native/hooks/useTrackShopCardImpression.tsx
import closure_3 from "../../../../../_runtime/00019_noop.js";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/collectibles/native/hooks/useTrackShopCardImpression.tsx");

export const useTrackShopCardImpression = function useTrackShopCardImpression(product, selectedProduct) {
  const _require = product;
  importDefault = selectedProduct;
  collectiblesAnalyticsContext = _require(collectiblesAnalyticsContext[1]).useCollectiblesAnalyticsContext();
  const analyticsLocations = importDefault(collectiblesAnalyticsContext[2])().analyticsLocations;
  let obj = _require(collectiblesAnalyticsContext[1]);
  const tmp = collectiblesAnalyticsContext;
  const tmp3 = importDefault;
  ({ width: closure_4, height: closure_5 } = importDefault(collectiblesAnalyticsContext[3])());
  const tmp4 = importDefault(collectiblesAnalyticsContext[3])();
  const currentUser = _require(collectiblesAnalyticsContext[4]).useCurrentUser();
  const obj2 = _require(collectiblesAnalyticsContext[4]);
  const shopDiscountSource = _require(collectiblesAnalyticsContext[5]).getShopDiscountSource(currentUser);
  const ref = analyticsLocations.useRef(null);
  closure_8 = analyticsLocations.useRef(false);
  closure_9 = analyticsLocations.useRef(false);
  const items = [selectedProduct.skuId];
  const effect = analyticsLocations.useEffect(() => {
    closure_8.current = false;
    closure_9.current = false;
  }, items);
  const items1 = [product, selectedProduct, , , , ,];
  let cardId;
  if (collectiblesAnalyticsContext != null) {
    cardId = collectiblesAnalyticsContext.cardId;
  }
  items1[2] = cardId;
  let sessionId;
  if (collectiblesAnalyticsContext != null) {
    sessionId = collectiblesAnalyticsContext.sessionId;
  }
  items1[3] = sessionId;
  let tilePosition;
  if (collectiblesAnalyticsContext != null) {
    tilePosition = collectiblesAnalyticsContext.tilePosition;
  }
  items1[4] = tilePosition;
  items1[5] = analyticsLocations;
  items1[6] = shopDiscountSource;
  closure_10 = analyticsLocations.useCallback(() => {
    let obj = product(collectiblesAnalyticsContext[6]);
    obj = {
      name: product(collectiblesAnalyticsContext[7]).ImpressionNames.SHOP_CARD,
      type: product(collectiblesAnalyticsContext[7]).ImpressionTypes.VIEW,
      properties: null,
    };
    obj = {
      sku_id: selectedProduct.skuId,
      card_id: null,
      shop_session_id: null,
      position_in_section: null,
      product_sku_ids: null,
      location_stack: null,
      discount_source: null,
    };
    let cardId;
    if (collectiblesAnalyticsContext != null) {
      cardId = tmp3.cardId;
    }
    obj[1] = cardId;
    let sessionId;
    if (collectiblesAnalyticsContext != null) {
      sessionId = tmp3.sessionId;
    }
    obj[2] = sessionId;
    let tilePosition;
    if (collectiblesAnalyticsContext != null) {
      tilePosition = tmp3.tilePosition;
    }
    obj[3] = tilePosition;
    let tmpResult = tmp(tmp2[8]);
    obj[4] = tmpResult.getProductSkuIds(product);
    obj[5] = analyticsLocations;
    tmpResult = tmp(tmp2[5]);
    obj[6] = tmpResult.getAnalyticsShopDiscountSource(shopDiscountSource);
    obj[2] = obj;
    obj.trackImpression(obj, false, true);
  }, items1);
  tmp3(tmp[9])(() => {
    const current = ref.current;
    if (current != null) {
      current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
        const bound = Math.min(arg4 + arg2, closure_4);
        const bound1 = Math.max(0, bound - Math.max(arg4, 0));
        const bound2 = Math.min(arg5 + arg3, closure_5);
        const result = arg2 * arg3;
        let num = 0;
        if (result > 0) {
          num = (bound1 * Math.max(0, bound2 - Math.max(arg5, 0))) / result;
        }
        if (num >= 0.5) {
          if (ref.current) {
            if (!ref2.current) {
              callback();
              tmp7.current = true;
            }
            ref.current = tmp5;
          }
        }
        if (num < 0.5) {
          ref2.current = false;
        }
      });
    }
  }, 1000);
  return ref;
};

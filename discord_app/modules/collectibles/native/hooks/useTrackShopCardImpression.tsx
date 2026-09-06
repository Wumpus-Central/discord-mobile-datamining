// discord_app/modules/collectibles/native/hooks/useTrackShopCardImpression.tsx
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import CollectiblesProductUtils from "../../utils/CollectiblesProductUtils.tsx";
import CollectiblesUtils from "../../CollectiblesUtils.tsx";
import useTrackImpression from "../../../app_analytics/useTrackImpression.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/hooks/useTrackShopCardImpression.tsx");

export const useTrackShopCardImpression = function useTrackShopCardImpression(product, selectedProduct) {
  _require = product;
  importDefault = selectedProduct;
  collectiblesAnalyticsContext = require("CollectiblesAnalyticsContext").useCollectiblesAnalyticsContext();
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  let obj = require("CollectiblesAnalyticsContext");
  const tmp = collectiblesAnalyticsContext;
  const tmp3 = importDefault;
  ({ width: closure_4, height: closure_5 } = require("useWindowDimensions")());
  const tmp4 = require("useWindowDimensions")();
  const currentUser = require("useCurrentUser").useCurrentUser();
  const obj2 = require("useCurrentUser");
  const shopDiscountSource = require("CollectiblesUtils").getShopDiscountSource(currentUser);
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
    let obj = {
      name: discord_common_AnalyticsUtils.ImpressionNames.SHOP_CARD,
      type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW,
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
      cardId = collectiblesAnalyticsContext.cardId;
    }
    obj.card_id = cardId;
    let sessionId;
    if (collectiblesAnalyticsContext != null) {
      sessionId = collectiblesAnalyticsContext.sessionId;
    }
    obj.shop_session_id = sessionId;
    let tilePosition;
    if (collectiblesAnalyticsContext != null) {
      tilePosition = collectiblesAnalyticsContext.tilePosition;
    }
    obj.position_in_section = tilePosition;
    let tmpResult = CollectiblesProductUtils;
    obj.product_sku_ids = tmpResult.getProductSkuIds(closure_0);
    obj.location_stack = analyticsLocations;
    tmpResult = CollectiblesUtils;
    obj.discount_source = tmpResult.getAnalyticsShopDiscountSource(shopDiscountSource);
    obj.properties = obj;
    obj.trackImpression(obj, false, true);
  }, items1);
  tmp3(tmp[9])(() => {
    const current = ref.current;
    if (current != null) {
      current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
        const bound = Math.min(arg4 + arg2, closure_1_4);
        const bound1 = Math.max(0, bound - Math.max(arg4, 0));
        const bound2 = Math.min(arg5 + arg3, closure_1_5);
        const result = arg2 * arg3;
        let num = 0;
        if (result > 0) {
          num = (bound1 * Math.max(0, bound2 - Math.max(arg5, 0))) / result;
        }
        if (num >= 0.5) {
          if (ref.current) {
            if (!ref2.current) {
              closure_1_10();
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

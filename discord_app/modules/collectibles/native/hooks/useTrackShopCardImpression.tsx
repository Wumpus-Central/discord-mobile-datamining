// === Module 9045: useTrackShopCardImpression ===

// Module 9045 (useTrackShopCardImpression)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7793 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7794 */;
import useTrackImpression from "useTrackImpression" /* 9047 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

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
  let obj2 = require("useCurrentUser");
  const shopDiscountSource = require("CollectiblesUtils").getShopDiscountSource(currentUser);
  const ref = analyticsLocations.useRef(null);
  closure_8 = analyticsLocations.useRef(false);
  closure_9 = analyticsLocations.useRef(false);
  const items = [selectedProduct.skuId];
  const effect = analyticsLocations.useEffect(() => {
    closure_8.current = false;
    closure_9.current = false;
  }, items);
  const items1 = [product, selectedProduct, , , , , ];
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
    const obj2 = { name: discord_common_AnalyticsUtils.ImpressionNames.SHOP_CARD, type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, properties: null };
    const obj3 = { sku_id: selectedProduct.skuId, card_id: null, shop_session_id: null, position_in_section: null, product_sku_ids: null, location_stack: null, discount_source: null };
    let cardId;
    if (collectiblesAnalyticsContext != null) {
      cardId = collectiblesAnalyticsContext.cardId;
    }
    obj3.card_id = cardId;
    let sessionId;
    if (collectiblesAnalyticsContext != null) {
      sessionId = collectiblesAnalyticsContext.sessionId;
    }
    obj3.shop_session_id = sessionId;
    let tilePosition;
    if (collectiblesAnalyticsContext != null) {
      tilePosition = collectiblesAnalyticsContext.tilePosition;
    }
    obj3.position_in_section = tilePosition;
    const obj = useTrackImpression;
    obj3.product_sku_ids = CollectiblesProductUtils.getProductSkuIds(closure_0);
    obj3.location_stack = analyticsLocations;
    const tmpResult = CollectiblesProductUtils;
    obj3.discount_source = CollectiblesUtils.getAnalyticsShopDiscountSource(shopDiscountSource);
    obj2.properties = obj3;
    obj.trackImpression(obj2, false, true);
    const tmpResult2 = CollectiblesUtils;
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
          num = bound1 * Math.max(0, bound2 - Math.max(arg5, 0)) / result;
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
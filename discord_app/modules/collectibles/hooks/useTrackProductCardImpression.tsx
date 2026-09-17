// === Module 15964: useTrackProductCardImpression ===

// Module 15964 (useTrackProductCardImpression)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7668 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7656 */;

const require = globalThis.__r;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useTrackProductCardImpression.tsx");

export const useTrackProductCardImpression = function useTrackProductCardImpression(categoryStoreListingId, mobile_home) {
  _require = categoryStoreListingId;
  importDefault = mobile_home;
  let str = featured_block;
  if (featured_block === undefined) {
    str = "product";
  }
  let stateFromStores;
  let callback;
  const collectiblesAnalyticsContext = require("CollectiblesAnalyticsContext").useCollectiblesAnalyticsContext();
  let obj = require("CollectiblesAnalyticsContext");
  const items = [stateFromStores];
  stateFromStores = require("initialize").useStateFromStores(items, () => CollectiblesCategoryStore.getProduct(closure_0));
  let obj2 = require("initialize");
  const currentUser = require("useCurrentUser").useCurrentUser();
  let obj3 = require("useCurrentUser");
  const canUseShopDiscountsResult = require("PremiumUtils").canUseShopDiscounts(currentUser);
  c5 = canUseShopDiscountsResult;
  collectiblesAnalyticsContext.useRef(null);
  let sessionId;
  if (collectiblesAnalyticsContext != null) {
    sessionId = collectiblesAnalyticsContext.sessionId;
  }
  const items1 = [sessionId, , , , , , , , , ];
  let categoryPosition;
  if (collectiblesAnalyticsContext != null) {
    categoryPosition = collectiblesAnalyticsContext.categoryPosition;
  }
  items1[1] = categoryPosition;
  let pageCategory;
  if (collectiblesAnalyticsContext != null) {
    pageCategory = collectiblesAnalyticsContext.pageCategory;
  }
  items1[2] = pageCategory;
  let pageSection;
  if (collectiblesAnalyticsContext != null) {
    pageSection = collectiblesAnalyticsContext.pageSection;
  }
  items1[3] = pageSection;
  let tilePosition;
  if (collectiblesAnalyticsContext != null) {
    tilePosition = collectiblesAnalyticsContext.tilePosition;
  }
  items1[4] = tilePosition;
  items1[5] = canUseShopDiscountsResult;
  items1[6] = mobile_home;
  items1[7] = stateFromStores;
  items1[8] = categoryStoreListingId;
  items1[9] = str;
  callback = collectiblesAnalyticsContext.useCallback(() => {
    let priceForCollectiblesProduct = null;
    if (null != stateFromStores) {
      priceForCollectiblesProduct = CollectiblesUtils.getPriceForCollectiblesProduct(stateFromStores, c5, true);
    }
    let strikeThroughPriceAmountForCollectiblesProduct;
    if (null != stateFromStores) {
      strikeThroughPriceAmountForCollectiblesProduct = CollectiblesUtils.getStrikeThroughPriceAmountForCollectiblesProduct(stateFromStores, c5, true);
    }
    let sessionId;
    if (collectiblesAnalyticsContext != null) {
      sessionId = collectiblesAnalyticsContext.sessionId;
    }
    const obj4 = { collectibles_shop_session_id: sessionId, sku_id, display_price: null, display_price_currency: null, display_price_strikethrough: null, position: null, page_type: null, page_category: null, page_section: null, type: null, category_position: null };
    let amount;
    if (priceForCollectiblesProduct != null) {
      amount = priceForCollectiblesProduct.amount;
    }
    obj4.display_price = amount;
    let str1;
    if (priceForCollectiblesProduct != null) {
      str1 = str.toString();
    }
    obj4.display_price_currency = str1;
    obj4.display_price_strikethrough = strikeThroughPriceAmountForCollectiblesProduct;
    let tilePosition;
    if (collectiblesAnalyticsContext != null) {
      tilePosition = collectiblesAnalyticsContext.tilePosition;
    }
    obj4.position = tilePosition;
    obj4.page_type = page_type;
    let pageCategory;
    if (collectiblesAnalyticsContext != null) {
      pageCategory = collectiblesAnalyticsContext.pageCategory;
    }
    obj4.page_category = pageCategory;
    let pageSection;
    if (collectiblesAnalyticsContext != null) {
      pageSection = collectiblesAnalyticsContext.pageSection;
    }
    obj4.page_section = pageSection;
    obj4.type = str;
    let categoryPosition;
    if (collectiblesAnalyticsContext != null) {
      categoryPosition = collectiblesAnalyticsContext.categoryPosition;
    }
    obj4.category_position = categoryPosition;
    AnalyticsUtilsDefault.track(AnalyticEvents.COLLECTIBLES_TILE_IMPRESSION, obj4);
  }, items1);
  const items2 = [callback];
  const items3 = [categoryStoreListingId];
  const handleCardVisibilityChange = obj5.useCallback((arg0) => {
    const current = ref.current;
    if (arg0) {
      if (null === current) {
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          callback();
          ref.current = null;
        }, 1000);
      }
    } else if (null !== current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, items2);
  const effect = obj5.useEffect(() => () => {
    if (null !== ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, items3);
  return { handleCardVisibilityChange };
};
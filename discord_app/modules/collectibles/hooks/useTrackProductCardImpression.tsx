import noop from "noop";
import updateCategoriesAndProducts from "updateCategoriesAndProducts";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/collectibles/hooks/useTrackProductCardImpression.tsx");

export const useTrackProductCardImpression = function useTrackProductCardImpression(categoryStoreListingId, mobile_home, featured_block) {
  const _require = categoryStoreListingId;
  const importDefault = mobile_home;
  let str = featured_block;
  if (featured_block === undefined) {
    str = "product";
  }
  let collectiblesAnalyticsContext;
  let stateFromStores;
  let c5;
  let closure_6;
  let callback;
  collectiblesAnalyticsContext = _require(str[3]).useCollectiblesAnalyticsContext();
  let obj = _require(str[3]);
  const items = [stateFromStores];
  stateFromStores = _require(str[4]).useStateFromStores(items, () => stateFromStores.getProduct(closure_0));
  let obj2 = _require(str[4]);
  const currentUser = _require(str[5]).useCurrentUser();
  const obj3 = _require(str[5]);
  const canUseShopDiscountsResult = importDefault(str[6]).canUseShopDiscounts(currentUser);
  c5 = canUseShopDiscountsResult;
  closure_6 = collectiblesAnalyticsContext.useRef(null);
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
      let obj = categoryStoreListingId(str[7]);
      priceForCollectiblesProduct = obj.getPriceForCollectiblesProduct(tmp, _undefined, true);
    }
    let strikeThroughPriceAmountForCollectiblesProduct;
    if (null != stateFromStores) {
      strikeThroughPriceAmountForCollectiblesProduct = categoryStoreListingId(str[7]).getStrikeThroughPriceAmountForCollectiblesProduct(tmp, _undefined, true);
      const obj2 = categoryStoreListingId(str[7]);
    }
    let sessionId;
    if (collectiblesAnalyticsContext != null) {
      sessionId = tmp10.sessionId;
    }
    obj = { collectibles_shop_session_id: sessionId, sku_id: categoryStoreListingId, display_price: null, display_price_currency: null, display_price_strikethrough: null, position: null, page_type: null, page_category: null, page_section: null, type: null, category_position: null };
    let amount;
    if (priceForCollectiblesProduct != null) {
      amount = priceForCollectiblesProduct.amount;
    }
    obj[2] = amount;
    str = undefined;
    if (priceForCollectiblesProduct != null) {
      str = priceForCollectiblesProduct.currency;
      str = str.toString();
    }
    obj[3] = str;
    obj[4] = strikeThroughPriceAmountForCollectiblesProduct;
    let tilePosition;
    if (collectiblesAnalyticsContext != null) {
      tilePosition = tmp10.tilePosition;
    }
    obj[5] = tilePosition;
    obj[6] = mobile_home;
    let pageCategory;
    if (collectiblesAnalyticsContext != null) {
      pageCategory = tmp10.pageCategory;
    }
    obj[7] = pageCategory;
    let pageSection;
    if (collectiblesAnalyticsContext != null) {
      pageSection = tmp10.pageSection;
    }
    obj[8] = pageSection;
    obj[9] = str;
    let categoryPosition;
    if (collectiblesAnalyticsContext != null) {
      categoryPosition = tmp10.categoryPosition;
    }
    obj[10] = categoryPosition;
    mobile_home(str[8]).track(_undefined.COLLECTIBLES_TILE_IMPRESSION, obj);
  }, items1);
  const items2 = [callback];
  const items3 = [categoryStoreListingId];
  const handleCardVisibilityChange = obj5.useCallback((arg0) => {
    const current = ref.current;
    if (arg0) {
      if (null === current) {
        const _setTimeout = setTimeout;
        tmp.current = setTimeout(() => {
          callback();
          closure_6.current = null;
        }, 1000);
      }
    } else if (null !== current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
  }, items2);
  const effect = obj5.useEffect(() => () => {
    if (null !== ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
  }, items3);
  return { handleCardVisibilityChange };
};
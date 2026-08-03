import noop from "noop";
import { AnalyticEvents } from "ME";

const require = arg1;
let result = require("context").fileFinishedImporting("modules/collectibles/native/hooks/useTrackShopCardImpression.tsx");

export const useTrackShopCardImpression = function useTrackShopCardImpression(product, selectedProduct, flag2) {
  const _require = product;
  const importDefault = selectedProduct;
  const dependencyMap = flag2;
  const collectiblesAnalyticsContext = _require(8673).useCollectiblesAnalyticsContext();
  const analyticsLocations = importDefault(5519)().analyticsLocations;
  const size = importDefault(1474)();
  const width = size.width;
  const height = size.height;
  let obj = _require(8673);
  const currentUser = _require(8674).useCurrentUser();
  let obj2 = _require(8674);
  const canUseCollectiblesResult = importDefault(3839).canUseCollectibles(currentUser);
  let closure_7 = canUseCollectiblesResult;
  const obj3 = importDefault(3839);
  const shopDiscountSource = _require(5815).getShopDiscountSource(currentUser);
  const ref = collectiblesAnalyticsContext.useRef(null);
  let closure_10 = collectiblesAnalyticsContext.useRef(null);
  let closure_11 = collectiblesAnalyticsContext.useRef({ windowWidth: width, windowHeight: height });
  let closure_12 = collectiblesAnalyticsContext.useRef(false);
  let closure_13 = collectiblesAnalyticsContext.useRef(false);
  let closure_14 = collectiblesAnalyticsContext.useRef(false);
  let closure_15 = collectiblesAnalyticsContext.useRef(false);
  const items = [width, height];
  const effect = collectiblesAnalyticsContext.useEffect(() => {
    closure_11.current = { windowWidth: width, windowHeight: height };
  }, items);
  const items1 = [canUseCollectiblesResult, , , , , , ];
  let sessionId;
  if (collectiblesAnalyticsContext != null) {
    sessionId = collectiblesAnalyticsContext.sessionId;
  }
  items1[1] = sessionId;
  let tilePosition;
  if (collectiblesAnalyticsContext != null) {
    tilePosition = collectiblesAnalyticsContext.tilePosition;
  }
  items1[2] = tilePosition;
  let pageCategory;
  if (collectiblesAnalyticsContext != null) {
    pageCategory = collectiblesAnalyticsContext.pageCategory;
  }
  items1[3] = pageCategory;
  let pageSection;
  if (collectiblesAnalyticsContext != null) {
    pageSection = collectiblesAnalyticsContext.pageSection;
  }
  items1[4] = pageSection;
  let categoryPosition;
  if (collectiblesAnalyticsContext != null) {
    categoryPosition = collectiblesAnalyticsContext.categoryPosition;
  }
  items1[5] = categoryPosition;
  items1[6] = product;
  const callback = collectiblesAnalyticsContext.useCallback(() => {
    let priceForCollectiblesProduct = null;
    if (null != product) {
      let obj = product(5815);
      priceForCollectiblesProduct = obj.getPriceForCollectiblesProduct(tmp, closure_7, true);
    }
    let strikeThroughPriceAmountForCollectiblesProduct;
    if (null != product) {
      strikeThroughPriceAmountForCollectiblesProduct = product(5815).getStrikeThroughPriceAmountForCollectiblesProduct(tmp, closure_7, true);
      const obj2 = product(5815);
    }
    let sessionId;
    if (collectiblesAnalyticsContext != null) {
      sessionId = tmp10.sessionId;
    }
    obj = { collectibles_shop_session_id: sessionId, sku_id: tmp.skuId, display_price: null, display_price_currency: null, display_price_strikethrough: null, position: null, page_category: null, page_section: null, category_position: null, type: "product" };
    let amount;
    if (priceForCollectiblesProduct != null) {
      amount = priceForCollectiblesProduct.amount;
    }
    obj[2] = amount;
    let str;
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
    let pageCategory;
    if (collectiblesAnalyticsContext != null) {
      pageCategory = tmp10.pageCategory;
    }
    obj[6] = pageCategory;
    let pageSection;
    if (collectiblesAnalyticsContext != null) {
      pageSection = tmp10.pageSection;
    }
    obj[7] = pageSection;
    let categoryPosition;
    if (collectiblesAnalyticsContext != null) {
      categoryPosition = tmp10.categoryPosition;
    }
    obj[8] = categoryPosition;
    selectedProduct(698).track(analyticsLocations.COLLECTIBLES_TILE_IMPRESSION, obj);
  }, items1);
  const items2 = [product, selectedProduct, , , , , ];
  let cardId;
  if (collectiblesAnalyticsContext != null) {
    cardId = collectiblesAnalyticsContext.cardId;
  }
  items2[2] = cardId;
  let sessionId1;
  if (collectiblesAnalyticsContext != null) {
    sessionId1 = collectiblesAnalyticsContext.sessionId;
  }
  items2[3] = sessionId1;
  let tilePosition1;
  if (collectiblesAnalyticsContext != null) {
    tilePosition1 = collectiblesAnalyticsContext.tilePosition;
  }
  items2[4] = tilePosition1;
  items2[5] = analyticsLocations;
  items2[6] = shopDiscountSource;
  const callback1 = obj5.useCallback(() => {
    let obj = product(8436);
    obj = { name: product(503).ImpressionNames.SHOP_CARD, type: product(503).ImpressionTypes.VIEW, properties: null };
    obj = { sku_id: selectedProduct.skuId, card_id: null, shop_session_id: null, position_in_section: null, product_sku_ids: null, location_stack: null, discount_source: null };
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
    let tmpResult = tmp(5814);
    obj[4] = tmpResult.getProductSkuIds(product);
    obj[5] = analyticsLocations;
    tmpResult = tmp(5815);
    obj[6] = tmpResult.getAnalyticsShopDiscountSource(shopDiscountSource);
    obj[2] = obj;
    obj.trackImpression(obj, false, true);
  }, items2);
  const items3 = [flag2, callback, callback1];
  const effect1 = obj5.useEffect(() => {
    if (closure_2) {
      const _setInterval = setInterval;
      closure_10.current = setInterval(() => {
        if (null != ref.current) {
          const current = ref.current;
          current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
            let windowHeight;
            let windowWidth;
            ({ windowWidth, windowHeight } = ref.current);
            const bound = Math.min(arg5 + arg3, windowHeight);
            const bound1 = Math.max(0, bound - Math.max(arg5, 0));
            const bound2 = Math.min(arg4 + arg2, windowWidth);
            const result = bound1 * Math.max(0, bound2 - Math.max(arg4, 0));
            const result1 = arg2 * arg3;
            const bound3 = Math.min(arg5 + arg3, windowHeight);
            const bound4 = Math.max(0, bound3 - Math.max(arg5, 0));
            const bound5 = Math.min(arg4 + arg2, windowWidth);
            const result2 = bound4 * Math.max(0, bound5 - Math.max(arg4, 0));
            const result3 = arg2 * arg3;
            let tmp12 = result3 > 0 && result2 > 0;
            if (tmp12) {
              tmp12 = result2 / result3 >= 0.5;
            }
            if (result1 > 0 && result > 0 && result / result1 >= 0) {
              if (tmp16) {
                tmp15();
                tmp14.current = true;
              }
              tmp16 = tmp13.current && !tmp14.current;
            } else {
              tmp14.current = false;
            }
            closure_12.current = result1 > 0 && result > 0 && result / result1 >= 0;
            if (tmp12) {
              if (tmp21) {
                tmp20();
                tmp19.current = true;
              }
              tmp21 = tmp18.current && !tmp19.current;
            } else {
              tmp19.current = false;
            }
            closure_14.current = tmp12;
          });
        }
      }, 1000);
      return () => {
        if (null !== ref2.current) {
          const _clearInterval = clearInterval;
          clearInterval(tmp.current);
          tmp.current = null;
        }
        closure_12.current = false;
        closure_13.current = false;
        closure_14.current = false;
        closure_15.current = false;
      };
    }
  }, items3);
  return ref;
};
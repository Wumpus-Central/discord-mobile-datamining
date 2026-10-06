// === Module 8516: useTrackShopCardClick ===

// Module 8516 (useTrackShopCardClick)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7077 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7078 */;
import CollectiblesShopVariantsUIStore from "CollectiblesShopVariantsUIStore" /* 8517 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let product;

const useSelectedVariantIndex = CollectiblesShopVariantsUIStore.useSelectedVariantIndex;
const AnalyticEvents = Constants.AnalyticEvents;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((product) => {
  let cardId;
  let tmp6;
  let obj = require("react");
  const cResult = obj.c(10);
  product = product.product;
  require = product;
  const analyticsLocations = product.analyticsLocations;
  let obj2 = require("CollectiblesAnalyticsContext");
  let collectiblesAnalyticsContext = obj2.useCollectiblesAnalyticsContext();
  if (collectiblesAnalyticsContext == null) {
    collectiblesAnalyticsContext = {};
  }
  cardId = collectiblesAnalyticsContext.cardId;
  const sessionId = collectiblesAnalyticsContext.sessionId;
  const tilePosition = collectiblesAnalyticsContext.tilePosition;
  let tmp4 = tilePosition(product);
  let closure_5 = tmp4;
  let tmpResult = tmp(tmp2[6]);
  const currentUserIfAvailable = tmpResult.useCurrentUserIfAvailable();
  if (cResult[0] !== currentUserIfAvailable) {
    let tmpResult2 = tmp(tmp2[7]);
    const shopDiscountSource = tmpResult2.getShopDiscountSource(currentUserIfAvailable);
    cResult[0] = currentUserIfAvailable;
    cResult[1] = shopDiscountSource;
    tmp6 = shopDiscountSource;
  } else {
    tmp6 = cResult[1];
  }
  let closure_6 = tmp6;
  if (cResult[2] === analyticsLocations) {
    if (cResult[3] === cardId) {
      if (cResult[4] === tmp6) {
        if (cResult[5] === product) {
          if (cResult[6] === tmp4) {
            if (cResult[7] === sessionId) {
              let tmp8;
              if (cResult[8] === tilePosition) {
                tmp8 = cResult[9];
              }
              return tmp8;
            }
          }
        }
      }
    }
  }
  const fn = function v(cta, arg1) {
    let skuId;
    let tmpResult;
    let tmpResult2;
    const obj = CollectiblesProductUtils;
    if (obj.getIsVariantProduct(require)) {
      let tmp4 = arg1;
      const variants = require.variants;
      if (arg1 == null) {
        tmp4 = closure_5;
      }
      let skuId1;
      if (variants[tmp4] != null) {
        skuId1 = tmp6.skuId;
      }
      if (skuId1 == null) {
        skuId1 = require.skuId;
      }
      skuId = skuId1;
    } else {
      skuId = require.skuId;
    }
    const obj2 = { sku_id: skuId, cta, shop_session_id: sessionId, card_id: cardId, product_sku_ids: tmpResult.getProductSkuIds(require), location_stack: analyticsLocations, position_in_section: tilePosition, discount_source: tmpResult2.getAnalyticsShopDiscountSource(closure_6) };
    const track = AnalyticsUtilsDefault.track;
    const SHOP_CARD_CLICKED = AnalyticEvents.SHOP_CARD_CLICKED;
    AnalyticsUtilsDefault;
    tmpResult = CollectiblesProductUtils;
    tmpResult2 = CollectiblesUtils;
    track(SHOP_CARD_CLICKED, obj2);
  };
  cResult[2] = analyticsLocations;
  cResult[3] = cardId;
  cResult[4] = tmp6;
  cResult[5] = product;
  cResult[6] = tmp4;
  cResult[7] = sessionId;
  cResult[8] = tilePosition;
  cResult[9] = fn;
  tmp8 = fn;
}) : ((product) => {
  product = product.product;
  require = product;
  const analyticsLocations = product.analyticsLocations;
  let cardId;
  let sessionId;
  let tilePosition;
  let closure_5;
  let shopDiscountSource;
  let obj = require("CollectiblesAnalyticsContext");
  let collectiblesAnalyticsContext = obj.useCollectiblesAnalyticsContext();
  if (collectiblesAnalyticsContext == null) {
    collectiblesAnalyticsContext = {};
  }
  cardId = collectiblesAnalyticsContext.cardId;
  sessionId = collectiblesAnalyticsContext.sessionId;
  tilePosition = collectiblesAnalyticsContext.tilePosition;
  const tmp3 = tilePosition(product);
  closure_5 = tmp3;
  let tmpResult = tmp(tmp2[6]);
  const currentUserIfAvailable = tmpResult.useCurrentUserIfAvailable();
  let tmpResult2 = tmp(tmp2[7]);
  shopDiscountSource = tmpResult2.getShopDiscountSource(currentUserIfAvailable);
  const items = [product, tmp3, sessionId, cardId, analyticsLocations, tilePosition, shopDiscountSource];
  return sessionId.useCallback((cta, arg1) => {
    let skuId;
    let tmpResult;
    let tmpResult2;
    const obj = CollectiblesProductUtils;
    if (obj.getIsVariantProduct(require)) {
      let tmp4 = arg1;
      const variants = require.variants;
      if (arg1 == null) {
        tmp4 = closure_5;
      }
      let skuId1;
      if (variants[tmp4] != null) {
        skuId1 = tmp6.skuId;
      }
      if (skuId1 == null) {
        skuId1 = require.skuId;
      }
      skuId = skuId1;
    } else {
      skuId = require.skuId;
    }
    const obj2 = { sku_id: skuId, cta, shop_session_id: sessionId, card_id: cardId, product_sku_ids: tmpResult.getProductSkuIds(require), location_stack: analyticsLocations, position_in_section: tilePosition, discount_source: tmpResult2.getAnalyticsShopDiscountSource(shopDiscountSource) };
    const track = AnalyticsUtilsDefault.track;
    const SHOP_CARD_CLICKED = AnalyticEvents.SHOP_CARD_CLICKED;
    AnalyticsUtilsDefault;
    tmpResult = CollectiblesProductUtils;
    tmpResult2 = CollectiblesUtils;
    track(SHOP_CARD_CLICKED, obj2);
  }, items);
});
const result = size.fileFinishedImporting("modules/collectibles/hooks/useTrackShopCardClick.tsx");

export const useTrackShopCardClick = tmp2;
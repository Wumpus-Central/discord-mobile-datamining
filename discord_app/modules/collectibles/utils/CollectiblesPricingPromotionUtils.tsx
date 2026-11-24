// === Module 11105: CollectiblesPricingPromotionUtils ===

// Module 11105 (CollectiblesPricingPromotionUtils)
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 6196 */;
import CollectiblesPromoPriceUtils from "CollectiblesPromoPriceUtils" /* 11106 */;
import CollectiblesSequencedOfferPromotionUtils from "CollectiblesSequencedOfferPromotionUtils" /* 11108 */;
import SKUPricesStore from "SKUPricesStore" /* 7468 */;
import StorefrontPromotionStore from "StorefrontPromotionStore" /* 10981 */;
import UserStore from "UserStore" /* 1386 */;

require = fn;
let closure_6 = fn(1071).COLLECTIBLES_APPLICATION_ID;
let c7 = "collectibles_pricing_promotion_eligibility";
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesPricingPromotionUtils.tsx");

export function getPricingPromotionForCollectiblesProduct(arg0) {
  ({ product: require, hasShopDiscount: importDefault, storefrontPrices: dependencyMap, pricingPromotionIds } = arg0);
  ({ promotions, now } = arg0);
  if (now === undefined) {
    const _Date = Date;
    now = Date.now();
  }
  let tmp2 = null;
  if (null != pricingPromotionIds) {
    tmp2 = null;
    if (0 !== pricingPromotionIds.length) {
      tmp2 = null;
      if (null != promotions) {
        let found = promotions.find((id) => {
          let hasItem = SKUPricesStore.includes(id.id);
          if (hasItem) {
            hasItem = CollectiblesPromoPriceUtils.isStorefrontPromotionActive(id, promotionsForApplication);
          }
          if (hasItem) {
            const obj3 = { product: collectiblesStorefrontPricingIntegrationEnabled, hasShopDiscount: skuId };
            const productFiatPrice = CollectiblesProductUtils.getProductFiatPrice(obj3);
            const obj5 = { storefrontPrices, nonPromoPrice: productFiatPrice };
            let tmp14 = null != CollectiblesPromoPriceUtils.getCollectiblesPromoPrice(obj5);
            let isOrbsBackPromotionResult = CollectiblesSequencedOfferPromotionUtils.isOrbsBackPromotion(id);
            if (isOrbsBackPromotionResult) {
              isOrbsBackPromotionResult = CollectiblesSequencedOfferPromotionUtils.isSequencedOfferRewardAvailable(id);
            }
            if (!tmp14) {
              tmp14 = isOrbsBackPromotionResult;
            }
            hasItem = tmp14;
          }
          return hasItem;
        });
        if (found == null) {
          found = null;
        }
        tmp2 = found;
      }
    }
  }
  return tmp2;
}
export function useCollectiblesPricingPromotionForProduct(skuId) {
  collectiblesStorefrontPricingIntegrationEnabled = collectiblesStorefrontPricingIntegrationEnabled(11107).useCollectiblesStorefrontPricingIntegrationEnabled(c7);
  skuId = undefined;
  if (skuId != null) {
    skuId = skuId.skuId;
  }
  let obj = collectiblesStorefrontPricingIntegrationEnabled(11107);
  const collectiblesStorefrontPrices = collectiblesStorefrontPricingIntegrationEnabled(11106).useCollectiblesStorefrontPrices(skuId, c7);
  const tmpResult = collectiblesStorefrontPricingIntegrationEnabled(11106);
  items = [SKUPricesStore];
  const stateFromStores = collectiblesStorefrontPricingIntegrationEnabled(504).useStateFromStores(items, () => {
    let promotionIdsForSkuId;
    if (collectiblesStorefrontPricingIntegrationEnabled) {
      promotionIdsForSkuId = SKUPricesStore.getPromotionIdsForSkuId(skuId);
    }
    return promotionIdsForSkuId;
  });
  const tmpResult4 = collectiblesStorefrontPricingIntegrationEnabled(504);
  const items1 = [StorefrontPromotionStore];
  const stateFromStores1 = collectiblesStorefrontPricingIntegrationEnabled(504).useStateFromStores(items1, () => promotionsForApplication.getPromotionsForApplication(closure_1_6));
  collectiblesStorefrontPricingIntegrationEnabled(504);
  [][0] = UserStore;
  let tmp11 = null;
  if (collectiblesStorefrontPricingIntegrationEnabled) {
    tmp11 = null;
    if (null != skuId) {
      let obj2 = { product: skuId, hasShopDiscount: tmp10, storefrontPrices: collectiblesStorefrontPrices, pricingPromotionIds: stateFromStores, promotions: stateFromStores1 };
      ({ product: closure_129_0, hasShopDiscount: closure_129_1, storefrontPrices: closure_129_2, pricingPromotionIds } = obj2);
      closure_129_3 = pricingPromotionIds;
      ({ promotions, now } = obj2);
      if (now === undefined) {
        const _Date = Date;
        now = Date.now();
      }
      closure_129_4 = now;
      let tmp13 = null;
      if (null != pricingPromotionIds) {
        tmp13 = null;
        if (0 !== pricingPromotionIds.length) {
          tmp13 = null;
          if (null != promotions) {
            let found = promotions.find((id) => {
              let hasItem = SKUPricesStore.includes(id.id);
              if (hasItem) {
                hasItem = CollectiblesPromoPriceUtils.isStorefrontPromotionActive(id, promotionsForApplication);
              }
              if (hasItem) {
                const obj3 = { product: collectiblesStorefrontPricingIntegrationEnabled, hasShopDiscount: skuId };
                const productFiatPrice = CollectiblesProductUtils.getProductFiatPrice(obj3);
                const obj5 = { storefrontPrices, nonPromoPrice: productFiatPrice };
                let tmp14 = null != CollectiblesPromoPriceUtils.getCollectiblesPromoPrice(obj5);
                let isOrbsBackPromotionResult = CollectiblesSequencedOfferPromotionUtils.isOrbsBackPromotion(id);
                if (isOrbsBackPromotionResult) {
                  isOrbsBackPromotionResult = CollectiblesSequencedOfferPromotionUtils.isSequencedOfferRewardAvailable(id);
                }
                if (!tmp14) {
                  tmp14 = isOrbsBackPromotionResult;
                }
                hasItem = tmp14;
              }
              return hasItem;
            });
            if (found == null) {
              found = null;
            }
            tmp13 = found;
          }
        }
      }
      tmp11 = tmp13;
    }
  }
  return tmp11;
}
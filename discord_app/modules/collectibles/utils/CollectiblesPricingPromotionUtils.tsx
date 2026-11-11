// discord_app/modules/collectibles/utils/CollectiblesPricingPromotionUtils.tsx
import CollectiblesPromoPriceUtils from "CollectiblesPromoPriceUtils.tsx";
import SKUPricesStore from "../../storefront/SKUPricesStore.tsx";
import StorefrontPromotionStore from "../../storefront/StorefrontPromotionStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function getPricingPromotionForCollectiblesProduct(pricingPromotionIds) {
  pricingPromotionIds = pricingPromotionIds.pricingPromotionIds;
  ({ promotions, now } = pricingPromotionIds);
  ({ product, hasShopDiscount, storefrontPrices } = pricingPromotionIds);
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
        const obj2 = { product, hasShopDiscount };
        const productFiatPrice = pricingPromotionIds(8430).getProductFiatPrice(obj2);
        let obj = pricingPromotionIds(8430);
        const obj4 = { storefrontPrices, nonPromoPrice: productFiatPrice };
        let tmp6 = null;
        if (null != obj3.getCollectiblesPromoPrice(obj4)) {
          let found = promotions.find((id) => {
            let hasItem = pricingPromotionIds.includes(id.id);
            if (hasItem) {
              hasItem = CollectiblesPromoPriceUtils.isStorefrontPromotionActive(id, now);
            }
            return hasItem;
          });
          if (found == null) {
            found = null;
          }
          tmp6 = found;
        }
        tmp2 = tmp6;
        obj3 = pricingPromotionIds(9380);
      }
    }
  }
  return tmp2;
}
let closure_6 = fn(1072).COLLECTIBLES_APPLICATION_ID;
let c7 = "collectibles_pricing_promotion_eligibility";
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesPricingPromotionUtils.tsx");

export { getPricingPromotionForCollectiblesProduct };
export function useCollectiblesPricingPromotionForProduct(skuId) {
  collectiblesStorefrontPricingIntegrationEnabled =
    collectiblesStorefrontPricingIntegrationEnabled(9381).useCollectiblesStorefrontPricingIntegrationEnabled(c7);
  skuId = undefined;
  if (skuId != null) {
    skuId = skuId.skuId;
  }
  const obj = collectiblesStorefrontPricingIntegrationEnabled(9381);
  const collectiblesStorefrontPrices = collectiblesStorefrontPricingIntegrationEnabled(
    9380,
  ).useCollectiblesStorefrontPrices(skuId, c7);
  const tmpResult = collectiblesStorefrontPricingIntegrationEnabled(9380);
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
  const stateFromStores1 = collectiblesStorefrontPricingIntegrationEnabled(504).useStateFromStores(items1, () =>
    promotionsForApplication.getPromotionsForApplication(closure_1_6),
  );
  collectiblesStorefrontPricingIntegrationEnabled(504);
  [][0] = UserStore;
  let tmp11 = null;
  if (collectiblesStorefrontPricingIntegrationEnabled) {
    tmp11 = null;
    if (null != skuId) {
      const obj2 = {
        product: skuId,
        hasShopDiscount: tmp10,
        storefrontPrices: collectiblesStorefrontPrices,
        pricingPromotionIds: stateFromStores,
        promotions: stateFromStores1,
      };
      tmp11 = getPricingPromotionForCollectiblesProduct(obj2);
    }
  }
  return tmp11;
}

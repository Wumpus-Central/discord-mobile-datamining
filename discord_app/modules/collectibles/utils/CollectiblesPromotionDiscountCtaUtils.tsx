// === Module 11476: CollectiblesPromotionDiscountCtaUtils ===

// Module 11476 (CollectiblesPromotionDiscountCtaUtils)
import util from "util" /* 1112 */;
import CollectiblesTargetedOfferPromotionUtils from "CollectiblesTargetedOfferPromotionUtils" /* 11104 */;
import CollectiblesStorefrontPricingIntegrationExperiment from "CollectiblesStorefrontPricingIntegrationExperiment" /* 11107 */;
import CollectiblesPromotionDiscountUtils from "CollectiblesPromotionDiscountUtils" /* 11109 */;
import useCollectiblesPromotionForProduct from "useCollectiblesPromotionForProduct" /* 11132 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesPromotionDiscountCtaUtils.tsx");

export function useDiscountPromotionPurchaseCtaText(product) {
  let v302tKP = dependencyMap;
  const collectiblesPromotionForProduct = useCollectiblesPromotionForProduct.useCollectiblesPromotionForProduct(product);
  let discount;
  const collectiblesStorefrontPricingIntegrationEnabled = CollectiblesStorefrontPricingIntegrationExperiment.useCollectiblesStorefrontPricingIntegrationEnabled("collectibles_discount_promotion_purchase_cta");
  if (collectiblesPromotionForProduct != null) {
    const rewardConfig = collectiblesPromotionForProduct.rewardConfig;
    if (rewardConfig != null) {
      discount = rewardConfig.discount;
    }
  }
  let tmp6 = null;
  if (null != discount) {
    if (collectiblesStorefrontPricingIntegrationEnabled) {
      CollectiblesTargetedOfferPromotionUtils;
      tmp6 = null;
    }
    if (100 === tmpResult2.getPromotionFiatPercentOff(collectiblesPromotionForProduct)) {
      const intl2 = util.intl;
      v302tKP = util.t["302tKP"];
      let stringResult = intl2.string(v302tKP);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t["7EGhnE"]);
    }
    tmpResult2 = CollectiblesPromotionDiscountUtils;
  }
  return tmp6;
}
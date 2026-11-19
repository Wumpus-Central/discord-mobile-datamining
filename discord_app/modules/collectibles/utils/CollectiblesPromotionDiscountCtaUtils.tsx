// === Module 14156: CollectiblesPromotionDiscountCtaUtils ===

// Module 14156 (CollectiblesPromotionDiscountCtaUtils)
import util from "util" /* 1113 */;
import useCollectiblesPromotionForProduct from "useCollectiblesPromotionForProduct" /* 8840 */;
import CollectiblesStorefrontPricingIntegrationExperiment from "CollectiblesStorefrontPricingIntegrationExperiment" /* 8844 */;
import CollectiblesPromotionDiscountUtils from "CollectiblesPromotionDiscountUtils" /* 8846 */;
import CollectiblesTargetedOfferPromotionUtils from "CollectiblesTargetedOfferPromotionUtils" /* 8850 */;
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
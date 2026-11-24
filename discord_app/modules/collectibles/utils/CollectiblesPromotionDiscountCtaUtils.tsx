// discord_app/modules/collectibles/utils/CollectiblesPromotionDiscountCtaUtils.tsx
import util from "../../../intl/index.native.tsx";
import CollectiblesTargetedOfferPromotionUtils from "CollectiblesTargetedOfferPromotionUtils.tsx";
import CollectiblesStorefrontPricingIntegrationExperiment from "../experiments/CollectiblesStorefrontPricingIntegrationExperiment.tsx";
import CollectiblesPromotionDiscountUtils from "CollectiblesPromotionDiscountUtils.tsx";
import useCollectiblesPromotionForProduct from "../hooks/useCollectiblesPromotionForProduct.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesPromotionDiscountCtaUtils.tsx");

export function useDiscountPromotionPurchaseCtaText(product) {
  let v302tKP = dependencyMap;
  const collectiblesPromotionForProduct =
    useCollectiblesPromotionForProduct.useCollectiblesPromotionForProduct(product);
  let discount;
  const collectiblesStorefrontPricingIntegrationEnabled =
    CollectiblesStorefrontPricingIntegrationExperiment.useCollectiblesStorefrontPricingIntegrationEnabled(
      "collectibles_discount_promotion_purchase_cta",
    );
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

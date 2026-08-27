// === Module 8170: useDiscountedPremiumProductInfo ===

// Module 8170 (useDiscountedPremiumProductInfo)
import closure_2 from "noop" /* 19 */;
import { CurrencyCodes } from "sum" /* 505 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/premium/native/hooks/useDiscountedPremiumProductInfo.android.tsx");

export const useDiscountedPremiumProductInfo = function useDiscountedPremiumProductInfo(premiumDiscountOffer, items3) {
  const _require = premiumDiscountOffer;
  let obj = _require(discountedProduct[2]);
  discountedProduct = obj.useDiscountedPremiumPlan(premiumDiscountOffer, items3).discountedProduct;
  const items = [premiumDiscountOffer, discountedProduct];
  obj = {
    discountedProduct,
    discountedPriceString: React.useMemo(() => {
      if (null != premiumDiscountOffer) {
        if (null != discountedProduct) {
          const tmp8 = premiumDiscountOffer(discountedProduct[3]).DiscountIdToProductOfferId[tmp.discountId];
          let tmp2;
          if (tmp8 != null) {
            tmp2 = tmp8[tmp5.identifier];
          }
          premiumDiscountOffer = tmp2;
          if (null == tmp2) {
            return null;
          } else {
            if (str2.toUpperCase() in closure_1_3) {
              let USD = tmp5.currencyCode.toLowerCase();
              const str = tmp5.currencyCode;
            } else {
              USD = tmp9.USD;
            }
            if (null != tmp5.subscriptionOffers) {
              const subscriptionOffers = tmp5.subscriptionOffers;
              const found = subscriptionOffers.find((offerId) => offerId.offerId === closure_0);
              if (null != found) {
                if (null != found.pricingPhases) {
                  if (found.pricingPhases.length > 0) {
                    const result = found.pricingPhases[0].price / 100;
                    return tmp6(tmp7[4]).formatPrice(result, USD, { convertToMajorUnits: false });
                  }
                }
              }
            }
            return null;
          }
          tmp6 = premiumDiscountOffer;
          tmp7 = discountedProduct;
        }
      }
      return null;
    }, items)
  };
  return obj;
};
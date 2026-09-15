// === Module 9511: useDiscountedPremiumProductInfo ===

// Module 9511 (useDiscountedPremiumProductInfo)
import PriceUtils from "PriceUtils" /* 7341 */;
import ProductIds from "ProductIds" /* 7347 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const CurrencyCodes = fn(1085).CurrencyCodes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/hooks/useDiscountedPremiumProductInfo.android.tsx");

export const useDiscountedPremiumProductInfo = function useDiscountedPremiumProductInfo(premiumDiscountOffer, items3) {
  _require = premiumDiscountOffer;
  const discountedPremiumPlan = require("useDiscountedPremiumPlan").useDiscountedPremiumPlan(premiumDiscountOffer, items3);
  discountedProduct = discountedPremiumPlan.discountedProduct;
  const items = [premiumDiscountOffer, discountedProduct];
  const obj = require("useDiscountedPremiumPlan");
  return {
    discountedPlan: discountedPremiumPlan.discountedPlan,
    discountedProduct,
    discountedPriceString: noop.useMemo(() => {
      if (null != closure_0) {
        if (null != discountedProduct) {
          const tmp8 = ProductIds.DiscountIdToProductOfferId[tmp.discountId];
          let tmp2;
          if (tmp8 != null) {
            tmp2 = tmp8[discountedProduct.identifier];
          }
          closure_0 = tmp2;
          if (null == tmp2) {
            return null;
          } else {
            if (str2.toUpperCase() in CurrencyCodes) {
              let USD = discountedProduct.currencyCode.toLowerCase();
            } else {
              USD = tmp9.USD;
            }
            if (null != discountedProduct.subscriptionOffers) {
              const subscriptionOffers = discountedProduct.subscriptionOffers;
              const found = subscriptionOffers.find((offerId) => offerId.offerId === closure_0);
              if (null != found) {
                if (null != found.pricingPhases) {
                  if (found.pricingPhases.length > 0) {
                    const result = found.pricingPhases[0].price / 100;
                    return PriceUtils.formatPrice(result, USD, { convertToMajorUnits: false });
                  }
                }
              }
            }
            return null;
          }
        }
      }
      return null;
    }, items)
  };
};
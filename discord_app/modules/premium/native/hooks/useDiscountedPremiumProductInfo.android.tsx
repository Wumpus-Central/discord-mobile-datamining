// === Module 9379: useDiscountedPremiumProductInfo ===

// Module 9379 (useDiscountedPremiumProductInfo)
import ProductIds from "ProductIds" /* 7240 */;
import noop from "module_19" /* 19 */;

require = fn;
const CurrencyCodes = fn(1085).CurrencyCodes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/hooks/useDiscountedPremiumProductInfo.android.tsx");

export const useDiscountedPremiumProductInfo = function useDiscountedPremiumProductInfo(premiumDiscountOffer, items3) {
  _require = premiumDiscountOffer;
  let obj = require("useDiscountedPremiumPlan");
  const discountedPremiumPlan = obj.useDiscountedPremiumPlan(premiumDiscountOffer, items3);
  discountedProduct = discountedPremiumPlan.discountedProduct;
  const items = [premiumDiscountOffer, discountedProduct];
  obj = {
    discountedPlan: discountedPremiumPlan.discountedPlan,
    discountedProduct,
    discountedPriceString: noop.useMemo(() => {
      if (null != closure_0) {
        if (null != discountedProduct) {
          const tmp8 = ProductIds.DiscountIdToProductOfferId[tmp.discountId];
          let tmp2;
          if (tmp8 != null) {
            tmp2 = tmp8[tmp5.identifier];
          }
          closure_0 = tmp2;
          if (null == tmp2) {
            return null;
          } else {
            if (str2.toUpperCase() in CurrencyCodes) {
              let USD = tmp5.currencyCode.toLowerCase();
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
                    return tmp6(7234).formatPrice(result, USD, { convertToMajorUnits: false });
                  }
                }
              }
            }
            return null;
          }
          tmp6 = require;
        }
      }
      return null;
    }, items)
  };
  return obj;
};
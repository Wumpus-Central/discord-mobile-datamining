// discord_app/modules/premium/native/hooks/useDiscountedPremiumProductInfo.tsx
import noop from "noop";
import updateProduct from "updateProduct";
import { CurrencyCodes } from "sum";

const require = arg1;
let result = require("sum").fileFinishedImporting("modules/premium/native/hooks/useDiscountedPremiumProductInfo.tsx");

export const useDiscountedPremiumProductInfo = function useDiscountedPremiumProductInfo(premiumDiscountOffer, items3) {
  const _require = premiumDiscountOffer;
  const dependencyMap = items3;
  const items = [premiumDiscountOffer, items3];
  memo = memo.useMemo(() => {
    if (null == planIds) {
      return null;
    } else {
      const discount = tmp.discount;
      planIds = undefined;
      if (discount != null) {
        planIds = discount.planIds;
      }
      if (planIds == null) {
        planIds = [];
      }
      return items3.find((basePlanId) => planIds.includes(basePlanId.basePlanId));
    }
  }, items);
  let obj = _require("../../../../../discord_common/js/packages/flux/index.tsx");
  const items1 = [stateFromStores];
  const items2 = [memo];
  stateFromStores = obj.useStateFromStores(items1, () => {
    let product = null;
    if (null != memo) {
      product = stateFromStores.getProduct(tmp.productId);
    }
    return product;
  }, items2);
  items3 = [premiumDiscountOffer, stateFromStores];
  obj = {
    discountedProduct: stateFromStores,
    discountedPriceString: memo.useMemo(() => {
      if (null != premiumDiscountOffer) {
        if (null != stateFromStores) {
          const tmp8 = premiumDiscountOffer(items3[4]).DiscountIdToProductOfferId[tmp.discountId];
          let tmp2;
          if (tmp8 != null) {
            tmp2 = tmp8[tmp5.identifier];
          }
          premiumDiscountOffer = tmp2;
          if (null == tmp2) {
            return null;
          } else {
            if (str2.toUpperCase() in outer1_4) {
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
                    return tmp6(tmp7[5]).formatPrice(result, USD, { convertToMajorUnits: false });
                  }
                }
              }
            }
            return null;
          }
          tmp6 = premiumDiscountOffer;
          tmp7 = items3;
        }
      }
      return null;
    }, items3)
  };
  return obj;
};
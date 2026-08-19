// discord_app/modules/premium/native/hooks/useDiscountedPremiumProductInfo.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import updateProduct from "../../../../stores/native/IAPStore.android.tsx";
import { CurrencyCodes } from "../../../../../discord_common/js/shared/Constants.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/premium/native/hooks/useDiscountedPremiumProductInfo.tsx");

export const useDiscountedPremiumProductInfo = function useDiscountedPremiumProductInfo(premiumDiscountOffer, items3) {
  const _require = premiumDiscountOffer;
  dependencyMap = items3;
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
      return items3.find((item, index) => planIds.includes(item.basePlanId));
    }
  }, items);
  let obj = initialize;
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
            tmp2 = tmp8[stateFromStores.identifier];
          }
          premiumDiscountOffer = tmp2;
          if (null == tmp2) {
            return null;
          } else {
            if (str2.toUpperCase() in CurrencyCodes) {
              let USD = stateFromStores.currencyCode.toLowerCase();
            } else {
              USD = tmp9.USD;
            }
            if (null != stateFromStores.subscriptionOffers) {
              const subscriptionOffers = stateFromStores.subscriptionOffers;
              const found = subscriptionOffers.find((item, index) => item.offerId === closure_0);
              if (null != found) {
                if (null != found.pricingPhases) {
                  if (found.pricingPhases.length > 0) {
                    const result = found.pricingPhases[0].price / 100;
                    return tmp6(items3[5]).formatPrice(result, USD, { convertToMajorUnits: false });
                  }
                }
              }
            }
            return null;
          }
          tmp6 = premiumDiscountOffer;
        }
      }
      return null;
    }, items3)
  };
  return obj;
};
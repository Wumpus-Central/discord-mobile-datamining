// discord_app/modules/premium/native/hooks/useDiscountedPremiumProductInfo.android.tsx
import c from "../../../../../_runtime/00576_c.js";
import PriceUtils from "../../../../utils/PriceUtils.tsx";
import ProductIds from "../ProductIds.android.tsx";
import useDiscountedPremiumPlan from "useDiscountedPremiumPlan.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const CurrencyCodes = fn(1096).CurrencyCodes;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/hooks/useDiscountedPremiumProductInfo.android.tsx");

export const useDiscountedPremiumProductInfo = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDiscountedPremiumProductInfo(arg0, arg1) {
      const cResult = c.c(12);
      const discountedPremiumPlan = useDiscountedPremiumPlan.useDiscountedPremiumPlan(arg0, arg1);
      ({ discountedPlan, discountedProduct } = discountedPremiumPlan);
      if (cResult[0] === arg0) {
        if (cResult[1] === discountedProduct) {
          let tmp5 = cResult[2];
        }
        if (cResult[8] === discountedPlan) {
          if (cResult[9] === tmp5) {
            if (cResult[10] === discountedProduct) {
              let tmp15 = cResult[11];
            }
            return tmp15;
          }
        }
        const obj3 = { discountedPlan, discountedProduct, discountedPriceString: tmp5 };
        cResult[8] = discountedPlan;
        cResult[9] = tmp5;
        cResult[10] = discountedProduct;
        cResult[11] = obj3;
        tmp15 = obj3;
      }
      let formatPriceResult = null;
      if (null != arg0) {
        formatPriceResult = null;
        if (null != discountedProduct) {
          const tmp7 = ProductIds.DiscountIdToProductOfferId[arg0.discountId];
          let subscriptionOffers1;
          if (tmp7 != null) {
            subscriptionOffers1 = tmp7[discountedProduct.identifier];
          }
          formatPriceResult = null;
          if (null != subscriptionOffers1) {
            if (str.toUpperCase() in CurrencyCodes) {
              let USD = discountedProduct.currencyCode.toLowerCase();
            } else {
              USD = tmp9.USD;
            }
            formatPriceResult = null;
            if (null != discountedProduct.subscriptionOffers) {
              if (cResult[3] === subscriptionOffers1) {
                if (cResult[4] === discountedProduct.subscriptionOffers) {
                  formatPriceResult = null;
                  if (null != cResult[5]) {
                    formatPriceResult = null;
                    if (null != tmp10.pricingPhases) {
                      formatPriceResult = null;
                      if (tmp10.pricingPhases.length > 0) {
                        const result = tmp10.pricingPhases[0].price / 100;
                        formatPriceResult = PriceUtils.formatPrice(result, USD, { convertToMajorUnits: false });
                        const tmpResult = PriceUtils;
                      }
                    }
                  }
                }
              }
              if (cResult[6] !== subscriptionOffers1) {
                class C {
                  constructor(arg0) {
                    return arg0.offerId === closure_0;
                  }
                }
                cResult[6] = subscriptionOffers1;
                cResult[7] = C;
              } else {
                class C {
                  constructor(arg0) {
                    return arg0.offerId === closure_0;
                  }
                }
              }
              const subscriptionOffers = discountedProduct.subscriptionOffers;
              const found = subscriptionOffers.find(C);
              cResult[3] = subscriptionOffers1;
              subscriptionOffers1 = discountedProduct.subscriptionOffers;
              cResult[4] = subscriptionOffers1;
              cResult[5] = found;
            }
            str = discountedProduct.currencyCode;
          }
        }
      }
      cResult[0] = arg0;
      cResult[1] = discountedProduct;
      cResult[2] = formatPriceResult;
      tmp5 = formatPriceResult;
    }
  : function useDiscountedPremiumProductInfo(arg0, arg1) {
      _require = arg0;
      const discountedPremiumPlan = require("useDiscountedPremiumPlan").useDiscountedPremiumPlan(arg0, arg1);
      discountedProduct = discountedPremiumPlan.discountedProduct;
      const items = [arg0, discountedProduct];
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
        }, items),
      };
    };

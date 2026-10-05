// discord_app/modules/premium/native/hooks/useDiscountedPremiumProductInfo.android.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../../discord_common/js/shared/Constants.tsx";
import PriceUtils from "../../../../utils/PriceUtils.tsx";
import ProductIds from "../ProductIds.android.tsx";
import useDiscountedPremiumPlan from "useDiscountedPremiumPlan.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const CurrencyCodes = Constants.CurrencyCodes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let discountedPlan;
      let discountedProduct;
      const obj = react2;
      const cResult = obj.c(12);
      const obj2 = useDiscountedPremiumPlan;
      const discountedPremiumPlan = obj2.useDiscountedPremiumPlan(arg0, arg1);
      ({ discountedPlan, discountedProduct } = discountedPremiumPlan);
      if (cResult[0] === arg0) {
        let tmp5;
        if (cResult[1] === discountedProduct) {
          tmp5 = cResult[2];
        }
        if (cResult[8] === discountedPlan) {
          if (cResult[9] === tmp5) {
            let tmp14;
            if (cResult[10] === discountedProduct) {
              tmp14 = cResult[11];
            }
            return tmp14;
          }
        }
        const obj3 = { discountedPlan, discountedProduct, discountedPriceString: tmp5 };
        cResult[8] = discountedPlan;
        cResult[9] = tmp5;
        cResult[10] = discountedProduct;
        cResult[11] = obj3;
        tmp14 = obj3;
      }
      let formatPriceResult = null;
      if (null != arg0) {
        formatPriceResult = null;
        if (null != discountedProduct) {
          const tmp7 = ProductIds.DiscountIdToProductOfferId[arg0.discountId];
          let tmp8;
          if (tmp7 != null) {
            tmp8 = tmp7[discountedProduct.identifier];
          }
          let closure_0 = tmp8;
          formatPriceResult = null;
          if (null != tmp8) {
            let USD;
            const str = discountedProduct.currencyCode;
            if (str.toUpperCase() in CurrencyCodes) {
              const str2 = discountedProduct.currencyCode;
              USD = str2.toLowerCase();
            } else {
              USD = tmp9.USD;
            }
            formatPriceResult = null;
            if (null != discountedProduct.subscriptionOffers) {
              if (cResult[3] === tmp8) {
                let tmp10;
                if (cResult[4] === discountedProduct.subscriptionOffers) {
                  tmp10 = cResult[5];
                }
                formatPriceResult = null;
                if (null != tmp10) {
                  formatPriceResult = null;
                  if (null != tmp10.pricingPhases) {
                    formatPriceResult = null;
                    if (tmp10.pricingPhases.length > 0) {
                      const result = tmp10.pricingPhases[0].price / 100;
                      const tmpResult = PriceUtils;
                      formatPriceResult = tmpResult.formatPrice(result, USD, { convertToMajorUnits: false });
                    }
                  }
                }
              }
              if (cResult[6] !== tmp8) {
                class I {
                  constructor(arg0) {
                    return arg0.offerId === closure_0;
                  }
                }
                cResult[6] = tmp8;
                cResult[7] = I;
              } else {
                class I {
                  constructor(arg0) {
                    return arg0.offerId === closure_0;
                  }
                }
              }
              const subscriptionOffers = discountedProduct.subscriptionOffers;
              const found = subscriptionOffers.find(I);
              cResult[3] = tmp8;
              cResult[4] = discountedProduct.subscriptionOffers;
              cResult[5] = found;
              tmp10 = found;
            }
          }
        }
      }
      cResult[0] = arg0;
      cResult[1] = discountedProduct;
      cResult[2] = formatPriceResult;
      tmp5 = formatPriceResult;
    }
  : (arg0, arg1) => {
      let discountedProduct;
      _require = arg0;
      const obj = require("useDiscountedPremiumPlan");
      const discountedPremiumPlan = obj.useDiscountedPremiumPlan(arg0, arg1);
      discountedProduct = discountedPremiumPlan.discountedProduct;
      const items = [arg0, discountedProduct];
      const obj2 = {
        discountedPlan: discountedPremiumPlan.discountedPlan,
        discountedProduct,
        discountedPriceString: react.useMemo(() => {
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
                let USD;
                const str2 = discountedProduct.currencyCode;
                if (str2.toUpperCase() in CurrencyCodes) {
                  const str = discountedProduct.currencyCode;
                  USD = str.toLowerCase();
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
                        const tmp6Result = PriceUtils;
                        return tmp6Result.formatPrice(result, USD, { convertToMajorUnits: false });
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
      return obj2;
    };
let result = size.fileFinishedImporting("modules/premium/native/hooks/useDiscountedPremiumProductInfo.android.tsx");

export const useDiscountedPremiumProductInfo = tmp2;

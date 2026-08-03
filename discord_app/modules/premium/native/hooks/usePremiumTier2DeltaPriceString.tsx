// === Module 12600: getViewerProductId ===

// Module 12600 (getViewerProductId)
import noop from "noop";
import { useNativeCheckoutStore } from "context";
import updateProduct from "updateProduct";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
function getViewerProductId(subscription) {
  if (null == subscription) {
    return null;
  } else {
    try {
      return require(6253) /* getPremiumBundledItemsFromProductId */.getProductIdFromSubscription(subscription, false);
    } catch (err) {
      return tmp;
    }
  }
}
let closure_6 = { priceString: null, failure: null };
let result = require("updateProduct").fileFinishedImporting("modules/premium/native/hooks/usePremiumTier2DeltaPriceString.tsx");

export const usePremiumTier2DeltaPriceString = function usePremiumTier2DeltaPriceString(plan, subscription, first, flag3) {
  const tmp = productId((orderRequired) => ({ orderRequired: orderRequired.orderRequired, checkoutContext: orderRequired.getCheckoutContextRecord() }));
  const checkoutContext = tmp.checkoutContext;
  let kind = getViewerProductId(subscription);
  let obj = kind(platform[9]);
  const items = [updateProduct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let product = null;
    if (null != kind) {
      product = outer1_4.getProduct(tmp);
    }
    return product;
  });
  let obj1 = kind(platform[6]);
  let flag = false;
  if (flag3) {
    flag = false;
    if (plan.premiumTier === PremiumTypes.TIER_2) {
      flag = false;
      if (plan.numPremiumGuild >= 1) {
        const tmp2Result = getViewerProductId(subscription);
        let tmp10 = null;
        if (null != tmp2Result) {
          tmp10 = tmp3(tmp4[5]).AppStorePremiumProductIdsToPremiumBundledItems[tmp2Result];
        }
        flag = null != tmp10 && tmp10.basePlanId === plan.basePlanId && 0 === tmp10.numPremiumGuild;
        const tmp11 = null != tmp10 && tmp10.basePlanId === plan.basePlanId && 0 === tmp10.numPremiumGuild;
      }
    }
  }
  if (flag) {
    if (!tmp6) {
      if (null != first) {
        if (null != stateFromStores) {
          let tmp3Result = tmp3(tmp4[6]);
          const platformName = tmp3Result.getPlatformName();
          if (first.currencyCode !== stateFromStores.currencyCode) {
            obj = { priceString: null, failure: null };
            obj = { kind: "currency_mismatch", platform: null, productId: null, currencyCode: null };
            obj[1] = platformName;
            obj[2] = plan.productId;
            obj[3] = first.currencyCode;
            obj[1] = obj;
            let obj2 = obj;
          } else {
            const diff = first.price - stateFromStores.price;
            if (diff > 0) {
              if (diff < first.price) {
                tmp3Result = tmp3(tmp4[6]);
                let result = diff;
                if (tmp3Result.isAndroid()) {
                  result = diff / 100;
                }
                obj1 = { priceString: null, failure: null };
                obj1[0] = tmp3(tmp4[7]).formatPrice(result, first.currencyCode, { convertToMajorUnits: false });
                obj2 = obj1;
                const tmp3Result1 = tmp3(tmp4[7]);
              }
            }
            obj2 = { priceString: null, failure: null };
            const obj3 = { kind: "delta_out_of_range", platform: null, productId: null, currencyCode: null };
            obj3[1] = platformName;
            obj3[2] = plan.productId;
            obj3[3] = first.currencyCode;
            obj2[1] = obj3;
          }
        }
      }
      obj2 = closure_6;
    }
    if (null == checkoutContext) {
      let tmp17 = closure_6;
    } else {
      const availablePlanForItems = checkoutContext.getAvailablePlanForItems(tmp3(tmp4[4]).getSubscriptionItemsForProduct(plan.productId));
      if (null != availablePlanForItems) {
        const addOnPrice = availablePlanForItems.getAddOnPrice();
        if (null != addOnPrice) {
          if (addOnPrice.majorUnits > 0) {
            const obj4 = { priceString: null, failure: null };
            obj4[0] = tmp3(tmp4[7]).formatPrice(addOnPrice.majorUnits, addOnPrice.currency, { convertToMajorUnits: false });
            tmp17 = obj4;
            const tmp3Result3 = tmp3(tmp4[7]);
          }
        }
        tmp17 = closure_6;
      }
      const tmp3Result2 = tmp3(tmp4[4]);
    }
    tmp17 = closure_6;
  } else {
    const failure = tmp12.failure;
    kind = undefined;
    platform = undefined;
    let currencyCode;
    productId = undefined;
    kind = undefined;
    if (failure != null) {
      kind = failure.kind;
    }
    if (kind == null) {
      kind = null;
    }
    platform = undefined;
    if (failure != null) {
      platform = failure.platform;
    }
    if (platform == null) {
      platform = null;
    }
    currencyCode = undefined;
    if (failure != null) {
      currencyCode = failure.currencyCode;
    }
    if (currencyCode == null) {
      currencyCode = null;
    }
    productId = undefined;
    if (failure != null) {
      productId = failure.productId;
    }
    if (productId == null) {
      productId = null;
    }
    const items1 = [kind, platform, currencyCode, productId];
    const effect = currencyCode.useEffect(() => {
      if (null != kind) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("delta_price_integrity_" + tmp);
        let obj = { source: "usePremiumTier2DeltaPriceString", delta_failure_kind: null, delta_platform: null, delta_currency_code: null, delta_product_id: null };
        obj[1] = tmp;
        let str = platform;
        if (platform == null) {
          str = "unknown";
        }
        obj[2] = str;
        let str2 = currencyCode;
        if (currencyCode == null) {
          str2 = "unknown";
        }
        obj[3] = str2;
        let str3 = productId;
        if (productId == null) {
          str3 = "unknown";
        }
        obj = { tags: null };
        obj[4] = str3;
        obj[0] = obj;
        const result = kind(platform[8]).captureBillingException(error, obj);
        const obj2 = kind(platform[8]);
      }
    }, items1);
    return closure_6.priceString;
  }
};
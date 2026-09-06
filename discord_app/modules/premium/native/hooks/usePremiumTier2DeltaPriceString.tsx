// === Module 13550: usePremiumTier2DeltaPriceString ===

// Module 13550 (usePremiumTier2DeltaPriceString)
import BillingUtils from "BillingUtils" /* 4233 */;
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils" /* 7409 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7237 */;

require = fn;
function getViewerProductId(subscription) {
  if (null == subscription) {
    return null;
  } else {
    try {
      const productIdFromSubscription = PremiumBundledPlansUtils.getProductIdFromSubscription(subscription, false);
      try {
        const productIdFromSubscription1 = tmp3(7409).getProductIdFromSubscription(subscription, true);
        const tmp8 = tmp3(7240).AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription];
        const tmp10 = tmp3(7240).AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription1];
        if (null != tmp8) {
          if (null != tmp10) {
            if (tmp8.numPremiumGuild === tmp10.numPremiumGuild) {
              let tmp11 = productIdFromSubscription1;
            }
            return tmp11;
          }
        }
        tmp11 = productIdFromSubscription;
        const tmp3Result = tmp3(7409);
      } catch (err) {
        return tmp2;
      }
    } catch (err) {
      return tmp;
    }
  }
}
const useNativeCheckoutStore = fn(7424).useNativeCheckoutStore;
const PremiumTypes = fn(1373).PremiumTypes;
const priceString = { priceString: null, failure: null };
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/hooks/usePremiumTier2DeltaPriceString.tsx");

export const usePremiumTier2DeltaPriceString = function usePremiumTier2DeltaPriceString(plan, subscription, currencyCode, flag4) {
  const tmp = useNativeCheckoutStore((orderRequired) => ({ orderRequired: orderRequired.orderRequired, checkoutContext: orderRequired.getCheckoutContextRecord() }));
  const checkoutContext = tmp.checkoutContext;
  const tmp3 = getViewerProductId(subscription);
  _require = tmp3;
  let obj = require("initialize");
  const items = [IAPStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let product = null;
    if (null != closure_0) {
      product = IAPStore.getProduct(tmp);
    }
    return product;
  });
  let obj1 = require("PlatformUtils");
  let flag = false;
  if (flag4) {
    flag = false;
    if (plan.premiumTier === PremiumTypes.TIER_2) {
      flag = false;
      if (plan.numPremiumGuild >= 1) {
        const tmp2Result = getViewerProductId(subscription);
        let tmp11 = null;
        if (null != tmp2Result) {
          tmp11 = tmp4(7240).AppStorePremiumProductIdsToPremiumBundledItems[tmp2Result];
        }
        flag = null != tmp11 && tmp11.basePlanId === plan.basePlanId && tmp11.numPremiumGuild < plan.numPremiumGuild;
        const tmp12 = null != tmp11 && tmp11.basePlanId === plan.basePlanId && tmp11.numPremiumGuild < plan.numPremiumGuild;
      }
    }
  }
  if (flag) {
    if (!tmp7) {
      if (null != currencyCode) {
        if (null != stateFromStores) {
          let tmp4Result = tmp4(1115);
          const platformName = tmp4Result.getPlatformName();
          if (currencyCode.currencyCode !== stateFromStores.currencyCode) {
            obj = { priceString: null, failure: null };
            obj = { kind: "currency_mismatch", platform: platformName, productId: plan.productId, currencyCode: currencyCode.currencyCode };
            obj.failure = obj;
            let obj2 = obj;
          } else {
            const diff = currencyCode.price - stateFromStores.price;
            if (diff > 0) {
              if (diff < currencyCode.price) {
                tmp4Result = tmp4(1115);
                let result = diff;
                if (tmp4Result.isAndroid()) {
                  result = diff / 100;
                }
                obj1 = { priceString: tmp4(7234).formatPrice(result, currencyCode.currencyCode, { convertToMajorUnits: false }), failure: null };
                obj2 = obj1;
                const tmp4Result1 = tmp4(7234);
              }
            }
            obj2 = { priceString: null, failure: null };
            const obj3 = { kind: "delta_out_of_range", platform: platformName, productId: plan.productId, currencyCode: currencyCode.currencyCode };
            obj2.failure = obj3;
          }
        }
      }
      obj2 = priceString;
    }
    if (null == checkoutContext) {
    } else {
      const availablePlanForItems = checkoutContext.getAvailablePlanForItems(tmp4(7409).getSubscriptionItemsForProduct(plan.productId));
      if (null == availablePlanForItems) {
      } else {
        const addOnPrice = availablePlanForItems.getAddOnPrice();
        if (null != addOnPrice) {
          if (addOnPrice.majorUnits > 0) {
            let tmp17 = null;
            if (null != tmp3) {
              tmp17 = tmp4(7240).AppStorePremiumProductIdsToPremiumBundledItems[tmp3];
            }
            if (null != tmp3) {
              if (null != tmp17) {
                if (0 !== tmp17.numPremiumGuild) {
                  const availablePlanForItems1 = checkoutContext.getAvailablePlanForItems(tmp4(7409).getSubscriptionItemsForProduct(tmp3));
                  let addOnPrice1;
                  if (availablePlanForItems1 != null) {
                    addOnPrice1 = availablePlanForItems1.getAddOnPrice();
                  }
                  if (null != addOnPrice1) {
                    const diff1 = addOnPrice.majorUnits - addOnPrice1.majorUnits;
                    if (diff1 > 0) {
                      const obj4 = { priceString: tmp4(7234).formatPrice(diff1, addOnPrice.currency, { convertToMajorUnits: false }), failure: null };
                      const tmp4Result4 = tmp4(7234);
                    }
                  }
                  const tmp4Result3 = tmp4(7409);
                }
              }
            }
            const obj5 = { priceString: tmp4(7234).formatPrice(addOnPrice.majorUnits, addOnPrice.currency, { convertToMajorUnits: false }), failure: null };
            const tmp4Result5 = tmp4(7234);
          }
        }
      }
      const tmp4Result2 = tmp4(7409);
    }
  } else {
    const failure = tmp13.failure;
    closure_129_0 = undefined;
    closure_129_1 = undefined;
    closure_129_2 = undefined;
    closure_129_3 = undefined;
    let kind;
    if (failure != null) {
      kind = failure.kind;
    }
    if (kind == null) {
      kind = null;
    }
    closure_129_0 = kind;
    let platform;
    if (failure != null) {
      platform = failure.platform;
    }
    if (platform == null) {
      platform = null;
    }
    closure_129_1 = platform;
    currencyCode = undefined;
    if (failure != null) {
      currencyCode = failure.currencyCode;
    }
    if (currencyCode == null) {
      currencyCode = null;
    }
    closure_129_2 = currencyCode;
    let productId;
    if (failure != null) {
      productId = failure.productId;
    }
    if (productId == null) {
      productId = null;
    }
    closure_129_3 = productId;
    const items1 = [kind, platform, currencyCode, productId];
    const effect = noop.useEffect(() => {
      if (null != closure_0) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("delta_price_integrity_" + tmp);
        let obj = { source: "usePremiumTier2DeltaPriceString", delta_failure_kind: tmp, delta_platform: null, delta_currency_code: null, delta_product_id: null };
        let str = dependencyMap;
        if (dependencyMap == null) {
          str = "unknown";
        }
        obj.delta_platform = str;
        let str2 = noop;
        if (noop == null) {
          str2 = "unknown";
        }
        obj.delta_currency_code = str2;
        let str3 = useNativeCheckoutStore;
        if (useNativeCheckoutStore == null) {
          str3 = "unknown";
        }
        obj = { tags: null, delta_product_id: str3 };
        obj.tags = obj;
        const result = BillingUtils.captureBillingException(error, obj);
      }
    }, items1);
    return priceString.priceString;
  }
};
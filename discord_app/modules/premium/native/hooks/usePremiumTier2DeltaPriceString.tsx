// discord_app/modules/premium/native/hooks/usePremiumTier2DeltaPriceString.tsx
import noop from "noop";
import { useNativeCheckoutStore } from "context";
import updateProduct from "updateProduct";
import { PremiumTypes } from "GuildFeatures";
import { getPremiumBundledItemsFromProductId } from "../PremiumBundledPlansUtils.tsx";

const require = arg1;
function getViewerProductId(subscription) {
  if (null == subscription) {
    return null;
  } else {
    try {
      const productIdFromSubscription = getPremiumBundledItemsFromProductId.getProductIdFromSubscription(subscription, false);
      try {
        const productIdFromSubscription1 = tmp3(6918).getProductIdFromSubscription(subscription, true);
        const tmp8 = tmp3(5902).AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription];
        const tmp10 = tmp3(5902).AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription1];
        if (null != tmp8) {
          if (null != tmp10) {
            if (tmp8.numPremiumGuild === tmp10.numPremiumGuild) {
              let tmp11 = productIdFromSubscription1;
            }
            return tmp11;
          }
        }
        tmp11 = productIdFromSubscription;
        const tmp3Result = tmp3(6918);
      } catch (err) {
        return tmp2;
      }
      const obj = getPremiumBundledItemsFromProductId;
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
  const tmp3 = getViewerProductId(subscription);
  let kind = tmp3;
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
        let tmp11 = null;
        if (null != tmp2Result) {
          tmp11 = tmp4(tmp5[5]).AppStorePremiumProductIdsToPremiumBundledItems[tmp2Result];
        }
        flag = null != tmp11 && tmp11.basePlanId === plan.basePlanId && tmp11.numPremiumGuild < plan.numPremiumGuild;
        const tmp12 = null != tmp11 && tmp11.basePlanId === plan.basePlanId && tmp11.numPremiumGuild < plan.numPremiumGuild;
      }
    }
  }
  if (flag) {
    if (!tmp7) {
      if (null != first) {
        if (null != stateFromStores) {
          let tmp4Result = tmp4(tmp5[6]);
          const platformName = tmp4Result.getPlatformName();
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
                tmp4Result = tmp4(tmp5[6]);
                let result = diff;
                if (tmp4Result.isAndroid()) {
                  result = diff / 100;
                }
                obj1 = { priceString: null, failure: null };
                obj1[0] = tmp4(tmp5[7]).formatPrice(result, first.currencyCode, { convertToMajorUnits: false });
                obj2 = obj1;
                const tmp4Result1 = tmp4(tmp5[7]);
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
      let tmp20 = closure_6;
    } else {
      const availablePlanForItems = checkoutContext.getAvailablePlanForItems(tmp4(tmp5[4]).getSubscriptionItemsForProduct(plan.productId));
      if (null == availablePlanForItems) {
        tmp20 = closure_6;
      } else {
        const addOnPrice = availablePlanForItems.getAddOnPrice();
        if (null != addOnPrice) {
          if (addOnPrice.majorUnits > 0) {
            let tmp17 = null;
            if (null != tmp3) {
              tmp17 = tmp4(tmp5[5]).AppStorePremiumProductIdsToPremiumBundledItems[tmp3];
            }
            if (null != tmp3) {
              if (null != tmp17) {
                if (0 !== tmp17.numPremiumGuild) {
                  const availablePlanForItems1 = checkoutContext.getAvailablePlanForItems(tmp4(tmp5[4]).getSubscriptionItemsForProduct(tmp3));
                  let addOnPrice1;
                  if (availablePlanForItems1 != null) {
                    addOnPrice1 = availablePlanForItems1.getAddOnPrice();
                  }
                  if (null != addOnPrice1) {
                    const diff1 = addOnPrice.majorUnits - addOnPrice1.majorUnits;
                    if (diff1 > 0) {
                      const obj4 = { priceString: null, failure: null };
                      obj4[0] = tmp4(tmp5[7]).formatPrice(diff1, addOnPrice.currency, { convertToMajorUnits: false });
                      tmp20 = obj4;
                      const tmp4Result4 = tmp4(tmp5[7]);
                    } else {
                      tmp20 = closure_6;
                    }
                  }
                  const tmp4Result3 = tmp4(tmp5[4]);
                }
                tmp20 = closure_6;
              }
            }
            const obj5 = { priceString: null, failure: null };
            obj5[0] = tmp4(tmp5[7]).formatPrice(addOnPrice.majorUnits, addOnPrice.currency, { convertToMajorUnits: false });
            tmp20 = obj5;
            const tmp4Result5 = tmp4(tmp5[7]);
          }
        }
        tmp20 = closure_6;
      }
      const tmp4Result2 = tmp4(tmp5[4]);
    }
  } else {
    const failure = tmp13.failure;
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
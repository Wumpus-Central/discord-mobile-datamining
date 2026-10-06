// discord_app/modules/premium/native/hooks/usePremiumTier2DeltaPriceString.tsx
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import PremiumConstants from "../../PremiumConstants.tsx";
import BillingUtils from "../../../../utils/BillingUtils.tsx";
import PriceUtils from "../../../../utils/PriceUtils.tsx";
import PremiumBundledPlansUtils from "../PremiumBundledPlansUtils.tsx";
import ProductIds from "../ProductIds.android.tsx";
import NativeCheckoutStore from "../../../checkout/native/NativeCheckoutStore.tsx";
import react from "../../../../../_runtime/00019_react.js";
import IAPStore from "../../../../stores/native/IAPStore.android.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, kind;

function getViewerProductId(subscription) {
  if (null == subscription) {
    return null;
  } else {
    try {
      const obj = PremiumBundledPlansUtils;
      const productIdFromSubscription = obj.getProductIdFromSubscription(subscription, false);
      try {
        const tmpResult = PremiumBundledPlansUtils;
        const productIdFromSubscription1 = tmpResult.getProductIdFromSubscription(subscription, true);
        const tmp6 = ProductIds.AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription];
        const tmp8 = ProductIds.AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription1];
        if (null != tmp6) {
          if (null != tmp8) {
            let tmp9;
            if (tmp6.numPremiumGuild === tmp8.numPremiumGuild) {
              tmp9 = productIdFromSubscription1;
            }
            return tmp9;
          }
        }
        tmp9 = productIdFromSubscription;
      } catch (err) {
        return productIdFromSubscription;
      }
    } catch (err) {
      return null;
    }
  }
}
function computeDelta(productId, currencyCode, stateFromStores) {
  let obj5;
  let tmp4Result2;
  if (null != currencyCode) {
    if (null != stateFromStores) {
      const obj8 = PlatformUtils;
      const platformName = obj8.getPlatformName();
      if (currencyCode.currencyCode !== stateFromStores.currencyCode) {
        const obj2 = { priceString: null, failure: obj3 };
        return obj2;
      } else {
        const diff = currencyCode.price - stateFromStores.price;
        if (diff > 0) {
          let obj;
          if (diff < currencyCode.price) {
            let result = diff;
            const tmp4Result = PlatformUtils;
            if (tmp4Result.isAndroid()) {
              result = diff / 100;
            }
            const obj4 = {
              priceString: tmp4Result2.formatPrice(result, currencyCode.currencyCode, { convertToMajorUnits: false }),
              failure: null,
            };
            obj = obj4;
            tmp4Result2 = PriceUtils;
          }
          return obj;
        }
        obj = { priceString: null, failure: obj5 };
        obj5 = {
          kind: "delta_out_of_range",
          platform: platformName,
          productId: productId.productId,
          currencyCode: currencyCode.currencyCode,
        };
      }
    }
  }
  return closure_6;
}
function computeAcomDeltaResult(productId, checkoutContext, cResult) {
  let tmp10Result3;
  let tmp10Result4;
  if (null == checkoutContext) {
    return closure_6;
  } else {
    const getAvailablePlanForItems = checkoutContext.getAvailablePlanForItems;
    const obj5 = PremiumBundledPlansUtils;
    const availablePlanForItems = getAvailablePlanForItems(obj5.getSubscriptionItemsForProduct(productId.productId));
    if (null == availablePlanForItems) {
      return closure_6;
    } else {
      const addOnPrice = availablePlanForItems.getAddOnPrice();
      if (null != addOnPrice) {
        if (addOnPrice.majorUnits > 0) {
          let tmp = null;
          if (null != cResult) {
            tmp = ProductIds.AppStorePremiumProductIdsToPremiumBundledItems[cResult];
          }
          if (null != cResult) {
            if (null != tmp) {
              if (0 !== tmp.numPremiumGuild) {
                const getAvailablePlanForItems2 = checkoutContext.getAvailablePlanForItems;
                const tmp10Result = PremiumBundledPlansUtils;
                const availablePlanForItems2 = getAvailablePlanForItems2(
                  tmp10Result.getSubscriptionItemsForProduct(cResult),
                );
                let addOnPrice1;
                if (availablePlanForItems2 != null) {
                  addOnPrice1 = availablePlanForItems2.getAddOnPrice();
                }
                if (null == addOnPrice1) {
                  return closure_6;
                } else {
                  let tmp4;
                  const diff = addOnPrice.majorUnits - addOnPrice1.majorUnits;
                  if (diff > 0) {
                    const obj = {
                      priceString: tmp10Result3.formatPrice(diff, addOnPrice.currency, { convertToMajorUnits: false }),
                      failure: null,
                    };
                    tmp4 = obj;
                    tmp10Result3 = PriceUtils;
                  } else {
                    tmp4 = closure_6;
                  }
                  return tmp4;
                }
              }
            }
          }
          const obj2 = {
            priceString: tmp10Result4.formatPrice(addOnPrice.majorUnits, addOnPrice.currency, {
              convertToMajorUnits: false,
            }),
            failure: null,
          };
          tmp10Result4 = PriceUtils;
          return obj2;
        }
      }
      return closure_6;
    }
  }
}
const useNativeCheckoutStore = NativeCheckoutStore.useNativeCheckoutStore;
const PremiumTypes = PremiumConstants.PremiumTypes;
let closure_6 = { priceString: null, failure: null };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (kind) => {
      let platform;
      let obj = kind(platform[9]);
      const cResult = obj.c(6);
      kind = undefined;
      if (kind != null) {
        kind = kind.kind;
      }
      if (kind == null) {
        kind = null;
      }
      platform = undefined;
      if (kind != null) {
        platform = kind.platform;
      }
      if (platform == null) {
        platform = null;
      }
      let currencyCode;
      if (kind != null) {
        currencyCode = kind.currencyCode;
      }
      if (currencyCode == null) {
        currencyCode = null;
      }
      let productId;
      if (kind != null) {
        productId = kind.productId;
      }
      if (productId == null) {
        productId = null;
      }
      if (cResult[0] === currencyCode) {
        if (cResult[1] === kind) {
          if (cResult[2] === platform) {
            let tmp6;
            let tmp7;
            if (cResult[3] === productId) {
              tmp6 = cResult[4];
              tmp7 = cResult[5];
            }
            const effect = currencyCode.useEffect(tmp6, tmp7);
          }
        }
      }
      const fn = function n() {
        let str;
        let str2;
        let str3;
        if (null != kind) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const captureBillingException = BillingUtils.captureBillingException;
          const self = this;
          const self2 = this;
          BillingUtils;
          const error = new Error("delta_price_integrity_" + kind);
          const obj2 = {
            source: "usePremiumTier2DeltaPriceString",
            delta_failure_kind: kind,
            delta_platform: str,
            delta_currency_code: str2,
            delta_product_id: str3,
          };
          str = platform;
          if (platform == null) {
            str = "unknown";
          }
          str2 = currencyCode;
          if (currencyCode == null) {
            str2 = "unknown";
          }
          str3 = productId;
          if (productId == null) {
            str3 = "unknown";
          }
          const obj = { tags: obj2 };
          const result = captureBillingException(error, obj);
        }
      };
      const items = [kind, platform, currencyCode, productId];
      cResult[0] = currencyCode;
      cResult[1] = kind;
      cResult[2] = platform;
      cResult[3] = productId;
      cResult[4] = fn;
      cResult[5] = items;
      tmp7 = items;
      tmp6 = fn;
    }
  : (kind) => {
      kind = undefined;
      if (kind != null) {
        kind = kind.kind;
      }
      if (kind == null) {
        kind = null;
      }
      let platform;
      if (kind != null) {
        platform = kind.platform;
      }
      if (platform == null) {
        platform = null;
      }
      let currencyCode;
      if (kind != null) {
        currencyCode = kind.currencyCode;
      }
      if (currencyCode == null) {
        currencyCode = null;
      }
      let productId;
      if (kind != null) {
        productId = kind.productId;
      }
      if (productId == null) {
        productId = null;
      }
      const items = [kind, platform, currencyCode, productId];
      const effect = currencyCode.useEffect(function () {
        let str;
        let str2;
        let str3;
        if (null != kind) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const captureBillingException = BillingUtils.captureBillingException;
          const self = this;
          const self2 = this;
          BillingUtils;
          const error = new Error("delta_price_integrity_" + kind);
          const obj2 = {
            source: "usePremiumTier2DeltaPriceString",
            delta_failure_kind: kind,
            delta_platform: str,
            delta_currency_code: str2,
            delta_product_id: str3,
          };
          str = platform;
          if (platform == null) {
            str = "unknown";
          }
          str2 = currencyCode;
          if (currencyCode == null) {
            str2 = "unknown";
          }
          str3 = productId;
          if (productId == null) {
            str3 = "unknown";
          }
          const obj = { tags: obj2 };
          const result = captureBillingException(error, obj);
        }
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (premiumTier, subscription, currencyCode, arg3) => {
      let checkoutContext;
      let closure_0;
      let first;
      let orderRequired;
      let tmp11;
      let tmp13;
      let tmp22;
      let tmp6;
      let tmp9;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(17);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function f(orderRequired) {
          const obj = {
            orderRequired: orderRequired.orderRequired,
            checkoutContext: orderRequired.getCheckoutContextRecord(),
          };
          return obj;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      ({ orderRequired, checkoutContext } = useNativeCheckoutStore(first));
      useNativeCheckoutStore(first);
      if (cResult[1] !== subscription) {
        const tmp8 = getViewerProductId(subscription);
        cResult[1] = subscription;
        cResult[2] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[2];
      }
      _require = tmp6;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [IAPStore];
        cResult[3] = items;
        tmp9 = items;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== tmp6) {
        const fn2 = function k() {
          let product = null;
          if (null != closure_0) {
            product = IAPStore.getProduct(tmp);
          }
          return product;
        };
        cResult[4] = tmp6;
        cResult[5] = fn2;
        tmp11 = fn2;
      } else {
        tmp11 = cResult[5];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp11);
      if (cResult[6] !== orderRequired) {
        const tmpResult2 = tmp(1369);
        const tmp14 = tmpResult2.isIOS() && orderRequired;
        cResult[6] = orderRequired;
        cResult[7] = tmp14;
        tmp13 = tmp14;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === stateFromStores) {
        if (cResult[9] === currencyCode) {
          if (cResult[10] === checkoutContext) {
            if (cResult[11] === tmp13) {
              if (cResult[12] === arg3) {
                if (cResult[13] === premiumTier) {
                  if (cResult[14] === subscription) {
                    let tmp15;
                    if (cResult[15] === tmp6) {
                      tmp15 = cResult[16];
                    }
                    const priceString = tmp15.priceString;
                    closure_10(tmp15.failure);
                    return priceString;
                  }
                }
              }
            }
          }
        }
      }
      let flag = false;
      if (arg3) {
        flag = false;
        if (premiumTier.premiumTier === PremiumTypes.TIER_2) {
          flag = false;
          if (premiumTier.numPremiumGuild >= 1) {
            const tmp18 = getViewerProductId(subscription);
            let tmp20 = null;
            if (null != tmp18) {
              tmp20 = tmp(6926).AppStorePremiumProductIdsToPremiumBundledItems[tmp18];
            }
            flag =
              null != tmp20 &&
              tmp20.basePlanId === premiumTier.basePlanId &&
              tmp20.numPremiumGuild < premiumTier.numPremiumGuild;
          }
        }
      }
      if (flag) {
        let tmp24;
        if (tmp13) {
          tmp24 = computeAcomDeltaResult(premiumTier, checkoutContext, tmp6);
        } else {
          tmp24 = computeDelta(premiumTier, currencyCode, stateFromStores);
        }
        tmp22 = tmp24;
      } else {
        tmp22 = closure_6;
      }
      cResult[8] = stateFromStores;
      cResult[9] = currencyCode;
      cResult[10] = checkoutContext;
      cResult[11] = tmp13;
      cResult[12] = arg3;
      cResult[13] = premiumTier;
      cResult[14] = subscription;
      cResult[15] = tmp6;
      cResult[16] = tmp22;
      tmp15 = tmp22;
    }
  : (premiumTier, subscription, currencyCode, arg3) => {
      let checkoutContext;
      let closure_0;
      let orderRequired;
      let tmp13;
      const tmp = useNativeCheckoutStore((orderRequired) => {
        const obj = {
          orderRequired: orderRequired.orderRequired,
          checkoutContext: orderRequired.getCheckoutContextRecord(),
        };
        return obj;
      });
      ({ orderRequired, checkoutContext } = tmp);
      const tmp3 = getViewerProductId(subscription);
      _require = tmp3;
      let obj = require("get initialized");
      const items = [IAPStore];
      const stateFromStores = obj.useStateFromStores(items, () => {
        let product = null;
        if (null != closure_0) {
          product = IAPStore.getProduct(tmp);
        }
        return product;
      });
      let flag = false;
      const obj2 = require("PlatformUtils");
      const tmp4 = _require;
      const tmp7 = obj2.isIOS() && orderRequired;
      if (arg3) {
        flag = false;
        if (premiumTier.premiumTier === PremiumTypes.TIER_2) {
          flag = false;
          if (premiumTier.numPremiumGuild >= 1) {
            const tmp2Result = getViewerProductId(subscription);
            let tmp11 = null;
            if (null != tmp2Result) {
              tmp11 = tmp4(6926).AppStorePremiumProductIdsToPremiumBundledItems[tmp2Result];
            }
            flag =
              null != tmp11 &&
              tmp11.basePlanId === premiumTier.basePlanId &&
              tmp11.numPremiumGuild < premiumTier.numPremiumGuild;
          }
        }
      }
      if (flag) {
        let tmp16;
        if (tmp7) {
          tmp16 = computeAcomDeltaResult(premiumTier, checkoutContext, tmp3);
        } else {
          tmp16 = computeDelta(premiumTier, currencyCode, stateFromStores);
        }
        tmp13 = tmp16;
      } else {
        tmp13 = closure_6;
      }
      const priceString = tmp13.priceString;
      closure_10(tmp13.failure);
      return priceString;
    };
let result = size.fileFinishedImporting("modules/premium/native/hooks/usePremiumTier2DeltaPriceString.tsx");

export const usePremiumTier2DeltaPriceString = tmp2;

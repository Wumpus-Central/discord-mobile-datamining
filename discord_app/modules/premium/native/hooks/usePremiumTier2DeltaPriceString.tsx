// discord_app/modules/premium/native/hooks/usePremiumTier2DeltaPriceString.tsx
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import BillingUtils from "../../../../utils/BillingUtils.tsx";
import PriceUtils from "../../../../utils/PriceUtils.tsx";
import PremiumBundledPlansUtils from "../PremiumBundledPlansUtils.tsx";
import ProductIds from "../ProductIds.android.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import IAPStore from "../../../../stores/native/IAPStore.android.tsx";

const require = globalThis.__r;

require = fn;
function getViewerProductId(subscription) {
  if (null == subscription) {
    return null;
  } else {
    try {
      const productIdFromSubscription = PremiumBundledPlansUtils.getProductIdFromSubscription(subscription, false);
      try {
        const productIdFromSubscription1 = PremiumBundledPlansUtils.getProductIdFromSubscription(subscription, true);
        const tmp8 = ProductIds.AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription];
        const tmp10 = ProductIds.AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription1];
        if (null != tmp8) {
          if (null != tmp10) {
            if (tmp8.numPremiumGuild === tmp10.numPremiumGuild) {
              let tmp11 = productIdFromSubscription1;
            }
            return tmp11;
          }
        }
        tmp11 = productIdFromSubscription;
        const tmp3Result = PremiumBundledPlansUtils;
      } catch (err) {
        return tmp2;
      }
    } catch (err) {
      return tmp;
    }
  }
}
function computeDelta(productId, currencyCode, stateFromStores) {
  if (null != currencyCode) {
    if (null != stateFromStores) {
      const platformName = PlatformUtils.getPlatformName();
      if (currencyCode.currencyCode !== stateFromStores.currencyCode) {
        const obj2 = { priceString: null, failure: null };
        const obj3 = {
          kind: "currency_mismatch",
          platform: platformName,
          productId: productId.productId,
          currencyCode: currencyCode.currencyCode,
        };
        obj2.failure = obj3;
        return obj2;
      } else {
        const diff = currencyCode.price - stateFromStores.price;
        if (diff > 0) {
          if (diff < currencyCode.price) {
            let result = diff;
            if (tmp4Result.isAndroid()) {
              result = diff / 100;
            }
            const obj4 = { priceString: null, failure: null };
            tmp4Result = PlatformUtils;
            obj4.priceString = PriceUtils.formatPrice(result, currencyCode.currencyCode, {
              convertToMajorUnits: false,
            });
            let obj = obj4;
            const tmp4Result2 = PriceUtils;
          }
          return obj;
        }
        obj = { priceString: null, failure: null };
        const obj5 = {
          kind: "delta_out_of_range",
          platform: platformName,
          productId: productId.productId,
          currencyCode: currencyCode.currencyCode,
        };
        obj.failure = obj5;
      }
    }
  }
  return closure_6;
}
function computeAcomDeltaResult(productId, checkoutContext, viewerProductId) {
  if (null == checkoutContext) {
    return closure_6;
  } else {
    const availablePlanForItems = checkoutContext.getAvailablePlanForItems(
      PremiumBundledPlansUtils.getSubscriptionItemsForProduct(productId.productId),
    );
    if (null == availablePlanForItems) {
      return closure_6;
    } else {
      const addOnPrice = availablePlanForItems.getAddOnPrice();
      if (null != addOnPrice) {
        if (addOnPrice.majorUnits > 0) {
          let tmp = null;
          if (null != viewerProductId) {
            tmp = ProductIds.AppStorePremiumProductIdsToPremiumBundledItems[viewerProductId];
          }
          if (null != viewerProductId) {
            if (null != tmp) {
              if (0 !== tmp.numPremiumGuild) {
                const availablePlanForItems1 = checkoutContext.getAvailablePlanForItems(
                  PremiumBundledPlansUtils.getSubscriptionItemsForProduct(viewerProductId),
                );
                let addOnPrice1;
                if (availablePlanForItems1 != null) {
                  addOnPrice1 = availablePlanForItems1.getAddOnPrice();
                }
                if (null == addOnPrice1) {
                  return closure_6;
                } else {
                  const diff = addOnPrice.majorUnits - addOnPrice1.majorUnits;
                  if (diff > 0) {
                    const obj = {
                      priceString: PriceUtils.formatPrice(diff, addOnPrice.currency, { convertToMajorUnits: false }),
                      failure: null,
                    };
                    let tmp4 = obj;
                    const tmp10Result3 = PriceUtils;
                  } else {
                    tmp4 = closure_6;
                  }
                  return tmp4;
                }
                const tmp10Result = PremiumBundledPlansUtils;
              }
            }
          }
          const obj2 = {
            priceString: PriceUtils.formatPrice(addOnPrice.majorUnits, addOnPrice.currency, {
              convertToMajorUnits: false,
            }),
            failure: null,
          };
          return obj2;
        }
      }
      return closure_6;
    }
  }
}
const useNativeCheckoutStore = fn(7143).useNativeCheckoutStore;
const PremiumTypes = fn(1392).PremiumTypes;
let closure_6 = { priceString: null, failure: null };
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useReportDeltaFailure(kind) {
      const cResult = kind(platform[9]).c(6);
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
            if (cResult[3] === productId) {
              let tmp6 = cResult[4];
              let tmp7 = cResult[5];
            }
            const effect = currencyCode.useEffect(tmp6, tmp7);
          }
        }
      }
      const fn = function n() {
        if (null != kind) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("delta_price_integrity_" + kind);
          const obj3 = {
            source: "usePremiumTier2DeltaPriceString",
            delta_failure_kind: kind,
            delta_platform: null,
            delta_currency_code: null,
            delta_product_id: null,
          };
          let str = platform;
          if (platform == null) {
            str = "unknown";
          }
          obj3.delta_platform = str;
          let str2 = currencyCode;
          if (currencyCode == null) {
            str2 = "unknown";
          }
          obj3.delta_currency_code = str2;
          let str3 = productId;
          if (productId == null) {
            str3 = "unknown";
          }
          const obj = { tags: null };
          obj3.delta_product_id = str3;
          obj.tags = obj3;
          const result = BillingUtils.captureBillingException(error, obj);
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
  : function useReportDeltaFailure(kind) {
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
      const effect = currencyCode.useEffect(() => {
        if (null != kind) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("delta_price_integrity_" + kind);
          const obj3 = {
            source: "usePremiumTier2DeltaPriceString",
            delta_failure_kind: kind,
            delta_platform: null,
            delta_currency_code: null,
            delta_product_id: null,
          };
          let str = platform;
          if (platform == null) {
            str = "unknown";
          }
          obj3.delta_platform = str;
          let str2 = currencyCode;
          if (currencyCode == null) {
            str2 = "unknown";
          }
          obj3.delta_currency_code = str2;
          let str3 = productId;
          if (productId == null) {
            str3 = "unknown";
          }
          const obj = { tags: null };
          obj3.delta_product_id = str3;
          obj.tags = obj3;
          const result = BillingUtils.captureBillingException(error, obj);
        }
      }, items);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/hooks/usePremiumTier2DeltaPriceString.tsx");

export const usePremiumTier2DeltaPriceString = ReactCompilerGating.isReactCompilerEnabled()
  ? function usePremiumTier2DeltaPriceString(premiumTier, subscription, currencyCode, arg3) {
      const cResult = require("c").c(17);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor(arg0) {
            obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
            return obj;
          }
        }
        cResult[0] = P;
      } else {
        class P {
          constructor(arg0) {
            obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
            return obj;
          }
        }
      }
      const obj = require("c");
      const tmp = _require;
      ({ orderRequired, checkoutContext } = useNativeCheckoutStore(P));
      if (cResult[1] !== subscription) {
        class P {
          constructor(arg0) {
            obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
            return obj;
          }
        }
        const tmp7 = getViewerProductId(subscription);
        cResult[1] = subscription;
        cResult[2] = tmp7;
      } else {
        class P {
          constructor(arg0) {
            obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
            return obj;
          }
        }
      }
      _require = tmp6;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor(arg0) {
            obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
            return obj;
          }
        }
        const items = [IAPStore];
        cResult[3] = items;
        const tmp8 = items;
      } else {
        class P {
          constructor(arg0) {
            obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
            return obj;
          }
        }
      }
      if (cResult[4] !== tmp6) {
        class P {
          constructor(arg0) {
            obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
            return obj;
          }
        }
        cResult[4] = tmp6;
        cResult[5] = tmp10;
      } else {
        class P {
          constructor(arg0) {
            obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
            return obj;
          }
        }
      }
      const tmp5 = useNativeCheckoutStore(P);
      const stateFromStores = tmp(504).useStateFromStores(tmp8, tmp10);
      if (cResult[6] !== orderRequired) {
        class P {
          constructor(arg0) {
            obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
            return obj;
          }
        }
        const tmp13 = obj3.isIOS() && orderRequired;
        cResult[6] = orderRequired;
        cResult[7] = tmp13;
      } else {
        class P {
          constructor(arg0) {
            obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
            return obj;
          }
        }
      }
      if (cResult[8] === stateFromStores) {
        class P {
          constructor(arg0) {
            obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
            return obj;
          }
        }
      }
      let flag = false;
      if (arg3) {
        class P {
          constructor(arg0) {
            obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
            return obj;
          }
        }
        flag = false;
        if (premiumTier.premiumTier === PremiumTypes.TIER_2) {
          class P {
            constructor(arg0) {
              obj = {
                orderRequired: premiumTier.orderRequired,
                checkoutContext: premiumTier.getCheckoutContextRecord(),
              };
              return obj;
            }
          }
          flag = false;
          if (premiumTier.numPremiumGuild >= 1) {
            class P {
              constructor(arg0) {
                obj = {
                  orderRequired: premiumTier.orderRequired,
                  checkoutContext: premiumTier.getCheckoutContextRecord(),
                };
                return obj;
              }
            }
            if (null != tmp14) {
              class P {
                constructor(arg0) {
                  obj = {
                    orderRequired: premiumTier.orderRequired,
                    checkoutContext: premiumTier.getCheckoutContextRecord(),
                  };
                  return obj;
                }
              }
            }
            flag =
              null != null &&
              null.basePlanId === premiumTier.basePlanId &&
              null.numPremiumGuild < premiumTier.numPremiumGuild;
            tmp14 = getViewerProductId(subscription);
            const tmp17 =
              null != null &&
              null.basePlanId === premiumTier.basePlanId &&
              null.numPremiumGuild < premiumTier.numPremiumGuild;
          }
        }
      }
      if (!flag) {
        class P {
          constructor(arg0) {
            obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
            return obj;
          }
        }
        cResult[8] = stateFromStores;
        cResult[9] = currencyCode;
        cResult[10] = checkoutContext;
        cResult[11] = tmp12;
        cResult[12] = arg3;
        cResult[13] = premiumTier;
        cResult[14] = subscription;
        cResult[15] = tmp6;
        cResult[16] = tmp18;
      }
      if (tmp12) {
        class P {
          constructor(arg0) {
            obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
            return obj;
          }
        }
        computeAcomDeltaResult(premiumTier, checkoutContext, tmp6);
      } else {
        class P {
          constructor(arg0) {
            obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
            return obj;
          }
        }
        computeDelta(premiumTier, currencyCode, stateFromStores);
      }
      const tmpResult = tmp(504);
    }
  : function usePremiumTier2DeltaPriceString(premiumTier, subscription, currencyCode, arg3) {
      ({ orderRequired, checkoutContext } = useNativeCheckoutStore((orderRequired) => ({
        orderRequired: orderRequired.orderRequired,
        checkoutContext: orderRequired.getCheckoutContextRecord(),
      })));
      const tmp3 = getViewerProductId(subscription);
      _require = tmp3;
      const tmp = useNativeCheckoutStore((orderRequired) => ({
        orderRequired: orderRequired.orderRequired,
        checkoutContext: orderRequired.getCheckoutContextRecord(),
      }));
      const tmp4 = _require;
      const items = [IAPStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => {
        let product = null;
        if (null != closure_0) {
          product = IAPStore.getProduct(tmp);
        }
        return product;
      });
      const obj = require("initialize");
      const obj2 = require("PlatformUtils");
      let flag = false;
      if (arg3) {
        flag = false;
        if (premiumTier.premiumTier === PremiumTypes.TIER_2) {
          flag = false;
          if (premiumTier.numPremiumGuild >= 1) {
            const tmp2Result = getViewerProductId(subscription);
            let tmp11 = null;
            if (null != tmp2Result) {
              tmp11 = tmp4(7126).AppStorePremiumProductIdsToPremiumBundledItems[tmp2Result];
            }
            flag =
              null != tmp11 &&
              tmp11.basePlanId === premiumTier.basePlanId &&
              tmp11.numPremiumGuild < premiumTier.numPremiumGuild;
            const tmp12 =
              null != tmp11 &&
              tmp11.basePlanId === premiumTier.basePlanId &&
              tmp11.numPremiumGuild < premiumTier.numPremiumGuild;
          }
        }
      }
      if (flag) {
        if (tmp7) {
          let tmp16 = computeAcomDeltaResult(premiumTier, checkoutContext, tmp3);
        } else {
          tmp16 = computeDelta(premiumTier, currencyCode, stateFromStores);
        }
      } else {
        closure_10(closure_6.failure);
        return closure_6.priceString;
      }
      tmp7 = require("PlatformUtils").isIOS() && orderRequired;
    };

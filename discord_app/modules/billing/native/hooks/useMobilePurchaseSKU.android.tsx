// discord_app/modules/billing/native/hooks/useMobilePurchaseSKU.android.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = fn;
let closure_5 = fn(7424).useNativeCheckoutStoreOrNull;
const CurrencyCodes = fn(1074).CurrencyCodes;
fn(7238).GPlayBillingResult;
let closure_9 = new LoggerDefault("useMobilePurchaseSKU.android");
const size = fn(2);
let result = size.fileFinishedImporting("modules/billing/native/hooks/useMobilePurchaseSKU.android.tsx");

export default function useMobilePurchaseSKU(skuId) {
  skuId = skuId.skuId;
  _require = skuId;
  let platformSkuId = skuId.platformSkuId;
  const analyticsLocations = skuId.analyticsLocations;
  let analyticsLoadId = skuId.analyticsLoadId;
  asyncGeneratorStep = analyticsLoadId;
  const analyticsData = skuId.analyticsData;
  const onPurchaseComplete = skuId.onPurchaseComplete;
  const onPurchaseError = skuId.onPurchaseError;
  const freePurchaseCallback = skuId.freePurchaseCallback;
  const onPurchasePending = skuId.onPurchasePending;
  const giftParams = skuId.giftParams;
  let flag = skuId.isFreeForStaffSelfPurchase;
  if (flag === undefined) {
    flag = true;
  }
  const orderId = skuId.orderId;
  let callback;
  let callback1;
  let callback2;
  let callback3;
  const currentUser = onPurchaseError.getCurrentUser();
  const handlePremiumPurchase = require("handlePremiumPurchase").useHandlePremiumPurchase();
  const tmp3 = onPurchaseComplete((setOrder) => setOrder.setOrder);
  closure_13 = tmp3;
  const tmp4 = onPurchaseComplete((setCheckoutSucceeded) => setCheckoutSucceeded.setCheckoutSucceeded);
  closure_14 = tmp4;
  const tmp5 = onPurchaseComplete((getPurchaseInFlight) => getPurchaseInFlight.getPurchaseInFlight);
  closure_15 = tmp5;
  const tmp6 = onPurchaseComplete((setPurchaseInFlight) => setPurchaseInFlight.setPurchaseInFlight);
  closure_16 = tmp6;
  let tmp7 = onPurchaseComplete((contextMetadata) => contextMetadata.contextMetadata.loadId);
  const tmp8 = undefined !== currentUser && currentUser.isStaff();
  closure_17 = tmp8;
  let flag2;
  let obj2 = require("handlePremiumPurchase");
  if (giftParams != null) {
    flag2 = giftParams.isGift;
  }
  if (flag2 == null) {
    flag2 = false;
  }
  if (null == analyticsLoadId) {
    if (tmp7 == null) {
      tmp7 = tmp9;
    }
    asyncGeneratorStep = tmp7;
    analyticsLoadId = tmp7;
  }
  const items = [onPurchaseComplete, tmp4, tmp6];
  callback = analyticsData.useCallback(() => {
    DispatcherDefault.unsubscribe("GPLAY_PURCHASE_VERIFIED", callback);
    if (closure_16 != null) {
      tmp2(false);
    }
    if (closure_14 != null) {
      closure_14();
    }
    onPurchaseComplete();
  }, items);
  const items1 = [onPurchaseError, callback, tmp6];
  callback1 = analyticsData.useCallback(() => {
    DispatcherDefault.unsubscribe("GPLAY_PURCHASE_VERIFIED", callback);
    if (closure_16 != null) {
      tmp2(false);
    }
    onPurchaseError();
  }, items1);
  const items2 = [onPurchaseError, tmp6];
  callback2 = analyticsData.useCallback(() => {
    if (closure_16 != null) {
      tmp(false);
    }
    onPurchaseError();
  }, items2);
  _require = asyncGeneratorStep(async (skuId) => {
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (async (arg0) => {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_2 = tmp3;
              platformSkuId = tmp7;
              closure_129_0 = undefined;
              if (skuId.billingResult === onPurchasePending.OK) {
                if (closure_1_16 != null) {
                  closure_1_16(true);
                }
              } else {
                platformSkuId(analyticsLocations[10]).unsubscribe("GPLAY_PURCHASE_VERIFIED", callback);
                if (null != orderId) {
                  let obj1 = { orderId, platformSkuId, skuId };
                  giftParams.info(
                    "[handleGPlayUpdatePurchaseAction] User canceled purchase, canceling order signing",
                    obj1,
                  );
                  c4 = 1;
                  c5 = 2;
                  v3 = 1;
                  const obj2 = { value: skuId(analyticsLocations[11]).cancelOrderSigning(orderId), done: false };
                  return obj2;
                }
                const obj11 = platformSkuId(analyticsLocations[10]);
              }
              closure_1_8();
              v3 = 3;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            closure_129_1 = closure_3;
            obj1 = skuId(analyticsLocations[12]);
            const obj3 = { tags: { source: "useMobilePurchaseSKU_cancelOrderSigning" }, extra: null };
            const obj4 = { orderId };
            obj3.extra = obj4;
            const result = obj1.captureBillingException(closure_129_1, obj3);
            const obj5 = { error: closure_129_1, orderId, skuId };
            giftParams.error("Failed to cancel order signing", obj5);
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            v3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_129_0 = value;
            if (closure_1_13 != null) {
              tmp10(closure_129_0);
            }
            c4 = 0;
          }
          if (closure_1_16 != null) {
            closure_1_16(false);
          }
          v3();
        } catch (tmp45) {
          closure_3 = tmp45;
          if (tmp4 === c4) {
            v3 = tmp2;
            throw tmp45;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const items3 = [callback, onPurchaseError, onPurchasePending, tmp6, orderId, tmp3, platformSkuId, skuId];
  callback3 = analyticsData.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items3);
  const items4 = [callback3, callback, callback1];
  const effect = analyticsData.useEffect(() => {
    const subscription = DispatcherDefault.subscribe("GPLAY_UPDATE_PURCHASE_STATE", callback3);
    const subscription1 = DispatcherDefault.subscribe("GPLAY_PURCHASE_VERIFIED", callback);
    const subscription2 = DispatcherDefault.subscribe("GPLAY_PURCHASE_VERIFICATION_FAILED", callback1);
    return () => {
      platformSkuId(analyticsLocations[10]).unsubscribe("GPLAY_UPDATE_PURCHASE_STATE", callback3);
      const obj = platformSkuId(analyticsLocations[10]);
      platformSkuId(analyticsLocations[10]).unsubscribe("GPLAY_PURCHASE_VERIFIED", callback);
      const obj2 = platformSkuId(analyticsLocations[10]);
      platformSkuId(analyticsLocations[10]).unsubscribe("GPLAY_PURCHASE_VERIFICATION_FAILED", callback1);
    };
  }, items4);
  const items5 = [
    skuId,
    platformSkuId,
    tmp8,
    flag2,
    handlePremiumPurchase,
    onPurchaseComplete,
    onPurchaseError,
    freePurchaseCallback,
    analyticsLoadId,
    analyticsLocations,
    analyticsData,
    giftParams,
    callback2,
    flag,
    tmp4,
    tmp5,
    tmp6,
    orderId,
  ];
  return analyticsData.useCallback(
    asyncGeneratorStep(async () => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp8 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp9;
              let tmp52;
              if (closure_15 != null) {
                tmp52 = closure_15();
              }
              if (true === tmp52) {
                const _Error2 = Error;
                const error = new Error("Purchase already in progress");
                throw error;
              } else {
                if (obj17.isNullOrEmpty(platformSkuId)) {
                  const _Error = Error;
                  const error1 = new Error("Missing google play sku ID");
                  throw error1;
                } else {
                  c4 = 1;
                  if (closure_16 != null) {
                    closure_16(true);
                  }
                  if (closure_17) {
                    if (flag) {
                      if (!flag2) {
                        c4 = 3;
                        let purchaseSKU = freePurchaseCallback;
                        if (freePurchaseCallback == null) {
                          purchaseSKU = purchaseSKU(tmp4[14]).purchaseSKU;
                        }
                        const obj1 = { expectedAmount: 0, expectedCurrency: constants.USD, loadId: null };
                        let obj8 = purchaseSKU(tmp4[15]);
                        obj1.loadId = obj8.v4();
                        c5 = 4;
                        c6 = 1;
                        let obj2 = { value: purchaseSKU("collectibles", closure_0, obj1), done: false };
                        return obj2;
                      }
                    }
                  }
                  if (null != orderId) {
                    c4 = 4;
                    c5 = 6;
                    c6 = 1;
                    const obj3 = { value: purchaseSKU(tmp4[11]).markOrderAsSigningInProgress(orderId), done: false };
                    return obj3;
                  }
                }
                obj17 = purchaseSKU(tmp4[13]);
              }
            }
          } else if (1 === tmp9) {
            c4 = 0;
            closure_129_2 = closure_3;
            if (closure_130_16 != null) {
              closure_130_16(false);
            }
            throw closure_129_2;
          } else if (2 === tmp9) {
            c4 = 1;
            if (closure_130_16 != null) {
              closure_130_16(false);
            }
            throw closure_3;
          } else if (3 === tmp9) {
            c4 = 2;
            closure_129_0 = closure_3;
            closure_130_6();
            throw closure_129_0;
          } else {
            if (4 === tmp9) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 1;
                if (closure_130_16 != null) {
                  closure_130_16(false);
                }
                c4 = 0;
                c6 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                if (closure_130_14 != null) {
                  closure_130_14();
                }
                closure_130_5();
                c4 = 1;
                if (closure_130_16 != null) {
                  closure_130_16(false);
                }
              }
            } else if (5 === tmp9) {
              c4 = 1;
              closure_129_1 = closure_3;
              obj2 = purchaseSKU(tmp4[12]);
              const obj5 = { tags: { source: "useMobilePurchaseSKU_markSigning" }, extra: null };
              const obj6 = { orderId: closure_130_11 };
              obj5.extra = obj6;
              const result = obj2.captureBillingException(closure_129_1, obj5);
              const obj7 = { error: closure_129_1, skuId: closure_130_0, orderId: closure_130_11 };
              logger.error("Failed to mark order signing-in-progress", obj7);
              throw closure_129_1;
            } else if (6 === tmp9) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                obj8 = { value, done: true };
                return obj8;
              } else {
                c4 = 1;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              obj = { value, done: true };
              return obj;
            }
            c4 = 0;
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
          const obj9 = {
            productId: closure_130_1,
            skuId: closure_130_0,
            isOneTimePurchase: true,
            analyticsLoadId: closure_130_3,
            analyticsLocations: closure_130_2,
            analyticsData: closure_130_4,
            isGift: closure_130_18,
            giftInfoOptions: null,
            onPurchaseError: null,
          };
          let options;
          if (closure_130_9 != null) {
            options = closure_130_9.options;
          }
          obj9.giftInfoOptions = options;
          obj9.onPurchaseError = closure_130_21;
          c5 = 7;
          c6 = 1;
          const obj10 = { value: closure_130_12(obj9), done: false };
          return obj10;
        } catch (tmp88) {
          closure_3 = tmp88;
          if (tmp5 === c4) {
            c6 = tmp3;
            throw tmp88;
          } else if (tmp2 === tmp90) {
            c5 = tmp2;
          } else if (tmp === tmp90) {
            c5 = tmp;
          } else if (tmp3 === tmp90) {
            c5 = tmp3;
          } else {
            c5 = tmp6;
          }
        }
      }
    }),
    items5,
  );
}

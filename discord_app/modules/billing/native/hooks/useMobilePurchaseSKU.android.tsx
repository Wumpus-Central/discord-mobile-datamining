// === Module 10557: useMobilePurchaseSKU ===

// Module 10557 (useMobilePurchaseSKU)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 6932 */;
import NativeCheckoutStore from "NativeCheckoutStore" /* 6943 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

let closure_3, v3;

let closure_5 = NativeCheckoutStore.useNativeCheckoutStoreOrNull;
const CurrencyCodes = Constants.CurrencyCodes;
const metroImportAll = Constants2.GPlayBillingResult;
const tmp2 = new LoggerDefault("useMobilePurchaseSKU.android");
let closure_9 = tmp2;
let result = size.fileFinishedImporting("modules/billing/native/hooks/useMobilePurchaseSKU.android.tsx");

export default function useMobilePurchaseSKU(skuId) {
  skuId = skuId.skuId;
  const platformSkuId = skuId.platformSkuId;
  let analyticsLocations = skuId.analyticsLocations;
  let analyticsLoadId = skuId.analyticsLoadId;
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
  const tmp = analyticsLocations;
  let obj2 = skuId(analyticsLocations[7]);
  const handlePremiumPurchase = obj2.useHandlePremiumPurchase();
  const tmp3 = onPurchaseComplete((setOrder) => setOrder.setOrder);
  let closure_13 = tmp3;
  const tmp4 = onPurchaseComplete((setCheckoutSucceeded) => setCheckoutSucceeded.setCheckoutSucceeded);
  let closure_14 = tmp4;
  const tmp5 = onPurchaseComplete((getPurchaseInFlight) => getPurchaseInFlight.getPurchaseInFlight);
  let closure_15 = tmp5;
  const tmp6 = onPurchaseComplete((setPurchaseInFlight) => setPurchaseInFlight.setPurchaseInFlight);
  let closure_16 = tmp6;
  let tmp7 = onPurchaseComplete((contextMetadata) => contextMetadata.contextMetadata.loadId);
  const tmp8 = undefined !== currentUser && currentUser.isStaff();
  let closure_17 = tmp8;
  let flag2;
  const tmp9 = platformSkuId(tmp[8])(() => {
    const obj = skuId(analyticsLocations[9]);
    return obj.getNewAnalyticsLoadId();
  });
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
    analyticsLoadId = tmp7;
  }
  const items = [onPurchaseComplete, tmp4, tmp6];
  callback = analyticsData.useCallback(() => {
    const obj = DispatcherDefault;
    obj.unsubscribe("GPLAY_PURCHASE_VERIFIED", callback);
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
    const obj = DispatcherDefault;
    obj.unsubscribe("GPLAY_PURCHASE_VERIFIED", callback);
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
  const useCallback = analyticsData.useCallback;
  let closure_0 = analyticsLoadId((skuId) => {
    let closure_1;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      let obj7;
      let obj9;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let error;
          v3 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              error = tmp4;
              skuId = undefined;
              if (skuId.billingResult === constants.OK) {
                if (closure_1_16 != null) {
                  closure_1_16(true);
                }
              } else {
                const obj11 = platformSkuId(analyticsLocations[10]);
                obj11.unsubscribe("GPLAY_PURCHASE_VERIFIED", closure_1_19);
                if (null != orderId) {
                  if (skuId.isActivePurchase) {
                    if (skuId.billingResult === tmp50.USER_CANCELED) {
                      const obj5 = { orderId, platformSkuId: error, skuId };
                      logger.info("[handleGPlayUpdatePurchaseAction] User canceled purchase, canceling order signing", obj5);
                      c4 = 1;
                      c5 = 2;
                      v3 = 1;
                      const obj6 = { value: obj7.cancelOrderSigning(orderId), done: false };
                      obj7 = skuId(analyticsLocations[11]);
                      return obj6;
                    }
                  }
                }
              }
              closure_1_8();
              v3 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (1 === c5) {
            c4 = 0;
            error = closure_3;
            const obj8 = { tags: { source: "useMobilePurchaseSKU_cancelOrderSigning" }, extra: obj9 };
            obj9 = { orderId };
            const obj2 = skuId(analyticsLocations[12]);
            const result = obj2.captureBillingException(error, obj8);
            const obj10 = { error, orderId, skuId };
            logger.error("Failed to cancel order signing", obj10);
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            v3 = 3;
            return { value, done: true };
          } else {
            skuId = value;
            if (closure_1_13 != null) {
              tmp7(skuId);
            }
            c4 = 0;
          }
          if (closure_1_16 != null) {
            closure_1_16(false);
          }
          v3();
        } catch (tmp42) {
          closure_3 = tmp42;
          if (0 === c4) {
            v3 = 3;
            throw tmp42;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  const items3 = [callback, onPurchaseError, onPurchasePending, tmp6, orderId, tmp3, platformSkuId, skuId];
  callback3 = useCallback(function() {
    return closure_0(...arguments);
  }, items3);
  const items4 = [callback3, callback, callback1];
  const effect = analyticsData.useEffect(() => {
    let obj = DispatcherDefault;
    const subscription = obj.subscribe("GPLAY_UPDATE_PURCHASE_STATE", callback3);
    let obj2 = DispatcherDefault;
    const subscription1 = obj2.subscribe("GPLAY_PURCHASE_VERIFIED", callback);
    let obj3 = DispatcherDefault;
    const subscription2 = obj3.subscribe("GPLAY_PURCHASE_VERIFICATION_FAILED", callback1);
    return () => {
      const obj = platformSkuId(analyticsLocations[10]);
      obj.unsubscribe("GPLAY_UPDATE_PURCHASE_STATE", callback3);
      const obj2 = platformSkuId(analyticsLocations[10]);
      obj2.unsubscribe("GPLAY_PURCHASE_VERIFIED", callback);
      const obj3 = platformSkuId(analyticsLocations[10]);
      obj3.unsubscribe("GPLAY_PURCHASE_VERIFICATION_FAILED", callback1);
    };
  }, items4);
  const items5 = [skuId, platformSkuId, tmp8, flag2, handlePremiumPurchase, onPurchaseComplete, onPurchaseError, freePurchaseCallback, analyticsLoadId, analyticsLocations, analyticsData, giftParams, callback2, flag, tmp4, tmp5, tmp6, orderId];
  return analyticsData.useCallback(analyticsLoadId(function*() {
    let closure_2;
    let obj11;
    let obj13;
    let obj9;
    let options;
    let purchaseSKU;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let error;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            analyticsLocations = tmp;
            error = tmp4;
            let tmp47;
            if (closure_15 != null) {
              tmp47 = closure_15();
            }
            if (true === tmp47) {
              const _Error2 = Error;
              const self3 = this;
              const self4 = this;
              error = new Error("Purchase already in progress");
              throw error;
            } else {
              const obj17 = purchaseSKU(analyticsLocations[13]);
              if (obj17.isNullOrEmpty(platformSkuId)) {
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error1 = new Error("Missing google play sku ID");
                throw error1;
              } else {
                c4 = 1;
                if (closure_16 != null) {
                  closure_16(true);
                }
                if (closure_17) {
                  if (true) {
                    if (!false) {
                      c4 = 3;
                      purchaseSKU = freePurchaseCallback;
                      if (freePurchaseCallback == null) {
                        purchaseSKU = purchaseSKU(analyticsLocations[14]).purchaseSKU;
                      }
                      const obj5 = { expectedAmount: 0, expectedCurrency: constants.USD, loadId: obj9.v4() };
                      obj9 = purchaseSKU(analyticsLocations[15]);
                      c5 = 4;
                      c6 = 1;
                      const obj6 = { value: purchaseSKU("collectibles", skuId, obj5), done: false };
                      return obj6;
                    }
                  }
                }
                if (null != orderId) {
                  c4 = 4;
                  c5 = 6;
                  c6 = 1;
                  const obj7 = { value: obj13.markOrderAsSigningInProgress(orderId), done: false };
                  obj13 = purchaseSKU(analyticsLocations[11]);
                  return obj7;
                }
              }
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          analyticsLocations = closure_3;
          if (closure_130_16 != null) {
            closure_130_16(false);
          }
          throw analyticsLocations;
        } else if (2 === c5) {
          c4 = 1;
          const tmp37 = closure_3;
          if (closure_130_16 != null) {
            closure_130_16(false);
          }
          throw tmp37;
        } else if (3 === c5) {
          c4 = 2;
          let closure_0 = closure_3;
          closure_130_6();
          throw closure_0;
        } else {
          if (4 === c5) {
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
              const obj8 = { value, done: true };
              return obj8;
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
          } else if (5 === c5) {
            c4 = 1;
            error = closure_3;
            const obj10 = { tags: { source: "useMobilePurchaseSKU_markSigning" }, extra: obj11 };
            obj11 = { orderId: closure_130_11 };
            const obj3 = purchaseSKU(analyticsLocations[12]);
            const result = obj3.captureBillingException(error, obj10);
            const obj12 = { error, skuId: closure_130_0, orderId: closure_130_11 };
            logger.error("Failed to mark order signing-in-progress", obj12);
            throw error;
          } else if (6 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj14 = { value, done: true };
              return obj14;
            } else {
              c4 = 1;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c4 = 0;
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
        const obj15 = { productId: closure_130_1, skuId: closure_130_0, isOneTimePurchase: true, analyticsLoadId: closure_130_3, analyticsLocations: closure_130_2, analyticsData: closure_130_4, isGift: closure_130_18, giftInfoOptions: options, onPurchaseError: closure_130_21 };
        options = undefined;
        if (closure_130_9 != null) {
          options = closure_130_9.options;
        }
        c5 = 7;
        c6 = 1;
        const obj16 = { value: closure_130_12(obj15), done: false };
        return obj16;
      } catch (tmp79) {
        closure_3 = tmp79;
        if (0 === c4) {
          c6 = 3;
          throw tmp79;
        } else if (1 === c4) {
          c5 = 1;
        } else if (2 === c4) {
          c5 = 2;
        } else if (3 === c4) {
          c5 = 3;
        } else {
          c5 = 5;
        }
      }
    }
  }), items5);
};
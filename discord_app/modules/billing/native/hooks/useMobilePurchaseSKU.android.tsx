// === Module 10589: useMobilePurchaseSKU ===

// Module 10589 (useMobilePurchaseSKU)
import timestampDefault from "timestamp" /* 3 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import { useNativeCheckoutStoreOrNull as closure_5 } from "context" /* 7169 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import { CurrencyCodes } from "ME" /* 676 */;

const require = arg1;
require("GPlayConnectionState").GPlayBillingResult;
let closure_9 = new timestampDefault("useMobilePurchaseSKU.android");
const tmp2 = new timestampDefault("useMobilePurchaseSKU.android");
let result = require("set").fileFinishedImporting("modules/billing/native/hooks/useMobilePurchaseSKU.android.tsx");

export default function useMobilePurchaseSKU(skuId) {
  skuId = skuId.skuId;
  let _require = skuId;
  const platformSkuId = skuId.platformSkuId;
  const analyticsLocations = skuId.analyticsLocations;
  let analyticsLoadId = skuId.analyticsLoadId;
  let callback = analyticsLoadId;
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
  let handlePremiumPurchase;
  closure_13 = undefined;
  closure_14 = undefined;
  closure_15 = undefined;
  closure_16 = undefined;
  closure_17 = undefined;
  let flag2;
  callback = undefined;
  let callback1;
  let callback2;
  let callback3;
  const currentUser = onPurchaseError.getCurrentUser();
  handlePremiumPurchase = _require(analyticsLocations[7]).useHandlePremiumPurchase();
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
  flag2 = undefined;
  let obj2 = _require(analyticsLocations[7]);
  const tmp = analyticsLocations;
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
    callback = tmp7;
    analyticsLoadId = tmp7;
  }
  const items = [onPurchaseComplete, tmp4, tmp6];
  callback = analyticsData.useCallback(() => {
    platformSkuId(analyticsLocations[10]).unsubscribe("GPLAY_PURCHASE_VERIFIED", callback);
    if (closure_16 != null) {
      tmp2(false);
    }
    if (callback2 != null) {
      callback2();
    }
    onPurchaseComplete();
  }, items);
  const items1 = [onPurchaseError, callback, tmp6];
  callback1 = analyticsData.useCallback(() => {
    platformSkuId(analyticsLocations[10]).unsubscribe("GPLAY_PURCHASE_VERIFIED", callback);
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
  _require = undefined;
  _require = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp3;
              closure_1 = tmp7;
              let lib;
              if (lib.billingResult === onPurchasePending.OK) {
                if (closure_1_16 != null) {
                  closure_1_16(true);
                }
              } else {
                platformSkuId(analyticsLocations[10]).unsubscribe("GPLAY_PURCHASE_VERIFIED", closure_1_19);
                if (null != closure_1_11) {
                  obj1 = { orderId: null, platformSkuId: null, skuId: null };
                  obj1[0] = closure_1_11;
                  obj1[1] = closure_1_1;
                  obj1[2] = lib;
                  giftParams.info("[handleGPlayUpdatePurchaseAction] User canceled purchase, canceling order signing", obj1);
                  c4 = 1;
                  c5 = 2;
                  v0 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = lib(analyticsLocations[11]).cancelOrderSigning(closure_1_11);
                  return obj2;
                }
                const obj11 = platformSkuId(analyticsLocations[10]);
              }
              closure_1_8();
              v0 = 3;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            closure_1 = closure_3;
            obj1 = lib(analyticsLocations[12]);
            const obj3 = { tags: null, extra: null };
            obj3[0] = { source: "useMobilePurchaseSKU_cancelOrderSigning" };
            const obj4 = { orderId: null };
            obj4[0] = closure_1_11;
            obj3[1] = obj4;
            const result = obj1.captureBillingException(closure_1, obj3);
            const obj5 = { error: null, orderId: null, skuId: null };
            obj5[0] = closure_1;
            obj5[1] = closure_1_11;
            obj5[2] = lib;
            giftParams.error("Failed to cancel order signing", obj5);
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            lib = arg1;
            if (closure_1_13 != null) {
              tmp10(lib);
            }
            c4 = 0;
          }
          if (closure_1_16 != null) {
            closure_1_16(false);
          }
          v0();
        } catch (tmp45) {
          closure_3 = tmp45;
          if (tmp4 === c4) {
            v0 = tmp2;
            throw tmp45;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const items3 = [callback, onPurchaseError, onPurchasePending, tmp6, orderId, tmp3, platformSkuId, skuId];
  callback3 = analyticsData.useCallback(function() {
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
    const subscription = platformSkuId(analyticsLocations[10]).subscribe("GPLAY_UPDATE_PURCHASE_STATE", callback3);
    let obj = platformSkuId(analyticsLocations[10]);
    const subscription1 = platformSkuId(analyticsLocations[10]).subscribe("GPLAY_PURCHASE_VERIFIED", callback);
    let obj2 = platformSkuId(analyticsLocations[10]);
    const subscription2 = platformSkuId(analyticsLocations[10]).subscribe("GPLAY_PURCHASE_VERIFICATION_FAILED", callback1);
    return () => {
      closure_1_1(closure_1_2[10]).unsubscribe("GPLAY_UPDATE_PURCHASE_STATE", closure_22);
      const obj = closure_1_1(closure_1_2[10]);
      closure_1_1(closure_1_2[10]).unsubscribe("GPLAY_PURCHASE_VERIFIED", closure_19);
      const obj2 = closure_1_1(closure_1_2[10]);
      closure_1_1(closure_1_2[10]).unsubscribe("GPLAY_PURCHASE_VERIFICATION_FAILED", closure_20);
    };
  }, items4);
  const items5 = [skuId, platformSkuId, tmp8, flag2, handlePremiumPurchase, onPurchaseComplete, onPurchaseError, freePurchaseCallback, analyticsLoadId, analyticsLocations, analyticsData, giftParams, callback2, flag, tmp4, tmp5, tmp6, orderId];
  return analyticsData.useCallback(callback(function*() {
    if (v02 === 2) {
      v02 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp8 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v02 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            v02 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v02 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_2 = tmp4;
            closure_1 = tmp9;
            let tmp52;
            if (closure_1_15 != null) {
              tmp52 = closure_1_15();
            }
            if (true === tmp52) {
              const _Error2 = Error;
              error = new Error("Purchase already in progress");
              throw error;
            } else {
              if (obj17.isNullOrEmpty(closure_1_1)) {
                const _Error = Error;
                const error1 = new Error("Missing google play sku ID");
                throw error1;
              } else {
                c4 = 1;
                if (closure_1_16 != null) {
                  closure_1_16(true);
                }
                if (closure_1_17) {
                  if (closure_1_10) {
                    if (!closure_1_18) {
                      c4 = 3;
                      callback = closure_1_7;
                      if (closure_1_7 == null) {
                        callback = closure_1_0(closure_1_2[14]).purchaseSKU;
                      }
                      obj1 = { expectedAmount: 0, expectedCurrency: null, loadId: null };
                      obj1[1] = closure_1_7.USD;
                      let obj8 = closure_1_0(closure_1_2[15]);
                      obj1[2] = obj8.v4();
                      v0 = 4;
                      v02 = 1;
                      let obj2 = { value: null, done: false };
                      obj2[0] = callback("collectibles", closure_1_0, obj1);
                      return obj2;
                    }
                  }
                }
                if (null != closure_1_11) {
                  c4 = 4;
                  v0 = 6;
                  v02 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = closure_1_0(closure_1_2[11]).markOrderAsSigningInProgress(closure_1_11);
                  return obj3;
                }
              }
              obj17 = closure_1_0(closure_1_2[13]);
            }
          }
        } else if (1 === tmp9) {
          c4 = 0;
          closure_2 = closure_3;
          if (callback3 != null) {
            callback3(false);
          }
          throw closure_2;
        } else if (2 === tmp9) {
          c4 = 1;
          if (closure_1_16 != null) {
            closure_1_16(false);
          }
          throw closure_3;
        } else if (3 === tmp9) {
          c4 = 2;
          callback = closure_3;
          v02();
          throw callback;
        } else {
          if (4 === tmp9) {
            if (arg0 === 1) {
              v02 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 1;
              if (callback3 != null) {
                callback3(false);
              }
              c4 = 0;
              v02 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              if (callback2 != null) {
                callback2();
              }
              v0();
              c4 = 1;
              if (callback3 != null) {
                callback3(false);
              }
            }
          } else if (5 === tmp9) {
            c4 = 1;
            closure_1 = closure_3;
            obj2 = closure_1_0(closure_1_2[12]);
            const obj5 = { tags: null, extra: null };
            obj5[0] = { source: "useMobilePurchaseSKU_markSigning" };
            const obj6 = { orderId: null };
            obj6[0] = closure_11;
            obj5[1] = obj6;
            const result = obj2.captureBillingException(closure_1, obj5);
            const obj7 = { error: null, skuId: null, orderId: null };
            obj7[0] = closure_1;
            obj7[1] = callback;
            obj7[2] = closure_11;
            closure_1_9.error("Failed to mark order signing-in-progress", obj7);
            throw closure_1;
          } else if (6 === tmp9) {
            if (arg0 === 1) {
              v02 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              v02 = 3;
              obj8 = { value: null, done: true };
              obj8[0] = arg1;
              return obj8;
            } else {
              c4 = 1;
            }
          } else if (arg0 === 1) {
            v02 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            v02 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c4 = 0;
          v02 = 3;
          return { value: "HermesInternal", done: null };
        }
        const obj9 = { productId: null, skuId: null, isOneTimePurchase: true, analyticsLoadId: null, analyticsLocations: null, analyticsData: null, isGift: null, giftInfoOptions: null, onPurchaseError: null };
        obj9[0] = closure_1;
        obj9[1] = callback;
        obj9[3] = closure_3;
        obj9[4] = closure_2;
        obj9[5] = c4;
        obj9[6] = closure_18;
        let options;
        if (options != null) {
          options = options.options;
        }
        obj9[7] = options;
        obj9[8] = closure_21;
        v0 = 7;
        v02 = 1;
        const obj10 = { value: null, done: false };
        obj10[0] = closure_12(obj9);
        return obj10;
      } catch (tmp88) {
        closure_3 = tmp88;
        if (tmp5 === c4) {
          v02 = tmp3;
          throw tmp88;
        } else if (tmp2 === tmp90) {
          v0 = tmp2;
        } else if (tmp === tmp90) {
          v0 = tmp;
        } else if (tmp3 === tmp90) {
          v0 = tmp3;
        } else {
          v0 = tmp6;
        }
      }
    }
  }), items5);
};
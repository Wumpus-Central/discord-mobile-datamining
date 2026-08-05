// discord_app/modules/billing/native/hooks/useMobilePurchaseSKU.android.tsx
import GPlayConnectionState from "GPlayConnectionState";
import noop from "noop";
import { useNativeCheckoutStoreOrNull as closure_5 } from "context";
import mergeGuildAvatar from "mergeGuildAvatar";
import { CurrencyCodes } from "ME";
import { GPlayBillingResult as metroImportAll } from "GPlayConnectionState";

const require = arg1;
let c9 = new require("mergeGuildAvatar")("useMobilePurchaseSKU.android");
const tmp2 = new require("mergeGuildAvatar")("useMobilePurchaseSKU.android");
let result = require("context").fileFinishedImporting("modules/billing/native/hooks/useMobilePurchaseSKU.android.tsx");

export default function useMobilePurchaseSKU(skuId) {
  skuId = skuId.skuId;
  let _require = skuId;
  const platformSkuId = skuId.platformSkuId;
  const analyticsLocations = skuId.analyticsLocations;
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
  let handlePremiumPurchase;
  let androidShopOrdersEnabled;
  let c14;
  let c15;
  let closure_16;
  let c17;
  let flag2;
  let callback;
  let callback1;
  let callback2;
  const currentUser = onPurchaseError.getCurrentUser();
  handlePremiumPurchase = _require(analyticsLocations[7]).useHandlePremiumPurchase();
  let obj2 = _require(analyticsLocations[7]);
  let tmp = analyticsLocations;
  androidShopOrdersEnabled = _require(analyticsLocations[8]).useAndroidShopOrdersEnabled({ location: "useMobilePurchaseSKU" });
  const tmp4 = onPurchaseComplete((setOrder) => setOrder.setOrder);
  c14 = tmp4;
  const tmp5 = onPurchaseComplete((setCheckoutSucceeded) => setCheckoutSucceeded.setCheckoutSucceeded);
  c15 = tmp5;
  closure_16 = analyticsData.useRef(false);
  const tmp6 = undefined !== currentUser && currentUser.isStaff();
  c17 = tmp6;
  const tmp7 = platformSkuId(tmp[9])(() => callback(analyticsLocations[10]).getNewAnalyticsLoadId());
  flag2 = undefined;
  if (giftParams != null) {
    flag2 = giftParams.isGift;
  }
  if (flag2 == null) {
    flag2 = false;
  }
  if (null == analyticsLoadId) {
    analyticsLoadId = tmp7;
    analyticsLoadId = tmp7;
  }
  const items = [onPurchaseComplete, tmp5];
  callback = obj4.useCallback(() => {
    platformSkuId(analyticsLocations[11]).unsubscribe("GPLAY_PURCHASE_VERIFIED", callback);
    closure_16.current = false;
    if (_undefined != null) {
      _undefined();
    }
    onPurchaseComplete();
  }, items);
  const items1 = [onPurchaseError, callback];
  callback1 = obj4.useCallback(() => {
    platformSkuId(analyticsLocations[11]).unsubscribe("GPLAY_PURCHASE_VERIFIED", callback);
    closure_16.current = false;
    onPurchaseError();
  }, items1);
  _require = undefined;
  _require = analyticsLoadId((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
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
          return { value: "T", done: null };
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
              let closure_2 = tmp3;
              let closure_1 = tmp7;
              let lib;
              if (lib.billingResult === onPurchasePending.OK) {
                outer1_8();
                v0 = 3;
                return { value: "T", done: null };
              } else {
                let obj5 = platformSkuId(analyticsLocations[11]);
                obj5.unsubscribe("GPLAY_PURCHASE_VERIFIED", outer1_19);
                if (null != outer1_11) {
                  if (outer1_13) {
                    if (tmp58.isActivePurchase) {
                      if (tmp58.billingResult === tmp59.USER_CANCELED) {
                        let obj1 = { orderId: null, platformSkuId: null, skuId: null };
                        obj1[0] = outer1_11;
                        obj1[1] = outer1_1;
                        obj1[2] = lib;
                        giftParams.info("[handleGPlayUpdatePurchaseAction] User canceled purchase, canceling order signing", obj1);
                        let c4 = 1;
                        c5 = 2;
                        v0 = 1;
                        const obj2 = { value: null, done: false };
                        obj2[0] = lib(analyticsLocations[12]).cancelOrderSigning(outer1_11);
                        return obj2;
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              closure_1 = GPlayConnectionState;
              obj1 = lib(analyticsLocations[13]);
              const obj3 = { tags: null, extra: null };
              obj3[0] = { source: "useMobilePurchaseSKU_cancelOrderSigning" };
              const obj4 = { orderId: null };
              obj4[0] = outer1_11;
              obj3[1] = obj4;
              const result = obj1.captureBillingException(closure_1, obj3);
              obj5 = { error: null, orderId: null, skuId: null };
              obj5[0] = closure_1;
              obj5[1] = outer1_11;
              obj5[2] = lib;
              giftParams.error("Failed to cancel order signing", obj5);
            } else if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              lib = arg1;
              if (outer1_14 != null) {
                tmp10(lib);
              }
              c4 = 0;
            }
            c4 = 0;
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          outer1_16.current = false;
          v0();
        } catch (tmp49) {
          GPlayConnectionState = tmp49;
          if (tmp4 === c4) {
            v0 = tmp2;
            throw tmp49;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const items2 = [callback, onPurchaseError, onPurchasePending, orderId, androidShopOrdersEnabled, tmp4, platformSkuId, skuId];
  callback2 = obj4.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  const items3 = [callback2, callback, callback1];
  const effect = obj4.useEffect(() => {
    const subscription = platformSkuId(analyticsLocations[11]).subscribe("GPLAY_UPDATE_PURCHASE_STATE", callback2);
    let obj = platformSkuId(analyticsLocations[11]);
    const subscription1 = platformSkuId(analyticsLocations[11]).subscribe("GPLAY_PURCHASE_VERIFIED", callback);
    let obj2 = platformSkuId(analyticsLocations[11]);
    const subscription2 = platformSkuId(analyticsLocations[11]).subscribe("GPLAY_PURCHASE_VERIFICATION_FAILED", callback1);
    return () => {
      outer1_1(outer1_2[11]).unsubscribe("GPLAY_UPDATE_PURCHASE_STATE", closure_21);
      const obj = outer1_1(outer1_2[11]);
      outer1_1(outer1_2[11]).unsubscribe("GPLAY_PURCHASE_VERIFIED", closure_19);
      const obj2 = outer1_1(outer1_2[11]);
      outer1_1(outer1_2[11]).unsubscribe("GPLAY_PURCHASE_VERIFICATION_FAILED", closure_20);
    };
  }, items3);
  const items4 = [skuId, platformSkuId, tmp6, flag2, handlePremiumPurchase, onPurchaseComplete, onPurchaseError, freePurchaseCallback, analyticsLoadId, analyticsLocations, analyticsData, giftParams, flag, orderId, androidShopOrdersEnabled];
  return analyticsData.useCallback(analyticsLoadId(function*() {
    if (v02 === 2) {
      v02 = 3;
      HermesBuiltin.throwTypeError();
    } else {
      let tmp = arg1;
      tmp = arg0;
      tmp = tmp8;
      tmp = globalThis;
      tmp = null;
      if (tmp9 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
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
              let closure_2 = tmp4;
              let closure_1 = tmp10;
              tmp = outer1_16;
              if (outer1_16.current) {
                const _Error2 = Error;
                const error = new Error("Purchase already in progress");
                throw error;
              } else {
                let obj7 = outer1_0(outer1_2[14]);
                if (obj7.isNullOrEmpty(outer1_1)) {
                  const _Error = Error;
                  const error1 = new Error("Missing google play sku ID");
                  throw error1;
                } else {
                  let c4 = 2;
                  outer1_16.current = true;
                  if (outer1_17) {
                    if (outer1_10) {
                      if (!outer1_18) {
                        c4 = 4;
                        let callback = outer1_7;
                        if (outer1_7 == null) {
                          callback = outer1_0(outer1_2[15]).purchaseSKU;
                        }
                        const obj1 = { expectedAmount: 0, expectedCurrency: null, loadId: null };
                        obj1[1] = outer1_7.USD;
                        let obj9 = outer1_0(outer1_2[16]);
                        obj1[2] = obj9.v4();
                        v0 = 5;
                        v02 = 1;
                        let obj2 = { value: null, done: false };
                        obj2[0] = callback("collectibles", outer1_0, obj1);
                        return obj2;
                      }
                    }
                  }
                  if (null != outer1_11) {
                    if (outer1_13) {
                      c4 = 5;
                      v0 = 7;
                      v02 = 1;
                      const obj3 = { value: null, done: false };
                      obj3[0] = outer1_0(outer1_2[12]).markOrderAsSigningInProgress(outer1_11);
                      return obj3;
                    }
                  }
                }
              }
            }
          } else if (1 === tmp10) {
            c4 = 0;
            outer1_16.current = false;
            throw GPlayConnectionState;
          } else if (2 === tmp10) {
            c4 = 1;
            throw GPlayConnectionState;
          } else if (3 === tmp10) {
            c4 = 2;
            outer1_16.current = false;
            throw GPlayConnectionState;
          } else if (4 === tmp10) {
            c4 = 3;
            callback = GPlayConnectionState;
            v02();
            throw callback;
          } else {
            if (5 === tmp10) {
              if (arg0 === 1) {
                v02 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 2;
                closure_16.current = false;
                c4 = 0;
                closure_16.current = false;
                v02 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              } else {
                v0();
                c4 = 2;
                closure_16.current = false;
              }
            } else if (6 === tmp10) {
              c4 = 2;
              closure_1 = GPlayConnectionState;
              obj2 = outer1_0(outer1_2[13]);
              const obj5 = { tags: null, extra: null };
              obj5[0] = { source: "useMobilePurchaseSKU_markSigning" };
              const obj6 = { orderId: null };
              obj6[0] = closure_11;
              obj5[1] = obj6;
              const result = obj2.captureBillingException(closure_1, obj5);
              obj7 = { error: null, skuId: null, orderId: null };
              obj7[0] = closure_1;
              obj7[1] = callback;
              obj7[2] = closure_11;
              outer1_9.error("Failed to mark order signing-in-progress", obj7);
              throw closure_1;
            } else if (7 === tmp10) {
              if (arg0 === 1) {
                v02 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 0;
                closure_16.current = false;
                v02 = 3;
                const obj8 = { value: null, done: true };
                obj8[0] = arg1;
                return obj8;
              } else {
                c4 = 2;
              }
            } else if (arg0 === 1) {
              v02 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              tmp = closure_2;
              tmp = closure_16;
              closure_16.current = false;
              v02 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c4 = 0;
            closure_16.current = false;
            v02 = 3;
            return { value: "T", done: null };
          }
          obj9 = { productId: null, skuId: null, isOneTimePurchase: true, analyticsLoadId: null, analyticsLocations: null, analyticsData: null, isGift: null, giftInfoOptions: null, onPurchaseError: null };
          obj9[0] = closure_1;
          obj9[1] = callback;
          obj9[3] = GPlayConnectionState;
          obj9[4] = closure_2;
          obj9[5] = c4;
          obj9[6] = closure_18;
          let options;
          if (options != null) {
            options = options.options;
          }
          obj9[7] = options;
          obj9[8] = v02;
          v0 = 8;
          v02 = 1;
          const obj10 = { value: null, done: false };
          obj10[0] = closure_12(obj9);
          return obj10;
        } catch (tmp95) {
          GPlayConnectionState = tmp95;
          if (tmp5 === c4) {
            v02 = tmp3;
            throw tmp95;
          } else if (tmp2 === tmp97) {
            v0 = tmp2;
          } else if (tmp === tmp97) {
            v0 = tmp;
          } else if (tmp3 === tmp97) {
            v0 = tmp3;
          } else if (tmp7 === tmp97) {
            v0 = tmp7;
          } else {
            v0 = tmp6;
          }
        }
      }
    }
  }), items4);
};
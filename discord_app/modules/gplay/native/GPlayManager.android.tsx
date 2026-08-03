// === Module 6301: handleConnectionStateUpdated ===

// Module 6301 (handleConnectionStateUpdated)
import _objectWithoutProperties from "_objectWithoutProperties";
import closure_5 from "usePremiumPlanPurchasedStore";
import "SubscriptionPlans";
import get_ActivityIndicator from "getPlanIdForProduct";
import initialize from "initialize";
import usePremiumPlanPurchasedStore from "usePremiumPlanPurchasedStore";
import fetchFingerprint from "fetchFingerprint";
import reset from "reset";
import updateProduct from "updateProduct";
import { useGPlayAnalyticsStore } from "setGPlayAnalytics";
import GPlayConnectionState from "GPlayConnectionState";
import ME from "ME";
import { OrderStatus } from "CustomCheckoutFlow";
import { SubscriptionPlanInfo } from "GuildFeatures";
import { jsx } from "getOrders";

let NativeEventEmitter;
let NativeModules;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let error;
let map1;
let metroImportAll;
const require = arg1;
function handleConnectionStateUpdated(connectionState) {
  connectionState = connectionState.connectionState;
  importDefault(709).dispatch({ type: "GPLAY_UPDATE_CONNECTION_STATE", connectionState });
  if (connectionState === constants.CONNECTED) {
    const userCountry = require(6303) /* getPlanIdForProduct */.loadUserCountry();
    userCountry.finally(() => callback(table[17]).loadSkus());
    const obj2 = require(6303) /* getPlanIdForProduct */;
  }
}
function handlePurchaseStateUpdated(arg0) {
  let billingResult;
  let isActivePurchase;
  ({ billingResult, isActivePurchase } = arg0);
  importDefault(709).dispatch({ type: "GPLAY_UPDATE_PURCHASE_STATE", billingResult, isActivePurchase });
}
function handlePurchaseUpdated() {
  const self = this;
  const apply = _handlePurchaseUpdated.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handlePurchaseUpdated() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (function*(arg0) {
      if (length === 2) {
        length = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp9;
        throwTypeErrorResult = null;
        throwTypeErrorResult = globalThis;
        if (tmp10 === 3) {
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
            length = 2;
            switch (giftOptionsForKey) {
              case 0:
                if (arg0 === 1) {
                  length = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  length = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let closure_3 = tmp4;
                  let dependencyMap = tmp11;
                  let lib;
                  throwTypeErrorResult = lib;
                  lib = lib.purchase;
                  let callback;
                  dependencyMap = undefined;
                  closure_3 = undefined;
                  let callback2;
                  let planIdForGift;
                  giftOptionsForKey = undefined;
                  length = undefined;
                  let id;
                  let fetchFingerprint;
                  let succeededOnlyFields;
                  let purchasingProduct;
                  giftOptionsForKey = 1;
                  length = 1;
                  return { value: "ct", done: "Array" };
                }
              break;
              case 1:
                if (arg0 === 1) {
                  length = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  length = 3;
                  const obj1 = { value: null, done: true };
                  obj1[0] = arg1;
                  return obj1;
                } else {
                  throwTypeErrorResult = dependencyMap;
                  throwTypeErrorResult = closure_3;
                  throwTypeErrorResult = purchasingProduct;
                  throwTypeErrorResult = lib;
                  if (purchasingProduct.isPurchasingProduct(lib.productId)) {
                    length = 3;
                    return { value: "HermesInternal", done: null };
                  } else {
                    throwTypeErrorResult = dependencyMap;
                    throwTypeErrorResult = closure_3;
                    throwTypeErrorResult = state;
                    throwTypeErrorResult = lib;
                    callback = state.getState().analyticsByProductId[lib.productId];
                    throwTypeErrorResult = table2;
                    throwTypeErrorResult = lib;
                    dependencyMap = table2[lib.productId];
                    throwTypeErrorResult = callback;
                    throwTypeErrorResult = dependencyMap;
                    throwTypeErrorResult = lib;
                    closure_3 = callback(1217).v3(lib.purchaseToken);
                    throwTypeErrorResult = dependencyMap;
                    if (null != dependencyMap) {
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = closure_3;
                      throwTypeErrorResult = callback;
                      throwTypeErrorResult = dependencyMap;
                      let obj2 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION", key: null, giftOptions: null };
                      throwTypeErrorResult = closure_3;
                      obj2[1] = closure_3;
                      const obj3 = {};
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj3;
                      throwTypeErrorResult = Object.assign(dependencyMap);
                      obj2[2] = obj3;
                      throwTypeErrorResult = callback(709).dispatch(obj2);
                      const obj39 = callback(709);
                    } else {
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = closure_3;
                      throwTypeErrorResult = giftOptionsForKey;
                      throwTypeErrorResult = closure_3;
                      dependencyMap = giftOptionsForKey.getGiftOptionsForKey(closure_3);
                    }
                    throwTypeErrorResult = dependencyMap;
                    throwTypeErrorResult = closure_3;
                    planIdForGift = 2;
                    throwTypeErrorResult = callback;
                    throwTypeErrorResult = dependencyMap;
                    const obj38 = callback(1217);
                    let obj4 = { type: "GPLAY_VERIFICATION_START", productId: null };
                    throwTypeErrorResult = lib;
                    obj4[1] = lib.productId;
                    throwTypeErrorResult = callback(709).dispatch(obj4);
                    throwTypeErrorResult = lib;
                    throwTypeErrorResult = dependencyMap;
                    const IAPProductIds = lib(5679).IAPProductIds;
                    throwTypeErrorResult = lib;
                    if (IAPProductIds.includes(lib.productId)) {
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = closure_3;
                      planIdForGift = 3;
                      throwTypeErrorResult = callback;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      throwTypeErrorResult = dependencyMap;
                      const obj48 = callback(3775)();
                      callback2 = callback(3775)().subtract(lib(6226).DRAFT_ORDER_LOOKBACK_DAYS, "days").toISOString();
                      throwTypeErrorResult = lib;
                      throwTypeErrorResult = dependencyMap;
                      const subtractResult = callback(3775)().subtract(lib(6226).DRAFT_ORDER_LOOKBACK_DAYS, "days");
                      throwTypeErrorResult = lib;
                      planIdForGift = lib(5679).getPlanIdForGift(lib.productId);
                      throwTypeErrorResult = planIdForGift;
                      throwTypeErrorResult = undefined;
                      if (null != planIdForGift) {
                        throwTypeErrorResult = dependencyMap;
                        throwTypeErrorResult = closure_3;
                        throwTypeErrorResult = table;
                        throwTypeErrorResult = planIdForGift;
                        throwTypeErrorResult = table[planIdForGift];
                        throwTypeErrorResult = undefined;
                        if (throwTypeErrorResult != null) {
                          throwTypeErrorResult = throwTypeErrorResult.skuId;
                        }
                      }
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = closure_3;
                      giftOptionsForKey = throwTypeErrorResult;
                      throwTypeErrorResult = lib;
                      throwTypeErrorResult = dependencyMap;
                      const obj50 = lib(5679);
                      const obj5 = { status: null, createdAfter: null, skuId: null, paymentGateway: null, isGift: true };
                      throwTypeErrorResult = constants4;
                      obj5[0] = constants4.DRAFT;
                      throwTypeErrorResult = callback2;
                      obj5[1] = callback2;
                      throwTypeErrorResult = giftOptionsForKey;
                      obj5[2] = giftOptionsForKey;
                      throwTypeErrorResult = constants3;
                      obj5[3] = constants3.GOOGLE;
                      giftOptionsForKey = 5;
                      length = 1;
                      let obj6 = { value: null, done: false };
                      obj6[0] = lib(6226).getOrders(obj5);
                      return obj6;
                    } else {
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = closure_3;
                      throwTypeErrorResult = lib;
                      throwTypeErrorResult = constants;
                      if (lib.purchaseState === constants.PENDING) {
                        planIdForGift = 0;
                        throwTypeErrorResult = dependencyMap;
                        throwTypeErrorResult = closure_3;
                        throwTypeErrorResult = callback;
                        throwTypeErrorResult = dependencyMap;
                        let obj7 = { type: "GPLAY_VERIFICATION_END", productId: null };
                        throwTypeErrorResult = lib;
                        obj7[1] = lib.productId;
                        throwTypeErrorResult = callback(709).dispatch(obj7);
                        length = 3;
                        return { value: "HermesInternal", done: null };
                      } else {
                        throwTypeErrorResult = dependencyMap;
                        throwTypeErrorResult = closure_3;
                        throwTypeErrorResult = lib;
                        throwTypeErrorResult = dependencyMap;
                        throwTypeErrorResult = lib;
                        throwTypeErrorResult = dependencyMap;
                        giftOptionsForKey = 7;
                        length = 1;
                        const obj8 = { value: null, done: false };
                        obj8[0] = lib(6303).verifyPurchase(lib, dependencyMap);
                        return obj8;
                      }
                    }
                    const obj42 = callback(709);
                  }
                }
              break;
              case 2:
                throwTypeErrorResult = dependencyMap;
                throwTypeErrorResult = closure_3;
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = callback2;
                planIdForGift = 0;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = dependencyMap;
                let obj35 = callback(709);
                const obj9 = { type: "GPLAY_VERIFICATION_END", productId: null };
                throwTypeErrorResult = lib;
                obj9[1] = lib.productId;
                throwTypeErrorResult = obj35.dispatch(obj9);
                throw callback2;
              case 3:
                throwTypeErrorResult = dependencyMap;
                throwTypeErrorResult = closure_3;
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = callback2;
                planIdForGift = 1;
                let closure_13 = callback2;
                throwTypeErrorResult = lib;
                throwTypeErrorResult = dependencyMap;
                let obj28 = lib(3854);
                throwTypeErrorResult = closure_13;
                let obj10 = { tags: null };
                const obj11 = { productId: null };
                throwTypeErrorResult = lib;
                obj11[0] = lib.productId;
                obj10[0] = obj11;
                throwTypeErrorResult = obj28.captureBillingException(closure_13, obj10);
                throwTypeErrorResult = logger;
                throwTypeErrorResult = lib;
                throwTypeErrorResult = closure_13;
                const _HermesInternal3 = HermesInternal;
                throwTypeErrorResult = logger.error("[handlePurchaseUpdated] Error verifying purchase " + lib.productId + ": " + closure_13.message);
                throwTypeErrorResult = callback;
                throwTypeErrorResult = dependencyMap;
                let obj31 = callback(709);
                let obj12 = { type: "GPLAY_PURCHASE_VERIFICATION_FAILED", productId: null };
                throwTypeErrorResult = lib;
                obj12[1] = lib.productId;
                throwTypeErrorResult = obj31.dispatch(obj12);
                throwTypeErrorResult = callback;
                if (callback == null) {
                  callback = {};
                }
                throwTypeErrorResult = dependencyMap;
                throwTypeErrorResult = closure_3;
                throwTypeErrorResult = callback;
                succeededOnlyFields = callback;
                throwTypeErrorResult = succeededOnlyFields;
                succeededOnlyFields = succeededOnlyFields.succeededOnlyFields;
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = succeededOnlyFields;
                throwTypeErrorResult = closure_3;
                purchasingProduct = callback2(succeededOnlyFields, closure_3);
                throwTypeErrorResult = callback;
                throwTypeErrorResult = dependencyMap;
                let obj33 = callback(698);
                throwTypeErrorResult = constants2;
                const obj13 = {};
                throwTypeErrorResult = purchasingProduct;
                throwTypeErrorResult = obj13;
                throwTypeErrorResult = Object.assign(purchasingProduct);
                obj13.location = "handlePurchaseUpdated";
                throwTypeErrorResult = lib;
                obj13.product_id = lib.productId;
                throwTypeErrorResult = lib;
                obj13.purchase_token = lib.purchaseToken;
                throwTypeErrorResult = closure_13;
                obj13.error = closure_13.message;
                throwTypeErrorResult = obj33.track(constants2.GPLAY_PURCHASE_FAILED, obj13);
                planIdForGift = 0;
                throwTypeErrorResult = dependencyMap;
                throwTypeErrorResult = closure_3;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = dependencyMap;
                let obj14 = { type: "GPLAY_VERIFICATION_END", productId: null };
                throwTypeErrorResult = lib;
                obj14[1] = lib.productId;
                throwTypeErrorResult = callback(709).dispatch(obj14);
                const obj56 = callback(709);
              break;
              case 4:
                planIdForGift = 2;
                state = callback2;
                let obj25 = lib(3854);
                const obj15 = { tags: null, extra: null };
                obj15[0] = { source: "GPlayManager_handlePurchaseUpdated_sign" };
                const obj16 = { productId: null };
                obj16[0] = lib.productId;
                obj15[1] = obj16;
                const result = obj25.captureBillingException(state, obj15);
                const _HermesInternal2 = HermesInternal;
                throwTypeErrorResult = logger.error("[handlePurchaseUpdated] Failed to find or sign order: " + state.message);
              break;
              case 5:
                if (arg0 === 1) {
                  length = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  planIdForGift = 0;
                  let obj22 = callback(709);
                  const obj17 = { type: "GPLAY_VERIFICATION_END", productId: null };
                  obj17[1] = lib.productId;
                  obj22.dispatch(obj17);
                  length = 3;
                  const obj18 = { value: null, done: true };
                  obj18[0] = arg1;
                  return obj18;
                } else {
                  throwTypeErrorResult = dependencyMap;
                  length = arg1;
                  throwTypeErrorResult = length;
                  if (length.length > 0) {
                    id = length[0].id;
                    const obj19 = { orderId: null, productId: null, skuId: null };
                    obj19[0] = id;
                    obj19[1] = lib.productId;
                    obj19[2] = giftOptionsForKey;
                    logger.info("[handlePurchaseUpdated] Signing order from backend query", obj19);
                    let obj20 = lib(6226);
                    giftOptionsForKey = 6;
                    length = 1;
                    obj20 = { value: null, done: false };
                    obj20[0] = obj20.markOrderAsSigningInProgress(id);
                    return obj20;
                  } else {
                    const obj21 = { productId: null, skuId: null };
                    obj21[0] = lib.productId;
                    obj21[1] = giftOptionsForKey;
                    logger.warn("[handlePurchaseUpdated] No draft order found for signing", obj21);
                    planIdForGift = 2;
                  }
                }
              break;
              case 6:
                if (arg0 === 1) {
                  length = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  planIdForGift = 0;
                  throwTypeErrorResult = dependencyMap;
                  throwTypeErrorResult = closure_3;
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = dependencyMap;
                  obj22 = { type: "GPLAY_VERIFICATION_END", productId: null };
                  throwTypeErrorResult = lib;
                  obj22[1] = lib.productId;
                  throwTypeErrorResult = callback(709).dispatch(obj22);
                  length = 3;
                  const obj23 = { value: null, done: true };
                  obj23[0] = arg1;
                  return obj23;
                }
              break;
              case 7:
                if (arg0 === 1) {
                  length = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  planIdForGift = 0;
                  obj14 = callback(709);
                  const obj24 = { type: "GPLAY_VERIFICATION_END", productId: null };
                  obj24[1] = lib.productId;
                  obj14.dispatch(obj24);
                  length = 3;
                  obj25 = { value: null, done: true };
                  obj25[0] = arg1;
                  return obj25;
                } else {
                  throwTypeErrorResult = dependencyMap;
                  fetchFingerprint = arg1;
                  throwTypeErrorResult = fetchFingerprint;
                  let tmp14 = null != fetchFingerprint;
                  if (tmp14) {
                    tmp14 = null != dependencyMap;
                  }
                  if (tmp14) {
                    obj2 = callback(709);
                    const obj26 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION", key: null };
                    obj26[1] = closure_3;
                    obj2.dispatch(obj26);
                    const productId = lib.productId;
                    delete tmp8[tmp7];
                  }
                  if (null != fetchFingerprint) {
                    obj4 = callback(709);
                    const obj27 = { type: "GPLAY_PURCHASE_VERIFIED", productId: null };
                    obj27[1] = lib.productId;
                    obj4.dispatch(obj27);
                  }
                  if (null != fetchFingerprint) {
                    throwTypeErrorResult = dependencyMap;
                    throwTypeErrorResult = closure_3;
                    throwTypeErrorResult = lib;
                    throwTypeErrorResult = dependencyMap;
                    const SubscriptionProductIds = lib(5679).SubscriptionProductIds;
                    throwTypeErrorResult = lib;
                    if (!SubscriptionProductIds.includes(lib.productId)) {
                      obj6 = lib(6303);
                      const result1 = obj6.sendPaymentCompleteAnalytics(lib);
                      const _HermesInternal = HermesInternal;
                      logger.info("[handlePurchaseUpdated] One Time Purchase verified and consumed: " + lib.productId);
                      planIdForGift = 1;
                    }
                  }
                  if (null != fetchFingerprint) {
                    if (null != fetchFingerprint.pendingDowngrade) {
                      obj10 = callback(709);
                      obj28 = { type: "GPLAY_UPDATE_PENDING_DOWNGRADE", pendingDowngrade: null };
                      obj28[1] = fetchFingerprint.pendingDowngrade;
                      obj10.dispatch(obj28);
                      obj12 = lib(4513);
                      giftOptionsForKey = 8;
                      length = 1;
                      const obj29 = { value: null, done: false };
                      obj29[0] = obj12.fetchSubscriptions();
                      return obj29;
                    }
                  }
                  if (lib.isActive) {
                    giftOptionsForKey = 10;
                    length = 1;
                    const obj30 = { value: null, done: false };
                    obj30[0] = callback3();
                    return obj30;
                  } else {
                    obj7 = lib(4513);
                    giftOptionsForKey = 9;
                    length = 1;
                    obj31 = { value: null, done: false };
                    obj31[0] = obj7.fetchSubscriptions();
                    return obj31;
                  }
                }
              break;
              case 8:
                if (arg0 === 1) {
                  length = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  planIdForGift = 0;
                  throwTypeErrorResult = dependencyMap;
                  throwTypeErrorResult = closure_3;
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = dependencyMap;
                  const obj32 = { type: "GPLAY_VERIFICATION_END", productId: null };
                  throwTypeErrorResult = lib;
                  obj32[1] = lib.productId;
                  throwTypeErrorResult = callback(709).dispatch(obj32);
                  length = 3;
                  obj33 = { value: null, done: true };
                  obj33[0] = arg1;
                  return obj33;
                }
              break;
              case 9:
                if (arg0 === 1) {
                  length = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  planIdForGift = 0;
                  throwTypeErrorResult = dependencyMap;
                  throwTypeErrorResult = closure_3;
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = dependencyMap;
                  const obj34 = { type: "GPLAY_VERIFICATION_END", productId: null };
                  throwTypeErrorResult = lib;
                  obj34[1] = lib.productId;
                  throwTypeErrorResult = callback(709).dispatch(obj34);
                  length = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                }
              break;
              default:
                if (arg0 === 1) {
                  length = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  planIdForGift = 0;
                  throwTypeErrorResult = dependencyMap;
                  throwTypeErrorResult = closure_3;
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = dependencyMap;
                  obj35 = { type: "GPLAY_VERIFICATION_END", productId: null };
                  throwTypeErrorResult = lib;
                  obj35[1] = lib.productId;
                  throwTypeErrorResult = callback(709).dispatch(obj35);
                  length = 3;
                  const obj36 = { value: null, done: true };
                  obj36[0] = arg1;
                  return obj36;
                }
            }
          } catch (throwTypeErrorResult) {
            callback2 = throwTypeErrorResult;
            throwTypeErrorResult = planIdForGift;
            if (tmp5 === planIdForGift) {
              throwTypeErrorResult = tmp3;
              length = tmp3;
              throw throwTypeErrorResult;
            } else if (tmp2 === throwTypeErrorResult) {
              giftOptionsForKey = throwTypeErrorResult;
            } else if (throwTypeErrorResult === throwTypeErrorResult) {
              giftOptionsForKey = tmp3;
            } else {
              giftOptionsForKey = tmp6;
            }
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _handlePurchaseUpdated = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function handleDowngradeCommand() {
  const self = this;
  const apply = _handleDowngradeCommand.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleDowngradeCommand() {
  let self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c1 = 0;
      let downgradeCommand;
      downgradeCommand = downgradeCommand.downgradeCommand;
      let c3 = 1;
      let c4 = 1;
      yield "ct";
      if (1 === tmp4) {
        if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj1 = { value: null, done: true };
          obj1[0] = arg1;
          return obj1;
        } else if (constants.EXECUTE === downgradeCommand) {
          c3 = 2;
          c4 = 1;
          const obj2 = { value: null, done: false };
          obj2[0] = (function executePendingDowngrade() {
            const self = this;
            const apply = closure_36.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
          return obj2;
        } else if (constants.CLEAR === tmp27) {
          callback();
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("Invalid downgrade state " + downgradeCommand);
          throw error;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw arg1;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      }
      c4 = 3;
      yield "HermesInternal";
    })();
    iter.next();
    return iter;
  });
  const _handleDowngradeCommand = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _executePendingDowngrade() {
  const self = this;
  const tmp = callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let lib = tmp4;
            let pendingDowngrade = tmp8;
            pendingDowngrade = undefined;
            pendingDowngrade = outer1_11.getPendingDowngrade();
            if (null != pendingDowngrade) {
              let c3 = 2;
              outer1_1(outer1_2[16]).dispatch({ type: "GPLAY_UPDATE_IS_DOWNGRADING", isDowngrading: true });
              const obj13 = outer1_1(outer1_2[16]);
              c4 = 3;
              c5 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_0(outer1_2[17]).downgradeSubscription(pendingDowngrade);
              return obj1;
            } else {
              c5 = 3;
            }
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            lib = dependencyMap;
            let obj5 = pendingDowngrade(3854);
            const result = obj5.captureBillingException(lib);
            let obj6 = lib(4533);
            const obj2 = { title: null, body: null };
            const intl = pendingDowngrade(1236).intl;
            obj2[0] = intl.string(pendingDowngrade(1236).t["U+H+kd"]);
            const intl2 = pendingDowngrade(1236).intl;
            obj2[1] = intl2.string(pendingDowngrade(1236).t.LFFx5G);
            obj6.show(obj2);
            let newSubscriptionSkuId;
            if (pendingDowngrade != null) {
              newSubscriptionSkuId = pendingDowngrade.newSubscriptionSkuId;
            }
            let obj3 = { location: "executePendingDowngrade", product_id: null, purchase_token: null, error: null };
            obj3[1] = newSubscriptionSkuId;
            let purchaseToken;
            if (pendingDowngrade != null) {
              purchaseToken = pendingDowngrade.purchaseToken;
            }
            obj3[2] = purchaseToken;
            obj3[3] = lib.message;
            lib(698).track(constants.GPLAY_PURCHASE_FAILED, obj3);
            const obj9 = lib(698);
          } else if (3 === tmp8) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 0;
              obj3 = lib(709);
              obj3.dispatch({ type: "GPLAY_UPDATE_IS_DOWNGRADING", isDowngrading: false });
              c5 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              callback();
              c4 = 4;
              c5 = 1;
              obj5 = { value: null, done: false };
              obj5[0] = callback2();
              return obj5;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            obj = lib(709);
            obj.dispatch({ type: "GPLAY_UPDATE_IS_DOWNGRADING", isDowngrading: false });
            c5 = 3;
            obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            c3 = 1;
          }
          c3 = 0;
          lib(709).dispatch({ type: "GPLAY_UPDATE_IS_DOWNGRADING", isDowngrading: false });
          const obj11 = lib(709);
        }
        c3 = 0;
        lib(709).dispatch({ type: "GPLAY_UPDATE_IS_DOWNGRADING", isDowngrading: false });
        throw dependencyMap;
      } catch (tmp64) {
        dependencyMap = tmp64;
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp64;
        } else if (tmp2 === tmp66) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  const _executePendingDowngrade = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function clearPendingDowngrade() {
  importDefault(709).dispatch({ type: "GPLAY_UPDATE_PENDING_DOWNGRADE", pendingDowngrade: null });
}
function fetchAndAlertActiveSubscription() {
  const self = this;
  const apply = _fetchAndAlertActiveSubscription.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchAndAlertActiveSubscription() {
  const self = this;
  const tmp = callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
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
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp5;
            let callback = tmp2;
            callback = undefined;
            let obj1 = outer1_0(4513);
            dependencyMap = 1;
            c3 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = obj1.fetchSubscriptions();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          callback = premiumTypeSubscription.getPremiumTypeSubscription();
          if (null == callback) {
            const _Error = Error;
            const intl = callback(1236).intl;
            const error = new Error(intl.string(callback(1236).t.PjfUXe));
            throw error;
          } else {
            callback2();
            callback3(() => {
              let obj = tmp5(table[25]);
              obj = {
                importer() {
                  return outer1_0(outer1_2[28])(outer1_2[27], outer1_2.paths).then((arg0) => {
                    let closure_0 = arg0.default;
                    return () => { ... };
                  });
                }
              };
              obj.openLazy(obj);
            });
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
      } catch (tmp24) {
        c3 = tmp;
        throw tmp24;
      }
    }
  });
  const _fetchAndAlertActiveSubscription = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function handleAppStateUpdated() {
  const self = this;
  const apply = _handleAppStateUpdated.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleAppStateUpdated() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp3;
              let closure_1 = tmp5;
              let state;
              state = state.state;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: "Array" };
            }
          } else {
            if (1 === tmp8) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else if (ready.isReady()) {
                if (authenticated.isAuthenticated()) {
                  if (state === constants.ACTIVE) {
                    let c4 = 1;
                    c5 = 3;
                    c6 = 1;
                    const obj2 = { value: null, done: false };
                    obj2[0] = closure_23.loadPurchases();
                    return obj2;
                  }
                }
              }
            } else {
              if (2 === tmp8) {
                c4 = 0;
                closure_23.open();
              } else if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                c4 = 0;
              }
              c4 = 0;
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c6 = 3;
          }
        } catch (tmp22) {
          let closure_3 = tmp22;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp22;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _handleAppStateUpdated = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_3 = ["succeededOnlyFields"];
({ NativeEventEmitter, NativeModules } = get_ActivityIndicator);
({ setPaymentSuccess: error, showOldPaymentFlowSuccess: metroImportAll } = usePremiumPlanPurchasedStore);
({ GPlayConnectionState: map1, GPlayDowngradeCommand: closure_14, GPlayPurchaseState: closure_15 } = GPlayConnectionState);
({ AnalyticEvents: closure_16, AppStates: closure_17, PaymentGateways: closure_18 } = ME);
let closure_22 = new require("get ActivityIndicator")("GPlayManager.android");
const BillingManager = NativeModules.BillingManager;
const nativeEventEmitter = new NativeEventEmitter(BillingManager);
let obj = {};
let c26 = null;
let c27 = null;
let c28 = null;
let c29 = null;
obj = {
  giftInfoOptionsCache: obj,
  initialize() {
    BillingManager.open();
    let closure_26 = nativeEventEmitter.addListener("billing-manager-connection-state-updated", handleConnectionStateUpdated);
    let closure_27 = nativeEventEmitter.addListener("billing-manager-purchase-state-updated", handlePurchaseStateUpdated);
    let closure_28 = nativeEventEmitter.addListener("billing-manager-purchase-updated", handlePurchaseUpdated);
    let closure_29 = nativeEventEmitter.addListener("billing-manager-downgrade-command", handleDowngradeCommand);
    const subscription = importDefault(709).subscribe("APP_STATE_UPDATE", handleAppStateUpdated);
  },
  terminate() {
    BillingManager.close();
    if (c26 != null) {
      c26.remove();
    }
    if (c27 != null) {
      c27.remove();
    }
    if (c28 != null) {
      c28.remove();
    }
    if (c29 != null) {
      c29.remove();
    }
    importDefault(709).unsubscribe("APP_STATE_UPDATE", handleAppStateUpdated);
  }
};
const tmp7 = new require("get ActivityIndicator")("GPlayManager.android");
let result = require("noop").fileFinishedImporting("modules/gplay/native/GPlayManager.android.tsx");

export default obj;
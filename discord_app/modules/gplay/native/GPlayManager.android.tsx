// === Module 10407: handleConnectionStateUpdated ===

// Module 10407 (handleConnectionStateUpdated)
import timestampDefault from "timestamp" /* 3 */;
import noopAll from "noop" /* 19 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import getPlanIdForProduct from "getPlanIdForProduct" /* 8154 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import closure_5 from "asyncGeneratorStep" /* 5 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "initialize" /* 7099 */;
import usePremiumPlanPurchasedStore from "usePremiumPlanPurchasedStore" /* 7100 */;
import closure_9 from "fetchFingerprint" /* 1218 */;
import closure_10 from "reset" /* 4113 */;
import closure_11 from "updateProduct" /* 6036 */;
import { useGPlayAnalyticsStore } from "setGPlayAnalytics" /* 8155 */;
import GPlayConnectionState from "GPlayConnectionState" /* 6037 */;
import ME from "ME" /* 676 */;
import { OrderStatus } from "CustomCheckoutFlow" /* 4427 */;
import { SubscriptionPlanInfo } from "GuildFeatures" /* 1924 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function handleConnectionStateUpdated(connectionState) {
  connectionState = connectionState.connectionState;
  dispatcherDefault.dispatch({ type: "GPLAY_UPDATE_CONNECTION_STATE", connectionState });
  if (connectionState === constants.CONNECTED) {
    const userCountry = getPlanIdForProduct.loadUserCountry();
    userCountry.finally(() => callback(table[18]).ensureSkusLoaded(closure_30));
    const obj2 = getPlanIdForProduct;
  }
}
function handleConnectionOpen() {
  getPlanIdForProduct.ensureSkusLoaded(items);
}
function handlePurchaseStateUpdated(arg0) {
  ({ billingResult, isActivePurchase } = arg0);
  dispatcherDefault.dispatch({ type: "GPLAY_UPDATE_PURCHASE_STATE", billingResult, isActivePurchase });
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
    closure_0 = arg0;
    c6 = 0;
    c7 = 0;
    c5 = 0;
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
            obj = { value: null, done: true };
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
                  closure_3 = tmp4;
                  dependencyMap = tmp11;
                  let purchase;
                  throwTypeErrorResult = purchase;
                  purchase = purchase.purchase;
                  let callback;
                  dependencyMap = undefined;
                  closure_3 = undefined;
                  let callback2;
                  let planIdForGift;
                  giftOptionsForKey = undefined;
                  length = undefined;
                  let id;
                  closure_9 = undefined;
                  let succeededOnlyFields;
                  let purchasingProduct;
                  giftOptionsForKey = 1;
                  length = 1;
                  return { value: "ct", done: true };
                }
              break;
              case 1:
                if (arg0 === 1) {
                  length = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  length = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = arg1;
                  return obj1;
                } else {
                  throwTypeErrorResult = dependencyMap;
                  throwTypeErrorResult = closure_3;
                  throwTypeErrorResult = purchasingProduct;
                  throwTypeErrorResult = purchase;
                  if (purchasingProduct.isPurchasingProduct(purchase.productId)) {
                    length = 3;
                    return { value: "HermesInternal", done: null };
                  } else {
                    throwTypeErrorResult = dependencyMap;
                    throwTypeErrorResult = closure_3;
                    throwTypeErrorResult = state;
                    throwTypeErrorResult = purchase;
                    callback = state.getState().analyticsByProductId[purchase.productId];
                    throwTypeErrorResult = table2;
                    throwTypeErrorResult = purchase;
                    dependencyMap = table2[purchase.productId];
                    throwTypeErrorResult = callback;
                    throwTypeErrorResult = dependencyMap;
                    throwTypeErrorResult = purchase;
                    closure_3 = callback(1217).v3(purchase.purchaseToken);
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
                    throwTypeErrorResult = purchase;
                    obj4[1] = purchase.productId;
                    throwTypeErrorResult = callback(709).dispatch(obj4);
                    throwTypeErrorResult = purchase;
                    throwTypeErrorResult = dependencyMap;
                    const IAPProductIds = purchase(6039).IAPProductIds;
                    throwTypeErrorResult = purchase;
                    if (IAPProductIds.includes(purchase.productId)) {
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = closure_3;
                      planIdForGift = 3;
                      throwTypeErrorResult = callback;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = purchase;
                      throwTypeErrorResult = dependencyMap;
                      const obj48 = callback(4043)();
                      callback2 = callback(4043)().subtract(purchase(7108).DRAFT_ORDER_LOOKBACK_DAYS, "days").toISOString();
                      throwTypeErrorResult = purchase;
                      throwTypeErrorResult = dependencyMap;
                      const subtractResult = callback(4043)().subtract(purchase(7108).DRAFT_ORDER_LOOKBACK_DAYS, "days");
                      throwTypeErrorResult = purchase;
                      planIdForGift = purchase(6039).getPlanIdForGift(purchase.productId);
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
                      throwTypeErrorResult = purchase;
                      throwTypeErrorResult = dependencyMap;
                      const obj50 = purchase(6039);
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
                      obj6[0] = purchase(7108).getOrders(obj5);
                      return obj6;
                    } else {
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = closure_3;
                      throwTypeErrorResult = purchase;
                      throwTypeErrorResult = constants;
                      if (purchase.purchaseState === constants.PENDING) {
                        planIdForGift = 0;
                        throwTypeErrorResult = dependencyMap;
                        throwTypeErrorResult = closure_3;
                        throwTypeErrorResult = callback;
                        throwTypeErrorResult = dependencyMap;
                        let obj7 = { type: "GPLAY_VERIFICATION_END", productId: null };
                        throwTypeErrorResult = purchase;
                        obj7[1] = purchase.productId;
                        throwTypeErrorResult = callback(709).dispatch(obj7);
                        length = 3;
                        return { value: "HermesInternal", done: null };
                      } else {
                        throwTypeErrorResult = dependencyMap;
                        throwTypeErrorResult = closure_3;
                        throwTypeErrorResult = purchase;
                        throwTypeErrorResult = dependencyMap;
                        throwTypeErrorResult = purchase;
                        throwTypeErrorResult = dependencyMap;
                        giftOptionsForKey = 7;
                        length = 1;
                        const obj8 = { value: null, done: false };
                        obj8[0] = purchase(8154).verifyPurchase(purchase, dependencyMap);
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
                throwTypeErrorResult = purchase;
                obj9[1] = purchase.productId;
                throwTypeErrorResult = obj35.dispatch(obj9);
                throw callback2;
              case 3:
                throwTypeErrorResult = dependencyMap;
                throwTypeErrorResult = closure_3;
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = callback2;
                planIdForGift = 1;
                closure_13 = callback2;
                throwTypeErrorResult = purchase;
                throwTypeErrorResult = dependencyMap;
                let obj28 = purchase(4122);
                throwTypeErrorResult = closure_13;
                let obj10 = { tags: null };
                const obj11 = { productId: null };
                throwTypeErrorResult = purchase;
                obj11[0] = purchase.productId;
                obj10[0] = obj11;
                throwTypeErrorResult = obj28.captureBillingException(closure_13, obj10);
                throwTypeErrorResult = logger;
                throwTypeErrorResult = purchase;
                throwTypeErrorResult = closure_13;
                const _HermesInternal3 = HermesInternal;
                throwTypeErrorResult = logger.error("[handlePurchaseUpdated] Error verifying purchase " + purchase.productId + ": " + closure_13.message);
                throwTypeErrorResult = callback;
                throwTypeErrorResult = dependencyMap;
                let obj31 = callback(709);
                let obj12 = { type: "GPLAY_PURCHASE_VERIFICATION_FAILED", productId: null };
                throwTypeErrorResult = purchase;
                obj12[1] = purchase.productId;
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
                throwTypeErrorResult = purchase;
                obj13.product_id = purchase.productId;
                throwTypeErrorResult = purchase;
                obj13.purchase_token = purchase.purchaseToken;
                throwTypeErrorResult = closure_13;
                obj13.error = closure_13.message;
                throwTypeErrorResult = obj33.track(constants2.GPLAY_PURCHASE_FAILED, obj13);
                planIdForGift = 0;
                throwTypeErrorResult = dependencyMap;
                throwTypeErrorResult = closure_3;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = dependencyMap;
                let obj14 = { type: "GPLAY_VERIFICATION_END", productId: null };
                throwTypeErrorResult = purchase;
                obj14[1] = purchase.productId;
                throwTypeErrorResult = callback(709).dispatch(obj14);
                const obj56 = callback(709);
              break;
              case 4:
                planIdForGift = 2;
                state = callback2;
                let obj25 = purchase(4122);
                const obj15 = { tags: null, extra: null };
                obj15[0] = { source: "GPlayManager_handlePurchaseUpdated_sign" };
                const obj16 = { productId: null };
                obj16[0] = purchase.productId;
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
                  obj17[1] = purchase.productId;
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
                    obj19[1] = purchase.productId;
                    obj19[2] = giftOptionsForKey;
                    logger.info("[handlePurchaseUpdated] Signing order from backend query", obj19);
                    let obj20 = purchase(7108);
                    giftOptionsForKey = 6;
                    length = 1;
                    obj20 = { value: null, done: false };
                    obj20[0] = obj20.markOrderAsSigningInProgress(id);
                    return obj20;
                  } else {
                    const obj21 = { productId: null, skuId: null };
                    obj21[0] = purchase.productId;
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
                  throwTypeErrorResult = purchase;
                  obj22[1] = purchase.productId;
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
                  obj24[1] = purchase.productId;
                  obj14.dispatch(obj24);
                  length = 3;
                  obj25 = { value: null, done: true };
                  obj25[0] = arg1;
                  return obj25;
                } else {
                  throwTypeErrorResult = dependencyMap;
                  closure_9 = arg1;
                  throwTypeErrorResult = closure_9;
                  let tmp14 = null != closure_9;
                  if (tmp14) {
                    tmp14 = null != dependencyMap;
                  }
                  if (tmp14) {
                    obj2 = callback(709);
                    const obj26 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION", key: null };
                    obj26[1] = closure_3;
                    obj2.dispatch(obj26);
                    const productId = purchase.productId;
                    delete tmp8[tmp7];
                  }
                  if (null != closure_9) {
                    obj4 = callback(709);
                    const obj27 = { type: "GPLAY_PURCHASE_VERIFIED", productId: null };
                    obj27[1] = purchase.productId;
                    obj4.dispatch(obj27);
                  }
                  if (null != closure_9) {
                    throwTypeErrorResult = dependencyMap;
                    throwTypeErrorResult = closure_3;
                    throwTypeErrorResult = purchase;
                    throwTypeErrorResult = dependencyMap;
                    const SubscriptionProductIds = purchase(6039).SubscriptionProductIds;
                    throwTypeErrorResult = purchase;
                    if (!SubscriptionProductIds.includes(purchase.productId)) {
                      obj6 = purchase(8154);
                      const result1 = obj6.sendPaymentCompleteAnalytics(purchase);
                      const _HermesInternal = HermesInternal;
                      logger.info("[handlePurchaseUpdated] One Time Purchase verified and consumed: " + purchase.productId);
                      planIdForGift = 1;
                    }
                  }
                  if (null != closure_9) {
                    if (null != closure_9.pendingDowngrade) {
                      obj10 = callback(709);
                      obj28 = { type: "GPLAY_UPDATE_PENDING_DOWNGRADE", pendingDowngrade: null };
                      obj28[1] = closure_9.pendingDowngrade;
                      obj10.dispatch(obj28);
                      obj12 = purchase(4790);
                      giftOptionsForKey = 8;
                      length = 1;
                      const obj29 = { value: null, done: false };
                      obj29[0] = obj12.fetchSubscriptions();
                      return obj29;
                    }
                  }
                  if (purchase.isActive) {
                    giftOptionsForKey = 10;
                    length = 1;
                    const obj30 = { value: null, done: false };
                    obj30[0] = callback3();
                    return obj30;
                  } else {
                    obj7 = purchase(4790);
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
                  throwTypeErrorResult = purchase;
                  obj32[1] = purchase.productId;
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
                  throwTypeErrorResult = purchase;
                  obj34[1] = purchase.productId;
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
                  throwTypeErrorResult = purchase;
                  obj35[1] = purchase.productId;
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
  closure_35 = tmp;
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
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp4;
              c1 = 0;
              let downgradeCommand;
              downgradeCommand = downgradeCommand.downgradeCommand;
              c3 = 1;
              c4 = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else if (constants.EXECUTE === downgradeCommand) {
                c3 = 2;
                c4 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = (function executePendingDowngrade() {
                  const self = this;
                  const apply = closure_38.apply;
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
                error = new Error("Invalid downgrade state " + downgradeCommand);
                throw error;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp19) {
          c4 = tmp;
          throw tmp19;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_37 = tmp;
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
        obj = { value: null, done: true };
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
            pendingDowngrade = closure_1_11.getPendingDowngrade();
            if (null != pendingDowngrade) {
              c3 = 2;
              closure_1_1(closure_1_2[17]).dispatch({ type: "GPLAY_UPDATE_IS_DOWNGRADING", isDowngrading: true });
              const obj13 = closure_1_1(closure_1_2[17]);
              c4 = 3;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_0(closure_1_2[18]).downgradeSubscription(pendingDowngrade);
              return obj1;
            } else {
              c5 = 3;
            }
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            lib = dependencyMap;
            let obj5 = pendingDowngrade(4122);
            const result = obj5.captureBillingException(lib);
            let obj6 = lib(4810);
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
  closure_38 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function clearPendingDowngrade() {
  dispatcherDefault.dispatch({ type: "GPLAY_UPDATE_PENDING_DOWNGRADE", pendingDowngrade: null });
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
        obj = { value: null, done: true };
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
            closure_1 = tmp5;
            let callback = tmp2;
            callback = undefined;
            obj1 = closure_1_0(4790);
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
            error = new Error(intl.string(callback(1236).t.PjfUXe));
            throw error;
          } else {
            callback2();
            callback3(() => {
              obj = tmp5(table[25]);
              obj = {
                importer() {
                  return closure_1_0(closure_1_2[28])(closure_1_2[27], closure_1_2.paths).then((arg0) => {
                    closure_0 = arg0.default;
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
  closure_41 = tmp;
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
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
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
              const table = tmp3;
              closure_1 = tmp5;
              let state;
              state = state.state;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp8) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else if (ready.isReady()) {
                if (authenticated.isAuthenticated()) {
                  if (state === constants.ACTIVE) {
                    obj1 = state(table[18]);
                    obj1.ensureSkusLoaded(closure_30);
                    c4 = 1;
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
        } catch (tmp27) {
          closure_3 = tmp27;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp27;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_43 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_3 = ["succeededOnlyFields"];
noopAll;
({ NativeEventEmitter, NativeModules } = get_ActivityIndicator);
({ setPaymentSuccess: error, showOldPaymentFlowSuccess: closure_8 } = usePremiumPlanPurchasedStore);
({ GPlayConnectionState: map1, GPlayDowngradeCommand: closure_14, GPlayPurchaseState: closure_15 } = GPlayConnectionState);
({ AnalyticEvents: closure_16, AppStates: closure_17, PaymentGateways: closure_18 } = ME);
let closure_22 = new timestampDefault("GPlayManager.android");
const BillingManager = NativeModules.BillingManager;
const nativeEventEmitter = new NativeEventEmitter(BillingManager);
let obj = {};
let c26 = null;
let c27 = null;
let c28 = null;
let c29 = null;
const items = [require("SubscriptionPlans").ProductIds.PREMIUM_TIER_2_MONTHLY];
obj = {
  giftInfoOptionsCache: obj,
  initialize() {
    closure_26 = nativeEventEmitter.addListener("billing-manager-connection-state-updated", handleConnectionStateUpdated);
    closure_27 = nativeEventEmitter.addListener("billing-manager-purchase-state-updated", handlePurchaseStateUpdated);
    closure_28 = nativeEventEmitter.addListener("billing-manager-purchase-updated", handlePurchaseUpdated);
    closure_29 = nativeEventEmitter.addListener("billing-manager-downgrade-command", handleDowngradeCommand);
    const subscription = dispatcherDefault.subscribe("APP_STATE_UPDATE", handleAppStateUpdated);
    obj = dispatcherDefault;
    const subscription1 = dispatcherDefault.subscribe("CONNECTION_OPEN", handleConnectionOpen);
    BillingManager.open();
  },
  terminate() {
    BillingManager.close();
    if (c26 != null) {
      obj.remove();
    }
    if (c27 != null) {
      obj2.remove();
    }
    if (c28 != null) {
      obj3.remove();
    }
    if (c29 != null) {
      obj4.remove();
    }
    dispatcherDefault.unsubscribe("APP_STATE_UPDATE", handleAppStateUpdated);
    obj = c26;
    obj2 = c27;
    obj3 = c28;
    obj4 = c29;
    const obj5 = dispatcherDefault;
    dispatcherDefault.unsubscribe("CONNECTION_OPEN", handleConnectionOpen);
  }
};
const tmp7 = new timestampDefault("GPlayManager.android");
let result = require("set").fileFinishedImporting("modules/gplay/native/GPlayManager.android.tsx");

export default obj;
// discord_app/modules/gplay/native/GPlayManager.android.tsx
import timestampDefault from "../../debug/Logger.tsx";
import noopAll from "../../../../_runtime/00019_noop.js";
import dispatcherDefault from "../../../Dispatcher.tsx";
import getPlanIdForProduct from "../../../actions/native/GPlayActionCreators.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import initialize from "../../premium/gifting/GiftPromotionStore.tsx";
import usePremiumPlanPurchasedStore from "../../premium/native/PremiumPlanPurchasedStore.tsx";
import fetchFingerprint from "../../../stores/AuthenticationStore.tsx";
import reset from "../../../stores/billing/SubscriptionStore.tsx";
import updateProduct from "../../../stores/native/IAPStore.android.tsx";
import { useGPlayAnalyticsStore } from "GPlayAnalyticsStore.tsx";
import GPlayConnectionState from "Constants.tsx";
import ME from "../../../Constants.tsx";
import { OrderStatus } from "../../payments/PaymentConstants.tsx";
import { SubscriptionPlanInfo } from "../../premium/PremiumConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = fn;
function handleConnectionStateUpdated(connectionState) {
  connectionState = connectionState.connectionState;
  dispatcherDefault.dispatch({ type: "GPLAY_UPDATE_CONNECTION_STATE", connectionState });
  if (connectionState === constants.CONNECTED) {
    const userCountry = getPlanIdForProduct.loadUserCountry();
    userCountry.finally(() => callback(table[17]).loadSkus());
  }
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
        HermesBuiltin.throwTypeError();
      } else if (tmp10 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
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
              } else if (purchasingProduct.isPurchasingProduct(purchase.productId)) {
                length = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              } else {
                callback = state.getState().analyticsByProductId[purchase.productId];
                dependencyMap = table2[purchase.productId];
                closure_3 = callback(1217).v3(purchase.purchaseToken);
                if (null != dependencyMap) {
                  let obj2 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION", key: null, giftOptions: null };
                  obj2[1] = closure_3;
                  const obj3 = {};
                  const merged = Object.assign(dependencyMap);
                  obj2[2] = obj3;
                  callback(709).dispatch(obj2);
                  const obj39 = callback(709);
                } else {
                  dependencyMap = giftOptionsForKey.getGiftOptionsForKey(closure_3);
                }
                planIdForGift = 2;
                const obj38 = callback(1217);
                let obj4 = { type: "GPLAY_VERIFICATION_START", productId: null };
                obj4[1] = purchase.productId;
                callback(709).dispatch(obj4);
                const IAPProductIds = purchase(5322).IAPProductIds;
                if (IAPProductIds.includes(purchase.productId)) {
                  planIdForGift = 3;
                  const obj48 = callback(3975)();
                  callback2 = callback(3975)().subtract(purchase(7400).DRAFT_ORDER_LOOKBACK_DAYS, "days").toISOString();
                  const subtractResult = callback(3975)().subtract(purchase(7400).DRAFT_ORDER_LOOKBACK_DAYS, "days");
                  planIdForGift = purchase(5322).getPlanIdForGift(purchase.productId);
                  let tmp202;
                  if (null != planIdForGift) {
                    let skuId;
                    if (table[planIdForGift] != null) {
                      skuId = tmp207.skuId;
                    }
                    tmp202 = skuId;
                  }
                  giftOptionsForKey = tmp202;
                  const obj50 = purchase(5322);
                  const obj5 = { status: null, createdAfter: null, skuId: null, paymentGateway: null, isGift: true };
                  obj5[0] = constants4.DRAFT;
                  obj5[1] = callback2;
                  obj5[2] = giftOptionsForKey;
                  obj5[3] = constants3.GOOGLE;
                  giftOptionsForKey = 5;
                  length = 1;
                  let obj6 = { value: null, done: false };
                  obj6[0] = purchase(7400).getOrders(obj5);
                  return obj6;
                } else if (purchase.purchaseState === constants.PENDING) {
                  planIdForGift = 0;
                  let obj7 = { type: "GPLAY_VERIFICATION_END", productId: null };
                  obj7[1] = purchase.productId;
                  callback(709).dispatch(obj7);
                  length = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
                } else {
                  giftOptionsForKey = 7;
                  length = 1;
                  const obj8 = { value: null, done: false };
                  obj8[0] = purchase(7662).verifyPurchase(purchase, dependencyMap);
                  return obj8;
                }
                const obj42 = callback(709);
              }
            break;
            case 2:
              planIdForGift = 0;
              let obj35 = callback(709);
              const obj9 = { type: "GPLAY_VERIFICATION_END", productId: null };
              obj9[1] = purchase.productId;
              obj35.dispatch(obj9);
              throw callback2;
            case 3:
              planIdForGift = 1;
              closure_13 = callback2;
              let obj28 = purchase(4054);
              let obj10 = { tags: null };
              const obj11 = { productId: null };
              obj11[0] = purchase.productId;
              obj10[0] = obj11;
              const result = obj28.captureBillingException(closure_13, obj10);
              const _HermesInternal3 = HermesInternal;
              logger.error("[handlePurchaseUpdated] Error verifying purchase " + purchase.productId + ": " + closure_13.message);
              let obj31 = callback(709);
              let obj12 = { type: "GPLAY_PURCHASE_VERIFICATION_FAILED", productId: null };
              obj12[1] = purchase.productId;
              obj31.dispatch(obj12);
              if (callback == null) {
                callback = {};
              }
              succeededOnlyFields = callback;
              succeededOnlyFields = succeededOnlyFields.succeededOnlyFields;
              purchasingProduct = callback2(succeededOnlyFields, closure_3);
              let obj33 = callback(698);
              const obj13 = {};
              const merged1 = Object.assign(purchasingProduct);
              obj13.location = "handlePurchaseUpdated";
              obj13.product_id = purchase.productId;
              obj13.purchase_token = purchase.purchaseToken;
              obj13.error = closure_13.message;
              obj33.track(constants2.GPLAY_PURCHASE_FAILED, obj13);
              planIdForGift = 0;
              let obj14 = { type: "GPLAY_VERIFICATION_END", productId: null };
              obj14[1] = purchase.productId;
              callback(709).dispatch(obj14);
              const obj56 = callback(709);
            break;
            case 4:
              planIdForGift = 2;
              state = callback2;
              let obj25 = purchase(4054);
              const obj15 = { tags: null, extra: null };
              obj15[0] = { source: "GPlayManager_handlePurchaseUpdated_sign" };
              const obj16 = { productId: null };
              obj16[0] = purchase.productId;
              obj15[1] = obj16;
              const result1 = obj25.captureBillingException(state, obj15);
              const _HermesInternal2 = HermesInternal;
              logger.error("[handlePurchaseUpdated] Failed to find or sign order: " + state.message);
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
                length = arg1;
                if (length.length > 0) {
                  id = length[0].id;
                  const obj19 = { orderId: null, productId: null, skuId: null };
                  obj19[0] = id;
                  obj19[1] = purchase.productId;
                  obj19[2] = giftOptionsForKey;
                  logger.info("[handlePurchaseUpdated] Signing order from backend query", obj19);
                  let obj20 = purchase(7400);
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
                obj22 = { type: "GPLAY_VERIFICATION_END", productId: null };
                obj22[1] = purchase.productId;
                callback(709).dispatch(obj22);
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
                closure_9 = arg1;
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
                  const SubscriptionProductIds = purchase(5322).SubscriptionProductIds;
                  if (!SubscriptionProductIds.includes(purchase.productId)) {
                    obj6 = purchase(7662);
                    const result2 = obj6.sendPaymentCompleteAnalytics(purchase);
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
                    obj12 = purchase(4466);
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
                  obj7 = purchase(4466);
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
                const obj32 = { type: "GPLAY_VERIFICATION_END", productId: null };
                obj32[1] = purchase.productId;
                callback(709).dispatch(obj32);
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
                const obj34 = { type: "GPLAY_VERIFICATION_END", productId: null };
                obj34[1] = purchase.productId;
                callback(709).dispatch(obj34);
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
                obj35 = { type: "GPLAY_VERIFICATION_END", productId: null };
                obj35[1] = purchase.productId;
                callback(709).dispatch(obj35);
                length = 3;
                const obj36 = { value: null, done: true };
                obj36[0] = arg1;
                return obj36;
              }
          }
        } catch (tmp230) {
          callback2 = tmp230;
          if (tmp5 === planIdForGift) {
            length = tmp3;
            throw tmp230;
          } else if (tmp2 === tmp232) {
            giftOptionsForKey = tmp;
          } else if (tmp === tmp232) {
            giftOptionsForKey = tmp3;
          } else {
            giftOptionsForKey = tmp6;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_33 = tmp;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
  closure_35 = tmp;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_1_1(closure_1_2[16]).dispatch({ type: "GPLAY_UPDATE_IS_DOWNGRADING", isDowngrading: true });
              const obj13 = closure_1_1(closure_1_2[16]);
              c4 = 3;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_0(closure_1_2[17]).downgradeSubscription(pendingDowngrade);
              return obj1;
            } else {
              c5 = 3;
            }
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            lib = dependencyMap;
            let obj5 = pendingDowngrade(4054);
            const result = obj5.captureBillingException(lib);
            let obj6 = lib(4656);
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
  closure_36 = tmp;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            obj1 = closure_1_0(4466);
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
              tmp5(table[25]);
              obj = {
                importer() {
                  return closure_1_0(closure_1_2[28])(closure_1_2[27], closure_1_2.paths).then((result) => {
                    closure_0 = result.default;
                    return () => { ... };
                  });
                }
              };
              obj.openLazy(obj);
            });
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        }
      } catch (tmp24) {
        c3 = tmp;
        throw tmp24;
      }
    }
  });
  closure_39 = tmp;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_2 = tmp3;
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
        } catch (tmp22) {
          closure_3 = tmp22;
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
  closure_41 = tmp;
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
obj = {
  giftInfoOptionsCache: obj,
  initialize() {
    BillingManager.open();
    closure_26 = nativeEventEmitter.addListener("billing-manager-connection-state-updated", handleConnectionStateUpdated);
    closure_27 = nativeEventEmitter.addListener("billing-manager-purchase-state-updated", handlePurchaseStateUpdated);
    closure_28 = nativeEventEmitter.addListener("billing-manager-purchase-updated", handlePurchaseUpdated);
    closure_29 = nativeEventEmitter.addListener("billing-manager-downgrade-command", handleDowngradeCommand);
    const subscription = dispatcherDefault.subscribe("APP_STATE_UPDATE", handleAppStateUpdated);
  },
  terminate() {
    BillingManager.close();
    if (_null != null) {
      _null.remove();
    }
    if (_null2 != null) {
      _null2.remove();
    }
    if (_null3 != null) {
      _null3.remove();
    }
    if (_null4 != null) {
      _null4.remove();
    }
    dispatcherDefault.unsubscribe("APP_STATE_UPDATE", handleAppStateUpdated);
  }
};
const tmp7 = new timestampDefault("GPlayManager.android");
let result = require("obj132").fileFinishedImporting("modules/gplay/native/GPlayManager.android.tsx");

export default obj;
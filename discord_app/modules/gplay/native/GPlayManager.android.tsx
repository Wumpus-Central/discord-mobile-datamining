// === Module 10708: GPlayManager ===

// Module 10708 (GPlayManager)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 4884 */;
import GPlayActionCreators from "GPlayActionCreators" /* 9367 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GiftPromotionStore from "GiftPromotionStore" /* 7420 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;
import IAPStore from "IAPStore" /* 7237 */;

require = fn;
function handleConnectionStateUpdated(connectionState) {
  connectionState = connectionState.connectionState;
  DispatcherDefault.dispatch({ type: "GPLAY_UPDATE_CONNECTION_STATE", connectionState });
  if (connectionState === constants.CONNECTED) {
    const userCountry = GPlayActionCreators.loadUserCountry();
    userCountry.finally(() => GPlayActionCreators.ensureSkusLoaded(items));
  }
}
function handleConnectionOpen() {
  GPlayActionCreators.ensureSkusLoaded(items);
}
function handlePurchaseStateUpdated(arg0) {
  ({ billingResult, isActivePurchase } = arg0);
  DispatcherDefault.dispatch({ type: "GPLAY_UPDATE_PURCHASE_STATE", billingResult, isActivePurchase });
}
function handlePurchaseUpdated() {
  const self = this;
  const apply = closure_35.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_35 = async function _handlePurchaseUpdated(arg0) {
  let purchase = arg0;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  let iter = (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp10 === 3) {
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
        c7 = 2;
        switch (c6) {
          case 0:
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_3 = tmp4;
              closure_2 = tmp11;
              let purchase2;
              purchase2 = purchase.purchase;
              closure_130_1 = undefined;
              let giftOptionsForKey;
              closure_130_3 = undefined;
              closure_130_4 = undefined;
              let planIdForGift;
              closure_130_6 = undefined;
              closure_130_7 = undefined;
              let id;
              closure_130_9 = undefined;
              closure_130_10 = undefined;
              closure_130_11 = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "PX_16", done: true };
            }
          break;
          case 1:
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj1 = { value, done: true };
              return obj1;
            } else if (closure_131_11.isPurchasingProduct(purchase2.productId)) {
              c7 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              closure_130_1 = closure_131_12.getState().analyticsByProductId[purchase2.productId];
              giftOptionsForKey = closure_131_25[purchase2.productId];
              closure_130_3 = closure_131_1(closure_131_2[19]).v3(purchase2.purchaseToken);
              if (null != giftOptionsForKey) {
                let obj2 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION", key: closure_130_3, giftOptions: null };
                const obj3 = {};
                const merged = Object.assign(giftOptionsForKey);
                obj2.giftOptions = obj3;
                closure_131_1(closure_131_2[17]).dispatch(obj2);
                const obj39 = closure_131_1(closure_131_2[17]);
              } else {
                giftOptionsForKey = closure_131_6.getGiftOptionsForKey(closure_130_3);
              }
              c5 = 2;
              const obj38 = closure_131_1(closure_131_2[19]);
              let obj4 = { type: "GPLAY_VERIFICATION_START", productId: purchase2.productId };
              closure_131_1(closure_131_2[17]).dispatch(obj4);
              const IAPProductIds = closure_131_0(closure_131_2[16]).IAPProductIds;
              if (IAPProductIds.includes(purchase2.productId)) {
                c5 = 3;
                const obj48 = closure_131_1(closure_131_2[20])();
                closure_130_4 = closure_131_1(closure_131_2[20])().subtract(closure_131_0(closure_131_2[21]).DRAFT_ORDER_LOOKBACK_DAYS, "days").toISOString();
                const subtractResult = closure_131_1(closure_131_2[20])().subtract(closure_131_0(closure_131_2[21]).DRAFT_ORDER_LOOKBACK_DAYS, "days");
                planIdForGift = closure_131_0(closure_131_2[16]).getPlanIdForGift(purchase2.productId);
                let tmp202;
                if (null != planIdForGift) {
                  let skuId;
                  if (closure_131_20[planIdForGift] != null) {
                    skuId = tmp207.skuId;
                  }
                  tmp202 = skuId;
                }
                closure_130_6 = tmp202;
                const obj50 = closure_131_0(closure_131_2[16]);
                const obj5 = { status: closure_131_19.DRAFT, createdAfter: closure_130_4, skuId: closure_130_6, paymentGateway: closure_131_18.GOOGLE, isGift: true };
                c6 = 5;
                c7 = 1;
                let obj6 = { value: closure_131_0(closure_131_2[21]).getOrders(obj5), done: false };
                return obj6;
              } else if (purchase2.purchaseState === closure_131_15.PENDING) {
                c5 = 0;
                let obj7 = { type: "GPLAY_VERIFICATION_END", productId: purchase2.productId };
                closure_131_1(closure_131_2[17]).dispatch(obj7);
                c7 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                c6 = 7;
                c7 = 1;
                const obj8 = { value: closure_131_0(closure_131_2[18]).verifyPurchase(purchase2, giftOptionsForKey), done: false };
                return obj8;
              }
              const obj42 = closure_131_1(closure_131_2[17]);
            }
          break;
          case 2:
            c5 = 0;
            let obj35 = closure_131_1(closure_131_2[17]);
            const obj9 = { type: "GPLAY_VERIFICATION_END", productId: purchase2.productId };
            obj35.dispatch(obj9);
            throw closure_4;
          case 3:
            c5 = 1;
            closure_130_13 = closure_4;
            let obj28 = closure_131_0(closure_131_2[22]);
            let obj10 = { tags: null };
            const obj11 = { productId: purchase2.productId };
            obj10.tags = obj11;
            const result = obj28.captureBillingException(closure_130_13, obj10);
            const _HermesInternal3 = HermesInternal;
            closure_131_22.error("[handlePurchaseUpdated] Error verifying purchase " + purchase2.productId + ": " + closure_130_13.message);
            let obj31 = closure_131_1(closure_131_2[17]);
            let obj12 = { type: "GPLAY_PURCHASE_VERIFICATION_FAILED", productId: purchase2.productId };
            obj31.dispatch(obj12);
            closure_1 = closure_130_1;
            if (closure_130_1 == null) {
              closure_1 = {};
            }
            closure_130_10 = closure_1;
            const succeededOnlyFields = closure_130_10.succeededOnlyFields;
            closure_130_11 = closure_131_4(closure_130_10, closure_131_3);
            let obj33 = closure_131_1(closure_131_2[24]);
            const obj13 = {};
            const merged1 = Object.assign(closure_130_11);
            obj13.location = "handlePurchaseUpdated";
            obj13.product_id = purchase2.productId;
            obj13.purchase_token = purchase2.purchaseToken;
            obj13.error = closure_130_13.message;
            obj33.track(closure_131_16.GPLAY_PURCHASE_FAILED, obj13);
            c5 = 0;
            let obj14 = { type: "GPLAY_VERIFICATION_END", productId: purchase2.productId };
            closure_131_1(closure_131_2[17]).dispatch(obj14);
            const obj56 = closure_131_1(closure_131_2[17]);
          break;
          case 4:
            c5 = 2;
            closure_130_12 = closure_4;
            let obj25 = closure_131_0(closure_131_2[22]);
            const obj15 = { tags: { source: "GPlayManager_handlePurchaseUpdated_sign" }, extra: null };
            const obj16 = { productId: purchase2.productId };
            obj15.extra = obj16;
            const result1 = obj25.captureBillingException(closure_130_12, obj15);
            const _HermesInternal2 = HermesInternal;
            closure_131_22.error("[handlePurchaseUpdated] Failed to find or sign order: " + closure_130_12.message);
          break;
          case 5:
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              let obj22 = closure_131_1(closure_131_2[17]);
              const obj17 = { type: "GPLAY_VERIFICATION_END", productId: purchase2.productId };
              obj22.dispatch(obj17);
              c7 = 3;
              const obj18 = { value, done: true };
              return obj18;
            } else {
              closure_130_7 = value;
              if (closure_130_7.length > 0) {
                id = closure_130_7[0].id;
                const obj19 = { orderId: id, productId: purchase2.productId, skuId: closure_130_6 };
                closure_131_22.info("[handlePurchaseUpdated] Signing order from backend query", obj19);
                let obj20 = closure_131_0(closure_131_2[21]);
                c6 = 6;
                c7 = 1;
                obj20 = { value: null, done: false };
                obj20.value = obj20.markOrderAsSigningInProgress(id);
                return obj20;
              } else {
                const obj21 = { productId: purchase2.productId, skuId: closure_130_6 };
                closure_131_22.warn("[handlePurchaseUpdated] No draft order found for signing", obj21);
                c5 = 2;
              }
            }
          break;
          case 6:
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              obj22 = { type: "GPLAY_VERIFICATION_END", productId: purchase2.productId };
              closure_131_1(closure_131_2[17]).dispatch(obj22);
              c7 = 3;
              const obj23 = { value, done: true };
              return obj23;
            }
          break;
          case 7:
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              obj14 = closure_131_1(closure_131_2[17]);
              const obj24 = { type: "GPLAY_VERIFICATION_END", productId: purchase2.productId };
              obj14.dispatch(obj24);
              c7 = 3;
              obj25 = { value, done: true };
              return obj25;
            } else {
              closure_130_9 = value;
              let tmp14 = null != closure_130_9;
              if (tmp14) {
                tmp14 = null != giftOptionsForKey;
              }
              if (tmp14) {
                obj2 = closure_131_1(closure_131_2[17]);
                const obj26 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION", key: closure_130_3 };
                obj2.dispatch(obj26);
                const productId = purchase2.productId;
                delete tmp8[tmp7];
              }
              if (null != closure_130_9) {
                obj4 = closure_131_1(closure_131_2[17]);
                const obj27 = { type: "GPLAY_PURCHASE_VERIFIED", productId: purchase2.productId };
                obj4.dispatch(obj27);
              }
              if (null != closure_130_9) {
                const SubscriptionProductIds = closure_131_0(closure_131_2[16]).SubscriptionProductIds;
                if (!SubscriptionProductIds.includes(purchase2.productId)) {
                  obj6 = closure_131_0(closure_131_2[18]);
                  const result2 = obj6.sendPaymentCompleteAnalytics(purchase2);
                  const _HermesInternal = HermesInternal;
                  closure_131_22.info("[handlePurchaseUpdated] One Time Purchase verified and consumed: " + purchase2.productId);
                  c5 = 1;
                }
              }
              if (null != closure_130_9) {
                if (null != closure_130_9.pendingDowngrade) {
                  obj10 = closure_131_1(closure_131_2[17]);
                  obj28 = { type: "GPLAY_UPDATE_PENDING_DOWNGRADE", pendingDowngrade: closure_130_9.pendingDowngrade };
                  obj10.dispatch(obj28);
                  obj12 = closure_131_0(closure_131_2[23]);
                  c6 = 8;
                  c7 = 1;
                  const obj29 = { value: obj12.fetchSubscriptions(), done: false };
                  return obj29;
                }
              }
              if (purchase2.isActive) {
                c6 = 10;
                c7 = 1;
                const obj30 = { value: closure_131_40(), done: false };
                return obj30;
              } else {
                obj7 = closure_131_0(closure_131_2[23]);
                c6 = 9;
                c7 = 1;
                obj31 = { value: obj7.fetchSubscriptions(), done: false };
                return obj31;
              }
            }
          break;
          case 8:
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              const obj32 = { type: "GPLAY_VERIFICATION_END", productId: purchase2.productId };
              closure_131_1(closure_131_2[17]).dispatch(obj32);
              c7 = 3;
              obj33 = { value, done: true };
              return obj33;
            }
          break;
          case 9:
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              const obj34 = { type: "GPLAY_VERIFICATION_END", productId: purchase2.productId };
              closure_131_1(closure_131_2[17]).dispatch(obj34);
              c7 = 3;
              obj = { value, done: true };
              return obj;
            }
          break;
          default:
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              obj35 = { type: "GPLAY_VERIFICATION_END", productId: purchase2.productId };
              closure_131_1(closure_131_2[17]).dispatch(obj35);
              c7 = 3;
              const obj36 = { value, done: true };
              return obj36;
            }
        }
      } catch (tmp230) {
        closure_4 = tmp230;
        if (tmp5 === c5) {
          c7 = tmp3;
          throw tmp230;
        } else if (tmp2 === tmp232) {
          c6 = tmp;
        } else if (tmp === tmp232) {
          c6 = tmp3;
        } else {
          c6 = tmp6;
        }
      }
    }
  })();
  iter.next();
  return iter;
};
function handleDowngradeCommand() {
  const self = this;
  const apply = closure_37.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_37 = async function _handleDowngradeCommand(arg0) {
  let downgradeCommand = arg0;
  c3 = 0;
  c4 = 0;
  let iter = (async (arg0, value) => {
    if (1 === tmp4) {
      if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        return { value, done: true };
      } else if (closure_130_14.EXECUTE === downgradeCommand2) {
        c3 = 2;
        c4 = 1;
        return {
          value: (function executePendingDowngrade() {
                const self = this;
                const apply = closure_1_38.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(),
          done: false
        };
      } else if (closure_130_14.CLEAR === tmp26) {
        closure_130_39();
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Invalid downgrade state " + downgradeCommand2);
        throw error;
      }
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    }
    await "HermesInternal";
    downgradeCommand2 = downgradeCommand.downgradeCommand;
    return "PX_16";
  })();
  iter.next();
  return iter;
};
let closure_38 = async function _executePendingDowngrade(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp4;
          closure_0 = tmp8;
          closure_128_0 = undefined;
          pendingDowngrade = pendingDowngrade.getPendingDowngrade();
          closure_128_0 = pendingDowngrade;
          if (null != pendingDowngrade) {
            c3 = 2;
            DispatcherDefault.dispatch({ type: "GPLAY_UPDATE_IS_DOWNGRADING", isDowngrading: true });
            c4 = 3;
            c5 = 1;
            const obj1 = { value: GPlayActionCreators.downgradeSubscription(pendingDowngrade), done: false };
            return obj1;
          } else {
            c5 = 3;
          }
        }
      } else if (1 !== tmp8) {
        if (2 === tmp8) {
          c3 = 1;
          closure_128_1 = closure_2;
          let obj5 = closure_129_0(closure_129_2[22]);
          const result = obj5.captureBillingException(closure_128_1);
          let obj6 = closure_129_1(closure_129_2[25]);
          const obj2 = { title: null, body: null };
          const intl = closure_129_0(closure_129_2[26]).intl;
          obj2.title = intl.string(closure_129_0(closure_129_2[26]).t["U+H+kd"]);
          const intl2 = closure_129_0(closure_129_2[26]).intl;
          obj2.body = intl2.string(closure_129_0(closure_129_2[26]).t.LFFx5G);
          obj6.show(obj2);
          let newSubscriptionSkuId;
          if (closure_128_0 != null) {
            newSubscriptionSkuId = closure_128_0.newSubscriptionSkuId;
          }
          let obj3 = { location: "executePendingDowngrade", product_id: newSubscriptionSkuId, purchase_token: null, error: null };
          let purchaseToken;
          if (closure_128_0 != null) {
            purchaseToken = closure_128_0.purchaseToken;
          }
          obj3.purchase_token = purchaseToken;
          obj3.error = closure_128_1.message;
          closure_129_1(closure_129_2[24]).track(closure_129_16.GPLAY_PURCHASE_FAILED, obj3);
          const obj9 = closure_129_1(closure_129_2[24]);
        } else if (3 === tmp8) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            obj3 = closure_129_1(closure_129_2[17]);
            obj3.dispatch({ type: "GPLAY_UPDATE_IS_DOWNGRADING", isDowngrading: false });
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_129_39();
            c4 = 4;
            c5 = 1;
            obj5 = { value: closure_129_40(), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          obj = closure_129_1(closure_129_2[17]);
          obj.dispatch({ type: "GPLAY_UPDATE_IS_DOWNGRADING", isDowngrading: false });
          c5 = 3;
          obj6 = { value, done: true };
          return obj6;
        } else {
          c3 = 1;
        }
        c3 = 0;
        closure_129_1(closure_129_2[17]).dispatch({ type: "GPLAY_UPDATE_IS_DOWNGRADING", isDowngrading: false });
        const obj11 = closure_129_1(closure_129_2[17]);
      }
      c3 = 0;
      closure_129_1(closure_129_2[17]).dispatch({ type: "GPLAY_UPDATE_IS_DOWNGRADING", isDowngrading: false });
      throw closure_2;
    } catch (tmp64) {
      closure_2 = tmp64;
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
};
function clearPendingDowngrade() {
  DispatcherDefault.dispatch({ type: "GPLAY_UPDATE_PENDING_DOWNGRADE", pendingDowngrade: null });
}
function fetchAndAlertActiveSubscription() {
  const self = this;
  const apply = closure_41.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_41 = async function _fetchAndAlertActiveSubscription(arg0, value) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp5;
          closure_0 = tmp2;
          let premiumTypeSubscription;
          let obj1 = actions_BillingActionCreators;
          c2 = 1;
          c3 = 1;
          obj1 = { value: null, done: false };
          obj1.value = obj1.fetchSubscriptions();
          return obj1;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        premiumTypeSubscription = closure_129_10.getPremiumTypeSubscription();
        if (null == premiumTypeSubscription) {
          const _Error = Error;
          const intl = closure_129_0(closure_129_2[26]).intl;
          const error = new Error(intl.string(closure_129_0(closure_129_2[26]).t.PjfUXe));
          throw error;
        } else {
          closure_129_7();
          closure_129_8(() => {
            closure_1(paths[25]);
            let obj = {
              importer() {
                return closure_2_0(paths[28])(paths[27], paths.paths).then((result) => {
                  closure_0 = result.default;
                  return (arg0) => {
                    closure_0 = arg0;
                    const obj = {};
                    const merged = Object.assign(arg0);
                    obj.subscription = subscription;
                    obj.onClose = function onClose() { ... };
                    return closure_3_21(closure_0, obj);
                  };
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
};
function handleAppStateUpdated() {
  const self = this;
  const apply = closure_43.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_43 = async function _handleAppStateUpdated(arg0) {
  let state = arg0;
  c5 = 0;
  c6 = 0;
  c4 = 0;
  let iter = (async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
            closure_2 = tmp3;
            closure_1 = tmp5;
            let state2;
            state2 = state.state;
            c5 = 1;
            c6 = 1;
            return { value: "PX_16", done: true };
          }
        } else {
          if (1 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              let obj1 = { value, done: true };
              return obj1;
            } else if (closure_130_11.isReady()) {
              if (closure_130_9.isAuthenticated()) {
                if (state2 === closure_130_17.ACTIVE) {
                  obj1 = closure_130_0(closure_130_2[18]);
                  obj1.ensureSkusLoaded(closure_130_30);
                  c4 = 1;
                  c5 = 3;
                  c6 = 1;
                  const obj2 = { value: closure_130_23.loadPurchases(), done: false };
                  return obj2;
                }
              }
            }
          } else {
            if (2 === tmp8) {
              c4 = 0;
              closure_130_23.open();
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 !== 2) {
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
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
};
let closure_3 = ["succeededOnlyFields"];
get_ActivityIndicator = fn(17);
({ NativeEventEmitter, NativeModules } = get_ActivityIndicator);
const PremiumPlanPurchasedStore = fn(7421);
({ setPaymentSuccess: closure_7, showOldPaymentFlowSuccess: closure_8 } = PremiumPlanPurchasedStore);
const useGPlayAnalyticsStore = fn(9368).useGPlayAnalyticsStore;
let Constants = fn(7238);
({ GPlayConnectionState: map1, GPlayDowngradeCommand: closure_14, GPlayPurchaseState: closure_15 } = Constants);
Constants = fn(1074);
({ AnalyticEvents: closure_16, AppStates: closure_17, PaymentGateways: closure_18 } = Constants);
const OrderStatus = fn(4542).OrderStatus;
const SubscriptionPlanInfo = fn(1373).SubscriptionPlanInfo;
const jsx = fn(21).jsx;
let closure_22 = new LoggerDefault("GPlayManager.android");
const BillingManager = NativeModules.BillingManager;
const nativeEventEmitter = new NativeEventEmitter(BillingManager);
let giftInfoOptionsCache = {};
let closure_26 = null;
let closure_27 = null;
let closure_28 = null;
let closure_29 = null;
const items = [fn(7240).ProductIds.PREMIUM_TIER_2_MONTHLY];
giftInfoOptionsCache = {
  giftInfoOptionsCache,
  initialize() {
    closure_26 = nativeEventEmitter.addListener("billing-manager-connection-state-updated", handleConnectionStateUpdated);
    closure_27 = nativeEventEmitter.addListener("billing-manager-purchase-state-updated", handlePurchaseStateUpdated);
    closure_28 = nativeEventEmitter.addListener("billing-manager-purchase-updated", handlePurchaseUpdated);
    closure_29 = nativeEventEmitter.addListener("billing-manager-downgrade-command", handleDowngradeCommand);
    const subscription = DispatcherDefault.subscribe("APP_STATE_UPDATE", handleAppStateUpdated);
    const subscription1 = DispatcherDefault.subscribe("CONNECTION_OPEN", handleConnectionOpen);
    BillingManager.open();
  },
  terminate() {
    BillingManager.close();
    if (closure_26 != null) {
      obj.remove();
    }
    if (closure_27 != null) {
      obj2.remove();
    }
    if (closure_28 != null) {
      obj3.remove();
    }
    if (closure_29 != null) {
      obj4.remove();
    }
    DispatcherDefault.unsubscribe("APP_STATE_UPDATE", handleAppStateUpdated);
    obj = closure_26;
    obj2 = closure_27;
    obj3 = closure_28;
    obj4 = closure_29;
    DispatcherDefault.unsubscribe("CONNECTION_OPEN", handleConnectionOpen);
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/gplay/native/GPlayManager.android.tsx");

export default giftInfoOptionsCache;
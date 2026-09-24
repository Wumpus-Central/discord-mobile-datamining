// === Module 11056: GPlayManager ===

// Module 11056 (GPlayManager)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 5166 */;
import GPlayActionCreators from "GPlayActionCreators" /* 9562 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GiftPromotionStore from "GiftPromotionStore" /* 7750 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SubscriptionStore from "SubscriptionStore" /* 4489 */;
import IAPStore from "IAPStore" /* 7570 */;

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
  let iter = (async (arg0) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp10 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
              const obj4 = { value, done: true };
              return obj4;
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
              return { value: "flex", done: true };
            }
          break;
          case 1:
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else if (closure_131_11.isPurchasingProduct(purchase2.productId)) {
              c7 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              closure_130_1 = closure_131_12.getState().analyticsByProductId[purchase2.productId];
              giftOptionsForKey = closure_131_25[purchase2.productId];
              closure_130_3 = closure_131_1(closure_131_2[19]).v3(purchase2.purchaseToken);
              if (null != giftOptionsForKey) {
                const obj9 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION", key: closure_130_3, giftOptions: null };
                const obj10 = {};
                const merged = Object.assign(giftOptionsForKey);
                obj9.giftOptions = obj10;
                closure_131_1(closure_131_2[17]).dispatch(obj9);
                const obj39 = closure_131_1(closure_131_2[17]);
              } else {
                giftOptionsForKey = closure_131_6.getGiftOptionsForKey(closure_130_3);
              }
              c5 = 2;
              const obj38 = closure_131_1(closure_131_2[19]);
              const obj12 = { type: "GPLAY_VERIFICATION_START", productId: purchase2.productId };
              closure_131_1(closure_131_2[17]).dispatch(obj12);
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
                const obj14 = { status: closure_131_19.DRAFT, createdAfter: closure_130_4, skuId: closure_130_6, paymentGateway: closure_131_18.GOOGLE, isGift: true };
                c6 = 5;
                c7 = 1;
                const obj16 = { value: closure_131_0(closure_131_2[21]).getOrders(obj14), done: false };
                return obj16;
              } else if (purchase2.purchaseState === closure_131_15.PENDING) {
                c5 = 0;
                const obj17 = { type: "GPLAY_VERIFICATION_END", productId: purchase2.productId };
                closure_131_1(closure_131_2[17]).dispatch(obj17);
                c7 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                c6 = 7;
                c7 = 1;
                const obj18 = { value: closure_131_0(closure_131_2[18]).verifyPurchase(purchase2, giftOptionsForKey), done: false };
                return obj18;
              }
              const obj42 = closure_131_1(closure_131_2[17]);
            }
          break;
          case 2:
            c5 = 0;
            const obj19 = { type: "GPLAY_VERIFICATION_END", productId: purchase2.productId };
            closure_131_1(closure_131_2[17]).dispatch(obj19);
            throw closure_4;
          case 3:
            c5 = 1;
            closure_130_13 = closure_4;
            const obj20 = { tags: null };
            const obj22 = { productId: purchase2.productId };
            obj20.tags = obj22;
            const result = closure_131_0(closure_131_2[22]).captureBillingException(closure_130_13, obj20);
            const _HermesInternal3 = HermesInternal;
            closure_131_22.error("[handlePurchaseUpdated] Error verifying purchase " + purchase2.productId + ": " + closure_130_13.message);
            const obj29 = closure_131_0(closure_131_2[22]);
            const obj24 = { type: "GPLAY_PURCHASE_VERIFICATION_FAILED", productId: purchase2.productId };
            closure_131_1(closure_131_2[17]).dispatch(obj24);
            closure_1 = closure_130_1;
            if (closure_130_1 == null) {
              closure_1 = {};
            }
            closure_130_10 = closure_1;
            const succeededOnlyFields = closure_130_10.succeededOnlyFields;
            closure_130_11 = closure_131_4(closure_130_10, closure_131_3);
            const obj32 = closure_131_1(closure_131_2[17]);
            const obj25 = {};
            const merged1 = Object.assign(closure_130_11);
            obj25.location = "handlePurchaseUpdated";
            obj25.product_id = purchase2.productId;
            obj25.purchase_token = purchase2.purchaseToken;
            obj25.error = closure_130_13.message;
            closure_131_1(closure_131_2[24]).track(closure_131_16.GPLAY_PURCHASE_FAILED, obj25);
            c5 = 0;
            const obj34 = closure_131_1(closure_131_2[24]);
            const obj27 = { type: "GPLAY_VERIFICATION_END", productId: purchase2.productId };
            closure_131_1(closure_131_2[17]).dispatch(obj27);
            const obj56 = closure_131_1(closure_131_2[17]);
          break;
          case 4:
            c5 = 2;
            closure_130_12 = closure_4;
            const obj28 = { tags: { source: "GPlayManager_handlePurchaseUpdated_sign" }, extra: null };
            const obj30 = { productId: purchase2.productId };
            obj28.extra = obj30;
            const result1 = closure_131_0(closure_131_2[22]).captureBillingException(closure_130_12, obj28);
            const _HermesInternal2 = HermesInternal;
            closure_131_22.error("[handlePurchaseUpdated] Failed to find or sign order: " + closure_130_12.message);
            const obj26 = closure_131_0(closure_131_2[22]);
          break;
          case 5:
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              const obj31 = { type: "GPLAY_VERIFICATION_END", productId: purchase2.productId };
              closure_131_1(closure_131_2[17]).dispatch(obj31);
              c7 = 3;
              const obj33 = { value, done: true };
              return obj33;
            } else {
              closure_130_7 = value;
              if (closure_130_7.length > 0) {
                id = closure_130_7[0].id;
                const obj35 = { orderId: id, productId: purchase2.productId, skuId: closure_130_6 };
                closure_131_22.info("[handlePurchaseUpdated] Signing order from backend query", obj35);
                c6 = 6;
                c7 = 1;
                const obj37 = { value: closure_131_0(closure_131_2[21]).markOrderAsSigningInProgress(id), done: false };
                return obj37;
              } else {
                const obj40 = { productId: purchase2.productId, skuId: closure_130_6 };
                closure_131_22.warn("[handlePurchaseUpdated] No draft order found for signing", obj40);
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
              const obj41 = { type: "GPLAY_VERIFICATION_END", productId: purchase2.productId };
              closure_131_1(closure_131_2[17]).dispatch(obj41);
              c7 = 3;
              const obj43 = { value, done: true };
              return obj43;
            }
          break;
          case 7:
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              const obj45 = { type: "GPLAY_VERIFICATION_END", productId: purchase2.productId };
              closure_131_1(closure_131_2[17]).dispatch(obj45);
              c7 = 3;
              const obj47 = { value, done: true };
              return obj47;
            } else {
              closure_130_9 = value;
              let tmp14 = null != closure_130_9;
              if (tmp14) {
                tmp14 = null != giftOptionsForKey;
              }
              if (tmp14) {
                const obj49 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION", key: closure_130_3 };
                closure_131_1(closure_131_2[17]).dispatch(obj49);
                const productId = purchase2.productId;
                delete tmp8[tmp7];
                const obj3 = closure_131_1(closure_131_2[17]);
              }
              if (null != closure_130_9) {
                const obj52 = { type: "GPLAY_PURCHASE_VERIFIED", productId: purchase2.productId };
                closure_131_1(closure_131_2[17]).dispatch(obj52);
                const obj5 = closure_131_1(closure_131_2[17]);
              }
              if (null != closure_130_9) {
                const SubscriptionProductIds = closure_131_0(closure_131_2[16]).SubscriptionProductIds;
                if (!SubscriptionProductIds.includes(purchase2.productId)) {
                  const result2 = closure_131_0(closure_131_2[18]).sendPaymentCompleteAnalytics(purchase2);
                  const _HermesInternal = HermesInternal;
                  closure_131_22.info("[handlePurchaseUpdated] One Time Purchase verified and consumed: " + purchase2.productId);
                  c5 = 1;
                  const obj7 = closure_131_0(closure_131_2[18]);
                }
              }
              if (null != closure_130_9) {
                if (null != closure_130_9.pendingDowngrade) {
                  const obj53 = { type: "GPLAY_UPDATE_PENDING_DOWNGRADE", pendingDowngrade: closure_130_9.pendingDowngrade };
                  closure_131_1(closure_131_2[17]).dispatch(obj53);
                  const obj11 = closure_131_1(closure_131_2[17]);
                  c6 = 8;
                  c7 = 1;
                  const obj54 = { value: closure_131_0(closure_131_2[23]).fetchSubscriptions(), done: false };
                  return obj54;
                }
              }
              if (purchase2.isActive) {
                c6 = 10;
                c7 = 1;
                const obj55 = { value: closure_131_40(), done: false };
                return obj55;
              } else {
                c6 = 9;
                c7 = 1;
                const obj57 = { value: closure_131_0(closure_131_2[23]).fetchSubscriptions(), done: false };
                return obj57;
              }
            }
          break;
          case 8:
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              const obj59 = { type: "GPLAY_VERIFICATION_END", productId: purchase2.productId };
              closure_131_1(closure_131_2[17]).dispatch(obj59);
              c7 = 3;
              const obj60 = { value, done: true };
              return obj60;
            }
          break;
          case 9:
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              const obj61 = { type: "GPLAY_VERIFICATION_END", productId: purchase2.productId };
              closure_131_1(closure_131_2[17]).dispatch(obj61);
              c7 = 3;
              const obj = { value, done: true };
              return obj;
            }
          break;
          default:
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              const obj63 = { type: "GPLAY_VERIFICATION_END", productId: purchase2.productId };
              closure_131_1(closure_131_2[17]).dispatch(obj63);
              c7 = 3;
              const obj65 = { value, done: true };
              return obj65;
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
  let iter = (async (arg0) => {
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
    return "flex";
  })();
  iter.next();
  return iter;
};
let closure_38 = async function _executePendingDowngrade() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
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
            const obj5 = { value: GPlayActionCreators.downgradeSubscription(pendingDowngrade), done: false };
            return obj5;
          } else {
            c5 = 3;
          }
        }
      } else if (1 !== tmp8) {
        if (2 === tmp8) {
          c3 = 1;
          closure_128_1 = closure_2;
          const result = closure_129_0(closure_129_2[22]).captureBillingException(closure_128_1);
          const obj6 = closure_129_0(closure_129_2[22]);
          const obj8 = { title: null, body: null };
          const intl = closure_129_0(closure_129_2[26]).intl;
          obj8.title = intl.string(closure_129_0(closure_129_2[26]).t["U+H+kd"]);
          const intl2 = closure_129_0(closure_129_2[26]).intl;
          obj8.body = intl2.string(closure_129_0(closure_129_2[26]).t.LFFx5G);
          closure_129_1(closure_129_2[25]).show(obj8);
          const obj7 = closure_129_1(closure_129_2[25]);
          let newSubscriptionSkuId;
          if (closure_128_0 != null) {
            newSubscriptionSkuId = closure_128_0.newSubscriptionSkuId;
          }
          const obj10 = { location: "executePendingDowngrade", product_id: newSubscriptionSkuId, purchase_token: null, error: null };
          let purchaseToken;
          if (closure_128_0 != null) {
            purchaseToken = closure_128_0.purchaseToken;
          }
          obj10.purchase_token = purchaseToken;
          obj10.error = closure_128_1.message;
          closure_129_1(closure_129_2[24]).track(closure_129_16.GPLAY_PURCHASE_FAILED, obj10);
          const obj9 = closure_129_1(closure_129_2[24]);
        } else if (3 === tmp8) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_1(closure_129_2[17]).dispatch({ type: "GPLAY_UPDATE_IS_DOWNGRADING", isDowngrading: false });
            c5 = 3;
            const obj15 = { value, done: true };
            return obj15;
          } else {
            closure_129_39();
            c4 = 4;
            c5 = 1;
            const obj16 = { value: closure_129_40(), done: false };
            return obj16;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_129_1(closure_129_2[17]).dispatch({ type: "GPLAY_UPDATE_IS_DOWNGRADING", isDowngrading: false });
          c5 = 3;
          const obj17 = { value, done: true };
          return obj17;
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
let closure_41 = async function _fetchAndAlertActiveSubscription() {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_1 = tmp5;
          closure_0 = tmp2;
          let premiumTypeSubscription;
          c2 = 1;
          c3 = 1;
          const obj5 = { value: actions_BillingActionCreators.fetchSubscriptions(), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        let obj = { value, done: true };
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
            closure_1(paths[25]).openLazy({
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
              },
              isDismissable: false
            });
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
  let iter = (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp5;
            let state2;
            state2 = state.state;
            c5 = 1;
            c6 = 1;
            return { value: "flex", done: true };
          }
        } else {
          if (1 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else if (closure_130_11.isReady()) {
              if (closure_130_9.isAuthenticated()) {
                if (state2 === closure_130_17.ACTIVE) {
                  closure_130_0(closure_130_2[18]).ensureSkusLoaded(closure_130_30);
                  c4 = 1;
                  c5 = 3;
                  c6 = 1;
                  const obj6 = { value: closure_130_23.loadPurchases(), done: false };
                  return obj6;
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
            const obj = { value, done: true };
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
const PremiumPlanPurchasedStore = fn(7751);
({ setPaymentSuccess: closure_7, showOldPaymentFlowSuccess: closure_8 } = PremiumPlanPurchasedStore);
const useGPlayAnalyticsStore = fn(9563).useGPlayAnalyticsStore;
let Constants = fn(7571);
({ GPlayConnectionState: map1, GPlayDowngradeCommand: closure_14, GPlayPurchaseState: closure_15 } = Constants);
Constants = fn(1074);
({ AnalyticEvents: closure_16, AppStates: closure_17, PaymentGateways: closure_18 } = Constants);
const OrderStatus = fn(4811).OrderStatus;
const SubscriptionPlanInfo = fn(1374).SubscriptionPlanInfo;
const jsx = fn(21).jsx;
let closure_22 = new LoggerDefault("GPlayManager.android");
const BillingManager = NativeModules.BillingManager;
const nativeEventEmitter = new NativeEventEmitter(BillingManager);
const giftInfoOptionsCache = {};
let closure_26 = null;
let closure_27 = null;
let closure_28 = null;
let closure_29 = null;
const items = [fn(7573).ProductIds.PREMIUM_TIER_2_MONTHLY];
const size = fn(2);
let result = size.fileFinishedImporting("modules/gplay/native/GPlayManager.android.tsx");

export default {
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
      closure_26.remove();
    }
    if (closure_27 != null) {
      closure_27.remove();
    }
    if (closure_28 != null) {
      closure_28.remove();
    }
    if (closure_29 != null) {
      closure_29.remove();
    }
    DispatcherDefault.unsubscribe("APP_STATE_UPDATE", handleAppStateUpdated);
    DispatcherDefault.unsubscribe("CONNECTION_OPEN", handleConnectionOpen);
  }
};
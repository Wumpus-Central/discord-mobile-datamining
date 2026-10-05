// discord_app/modules/gplay/native/GPlayManager.android.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import DispatcherDefault from "../../../Dispatcher.tsx";
import PremiumConstants from "../../premium/PremiumConstants.tsx";
import PaymentConstants from "../../payments/PaymentConstants.tsx";
import actions_BillingActionCreators from "../../billing/actions/BillingActionCreators.tsx";
import ProductIds from "../../premium/native/ProductIds.android.tsx";
import GPlayActionCreators from "../../../actions/native/GPlayActionCreators.tsx";
import GPlayAnalyticsStore from "GPlayAnalyticsStore.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import GiftPromotionStore from "../../premium/gifting/GiftPromotionStore.tsx";
import PremiumPlanPurchasedStore from "../../premium/native/PremiumPlanPurchasedStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import SubscriptionStore from "../../../stores/billing/SubscriptionStore.tsx";
import IAPStore from "../../../stores/native/IAPStore.android.tsx";
import Constants_mod from "Constants.tsx";
import Constants_mod2 from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c2, createdAfter, key, length, pendingDowngrade, purchases, succeededOnlyFields;

let NativeEventEmitter;
let NativeModules;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let map1;
let metroImportAll;
let metroImportDefault;
function handleConnectionStateUpdated(connectionState) {
  connectionState = connectionState.connectionState;
  obj = DispatcherDefault;
  obj.dispatch({ type: "GPLAY_UPDATE_CONNECTION_STATE", connectionState });
  if (connectionState === map1.CONNECTED) {
    const obj2 = GPlayActionCreators;
    const userCountry = obj2.loadUserCountry();
    userCountry.finally(() => {
      obj = GPlayActionCreators;
      return obj.ensureSkusLoaded(items);
    });
  }
}
function handleConnectionOpen() {
  obj = GPlayActionCreators;
  obj.ensureSkusLoaded(items);
}
function handlePurchaseStateUpdated(arg0) {
  let billingResult;
  let isActivePurchase;
  ({ billingResult, isActivePurchase } = arg0);
  obj = DispatcherDefault;
  obj.dispatch({ type: "GPLAY_UPDATE_PURCHASE_STATE", billingResult, isActivePurchase });
}
function handlePurchaseUpdated() {
  return obj(...arguments);
}
let obj = function _handlePurchaseUpdated() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_2;
    let purchase = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (async (arg0) => {
      let obj10;
      let obj13;
      let obj21;
      let obj22;
      let obj30;
      let obj42;
      let obj49;
      let obj8;
      if (c7 === 2) {
        c7 = 3;
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
          let giftOptionsForKey;
          let planIdForGift;
          let skuId;
          let id;
          let closure_9;
          let closure_11;
          c7 = 2;
          switch (c6) {
            case 0: {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                return { value, done: true };
              } else {
                purchase = undefined;
                const purchaseValue = purchase.purchase;
                closure_1 = undefined;
                giftOptionsForKey = undefined;
                key = undefined;
                createdAfter = undefined;
                planIdForGift = undefined;
                skuId = undefined;
                length = undefined;
                id = undefined;
                closure_9 = undefined;
                succeededOnlyFields = undefined;
                closure_11 = undefined;
                c6 = 1;
                c7 = 1;
                return { value: "Set", done: true };
              }
              break;
            }
            case 1: {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                return { value, done: true };
              } else if (closure_131_11.isPurchasingProduct(purchase.productId)) {
                c7 = 3;
                return { value: "IconComponent", done: null };
              } else {
                closure_1 = closure_131_12.getState().analyticsByProductId[purchase.productId];
                giftOptionsForKey = closure_131_25[purchase.productId];
                const obj37 = closure_131_1(closure_131_2[19]);
                key = obj37.v3(purchase.purchaseToken);
                if (null != giftOptionsForKey) {
                  const obj9 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION", key, giftOptions: obj10 };
                  obj10 = {};
                  const dispatch = closure_131_1(closure_131_2[17]).dispatch;
                  closure_131_1(closure_131_2[17]);
                  const merged = Object.assign(giftOptionsForKey);
                  dispatch(obj9);
                } else {
                  giftOptionsForKey = closure_131_6.getGiftOptionsForKey(key);
                }
                c5 = 2;
                const obj12 = { type: "GPLAY_VERIFICATION_START", productId: purchase.productId };
                const obj40 = closure_131_1(closure_131_2[17]);
                obj40.dispatch(obj12);
                const IAPProductIds = closure_131_0(closure_131_2[16]).IAPProductIds;
                if (IAPProductIds.includes(purchase.productId)) {
                  c5 = 3;
                  const obj46 = closure_131_1(closure_131_2[20])();
                  const subtractResult = obj46.subtract(
                    closure_131_0(closure_131_2[21]).DRAFT_ORDER_LOOKBACK_DAYS,
                    "days",
                  );
                  createdAfter = subtractResult.toISOString();
                  const obj48 = closure_131_0(closure_131_2[16]);
                  planIdForGift = obj48.getPlanIdForGift(purchase.productId);
                  let tmp196;
                  if (null != planIdForGift) {
                    skuId = undefined;
                    if (closure_131_20[planIdForGift] != null) {
                      skuId = tmp201.skuId;
                    }
                    tmp196 = skuId;
                  }
                  skuId = tmp196;
                  c6 = 5;
                  c7 = 1;
                  const obj14 = {
                    status: closure_131_19.DRAFT,
                    createdAfter,
                    skuId,
                    paymentGateway: closure_131_18.GOOGLE,
                    isGift: true,
                  };
                  const obj16 = { value: obj49.getOrders(obj14), done: false };
                  obj49 = closure_131_0(closure_131_2[21]);
                  return obj16;
                } else if (purchase.purchaseState === closure_131_15.PENDING) {
                  c5 = 0;
                  const obj17 = { type: "GPLAY_VERIFICATION_END", productId: purchase.productId };
                  const obj44 = closure_131_1(closure_131_2[17]);
                  obj44.dispatch(obj17);
                  c7 = 3;
                  return { value: "IconComponent", done: null };
                } else {
                  c6 = 7;
                  c7 = 1;
                  const obj18 = { value: obj42.verifyPurchase(purchase, giftOptionsForKey), done: false };
                  obj42 = closure_131_0(closure_131_2[18]);
                  return obj18;
                }
              }
              break;
            }
            case 2: {
              c5 = 0;
              const obj19 = { type: "GPLAY_VERIFICATION_END", productId: purchase.productId };
              const obj35 = closure_131_1(closure_131_2[17]);
              obj35.dispatch(obj19);
              throw createdAfter;
            }
            case 3: {
              c5 = 1;
              let closure_13 = createdAfter;
              const obj20 = { tags: obj22 };
              obj22 = { productId: purchase.productId };
              const obj29 = closure_131_0(closure_131_2[22]);
              const result = obj29.captureBillingException(closure_13, obj20);
              const _HermesInternal3 = HermesInternal;
              closure_131_22.error(
                "[handlePurchaseUpdated] Error verifying purchase " + purchase.productId + ": " + closure_13.message,
              );
              const obj24 = { type: "GPLAY_PURCHASE_VERIFICATION_FAILED", productId: purchase.productId };
              const obj32 = closure_131_1(closure_131_2[17]);
              obj32.dispatch(obj24);
              if (closure_1 == null) {
                closure_1 = {};
              }
              succeededOnlyFields = closure_1;
              const succeededOnlyFieldsValue = succeededOnlyFields.succeededOnlyFields;
              closure_11 = closure_131_4(succeededOnlyFieldsValue, closure_131_3);
              const obj25 = {
                location: "handlePurchaseUpdated",
                product_id: purchase.productId,
                purchase_token: purchase.purchaseToken,
                error: closure_13.message,
              };
              const track = closure_131_1(closure_131_2[24]).track;
              const GPLAY_PURCHASE_FAILED = closure_131_16.GPLAY_PURCHASE_FAILED;
              closure_131_1(closure_131_2[24]);
              const merged1 = Object.assign(closure_11);
              track(GPLAY_PURCHASE_FAILED, obj25);
              c5 = 0;
              const obj27 = { type: "GPLAY_VERIFICATION_END", productId: purchase.productId };
              const obj54 = closure_131_1(closure_131_2[17]);
              obj54.dispatch(obj27);
              break;
            }
            case 4: {
              c5 = 2;
              message = createdAfter;
              const obj28 = { tags: { source: "GPlayManager_handlePurchaseUpdated_sign" }, extra: obj30 };
              obj30 = { productId: purchase.productId };
              const obj26 = closure_131_0(closure_131_2[22]);
              const result1 = obj26.captureBillingException(message, obj28);
              const _HermesInternal2 = HermesInternal;
              closure_131_22.error("[handlePurchaseUpdated] Failed to find or sign order: " + message.message);
              break;
            }
            case 5: {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                const obj31 = { type: "GPLAY_VERIFICATION_END", productId: purchase.productId };
                const obj23 = closure_131_1(closure_131_2[17]);
                obj23.dispatch(obj31);
                c7 = 3;
                return { value, done: true };
              } else {
                length = value;
                if (length.length > 0) {
                  id = length[0].id;
                  const obj34 = { orderId: id, productId: purchase.productId, skuId };
                  closure_131_22.info("[handlePurchaseUpdated] Signing order from backend query", obj34);
                  c6 = 6;
                  c7 = 1;
                  const obj36 = { value: obj21.markOrderAsSigningInProgress(id), done: false };
                  obj21 = closure_131_0(closure_131_2[21]);
                  return obj36;
                } else {
                  const obj38 = { productId: purchase.productId, skuId };
                  closure_131_22.warn("[handlePurchaseUpdated] No draft order found for signing", obj38);
                  c5 = 2;
                }
              }
              break;
            }
            case 6: {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                const obj39 = { type: "GPLAY_VERIFICATION_END", productId: purchase.productId };
                const obj64 = closure_131_1(closure_131_2[17]);
                obj64.dispatch(obj39);
                c7 = 3;
                return { value, done: true };
              }
              break;
            }
            case 7: {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                const obj43 = { type: "GPLAY_VERIFICATION_END", productId: purchase.productId };
                const obj15 = closure_131_1(closure_131_2[17]);
                obj15.dispatch(obj43);
                c7 = 3;
                return { value, done: true };
              } else {
                closure_9 = value;
                const tmp7 = null != closure_9 && null != giftOptionsForKey;
                if (tmp7) {
                  const obj47 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION", key };
                  const obj3 = closure_131_1(closure_131_2[17]);
                  obj3.dispatch(obj47);
                  delete closure_131_25[purchase.productId];
                }
                if (null != closure_9) {
                  const obj50 = { type: "GPLAY_PURCHASE_VERIFIED", productId: purchase.productId };
                  const obj5 = closure_131_1(closure_131_2[17]);
                  obj5.dispatch(obj50);
                }
                if (null != closure_9) {
                  const SubscriptionProductIds = closure_131_0(closure_131_2[16]).SubscriptionProductIds;
                  if (!SubscriptionProductIds.includes(purchase.productId)) {
                    const obj7 = closure_131_0(closure_131_2[18]);
                    const result2 = obj7.sendPaymentCompleteAnalytics(purchase);
                    const _HermesInternal = HermesInternal;
                    closure_131_22.info(
                      "[handlePurchaseUpdated] One Time Purchase verified and consumed: " + purchase.productId,
                    );
                    c5 = 1;
                  }
                }
                if (null != closure_9) {
                  if (null != closure_9.pendingDowngrade) {
                    const obj51 = {
                      type: "GPLAY_UPDATE_PENDING_DOWNGRADE",
                      pendingDowngrade: closure_9.pendingDowngrade,
                    };
                    const obj11 = closure_131_1(closure_131_2[17]);
                    obj11.dispatch(obj51);
                    c6 = 8;
                    c7 = 1;
                    const obj52 = { value: obj13.fetchSubscriptions(), done: false };
                    obj13 = closure_131_0(closure_131_2[23]);
                    return obj52;
                  }
                }
                if (purchase.isActive) {
                  c6 = 10;
                  c7 = 1;
                  const obj53 = { value: closure_131_40(), done: false };
                  return obj53;
                } else {
                  c6 = 9;
                  c7 = 1;
                  const obj55 = { value: obj8.fetchSubscriptions(), done: false };
                  obj8 = closure_131_0(closure_131_2[23]);
                  return obj55;
                }
              }
              break;
            }
            case 8: {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                const obj57 = { type: "GPLAY_VERIFICATION_END", productId: purchase.productId };
                const obj62 = closure_131_1(closure_131_2[17]);
                obj62.dispatch(obj57);
                c7 = 3;
                return { value, done: true };
              }
              break;
            }
            case 9: {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                const obj59 = { type: "GPLAY_VERIFICATION_END", productId: purchase.productId };
                const obj60 = closure_131_1(closure_131_2[17]);
                obj60.dispatch(obj59);
                c7 = 3;
                return { value, done: true };
              }
              break;
            }
            default: {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                const obj61 = { type: "GPLAY_VERIFICATION_END", productId: purchase.productId };
                const obj56 = closure_131_1(closure_131_2[17]);
                obj56.dispatch(obj61);
                c7 = 3;
                return { value, done: true };
              }
              break;
            }
          }
        } catch (tmp224) {
          createdAfter = tmp224;
          if (0 === c5) {
            c7 = 3;
            throw tmp224;
          } else if (1 === c5) {
            c6 = 2;
          } else if (2 === c5) {
            c6 = 3;
          } else {
            c6 = 4;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
function handleDowngradeCommand() {
  return obj(...arguments);
}
obj = function _handleDowngradeCommand() {
  obj = _asyncToGenerator(async (arg0) => {
    let c1;
    let closure_2;
    let downgradeCommand = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (async function (arg0) {
      function executePendingDowngrade() {
        return closure_1_38(...arguments);
      }
      if (1 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          return { value, done: true };
        } else if (closure_130_14.EXECUTE === downgradeCommand) {
          c3 = 2;
          c4 = 1;
          const obj5 = { value: executePendingDowngrade(), done: false };
          return obj5;
        } else if (closure_130_14.CLEAR === tmp22) {
          closure_130_39();
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const self = this;
          const self2 = this;
          const error = new Error("Invalid downgrade state " + downgradeCommand);
          throw error;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        return { value, done: true };
      }
      await "IconComponent";
      downgradeCommand = downgradeCommand.downgradeCommand;
      return "Set";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _executePendingDowngrade() {
  obj = _asyncToGenerator(async () => {
    let intl;
    let intl2;
    let obj12;
    let purchaseToken;
    if (c5 === 2) {
      c5 = 3;
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
      let c3;
      try {
        let message;
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
            message = tmp;
            let closure_0 = tmp4;
            pendingDowngrade = undefined;
            pendingDowngrade = pendingDowngrade.getPendingDowngrade();
            if (null != pendingDowngrade) {
              c3 = 2;
              const obj11 = DispatcherDefault;
              obj11.dispatch({ type: "GPLAY_UPDATE_IS_DOWNGRADING", isDowngrading: true });
              c4 = 3;
              c5 = 1;
              const obj5 = { value: obj12.downgradeSubscription(pendingDowngrade), done: false };
              obj12 = GPlayActionCreators;
              return obj5;
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          const obj10 = closure_129_1(closure_129_2[17]);
          obj10.dispatch({ type: "GPLAY_UPDATE_IS_DOWNGRADING", isDowngrading: false });
          throw closure_2;
        } else {
          if (2 === c4) {
            c3 = 1;
            message = closure_2;
            const obj6 = closure_129_0(closure_129_2[22]);
            const result = obj6.captureBillingException(message);
            const obj7 = {
              title: intl.string(closure_129_0(closure_129_2[26]).t["U+H+kd"]),
              body: intl2.string(closure_129_0(closure_129_2[26]).t.LFFx5G),
            };
            const show = closure_129_1(closure_129_2[25]).show;
            const tmp27 = closure_129_1(closure_129_2[25]);
            intl = closure_129_0(closure_129_2[26]).intl;
            intl2 = closure_129_0(closure_129_2[26]).intl;
            show(obj7);
            let newSubscriptionSkuId;
            const track = closure_129_1(closure_129_2[24]).track;
            const GPLAY_PURCHASE_FAILED = closure_129_16.GPLAY_PURCHASE_FAILED;
            const tmp39 = closure_129_1(closure_129_2[24]);
            if (pendingDowngrade != null) {
              newSubscriptionSkuId = pendingDowngrade.newSubscriptionSkuId;
            }
            const obj8 = {
              location: "executePendingDowngrade",
              product_id: newSubscriptionSkuId,
              purchase_token: purchaseToken,
              error: message.message,
            };
            purchaseToken = undefined;
            if (pendingDowngrade != null) {
              purchaseToken = pendingDowngrade.purchaseToken;
            }
            track(GPLAY_PURCHASE_FAILED, obj8);
          } else if (3 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              const obj4 = closure_129_1(closure_129_2[17]);
              obj4.dispatch({ type: "GPLAY_UPDATE_IS_DOWNGRADING", isDowngrading: false });
              c5 = 3;
              const obj13 = { value, done: true };
              return obj13;
            } else {
              closure_129_39();
              c4 = 4;
              c5 = 1;
              const obj14 = { value: closure_129_40(), done: false };
              return obj14;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            obj = closure_129_1(closure_129_2[17]);
            obj.dispatch({ type: "GPLAY_UPDATE_IS_DOWNGRADING", isDowngrading: false });
            c5 = 3;
            const obj15 = { value, done: true };
            return obj15;
          } else {
            c3 = 1;
          }
          c3 = 0;
          const obj9 = closure_129_1(closure_129_2[17]);
          obj9.dispatch({ type: "GPLAY_UPDATE_IS_DOWNGRADING", isDowngrading: false });
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp62) {
        closure_2 = tmp62;
        if (0 === c3) {
          c5 = 3;
          throw tmp62;
        } else if (1 === tmp64) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
function clearPendingDowngrade() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "GPLAY_UPDATE_PENDING_DOWNGRADE", pendingDowngrade: null });
}
function fetchAndAlertActiveSubscription() {
  return obj(...arguments);
}
obj = function _fetchAndAlertActiveSubscription() {
  obj = _asyncToGenerator(async function () {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let premiumTypeSubscription;
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
            let closure_1 = tmp4;
            premiumTypeSubscription = undefined;
            let obj2 = actions_BillingActionCreators;
            c2 = 1;
            c3 = 1;
            const obj5 = { value: obj2.fetchSubscriptions(), done: false };
            return obj5;
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
            const self = this;
            const self2 = this;
            const error = new Error(intl.string(closure_129_0(closure_129_2[26]).t.PjfUXe));
            throw error;
          } else {
            closure_129_7();
            closure_129_8(() => {
              obj = closure_1(paths[25]);
              const obj2 = {
                importer() {
                  let subscription;
                  const promise = closure_2_0(paths[28])(paths[27], paths.paths);
                  return promise.then((result) => {
                    closure_0 = result.default;
                    return (arg0) => {
                      closure_0 = arg0;
                      obj = {
                        subscription,
                        onClose() {
                          closure_0.onClose();
                          obj = closure_2_1(closure_2_2[29]);
                          obj.popWithKey(closure_2_0(closure_2_2[30]).PREMIUM_KEY);
                        },
                      };
                      const merged = Object.assign(arg0);
                      return closure_3_21(closure_0, obj);
                    };
                  });
                },
                isDismissable: false,
              };
              obj.openLazy(obj2);
            });
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        }
      } catch (tmp21) {
        c3 = 3;
        throw tmp21;
      }
    }
  });
  return obj(...arguments);
};
function handleAppStateUpdated() {
  return obj(...arguments);
}
obj = function _handleAppStateUpdated() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_2;
    let state = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (async (arg0) => {
      if (1 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          return { value, done: true };
        } else {
          purchases = closure_130_11;
          if (closure_130_11.isReady()) {
            purchases = closure_130_9;
            if (closure_130_9.isAuthenticated()) {
              purchases = state;
              if (state === closure_130_17.ACTIVE) {
                const obj2 = closure_130_0(closure_130_2[18]);
                obj2.ensureSkusLoaded(closure_130_30);
                c4 = 1;
                purchases = closure_130_23.loadPurchases();
                c5 = 3;
                c6 = 1;
                return { value: purchases, done: false };
              }
            }
          }
        }
      } else if (2 === c5) {
        c4 = 0;
        purchases = closure_130_23;
        closure_130_23.open();
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        return { value, done: true };
      } else {
        c4 = 0;
      }
      await "IconComponent";
      state = state.state;
      return "Set";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
let closure_3 = ["succeededOnlyFields"];
({ NativeEventEmitter, NativeModules } = react_native);
({ setPaymentSuccess: metroImportDefault, showOldPaymentFlowSuccess: metroImportAll } = PremiumPlanPurchasedStore);
const useGPlayAnalyticsStore = GPlayAnalyticsStore.useGPlayAnalyticsStore;
let Constants = Constants_mod2;
({ GPlayConnectionState: map1, GPlayDowngradeCommand: closure_14, GPlayPurchaseState: closure_15 } = Constants);
Constants = Constants_mod2;
({ AnalyticEvents: closure_16, AppStates: closure_17, PaymentGateways: closure_18 } = Constants);
const OrderStatus = PaymentConstants.OrderStatus;
const SubscriptionPlanInfo = PremiumConstants.SubscriptionPlanInfo;
const jsx = Fragment.jsx;
let tmp7 = new LoggerDefault("GPlayManager.android");
let closure_22 = tmp7;
const BillingManager = NativeModules.BillingManager;
const nativeEventEmitter = new NativeEventEmitter(BillingManager);
obj = {};
let closure_26 = null;
let closure_27 = null;
let closure_28 = null;
let closure_29 = null;
const items = [ProductIds.ProductIds.PREMIUM_TIER_2_MONTHLY];
let obj2 = {
  giftInfoOptionsCache: obj,
  initialize() {
    closure_26 = nativeEventEmitter.addListener(
      "billing-manager-connection-state-updated",
      handleConnectionStateUpdated,
    );
    closure_27 = nativeEventEmitter.addListener("billing-manager-purchase-state-updated", handlePurchaseStateUpdated);
    closure_28 = nativeEventEmitter.addListener("billing-manager-purchase-updated", handlePurchaseUpdated);
    closure_29 = nativeEventEmitter.addListener("billing-manager-downgrade-command", handleDowngradeCommand);
    obj = DispatcherDefault;
    const subscription = obj.subscribe("APP_STATE_UPDATE", handleAppStateUpdated);
    const obj2 = DispatcherDefault;
    const subscription1 = obj2.subscribe("CONNECTION_OPEN", handleConnectionOpen);
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
    const obj5 = DispatcherDefault;
    obj5.unsubscribe("APP_STATE_UPDATE", handleAppStateUpdated);
    const obj6 = DispatcherDefault;
    obj6.unsubscribe("CONNECTION_OPEN", handleConnectionOpen);
  },
};
let result = size.fileFinishedImporting("modules/gplay/native/GPlayManager.android.tsx");

export default obj2;

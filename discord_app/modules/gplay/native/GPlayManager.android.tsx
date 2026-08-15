// discord_app/modules/gplay/native/GPlayManager.android.tsx
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
import { getPlanIdForProduct } from "../../../actions/native/GPlayActionCreators.tsx";
import { dispatcher } from "../../../Dispatcher.tsx";

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
  dispatcher.dispatch({ type: "GPLAY_UPDATE_CONNECTION_STATE", connectionState });
  if (connectionState === constants.CONNECTED) {
    const userCountry = getPlanIdForProduct.loadUserCountry();
    userCountry.finally(() => callback(table[17]).loadSkus());
    const obj2 = getPlanIdForProduct;
  }
}
function handlePurchaseStateUpdated(arg0) {
  let billingResult;
  let isActivePurchase;
  ({ billingResult, isActivePurchase } = arg0);
  dispatcher.dispatch({ type: "GPLAY_UPDATE_PURCHASE_STATE", billingResult, isActivePurchase });
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
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            let c5 = 1;
            while (true) {
              let tmp8 = dependencyMap;
              let tmp9 = fetchFingerprint;
              if (null == fetchFingerprint) {
                break;
              } else {
                let tmp10 = dependencyMap;
                let tmp11 = fetchFingerprint;
                if (null == fetchFingerprint.pendingDowngrade) {
                  break;
                } else {
                  let tmp18 = dependencyMap;
                  let tmp19 = closure_3;
                  let tmp20 = callback;
                  let tmp21 = dependencyMap;
                  let obj4 = callback(709);
                  obj = { type: "GPLAY_UPDATE_PENDING_DOWNGRADE", pendingDowngrade: null };
                  let tmp22 = fetchFingerprint;
                  obj[1] = fetchFingerprint.pendingDowngrade;
                  let dispatchResult = obj4.dispatch(obj);
                  let tmp24 = lib;
                  let tmp25 = dependencyMap;
                  let obj7 = lib(4466);
                  let c6 = 8;
                  let num4 = 1;
                  c7 = 1;
                  let obj1 = { value: null, done: false };
                  obj1[0] = obj7.fetchSubscriptions();
                  return obj1;
                }
              }
              let tmp12 = dependencyMap;
              let tmp13 = lib;
              let tmp14 = closure_3;
              if (lib.isActive) {
                let tmp17 = callback2;
                c6 = 10;
                let num3 = 1;
                c7 = 1;
                let obj2 = { value: null, done: false };
                obj2[0] = callback2();
                return obj2;
              } else {
                let tmp15 = lib;
                let tmp16 = dependencyMap;
                obj1 = lib(4466);
                c6 = 9;
                let num2 = 1;
                c7 = 1;
                let obj3 = { value: null, done: false };
                obj3[0] = obj1.fetchSubscriptions();
                return obj3;
              }
            }
          } else {
            c5 = 0;
            obj4 = { type: "GPLAY_VERIFICATION_END", productId: null };
            obj4[1] = lib.productId;
            callback(709).dispatch(obj4);
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp26) {
          let _objectWithoutProperties = tmp26;
          if (tmp4 === c5) {
            c7 = tmp3;
            throw tmp26;
          } else if (tmp2 === tmp28) {
            c6 = tmp;
          } else if (tmp === tmp28) {
            c6 = tmp3;
          } else {
            c6 = tmp5;
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
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
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
              let closure_2 = tmp4;
              let c1 = 0;
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
  dispatcher.dispatch({ type: "GPLAY_UPDATE_PENDING_DOWNGRADE", pendingDowngrade: null });
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
            let closure_1 = tmp5;
            let callback = tmp2;
            callback = undefined;
            let obj1 = outer1_0(4466);
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
              let closure_2 = tmp3;
              let closure_1 = tmp5;
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
    const subscription = dispatcher.subscribe("APP_STATE_UPDATE", handleAppStateUpdated);
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
    dispatcher.unsubscribe("APP_STATE_UPDATE", handleAppStateUpdated);
  }
};
const tmp7 = new require("get ActivityIndicator")("GPlayManager.android");
let result = require("noop").fileFinishedImporting("modules/gplay/native/GPlayManager.android.tsx");

export default obj;
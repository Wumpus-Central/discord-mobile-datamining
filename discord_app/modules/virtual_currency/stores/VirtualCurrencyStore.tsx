// === Module 10774: redeemError ===

// Module 10774 (redeemError)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let object = importDefault;
const Store = initializeDefault.Store;
class VirtualCurrencyStore extends Store {
  constructor() {
    closure_0 = undefined;
    obj = {
      VIRTUAL_CURRENCY_REDEEM_START(skuId) {
            return obj.handleRedeemVirtualCurrencyStart(skuId);
          },
      VIRTUAL_CURRENCY_REDEEM_SUCCESS(entitlements) {
            return obj.handleRedeemVirtualCurrencySuccess(entitlements);
          },
      VIRTUAL_CURRENCY_REDEEM_FAIL(error) {
            return obj.handleRedeemVirtualCurrencyFail(error);
          },
      VIRTUAL_CURRENCY_BALANCE_FETCH(arg0) {
            return obj.handleBalanceFetch(arg0);
          },
      VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS(balance) {
            return obj.handleBalanceFetchSuccess(balance);
          },
      VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL(error) {
            return obj.handleBalanceFetchFail(error);
          },
      VIRTUAL_CURRENCY_BALANCE_UPDATE(arg0) {
            return obj.handleBalanceUpdate(arg0);
          },
      VIRTUAL_CURRENCY_ONBOARDING_MODAL_OPEN(arg0) {
            return obj.handleOnboardingModalOpen(arg0);
          },
      VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET(arg0) {
            return obj.handleOnboardingModalReset(arg0);
          },
      LOGIN_SUCCESS() {
            return obj.handleBalanceStateReset();
          },
      VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY(balancePillOverlay) {
            const result = obj.setBalancePillOverlay(balancePillOverlay.balancePillOverlay);
          }
    };
    tmp2 = new tmp2(require("dispatcher"), obj, new.target, tmp2, tmp, new.target, undefined);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp2;
    tmp2._entitlements = null;
    tmp2._redeemingSkuId = null;
    tmp2._isRedeemingVirtualCurrency = false;
    tmp2._redeemVirtualCurrencyError = null;
    tmp2._balance = null;
    tmp2._fetchBalanceError = null;
    tmp2._isFetchingBalance = false;
    tmp2._onboardingModalOpenedPrior = false;
    tmp2._balancePillOverlay = false;
    return tmp2;
  }
}
const prototype = VirtualCurrencyStore.prototype;
Object.defineProperty(prototype, "redeemError", {
  get: function redeemError() {
    return this._redeemVirtualCurrencyError;
  },
  set: undefined
});
Object.defineProperty(prototype, "isRedeeming", {
  get: function isRedeeming() {
    return this._isRedeemingVirtualCurrency;
  },
  set: undefined
});
Object.defineProperty(prototype, "redeemingSkuId", {
  get: function redeemingSkuId() {
    return this._redeemingSkuId;
  },
  set: undefined
});
Object.defineProperty(prototype, "entitlements", {
  get: function entitlements(preorder_release_at) {
    return this._entitlements;
  },
  set: undefined
});
Object.defineProperty(prototype, "balance", {
  get: function balance(arg0) {
    return this._balance;
  },
  set: undefined
});
Object.defineProperty(prototype, "fetchBalanceError", {
  get: function fetchBalanceError() {
    return this._fetchBalanceError;
  },
  set: undefined
});
Object.defineProperty(prototype, "isFetchingBalance", {
  get: function isFetchingBalance() {
    return this._isFetchingBalance;
  },
  set: undefined
});
Object.defineProperty(prototype, "onboardingModalOpenedPrior", {
  get: function onboardingModalOpenedPrior() {
    return this._onboardingModalOpenedPrior;
  },
  set: undefined
});
Object.defineProperty(prototype, "balancePillOverlay", {
  get: function balancePillOverlay() {
    return this._balancePillOverlay;
  },
  set: undefined
});
prototype["setBalancePillOverlay"] = function setBalancePillOverlay(_balancePillOverlay) {
  this._balancePillOverlay = _balancePillOverlay;
};
prototype["getCurrentBalance"] = function getCurrentBalance() {
  return this.balance;
};
prototype["handleBalanceStateReset"] = function handleBalanceStateReset() {
  this._balance = null;
  this._fetchBalanceError = null;
  this._isFetchingBalance = false;
};
prototype["handleBalanceFetch"] = function handleBalanceFetch(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    const self = this;
    this._isFetchingBalance = true;
    this._fetchBalanceError = null;
  }
};
prototype["handleBalanceFetchSuccess"] = function handleBalanceFetchSuccess(balance) {
  this._isFetchingBalance = false;
  this._balance = balance.balance;
};
prototype["handleBalanceFetchFail"] = function handleBalanceFetchFail(error) {
  this._isFetchingBalance = false;
  this._fetchBalanceError = error.error;
};
prototype["handleBalanceUpdate"] = function handleBalanceUpdate(balance) {
  this._balance = balance.balance;
};
prototype["handleRedeemVirtualCurrencyStart"] = function handleRedeemVirtualCurrencyStart(skuId) {
  this._entitlements = null;
  this._redeemingSkuId = skuId.skuId;
  this._redeemVirtualCurrencyError = null;
  this._isRedeemingVirtualCurrency = true;
};
prototype["handleRedeemVirtualCurrencySuccess"] = function handleRedeemVirtualCurrencySuccess(entitlements) {
  this._entitlements = entitlements.entitlements;
  this._redeemingSkuId = null;
  this._isRedeemingVirtualCurrency = false;
};
prototype["handleRedeemVirtualCurrencyFail"] = function handleRedeemVirtualCurrencyFail(error) {
  this._entitlements = null;
  this._redeemVirtualCurrencyError = error.error;
  this._redeemingSkuId = null;
  this._isRedeemingVirtualCurrency = false;
};
prototype["handleOnboardingModalOpen"] = function handleOnboardingModalOpen(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    const self = this;
    this._onboardingModalOpenedPrior = true;
  }
};
function handleOnboardingModalReset(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    const self = this;
    this._onboardingModalOpenedPrior = false;
  }
}
prototype["handleOnboardingModalReset"] = handleOnboardingModalReset;
VirtualCurrencyStore.displayName = "VirtualCurrencyStore";
object = undefined;
object = new Object(dispatcherDefault, {
  VIRTUAL_CURRENCY_REDEEM_START(skuId) {
    return obj.handleRedeemVirtualCurrencyStart(skuId);
  },
  VIRTUAL_CURRENCY_REDEEM_SUCCESS(entitlements) {
    return obj.handleRedeemVirtualCurrencySuccess(entitlements);
  },
  VIRTUAL_CURRENCY_REDEEM_FAIL(error) {
    return obj.handleRedeemVirtualCurrencyFail(error);
  },
  VIRTUAL_CURRENCY_BALANCE_FETCH(arg0) {
    return obj.handleBalanceFetch(arg0);
  },
  VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS(balance) {
    return obj.handleBalanceFetchSuccess(balance);
  },
  VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL(error) {
    return obj.handleBalanceFetchFail(error);
  },
  VIRTUAL_CURRENCY_BALANCE_UPDATE(arg0) {
    return obj.handleBalanceUpdate(arg0);
  },
  VIRTUAL_CURRENCY_ONBOARDING_MODAL_OPEN(arg0) {
    return obj.handleOnboardingModalOpen(arg0);
  },
  VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET(arg0) {
    return obj.handleOnboardingModalReset(arg0);
  },
  LOGIN_SUCCESS() {
    return obj.handleBalanceStateReset();
  },
  VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY(balancePillOverlay) {
    const result = obj.setBalancePillOverlay(balancePillOverlay.balancePillOverlay);
  }
}, tmp, VirtualCurrencyStore, Object, prototype, new.target, undefined, handleOnboardingModalReset, dependencyMap);
// ThrowIfThisInitialized (0x7c)
object._entitlements = null;
object._redeemingSkuId = null;
object._isRedeemingVirtualCurrency = false;
object._redeemVirtualCurrencyError = null;
object._balance = null;
object._fetchBalanceError = null;
object._isFetchingBalance = false;
object._onboardingModalOpenedPrior = false;
object._balancePillOverlay = false;
let result = require("set").fileFinishedImporting("modules/virtual_currency/stores/VirtualCurrencyStore.tsx");

export default object;
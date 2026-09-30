// discord_app/modules/virtual_currency/stores/VirtualCurrencyStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";

const Store = initializeDefault.Store;
class VirtualCurrencyStore extends Store {
  constructor() {
    closure_0 = undefined;
    obj = {
      VIRTUAL_CURRENCY_REDEEM_START(skuId) {
        return closure_0.handleRedeemVirtualCurrencyStart(skuId);
      },
      VIRTUAL_CURRENCY_REDEEM_SUCCESS(entitlements) {
        return closure_0.handleRedeemVirtualCurrencySuccess(entitlements);
      },
      VIRTUAL_CURRENCY_REDEEM_FAIL(error) {
        return closure_0.handleRedeemVirtualCurrencyFail(error);
      },
      VIRTUAL_CURRENCY_BALANCE_FETCH(arg0) {
        return closure_0.handleBalanceFetch(arg0);
      },
      VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS(balance) {
        return closure_0.handleBalanceFetchSuccess(balance);
      },
      VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL(error) {
        return closure_0.handleBalanceFetchFail(error);
      },
      VIRTUAL_CURRENCY_BALANCE_UPDATE(arg0) {
        return closure_0.handleBalanceUpdate(arg0);
      },
      VIRTUAL_CURRENCY_TOTAL_REDEEMED_FETCH(arg0) {
        return closure_0.handleTotalRedeemedFetch(arg0);
      },
      VIRTUAL_CURRENCY_TOTAL_REDEEMED_FETCH_SUCCESS(totalRedeemed) {
        return closure_0.handleTotalRedeemedFetchSuccess(totalRedeemed);
      },
      VIRTUAL_CURRENCY_TOTAL_REDEEMED_FETCH_FAIL(error) {
        return closure_0.handleTotalRedeemedFetchFail(error);
      },
      VIRTUAL_CURRENCY_ONBOARDING_MODAL_OPEN(arg0) {
        return closure_0.handleOnboardingModalOpen(arg0);
      },
      VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET(arg0) {
        return closure_0.handleOnboardingModalReset(arg0);
      },
      LOGIN_SUCCESS() {
        return closure_0.handleBalanceStateReset();
      },
      VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY(balancePillOverlay) {
        const result = closure_0.setBalancePillOverlay(balancePillOverlay.balancePillOverlay);
      },
    };
    tmp21 = new tmp2(closure_0(closure_1[1]), obj, new.target, tmp2, tmp, new.target, undefined);
    closure_0 = tmp21;
    tmp21._entitlements = null;
    tmp21._redeemingSkuId = null;
    tmp21._isRedeemingVirtualCurrency = false;
    tmp21._redeemVirtualCurrencyError = null;
    tmp21._balance = null;
    tmp21._fetchBalanceError = null;
    tmp21._isFetchingBalance = false;
    tmp21._totalRedeemed = null;
    tmp21._fetchTotalRedeemedError = null;
    tmp21._isFetchingTotalRedeemed = false;
    tmp21._onboardingModalOpenedPrior = false;
    tmp21._balancePillOverlay = false;
    return tmp21;
  }
}
const prototype = VirtualCurrencyStore.prototype;
Object.defineProperty(prototype, "redeemError", {
  get: function redeemError() {
    return this._redeemVirtualCurrencyError;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isRedeeming", {
  get: function isRedeeming() {
    return this._isRedeemingVirtualCurrency;
  },
  set: undefined,
});
Object.defineProperty(prototype, "redeemingSkuId", {
  get: function redeemingSkuId() {
    return this._redeemingSkuId;
  },
  set: undefined,
});
Object.defineProperty(prototype, "entitlements", {
  get: function entitlements() {
    return this._entitlements;
  },
  set: undefined,
});
Object.defineProperty(prototype, "balance", {
  get: function balance() {
    return this._balance;
  },
  set: undefined,
});
Object.defineProperty(prototype, "fetchBalanceError", {
  get: function fetchBalanceError() {
    return this._fetchBalanceError;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isFetchingBalance", {
  get: function isFetchingBalance() {
    return this._isFetchingBalance;
  },
  set: undefined,
});
Object.defineProperty(prototype, "totalRedeemed", {
  get: function totalRedeemed() {
    return this._totalRedeemed;
  },
  set: undefined,
});
Object.defineProperty(prototype, "fetchTotalRedeemedError", {
  get: function fetchTotalRedeemedError() {
    return this._fetchTotalRedeemedError;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isFetchingTotalRedeemed", {
  get: function isFetchingTotalRedeemed() {
    return this._isFetchingTotalRedeemed;
  },
  set: undefined,
});
Object.defineProperty(prototype, "onboardingModalOpenedPrior", {
  get: function onboardingModalOpenedPrior() {
    return this._onboardingModalOpenedPrior;
  },
  set: undefined,
});
Object.defineProperty(prototype, "balancePillOverlay", {
  get: function balancePillOverlay() {
    return this._balancePillOverlay;
  },
  set: undefined,
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
  this._totalRedeemed = null;
  this._fetchTotalRedeemedError = null;
  this._isFetchingTotalRedeemed = false;
};
prototype["handleBalanceFetch"] = function handleBalanceFetch(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
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
prototype["handleBalanceUpdate"] = function handleBalanceUpdate(arg0) {
  ({ totalRedeemed, balance: this._balance } = arg0);
  if (null != totalRedeemed) {
    this._totalRedeemed = totalRedeemed;
  }
};
prototype["handleTotalRedeemedFetch"] = function handleTotalRedeemedFetch(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const self = this;
    this._isFetchingTotalRedeemed = true;
    this._fetchTotalRedeemedError = null;
  }
};
prototype["handleTotalRedeemedFetchSuccess"] = function handleTotalRedeemedFetchSuccess(totalRedeemed) {
  this._isFetchingTotalRedeemed = false;
  this._totalRedeemed = totalRedeemed.totalRedeemed;
  this._fetchTotalRedeemedError = null;
};
prototype["handleTotalRedeemedFetchFail"] = function handleTotalRedeemedFetchFail(error) {
  this._isFetchingTotalRedeemed = false;
  this._fetchTotalRedeemedError = error.error;
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
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const self = this;
    this._onboardingModalOpenedPrior = true;
  }
};
prototype["handleOnboardingModalReset"] = function handleOnboardingModalReset(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const self = this;
    this._onboardingModalOpenedPrior = false;
  }
};
VirtualCurrencyStore.displayName = "VirtualCurrencyStore";
const virtualCurrencyStore = new VirtualCurrencyStore();
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/stores/VirtualCurrencyStore.tsx");

export default virtualCurrencyStore;

// discord_app/modules/virtual_currency/stores/VirtualCurrencyStore.tsx
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const Store = get_initializedDefault.Store;
class VirtualCurrencyStore extends Store {
  constructor() {
    const obj = {
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
    const tmp22 = new tmp2(DispatcherDefault, obj, new.target, tmp2, tmp, this, undefined);
    let closure_0 = tmp22;
    tmp22._entitlements = null;
    tmp22._redeemingSkuId = null;
    tmp22._isRedeemingVirtualCurrency = false;
    tmp22._redeemVirtualCurrencyError = null;
    tmp22._balance = null;
    tmp22._fetchBalanceError = null;
    tmp22._isFetchingBalance = false;
    tmp22._totalRedeemed = null;
    tmp22._fetchTotalRedeemedError = null;
    tmp22._isFetchingTotalRedeemed = false;
    tmp22._onboardingModalOpenedPrior = false;
    tmp22._balancePillOverlay = false;
    return tmp22;
  }
  setBalancePillOverlay(_balancePillOverlay) {
    this._balancePillOverlay = _balancePillOverlay;
  }
  getCurrentBalance() {
    return this.balance;
  }
  handleBalanceStateReset() {
    this._balance = null;
    this._fetchBalanceError = null;
    this._isFetchingBalance = false;
    this._totalRedeemed = null;
    this._fetchTotalRedeemedError = null;
    this._isFetchingTotalRedeemed = false;
  }
  handleBalanceFetch(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      const self = this;
      this._isFetchingBalance = true;
      this._fetchBalanceError = null;
    }
  }
  handleBalanceFetchSuccess(balance) {
    this._isFetchingBalance = false;
    this._balance = balance.balance;
  }
  handleBalanceFetchFail(error) {
    this._isFetchingBalance = false;
    this._fetchBalanceError = error.error;
  }
  handleBalanceUpdate(arg0) {
    let totalRedeemed;
    ({ totalRedeemed, balance: this._balance } = arg0);
    if (null != totalRedeemed) {
      this._totalRedeemed = totalRedeemed;
    }
  }
  handleTotalRedeemedFetch(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      const self = this;
      this._isFetchingTotalRedeemed = true;
      this._fetchTotalRedeemedError = null;
    }
  }
  handleTotalRedeemedFetchSuccess(totalRedeemed) {
    this._isFetchingTotalRedeemed = false;
    this._totalRedeemed = totalRedeemed.totalRedeemed;
    this._fetchTotalRedeemedError = null;
  }
  handleTotalRedeemedFetchFail(error) {
    this._isFetchingTotalRedeemed = false;
    this._fetchTotalRedeemedError = error.error;
  }
  handleRedeemVirtualCurrencyStart(skuId) {
    this._entitlements = null;
    this._redeemingSkuId = skuId.skuId;
    this._redeemVirtualCurrencyError = null;
    this._isRedeemingVirtualCurrency = true;
  }
  handleRedeemVirtualCurrencySuccess(entitlements) {
    this._entitlements = entitlements.entitlements;
    this._redeemingSkuId = null;
    this._isRedeemingVirtualCurrency = false;
  }
  handleRedeemVirtualCurrencyFail(error) {
    this._entitlements = null;
    this._redeemVirtualCurrencyError = error.error;
    this._redeemingSkuId = null;
    this._isRedeemingVirtualCurrency = false;
  }
  handleOnboardingModalOpen(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      const self = this;
      this._onboardingModalOpenedPrior = true;
    }
  }
  handleOnboardingModalReset(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      const self = this;
      this._onboardingModalOpenedPrior = false;
    }
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
VirtualCurrencyStore.displayName = "VirtualCurrencyStore";
const virtualCurrencyStore = new VirtualCurrencyStore();
let result = size.fileFinishedImporting("modules/virtual_currency/stores/VirtualCurrencyStore.tsx");

export default virtualCurrencyStore;

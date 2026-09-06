// === Module 13356: useBuyNitroPurchaseLock ===

// Module 13356 (useBuyNitroPurchaseLock)
import IAPStore from "IAPStore" /* 7237 */;

const require = fn;
let module_560 = fn(560);
let closure_3 = module_560.create(() => ({ isLocked: false, hasCompletedInitialLoad: false }));
module_560 = {
  begin() {
    const state = closure_3.getState();
    const hasCompletedInitialLoad = state.hasCompletedInitialLoad;
    let isLocked = !hasCompletedInitialLoad;
    if (hasCompletedInitialLoad) {
      isLocked = state.isLocked;
    }
    if (!isLocked) {
      isLocked = IAPStore.isBusy();
    }
    let flag = !isLocked;
    if (!isLocked) {
      closure_3.setState({ isLocked: true });
      flag = true;
    }
    return flag;
  },
  end() {
    closure_3.setState({ isLocked: false });
  },
  setInitialLoadComplete(hasCompletedInitialLoad) {
    closure_3.setState({ hasCompletedInitialLoad });
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroPurchaseLock.tsx");

export const useIsBuyNitroPurchaseBlocked = function useIsBuyNitroPurchaseBlocked() {
  let stateFromStores = closure_3((hasCompletedInitialLoad) => {
    hasCompletedInitialLoad = hasCompletedInitialLoad.hasCompletedInitialLoad;
    let isLocked = !hasCompletedInitialLoad;
    if (hasCompletedInitialLoad) {
      isLocked = hasCompletedInitialLoad.isLocked;
    }
    return isLocked;
  });
  const items = [IAPStore];
  if (!stateFromStores) {
    stateFromStores = obj.useStateFromStores(items, () => busy.isBusy());
  }
  return stateFromStores;
};
export const BuyNitroPurchaseLock = module_560;
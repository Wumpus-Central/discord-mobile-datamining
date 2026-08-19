// discord_app/modules/premium_marketing/native/hooks/useBuyNitroPurchaseLock.tsx
import updateProduct from "../../../../stores/native/IAPStore.android.tsx";
import keys from "../../../../../_runtime/00644_keys.js";

const require = fn;
let closure_3 = keys.create(() => ({ isLocked: false, hasCompletedInitialLoad: false }));
keys = {
  begin(TableRowGroup, arg1) {
    const state = store.getState();
    const hasCompletedInitialLoad = state.hasCompletedInitialLoad;
    let isLocked = !hasCompletedInitialLoad;
    if (hasCompletedInitialLoad) {
      isLocked = state.isLocked;
    }
    if (!isLocked) {
      isLocked = busy.isBusy();
    }
    let flag = !isLocked;
    if (!isLocked) {
      store.setState({ isLocked: true });
      flag = true;
    }
    return flag;
  },
  end() {
    store.setState({ isLocked: false });
  },
  setInitialLoadComplete(promotionMarketingComponent) {
    store.setState({ hasCompletedInitialLoad: promotionMarketingComponent });
  }
};
const result = require("obj132").fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroPurchaseLock.tsx");

export const useIsBuyNitroPurchaseBlocked = function useIsBuyNitroPurchaseBlocked() {
  let stateFromStores = store((hasCompletedInitialLoad) => {
    hasCompletedInitialLoad = hasCompletedInitialLoad.hasCompletedInitialLoad;
    let isLocked = !hasCompletedInitialLoad;
    if (hasCompletedInitialLoad) {
      isLocked = hasCompletedInitialLoad.isLocked;
    }
    return isLocked;
  });
  const items = [closure_2];
  if (!stateFromStores) {
    stateFromStores = obj.useStateFromStores(items, () => busy.isBusy());
  }
  return stateFromStores;
};
export const BuyNitroPurchaseLock = keys;
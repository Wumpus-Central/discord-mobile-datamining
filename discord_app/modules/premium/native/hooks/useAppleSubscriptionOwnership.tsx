// === Module 13755: useAppleSubscriptionOwnership ===

// Module 13755 (useAppleSubscriptionOwnership)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplePurchasesStore from "ApplePurchasesStore" /* 13756 */;
import AppStateStore from "AppStateStore" /* 1979 */;
import IAPStore from "IAPStore" /* 7570 */;

const require = fn;
const AppStates = fn(1074).AppStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/hooks/useAppleSubscriptionOwnership.tsx");

export const useAppleSubscriptionOwnership = function useAppleSubscriptionOwnership(subscription) {
  const items = [IAPStore];
  const stateFromStores = stateFromStores1(prop[6]).useStateFromStores(items, () => ready.isReady());
  const obj = stateFromStores1(prop[6]);
  const items1 = [state];
  stateFromStores1 = stateFromStores1(prop[6]).useStateFromStores(items1, () => state.getState());
  prop = undefined;
  if (subscription != null) {
    prop = subscription.paymentGatewaySubscriptionId;
  }
  const obj2 = stateFromStores1(prop[6]);
  const items2 = [closure_4];
  const items3 = [prop];
  const stateFromStores2 = stateFromStores1(prop[6]).useStateFromStores(items2, () => ApplePurchasesStore.hasOwnership(prop), items3);
  const tmpResult = stateFromStores1(prop[6]);
  let isIOSResult = stateFromStores1(prop[7]).isIOS();
  if (isIOSResult) {
    let isPurchasedViaApple;
    if (subscription != null) {
      isPurchasedViaApple = subscription.isPurchasedViaApple;
    }
    isIOSResult = true === isPurchasedViaApple;
  }
  if (isIOSResult) {
    isIOSResult = null != prop;
  }
  if (isIOSResult) {
    isIOSResult = "" !== prop;
  }
  if (isIOSResult) {
    isIOSResult = stateFromStores;
  }
  noop = isIOSResult;
  const tmp9 = stateFromStores2(noop.useState(null), 2);
  closure_4 = tmp9[1];
  state = tmp10;
  const items4 = [isIOSResult, prop, stateFromStores1];
  const effect = obj5.useEffect(() => {
    if (closure_3) {
      if (null != prop) {
        if (c0 === constants.ACTIVE) {
          c0 = false;
          const applePurchases = stateFromStores1(prop[8]).fetchApplePurchases();
          applePurchases.then((result) => {
            let tmp = !c0;
            if (!c0) {
              tmp = result;
            }
            if (tmp) {
              closure_4(prop);
            }
          });
          return () => {
            c0 = true;
          };
        }
      }
    }
  }, items4);
  const items5 = [null != prop && tmp9[0] === prop, isIOSResult, stateFromStores2];
  return noop.useMemo(() => ({
    isMismatch() {
      let tmp = state;
      if (state) {
        tmp = closure_1_3;
      }
      if (tmp) {
        tmp = !stateFromStores2;
      }
      return tmp;
    }
  }), items5);
};
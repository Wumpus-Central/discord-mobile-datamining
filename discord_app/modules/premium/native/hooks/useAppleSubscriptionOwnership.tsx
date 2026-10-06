// === Module 13210: useAppleSubscriptionOwnership ===

// Module 13210 (useAppleSubscriptionOwnership)
import Constants from "Constants" /* 1085 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ApplePurchasesStore from "ApplePurchasesStore" /* 13211 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import IAPStore from "IAPStore" /* 6931 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c0, closure_4;

let react = react_mod;
const AppStates = Constants.AppStates;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((paymentGatewaySubscriptionId) => {
  let closure_3;
  let prop;
  let ready;
  let state;
  let stateFromStores1;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let tmp = stateFromStores1;
  let obj = stateFromStores1(prop[7]);
  const cResult = obj.c(21);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [IAPStore];
    class S {
      constructor() {
        return ready.isReady();
      }
    }
    cResult[0] = items;
    cResult[1] = S;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(prop[8]);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, S);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [state];
    class S {
      constructor() {
        return ready.isReady();
      }
    }
    cResult[2] = items1;
    cResult[3] = tmp11;
    tmp9 = tmp11;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult4 = tmp(prop[8]);
  stateFromStores1 = tmpResult4.useStateFromStores(tmp8, tmp9);
  prop = undefined;
  if (paymentGatewaySubscriptionId != null) {
    prop = paymentGatewaySubscriptionId.paymentGatewaySubscriptionId;
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [closure_4];
    class S {
      constructor() {
        return ready.isReady();
      }
    }
    cResult[4] = items2;
    tmp14 = items2;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] !== prop) {
    const fn = function _() {
      return ApplePurchasesStore.hasOwnership(prop);
    };
    const items3 = [prop];
    class S {
      constructor() {
        return ready.isReady();
      }
    }
    cResult[5] = prop;
    cResult[6] = fn;
    cResult[7] = items3;
    tmp17 = items3;
    tmp16 = fn;
  } else {
    tmp16 = cResult[6];
    tmp17 = cResult[7];
  }
  const tmpResult5 = tmp(prop[8]);
  const stateFromStores2 = tmpResult5.useStateFromStores(tmp14, tmp16, tmp17);
  if (cResult[8] === prop) {
    if (cResult[9] === stateFromStores) {
      if (paymentGatewaySubscriptionId != null) {
        const isPurchasedViaApple = paymentGatewaySubscriptionId.isPurchasedViaApple;
      }
      class S {
        constructor() {
          return ready.isReady();
        }
      }
      react = tmp20;
      const tmp24 = stateFromStores2(react.useState(null), 2);
      closure_4 = tmp24[1];
      state = tmp25;
      const obj6 = react;
      if (cResult[12] === stateFromStores1) {
        if (cResult[13] === prop) {
          let tmp26;
          let tmp27;
          if (cResult[14] === tmp20) {
            tmp26 = cResult[15];
            tmp27 = cResult[16];
          }
          const effect = obj6.useEffect(tmp26, tmp27);
          if (cResult[17] === (null != prop && tmp24[0] === prop)) {
            if (cResult[18] === stateFromStores2) {
              let tmp29;
              if (cResult[19] === tmp20) {
                tmp29 = cResult[20];
              }
              return tmp29;
            }
          }
          class S {
            constructor() {
              return ready.isReady();
            }
          }
          tmp30[0] = function isMismatch() {
            return state && react && !stateFromStores2;
          };
          cResult[17] = null != prop && tmp24[0] === prop;
          cResult[18] = stateFromStores2;
          cResult[19] = tmp20;
          cResult[20] = tmp30;
          tmp29 = tmp30;
        }
      }
      const fn2 = function w() {
        if (closure_3) {
          if (null != prop) {
            if (c0 === constants.ACTIVE) {
              c0 = false;
              const obj = stateFromStores1(prop[10]);
              const applePurchases = obj.fetchApplePurchases();
              applePurchases.then((result) => {
                const tmp = !c0 && result;
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
      };
      const items4 = [tmp20, prop, stateFromStores1];
      cResult[12] = stateFromStores1;
      cResult[13] = prop;
      cResult[14] = tmp20;
      cResult[15] = fn2;
      cResult[16] = items4;
      tmp27 = items4;
      tmp26 = fn2;
    }
  }
  const tmpResult6 = tmp(prop[9]);
  let isIOSResult = tmpResult6.isIOS();
  if (isIOSResult) {
    if (paymentGatewaySubscriptionId != null) {
      const isPurchasedViaApple2 = paymentGatewaySubscriptionId.isPurchasedViaApple;
    }
    class S {
      constructor() {
        return ready.isReady();
      }
    }
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
  cResult[8] = prop;
  cResult[9] = stateFromStores;
  let isPurchasedViaApple1;
  if (paymentGatewaySubscriptionId != null) {
    isPurchasedViaApple1 = paymentGatewaySubscriptionId.isPurchasedViaApple;
  }
  cResult[10] = isPurchasedViaApple1;
  cResult[11] = isIOSResult;
}) : ((paymentGatewaySubscriptionId) => {
  let prop;
  let ready;
  let state;
  let stateFromStores1;
  let tmp = stateFromStores1;
  let obj = stateFromStores1(prop[8]);
  const items = [IAPStore];
  const stateFromStores = obj.useStateFromStores(items, () => ready.isReady());
  const items1 = [state];
  const obj2 = stateFromStores1(prop[8]);
  stateFromStores1 = obj2.useStateFromStores(items1, () => state.getState());
  prop = undefined;
  if (paymentGatewaySubscriptionId != null) {
    prop = paymentGatewaySubscriptionId.paymentGatewaySubscriptionId;
  }
  const items2 = [closure_4];
  const items3 = [prop];
  const tmpResult = tmp(prop[8]);
  const stateFromStores2 = tmpResult.useStateFromStores(items2, () => ApplePurchasesStore.hasOwnership(prop), items3);
  const tmpResult2 = tmp(prop[9]);
  let isIOSResult = tmpResult2.isIOS();
  if (isIOSResult) {
    let isPurchasedViaApple;
    if (paymentGatewaySubscriptionId != null) {
      isPurchasedViaApple = paymentGatewaySubscriptionId.isPurchasedViaApple;
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
  react = isIOSResult;
  const tmp9 = stateFromStores2(react.useState(null), 2);
  closure_4 = tmp9[1];
  state = tmp10;
  const items4 = [isIOSResult, prop, stateFromStores1];
  const effect = obj5.useEffect(() => {
    if (closure_3) {
      if (null != prop) {
        if (c0 === constants.ACTIVE) {
          c0 = false;
          const obj = stateFromStores1(prop[10]);
          const applePurchases = obj.fetchApplePurchases();
          applePurchases.then((result) => {
            const tmp = !c0 && result;
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
  return react.useMemo(() => ({
    isMismatch() {
      return state && closure_1_3 && !stateFromStores2;
    }
  }), items5);
});
const result = size.fileFinishedImporting("modules/premium/native/hooks/useAppleSubscriptionOwnership.tsx");

export const useAppleSubscriptionOwnership = tmp2;
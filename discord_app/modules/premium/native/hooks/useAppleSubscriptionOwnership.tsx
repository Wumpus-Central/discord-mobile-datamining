// === Module 13510: useAppleSubscriptionOwnership ===

// Module 13510 (useAppleSubscriptionOwnership)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplePurchasesStore from "ApplePurchasesStore" /* 13511 */;
import AppStateStore from "AppStateStore" /* 1998 */;
import IAPStore from "IAPStore" /* 7120 */;

const require = fn;
const AppStates = fn(1085).AppStates;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/hooks/useAppleSubscriptionOwnership.tsx");

export const useAppleSubscriptionOwnership = ReactCompilerGating.isReactCompilerEnabled() ? (function useAppleSubscriptionOwnership(paymentGatewaySubscriptionId) {
  const cResult = stateFromStores1(prop[7]).c(21);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [IAPStore];
    class S {
      constructor() {
        return closure_1_6.isReady();
      }
    }
    cResult[0] = items;
    cResult[1] = S;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = stateFromStores1(prop[7]);
  const stateFromStores = stateFromStores1(prop[8]).useStateFromStores(tmp4, S);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AppStateStore];
    class A {
      constructor() {
        return closure_5.getState();
      }
    }
    cResult[2] = items1;
    cResult[3] = A;
    let tmp9 = A;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = stateFromStores1(prop[8]);
  stateFromStores1 = stateFromStores1(prop[8]).useStateFromStores(tmp8, tmp9);
  prop = undefined;
  if (paymentGatewaySubscriptionId != null) {
    prop = paymentGatewaySubscriptionId.paymentGatewaySubscriptionId;
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [closure_4];
    class A {
      constructor() {
        return closure_5.getState();
      }
    }
    cResult[4] = items2;
    let tmp13 = items2;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== prop) {
    const fn = function y() {
      return ApplePurchasesStore.hasOwnership(prop);
    };
    const items3 = [prop];
    class A {
      constructor() {
        return closure_5.getState();
      }
    }
    cResult[5] = prop;
    cResult[6] = fn;
    cResult[7] = items3;
    let tmp16 = items3;
    let tmp15 = fn;
  } else {
    tmp15 = cResult[6];
    tmp16 = cResult[7];
  }
  const tmpResult4 = stateFromStores1(prop[8]);
  const stateFromStores2 = stateFromStores1(prop[8]).useStateFromStores(tmp13, tmp15, tmp16);
  if (cResult[8] === prop) {
    if (cResult[9] === stateFromStores) {
      if (paymentGatewaySubscriptionId != null) {
        const isPurchasedViaApple = paymentGatewaySubscriptionId.isPurchasedViaApple;
      }
      class A {
        constructor() {
          return closure_5.getState();
        }
      }
      noop = tmp19;
      const tmp23 = stateFromStores2(noop.useState(null), 2);
      closure_4 = tmp23[1];
      AppStateStore = tmp24;
      if (cResult[12] === stateFromStores1) {
        if (cResult[13] === prop) {
          if (cResult[14] === tmp19) {
            let tmp25 = cResult[15];
            let tmp26 = cResult[16];
          }
          const effect = obj6.useEffect(tmp25, tmp26);
          if (cResult[17] === tmp24) {
            if (cResult[18] === stateFromStores2) {
              if (cResult[19] === tmp19) {
                const tmp28 = cResult[20];
              }
              return tmp28;
            }
          }
          class A {
            constructor() {
              return closure_5.getState();
            }
          }
          tmp29[0] = function isMismatch() {
            let tmp = closure_5;
            if (closure_5) {
              tmp = closure_3;
            }
            if (tmp) {
              tmp = !stateFromStores2;
            }
            return tmp;
          };
          cResult[17] = tmp24;
          cResult[18] = stateFromStores2;
          cResult[19] = tmp19;
          cResult[20] = tmp29;
          class P {
            constructor() {
              if (closure_3) {
                tmp = closure_1;
                tmp2 = null;
                if (null != closure_1) {
                  tmp3 = c0;
                  tmp4 = closure_1_7;
                  if (c0 === closure_1_7.ACTIVE) {
                    flag = false;
                    c0 = false;
                    tmp5 = closure_0;
                    tmp6 = closure_1;
                    obj = closure_0(closure_1[10]);
                    applePurchases = obj.fetchApplePurchases();
                    nextPromise = applePurchases.then((result) => {
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
              return;
            }
          }
        }
      }
      class P {
        constructor() {
          if (closure_3) {
            tmp = closure_1;
            tmp2 = null;
            if (null != closure_1) {
              tmp3 = c0;
              tmp4 = closure_1_7;
              if (c0 === closure_1_7.ACTIVE) {
                flag = false;
                c0 = false;
                tmp5 = closure_0;
                tmp6 = closure_1;
                obj = closure_0(closure_1[10]);
                applePurchases = obj.fetchApplePurchases();
                nextPromise = applePurchases.then((result) => {
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
          return;
        }
      }
      const items4 = [tmp19, prop, stateFromStores1];
      cResult[12] = stateFromStores1;
      cResult[13] = prop;
      cResult[14] = tmp19;
      cResult[15] = P;
      cResult[16] = items4;
      tmp26 = items4;
      tmp25 = P;
      obj6 = noop;
    }
  }
  const tmpResult5 = stateFromStores1(prop[8]);
  let isIOSResult = stateFromStores1(prop[9]).isIOS();
  if (isIOSResult) {
    if (paymentGatewaySubscriptionId != null) {
      const isPurchasedViaApple2 = paymentGatewaySubscriptionId.isPurchasedViaApple;
    }
    class A {
      constructor() {
        return closure_5.getState();
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
  const tmpResult6 = stateFromStores1(prop[9]);
}) : (function useAppleSubscriptionOwnership(paymentGatewaySubscriptionId) {
  const items = [IAPStore];
  const stateFromStores = stateFromStores1(prop[8]).useStateFromStores(items, () => ready.isReady());
  const obj = stateFromStores1(prop[8]);
  const items1 = [state];
  stateFromStores1 = stateFromStores1(prop[8]).useStateFromStores(items1, () => state.getState());
  prop = undefined;
  if (paymentGatewaySubscriptionId != null) {
    prop = paymentGatewaySubscriptionId.paymentGatewaySubscriptionId;
  }
  const obj2 = stateFromStores1(prop[8]);
  const items2 = [closure_4];
  const items3 = [prop];
  const stateFromStores2 = stateFromStores1(prop[8]).useStateFromStores(items2, () => ApplePurchasesStore.hasOwnership(prop), items3);
  const tmpResult = stateFromStores1(prop[8]);
  let isIOSResult = stateFromStores1(prop[9]).isIOS();
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
          const applePurchases = stateFromStores1(prop[10]).fetchApplePurchases();
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
});
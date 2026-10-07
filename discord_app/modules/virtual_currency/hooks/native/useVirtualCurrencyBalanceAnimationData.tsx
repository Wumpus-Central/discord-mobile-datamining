// discord_app/modules/virtual_currency/hooks/native/useVirtualCurrencyBalanceAnimationData.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/virtual_currency/hooks/native/useVirtualCurrencyBalanceAnimationData.tsx",
);

export const useVirtualCurrencyBalanceAnimationData = ReactCompilerGating.isReactCompilerEnabled()
  ? (initialRenderedBalance) => {
      const cResult = initialRenderedBalance(stateFromStores[4]).c(29);
      initialRenderedBalance = initialRenderedBalance.initialRenderedBalance;
      const balance = initialRenderedBalance.balance;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [useReducedMotion];
        const fn = function o() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = initialRenderedBalance(stateFromStores[4]);
      stateFromStores = initialRenderedBalance(stateFromStores[5]).useStateFromStores(tmp4, tmp5);
      const tmp8 = first(noop.useState(null), 2);
      first = tmp8[0];
      noop = tmp8[1];
      useReducedMotion = noop.useRef(null);
      noop.useRef(null);
      const tmpResult = initialRenderedBalance(stateFromStores[5]);
      [r10045, closure_7] = first(noop.useState(null != initialRenderedBalance), 2);
      const tmp12 = first(noop.useState(null == initialRenderedBalance), 2);
      const first1 = tmp12[0];
      closure_9 = tmp12[1];
      const tmp11 = first(noop.useState(null != initialRenderedBalance), 2);
      closure_10 = balance(stateFromStores[6])(balance);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return;
          }
        }
        cResult[2] = S;
      } else {
        class S {
          constructor() {
            return;
          }
        }
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return;
          }
        }
        cResult[3] = tmp17;
      } else {
        class S {
          constructor() {
            return;
          }
        }
      }
      if (cResult[4] !== first) {
        class S {
          constructor() {
            return;
          }
        }
        cResult[4] = first;
        cResult[5] = tmp19;
      } else {
        class S {
          constructor() {
            return;
          }
        }
      }
      if (cResult[6] === balance) {
        class S {
          constructor() {
            return;
          }
        }
      }
      class O {
        constructor() {
          if (null != closure_0) {
            tmp = balance;
            if (null !== balance) {
              tmp2 = closure_8;
              if (!closure_8) {
                tmp3 = globalThis;
                _setTimeout = setTimeout;
                num = 1250;
                closure_0 = setTimeout(() => {
                  if (!stateFromStores) {
                    closure_1_11(balance - closure_0);
                  }
                  closure_1_7(false);
                  closure_1_9(true);
                }, 1250);
                return () => clearTimeout(closure_0);
              }
            }
          }
          return;
        }
      }
      const items1 = [initialRenderedBalance, balance, first1, stateFromStores, tmp18];
      cResult[6] = balance;
      cResult[7] = first1;
      cResult[8] = initialRenderedBalance;
      cResult[9] = tmp18;
      cResult[10] = stateFromStores;
      cResult[11] = O;
      cResult[12] = items1;
      const tmp14 = balance(stateFromStores[6])(balance);
    }
  : (initialRenderedBalance) => {
      initialRenderedBalance = initialRenderedBalance.initialRenderedBalance;
      const balance = initialRenderedBalance.balance;
      let stateFromStores;
      let currentAnimationType;
      noop = undefined;
      let useReducedMotion;
      c7 = undefined;
      const items = [useReducedMotion];
      stateFromStores = initialRenderedBalance(stateFromStores[5]).useStateFromStores(
        items,
        () => useReducedMotion.useReducedMotion,
      );
      let tmp2 = currentAnimationType(noop.useState(null), 2);
      currentAnimationType = tmp2[0];
      noop = tmp2[1];
      useReducedMotion = noop.useRef(null);
      const lottieRef = noop.useRef(null);
      const obj = initialRenderedBalance(stateFromStores[5]);
      [tmp6, c7] = currentAnimationType(noop.useState(null != initialRenderedBalance), 2);
      const tmp7 = currentAnimationType(noop.useState(null == initialRenderedBalance), 2);
      const first1 = tmp7[0];
      closure_9 = tmp7[1];
      const tmp9 = balance(stateFromStores[6])(balance);
      closure_10 = tmp9;
      const onValueChange = noop.useCallback(() => {}, []);
      const items1 = [currentAnimationType];
      const onValueReached = noop.useCallback(() => {
        closure_5.current = null;
        closure_4(null);
      }, []);
      const callback2 = noop.useCallback((arg0) => {
        if (0 !== arg0) {
          let str = "spend";
          if (arg0 > 0) {
            str = "earn";
          }
          useReducedMotion.current = str;
          if (currentAnimationType === useReducedMotion.current) {
            const current = lottieRef.current;
            if (current != null) {
              current.play();
            }
          } else {
            closure_4(useReducedMotion.current);
          }
        }
      }, items1);
      const items2 = [initialRenderedBalance, balance, first1, stateFromStores, callback2];
      const effect = noop.useEffect(() => {
        if (null != timeout) {
          if (null !== balance) {
            if (!first1) {
              const _setTimeout = setTimeout;
              timeout = setTimeout(() => {
                if (!stateFromStores) {
                  callback2(balance - closure_0);
                }
                closure_1_7(false);
                closure_1_9(true);
              }, 1250);
              return () => clearTimeout(closure_0);
            }
          }
        }
      }, items2);
      const items3 = [balance, tmp9, currentAnimationType, first1, stateFromStores, callback2];
      const effect1 = noop.useEffect(() => {
        let tmp2 = null !== balance;
        if (tmp2) {
          tmp2 = null !== closure_10;
        }
        if (tmp2) {
          tmp2 = balance !== closure_10;
        }
        if (tmp2) {
          tmp2 = first1;
        }
        if (tmp2) {
          tmp2 = !stateFromStores;
        }
        if (tmp2) {
          callback2(balance - closure_10);
        }
      }, items3);
      return { onValueChange, onValueReached, showInitialRenderedBalance, currentAnimationType, lottieRef };
    };

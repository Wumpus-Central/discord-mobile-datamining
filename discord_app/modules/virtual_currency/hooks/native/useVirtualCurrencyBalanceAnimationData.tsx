// discord_app/modules/virtual_currency/hooks/native/useVirtualCurrencyBalanceAnimationData.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let initialRenderedBalance, num, tmp3;

let react = react_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (initialRenderedBalance) => {
      let closure_11;
      let closure_4;
      let closure_7;
      let first;
      let stateFromStores;
      let tmp19;
      let tmp4;
      let tmp5;
      let useReducedMotion;
      let tmp2 = stateFromStores;
      const obj = initialRenderedBalance(stateFromStores[4]);
      const cResult = obj.c(29);
      const tmp = initialRenderedBalance;
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
      const tmpResult = tmp(tmp2[5]);
      stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      const tmp8 = first(react.useState(null), 2);
      first = tmp8[0];
      react = tmp8[1];
      useReducedMotion = react.useRef(null);
      const ref = react.useRef(null);
      [r10045, closure_7] = first(react.useState(null != initialRenderedBalance), 2);
      first(react.useState(null != initialRenderedBalance), 2);
      const tmp12 = first(react.useState(null == initialRenderedBalance), 2);
      const first1 = tmp12[0];
      let closure_9 = tmp12[1];
      let closure_10 = balance(tmp2[6])(balance);
      balance(tmp2[6])(balance);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {}
        }
        cResult[2] = S;
      } else {
        class S {
          constructor() {}
        }
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {}
        }
        cResult[3] = tmp17;
      } else {
        class S {
          constructor() {}
        }
      }
      if (cResult[4] !== first) {
        class S {
          constructor() {}
        }
        cResult[4] = first;
        cResult[5] = tmp19;
      } else {
        class S {
          constructor() {}
        }
      }
      tmp19 = tmp18;
      if (cResult[6] === balance) {
        class S {
          constructor() {}
        }
      }
      class O {
        constructor() {
          if (null != closure_0) {
            tmp = balance;
            if (null !== balance) {
              tmp2 = closure_8;
              if (!tmp2) {
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
    }
  : (initialRenderedBalance) => {
      let c7;
      let closure_4;
      let tmp6;
      initialRenderedBalance = initialRenderedBalance.initialRenderedBalance;
      const balance = initialRenderedBalance.balance;
      let stateFromStores;
      let currentAnimationType;
      react = undefined;
      let useReducedMotion;
      c7 = undefined;
      const items = [useReducedMotion];
      const obj = initialRenderedBalance(stateFromStores[5]);
      stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      let tmp2 = currentAnimationType(react.useState(null), 2);
      currentAnimationType = tmp2[0];
      react = tmp2[1];
      useReducedMotion = react.useRef(null);
      const lottieRef = react.useRef(null);
      [tmp6, c7] = currentAnimationType(react.useState(null != initialRenderedBalance), 2);
      const tmp5 = currentAnimationType(react.useState(null != initialRenderedBalance), 2);
      const tmp7 = currentAnimationType(react.useState(null == initialRenderedBalance), 2);
      const first1 = tmp7[0];
      let closure_9 = tmp7[1];
      const tmp9 = balance(stateFromStores[6])(balance);
      let closure_10 = tmp9;
      const onValueChange = react.useCallback(() => {}, []);
      const items1 = [currentAnimationType];
      const onValueReached = react.useCallback(() => {
        useReducedMotion.current = null;
        closure_4(null);
      }, []);
      const callback2 = react.useCallback((arg0) => {
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
      const effect = react.useEffect(() => {
        let closure_0;
        let timeout;
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
      const effect1 = react.useEffect(() => {
        const tmp2 = null !== balance && null !== closure_10 && balance !== closure_10 && first1 && !stateFromStores;
        if (tmp2) {
          callback2(balance - closure_10);
        }
      }, items3);
      return { onValueChange, onValueReached, showInitialRenderedBalance, currentAnimationType, lottieRef };
    };
const result = size.fileFinishedImporting(
  "modules/virtual_currency/hooks/native/useVirtualCurrencyBalanceAnimationData.tsx",
);

export const useVirtualCurrencyBalanceAnimationData = tmp2;

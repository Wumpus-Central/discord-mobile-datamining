// === Module 11092: useVirtualCurrencyBalanceAnimationData ===

// Module 11092 (useVirtualCurrencyBalanceAnimationData)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/hooks/native/useVirtualCurrencyBalanceAnimationData.tsx");

export const useVirtualCurrencyBalanceAnimationData = function useVirtualCurrencyBalanceAnimationData(initialRenderedBalance) {
  initialRenderedBalance = initialRenderedBalance.initialRenderedBalance;
  const balance = initialRenderedBalance.balance;
  let stateFromStores;
  let currentAnimationType;
  noop = undefined;
  let useReducedMotion;
  c7 = undefined;
  const items = [useReducedMotion];
  stateFromStores = initialRenderedBalance(stateFromStores[3]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let tmp2 = currentAnimationType(noop.useState(null), 2);
  currentAnimationType = tmp2[0];
  noop = tmp2[1];
  useReducedMotion = noop.useRef(null);
  const lottieRef = noop.useRef(null);
  const obj = initialRenderedBalance(stateFromStores[3]);
  [tmp6, c7] = currentAnimationType(noop.useState(null != initialRenderedBalance), 2);
  const tmp7 = currentAnimationType(noop.useState(null == initialRenderedBalance), 2);
  const first1 = tmp7[0];
  closure_9 = tmp7[1];
  const tmp9 = balance(stateFromStores[4])(balance);
  closure_10 = tmp9;
  const onValueChange = noop.useCallback(() => {

  }, []);
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
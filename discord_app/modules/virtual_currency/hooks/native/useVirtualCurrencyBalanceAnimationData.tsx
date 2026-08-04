// discord_app/modules/virtual_currency/hooks/native/useVirtualCurrencyBalanceAnimationData.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";

const require = arg1;
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/virtual_currency/hooks/native/useVirtualCurrencyBalanceAnimationData.tsx");

export const useVirtualCurrencyBalanceAnimationData = function useVirtualCurrencyBalanceAnimationData(initialRenderedBalance) {
  let c7;
  let tmp6;
  initialRenderedBalance = initialRenderedBalance.initialRenderedBalance;
  const balance = initialRenderedBalance.balance;
  let stateFromStores;
  let currentAnimationType;
  let React;
  let maybeApplyNoTextColorForLightCustomTheme;
  let lottieRef;
  c7 = undefined;
  let first1;
  let closure_9;
  let c10;
  let callback2;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  stateFromStores = initialRenderedBalance(stateFromStores[3]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let tmp2 = currentAnimationType(React.useState(null), 2);
  currentAnimationType = tmp2[0];
  React = tmp2[1];
  maybeApplyNoTextColorForLightCustomTheme = React.useRef(null);
  lottieRef = React.useRef(null);
  const obj = initialRenderedBalance(stateFromStores[3]);
  [tmp6, c7] = currentAnimationType(React.useState(null != initialRenderedBalance), 2);
  const tmp7 = currentAnimationType(React.useState(null == initialRenderedBalance), 2);
  first1 = tmp7[0];
  closure_9 = tmp7[1];
  const tmp9 = balance(stateFromStores[4])(balance);
  c10 = tmp9;
  const onValueChange = React.useCallback(() => {

  }, []);
  const items1 = [currentAnimationType];
  const onValueReached = React.useCallback(() => {
    maybeApplyNoTextColorForLightCustomTheme.current = null;
    callback(null);
  }, []);
  callback2 = React.useCallback((arg0) => {
    if (0 !== arg0) {
      let str = "spend";
      if (arg0 > 0) {
        str = "earn";
      }
      maybeApplyNoTextColorForLightCustomTheme.current = str;
      if (currentAnimationType === maybeApplyNoTextColorForLightCustomTheme.current) {
        const current = lottieRef.current;
        if (current != null) {
          current.play();
        }
      } else {
        callback(tmp.current);
      }
    }
  }, items1);
  const items2 = [initialRenderedBalance, balance, first1, stateFromStores, callback2];
  const effect = React.useEffect(() => {
    if (null != timeout) {
      if (null !== balance) {
        if (!first1) {
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            if (!closure_2) {
              callback3(closure_1 - closure_0);
            }
            callback(false);
            callback2(true);
          }, 1250);
          return () => clearTimeout(closure_0);
        }
      }
    }
  }, items2);
  const items3 = [balance, tmp9, currentAnimationType, first1, stateFromStores, callback2];
  const effect1 = React.useEffect(() => {
    let tmp2 = null !== balance;
    if (tmp2) {
      tmp2 = null !== c10;
    }
    if (tmp2) {
      tmp2 = tmp !== c10;
    }
    if (tmp2) {
      tmp2 = first1;
    }
    if (tmp2) {
      tmp2 = !stateFromStores;
    }
    if (tmp2) {
      callback2(tmp - c10);
    }
  }, items3);
  return { onValueChange, onValueReached, showInitialRenderedBalance, currentAnimationType, lottieRef };
};
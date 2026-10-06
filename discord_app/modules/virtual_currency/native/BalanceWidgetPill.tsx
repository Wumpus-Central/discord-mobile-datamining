// === Module 11014: virtual_currency/BalanceWidgetPill ===

// Module 11014 (virtual_currency/BalanceWidgetPill)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import ButtonConstants from "ButtonConstants" /* 5607 */;
import useVirtualCurrencyBalanceAnimationData from "useVirtualCurrencyBalanceAnimationData" /* 11015 */;
import OrbLottieAnimation from "OrbLottieAnimation" /* 11016 */;
import BalanceCounter2 from "BalanceCounter" /* 11021 */;
import AnimationUtils from "AnimationUtils" /* 11022 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let num;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, orbsLottieContainer: { position: "relative", height: 18, width: 18, justifyContent: "center", alignItems: "center" }, balanceCounterContainer: { justifyContent: "center", alignItems: "flex-end" }, balanceText: obj3 };
obj2 = { minHeight: ButtonConstants.SMALL_BUTTON_HEIGHT, borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center", flexDirection: "row", paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, gap: 4 };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, textAlign: "right", lineHeight: num };
num = undefined;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
let closure_5 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let balance;
  let currentAnimationType;
  let initialRenderedBalance;
  let items;
  let lottieRef;
  let onValueChange;
  let onValueReached;
  let style;
  const obj = react2;
  const cResult = obj.c(31);
  ({ initialRenderedBalance, balance, style } = arg0);
  let tmp4 = null;
  if (undefined !== initialRenderedBalance) {
    tmp4 = initialRenderedBalance;
  }
  if (cResult[0] === balance) {
    let tmp6;
    if (cResult[1] === tmp4) {
      tmp6 = cResult[2];
    }
    const tmpResult = useVirtualCurrencyBalanceAnimationData;
    const virtualCurrencyBalanceAnimationData = tmpResult.useVirtualCurrencyBalanceAnimationData(tmp6);
    ({ onValueChange, onValueReached, currentAnimationType, lottieRef } = virtualCurrencyBalanceAnimationData);
    const showInitialRenderedBalance = virtualCurrencyBalanceAnimationData.showInitialRenderedBalance;
    const tmp9 = closure_5();
    if (cResult[3] === style) {
      let tmp10;
      let stringResult;
      if (cResult[4] === tmp9.container) {
        tmp10 = cResult[5];
      }
      if (cResult[6] === balance) {
        let tmp11;
        let tmp13;
        if (cResult[7] === (null === tmp4 && null === balance)) {
          tmp11 = cResult[8];
        }
        if (cResult[9] !== (null === tmp4 && null === balance)) {
          const obj2 = { busy: null === tmp4 && null === balance };
          cResult[9] = null === tmp4 && null === balance;
          cResult[10] = obj2;
          tmp13 = obj2;
        } else {
          tmp13 = cResult[10];
        }
        if (cResult[11] === currentAnimationType) {
          let tmp14;
          if (cResult[12] === lottieRef) {
            tmp14 = cResult[13];
          }
          if (cResult[14] === tmp9.orbsLottieContainer) {
            let tmp17;
            if (cResult[15] === tmp14) {
              tmp17 = cResult[16];
            }
            if (showInitialRenderedBalance) {
              balance = tmp4;
            }
            if (cResult[17] === onValueChange) {
              if (cResult[18] === onValueReached) {
                if (cResult[19] === tmp9.balanceText) {
                  let tmp21;
                  if (cResult[20] === balance) {
                    tmp21 = cResult[21];
                  }
                  if (cResult[22] === tmp9.balanceCounterContainer) {
                    let tmp24;
                    if (cResult[23] === tmp21) {
                      tmp24 = cResult[24];
                    }
                    if (cResult[25] === tmp24) {
                      if (cResult[26] === tmp10) {
                        if (cResult[27] === tmp11) {
                          if (cResult[28] === tmp13) {
                            let tmp28;
                            if (cResult[29] === tmp17) {
                              tmp28 = cResult[30];
                            }
                            return tmp28;
                          }
                        }
                      }
                    }
                    const obj3 = { style: tmp10, accessibilityLabel: tmp11, accessibilityState: tmp13, accessible: true, children: items };
                    items = [tmp17, tmp24];
                    const tmp31 = React3(View, obj3);
                    cResult[25] = tmp24;
                    cResult[26] = tmp10;
                    cResult[27] = tmp11;
                    cResult[28] = tmp13;
                    cResult[29] = tmp17;
                    cResult[30] = tmp31;
                    tmp28 = tmp31;
                  }
                  const obj4 = { style: tmp9.balanceCounterContainer, children: tmp21 };
                  const tmp27 = _false(View, obj4);
                  cResult[22] = tmp9.balanceCounterContainer;
                  cResult[23] = tmp21;
                  cResult[24] = tmp27;
                  tmp24 = tmp27;
                }
              }
            }
            const obj5 = { value: balance, onValueChange, onValueReached, targetTotalCounterTime: AnimationUtils.EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS, style: tmp9.balanceText };
            const BalanceCounter = BalanceCounter2.BalanceCounter;
            const tmp23 = _false(BalanceCounter, obj5);
            cResult[17] = onValueChange;
            cResult[18] = onValueReached;
            cResult[19] = tmp9.balanceText;
            cResult[20] = balance;
            cResult[21] = tmp23;
            tmp21 = tmp23;
          }
          const obj6 = { style: tmp9.orbsLottieContainer, children: tmp14 };
          const tmp20 = _false(View, obj6);
          cResult[14] = tmp9.orbsLottieContainer;
          cResult[15] = tmp14;
          cResult[16] = tmp20;
          tmp17 = tmp20;
        }
        const obj7 = { ref: lottieRef, animationType: currentAnimationType };
        const tmp16 = _false(OrbLottieAnimation.OrbLottieAnimation, obj7);
        cResult[11] = currentAnimationType;
        cResult[12] = lottieRef;
        cResult[13] = tmp16;
        tmp14 = tmp16;
      }
      const intl = intl2.intl;
      if (null === tmp4 && null === balance) {
        stringResult = intl.string(intl2.t.y0WGqP);
      } else {
        const obj8 = { balance };
        stringResult = intl.formatToPlainString(intl2.t.zPaLL9, obj8);
      }
      cResult[6] = balance;
      cResult[7] = null === tmp4 && null === balance;
      cResult[8] = stringResult;
      tmp11 = stringResult;
    }
    const items1 = [tmp9.container, style];
    cResult[3] = style;
    cResult[4] = tmp9.container;
    cResult[5] = items1;
    tmp10 = items1;
  }
  const obj9 = { initialRenderedBalance: tmp4, balance };
  cResult[0] = balance;
  cResult[1] = tmp4;
  cResult[2] = obj9;
  tmp6 = obj9;
}) : ((initialRenderedBalance) => {
  let BalanceCounter;
  let currentAnimationType;
  let items;
  let items1;
  let lottieRef;
  let obj6;
  let onValueChange;
  let onValueReached;
  let showInitialRenderedBalance;
  let stringResult;
  let prop = initialRenderedBalance.initialRenderedBalance;
  if (prop === undefined) {
    prop = null;
  }
  let balance = initialRenderedBalance.balance;
  let tmp2 = null === prop;
  const style = initialRenderedBalance.style;
  if (tmp2) {
    tmp2 = null === balance;
  }
  const obj = useVirtualCurrencyBalanceAnimationData;
  const virtualCurrencyBalanceAnimationData = obj.useVirtualCurrencyBalanceAnimationData({ initialRenderedBalance: prop, balance });
  ({ onValueChange, onValueReached, showInitialRenderedBalance, currentAnimationType, lottieRef } = virtualCurrencyBalanceAnimationData);
  const tmp6 = closure_5();
  const obj2 = { style: items, accessibilityLabel: stringResult, accessibilityState: { busy: tmp2 }, accessible: true, children: items1 };
  items = [tmp6.container, style];
  const intl = intl2.intl;
  if (tmp2) {
    stringResult = intl.string(intl2.t.y0WGqP);
  } else {
    const obj3 = { balance };
    stringResult = intl.formatToPlainString(intl2.t.zPaLL9, obj3);
  }
  items1 = [, ];
  const obj4 = { style: tmp6.orbsLottieContainer, children: _false(OrbLottieAnimation.OrbLottieAnimation, { ref: lottieRef, animationType: currentAnimationType }) };
  items1[0] = _false(View, obj4);
  const obj5 = { style: tmp6.balanceCounterContainer, children: _false(BalanceCounter, obj6) };
  BalanceCounter = BalanceCounter2.BalanceCounter;
  if (showInitialRenderedBalance) {
    balance = prop;
  }
  obj6 = { value: balance, onValueChange, onValueReached, targetTotalCounterTime: AnimationUtils.EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS, style: tmp6.balanceText };
  items1[1] = _false(View, obj5);
  return React3(View, obj2);
});
tmp5.displayName = "BalanceWidgetPill";
const result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetPill.tsx");

export default tmp5;
export const BalanceWidgetPill = tmp5;
// === Module 11091: virtual_currency/BalanceWidgetPill ===

// Module 11091 (virtual_currency/BalanceWidgetPill)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useVirtualCurrencyBalanceAnimationData from "useVirtualCurrencyBalanceAnimationData" /* 11092 */;
import OrbLottieAnimation from "OrbLottieAnimation" /* 11093 */;
import BalanceCounter from "BalanceCounter" /* 11098 */;
import AnimationUtils from "AnimationUtils" /* 11099 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
let createStyles = { container: null, orbsLottieContainer: null, balanceCounterContainer: null, balanceText: null };
createStyles = { minHeight: fn(4980).SMALL_BUTTON_HEIGHT, borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center", flexDirection: "row", paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, gap: 4 };
createStyles.container = createStyles;
createStyles.orbsLottieContainer = { position: "relative", height: 18, width: 18, justifyContent: "center", alignItems: "center" };
createStyles.balanceCounterContainer = { justifyContent: "center", alignItems: "flex-end" };
let obj1 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, textAlign: "right", lineHeight: null };
const PlatformUtils = fn(1115);
let num;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
class BalanceWidgetPill {
  constructor(arg0) {
    prop = global.initialRenderedBalance;
    if (prop === undefined) {
      prop = null;
    }
    balance = global.balance;
    tmp2 = null === prop;
    if (tmp2) {
      tmp2 = null === balance;
    }
    tmp3 = closure_0;
    tmp4 = closure_1;
    obj = closure_0(closure_1[7]);
    virtualCurrencyBalanceAnimationData = obj.useVirtualCurrencyBalanceAnimationData({ initialRenderedBalance: prop, balance });
    ({ onValueChange, onValueReached, showInitialRenderedBalance, currentAnimationType, lottieRef } = virtualCurrencyBalanceAnimationData);
    tmp6 = closure_5();
    tmp8 = View;
    obj = { style: null, accessibilityLabel: null, accessibilityState: null, accessible: true, children: null };
    items = [, ];
    items[0] = tmp6.container;
    items[1] = global.style;
    obj.style = items;
    tmp7 = jsxs;
    intl = closure_0(closure_1[8]).intl;
    if (tmp2) {
      stringResult = intl.string(tmp3(tmp4[8]).t.y0WGqP);
    } else {
      obj1 = { balance: null };
      obj1.balance = balance;
      stringResult = intl.formatToPlainString(tmp3(tmp4[8]).t.zPaLL9, obj1);
    }
    obj.accessibilityLabel = stringResult;
    obj.accessibilityState = { busy: tmp2 };
    tmp10 = jsx;
    obj2 = { style: tmp6.orbsLottieContainer, children: jsx(tmp3(tmp4[9]).OrbLottieAnimation, { ref: lottieRef, animationType: currentAnimationType }) };
    items1 = [, ];
    items1[0] = jsx(tmp8, obj2);
    obj3 = { style: tmp6.balanceCounterContainer, children: null };
    if (showInitialRenderedBalance) {
      balance = prop;
    }
    obj4 = { value: balance, onValueChange, onValueReached, targetTotalCounterTime: tmp3(tmp4[11]).EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS, style: tmp6.balanceText };
    obj3.children = tmp10(tmp3(tmp4[10]).BalanceCounter, obj4);
    items1[1] = tmp10(tmp8, obj3);
    obj.children = items1;
    return tmp7(tmp8, obj);
  }
}
obj1.lineHeight = num;
createStyles.balanceText = obj1;
const hasOwnProperty = createStyles.createStyles(createStyles);
BalanceWidgetPill.displayName = "BalanceWidgetPill";
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetPill.tsx");

export default BalanceWidgetPill;
export { BalanceWidgetPill };
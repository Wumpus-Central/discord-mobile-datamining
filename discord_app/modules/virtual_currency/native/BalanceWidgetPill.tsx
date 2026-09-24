// === Module 11445: virtual_currency/BalanceWidgetPill ===

// Module 11445 (virtual_currency/BalanceWidgetPill)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useVirtualCurrencyBalanceAnimationData from "useVirtualCurrencyBalanceAnimationData" /* 11446 */;
import OrbLottieAnimation from "OrbLottieAnimation" /* 11447 */;
import BalanceCounter from "BalanceCounter" /* 11452 */;
import AnimationUtils from "AnimationUtils" /* 11453 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { minHeight: fn(5278).SMALL_BUTTON_HEIGHT, borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center", flexDirection: "row", paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, gap: 4 }, orbsLottieContainer: { position: "relative", height: 18, width: 18, justifyContent: "center", alignItems: "center" }, balanceCounterContainer: { justifyContent: "center", alignItems: "flex-end" }, balanceText: null };
let obj4 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, textAlign: "right", lineHeight: null };
const PlatformUtils = fn(1364);
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
    obj1 = { style: null, accessibilityLabel: null, accessibilityState: null, accessible: true, children: null };
    items = [, ];
    items[0] = tmp6.container;
    items[1] = global.style;
    obj1.style = items;
    tmp7 = jsxs;
    intl = closure_0(closure_1[8]).intl;
    if (tmp2) {
      stringResult = intl.string(tmp3(tmp4[8]).t.y0WGqP);
    } else {
      obj7 = { balance: null };
      obj7.balance = balance;
      stringResult = intl.formatToPlainString(tmp3(tmp4[8]).t.zPaLL9, obj7);
    }
    obj1.accessibilityLabel = stringResult;
    obj1.accessibilityState = { busy: tmp2 };
    tmp10 = jsx;
    obj8 = { style: tmp6.orbsLottieContainer, children: jsx(tmp3(tmp4[9]).OrbLottieAnimation, { ref: lottieRef, animationType: currentAnimationType }) };
    items1 = [, ];
    items1[0] = jsx(tmp8, obj8);
    obj9 = { style: tmp6.balanceCounterContainer, children: null };
    if (showInitialRenderedBalance) {
      balance = prop;
    }
    obj10 = { value: balance, onValueChange, onValueReached, targetTotalCounterTime: tmp3(tmp4[11]).EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS, style: tmp6.balanceText };
    obj9.children = tmp10(tmp3(tmp4[10]).BalanceCounter, obj10);
    items1[1] = tmp10(tmp8, obj9);
    obj1.children = items1;
    return tmp7(tmp8, obj1);
  }
}
obj4.lineHeight = num;
obj2.balanceText = obj4;
const hasOwnProperty = createStyles.createStyles(obj2);
BalanceWidgetPill.displayName = "BalanceWidgetPill";
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetPill.tsx");

export default BalanceWidgetPill;
export { BalanceWidgetPill };
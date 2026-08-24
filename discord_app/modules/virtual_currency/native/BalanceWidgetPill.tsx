// === Module 10439: BalanceWidgetPill ===

// Module 10439 (BalanceWidgetPill)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useVirtualCurrencyBalanceAnimationData from "useVirtualCurrencyBalanceAnimationData" /* 10440 */;
import forwardRef from "forwardRef" /* 10441 */;
import BalanceCounter from "BalanceCounter" /* 10447 */;
import EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS from "EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS" /* 10448 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;
import set from "set" /* 500 */;

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { container: null, orbsLottieContainer: null, balanceCounterContainer: null, balanceText: null };
createCacheKey = { minHeight: require("MINIMUM_HIT_AREA").SMALL_BUTTON_HEIGHT, borderRadius: ThemesDefault.radii.round, justifyContent: "center", alignItems: "center", flexDirection: "row", paddingHorizontal: ThemesDefault.space.PX_12, paddingVertical: ThemesDefault.space.PX_4, backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, gap: 4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "relative", height: 18, width: 18, justifyContent: "center", alignItems: "center" };
createCacheKey[2] = { justifyContent: "center", alignItems: "flex-end" };
let obj1 = { color: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, textAlign: "right", lineHeight: null };
let num;
if (set.isAndroid()) {
  num = 14;
}
class BalanceWidgetPill {
  constructor(arg0) {
    prop = global.initialRenderedBalance;
    if (prop === undefined) {
      prop = null;
    }
    balance = global.balance;
    tmp2 = null === prop && null === balance;
    tmp3 = closure_0;
    tmp4 = closure_1;
    obj = require("useVirtualCurrencyBalanceAnimationData");
    virtualCurrencyBalanceAnimationData = obj.useVirtualCurrencyBalanceAnimationData({ initialRenderedBalance: prop, balance });
    ({ onValueChange, onValueReached, showInitialRenderedBalance, currentAnimationType, lottieRef } = virtualCurrencyBalanceAnimationData);
    tmp6 = closure_5();
    tmp8 = View;
    obj = { style: tmp6.container, accessibilityLabel: null, accessibilityState: null, accessible: true, children: null };
    tmp7 = jsxs;
    intl = require("getSystemLocale").intl;
    if (tmp2) {
      stringResult = intl.string(require("getSystemLocale").t.y0WGqP);
    } else {
      obj1 = { balance: null };
      obj1[0] = balance;
      stringResult = intl.formatToPlainString(require("getSystemLocale").t.zPaLL9, obj1);
    }
    obj[1] = stringResult;
    obj[2] = { busy: tmp2 };
    tmp10 = jsx;
    obj2 = { style: tmp6.orbsLottieContainer, children: jsx(require("forwardRef").OrbLottieAnimation, { ref: lottieRef, animationType: currentAnimationType }) };
    items = [, ];
    items[0] = jsx(tmp8, obj2);
    obj3 = { style: tmp6.balanceCounterContainer, children: null };
    if (showInitialRenderedBalance) {
      balance = prop;
    }
    obj4 = { value: balance, onValueChange, onValueReached, targetTotalCounterTime: require("EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS").EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS, style: tmp6.balanceText };
    obj3[1] = tmp10(require("BalanceCounter").BalanceCounter, obj4);
    items[1] = tmp10(tmp8, obj3);
    obj[4] = items;
    return tmp7(tmp8, obj);
  }
}
obj1[2] = num;
createCacheKey[3] = obj1;
let closure_5 = createCacheKey.createStyles(createCacheKey);
BalanceWidgetPill.displayName = "BalanceWidgetPill";
const result = set.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetPill.tsx");

export default BalanceWidgetPill;
export { BalanceWidgetPill };
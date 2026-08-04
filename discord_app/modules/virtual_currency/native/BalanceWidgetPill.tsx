// discord_app/modules/virtual_currency/native/BalanceWidgetPill.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import set from "set";
import set from "jsxProd";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { container: null, orbsLottieContainer: null, balanceCounterContainer: null, balanceText: null };
createCacheKey = { minHeight: require("MINIMUM_HIT_AREA").SMALL_BUTTON_HEIGHT, borderRadius: require("Themes").radii.round, justifyContent: "center", alignItems: "center", flexDirection: "row", paddingHorizontal: require("Themes").space.PX_12, paddingVertical: require("Themes").space.PX_4, backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, gap: 4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "relative", height: 18, width: 18, justifyContent: "center", alignItems: "center" };
createCacheKey[2] = { justifyContent: "center", alignItems: "flex-end" };
let obj1 = { color: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, textAlign: "right", lineHeight: null };
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
    tmp6 = jsx();
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
createCacheKey = createCacheKey.createStyles(createCacheKey);
BalanceWidgetPill.displayName = "BalanceWidgetPill";
const result = set.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetPill.tsx");

export default BalanceWidgetPill;
export { BalanceWidgetPill };
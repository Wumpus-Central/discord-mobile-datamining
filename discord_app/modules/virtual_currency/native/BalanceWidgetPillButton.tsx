// === Module 10410: BalanceWidgetPillButton ===

// Module 10410 (BalanceWidgetPillButton)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 4745 */;
import registerAssetDefault from "registerAsset" /* 9239 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
class BalanceWidgetPillButton {
  constructor(arg0) {
    ({ balance, variant } = global);
    if (variant === undefined) {
      variant = "tertiary";
    }
    flag = global.accessible;
    if (flag === undefined) {
      flag = true;
    }
    tmp2 = closure_0;
    tmp3 = closure_2;
    tmp = jsx;
    obj = { variant, onPress: global.onPress, size: "sm", text: null, icon: null, accessible: null, accessibilityElementsHidden: null, importantForAccessibility: null, accessibilityLabel: null, disabled: null, loading: null };
    str = undefined;
    if (balance != null) {
      str = balance.toString();
    }
    if (str == null) {
      str = "";
    }
    obj[3] = str;
    obj[4] = require("registerAsset");
    obj[5] = flag;
    obj[6] = !flag;
    str2 = "no";
    if (flag) {
      str2 = "auto";
    }
    tmp4 = null === balance;
    obj[7] = str2;
    intl = require("getSystemLocale").intl;
    if (tmp4) {
      stringResult = intl.string(require("getSystemLocale").t.y0WGqP);
    } else {
      obj = { balance: null };
      obj[0] = balance.toString();
      stringResult = intl.formatToPlainString(require("getSystemLocale").t.zPaLL9, obj);
    }
    obj[8] = stringResult;
    obj[9] = tmp4;
    obj[10] = tmp4;
    return tmp(require("Button").Button, obj);
  }
}
noopAll;
BalanceWidgetPillButton.displayName = "BalanceWidgetPillButton";
const result = require("obj132").fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetPillButton.tsx");

export default BalanceWidgetPillButton;
export { BalanceWidgetPillButton };
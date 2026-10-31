// === Module 14497: BalanceWidgetPillButton ===

// Module 14497 (BalanceWidgetPillButton)
import util from "util" /* 1113 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import IndicatorDot from "IndicatorDot" /* 9491 */;
import _modDef9533 from "module_9533" /* 9533 */;
import noop from "module_19" /* 19 */;

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
    flag2 = global.showNotificationBadge;
    if (flag2 === undefined) {
      flag2 = false;
    }
    tmp3 = View;
    tmp4 = jsx;
    tmp5 = closure_0;
    tmp6 = closure_2;
    tmp = closure_6();
    tmp2 = jsxs;
    obj = { variant, onPress: global.onPress, size: "sm", text: null, icon: null, accessible: null, accessibilityElementsHidden: null, importantForAccessibility: null, accessibilityLabel: null, disabled: null, loading: null };
    str = undefined;
    if (balance != null) {
      str = balance.toString();
    }
    if (str == null) {
      str = "";
    }
    obj.text = str;
    obj.icon = closure_1(tmp6[5]);
    obj.accessible = flag;
    obj.accessibilityElementsHidden = !flag;
    str2 = "no";
    if (flag) {
      str2 = "auto";
    }
    tmp7 = null === balance;
    obj.importantForAccessibility = str2;
    intl = tmp5(tmp6[6]).intl;
    if (tmp7) {
      stringResult = intl.string(tmp5(tmp6[6]).t.y0WGqP);
    } else {
      obj1 = { balance: null };
      obj1.balance = balance.toString();
      stringResult = intl.formatToPlainString(tmp5(tmp6[6]).t.zPaLL9, obj1);
    }
    obj.accessibilityLabel = stringResult;
    obj.disabled = tmp7;
    obj.loading = tmp7;
    items = [, ];
    items[0] = tmp4(closure_0(closure_2[4]).Button, obj);
    if (flag2) {
      obj4 = { style: null, children: null };
      obj4.style = tmp.notificationBadge;
      obj4.children = tmp4(tmp5(tmp6[7]).IndicatorDot, { cutout: "base-lower" });
      flag2 = tmp4(tmp3, obj4);
    }
    items[1] = flag2;
    return tmp2(tmp3, { children: items });
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5014);
const timestampProducer = createStyles.createStyles({ notificationBadge: { position: "absolute", top: 0, end: 0 } });
BalanceWidgetPillButton.displayName = "BalanceWidgetPillButton";
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetPillButton.tsx");

export default BalanceWidgetPillButton;
export { BalanceWidgetPillButton };
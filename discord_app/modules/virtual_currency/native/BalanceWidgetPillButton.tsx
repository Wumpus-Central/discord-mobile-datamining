// discord_app/modules/virtual_currency/native/BalanceWidgetPillButton.tsx
import util from "../../../intl/index.native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import _modDef8838 from "../../../../_runtime/metro/08838__.js";
import noop from "../../../../_runtime/metro/00019__.js";

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
    obj = {
      variant,
      onPress: global.onPress,
      size: "sm",
      text: null,
      icon: null,
      accessible: null,
      accessibilityElementsHidden: null,
      importantForAccessibility: null,
      accessibilityLabel: null,
      disabled: null,
      loading: null,
    };
    str = undefined;
    if (balance != null) {
      str = balance.toString();
    }
    if (str == null) {
      str = "";
    }
    obj.text = str;
    obj.icon = closure_1(tmp3[3]);
    obj.accessible = flag;
    obj.accessibilityElementsHidden = !flag;
    str2 = "no";
    if (flag) {
      str2 = "auto";
    }
    tmp4 = null === balance;
    obj.importantForAccessibility = str2;
    intl = tmp2(tmp3[4]).intl;
    if (tmp4) {
      stringResult = intl.string(tmp2(tmp3[4]).t.y0WGqP);
    } else {
      obj = { balance: null };
      obj.balance = balance.toString();
      stringResult = intl.formatToPlainString(tmp2(tmp3[4]).t.zPaLL9, obj);
    }
    obj.accessibilityLabel = stringResult;
    obj.disabled = tmp4;
    obj.loading = tmp4;
    return tmp(closure_0(closure_2[2]).Button, obj);
  }
}
const jsx = fn(21).jsx;
BalanceWidgetPillButton.displayName = "BalanceWidgetPillButton";
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetPillButton.tsx");

export default BalanceWidgetPillButton;
export { BalanceWidgetPillButton };

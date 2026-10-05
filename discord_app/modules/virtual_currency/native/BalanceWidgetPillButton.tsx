// === Module 11010: BalanceWidgetPillButton ===

// Module 11010 (BalanceWidgetPillButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import AssetRegistryDefault from "AssetRegistry" /* 8492 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessible;
  let balance;
  let onPress;
  let stringResult;
  let tmp5;
  let variant;
  const obj = react2;
  const cResult = obj.c(14);
  ({ balance, onPress, variant, accessible } = arg0);
  let str = "tertiary";
  if (undefined !== variant) {
    str = variant;
  }
  if (cResult[0] !== balance) {
    let str2;
    if (balance != null) {
      str2 = balance.toString();
    }
    if (str2 == null) {
      str2 = "";
    }
    cResult[0] = balance;
    cResult[1] = str2;
    tmp5 = str2;
  } else {
    tmp5 = cResult[1];
  }
  let str3 = "no";
  if (undefined === accessible || accessible) {
    str3 = "auto";
  }
  if (cResult[2] === balance) {
    let tmp9;
    if (cResult[3] === null === balance) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === (undefined === accessible || accessible)) {
      if (cResult[6] === null === balance) {
        if (cResult[7] === onPress) {
          if (cResult[8] === tmp5) {
            if (cResult[9] === !(undefined === accessible || accessible)) {
              if (cResult[10] === str3) {
                if (cResult[11] === tmp9) {
                  let tmp11;
                  if (cResult[12] === str) {
                    tmp11 = cResult[13];
                  }
                  return tmp11;
                }
              }
            }
          }
        }
      }
    }
    const Button = components_Button_Button.Button;
    const tmp14 = <Button variant={str} onPress={onPress} size="sm" text={tmp5} icon={AssetRegistryDefault} accessible={undefined === accessible || accessible} accessibilityElementsHidden={!(undefined === accessible || accessible)} importantForAccessibility={str3} accessibilityLabel={tmp9} disabled={null === balance} loading={null === balance} />;
    cResult[5] = undefined === accessible || accessible;
    cResult[6] = null === balance;
    cResult[7] = onPress;
    cResult[8] = tmp5;
    cResult[9] = !(undefined === accessible || accessible);
    cResult[10] = str3;
    cResult[11] = tmp9;
    cResult[12] = str;
    cResult[13] = tmp14;
    tmp11 = tmp14;
  }
  const intl = intl2.intl;
  if (null === balance) {
    stringResult = intl.string(intl2.t.y0WGqP);
  } else {
    const formatToPlainString = intl.formatToPlainString;
    const obj3 = { balance: balance.toString() };
    const zPaLL9 = intl2.t.zPaLL9;
    stringResult = formatToPlainString(zPaLL9, obj3);
  }
  cResult[2] = balance;
  cResult[3] = null === balance;
  cResult[4] = stringResult;
  tmp9 = stringResult;
}) : ((onPress) => {
  let balance;
  let stringResult;
  let variant;
  ({ balance, variant } = onPress);
  onPress = onPress.onPress;
  if (variant === undefined) {
    variant = "tertiary";
  }
  let flag = onPress.accessible;
  if (flag === undefined) {
    flag = true;
  }
  let str;
  const Button = components_Button_Button.Button;
  if (balance != null) {
    str = balance.toString();
  }
  if (str == null) {
    str = "";
  }
  let str2 = "no";
  if (flag) {
    str2 = "auto";
  }
  const intl = intl2.intl;
  if (null === balance) {
    stringResult = intl.string(intl2.t.y0WGqP);
  } else {
    const formatToPlainString = intl.formatToPlainString;
    const obj2 = { balance: balance.toString() };
    const zPaLL9 = intl2.t.zPaLL9;
    stringResult = formatToPlainString(zPaLL9, obj2);
  }
  return <Button variant={variant} onPress={onPress} size="sm" text={str} icon={AssetRegistryDefault} accessible={flag} accessibilityElementsHidden={!flag} importantForAccessibility={str2} accessibilityLabel={stringResult} disabled={null === balance} loading={null === balance} />;
});
tmp3.displayName = "BalanceWidgetPillButton";
const result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetPillButton.tsx");

export default tmp3;
export const BalanceWidgetPillButton = tmp3;
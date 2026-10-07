// discord_app/modules/virtual_currency/native/BalanceWidgetPillButton.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import _modDef8525 from "../../../../_runtime/metro/08525__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(14);
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
        let tmp5 = str2;
      } else {
        tmp5 = cResult[1];
      }
      let str3 = "no";
      if (undefined === accessible || accessible) {
        str3 = "auto";
      }
      if (cResult[2] === balance) {
        if (cResult[3] === tmp8) {
          if (cResult[5] === tmp4) {
            if (cResult[6] === tmp8) {
              if (cResult[7] === onPress) {
                if (cResult[8] === tmp5) {
                  if (cResult[9] === tmp7) {
                    if (cResult[10] === str3) {
                      if (cResult[11] === tmp9) {
                        if (cResult[12] === str) {
                          let tmp11 = cResult[13];
                        }
                        return tmp11;
                      }
                    }
                  }
                }
              }
            }
          }
          const obj2 = {
            variant: str,
            onPress,
            size: "sm",
            text: tmp5,
            icon: _modDef8525,
            accessible: tmp4,
            accessibilityElementsHidden: tmp7,
            importantForAccessibility: str3,
            accessibilityLabel: cResult[4],
            disabled: tmp8,
            loading: tmp8,
          };
          const tmp14 = jsx(components_Button_Button.Button, {
            variant: str,
            onPress,
            size: "sm",
            text: tmp5,
            icon: _modDef8525,
            accessible: tmp4,
            accessibilityElementsHidden: tmp7,
            importantForAccessibility: str3,
            accessibilityLabel: cResult[4],
            disabled: tmp8,
            loading: tmp8,
          });
          cResult[5] = tmp4;
          cResult[6] = tmp8;
          cResult[7] = onPress;
          cResult[8] = tmp5;
          cResult[9] = tmp7;
          cResult[10] = str3;
          cResult[11] = cResult[4];
          cResult[12] = str;
          cResult[13] = tmp14;
          tmp11 = tmp14;
        }
      }
      const intl = util.intl;
      if (null === balance) {
        let stringResult = intl.string(util.t.y0WGqP);
      } else {
        const obj3 = { balance: balance.toString() };
        stringResult = intl.formatToPlainString(util.t.zPaLL9, obj3);
      }
      cResult[2] = balance;
      cResult[3] = null === balance;
      cResult[4] = stringResult;
    }
  : (accessible) => {
      ({ balance, variant } = accessible);
      if (variant === undefined) {
        variant = "tertiary";
      }
      let flag = accessible.accessible;
      if (flag === undefined) {
        flag = true;
      }
      const obj = {
        variant,
        onPress: accessible.onPress,
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
      let str;
      if (balance != null) {
        str = balance.toString();
      }
      if (str == null) {
        str = "";
      }
      obj.text = str;
      obj.icon = _modDef8525;
      obj.accessible = flag;
      obj.accessibilityElementsHidden = !flag;
      let str2 = "no";
      if (flag) {
        str2 = "auto";
      }
      obj.importantForAccessibility = str2;
      const intl = util.intl;
      if (null === balance) {
        let stringResult = intl.string(util.t.y0WGqP);
      } else {
        const obj2 = { balance: balance.toString() };
        stringResult = intl.formatToPlainString(util.t.zPaLL9, obj2);
      }
      obj.accessibilityLabel = stringResult;
      obj.disabled = null === balance;
      obj.loading = null === balance;
      return jsx(components_Button_Button.Button, {
        variant,
        onPress: accessible.onPress,
        size: "sm",
        text: null,
        icon: null,
        accessible: null,
        accessibilityElementsHidden: null,
        importantForAccessibility: null,
        accessibilityLabel: null,
        disabled: null,
        loading: null,
      });
    };
tmp3.displayName = "BalanceWidgetPillButton";
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetPillButton.tsx");

export default tmp3;
export const BalanceWidgetPillButton = tmp3;

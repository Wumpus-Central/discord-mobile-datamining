// discord_app/modules/auth/native/components/PromotionalEmailCheckBox.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, Pressable: c3 } = get_ActivityIndicator);
const PromoEmailConsentStore = fn(6670);
({ usePromoEmailConsentStore: closure_4, setPromoEmailConsentChecked: hasOwnProperty } = PromoEmailConsentStore);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4972);
let closure_8 = createStyles.createStyles({
  checkboxRow: { flexDirection: "row", alignItems: "flex-start", gap: 8 },
  checkboxLabel: { flex: 1 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/PromotionalEmailCheckBox.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function PromotionalEmailCheckBox(style) {
      const cResult = require("c").c(21);
      style = style.style;
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o(required) {
          return required.required;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const obj = require("c");
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function v(checked) {
          return checked.checked;
        };
        cResult[1] = fn2;
        let tmp8 = fn2;
      } else {
        tmp8 = cResult[1];
      }
      const tmp6Result = closure_4(tmp8);
      _require = tmp6Result;
      if (cResult[2] !== tmp6Result) {
        const obj2 = { checked: tmp6Result };
        cResult[2] = tmp6Result;
        cResult[3] = obj2;
        let tmp10 = obj2;
      } else {
        tmp10 = cResult[3];
      }
      const tmp7 = closure_4(first);
      const checkboxA11yNative = require("useA11yRolesNative").useCheckboxA11yNative(tmp10);
      ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1125).intl;
        const stringResult = intl.string(tmp(1125).t.ylFCLt);
        cResult[4] = stringResult;
        let tmp12 = stringResult;
      } else {
        tmp12 = cResult[4];
      }
      if (!tmp7) {
        return null;
      } else {
        if (cResult[5] !== tmp6Result) {
          const fn3 = function w() {
            return hasOwnProperty(!closure_0);
          };
          cResult[5] = tmp6Result;
          cResult[6] = fn3;
          let tmp14 = fn3;
        } else {
          tmp14 = cResult[6];
        }
        if (cResult[7] !== tmp6Result) {
          const obj3 = { checked: tmp6Result };
          const tmp17 = closure_6(tmp(6903).FormCheckbox, obj3);
          cResult[7] = tmp6Result;
          cResult[8] = tmp17;
          let tmp15 = tmp17;
        } else {
          tmp15 = cResult[8];
        }
        if (cResult[9] !== tmp4.checkboxLabel) {
          const obj4 = { variant: "text-xs/medium", color: "text-muted", style: tmp4.checkboxLabel, children: tmp12 };
          const tmp20 = closure_6(tmp(5235).Text, obj4);
          cResult[9] = tmp4.checkboxLabel;
          cResult[10] = tmp20;
          let tmp18 = tmp20;
        } else {
          tmp18 = cResult[10];
        }
        if (cResult[11] === accessibilityRole) {
          if (cResult[12] === accessibilityState) {
            if (cResult[13] === tmp4.checkboxRow) {
              if (cResult[14] === tmp14) {
                if (cResult[15] === tmp15) {
                  if (cResult[16] === tmp18) {
                    let tmp21 = cResult[17];
                  }
                  if (cResult[18] === style) {
                  }
                  const obj5 = { style, children: tmp21 };
                  const tmp28 = closure_6(closure_2, obj5);
                  cResult[18] = style;
                  cResult[19] = tmp21;
                  cResult[20] = tmp28;
                }
              }
            }
          }
        }
        const obj6 = {
          accessibilityRole,
          accessibilityLabel: tmp12,
          accessibilityState,
          onPress: tmp14,
          style: tmp4.checkboxRow,
          children: null,
        };
        const items = [tmp15, tmp18];
        obj6.children = items;
        const tmp24 = closure_7(closure_3, obj6);
        cResult[11] = accessibilityRole;
        cResult[12] = accessibilityState;
        cResult[13] = tmp4.checkboxRow;
        cResult[14] = tmp14;
        cResult[15] = tmp15;
        cResult[16] = tmp18;
        cResult[17] = tmp24;
        tmp21 = tmp24;
      }
      const tmpResult = require("useA11yRolesNative");
    }
  : function PromotionalEmailCheckBox(style) {
      const tmp = closure_8();
      const tmp3 = closure_4((checked) => checked.checked);
      _require = tmp3;
      const tmp2 = closure_4((required) => required.required);
      const checkboxA11yNative = require("useA11yRolesNative").useCheckboxA11yNative({ checked: tmp3 });
      ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
      const intl = require("util").intl;
      const stringResult = intl.string(require("util").t.ylFCLt);
      let tmp8 = null;
      if (tmp2) {
        const obj2 = { style: style.style, children: null };
        const obj3 = {
          accessibilityRole,
          accessibilityLabel: stringResult,
          accessibilityState,
          onPress() {
            return hasOwnProperty(!closure_0);
          },
          style: tmp.checkboxRow,
          children: null,
        };
        const obj4 = { checked: tmp3 };
        const items = [closure_6(tmp4(6903).FormCheckbox, obj4)];
        const obj5 = {
          variant: "text-xs/medium",
          color: "text-muted",
          style: tmp.checkboxLabel,
          children: stringResult,
        };
        items[1] = closure_6(tmp4(5235).Text, obj5);
        obj3.children = items;
        obj2.children = closure_7(closure_3, obj3);
        tmp8 = closure_6(closure_2, obj2);
      }
      return tmp8;
    };

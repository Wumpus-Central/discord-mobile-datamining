// discord_app/modules/auth/native/components/PromotionalEmailCheckBox.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, Pressable: c3 } = get_ActivityIndicator);
const PromoEmailConsentStore = fn(6083);
({ usePromoEmailConsentStore: closure_4, setPromoEmailConsentChecked: hasOwnProperty } = PromoEmailConsentStore);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let closure_8 = createStyles.createStyles({
  checkboxRow: { flexDirection: "row", alignItems: "flex-start", gap: 8 },
  checkboxLabel: { flex: 1 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/PromotionalEmailCheckBox.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = require("c").c(22);
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
        class E {
          constructor(arg0) {
            return arg0.checked;
          }
        }
        cResult[1] = E;
      } else {
        class E {
          constructor(arg0) {
            return arg0.checked;
          }
        }
      }
      const tmp6Result = closure_4(E);
      _require = tmp6Result;
      if (cResult[2] !== tmp6Result) {
        class E {
          constructor(arg0) {
            return arg0.checked;
          }
        }
        tmp11[0] = tmp6Result;
        cResult[2] = tmp6Result;
        cResult[3] = tmp11;
      } else {
        class E {
          constructor(arg0) {
            return arg0.checked;
          }
        }
      }
      const tmp7 = closure_4(first);
      const checkboxA11yNative = require("useA11yRolesNative").useCheckboxA11yNative(tmp11);
      ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
      const tmpResult = require("useA11yRolesNative");
      const promoEmailOptInLabel = require("usePromoEmailOptInLabel").usePromoEmailOptInLabel(
        tmp(1126).t.ylFCLt,
        "REGISTER_PROMO_EMAIL_CHECKBOX_MOBILE",
      );
      if (!tmp7) {
        class E {
          constructor(arg0) {
            return arg0.checked;
          }
        }
      } else {
        class E {
          constructor(arg0) {
            return arg0.checked;
          }
        }
        if (cResult[6] !== tmp6Result) {
          class E {
            constructor(arg0) {
              return arg0.checked;
            }
          }
          const obj2 = { checked: tmp6Result };
          const tmp16 = closure_6(tmp(5991).FormCheckbox, obj2);
          cResult[6] = tmp6Result;
          cResult[7] = tmp16;
        } else {
          class E {
            constructor(arg0) {
              return arg0.checked;
            }
          }
        }
        if (cResult[8] === promoEmailOptInLabel) {
          class E {
            constructor(arg0) {
              return arg0.checked;
            }
          }
          if (cResult[11] === accessibilityRole) {
            class E {
              constructor(arg0) {
                return arg0.checked;
              }
            }
          }
          const obj3 = {
            accessibilityRole,
            accessibilityLabel: promoEmailOptInLabel,
            accessibilityState,
            onPress: tmp14,
            style: tmp4.checkboxRow,
            children: null,
          };
          const items = [tmp15, tmp17];
          obj3.children = items;
          const tmp23 = closure_7(closure_3, obj3);
          cResult[11] = accessibilityRole;
          cResult[12] = accessibilityState;
          cResult[13] = promoEmailOptInLabel;
          cResult[14] = tmp4.checkboxRow;
          cResult[15] = tmp14;
          cResult[16] = tmp15;
          cResult[17] = tmp17;
          cResult[18] = tmp23;
        }
        const obj4 = {
          variant: "text-xs/medium",
          color: "text-muted",
          style: tmp4.checkboxLabel,
          children: promoEmailOptInLabel,
        };
        const tmp19 = closure_6(tmp(4886).Text, obj4);
        cResult[8] = promoEmailOptInLabel;
        cResult[9] = tmp4.checkboxLabel;
        cResult[10] = tmp19;
      }
      const tmpResult2 = require("usePromoEmailOptInLabel");
    }
  : (style) => {
      const tmp = closure_8();
      const tmp3 = closure_4((checked) => checked.checked);
      _require = tmp3;
      const tmp2 = closure_4((required) => required.required);
      const checkboxA11yNative = require("useA11yRolesNative").useCheckboxA11yNative({ checked: tmp3 });
      ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
      const obj = require("useA11yRolesNative");
      const promoEmailOptInLabel = require("usePromoEmailOptInLabel").usePromoEmailOptInLabel(
        require("util").t.ylFCLt,
        "REGISTER_PROMO_EMAIL_CHECKBOX_MOBILE",
      );
      let tmp8 = null;
      if (tmp2) {
        const obj3 = { style: style.style, children: null };
        const obj4 = {
          accessibilityRole,
          accessibilityLabel: promoEmailOptInLabel,
          accessibilityState,
          onPress() {
            return hasOwnProperty(!closure_0);
          },
          style: tmp.checkboxRow,
          children: null,
        };
        const obj5 = { checked: tmp3 };
        const items = [closure_6(tmp4(5991).FormCheckbox, obj5)];
        const obj6 = {
          variant: "text-xs/medium",
          color: "text-muted",
          style: tmp.checkboxLabel,
          children: promoEmailOptInLabel,
        };
        items[1] = closure_6(tmp4(4886).Text, obj6);
        obj4.children = items;
        obj3.children = closure_7(closure_3, obj4);
        tmp8 = closure_6(closure_2, obj3);
      }
      return tmp8;
    };

// === Module 15905: PromotionalEmailCheckBox ===

// Module 15905 (PromotionalEmailCheckBox)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import PromoEmailConsentStore from "PromoEmailConsentStore" /* 6083 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, style;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ View: c2, Pressable: c3 } = react_native);
({ usePromoEmailConsentStore: closure_4, setPromoEmailConsentChecked: hasOwnProperty } = PromoEmailConsentStore);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ checkboxRow: { flexDirection: "row", alignItems: "flex-start", gap: 8 }, checkboxLabel: { flex: 1 } });
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityRole;
  let accessibilityState;
  let closure_0;
  let first;
  let items;
  const obj = require("react");
  const cResult = obj.c(22);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(required) {
      return required.required;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp7 = closure_4(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor(checked) {
        return checked.checked;
      }
    }
    cResult[1] = E;
  } else {
    class E {
      constructor(checked) {
        return checked.checked;
      }
    }
  }
  const tmp6Result = closure_4(E);
  _require = tmp6Result;
  if (cResult[2] !== tmp6Result) {
    class E {
      constructor(checked) {
        return checked.checked;
      }
    }
    tmp11[0] = tmp6Result;
    cResult[2] = tmp6Result;
    cResult[3] = tmp11;
  } else {
    class E {
      constructor(checked) {
        return checked.checked;
      }
    }
  }
  const tmpResult = require("react-native");
  const checkboxA11yNative = tmpResult.useCheckboxA11yNative(tmp11);
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const tmpResult2 = require("usePromoEmailOptInLabel");
  const promoEmailOptInLabel = tmpResult2.usePromoEmailOptInLabel(tmp(1126).t.ylFCLt, "REGISTER_PROMO_EMAIL_CHECKBOX_MOBILE");
  if (tmp7) {
    class E {
      constructor(checked) {
        return checked.checked;
      }
    }
    if (cResult[6] !== tmp6Result) {
      class E {
        constructor(checked) {
          return checked.checked;
        }
      }
      const obj2 = { checked: tmp6Result };
      cResult[6] = tmp6Result;
      cResult[7] = closure_6(require("FormCheckbox").FormCheckbox, obj2);
      const tmp16 = closure_6(require("FormCheckbox").FormCheckbox, obj2);
    } else {
      class E {
        constructor(checked) {
          return checked.checked;
        }
      }
    }
    if (cResult[8] === promoEmailOptInLabel) {
      class E {
        constructor(checked) {
          return checked.checked;
        }
      }
      if (cResult[11] === accessibilityRole) {
        class E {
          constructor(checked) {
            return checked.checked;
          }
        }
      }
      const obj3 = { accessibilityRole, accessibilityLabel: promoEmailOptInLabel, accessibilityState, onPress: tmp14, style: tmp4.checkboxRow, children: items };
      items = [tmp15, tmp17];
      cResult[11] = accessibilityRole;
      cResult[12] = accessibilityState;
      cResult[13] = promoEmailOptInLabel;
      cResult[14] = tmp4.checkboxRow;
      cResult[15] = tmp14;
      cResult[16] = tmp15;
      cResult[17] = tmp17;
      cResult[18] = closure_7(closure_3, obj3);
      const tmp23 = closure_7(closure_3, obj3);
    }
    const obj4 = { variant: "text-xs/medium", color: "text-muted", style: tmp4.checkboxLabel, children: promoEmailOptInLabel };
    cResult[8] = promoEmailOptInLabel;
    cResult[9] = tmp4.checkboxLabel;
    cResult[10] = closure_6(require("Text/Text").Text, obj4);
    const tmp19 = closure_6(require("Text/Text").Text, obj4);
  }
  return null;
}) : ((style) => {
  let accessibilityRole;
  let accessibilityState;
  let closure_0;
  let items;
  let obj4;
  style = style.style;
  const tmp = closure_8();
  const tmp2 = closure_4((required) => required.required);
  const tmp3 = closure_4((checked) => checked.checked);
  _require = tmp3;
  const obj = require("react-native");
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: tmp3 });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const obj2 = require("usePromoEmailOptInLabel");
  const promoEmailOptInLabel = obj2.usePromoEmailOptInLabel(require("intl").t.ylFCLt, "REGISTER_PROMO_EMAIL_CHECKBOX_MOBILE");
  let tmp8 = null;
  if (tmp2) {
    const obj3 = { style, children: closure_7(closure_3, obj4) };
    obj4 = {
      accessibilityRole,
      accessibilityLabel: promoEmailOptInLabel,
      accessibilityState,
      onPress() {
          return hasOwnProperty(!closure_0);
        },
      style: tmp.checkboxRow,
      children: items
    };
    const obj5 = { checked: tmp3 };
    items = [closure_6(require("FormCheckbox").FormCheckbox, obj5), ];
    const obj6 = { variant: "text-xs/medium", color: "text-muted", style: tmp.checkboxLabel, children: promoEmailOptInLabel };
    items[1] = closure_6(require("Text/Text").Text, obj6);
    tmp8 = closure_6(closure_2, obj3);
  }
  return tmp8;
});
const result = size.fileFinishedImporting("modules/auth/native/components/PromotionalEmailCheckBox.tsx");

export default tmp6;
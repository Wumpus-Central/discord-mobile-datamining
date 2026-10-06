// === Module 15943: PrivacyHint ===

// Module 15943 (PrivacyHint)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import react_native from "react-native" /* 4600 */;
import Text_Text from "Text/Text" /* 4892 */;
import FormCheckbox from "FormCheckbox" /* 5998 */;
import PromoEmailConsentStore from "PromoEmailConsentStore" /* 6090 */;
import Form from "Form" /* 8924 */;
import RegistrationUIStore from "RegistrationUIStore" /* 15906 */;
import PromotionalEmailCheckBoxDefault from "PromotionalEmailCheckBox" /* 15944 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let style;

let c3;
let c9;
let closure_4;
let metroImportAll;
({ View: c3, Pressable: closure_4 } = react_native2);
const usePromoEmailConsentStore = PromoEmailConsentStore.usePromoEmailConsentStore;
const useRegistrationUIStore = RegistrationUIStore.useRegistrationUIStore;
const MarketingURLs = Constants.MarketingURLs;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ multiItem: { flexDirection: "column", gap: 16 }, checkbox: { flexDirection: "row", alignItems: "flex-start", gap: 8 }, radio: { flexDirection: "row", alignItems: "center", gap: 8 }, checkboxLabel: { flex: 1 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  let first;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(3);
  style = style.style;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl3.intl;
    const obj3 = { termsURL: null, privacyURL: null };
    ({ TERMS: obj2.termsURL, PRIVACY: obj2.privacyURL } = MarketingURLs);
    const formatResult = intl.format(intl3.t["KI+BSb"], obj3);
    cResult[0] = formatResult;
    first = formatResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== style) {
    const obj5 = { style, variant: "text-xs/medium", color: "text-muted", children: first };
    const tmp9 = metroImportAll(Text_Text.Text, obj5);
    cResult[1] = style;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  return tmp7;
}) : ((style) => {
  let intl;
  let obj2;
  const obj = { style: style.style, variant: "text-xs/medium", color: "text-muted", children: intl.format(intl3.t["KI+BSb"], obj2) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  obj2 = { termsURL: MarketingURLs.TERMS, privacyURL: MarketingURLs.PRIVACY };
  return metroImportAll(Text, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityRole;
  let accessibilityState;
  let asCheckbox;
  let consent;
  let items;
  let onToggleConsent;
  let tmp11;
  let tmp13Result;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(17);
  ({ consent, onToggleConsent, asCheckbox } = arg0);
  const tmp5 = closure_10();
  if (cResult[0] !== consent) {
    const obj2 = { checked: consent };
    cResult[0] = consent;
    cResult[1] = obj2;
    tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  const tmpResult = react_native;
  const checkboxA11yNative = tmpResult.useCheckboxA11yNative(tmp6);
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const tmp8 = undefined !== asCheckbox && asCheckbox ? tmp5.checkbox : tmp5.radio;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl3.intl;
    const stringResult = intl.string(intl3.t.Y7Kgvf);
    cResult[2] = stringResult;
    tmp9 = stringResult;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const rect = { top: 11, bottom: 11, left: 11 };
    cResult[3] = rect;
    tmp11 = rect;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === (undefined !== asCheckbox && asCheckbox)) {
    let tmp12;
    let tmp15;
    let tmp18;
    if (cResult[5] === consent) {
      tmp12 = cResult[6];
    }
    const _Symbol = Symbol;
    const checkboxLabel = tmp5.checkboxLabel;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = intl3.intl;
      const obj3 = { termsURL: null, privacyURL: null };
      ({ TERMS: obj7.termsURL, PRIVACY: obj7.privacyURL } = MarketingURLs);
      const formatResult = intl2.format(intl3.t.qMDAP0, obj3);
      cResult[7] = formatResult;
      tmp15 = formatResult;
    } else {
      tmp15 = cResult[7];
    }
    if (cResult[8] !== tmp5.checkboxLabel) {
      const obj4 = { variant: "text-xs/medium", color: "text-muted", style: checkboxLabel, children: tmp15 };
      const tmp20 = metroImportAll(Text_Text.Text, obj4);
      cResult[8] = tmp5.checkboxLabel;
      cResult[9] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[9];
    }
    if (cResult[10] === accessibilityRole) {
      if (cResult[11] === accessibilityState) {
        if (cResult[12] === onToggleConsent) {
          if (cResult[13] === tmp8) {
            if (cResult[14] === tmp12) {
              let tmp21;
              if (cResult[15] === tmp18) {
                tmp21 = cResult[16];
              }
              return tmp21;
            }
          }
        }
      }
    }
    const obj5 = { style: tmp8, accessibilityState, accessibilityRole, accessibilityLabel: tmp9, onPress: onToggleConsent, hitSlop: tmp11, children: items };
    items = [tmp12, tmp18];
    const tmp24 = React4(React3, obj5);
    cResult[10] = accessibilityRole;
    cResult[11] = accessibilityState;
    cResult[12] = onToggleConsent;
    cResult[13] = tmp8;
    cResult[14] = tmp12;
    cResult[15] = tmp18;
    cResult[16] = tmp24;
    tmp21 = tmp24;
  }
  if (undefined !== asCheckbox && asCheckbox) {
    const obj6 = { checked: consent };
    tmp13Result = metroImportAll(FormCheckbox.FormCheckbox, obj6);
  } else {
    const obj8 = { selected: consent };
    tmp13Result = metroImportAll(Form.FormRow.Radio, obj8);
  }
  cResult[4] = undefined !== asCheckbox && asCheckbox;
  cResult[5] = consent;
  cResult[6] = tmp13Result;
  tmp12 = tmp13Result;
}) : ((onToggleConsent) => {
  let asCheckbox;
  let consent;
  let intl;
  let intl2;
  let items;
  let obj6;
  let tmp7Result;
  let tmp9;
  ({ consent, asCheckbox } = onToggleConsent);
  onToggleConsent = onToggleConsent.onToggleConsent;
  if (asCheckbox === undefined) {
    asCheckbox = false;
  }
  const tmp = closure_10();
  const obj = react_native;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: consent });
  const obj2 = { style: asCheckbox ? tmp.checkbox : tmp.radio, accessibilityState: checkboxA11yNative.accessibilityState, accessibilityRole: checkboxA11yNative.accessibilityRole, accessibilityLabel: intl.string(intl3.t.Y7Kgvf), onPress: onToggleConsent, hitSlop: { top: 11, bottom: 11, left: 11 }, children: items };
  intl = intl3.intl;
  if (asCheckbox) {
    const obj3 = { checked: consent };
    tmp7Result = metroImportAll(FormCheckbox.FormCheckbox, obj3);
    tmp9 = metroImportAll;
  } else {
    const obj4 = { selected: consent };
    tmp7Result = metroImportAll(Form.FormRow.Radio, obj4);
    tmp9 = metroImportAll;
  }
  items = [tmp7Result, ];
  const obj5 = { variant: "text-xs/medium", color: "text-muted", style: tmp.checkboxLabel, children: intl2.format(intl3.t.qMDAP0, obj6) };
  const Text = Text_Text.Text;
  intl2 = intl3.intl;
  obj6 = { termsURL: MarketingURLs.TERMS, privacyURL: MarketingURLs.PRIVACY };
  items[1] = tmp9(Text, obj5);
  return React4(React3, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let consent;
  let consentRequired;
  let first;
  let onToggleConsent;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(17);
  ({ consent, consentRequired, onToggleConsent } = arg0);
  closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(required) {
      return required.required;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp4 = usePromoEmailConsentStore(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor(registrationOptions) {
        return null != registrationOptions.registrationOptions.email;
      }
    }
    cResult[1] = S;
  } else {
    class S {
      constructor(registrationOptions) {
        return null != registrationOptions.registrationOptions.email;
      }
    }
  }
  useRegistrationUIStore(S) && tmp4;
  if (!consentRequired) {
    class S {
      constructor(registrationOptions) {
        return null != registrationOptions.registrationOptions.email;
      }
    }
    return tmp7;
  }
  if (consentRequired) {
    class S {
      constructor(registrationOptions) {
        return null != registrationOptions.registrationOptions.email;
      }
    }
    tmp7 = tmp8;
  }
  if (consentRequired) {
    class S {
      constructor(registrationOptions) {
        return null != registrationOptions.registrationOptions.email;
      }
    }
    const obj2 = { consent, onToggleConsent };
    cResult[14] = consent;
    cResult[15] = onToggleConsent;
    cResult[16] = metroImportAll(closure_12, obj2);
    const tmp14 = metroImportAll(closure_12, obj2);
  } else {
    class S {
      constructor(registrationOptions) {
        return null != registrationOptions.registrationOptions.email;
      }
    }
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor(registrationOptions) {
          return null != registrationOptions.registrationOptions.email;
        }
      }
      const tmp10 = metroImportAll(closure_11, {});
      cResult[13] = tmp10;
      tmp8 = tmp10;
    } else {
      class S {
        constructor(registrationOptions) {
          return null != registrationOptions.registrationOptions.email;
        }
      }
    }
  }
}) : ((arg0) => {
  let consent;
  let consentRequired;
  let items;
  let items1;
  let onToggleConsent;
  let tmp10;
  let tmp11Result;
  ({ consent, consentRequired, onToggleConsent } = arg0);
  const tmp = closure_10();
  const tmp2 = usePromoEmailConsentStore((required) => required.required);
  const tmp3 = useRegistrationUIStore((registrationOptions) => null != registrationOptions.registrationOptions.email) && tmp2;
  if (!consentRequired) {
    if (tmp3) {
      const obj = { style: tmp.multiItem, children: items };
      items = [metroImportAll(PromotionalEmailCheckBoxDefault, {}), metroImportAll(closure_11, {})];
      tmp10 = React4(_false, obj);
    }
    return tmp10;
  }
  if (consentRequired) {
    if (tmp3) {
      const obj2 = { style: tmp.multiItem, children: items1 };
      items1 = [metroImportAll(PromotionalEmailCheckBoxDefault, {}), ];
      const obj3 = { consent, onToggleConsent, asCheckbox: true };
      items1[1] = metroImportAll(closure_12, obj3);
      tmp11Result = React4(_false, obj2);
    }
    tmp10 = tmp11Result;
  }
  if (consentRequired) {
    const obj4 = { consent, onToggleConsent };
    tmp11Result = metroImportAll(closure_12, obj4);
  } else {
    tmp11Result = metroImportAll(closure_11, {});
  }
});
const result = size.fileFinishedImporting("modules/auth/native/components/PrivacyHint.tsx");

export default tmp5;
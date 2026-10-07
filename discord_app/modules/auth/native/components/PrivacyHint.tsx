// === Module 15943: PrivacyHint ===

// Module 15943 (PrivacyHint)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4600 */;
import Text_Text from "Text/Text" /* 4892 */;
import FormCheckbox from "FormCheckbox" /* 5998 */;
import Form from "Form" /* 8924 */;
import PromotionalEmailCheckBoxDefault from "PromotionalEmailCheckBox" /* 15944 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Pressable: closure_4 } = get_ActivityIndicator);
const usePromoEmailConsentStore = fn(6090).usePromoEmailConsentStore;
const useRegistrationUIStore = fn(15906).useRegistrationUIStore;
const MarketingURLs = fn(1085).MarketingURLs;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let closure_10 = createStyles.createStyles({ multiItem: { flexDirection: "column", gap: 16 }, checkbox: { flexDirection: "row", alignItems: "flex-start", gap: 8 }, radio: { flexDirection: "row", alignItems: "center", gap: 8 }, checkboxLabel: { flex: 1 } });
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const cResult = c.c(3);
  style = style.style;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    ({ TERMS: obj2.termsURL, PRIVACY: obj2.privacyURL } = MarketingURLs);
    const formatResult = intl.format(util.t["KI+BSb"], { termsURL: null, privacyURL: null });
    cResult[0] = formatResult;
    let first = formatResult;
    const obj3 = { termsURL: null, privacyURL: null };
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== style) {
    const obj5 = { style, variant: "text-xs/medium", color: "text-muted", children: first };
    const tmp9 = closure_1_8(Text_Text.Text, obj5);
    cResult[1] = style;
    cResult[2] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  return tmp7;
}) : ((style) => {
  const obj = { style: style.style, variant: "text-xs/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj.children = intl.format(util.t["KI+BSb"], { termsURL: MarketingURLs.TERMS, privacyURL: MarketingURLs.PRIVACY });
  return closure_1_8(Text_Text.Text, obj);
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(17);
  ({ consent, onToggleConsent, asCheckbox } = arg0);
  const tmp5 = closure_10();
  if (cResult[0] !== consent) {
    const obj2 = { checked: consent };
    cResult[0] = consent;
    cResult[1] = obj2;
    let tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative(tmp6);
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const tmp8 = undefined !== asCheckbox && asCheckbox ? tmp5.checkbox : tmp5.radio;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.Y7Kgvf);
    cResult[2] = stringResult;
    let tmp9 = stringResult;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const rect = { top: 11, bottom: 11, left: 11 };
    cResult[3] = rect;
    let tmp11 = rect;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === (undefined !== asCheckbox && asCheckbox)) {
    if (cResult[5] === consent) {
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        ({ TERMS: obj7.termsURL, PRIVACY: obj7.privacyURL } = MarketingURLs);
        const formatResult = intl2.format(util.t.qMDAP0, { termsURL: null, privacyURL: null });
        cResult[7] = formatResult;
        let tmp15 = formatResult;
        const obj3 = { termsURL: null, privacyURL: null };
      } else {
        tmp15 = cResult[7];
      }
      if (cResult[8] !== tmp5.checkboxLabel) {
        const obj4 = { variant: "text-xs/medium", color: "text-muted", style: tmp5.checkboxLabel, children: tmp15 };
        const tmp20 = closure_1_8(Text_Text.Text, obj4);
        cResult[8] = tmp5.checkboxLabel;
        cResult[9] = tmp20;
        let tmp18 = tmp20;
      } else {
        tmp18 = cResult[9];
      }
      if (cResult[10] === accessibilityRole) {
        if (cResult[11] === accessibilityState) {
          if (cResult[12] === onToggleConsent) {
            if (cResult[13] === tmp8) {
              if (cResult[14] === tmp12) {
                if (cResult[15] === tmp18) {
                  let tmp21 = cResult[16];
                }
                return tmp21;
              }
            }
          }
        }
      }
      const obj5 = { style: tmp8, accessibilityState, accessibilityRole, accessibilityLabel: tmp9, onPress: onToggleConsent, hitSlop: tmp11, children: null };
      const items = [cResult[6], tmp18];
      obj5.children = items;
      const tmp24 = options(React4, obj5);
      cResult[10] = accessibilityRole;
      cResult[11] = accessibilityState;
      cResult[12] = onToggleConsent;
      cResult[13] = tmp8;
      cResult[14] = cResult[6];
      cResult[15] = tmp18;
      cResult[16] = tmp24;
      tmp21 = tmp24;
    }
  }
  if (undefined !== asCheckbox && asCheckbox) {
    const obj6 = { checked: consent };
    let tmp13Result = closure_1_8(FormCheckbox.FormCheckbox, obj6);
  } else {
    const obj8 = { selected: consent };
    tmp13Result = closure_1_8(Form.FormRow.Radio, obj8);
  }
  cResult[4] = undefined !== asCheckbox && asCheckbox;
  cResult[5] = consent;
  cResult[6] = tmp13Result;
  const tmpResult = useA11yRolesNative;
}) : ((onToggleConsent) => {
  ({ consent, asCheckbox } = onToggleConsent);
  if (asCheckbox === undefined) {
    asCheckbox = false;
  }
  const tmp = closure_10();
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative({ checked: consent });
  const obj2 = { style: asCheckbox ? tmp.checkbox : tmp.radio, accessibilityState: checkboxA11yNative.accessibilityState, accessibilityRole: checkboxA11yNative.accessibilityRole, accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
  const intl = util.intl;
  obj2.accessibilityLabel = intl.string(util.t.Y7Kgvf);
  obj2.onPress = onToggleConsent.onToggleConsent;
  obj2.hitSlop = { top: 11, bottom: 11, left: 11 };
  if (asCheckbox) {
    const obj3 = { checked: consent };
    let tmp7Result = closure_1_8(FormCheckbox.FormCheckbox, obj3);
    let tmp9 = closure_1_8;
  } else {
    const obj4 = { selected: consent };
    tmp7Result = closure_1_8(Form.FormRow.Radio, obj4);
    tmp9 = closure_1_8;
  }
  const items = [tmp7Result, ];
  const obj5 = { variant: "text-xs/medium", color: "text-muted", style: tmp.checkboxLabel, children: null };
  const intl2 = util.intl;
  obj5.children = intl2.format(util.t.qMDAP0, { termsURL: MarketingURLs.TERMS, privacyURL: MarketingURLs.PRIVACY });
  items[1] = tmp9(Text_Text.Text, obj5);
  obj2.children = items;
  return options(React4, obj2);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/PrivacyHint.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(17);
  ({ consent, consentRequired, onToggleConsent } = arg0);
  let multiItem = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(required) {
      return required.required;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor(arg0) {
        return null != arg0.registrationOptions.email;
      }
    }
    cResult[1] = S;
  } else {
    class S {
      constructor(arg0) {
        return null != arg0.registrationOptions.email;
      }
    }
  }
  useRegistrationUIStore(S) && usePromoEmailConsentStore(first);
  if (!consentRequired) {
    class S {
      constructor(arg0) {
        return null != arg0.registrationOptions.email;
      }
    }
  }
  if (!consentRequired) {
    class S {
      constructor(arg0) {
        return null != arg0.registrationOptions.email;
      }
    }
  } else {
    class S {
      constructor(arg0) {
        return null != arg0.registrationOptions.email;
      }
    }
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor(arg0) {
        return null != arg0.registrationOptions.email;
      }
    }
    const tmp9 = closure_1_8(PromotionalEmailCheckBoxDefault, {});
    cResult[6] = tmp9;
    const tmp7 = tmp9;
  } else {
    class S {
      constructor(arg0) {
        return null != arg0.registrationOptions.email;
      }
    }
  }
  if (cResult[7] === consent) {
    class S {
      constructor(arg0) {
        return null != arg0.registrationOptions.email;
      }
    }
    if (cResult[10] === multiItem.multiItem) {
      class S {
        constructor(arg0) {
          return null != arg0.registrationOptions.email;
        }
      }
    }
    const obj2 = { style: multiItem.multiItem, children: null };
    const items = [tmp7, tmp10];
    obj2.children = items;
    const tmp15 = options(React3, obj2);
    multiItem = multiItem.multiItem;
    cResult[10] = multiItem;
    cResult[11] = tmp10;
    cResult[12] = tmp15;
  }
  const tmp11 = closure_1_8(closure_12, { consent, onToggleConsent, asCheckbox: true });
  cResult[7] = consent;
  cResult[8] = onToggleConsent;
  cResult[9] = tmp11;
  const tmp4 = usePromoEmailConsentStore(first);
}) : ((arg0) => {
  ({ consent, consentRequired, onToggleConsent } = arg0);
  let items1 = closure_10();
  const tmp = usePromoEmailConsentStore((required) => required.required);
  if (!consentRequired) {
    if (tmp2) {
      const obj = { style: items1.multiItem, children: null };
      const items = [closure_1_8(PromotionalEmailCheckBoxDefault, {}), closure_1_8(closure_11, {})];
      obj.children = items;
      return options(React3, obj);
    }
  }
  if (!consentRequired) {
    if (consentRequired) {
      const obj2 = { consent, onToggleConsent };
      let tmp9Result = closure_1_8(closure_12, obj2);
    } else {
      tmp9Result = closure_1_8(closure_11, {});
    }
  }
  const obj3 = { style: items1.multiItem, children: null };
  items1 = [closure_1_8(PromotionalEmailCheckBoxDefault, {}), closure_1_8(closure_12, { consent, onToggleConsent, asCheckbox: true })];
  obj3.children = items1;
  tmp9Result = options(React3, obj3);
  tmp2 = useRegistrationUIStore((registrationOptions) => null != registrationOptions.registrationOptions.email) && usePromoEmailConsentStore((required) => required.required);
});
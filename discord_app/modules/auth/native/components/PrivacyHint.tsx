// === Module 15581: PrivacyHint ===

// Module 15581 (PrivacyHint)
import util from "util" /* 1115 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4545 */;
import Text_Text from "Text/Text" /* 4825 */;
import FormCheckbox from "FormCheckbox" /* 5924 */;
import Form from "Form" /* 8045 */;
import PromotionalEmailCheckBoxDefault from "PromotionalEmailCheckBox" /* 15582 */;
import noop from "module_19" /* 19 */;

require = fn;
function PrivacyPolicyDescription(style) {
  const obj = { style: style.style, variant: "text-xs/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj.children = intl.format(util.t["KI+BSb"], { termsURL: MarketingURLs.TERMS, privacyURL: MarketingURLs.PRIVACY });
  return React6(Text_Text.Text, obj);
}
function PrivacyPolicyCheckbox(onToggleConsent) {
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
    let tmp7Result = React6(FormCheckbox.FormCheckbox, obj3);
    let tmp9 = React6;
  } else {
    const obj4 = { selected: consent };
    tmp7Result = React6(Form.FormRow.Radio, obj4);
    tmp9 = React6;
  }
  const items = [tmp7Result, ];
  const obj5 = { variant: "text-xs/medium", color: "text-muted", style: tmp.checkboxLabel, children: null };
  const intl2 = util.intl;
  obj5.children = intl2.format(util.t.qMDAP0, { termsURL: MarketingURLs.TERMS, privacyURL: MarketingURLs.PRIVACY });
  items[1] = tmp9(Text_Text.Text, obj5);
  obj2.children = items;
  return React7(React4, obj2);
}
get_ActivityIndicator = fn(17);
({ View: c3, Pressable: closure_4 } = get_ActivityIndicator);
const usePromoEmailConsentStore = fn(6006).usePromoEmailConsentStore;
const useRegistrationUIStore = fn(15543).useRegistrationUIStore;
const MarketingURLs = fn(1074).MarketingURLs;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4829);
let closure_10 = createStyles.createStyles({ multiItem: { flexDirection: "column", gap: 16 }, checkbox: { flexDirection: "row", alignItems: "flex-start", gap: 8 }, radio: { flexDirection: "row", alignItems: "center", gap: 8 }, checkboxLabel: { flex: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/PrivacyHint.tsx");

export default function PrivacyHint(arg0) {
  ({ consent, consentRequired, onToggleConsent } = arg0);
  let items1 = closure_10();
  const tmp = usePromoEmailConsentStore((required) => required.required);
  if (!consentRequired) {
    if (tmp2) {
      const obj = { style: items1.multiItem, children: null };
      const items = [React6(PromotionalEmailCheckBoxDefault, {}), React6(PrivacyPolicyDescription, {})];
      obj.children = items;
      return React7(React3, obj);
    }
  }
  if (!consentRequired) {
    if (consentRequired) {
      const obj2 = { consent, onToggleConsent };
      let tmp9Result = React6(PrivacyPolicyCheckbox, obj2);
    } else {
      tmp9Result = React6(PrivacyPolicyDescription, {});
    }
  }
  const obj3 = { style: items1.multiItem, children: null };
  items1 = [React6(PromotionalEmailCheckBoxDefault, {}), React6(PrivacyPolicyCheckbox, { consent, onToggleConsent, asCheckbox: true })];
  obj3.children = items1;
  tmp9Result = React7(React3, obj3);
  tmp2 = useRegistrationUIStore((registrationOptions) => null != registrationOptions.registrationOptions.email) && usePromoEmailConsentStore((required) => required.required);
};
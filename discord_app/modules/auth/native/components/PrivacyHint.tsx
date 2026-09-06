// discord_app/modules/auth/native/components/PrivacyHint.tsx
import util from "../../../../intl/index.native.tsx";
import useA11yRolesNative from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FormCheckbox from "../../../../design/components/Forms/native/FormCheckbox.native.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import PromotionalEmailCheckBoxDefault from "PromotionalEmailCheckBox.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function PrivacyPolicyDescription(style) {
  let obj = { style: style.style, variant: "text-xs/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj = { termsURL: MarketingURLs.TERMS, privacyURL: MarketingURLs.PRIVACY };
  obj.children = intl.format(util.t["KI+BSb"], obj);
  return React6(Text_Text.Text, obj);
}
function PrivacyPolicyCheckbox(onToggleConsent) {
  ({ consent, asCheckbox } = onToggleConsent);
  if (asCheckbox === undefined) {
    asCheckbox = false;
  }
  const tmp = closure_10();
  let obj = useA11yRolesNative;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: consent });
  obj = {
    style: asCheckbox ? tmp.checkbox : tmp.radio,
    accessibilityState: checkboxA11yNative.accessibilityState,
    accessibilityRole: checkboxA11yNative.accessibilityRole,
    accessibilityLabel: null,
    onPress: null,
    hitSlop: null,
    children: null,
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.Y7Kgvf);
  obj.onPress = onToggleConsent.onToggleConsent;
  obj.hitSlop = { top: 11, bottom: 11, left: 11 };
  if (asCheckbox) {
    obj = { checked: consent };
    let tmp7Result = React6(FormCheckbox.FormCheckbox, obj);
    let tmp9 = React6;
  } else {
    const obj1 = { selected: consent };
    tmp7Result = React6(Form.FormRow.Radio, obj1);
    tmp9 = React6;
  }
  const items = [tmp7Result];
  const obj2 = { variant: "text-xs/medium", color: "text-muted", style: tmp.checkboxLabel, children: null };
  const intl2 = util.intl;
  obj2.children = intl2.format(util.t.qMDAP0, { termsURL: MarketingURLs.TERMS, privacyURL: MarketingURLs.PRIVACY });
  items[1] = tmp9(Text_Text.Text, obj2);
  obj.children = items;
  return React7(React4, obj);
}
get_ActivityIndicator = fn(17);
({ View: c3, Pressable: closure_4 } = get_ActivityIndicator);
const usePromoEmailConsentStore = fn(6594).usePromoEmailConsentStore;
const useRegistrationUIStore = fn(15946).useRegistrationUIStore;
const MarketingURLs = fn(1074).MarketingURLs;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles({
  multiItem: { flexDirection: "column", gap: 16 },
  checkbox: { flexDirection: "row", alignItems: "flex-start", gap: 8 },
  radio: { flexDirection: "row", alignItems: "center", gap: 8 },
  checkboxLabel: { flex: 1 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/PrivacyHint.tsx");

export default function PrivacyHint(arg0) {
  ({ consent, consentRequired, onToggleConsent } = arg0);
  let items1 = closure_10();
  const tmp = usePromoEmailConsentStore((required) => required.required);
  if (!consentRequired) {
    if (tmp2) {
      let obj = { style: items1.multiItem, children: null };
      const items = [React6(PromotionalEmailCheckBoxDefault, {}), React6(PrivacyPolicyDescription, {})];
      obj.children = items;
      return React7(React3, obj);
    }
  }
  if (!consentRequired) {
    if (consentRequired) {
      obj = { consent, onToggleConsent };
      let tmp9Result = React6(PrivacyPolicyCheckbox, obj);
    } else {
      tmp9Result = React6(PrivacyPolicyDescription, {});
    }
  }
  obj = { style: items1.multiItem, children: null };
  items1 = [
    React6(PromotionalEmailCheckBoxDefault, {}),
    React6(PrivacyPolicyCheckbox, { consent, onToggleConsent, asCheckbox: true }),
  ];
  obj.children = items1;
  tmp9Result = React7(React3, obj);
  tmp2 =
    useRegistrationUIStore((registrationOptions) => null != registrationOptions.registrationOptions.email) &&
    usePromoEmailConsentStore((required) => required.required);
}

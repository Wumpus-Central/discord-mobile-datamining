// discord_app/modules/auth/native/components/PrivacyHint.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import useCheckboxA11yNative from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import PromotionalEmailCheckBoxDefault from "PromotionalEmailCheckBox.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { usePromoEmailConsentStore } from "../../PromoEmailConsentStore.tsx";
import { useRegistrationUIStore } from "../RegistrationUIStore.tsx";
import { MarketingURLs } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function PrivacyPolicyDescription(style) {
  let obj = { style: style.style, variant: "text-xs/medium", color: "text-muted", children: null };
  const intl = getSystemLocale.intl;
  obj = { termsURL: MarketingURLs.TERMS, privacyURL: MarketingURLs.PRIVACY };
  obj[3] = intl.format(getSystemLocale.t["KI+BSb"], obj);
  return callback(Text.Text, obj);
}
function PrivacyPolicyCheckbox(onToggleConsent) {
  ({ consent, asCheckbox } = onToggleConsent);
  if (asCheckbox === undefined) {
    asCheckbox = false;
  }
  const tmp = callback3();
  let obj = useCheckboxA11yNative;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: consent });
  obj = { style: asCheckbox ? tmp.checkbox : tmp.radio, accessibilityState: checkboxA11yNative.accessibilityState, accessibilityRole: checkboxA11yNative.accessibilityRole, accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
  const intl = tmp2(1236).intl;
  obj[3] = intl.string(getSystemLocale.t.Y7Kgvf);
  obj[4] = onToggleConsent.onToggleConsent;
  obj[5] = { top: 11, bottom: 11, left: 11 };
  if (asCheckbox) {
    obj = { checked: null };
    obj[0] = consent;
    let tmp7Result = tmp7(tmp2(7617).FormCheckbox, obj);
    let tmp9 = tmp7;
  } else {
    obj1 = { selected: null };
    obj1[0] = consent;
    tmp7Result = tmp7(tmp2(8295).FormRow.Radio, obj1);
    tmp9 = tmp7;
  }
  const items = [tmp7Result, ];
  const obj2 = { variant: "text-xs/medium", color: "text-muted", style: tmp.checkboxLabel, children: null };
  const intl2 = tmp2(1236).intl;
  obj2[3] = intl2.format(getSystemLocale.t.qMDAP0, { termsURL: MarketingURLs.TERMS, privacyURL: MarketingURLs.PRIVACY });
  items[1] = tmp9(Text.Text, obj2);
  obj[6] = items;
  return closure_9(closure_4, obj);
}
noopAll;
({ View: c3, Pressable: c4 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ multiItem: { flexDirection: "column", gap: 16 }, checkbox: { flexDirection: "row", alignItems: "flex-start", gap: 8 }, radio: { flexDirection: "row", alignItems: "center", gap: 8 }, checkboxLabel: { flex: 1 } });
const result = require("set").fileFinishedImporting("modules/auth/native/components/PrivacyHint.tsx");

export default function PrivacyHint(arg0) {
  ({ consent, consentRequired, onToggleConsent } = arg0);
  let items1 = callback3();
  const tmp2 = useRegistrationUIStore((registrationOptions) => null != registrationOptions.registrationOptions.email) && usePromoEmailConsentStore((required) => required.required);
  if (!consentRequired) {
    if (tmp2) {
      let obj = { style: null, children: null };
      obj[0] = items1.multiItem;
      const items = [callback(PromotionalEmailCheckBoxDefault, {}), callback(PrivacyPolicyDescription, {})];
      obj[1] = items;
      return callback2(closure_3, obj);
    }
  }
  if (!consentRequired) {
    if (consentRequired) {
      obj = { consent: null, onToggleConsent: null };
      obj[0] = consent;
      obj[1] = onToggleConsent;
      let tmp9Result = tmp9(PrivacyPolicyCheckbox, obj);
    } else {
      tmp9Result = tmp9(PrivacyPolicyDescription, {});
    }
  }
  obj = { style: items1.multiItem, children: null };
  items1 = [callback(PromotionalEmailCheckBoxDefault, {}), callback(PrivacyPolicyCheckbox, { consent, onToggleConsent, asCheckbox: true })];
  obj[1] = items1;
  tmp9Result = callback2(closure_3, obj);
};
// discord_app/modules/auth/native/components/PromotionalEmailCheckBox.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, Pressable: c3 } = get_ActivityIndicator);
const PromoEmailConsentStore = fn(6006);
({ usePromoEmailConsentStore: closure_4, setPromoEmailConsentChecked: hasOwnProperty } = PromoEmailConsentStore);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
let closure_8 = createStyles.createStyles({
  checkboxRow: { flexDirection: "row", alignItems: "flex-start", gap: 8 },
  checkboxLabel: { flex: 1 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/PromotionalEmailCheckBox.tsx");

export default function PromotionalEmailCheckBox(style) {
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
    const items = [closure_6(tmp4(5924).FormCheckbox, obj5)];
    const obj6 = {
      variant: "text-xs/medium",
      color: "text-muted",
      style: tmp.checkboxLabel,
      children: promoEmailOptInLabel,
    };
    items[1] = closure_6(tmp4(4825).Text, obj6);
    obj4.children = items;
    obj3.children = closure_7(closure_3, obj4);
    tmp8 = closure_6(closure_2, obj3);
  }
  return tmp8;
}

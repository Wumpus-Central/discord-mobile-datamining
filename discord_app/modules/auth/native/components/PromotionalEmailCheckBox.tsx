// discord_app/modules/auth/native/components/PromotionalEmailCheckBox.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, Pressable: c3 } = get_ActivityIndicator);
const PromoEmailConsentStore = fn(6830);
({ usePromoEmailConsentStore: closure_4, setPromoEmailConsentChecked: hasOwnProperty } = PromoEmailConsentStore);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4756);
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
  let tmp9 = null;
  if (tmp2) {
    const obj2 = { style: style.style, children: null };
    const obj3 = {
      accessibilityRole: tmp7,
      accessibilityLabel: null,
      accessibilityState: null,
      onPress: null,
      style: null,
      children: null,
    };
    const intl = tmp4(1115).intl;
    obj3.accessibilityLabel = intl.string(tmp4(1115).t.ylFCLt);
    obj3.accessibilityState = tmp8;
    obj3.onPress = function onPress() {
      return hasOwnProperty(!closure_0);
    };
    obj3.style = tmp.checkboxRow;
    const obj4 = { checked: tmp3 };
    const items = [closure_6(tmp4(5829).FormCheckbox, obj4)];
    const obj5 = { variant: "text-xs/medium", color: "text-muted", style: tmp.checkboxLabel, children: null };
    const intl2 = tmp4(1115).intl;
    obj5.children = intl2.string(tmp4(1115).t.ylFCLt);
    items[1] = closure_6(tmp4(4752).Text, obj5);
    obj3.children = items;
    obj2.children = closure_7(closure_3, obj3);
    tmp9 = closure_6(closure_2, obj2);
  }
  return tmp9;
}

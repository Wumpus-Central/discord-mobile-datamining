// discord_app/modules/auth/native/components/PromotionalEmailCheckBox.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, Pressable: c3 } = get_ActivityIndicator);
const PromoEmailConsentStore = fn(6594);
({ usePromoEmailConsentStore: closure_4, setPromoEmailConsentChecked: hasOwnProperty } = PromoEmailConsentStore);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
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
  let obj = require("useA11yRolesNative");
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: tmp3 });
  let tmp9 = null;
  if (tmp2) {
    obj = { style: style.style, children: null };
    obj = {
      accessibilityRole: tmp7,
      accessibilityLabel: null,
      accessibilityState: null,
      onPress: null,
      style: null,
      children: null,
    };
    const intl = tmp4(1114).intl;
    obj.accessibilityLabel = intl.string(tmp4(1114).t.ylFCLt);
    obj.accessibilityState = tmp8;
    obj.onPress = function onPress() {
      return hasOwnProperty(!closure_0);
    };
    obj.style = tmp.checkboxRow;
    const obj1 = { checked: tmp3 };
    const items = [closure_6(tmp4(5617).FormCheckbox, obj1)];
    const obj2 = { variant: "text-xs/medium", color: "text-muted", style: tmp.checkboxLabel, children: null };
    const intl2 = tmp4(1114).intl;
    obj2.children = intl2.string(tmp4(1114).t.ylFCLt);
    items[1] = closure_6(tmp4(4556).Text, obj2);
    obj.children = items;
    obj.children = closure_7(closure_3, obj);
    tmp9 = closure_6(closure_2, obj);
  }
  return tmp9;
}

// === Module 15823: PromotionalEmailCheckBox ===

// Module 15823 (PromotionalEmailCheckBox)
import noopAll from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import setPromoEmailConsentState from "setPromoEmailConsentState" /* 6062 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
noopAll;
({ View: obj1, Pressable: c3 } = get_ActivityIndicator);
({ usePromoEmailConsentStore: c4, setPromoEmailConsentChecked: c5 } = setPromoEmailConsentState);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ checkboxRow: { flexDirection: "row", alignItems: "flex-start", gap: 8 }, checkboxLabel: { flex: 1 } });
const result = require("set").fileFinishedImporting("modules/auth/native/components/PromotionalEmailCheckBox.tsx");

export default function PromotionalEmailCheckBox(style) {
  let _require;
  const tmp = callback4();
  const tmp3 = callback((checked) => checked.checked);
  _require = tmp3;
  let obj = _require(4205);
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: tmp3 });
  let tmp9 = null;
  if (tmp2) {
    obj = { style: null, children: null };
    obj[0] = style.style;
    obj = { accessibilityRole: null, accessibilityLabel: null, accessibilityState: null, onPress: null, style: null, children: null };
    obj[0] = tmp7;
    const intl = tmp4(1233).intl;
    obj[1] = intl.string(tmp4(1233).t.ylFCLt);
    obj[2] = tmp8;
    obj[3] = function onPress() {
      return closure_1_5(!closure_0);
    };
    obj[4] = tmp.checkboxRow;
    obj1 = { checked: null };
    obj1[0] = tmp3;
    const items = [callback2(tmp4(7696).FormCheckbox, obj1), ];
    const obj2 = { variant: "text-xs/medium", color: "text-muted", style: null, children: null };
    obj2[2] = tmp.checkboxLabel;
    const intl2 = tmp4(1233).intl;
    obj2[3] = intl2.string(tmp4(1233).t.ylFCLt);
    items[1] = callback2(tmp4(4474).Text, obj2);
    obj[5] = items;
    obj[1] = callback3(closure_3, obj);
    tmp9 = callback2(closure_2, obj);
  }
  return tmp9;
};
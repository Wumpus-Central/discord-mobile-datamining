// === Module 9824: Checkbox ===

// Module 9824 (Checkbox)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

({ Pressable: obj1, View: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ textContainer: { flex: 1 }, labelContainer: { minHeight: 24, justifyContent: "center" } });
const result = obj132.fileFinishedImporting("design/components/Checkbox/native/Checkbox.native.tsx");

export const Checkbox = function Checkbox(onToggle) {
  ({ label, description, required, checked } = onToggle);
  onToggle = onToggle.onToggle;
  const tmp = callback();
  let obj = checked(onToggle[3]);
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked });
  obj = { accessibilityRole: checkboxA11yNative.accessibilityRole, accessibilityLabel: null, accessibilityState: null, onPress: null, children: null };
  let str = "";
  let str2 = "";
  if (required) {
    const intl = checked(tmp3[4]).intl;
    const _HermesInternal = HermesInternal;
    str2 = " (" + intl.string(checked(tmp3[4]).t.EkokLy) + ")";
  }
  const sum = label + str2;
  if (null != description) {
    const _HermesInternal2 = HermesInternal;
    str = ", " + description;
  }
  obj[1] = sum + str;
  obj[2] = checkboxA11yNative.accessibilityState;
  obj[3] = function onPress() {
    return onToggle(!checked);
  };
  const items = [callback(checked(onToggle[6]).FormCheckbox, { checked }), ];
  obj = { style: tmp.textContainer, children: null };
  obj1 = { style: tmp.labelContainer, children: null };
  const items1 = [label, ];
  if (required) {
    const obj2 = { variant: "text-md/bold", color: "text-feedback-critical", "aria-label": null, children: null };
    const intl2 = checked(tmp3[4]).intl;
    obj2[2] = intl2.string(checked(tmp3[4]).t.EkokLy);
    obj2[3] = [" ", "*"];
    required = callback2(checked(tmp3[7]).Text, obj2);
  }
  items1[1] = required;
  obj1[1] = callback2(checked(onToggle[7]).Text, { variant: "text-md/medium", children: items1 });
  const items2 = [callback(closure_3, obj1), ];
  let tmp5Result = null != description;
  if (tmp5Result) {
    const obj3 = { variant: "text-sm/normal", color: "text-subtle", children: null };
    obj3[2] = description;
    tmp5Result = callback(checked(tmp3[7]).Text, obj3);
  }
  const obj4 = { direction: "horizontal", children: null };
  items2[1] = tmp5Result;
  obj[1] = items2;
  items[1] = callback2(closure_3, obj);
  obj4[1] = items;
  obj[4] = callback2(checked(onToggle[5]).Stack, obj4);
  return callback(closure_2, obj);
};
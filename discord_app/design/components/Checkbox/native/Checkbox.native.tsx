// === Module 9202: Checkbox ===

// Module 9202 (Checkbox)
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let obj1;
({ Pressable: obj1, View: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ textContainer: { flex: 1 }, labelContainer: { minHeight: 24, justifyContent: "center" } });
const result = require("createCacheKey").fileFinishedImporting("design/components/Checkbox/native/Checkbox.native.tsx");

export const Checkbox = function Checkbox(onToggle) {
  let checked;
  let description;
  let label;
  let required;
  ({ label, description, required, checked } = onToggle);
  onToggle = onToggle.onToggle;
  const tmp = callback();
  let obj = checked(onToggle[3]);
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked });
  obj = { accessibilityRole: checkboxA11yNative.accessibilityRole, accessibilityLabel: null, accessibilityState: null, onPress: null, children: null };
  let str = "";
  let str2 = "";
  if (required) {
    const intl = tmp2(tmp3[4]).intl;
    const _HermesInternal = HermesInternal;
    str2 = " (" + intl.string(tmp2(tmp3[4]).t.EkokLy) + ")";
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
  const items = [closure_4(checked(onToggle[6]).FormCheckbox, { checked }), ];
  obj = { style: tmp.textContainer, children: null };
  const obj1 = { style: tmp.labelContainer, children: null };
  const items1 = [label, ];
  if (required) {
    const obj2 = { variant: "text-md/bold", color: "text-feedback-critical", "aria-label": null, children: null };
    const intl2 = tmp2(tmp3[4]).intl;
    obj2[2] = intl2.string(tmp2(tmp3[4]).t.EkokLy);
    obj2[3] = [" ", "*"];
    required = tmp10(tmp2(tmp3[7]).Text, obj2);
  }
  items1[1] = required;
  obj1[1] = closure_5(checked(onToggle[7]).Text, { variant: "text-md/medium", children: items1 });
  const items2 = [closure_4(closure_3, obj1), ];
  let tmp5Result = null != description;
  if (tmp5Result) {
    const obj3 = { variant: "text-sm/normal", color: "text-subtle", children: null };
    obj3[2] = description;
    tmp5Result = tmp5(tmp2(tmp3[7]).Text, obj3);
  }
  const obj4 = { direction: "horizontal", children: null };
  items2[1] = tmp5Result;
  obj[1] = items2;
  items[1] = closure_5(closure_3, obj);
  obj4[1] = items;
  obj[4] = closure_5(checked(onToggle[5]).Stack, obj4);
  return closure_4(closure_2, obj);
};
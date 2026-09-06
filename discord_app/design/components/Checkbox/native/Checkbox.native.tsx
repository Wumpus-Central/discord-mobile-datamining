// === Module 9429: Checkbox ===

// Module 9429 (Checkbox)
import useA11yRolesNative from "useA11yRolesNative" /* 4277 */;
import Text_Text from "Text/Text" /* 4556 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import FormCheckbox from "FormCheckbox" /* 5617 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

({ Pressable: c2, View: c3 } = get_ActivityIndicator);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = createStyles.createStyles({ textContainer: { flex: 1 }, labelContainer: { minHeight: 24, justifyContent: "center" } });
const result = size.fileFinishedImporting("design/components/Checkbox/native/Checkbox.native.tsx");

export const Checkbox = function Checkbox(onToggle) {
  ({ label, description, required, checked } = onToggle);
  onToggle = onToggle.onToggle;
  const tmp = closure_6();
  let obj = useA11yRolesNative;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked });
  obj = { accessibilityRole: checkboxA11yNative.accessibilityRole, accessibilityLabel: null, accessibilityState: null, onPress: null, children: null };
  let str = "";
  let str2 = "";
  if (required) {
    const intl = tmp2(1114).intl;
    const _HermesInternal = HermesInternal;
    str2 = " (" + intl.string(tmp2(1114).t.EkokLy) + ")";
  }
  const sum = label + str2;
  if (null != description) {
    const _HermesInternal2 = HermesInternal;
    str = ", " + description;
  }
  obj.accessibilityLabel = sum + str;
  obj.accessibilityState = checkboxA11yNative.accessibilityState;
  obj.onPress = function onPress() {
    return onToggle(!checked);
  };
  const items = [React4(FormCheckbox.FormCheckbox, { checked }), ];
  obj = { style: tmp.textContainer, children: null };
  const obj1 = { style: tmp.labelContainer, children: null };
  const items1 = [label, ];
  if (required) {
    const obj2 = { variant: "text-md/bold", color: "text-feedback-critical", "aria-label": null, children: null };
    const intl2 = tmp2(1114).intl;
    obj2["aria-label"] = intl2.string(tmp2(1114).t.EkokLy);
    obj2.children = [" ", "*"];
    required = tmp10(tmp2(4556).Text, obj2);
  }
  items1[1] = required;
  obj1.children = hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", children: items1 });
  const items2 = [React4(React3, obj1), ];
  let tmp5Result = null != description;
  if (tmp5Result) {
    const obj3 = { variant: "text-sm/normal", color: "text-subtle", children: description };
    tmp5Result = tmp5(tmp2(4556).Text, obj3);
  }
  const obj4 = { direction: "horizontal", children: null };
  items2[1] = tmp5Result;
  obj.children = items2;
  items[1] = hasOwnProperty(React3, obj);
  obj4.children = items;
  obj.children = hasOwnProperty(Stack_Stack.Stack, obj4);
  return React4(React2, obj);
};
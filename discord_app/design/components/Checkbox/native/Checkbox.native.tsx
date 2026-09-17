// === Module 9583: Checkbox ===

// Module 9583 (Checkbox)
import util from "util" /* 1115 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4358 */;
import Text_Text from "Text/Text" /* 4636 */;
import Stack_Stack from "Stack/Stack" /* 5060 */;
import FormCheckbox from "FormCheckbox" /* 5705 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4640 */;
import size from "module_2" /* 2 */;

({ Pressable: c2, View: c3 } = get_ActivityIndicator);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = createStyles.createStyles({ textContainer: { flex: 1 }, labelContainer: { minHeight: 24, justifyContent: "center" } });
const result = size.fileFinishedImporting("design/components/Checkbox/native/Checkbox.native.tsx");

export const Checkbox = function Checkbox(onToggle) {
  ({ label, description, required, checked } = onToggle);
  onToggle = onToggle.onToggle;
  const tmp = closure_6();
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative({ checked });
  const obj2 = { accessibilityRole: checkboxA11yNative.accessibilityRole, accessibilityLabel: null, accessibilityState: null, onPress: null, children: null };
  let str = "";
  let str2 = "";
  if (required) {
    const intl = util.intl;
    const _HermesInternal = HermesInternal;
    str2 = " (" + intl.string(util.t.EkokLy) + ")";
  }
  const sum = label + str2;
  if (null != description) {
    const _HermesInternal2 = HermesInternal;
    str = ", " + description;
  }
  obj2.accessibilityLabel = sum + str;
  obj2.accessibilityState = checkboxA11yNative.accessibilityState;
  obj2.onPress = function onPress() {
    return onToggle(!checked);
  };
  const items = [React4(FormCheckbox.FormCheckbox, { checked }), ];
  const obj3 = { style: tmp.textContainer, children: null };
  const obj4 = { style: tmp.labelContainer, children: null };
  const items1 = [label, ];
  if (required) {
    const obj5 = { variant: "text-md/bold", color: "text-feedback-critical", "aria-label": null, children: null };
    const intl2 = util.intl;
    obj5["aria-label"] = intl2.string(util.t.EkokLy);
    obj5.children = [" ", "*"];
    required = hasOwnProperty(Text_Text.Text, obj5);
  }
  items1[1] = required;
  obj4.children = hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", children: items1 });
  const items2 = [React4(React3, obj4), ];
  let tmp5Result = null != description;
  if (tmp5Result) {
    const obj6 = { variant: "text-sm/normal", color: "text-subtle", children: description };
    tmp5Result = React4(Text_Text.Text, obj6);
  }
  const obj7 = { direction: "horizontal", children: null };
  items2[1] = tmp5Result;
  obj3.children = items2;
  items[1] = hasOwnProperty(React3, obj3);
  obj7.children = items;
  obj2.children = hasOwnProperty(Stack_Stack.Stack, obj7);
  return React4(React2, obj2);
};
// === Module 15789: UserSettingsDesignSystemStack ===

// Module 15789 (UserSettingsDesignSystemStack)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import Card from "Card" /* 5607 */;
import noop from "module_19" /* 19 */;

require = fn;
function StackBlock() {
  return React4(React2, { style: closure_6().block });
}
get_ActivityIndicator = fn(17);
({ View: c2, ScrollView: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: { padding: 16, flex: 1, alignItems: "center" }, block: null };
createStyles = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, height: 80, flex: 1 };
createStyles.block = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemStack.tsx");

export default function UserSettingsDesignSystemStack() {
  let obj = { children: null };
  obj = { style: closure_6().container, children: null };
  obj = { spacing: 16, children: null };
  const obj1 = { children: null };
  const obj2 = { children: null };
  const items = [React4(Text_Text.Text, { variant: "text-lg/bold", children: "Basic Example" }), React4(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "By default, stacks are vertical and have a spacing of 8." }), ];
  const obj3 = { children: null };
  const items1 = [React4(StackBlock, {}), React4(StackBlock, {})];
  obj3.children = items1;
  items[2] = hasOwnProperty(Stack_Stack.Stack, obj3);
  obj2.children = items;
  obj1.children = hasOwnProperty(Stack_Stack.Stack, obj2);
  const items2 = [React4(Card.Card, obj1), , ];
  const obj4 = { children: null };
  const obj5 = { children: null };
  const items3 = [React4(Text_Text.Text, { variant: "text-lg/bold", children: "Spacing" }), React4(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "You can control the spacing with the spacing prop. The spacing prop uses our 4px-based spacing scale. By default, stacks are vertical and have a spacing of 8." }), ];
  const obj6 = { spacing: 24, children: null };
  const items4 = [React4(StackBlock, {}), React4(StackBlock, {})];
  obj6.children = items4;
  items3[2] = hasOwnProperty(Stack_Stack.Stack, obj6);
  obj5.children = items3;
  obj4.children = hasOwnProperty(Stack_Stack.Stack, obj5);
  items2[1] = React4(Card.Card, obj4);
  const obj7 = { children: null };
  const obj8 = { children: null };
  const items5 = [React4(Text_Text.Text, { variant: "text-lg/bold", children: "Horizontal" }), React4(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "You can control the direction with the direction prop. The direction prop can be either horizontal or vertical." }), ];
  const obj9 = { direction: "horizontal", children: null };
  const items6 = [React4(StackBlock, {}), React4(StackBlock, {})];
  obj9.children = items6;
  items5[2] = hasOwnProperty(Stack_Stack.Stack, obj9);
  obj8.children = items5;
  obj7.children = hasOwnProperty(Stack_Stack.Stack, obj8);
  items2[2] = React4(Card.Card, obj7);
  obj.children = items2;
  obj.children = hasOwnProperty(Stack_Stack.Stack, obj);
  obj.children = React4(React2, obj);
  return React4(React3, obj);
};
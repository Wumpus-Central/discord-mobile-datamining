// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemStack.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function StackBlock() {
  return React4(React2, { style: closure_6().block });
}
get_ActivityIndicator = fn(17);
({ View: c2, ScrollView: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4638);
let obj2 = {
  container: { padding: 16, flex: 1, alignItems: "center" },
  block: {
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    height: 80,
    flex: 1,
  },
};
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemStack.tsx",
);

export default function UserSettingsDesignSystemStack() {
  const obj = { children: null };
  const obj2 = { style: closure_6().container, children: null };
  const obj3 = { spacing: 16, children: null };
  const obj4 = { children: null };
  const obj5 = { children: null };
  const items = [
    React4(Text_Text.Text, { variant: "text-lg/bold", children: "Basic Example" }),
    React4(Text_Text.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      children: "By default, stacks are vertical and have a spacing of 8.",
    }),
  ];
  const obj6 = { children: null };
  const items1 = [React4(StackBlock, {}), React4(StackBlock, {})];
  obj6.children = items1;
  items[2] = hasOwnProperty(Stack_Stack.Stack, obj6);
  obj5.children = items;
  obj4.children = hasOwnProperty(Stack_Stack.Stack, obj5);
  const items2 = [React4(Card.Card, obj4), ,];
  const obj7 = { children: null };
  const obj8 = { children: null };
  const items3 = [
    React4(Text_Text.Text, { variant: "text-lg/bold", children: "Spacing" }),
    React4(Text_Text.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      children:
        "You can control the spacing with the spacing prop. The spacing prop uses our 4px-based spacing scale. By default, stacks are vertical and have a spacing of 8.",
    }),
  ];
  const obj9 = { spacing: 24, children: null };
  const items4 = [React4(StackBlock, {}), React4(StackBlock, {})];
  obj9.children = items4;
  items3[2] = hasOwnProperty(Stack_Stack.Stack, obj9);
  obj8.children = items3;
  obj7.children = hasOwnProperty(Stack_Stack.Stack, obj8);
  items2[1] = React4(Card.Card, obj7);
  const obj10 = { children: null };
  const obj11 = { children: null };
  const items5 = [
    React4(Text_Text.Text, { variant: "text-lg/bold", children: "Horizontal" }),
    React4(Text_Text.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      children:
        "You can control the direction with the direction prop. The direction prop can be either horizontal or vertical.",
    }),
  ];
  const obj12 = { direction: "horizontal", children: null };
  const items6 = [React4(StackBlock, {}), React4(StackBlock, {})];
  obj12.children = items6;
  items5[2] = hasOwnProperty(Stack_Stack.Stack, obj12);
  obj11.children = items5;
  obj10.children = hasOwnProperty(Stack_Stack.Stack, obj11);
  items2[2] = React4(Card.Card, obj10);
  obj3.children = items2;
  obj2.children = hasOwnProperty(Stack_Stack.Stack, obj3);
  obj.children = React4(React2, obj2);
  return React4(React3, obj);
}

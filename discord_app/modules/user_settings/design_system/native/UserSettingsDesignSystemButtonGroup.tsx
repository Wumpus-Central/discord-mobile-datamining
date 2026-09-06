// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemButtonGroup.tsx
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import ButtonGroup from "../../../../design/components/ButtonGroup/native/ButtonGroup.native.tsx";
import _modDef7381 from "../../../../../_runtime/metro/07381__.js";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ container: { padding: 16, paddingBottom: 64 } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemButtonGroup.tsx",
);

export default function UserSettingsDesignSystemButtonGroup() {
  let obj = { children: null };
  obj = { style: closure_7().container, children: null };
  obj = { spacing: 24, children: null };
  const obj1 = { children: null };
  const obj2 = { children: null };
  const items = [
    hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Text Button Example" }),
    hasOwnProperty(Text_Text.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      children: "By default, stacks buttons vertically. This is best for buttons with text.",
    }),
  ];
  const obj3 = { children: null };
  const items1 = [
    hasOwnProperty(components_Button_Button.Button, {
      text: "Agree",
      variant: "primary",
      onPress() {},
    }),
    hasOwnProperty(components_Button_Button.Button, {
      text: "Cancel",
      variant: "secondary",
      onPress() {},
    }),
  ];
  obj3.children = items1;
  items[2] = timestampProducer(ButtonGroup.ButtonGroup, obj3);
  obj2.children = items;
  obj1.children = timestampProducer(Stack_Stack.Stack, obj2);
  const items2 = [hasOwnProperty(React3, obj1), ,];
  const obj6 = { children: null };
  const obj7 = { children: null };
  const items3 = [
    hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "IconButton Example" }),
    hasOwnProperty(Text_Text.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      children: "For IconButtons, a horizontal layout is recommended",
    }),
  ];
  const obj8 = { direction: "horizontal", children: null };
  const items4 = [
    hasOwnProperty(IconButton.IconButton, {
      accessibilityLabel: "Settings",
      variant: "secondary",
      icon: _modDef7381,
      onPress() {},
    }),
  ];
  const obj4 = {
    text: "Agree",
    variant: "primary",
    onPress() {},
  };
  const obj5 = {
    text: "Cancel",
    variant: "secondary",
    onPress() {},
  };
  const obj9 = {
    accessibilityLabel: "Settings",
    variant: "secondary",
    icon: _modDef7381,
    onPress() {},
  };
  items4[1] = hasOwnProperty(IconButton.IconButton, {
    accessibilityLabel: "Settings",
    variant: "secondary",
    icon: _modDef7381,
    onPress() {},
  });
  obj8.children = items4;
  items3[2] = timestampProducer(ButtonGroup.ButtonGroup, obj8);
  obj7.children = items3;
  obj6.children = timestampProducer(Stack_Stack.Stack, obj7);
  items2[1] = hasOwnProperty(React3, obj6);
  const obj11 = { children: null };
  const obj12 = { children: null };
  const items5 = [
    hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Mixed Buttons Example" }),
    hasOwnProperty(Text_Text.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      children:
        "A single text button can be used in a ButtonGroup with smaller IconButtons, using the horizontal layout.",
    }),
    hasOwnProperty(Text_Text.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      children: "The Button with text must have the grow prop.",
    }),
    ,
    ,
  ];
  const obj13 = { direction: "horizontal", children: null };
  const items6 = [
    hasOwnProperty(components_Button_Button.Button, {
      text: "Search",
      variant: "secondary",
      grow: true,
      onPress() {},
    }),
  ];
  const obj10 = {
    accessibilityLabel: "Settings",
    variant: "secondary",
    icon: _modDef7381,
    onPress() {},
  };
  const obj14 = {
    text: "Search",
    variant: "secondary",
    grow: true,
    onPress() {},
  };
  items6[1] = hasOwnProperty(IconButton.IconButton, {
    accessibilityLabel: "Cancel",
    variant: "secondary",
    icon: _modDef7381,
    onPress() {},
  });
  obj13.children = items6;
  items5[3] = timestampProducer(ButtonGroup.ButtonGroup, obj13);
  items5[4] = hasOwnProperty(Text_Text.Text, {
    variant: "text-sm/medium",
    color: "text-feedback-critical",
    children: "More than one text button should not be put in a horizontal group.",
  });
  items5[5] = hasOwnProperty(Text_Text.Text, {
    variant: "text-sm/medium",
    color: "text-subtle",
    children:
      "This does not flex well with internationalization and enlarged font size settings. Use TwinButtons instead when there are specifically two text Buttons.",
  });
  obj12.children = items5;
  obj11.children = timestampProducer(Stack_Stack.Stack, obj12);
  items2[2] = hasOwnProperty(React3, obj11);
  obj.children = items2;
  obj.children = timestampProducer(Stack_Stack.Stack, obj);
  obj.children = hasOwnProperty(React3, obj);
  return hasOwnProperty(React4, obj);
}

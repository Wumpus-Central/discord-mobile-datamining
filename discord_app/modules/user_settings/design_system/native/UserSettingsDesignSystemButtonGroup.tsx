// === Module 15995: UserSettingsDesignSystemButtonGroup ===

// Module 15995 (UserSettingsDesignSystemButtonGroup)
import Text_Text from "Text/Text" /* 4718 */;
import Stack_Stack from "Stack/Stack" /* 5142 */;
import components_Button_Button from "components/Button/Button" /* 5144 */;
import ButtonGroup from "ButtonGroup" /* 5603 */;
import _modDef7577 from "module_7577" /* 7577 */;
import IconButton from "IconButton" /* 8140 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4722);
let closure_7 = createStyles.createStyles({ container: { padding: 16, paddingBottom: 64 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemButtonGroup.tsx");

export default function UserSettingsDesignSystemButtonGroup() {
  const obj = { children: null };
  const obj2 = { style: closure_7().container, children: null };
  const obj3 = { spacing: 24, children: null };
  const obj4 = { children: null };
  const obj5 = { children: null };
  const items = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Text Button Example" }), hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "By default, stacks buttons vertically. This is best for buttons with text." }), ];
  const obj6 = { children: null };
  const items1 = [
    hasOwnProperty(components_Button_Button.Button, {
      text: "Agree",
      variant: "primary",
      onPress() {

      }
    }),
    hasOwnProperty(components_Button_Button.Button, {
      text: "Cancel",
      variant: "secondary",
      onPress() {

      }
    })
  ];
  obj6.children = items1;
  items[2] = timestampProducer(ButtonGroup.ButtonGroup, obj6);
  obj5.children = items;
  obj4.children = timestampProducer(Stack_Stack.Stack, obj5);
  const items2 = [hasOwnProperty(React3, obj4), , ];
  const obj9 = { children: null };
  const obj10 = { children: null };
  const items3 = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "IconButton Example" }), hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "For IconButtons, a horizontal layout is recommended" }), ];
  const obj11 = { direction: "horizontal", children: null };
  const items4 = [
    hasOwnProperty(IconButton.IconButton, {
      accessibilityLabel: "Settings",
      variant: "secondary",
      icon: _modDef7577,
      onPress() {

      }
    }),

  ];
  const obj12 = {
    accessibilityLabel: "Settings",
    variant: "secondary",
    icon: _modDef7577,
    onPress() {

    }
  };
  const obj7 = {
    text: "Agree",
    variant: "primary",
    onPress() {

    }
  };
  const obj8 = {
    text: "Cancel",
    variant: "secondary",
    onPress() {

    }
  };
  items4[1] = hasOwnProperty(IconButton.IconButton, {
    accessibilityLabel: "Settings",
    variant: "secondary",
    icon: _modDef7577,
    onPress() {

    }
  });
  obj11.children = items4;
  items3[2] = timestampProducer(ButtonGroup.ButtonGroup, obj11);
  obj10.children = items3;
  obj9.children = timestampProducer(Stack_Stack.Stack, obj10);
  items2[1] = hasOwnProperty(React3, obj9);
  const obj14 = { children: null };
  const obj15 = { children: null };
  const items5 = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Mixed Buttons Example" }), hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "A single text button can be used in a ButtonGroup with smaller IconButtons, using the horizontal layout." }), hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "The Button with text must have the grow prop." }), , , ];
  const obj16 = { direction: "horizontal", children: null };
  const items6 = [
    hasOwnProperty(components_Button_Button.Button, {
      text: "Search",
      variant: "secondary",
      grow: true,
      onPress() {

      }
    }),

  ];
  const obj13 = {
    accessibilityLabel: "Settings",
    variant: "secondary",
    icon: _modDef7577,
    onPress() {

    }
  };
  const obj17 = {
    text: "Search",
    variant: "secondary",
    grow: true,
    onPress() {

    }
  };
  items6[1] = hasOwnProperty(IconButton.IconButton, {
    accessibilityLabel: "Cancel",
    variant: "secondary",
    icon: _modDef7577,
    onPress() {

    }
  });
  obj16.children = items6;
  items5[3] = timestampProducer(ButtonGroup.ButtonGroup, obj16);
  items5[4] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-feedback-critical", children: "More than one text button should not be put in a horizontal group." });
  items5[5] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", children: "This does not flex well with internationalization and enlarged font size settings. Use TwinButtons instead when there are specifically two text Buttons." });
  obj15.children = items5;
  obj14.children = timestampProducer(Stack_Stack.Stack, obj15);
  items2[2] = hasOwnProperty(React3, obj14);
  obj3.children = items2;
  obj2.children = timestampProducer(Stack_Stack.Stack, obj3);
  obj.children = hasOwnProperty(React3, obj2);
  return hasOwnProperty(React4, obj);
};
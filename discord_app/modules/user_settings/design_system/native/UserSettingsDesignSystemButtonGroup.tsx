// === Module 15659: UserSettingsDesignSystemButtonGroup ===

// Module 15659 (UserSettingsDesignSystemButtonGroup)
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4892 */;
import ButtonGroup4 from "ButtonGroup" /* 5599 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import AssetRegistryDefault from "AssetRegistry" /* 6894 */;
import IconButton4 from "IconButton" /* 7586 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ View: c3, ScrollView: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { padding: 16, paddingBottom: 64 } });
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let Stack;
  let Stack2;
  let Stack4;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj15;
  let obj19;
  let obj4;
  let obj9;
  let tmp10;
  let tmp13;
  let tmp18;
  let tmp19;
  let tmp23;
  let tmp27;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp40;
  let tmp43;
  let tmp49;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(15);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Text Button Example" });
    const tmp9 = hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "By default, stacks buttons vertically. This is best for buttons with text." });
    cResult[0] = tmp8;
    cResult[1] = tmp9;
    tmp5 = tmp8;
    tmp6 = tmp9;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {
      text: "Agree",
      variant: "primary",
      onPress() {

        }
    };
    const tmp12 = hasOwnProperty(components_Button_Button.Button, obj2);
    cResult[2] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { children: metroRequire(Stack, obj4) };
    obj4 = { children: items };
    items = [tmp5, tmp6, ];
    Stack = Stack_Stack.Stack;
    const obj5 = { children: items1 };
    items1 = [tmp10, ];
    const ButtonGroup = ButtonGroup4.ButtonGroup;
    const obj6 = {
      text: "Cancel",
      variant: "secondary",
      onPress() {

        }
    };
    items1[1] = hasOwnProperty(components_Button_Button.Button, obj6);
    items[2] = metroRequire(ButtonGroup, obj5);
    const tmp17 = hasOwnProperty(_false, obj3);
    cResult[3] = tmp17;
    tmp13 = tmp17;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp21 = hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "IconButton Example" });
    const tmp22 = hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "For IconButtons, a horizontal layout is recommended" });
    cResult[4] = tmp21;
    cResult[5] = tmp22;
    tmp19 = tmp22;
    tmp18 = tmp21;
  } else {
    tmp18 = cResult[4];
    tmp19 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = {
      accessibilityLabel: "Settings",
      variant: "secondary",
      icon: AssetRegistryDefault,
      onPress() {

        }
    };
    const IconButton = IconButton4.IconButton;
    const tmp26 = hasOwnProperty(IconButton, obj7);
    cResult[6] = tmp26;
    tmp23 = tmp26;
  } else {
    tmp23 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { children: metroRequire(Stack2, obj9) };
    obj9 = { children: items2 };
    items2 = [tmp18, tmp19, ];
    Stack2 = Stack_Stack.Stack;
    const obj10 = { direction: "horizontal", children: items3 };
    items3 = [tmp23, ];
    const ButtonGroup2 = ButtonGroup4.ButtonGroup;
    const obj11 = {
      accessibilityLabel: "Settings",
      variant: "secondary",
      icon: AssetRegistryDefault,
      onPress() {

        }
    };
    const IconButton2 = IconButton4.IconButton;
    items3[1] = hasOwnProperty(IconButton2, obj11);
    items2[2] = metroRequire(ButtonGroup2, obj10);
    const tmp32 = hasOwnProperty(_false, obj8);
    cResult[7] = tmp32;
    tmp27 = tmp32;
  } else {
    tmp27 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp37 = hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Mixed Buttons Example" });
    const tmp38 = hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "A single text button can be used in a ButtonGroup with smaller IconButtons, using the horizontal layout." });
    const tmp39 = hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "The Button with text must have the grow prop." });
    cResult[8] = tmp39;
    cResult[9] = tmp37;
    cResult[10] = tmp38;
    tmp35 = tmp38;
    tmp34 = tmp37;
    tmp33 = tmp39;
  } else {
    tmp33 = cResult[8];
    tmp34 = cResult[9];
    tmp35 = cResult[10];
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    const obj12 = {
      text: "Search",
      variant: "secondary",
      grow: true,
      onPress() {

        }
    };
    const tmp42 = hasOwnProperty(components_Button_Button.Button, obj12);
    cResult[11] = tmp42;
    tmp40 = tmp42;
  } else {
    tmp40 = cResult[11];
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const obj13 = { spacing: 24, children: items4 };
    items4 = [tmp13, tmp27, ];
    const obj14 = { children: metroRequire(Stack4, obj15) };
    const Stack3 = Stack_Stack.Stack;
    obj15 = { children: items5 };
    items5 = [tmp34, tmp35, tmp33, , , ];
    Stack4 = Stack_Stack.Stack;
    const obj16 = { direction: "horizontal", children: items6 };
    items6 = [tmp40, ];
    const ButtonGroup3 = ButtonGroup4.ButtonGroup;
    const obj17 = {
      accessibilityLabel: "Cancel",
      variant: "secondary",
      icon: AssetRegistryDefault,
      onPress() {

        }
    };
    const IconButton3 = IconButton4.IconButton;
    items6[1] = hasOwnProperty(IconButton3, obj17);
    items5[3] = metroRequire(ButtonGroup3, obj16);
    items5[4] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-feedback-critical", children: "More than one text button should not be put in a horizontal group." });
    items5[5] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", children: "This does not flex well with internationalization and enlarged font size settings. Use TwinButtons instead when there are specifically two text Buttons." });
    items4[2] = hasOwnProperty(_false, obj14);
    const tmp48 = metroRequire(Stack3, obj13);
    cResult[12] = tmp48;
    tmp43 = tmp48;
  } else {
    tmp43 = cResult[12];
  }
  if (cResult[13] !== tmp4.container) {
    const obj18 = { children: hasOwnProperty(_false, obj19) };
    obj19 = { style: tmp4.container, children: tmp43 };
    const tmp53 = hasOwnProperty(React3, obj18);
    cResult[13] = tmp4.container;
    cResult[14] = tmp53;
    tmp49 = tmp53;
  } else {
    tmp49 = cResult[14];
  }
  return tmp49;
}) : (() => {
  let Stack;
  let Stack2;
  let Stack3;
  let Stack4;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj10;
  let obj15;
  let obj2;
  let obj3;
  let obj5;
  const obj = { children: hasOwnProperty(_false, obj2) };
  obj2 = { style: closure_7().container, children: metroRequire(Stack, obj3) };
  obj3 = { spacing: 24, children: items2 };
  const obj4 = { children: metroRequire(Stack2, obj5) };
  Stack = Stack_Stack.Stack;
  obj5 = { children: items };
  Stack2 = Stack_Stack.Stack;
  items = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Text Button Example" }), hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "By default, stacks buttons vertically. This is best for buttons with text." }), ];
  const obj6 = { children: items1 };
  const ButtonGroup = ButtonGroup4.ButtonGroup;
  items1 = [, ];
  const obj7 = {
    text: "Agree",
    variant: "primary",
    onPress() {

    }
  };
  items1[0] = hasOwnProperty(components_Button_Button.Button, obj7);
  const obj8 = {
    text: "Cancel",
    variant: "secondary",
    onPress() {

    }
  };
  items1[1] = hasOwnProperty(components_Button_Button.Button, obj8);
  items[2] = metroRequire(ButtonGroup, obj6);
  items2 = [hasOwnProperty(_false, obj4), , ];
  const obj9 = { children: metroRequire(Stack3, obj10) };
  obj10 = { children: items3 };
  Stack3 = Stack_Stack.Stack;
  items3 = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "IconButton Example" }), hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "For IconButtons, a horizontal layout is recommended" }), ];
  const obj11 = { direction: "horizontal", children: items4 };
  const ButtonGroup2 = ButtonGroup4.ButtonGroup;
  const obj12 = {
    accessibilityLabel: "Settings",
    variant: "secondary",
    icon: AssetRegistryDefault,
    onPress() {

    }
  };
  const IconButton = IconButton4.IconButton;
  items4 = [hasOwnProperty(IconButton, obj12), ];
  const obj13 = {
    accessibilityLabel: "Settings",
    variant: "secondary",
    icon: AssetRegistryDefault,
    onPress() {

    }
  };
  const IconButton2 = IconButton4.IconButton;
  items4[1] = hasOwnProperty(IconButton2, obj13);
  items3[2] = metroRequire(ButtonGroup2, obj11);
  items2[1] = hasOwnProperty(_false, obj9);
  const obj14 = { children: metroRequire(Stack4, obj15) };
  obj15 = { children: items5 };
  Stack4 = Stack_Stack.Stack;
  items5 = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Mixed Buttons Example" }), hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "A single text button can be used in a ButtonGroup with smaller IconButtons, using the horizontal layout." }), hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "The Button with text must have the grow prop." }), , , ];
  const obj16 = { direction: "horizontal", children: items6 };
  const ButtonGroup3 = ButtonGroup4.ButtonGroup;
  items6 = [, ];
  const obj17 = {
    text: "Search",
    variant: "secondary",
    grow: true,
    onPress() {

    }
  };
  items6[0] = hasOwnProperty(components_Button_Button.Button, obj17);
  const obj18 = {
    accessibilityLabel: "Cancel",
    variant: "secondary",
    icon: AssetRegistryDefault,
    onPress() {

    }
  };
  const IconButton3 = IconButton4.IconButton;
  items6[1] = hasOwnProperty(IconButton3, obj18);
  items5[3] = metroRequire(ButtonGroup3, obj16);
  items5[4] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-feedback-critical", children: "More than one text button should not be put in a horizontal group." });
  items5[5] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", children: "This does not flex well with internationalization and enlarged font size settings. Use TwinButtons instead when there are specifically two text Buttons." });
  items2[2] = hasOwnProperty(_false, obj14);
  return hasOwnProperty(React3, obj);
});
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemButtonGroup.tsx");

export default tmp5;
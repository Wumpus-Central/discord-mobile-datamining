// === Module 15661: UserSettingsDesignSystemRowButton ===

// Module 15661 (UserSettingsDesignSystemRowButton)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4892 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import AssetRegistryDefault from "AssetRegistry" /* 6894 */;
import Form from "Form" /* 8924 */;
import RowButton8 from "RowButton" /* 8926 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ View: c3, ScrollView: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let Stack;
  let Stack2;
  let first;
  let items;
  let items1;
  let items2;
  let obj15;
  let obj3;
  let obj4;
  let tmp10;
  let tmp11;
  let tmp15;
  let tmp19;
  let tmp23;
  let tmp27;
  let tmp31;
  let tmp35;
  let tmp38;
  const obj = react2;
  const cResult = obj.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: "Row Buttons", description: metroRequire(Stack, obj3), children: hasOwnProperty(_false, {}) };
    const FormSection = Form.FormSection;
    obj3 = { style: obj4, children: items };
    obj4 = { padding: nativeDefault.space.PX_16 };
    Stack = Stack_Stack.Stack;
    items = [hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", children: "Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page." }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", children: "Only stack up to 2 Row Buttons in a row to to prevent decision fatigue." })];
    const tmp9 = hasOwnProperty(FormSection, obj2);
    cResult[0] = tmp9;
    first = tmp9;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { padding: 16 };
    cResult[1] = obj5;
    tmp10 = obj5;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = {
      variant: "primary",
      icon: AssetRegistryDefault,
      label: "Primary Row Button",
      onPress() {

        }
    };
    const RowButton = RowButton8.RowButton;
    const tmp14 = hasOwnProperty(RowButton, obj6);
    cResult[2] = tmp14;
    tmp11 = tmp14;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = {
      variant: "primary",
      icon: AssetRegistryDefault,
      label: "Primary Row Button",
      subLabel: "I am a high emphasis button with a subLabel",
      onPress() {

        }
    };
    const RowButton2 = RowButton8.RowButton;
    const tmp18 = hasOwnProperty(RowButton2, obj7);
    cResult[3] = tmp18;
    tmp15 = tmp18;
  } else {
    tmp15 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = {
      variant: "secondary",
      icon: AssetRegistryDefault,
      label: "Secondary Row Button",
      onPress() {

        }
    };
    const RowButton3 = RowButton8.RowButton;
    const tmp22 = hasOwnProperty(RowButton3, obj8);
    cResult[4] = tmp22;
    tmp19 = tmp22;
  } else {
    tmp19 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj9 = {
      icon: AssetRegistryDefault,
      label: "Secondary Row Button",
      subLabel: "I am a high emphasis button with a subLabel",
      onPress() {

        }
    };
    const RowButton4 = RowButton8.RowButton;
    const tmp26 = hasOwnProperty(RowButton4, obj9);
    cResult[5] = tmp26;
    tmp23 = tmp26;
  } else {
    tmp23 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj10 = {
      icon: AssetRegistryDefault,
      label: "Secondary Row Button",
      subLabel: "I am a high-emphasis button with more text. You can fit quite a lot of text in a row button. The text will continue to wrap",
      onPress() {

        }
    };
    const RowButton5 = RowButton8.RowButton;
    const tmp30 = hasOwnProperty(RowButton5, obj10);
    cResult[6] = tmp30;
    tmp27 = tmp30;
  } else {
    tmp27 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj11 = { source: AssetRegistryDefault };
    const Icon = RowButton8.RowButton.Icon;
    const tmp34 = hasOwnProperty(Icon, obj11);
    cResult[7] = tmp34;
    tmp31 = tmp34;
  } else {
    tmp31 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const obj12 = {
      icon: tmp31,
      label: "Row Button",
      subLabel: "With a custom RowButton.Icon",
      onPress() {

        }
    };
    const tmp37 = hasOwnProperty(RowButton8.RowButton, obj12);
    cResult[8] = tmp37;
    tmp35 = tmp37;
  } else {
    tmp35 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const obj13 = { children: items1 };
    items1 = [first, ];
    const obj14 = { style: tmp10, children: metroRequire(Stack2, obj15) };
    obj15 = { children: items2 };
    items2 = [tmp11, tmp15, tmp19, tmp23, tmp27, tmp35, ];
    Stack2 = Stack_Stack.Stack;
    const obj16 = {
      icon: AssetRegistryDefault,
      label: "Row Button",
      subLabel: "I am disabled",
      onPress() {

        },
      disabled: true
    };
    const RowButton6 = RowButton8.RowButton;
    items2[6] = hasOwnProperty(RowButton6, obj16);
    items1[1] = hasOwnProperty(_false, obj14);
    const tmp44 = metroRequire(React3, obj13);
    cResult[9] = tmp44;
    tmp38 = tmp44;
  } else {
    tmp38 = cResult[9];
  }
  return tmp38;
}) : (() => {
  let Icon;
  let Stack;
  let Stack2;
  let items;
  let items1;
  let items2;
  let obj13;
  let obj3;
  let obj4;
  let obj6;
  const obj = { children: items1 };
  const obj2 = { title: "Row Buttons", description: metroRequire(Stack, obj3), children: hasOwnProperty(_false, {}) };
  const FormSection = Form.FormSection;
  obj3 = { style: obj4, children: items };
  obj4 = { padding: nativeDefault.space.PX_16 };
  Stack = Stack_Stack.Stack;
  items = [hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", children: "Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page." }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", children: "Only stack up to 2 Row Buttons in a row to to prevent decision fatigue." })];
  items1 = [hasOwnProperty(FormSection, obj2), ];
  const obj5 = { style: { padding: 16 }, children: metroRequire(Stack2, obj6) };
  obj6 = { children: items2 };
  Stack2 = Stack_Stack.Stack;
  const obj7 = {
    variant: "primary",
    icon: AssetRegistryDefault,
    label: "Primary Row Button",
    onPress() {

    }
  };
  const RowButton = RowButton8.RowButton;
  items2 = [hasOwnProperty(RowButton, obj7), , , , , , ];
  const obj8 = {
    variant: "primary",
    icon: AssetRegistryDefault,
    label: "Primary Row Button",
    subLabel: "I am a high emphasis button with a subLabel",
    onPress() {

    }
  };
  const RowButton2 = RowButton8.RowButton;
  items2[1] = hasOwnProperty(RowButton2, obj8);
  const obj9 = {
    variant: "secondary",
    icon: AssetRegistryDefault,
    label: "Secondary Row Button",
    onPress() {

    }
  };
  const RowButton3 = RowButton8.RowButton;
  items2[2] = hasOwnProperty(RowButton3, obj9);
  const obj10 = {
    icon: AssetRegistryDefault,
    label: "Secondary Row Button",
    subLabel: "I am a high emphasis button with a subLabel",
    onPress() {

    }
  };
  const RowButton4 = RowButton8.RowButton;
  items2[3] = hasOwnProperty(RowButton4, obj10);
  const obj11 = {
    icon: AssetRegistryDefault,
    label: "Secondary Row Button",
    subLabel: "I am a high-emphasis button with more text. You can fit quite a lot of text in a row button. The text will continue to wrap",
    onPress() {

    }
  };
  const RowButton5 = RowButton8.RowButton;
  items2[4] = hasOwnProperty(RowButton5, obj11);
  const obj12 = {
    icon: hasOwnProperty(Icon, obj13),
    label: "Row Button",
    subLabel: "With a custom RowButton.Icon",
    onPress() {

    }
  };
  const RowButton6 = RowButton8.RowButton;
  obj13 = { source: AssetRegistryDefault };
  Icon = RowButton8.RowButton.Icon;
  items2[5] = hasOwnProperty(RowButton6, obj12);
  const obj14 = {
    icon: AssetRegistryDefault,
    label: "Row Button",
    subLabel: "I am disabled",
    onPress() {

    },
    disabled: true
  };
  const RowButton7 = RowButton8.RowButton;
  items2[6] = hasOwnProperty(RowButton7, obj14);
  items1[1] = hasOwnProperty(_false, obj5);
  return metroRequire(React3, obj);
});
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemRowButton.tsx");

export default tmp5;
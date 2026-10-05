// === Module 15647: UserSettingsDesignSystemRowButton ===

// Module 15647 (UserSettingsDesignSystemRowButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import _modDef6884 from "module_6884" /* 6884 */;
import Form from "Form" /* 8895 */;
import RowButton from "RowButton" /* 8897 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemRowButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: "Row Buttons", description: null, children: null };
    const obj3 = { style: null, children: null };
    const obj4 = { padding: nativeDefault.space.PX_16 };
    obj3.style = obj4;
    const items = [hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", children: "Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page." }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", children: "Only stack up to 2 Row Buttons in a row to to prevent decision fatigue." })];
    obj3.children = items;
    obj2.description = timestampProducer(Stack_Stack.Stack, obj3);
    obj2.children = hasOwnProperty(React3, {});
    const tmp9 = hasOwnProperty(Form.FormSection, obj2);
    cResult[0] = tmp9;
    let first = tmp9;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { padding: 16 };
    cResult[1] = obj5;
    let tmp10 = obj5;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = {
      variant: "primary",
      icon: _modDef6884,
      label: "Primary Row Button",
      onPress() {

        }
    };
    const tmp14 = hasOwnProperty(RowButton.RowButton, obj6);
    cResult[2] = tmp14;
    let tmp11 = tmp14;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = {
      variant: "primary",
      icon: _modDef6884,
      label: "Primary Row Button",
      subLabel: "I am a high emphasis button with a subLabel",
      onPress() {

        }
    };
    const tmp18 = hasOwnProperty(RowButton.RowButton, obj7);
    cResult[3] = tmp18;
    let tmp15 = tmp18;
  } else {
    tmp15 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = {
      variant: "secondary",
      icon: _modDef6884,
      label: "Secondary Row Button",
      onPress() {

        }
    };
    const tmp22 = hasOwnProperty(RowButton.RowButton, obj8);
    cResult[4] = tmp22;
    let tmp19 = tmp22;
  } else {
    tmp19 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj9 = {
      icon: _modDef6884,
      label: "Secondary Row Button",
      subLabel: "I am a high emphasis button with a subLabel",
      onPress() {

        }
    };
    const tmp26 = hasOwnProperty(RowButton.RowButton, obj9);
    cResult[5] = tmp26;
    let tmp23 = tmp26;
  } else {
    tmp23 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj10 = {
      icon: _modDef6884,
      label: "Secondary Row Button",
      subLabel: "I am a high-emphasis button with more text. You can fit quite a lot of text in a row button. The text will continue to wrap",
      onPress() {

        }
    };
    const tmp30 = hasOwnProperty(RowButton.RowButton, obj10);
    cResult[6] = tmp30;
    let tmp27 = tmp30;
  } else {
    tmp27 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj11 = { source: _modDef6884 };
    const tmp34 = hasOwnProperty(RowButton.RowButton.Icon, obj11);
    cResult[7] = tmp34;
    let tmp31 = tmp34;
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
    const tmp37 = hasOwnProperty(RowButton.RowButton, obj12);
    cResult[8] = tmp37;
    let tmp35 = tmp37;
  } else {
    tmp35 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const obj13 = { children: null };
    const items1 = [first, ];
    const obj14 = { style: tmp10, children: null };
    const obj15 = { children: null };
    const items2 = [tmp11, tmp15, tmp19, tmp23, tmp27, tmp35, ];
    const obj16 = {
      icon: _modDef6884,
      label: "Row Button",
      subLabel: "I am disabled",
      onPress() {

        },
      disabled: true
    };
    items2[6] = hasOwnProperty(RowButton.RowButton, obj16);
    obj15.children = items2;
    obj14.children = timestampProducer(Stack_Stack.Stack, obj15);
    items1[1] = hasOwnProperty(React3, obj14);
    obj13.children = items1;
    const tmp44 = timestampProducer(React4, obj13);
    cResult[9] = tmp44;
    let tmp38 = tmp44;
  } else {
    tmp38 = cResult[9];
  }
  return tmp38;
}) : (() => {
  const obj = { children: null };
  const obj2 = { title: "Row Buttons", description: null, children: null };
  const obj3 = { style: { padding: nativeDefault.space.PX_16 }, children: null };
  const items = [hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", children: "Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page." }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", children: "Only stack up to 2 Row Buttons in a row to to prevent decision fatigue." })];
  obj3.children = items;
  obj2.description = timestampProducer(Stack_Stack.Stack, obj3);
  obj2.children = hasOwnProperty(React3, {});
  const items1 = [hasOwnProperty(Form.FormSection, obj2), ];
  const obj5 = { style: { padding: 16 }, children: null };
  const obj6 = { children: null };
  const obj4 = { padding: nativeDefault.space.PX_16 };
  const items2 = [
    hasOwnProperty(RowButton.RowButton, {
      variant: "primary",
      icon: _modDef6884,
      label: "Primary Row Button",
      onPress() {

      }
    }),
  ,
  ,
  ,
  ,
  ,

  ];
  const obj7 = {
    variant: "primary",
    icon: _modDef6884,
    label: "Primary Row Button",
    onPress() {

    }
  };
  items2[1] = hasOwnProperty(RowButton.RowButton, {
    variant: "primary",
    icon: _modDef6884,
    label: "Primary Row Button",
    subLabel: "I am a high emphasis button with a subLabel",
    onPress() {

    }
  });
  const obj8 = {
    variant: "primary",
    icon: _modDef6884,
    label: "Primary Row Button",
    subLabel: "I am a high emphasis button with a subLabel",
    onPress() {

    }
  };
  items2[2] = hasOwnProperty(RowButton.RowButton, {
    variant: "secondary",
    icon: _modDef6884,
    label: "Secondary Row Button",
    onPress() {

    }
  });
  const obj9 = {
    variant: "secondary",
    icon: _modDef6884,
    label: "Secondary Row Button",
    onPress() {

    }
  };
  items2[3] = hasOwnProperty(RowButton.RowButton, {
    icon: _modDef6884,
    label: "Secondary Row Button",
    subLabel: "I am a high emphasis button with a subLabel",
    onPress() {

    }
  });
  const obj10 = {
    icon: _modDef6884,
    label: "Secondary Row Button",
    subLabel: "I am a high emphasis button with a subLabel",
    onPress() {

    }
  };
  items2[4] = hasOwnProperty(RowButton.RowButton, {
    icon: _modDef6884,
    label: "Secondary Row Button",
    subLabel: "I am a high-emphasis button with more text. You can fit quite a lot of text in a row button. The text will continue to wrap",
    onPress() {

    }
  });
  const obj12 = { icon: null, label: "Row Button", subLabel: "With a custom RowButton.Icon", onPress: null };
  const obj11 = {
    icon: _modDef6884,
    label: "Secondary Row Button",
    subLabel: "I am a high-emphasis button with more text. You can fit quite a lot of text in a row button. The text will continue to wrap",
    onPress() {

    }
  };
  obj12.icon = hasOwnProperty(RowButton.RowButton.Icon, { source: _modDef6884 });
  obj12.onPress = function onPress() {

  };
  items2[5] = hasOwnProperty(RowButton.RowButton, obj12);
  const obj13 = { source: _modDef6884 };
  items2[6] = hasOwnProperty(RowButton.RowButton, {
    icon: _modDef6884,
    label: "Row Button",
    subLabel: "I am disabled",
    onPress() {

    },
    disabled: true
  });
  obj6.children = items2;
  obj5.children = timestampProducer(Stack_Stack.Stack, obj6);
  items1[1] = hasOwnProperty(React3, obj5);
  obj.children = items1;
  return timestampProducer(React4, obj);
});
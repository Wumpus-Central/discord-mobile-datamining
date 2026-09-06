// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemRowButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import _modDef7381 from "../../../../../_runtime/metro/07381__.js";
import Form from "../../../../design/void/Form/native/index.tsx";
import RowButton from "../../../../design/components/TableRow/native/RowButton.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemRowButton.tsx",
);

export default function UserSettingsDesignSystemRowButton() {
  let obj = { children: null };
  obj = { title: "Row Buttons", description: null, children: null };
  obj = { style: { padding: nativeDefault.space.PX_16 }, children: null };
  const items = [
    hasOwnProperty(Text_Text.Text, {
      variant: "text-sm/normal",
      children: "Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page.",
    }),
    hasOwnProperty(Text_Text.Text, {
      variant: "text-sm/normal",
      children: "Only stack up to 2 Row Buttons in a row to to prevent decision fatigue.",
    }),
  ];
  obj.children = items;
  obj.description = timestampProducer(Stack_Stack.Stack, obj);
  obj.children = hasOwnProperty(React3, {});
  const items1 = [hasOwnProperty(Form.FormSection, obj)];
  const obj2 = { style: { padding: 16 }, children: null };
  const obj3 = { children: null };
  const obj1 = { padding: nativeDefault.space.PX_16 };
  const items2 = [
    hasOwnProperty(RowButton.RowButton, {
      variant: "primary",
      icon: _modDef7381,
      label: "Primary Row Button",
      onPress() {},
    }),
    ,
    ,
    ,
    ,
    ,
  ];
  const obj4 = {
    variant: "primary",
    icon: _modDef7381,
    label: "Primary Row Button",
    onPress() {},
  };
  items2[1] = hasOwnProperty(RowButton.RowButton, {
    variant: "primary",
    icon: _modDef7381,
    label: "Primary Row Button",
    subLabel: "I am a high emphasis button with a subLabel",
    onPress() {},
  });
  const obj5 = {
    variant: "primary",
    icon: _modDef7381,
    label: "Primary Row Button",
    subLabel: "I am a high emphasis button with a subLabel",
    onPress() {},
  };
  items2[2] = hasOwnProperty(RowButton.RowButton, {
    variant: "secondary",
    icon: _modDef7381,
    label: "Secondary Row Button",
    onPress() {},
  });
  const obj6 = {
    variant: "secondary",
    icon: _modDef7381,
    label: "Secondary Row Button",
    onPress() {},
  };
  items2[3] = hasOwnProperty(RowButton.RowButton, {
    icon: _modDef7381,
    label: "Secondary Row Button",
    subLabel: "I am a high emphasis button with a subLabel",
    onPress() {},
  });
  const obj7 = {
    icon: _modDef7381,
    label: "Secondary Row Button",
    subLabel: "I am a high emphasis button with a subLabel",
    onPress() {},
  };
  items2[4] = hasOwnProperty(RowButton.RowButton, {
    icon: _modDef7381,
    label: "Secondary Row Button",
    subLabel:
      "I am a high-emphasis button with more text. You can fit quite a lot of text in a row button. The text will continue to wrap",
    onPress() {},
  });
  const obj9 = { icon: null, label: "Row Button", subLabel: "With a custom RowButton.Icon", onPress: null };
  const obj8 = {
    icon: _modDef7381,
    label: "Secondary Row Button",
    subLabel:
      "I am a high-emphasis button with more text. You can fit quite a lot of text in a row button. The text will continue to wrap",
    onPress() {},
  };
  obj9.icon = hasOwnProperty(RowButton.RowButton.Icon, { source: _modDef7381 });
  obj9.onPress = function onPress() {};
  items2[5] = hasOwnProperty(RowButton.RowButton, obj9);
  const obj10 = { source: _modDef7381 };
  items2[6] = hasOwnProperty(RowButton.RowButton, {
    icon: _modDef7381,
    label: "Row Button",
    subLabel: "I am disabled",
    onPress() {},
    disabled: true,
  });
  obj3.children = items2;
  obj2.children = timestampProducer(Stack_Stack.Stack, obj3);
  items1[1] = hasOwnProperty(React3, obj2);
  obj.children = items1;
  return timestampProducer(React4, obj);
}

// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemRowButton.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import { registerAsset } from "../../../../../_runtime/05933_registerAsset.js";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { Stack } from "../../../../design/components/Stack/native/Stack.native.tsx";
import { RowButtonWrapper } from "../../../../design/components/TableRow/native/RowButton.native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { Form } from "../../../../design/void/Form/native/index.tsx";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemRowButton.tsx");

export default function UserSettingsDesignSystemRowButton() {
  let obj = { children: null };
  obj = { title: "Row Buttons", description: null, children: null };
  obj = { style: null, children: null };
  const obj1 = { padding: null };
  obj1[0] = Themes.space.PX_16;
  obj[0] = obj1;
  const items = [callback(Text.Text, { variant: "text-sm/normal", children: "Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page." }), callback(Text.Text, { variant: "text-sm/normal", children: "Only stack up to 2 Row Buttons in a row to to prevent decision fatigue." })];
  obj[1] = items;
  obj[1] = callback2(Stack.Stack, obj);
  obj[2] = callback(closure_3, {});
  const items1 = [callback(Form.FormSection, obj), ];
  const obj2 = { style: { padding: 16 }, children: null };
  const obj3 = { children: null };
  const obj4 = { variant: "primary", icon: null, label: "Primary Row Button", onPress: null };
  obj4[1] = registerAsset;
  obj4[3] = function onPress() {

  };
  const items2 = [callback(RowButtonWrapper.RowButton, obj4), , , , , , ];
  const obj5 = { variant: "primary", icon: null, label: "Primary Row Button", subLabel: "I am a high emphasis button with a subLabel", onPress: null };
  obj5[1] = registerAsset;
  obj5[4] = function onPress() {

  };
  items2[1] = callback(RowButtonWrapper.RowButton, obj5);
  const obj6 = { variant: "secondary", icon: null, label: "Secondary Row Button", onPress: null };
  obj6[1] = registerAsset;
  obj6[3] = function onPress() {

  };
  items2[2] = callback(RowButtonWrapper.RowButton, obj6);
  const obj7 = { icon: null, label: "Secondary Row Button", subLabel: "I am a high emphasis button with a subLabel", onPress: null };
  obj7[0] = registerAsset;
  obj7[3] = function onPress() {

  };
  items2[3] = callback(RowButtonWrapper.RowButton, obj7);
  const obj8 = { icon: null, label: "Secondary Row Button", subLabel: "I am a high-emphasis button with more text. You can fit quite a lot of text in a row button. The text will continue to wrap", onPress: null };
  obj8[0] = registerAsset;
  obj8[3] = function onPress() {

  };
  items2[4] = callback(RowButtonWrapper.RowButton, obj8);
  const obj9 = { icon: null, label: "Row Button", subLabel: "With a custom RowButton.Icon", onPress: null };
  const obj10 = { source: null };
  obj10[0] = registerAsset;
  obj9[0] = callback(RowButtonWrapper.RowButton.Icon, obj10);
  obj9[3] = function onPress() {

  };
  items2[5] = callback(RowButtonWrapper.RowButton, obj9);
  const obj11 = { icon: null, label: "Row Button", subLabel: "I am disabled", onPress: null, disabled: true };
  obj11[0] = registerAsset;
  obj11[3] = function onPress() {

  };
  items2[6] = callback(RowButtonWrapper.RowButton, obj11);
  obj3[0] = items2;
  obj2[1] = callback2(Stack.Stack, obj3);
  items1[1] = callback(closure_3, obj2);
  obj[0] = items1;
  return callback2(closure_4, obj);
};
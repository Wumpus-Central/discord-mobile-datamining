// === Module 14579: UserSettingsDesignSystemRowButton ===

// Module 14579 (UserSettingsDesignSystemRowButton)
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

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
  obj1[0] = importDefault(712).space.PX_16;
  obj[0] = obj1;
  const items = [callback(require(4189) /* Text */.Text, { variant: "text-sm/normal", children: "Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page." }), callback(require(4189) /* Text */.Text, { variant: "text-sm/normal", children: "Only stack up to 2 Row Buttons in a row to to prevent decision fatigue." })];
  obj[1] = items;
  obj[1] = callback2(require(4602) /* Stack */.Stack, obj);
  obj[2] = callback(closure_3, {});
  const items1 = [callback(require(7639) /* Form */.FormSection, obj), ];
  const obj2 = { style: { padding: 16 }, children: null };
  const obj3 = { children: null };
  const obj4 = { variant: "primary", icon: null, label: "Primary Row Button", onPress: null };
  obj4[1] = importDefault(9021);
  obj4[3] = function onPress() {

  };
  const items2 = [callback(require(7642) /* RowButtonWrapper */.RowButton, obj4), , , , , , ];
  const obj5 = { variant: "primary", icon: null, label: "Primary Row Button", subLabel: "I am a high emphasis button with a subLabel", onPress: null };
  obj5[1] = importDefault(9021);
  obj5[4] = function onPress() {

  };
  items2[1] = callback(require(7642) /* RowButtonWrapper */.RowButton, obj5);
  const obj6 = { variant: "secondary", icon: null, label: "Secondary Row Button", onPress: null };
  obj6[1] = importDefault(9021);
  obj6[3] = function onPress() {

  };
  items2[2] = callback(require(7642) /* RowButtonWrapper */.RowButton, obj6);
  const obj7 = { icon: null, label: "Secondary Row Button", subLabel: "I am a high emphasis button with a subLabel", onPress: null };
  obj7[0] = importDefault(9021);
  obj7[3] = function onPress() {

  };
  items2[3] = callback(require(7642) /* RowButtonWrapper */.RowButton, obj7);
  const obj8 = { icon: null, label: "Secondary Row Button", subLabel: "I am a high-emphasis button with more text. You can fit quite a lot of text in a row button. The text will continue to wrap", onPress: null };
  obj8[0] = importDefault(9021);
  obj8[3] = function onPress() {

  };
  items2[4] = callback(require(7642) /* RowButtonWrapper */.RowButton, obj8);
  const obj9 = { icon: null, label: "Row Button", subLabel: "With a custom RowButton.Icon", onPress: null };
  const obj10 = { source: null };
  obj10[0] = importDefault(9021);
  obj9[0] = callback(require(7642) /* RowButtonWrapper */.RowButton.Icon, obj10);
  obj9[3] = function onPress() {

  };
  items2[5] = callback(require(7642) /* RowButtonWrapper */.RowButton, obj9);
  const obj11 = { icon: null, label: "Row Button", subLabel: "I am disabled", onPress: null, disabled: true };
  obj11[0] = importDefault(9021);
  obj11[3] = function onPress() {

  };
  items2[6] = callback(require(7642) /* RowButtonWrapper */.RowButton, obj11);
  obj3[0] = items2;
  obj2[1] = callback2(require(4602) /* Stack */.Stack, obj3);
  items1[1] = callback(closure_3, obj2);
  obj[0] = items1;
  return callback2(closure_4, obj);
};
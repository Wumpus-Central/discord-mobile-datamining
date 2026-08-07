// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemExperimentalButtons.tsx
import "noop";
import get_ActivityIndicator from "set";
import jsxProd from "jsxProd";
import { registerAsset } from "../../../../../_runtime/04251_registerAsset.js";
import { LinearGradient } from "../../../../../_runtime/04723_LinearGradient.js";
import { registerAsset } from "../../../../../_runtime/05381_registerAsset.js";
import { registerAsset } from "../../../../../_runtime/05947_registerAsset.js";
import { registerAsset } from "../../../../../_runtime/05952_registerAsset.js";
import { ManaContext } from "../../../../../discord_common/js/packages/design/native.tsx";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { Button } from "../../../../design/components/Button/native/Button.native.tsx";
import { TwinButtons } from "../../../../design/components/experimental/native.tsx";
import { Stack } from "../../../../design/components/Stack/native/Stack.native.tsx";
import { RowButtonWrapper } from "../../../../design/components/TableRow/native/RowButton.native.tsx";
import { TableRowGroupTitle } from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { map } from "../../../../design/tokens/native/useToken.tsx";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemExperimentalButtons.tsx");

export default function UserSettingsDesignSystemExperimentalButtons() {
  let obj = map;
  const token = obj.useToken(Themes.modules.mobile.TABLE_ROW_PADDING);
  let obj1 = TwinButtons;
  const collapsibleFloatingActionButtonState = obj1.useCollapsibleFloatingActionButtonState();
  let obj2 = TwinButtons;
  obj = { children: null };
  obj = { onScroll: obj2.useCollapsibleFloatingActionButtonScroll(collapsibleFloatingActionButtonState), children: null };
  obj1 = { spacing: null, style: null, children: null };
  obj1[0] = Themes.space.PX_24;
  obj1[1] = { paddingHorizontal: token };
  obj2 = { title: "Header Button", description: "A specialized version of the 'secondary-overlay' Button which functions as both a Header and a button.", hasIcons: false, children: null };
  const obj3 = { style: null, children: null };
  const obj4 = { alignItems: "center", backgroundColor: null, paddingVertical: null };
  obj4[1] = Themes.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1;
  obj4[2] = Themes.space.PX_48;
  obj3[0] = obj4;
  const obj5 = {
    onPress() {

    },
    text: "Channel Name",
    icon: null,
    iconPosition: "end",
    accessibilityHint: "double-tap for more options",
    iconOpticalOffsetMargin: -6
  };
  obj5[2] = registerAsset;
  obj3[1] = callback(TwinButtons.HeaderButton, obj5);
  obj2[3] = callback(closure_3, obj3);
  const items = [callback(TableRowGroupTitle.TableRowGroup, obj2), , , , , , ];
  const obj6 = { title: "Input Button", description: "A specialized button which looks like a text field, but functions as a button.", hasIcons: false, children: null };
  const obj7 = { spacing: null, children: null };
  obj7[0] = Themes.space.PX_24;
  const obj8 = {
    onPress() {

    },
    size: "lg",
    text: "Search",
    icon: null,
    isRound: true
  };
  obj8[3] = registerAsset;
  const items1 = [callback(TwinButtons.InputButton, obj8), ];
  const obj9 = {
    onPress() {

    },
    size: "lg",
    text: "http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    icon: null,
    iconPosition: "end",
    accessibilityLabel: "Copy, http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  };
  obj9[3] = registerAsset;
  items1[1] = callback(TwinButtons.InputButton, obj9);
  obj7[1] = items1;
  obj6[3] = callback2(Stack.Stack, obj7);
  items[1] = callback(TableRowGroupTitle.TableRowGroup, obj6);
  const obj10 = { title: "Twin Buttons", description: "TwinButtons is a specialized layout component, which renders two text buttons horizontally next to each other. A horizontal layout for text buttons is often problematic, since internationalization and font size settings can easily render these buttons unreadable. But TwinButtons will force the two buttons to stack vertically under certain conditions to avoid these issues.", hasIcons: false, children: null };
  const obj11 = { children: null };
  const items2 = [
    callback(Button.Button, {
      onPress() {

      },
      text: "Add Status"
    }),
    callback(Button.Button, {
      onPress() {

      },
      text: "Edit Profile"
    })
  ];
  obj11[0] = items2;
  obj10[3] = callback2(TwinButtons.TwinButtons, obj11);
  items[2] = callback(TableRowGroupTitle.TableRowGroup, obj10);
  const obj14 = { title: "PressableScale", description: "If no button in our catelog of components is compatible with a particular design, then PressableScale can fill some gaps. It will apply the same onPress animation to a custom button.", hasIcons: false, children: null };
  const obj15 = { style: { padding: token }, children: null };
  const obj16 = {
    onPress() {

    },
    children: null
  };
  const obj17 = { style: { borderColor: "pink", borderWidth: 1, borderRadius: 8, padding: 12 }, children: null };
  obj17[1] = callback(Text.Text, { variant: "text-md/semibold", children: "This is a custom button" });
  obj16[1] = callback(closure_3, obj17);
  obj15[1] = callback(TwinButtons.PressableScale, obj16);
  obj14[3] = callback(closure_3, obj15);
  items[3] = callback(TableRowGroupTitle.TableRowGroup, obj14);
  const obj18 = { title: "Experimental Blur Background Row Button", description: "Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page.", hasIcons: false, children: null };
  obj18[3] = callback(closure_3, {});
  items[4] = callback(TableRowGroupTitle.TableRowGroup, obj18);
  const obj19 = { theme: "darker", children: null };
  const obj20 = { style: { padding: 16 }, start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: ["red", "orange", "yellow", "green", "teal", "blue", "purple"], children: null };
  const obj21 = { icon: null, label: "Row Button", subLabel: "With a blur background", experimental_withBlurBackground: true, onPress: null };
  obj21[0] = registerAsset;
  obj21[4] = function onPress() {

  };
  obj20[4] = callback(RowButtonWrapper.RowButton, obj21);
  obj19[1] = callback(LinearGradient, obj20);
  items[5] = callback(ManaContext.ThemeContextProvider, obj19);
  const obj22 = { title: "Collapsible Floating Action Button", description: "A variation of the FloatingActionButton which will display some text until the user scrolls. We currently recommend the use of the FloatingActionButton over the CollapsibleFloatingActionButton, as a singular icon button without animation is more compact, understandable, and predictable.", hasIcons: false, children: null };
  obj22[3] = callback(closure_3, { style: { padding: 48 } });
  items[6] = callback(TableRowGroupTitle.TableRowGroup, obj22);
  obj1[2] = items;
  obj[1] = callback2(Stack.Stack, obj1);
  const items3 = [callback(closure_4, obj), ];
  const obj23 = { icon: null, onPress: null, positionBottom: 32, text: "Floating Action Button", state: null };
  obj23[0] = registerAsset;
  obj23[1] = function onPress() {

  };
  obj23[4] = collapsibleFloatingActionButtonState;
  items3[1] = callback(TwinButtons.CollapsibleFloatingActionButton, obj23);
  obj[0] = items3;
  return callback2(closure_3, obj);
};
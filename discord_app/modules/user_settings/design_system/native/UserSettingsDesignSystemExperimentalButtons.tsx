// === Module 15593: UserSettingsDesignSystemExperimentalButtons ===

// Module 15593 (UserSettingsDesignSystemExperimentalButtons)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import map from "map" /* 4197 */;
import ManaContext from "ManaContext" /* 4204 */;
import registerAssetDefault from "registerAsset" /* 4426 */;
import Text from "Text" /* 4474 */;
import Stack from "Stack" /* 4926 */;
import Button from "Button" /* 4928 */;
import LinearGradientDefault from "LinearGradient" /* 4940 */;
import registerAssetDefault2 from "registerAsset" /* 5615 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6000 */;
import registerAssetDefault3 from "registerAsset" /* 6245 */;
import registerAssetDefault4 from "registerAsset" /* 6250 */;
import RowButtonWrapper from "RowButtonWrapper" /* 8374 */;
import TwinButtons from "TwinButtons" /* 8998 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemExperimentalButtons.tsx");

export default function UserSettingsDesignSystemExperimentalButtons() {
  let obj = map;
  const token = obj.useToken(ThemesDefault.modules.mobile.TABLE_ROW_PADDING);
  obj1 = TwinButtons;
  const collapsibleFloatingActionButtonState = obj1.useCollapsibleFloatingActionButtonState();
  let obj2 = TwinButtons;
  obj = { children: null };
  obj = { onScroll: obj2.useCollapsibleFloatingActionButtonScroll(collapsibleFloatingActionButtonState), children: null };
  obj1 = { spacing: ThemesDefault.space.PX_24, style: { paddingHorizontal: token }, children: null };
  obj2 = { title: "Header Button", description: "A specialized version of the 'secondary-overlay' Button which functions as both a Header and a button.", hasIcons: false, children: null };
  const obj3 = { style: { alignItems: "center", backgroundColor: ThemesDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1, paddingVertical: ThemesDefault.space.PX_48 }, children: null };
  const obj4 = { alignItems: "center", backgroundColor: ThemesDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1, paddingVertical: ThemesDefault.space.PX_48 };
  obj3[1] = callback(TwinButtons.HeaderButton, {
    onPress() {

    },
    text: "Channel Name",
    icon: registerAssetDefault2,
    iconPosition: "end",
    accessibilityHint: "double-tap for more options",
    iconOpticalOffsetMargin: -6
  });
  obj2[3] = callback(closure_3, obj3);
  const items = [callback(TableRowGroupTitle.TableRowGroup, obj2), , , , , , ];
  const obj6 = { title: "Input Button", description: "A specialized button which looks like a text field, but functions as a button.", hasIcons: false, children: null };
  const obj7 = { spacing: ThemesDefault.space.PX_24, children: null };
  const obj5 = {
    onPress() {

    },
    text: "Channel Name",
    icon: registerAssetDefault2,
    iconPosition: "end",
    accessibilityHint: "double-tap for more options",
    iconOpticalOffsetMargin: -6
  };
  const items1 = [
    callback(TwinButtons.InputButton, {
      onPress() {

      },
      size: "lg",
      text: "Search",
      icon: registerAssetDefault3,
      isRound: true
    }),

  ];
  const obj8 = {
    onPress() {

    },
    size: "lg",
    text: "Search",
    icon: registerAssetDefault3,
    isRound: true
  };
  items1[1] = callback(TwinButtons.InputButton, {
    onPress() {

    },
    size: "lg",
    text: "http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    icon: registerAssetDefault,
    iconPosition: "end",
    accessibilityLabel: "Copy, http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  });
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
  const obj12 = {
    onPress() {

    },
    text: "Add Status"
  };
  const obj13 = {
    onPress() {

    },
    text: "Edit Profile"
  };
  const obj9 = {
    onPress() {

    },
    size: "lg",
    text: "http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    icon: registerAssetDefault,
    iconPosition: "end",
    accessibilityLabel: "Copy, http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  };
  obj16[1] = callback(closure_3, { style: { borderColor: "pink", borderWidth: 1, borderRadius: 8, padding: 12 }, children: callback(Text.Text, { variant: "text-md/semibold", children: "This is a custom button" }) });
  obj15[1] = callback(TwinButtons.PressableScale, obj16);
  obj14[3] = callback(closure_3, obj15);
  items[3] = callback(TableRowGroupTitle.TableRowGroup, obj14);
  const obj17 = { style: { borderColor: "pink", borderWidth: 1, borderRadius: 8, padding: 12 }, children: callback(Text.Text, { variant: "text-md/semibold", children: "This is a custom button" }) };
  items[4] = callback(TableRowGroupTitle.TableRowGroup, { title: "Experimental Blur Background Row Button", description: "Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page.", hasIcons: false, children: callback(closure_3, {}) });
  const obj19 = { theme: "darker", children: null };
  const obj20 = { style: { padding: 16 }, start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: ["red", "orange", "yellow", "green", "teal", "blue", "purple"], children: null };
  const obj18 = { title: "Experimental Blur Background Row Button", description: "Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page.", hasIcons: false, children: callback(closure_3, {}) };
  const tmp3 = LinearGradientDefault;
  obj20[4] = callback(RowButtonWrapper.RowButton, {
    icon: registerAssetDefault4,
    label: "Row Button",
    subLabel: "With a blur background",
    experimental_withBlurBackground: true,
    onPress() {

    }
  });
  obj19[1] = callback(tmp3, obj20);
  items[5] = callback(ManaContext.ThemeContextProvider, obj19);
  const obj21 = {
    icon: registerAssetDefault4,
    label: "Row Button",
    subLabel: "With a blur background",
    experimental_withBlurBackground: true,
    onPress() {

    }
  };
  items[6] = callback(TableRowGroupTitle.TableRowGroup, { title: "Collapsible Floating Action Button", description: "A variation of the FloatingActionButton which will display some text until the user scrolls. We currently recommend the use of the FloatingActionButton over the CollapsibleFloatingActionButton, as a singular icon button without animation is more compact, understandable, and predictable.", hasIcons: false, children: callback(closure_3, { style: { padding: 48 } }) });
  obj1[2] = items;
  obj[1] = callback2(Stack.Stack, obj1);
  const items3 = [callback(closure_4, obj), ];
  const obj22 = { title: "Collapsible Floating Action Button", description: "A variation of the FloatingActionButton which will display some text until the user scrolls. We currently recommend the use of the FloatingActionButton over the CollapsibleFloatingActionButton, as a singular icon button without animation is more compact, understandable, and predictable.", hasIcons: false, children: callback(closure_3, { style: { padding: 48 } }) };
  items3[1] = callback(TwinButtons.CollapsibleFloatingActionButton, {
    icon: registerAssetDefault4,
    onPress() {

    },
    positionBottom: 32,
    text: "Floating Action Button",
    state: collapsibleFloatingActionButtonState
  });
  obj[0] = items3;
  return callback2(closure_3, obj);
};
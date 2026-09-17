// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemExperimentalButtons.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import _modDef4587 from "../../../../../_runtime/metro/04587__.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import LinearGradientDefault from "../../../../../_runtime/05074_LinearGradient.js";
import _modDef5701 from "../../../../../_runtime/metro/05701__.js";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import _modDef7166 from "../../../../../_runtime/metro/07166__.js";
import _modDef7495 from "../../../../../_runtime/metro/07495__.js";
import RowButton from "../../../../design/components/TableRow/native/RowButton.native.tsx";
import native2 from "../../../../design/components/experimental/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const ThemeTypes = fn(1074).ThemeTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemExperimentalButtons.tsx",
);

export default function UserSettingsDesignSystemExperimentalButtons() {
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const collapsibleFloatingActionButtonState = native2.useCollapsibleFloatingActionButtonState();
  const obj4 = { children: null };
  const obj5 = {
    onScroll: native2.useCollapsibleFloatingActionButtonScroll(collapsibleFloatingActionButtonState),
    children: null,
  };
  const obj6 = { spacing: nativeDefault.space.PX_24, style: { paddingHorizontal: token }, children: null };
  const obj7 = {
    title: "Header Button",
    description:
      "A specialized version of the 'secondary-overlay' Button which functions as both a Header and a button.",
    hasIcons: false,
    children: null,
  };
  const obj8 = { style: null, children: null };
  obj8.style = {
    alignItems: "center",
    backgroundColor: nativeDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1,
    paddingVertical: nativeDefault.space.PX_48,
  };
  const obj9 = {
    alignItems: "center",
    backgroundColor: nativeDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1,
    paddingVertical: nativeDefault.space.PX_48,
  };
  obj8.children = timestampProducer(native2.HeaderButton, {
    onPress() {},
    text: "Channel Name",
    icon: _modDef5701,
    iconPosition: "end",
    accessibilityHint: "double-tap for more options",
    iconOpticalOffsetMargin: -6,
  });
  obj7.children = timestampProducer(React3, obj8);
  const items = [timestampProducer(TableRowGroup.TableRowGroup, obj7), , , , , ,];
  const obj11 = {
    title: "Input Button",
    description: "A specialized button which looks like a text field, but functions as a button.",
    hasIcons: false,
    children: null,
  };
  const obj12 = { spacing: nativeDefault.space.PX_24, children: null };
  const obj10 = {
    onPress() {},
    text: "Channel Name",
    icon: _modDef5701,
    iconPosition: "end",
    accessibilityHint: "double-tap for more options",
    iconOpticalOffsetMargin: -6,
  };
  const items1 = [
    timestampProducer(native2.InputButton, {
      onPress() {},
      size: "lg",
      text: "Search",
      icon: _modDef7166,
      round: true,
    }),
  ];
  const obj13 = {
    onPress() {},
    size: "lg",
    text: "Search",
    icon: _modDef7166,
    round: true,
  };
  items1[1] = timestampProducer(native2.InputButton, {
    onPress() {},
    size: "lg",
    text: "http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    icon: _modDef4587,
    iconPosition: "end",
    accessibilityLabel: "Copy, http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  });
  obj12.children = items1;
  obj11.children = React5(Stack_Stack.Stack, obj12);
  items[1] = timestampProducer(TableRowGroup.TableRowGroup, obj11);
  const obj15 = {
    title: "Twin Buttons",
    description:
      "TwinButtons is a specialized layout component, which renders two text buttons horizontally next to each other. A horizontal layout for text buttons is often problematic, since internationalization and font size settings can easily render these buttons unreadable. But TwinButtons will force the two buttons to stack vertically under certain conditions to avoid these issues.",
    hasIcons: false,
    children: null,
  };
  const obj16 = { children: null };
  const items2 = [
    timestampProducer(components_Button_Button.Button, {
      onPress() {},
      text: "Add Status",
    }),
    timestampProducer(components_Button_Button.Button, {
      onPress() {},
      text: "Edit Profile",
    }),
  ];
  obj16.children = items2;
  obj15.children = React5(native2.TwinButtons, obj16);
  items[2] = timestampProducer(TableRowGroup.TableRowGroup, obj15);
  const obj19 = {
    title: "PressableScale",
    description:
      "If no button in our catelog of components is compatible with a particular design, then PressableScale can fill some gaps. It will apply the same onPress animation to a custom button.",
    hasIcons: false,
    children: null,
  };
  const obj20 = { style: { padding: token }, children: null };
  const obj21 = {
    onPress() {},
    children: null,
  };
  const obj14 = {
    onPress() {},
    size: "lg",
    text: "http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    icon: _modDef4587,
    iconPosition: "end",
    accessibilityLabel: "Copy, http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  };
  const obj17 = {
    onPress() {},
    text: "Add Status",
  };
  const obj18 = {
    onPress() {},
    text: "Edit Profile",
  };
  obj21.children = timestampProducer(React3, {
    style: { borderColor: "pink", borderWidth: 1, borderRadius: 8, padding: 12 },
    children: timestampProducer(Text_Text.Text, { variant: "text-md/semibold", children: "This is a custom button" }),
  });
  obj20.children = timestampProducer(native2.PressableScale, obj21);
  obj19.children = timestampProducer(React3, obj20);
  items[3] = timestampProducer(TableRowGroup.TableRowGroup, obj19);
  const obj22 = {
    style: { borderColor: "pink", borderWidth: 1, borderRadius: 8, padding: 12 },
    children: timestampProducer(Text_Text.Text, { variant: "text-md/semibold", children: "This is a custom button" }),
  };
  items[4] = timestampProducer(TableRowGroup.TableRowGroup, {
    title: "Experimental Blur Background Row Button",
    description:
      "Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page.",
    hasIcons: false,
    children: timestampProducer(React3, {}),
  });
  const obj24 = { theme: ThemeTypes.DARK, children: null };
  const obj25 = {
    style: { padding: 16 },
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
    colors: ["red", "orange", "yellow", "green", "teal", "blue", "purple"],
    children: null,
  };
  const obj23 = {
    title: "Experimental Blur Background Row Button",
    description:
      "Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page.",
    hasIcons: false,
    children: timestampProducer(React3, {}),
  };
  const tmp3 = LinearGradientDefault;
  obj25.children = timestampProducer(RowButton.RowButton, {
    icon: _modDef7495,
    label: "Row Button",
    subLabel: "With a blur background",
    experimental_withBlurBackground: true,
    onPress() {},
  });
  obj24.children = timestampProducer(tmp3, obj25);
  items[5] = timestampProducer(native.ThemeContextProvider, obj24);
  const obj26 = {
    icon: _modDef7495,
    label: "Row Button",
    subLabel: "With a blur background",
    experimental_withBlurBackground: true,
    onPress() {},
  };
  items[6] = timestampProducer(TableRowGroup.TableRowGroup, {
    title: "Collapsible Floating Action Button",
    description:
      "A variation of the FloatingActionButton which will display some text until the user scrolls. We currently recommend the use of the FloatingActionButton over the CollapsibleFloatingActionButton, as a singular icon button without animation is more compact, understandable, and predictable.",
    hasIcons: false,
    children: timestampProducer(React3, { style: { padding: 48 } }),
  });
  obj6.children = items;
  obj5.children = React5(Stack_Stack.Stack, obj6);
  const items3 = [timestampProducer(React4, obj5)];
  const obj27 = {
    title: "Collapsible Floating Action Button",
    description:
      "A variation of the FloatingActionButton which will display some text until the user scrolls. We currently recommend the use of the FloatingActionButton over the CollapsibleFloatingActionButton, as a singular icon button without animation is more compact, understandable, and predictable.",
    hasIcons: false,
    children: timestampProducer(React3, { style: { padding: 48 } }),
  };
  items3[1] = timestampProducer(native2.CollapsibleFloatingActionButton, {
    icon: _modDef7495,
    onPress() {},
    positionBottom: 32,
    text: "Floating Action Button",
    state: collapsibleFloatingActionButtonState,
  });
  obj4.children = items3;
  return React5(React3, obj4);
}

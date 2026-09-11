// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemExperimentalButtons.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import _modDef4554 from "../../../../../_runtime/metro/04554__.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import LinearGradientDefault from "../../../../../_runtime/05038_LinearGradient.js";
import _modDef5664 from "../../../../../_runtime/metro/05664__.js";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import _modDef7125 from "../../../../../_runtime/metro/07125__.js";
import _modDef7454 from "../../../../../_runtime/metro/07454__.js";
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
  let obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  let obj1 = native2;
  const collapsibleFloatingActionButtonState = obj1.useCollapsibleFloatingActionButtonState();
  let obj2 = native2;
  obj = { children: null };
  obj = {
    onScroll: obj2.useCollapsibleFloatingActionButtonScroll(collapsibleFloatingActionButtonState),
    children: null,
  };
  obj1 = { spacing: nativeDefault.space.PX_24, style: { paddingHorizontal: token }, children: null };
  obj2 = {
    title: "Header Button",
    description:
      "A specialized version of the 'secondary-overlay' Button which functions as both a Header and a button.",
    hasIcons: false,
    children: null,
  };
  const obj3 = {
    style: {
      alignItems: "center",
      backgroundColor: nativeDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1,
      paddingVertical: nativeDefault.space.PX_48,
    },
    children: null,
  };
  const obj4 = {
    alignItems: "center",
    backgroundColor: nativeDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1,
    paddingVertical: nativeDefault.space.PX_48,
  };
  obj3.children = timestampProducer(native2.HeaderButton, {
    onPress() {},
    text: "Channel Name",
    icon: _modDef5664,
    iconPosition: "end",
    accessibilityHint: "double-tap for more options",
    iconOpticalOffsetMargin: -6,
  });
  obj2.children = timestampProducer(React3, obj3);
  const items = [timestampProducer(TableRowGroup.TableRowGroup, obj2), , , , , ,];
  const obj6 = {
    title: "Input Button",
    description: "A specialized button which looks like a text field, but functions as a button.",
    hasIcons: false,
    children: null,
  };
  const obj7 = { spacing: nativeDefault.space.PX_24, children: null };
  const obj5 = {
    onPress() {},
    text: "Channel Name",
    icon: _modDef5664,
    iconPosition: "end",
    accessibilityHint: "double-tap for more options",
    iconOpticalOffsetMargin: -6,
  };
  const items1 = [
    timestampProducer(native2.InputButton, {
      onPress() {},
      size: "lg",
      text: "Search",
      icon: _modDef7125,
      isRound: true,
    }),
  ];
  const obj8 = {
    onPress() {},
    size: "lg",
    text: "Search",
    icon: _modDef7125,
    isRound: true,
  };
  items1[1] = timestampProducer(native2.InputButton, {
    onPress() {},
    size: "lg",
    text: "http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    icon: _modDef4554,
    iconPosition: "end",
    accessibilityLabel: "Copy, http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  });
  obj7.children = items1;
  obj6.children = React5(Stack_Stack.Stack, obj7);
  items[1] = timestampProducer(TableRowGroup.TableRowGroup, obj6);
  const obj10 = {
    title: "Twin Buttons",
    description:
      "TwinButtons is a specialized layout component, which renders two text buttons horizontally next to each other. A horizontal layout for text buttons is often problematic, since internationalization and font size settings can easily render these buttons unreadable. But TwinButtons will force the two buttons to stack vertically under certain conditions to avoid these issues.",
    hasIcons: false,
    children: null,
  };
  const obj11 = { children: null };
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
  obj11.children = items2;
  obj10.children = React5(native2.TwinButtons, obj11);
  items[2] = timestampProducer(TableRowGroup.TableRowGroup, obj10);
  const obj14 = {
    title: "PressableScale",
    description:
      "If no button in our catelog of components is compatible with a particular design, then PressableScale can fill some gaps. It will apply the same onPress animation to a custom button.",
    hasIcons: false,
    children: null,
  };
  const obj15 = { style: { padding: token }, children: null };
  const obj16 = {
    onPress() {},
    children: null,
  };
  const obj12 = {
    onPress() {},
    text: "Add Status",
  };
  const obj13 = {
    onPress() {},
    text: "Edit Profile",
  };
  const obj9 = {
    onPress() {},
    size: "lg",
    text: "http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    icon: _modDef4554,
    iconPosition: "end",
    accessibilityLabel: "Copy, http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  };
  obj16.children = timestampProducer(React3, {
    style: { borderColor: "pink", borderWidth: 1, borderRadius: 8, padding: 12 },
    children: timestampProducer(Text_Text.Text, { variant: "text-md/semibold", children: "This is a custom button" }),
  });
  obj15.children = timestampProducer(native2.PressableScale, obj16);
  obj14.children = timestampProducer(React3, obj15);
  items[3] = timestampProducer(TableRowGroup.TableRowGroup, obj14);
  const obj17 = {
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
  const obj19 = { theme: ThemeTypes.DARK, children: null };
  const obj20 = {
    style: { padding: 16 },
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
    colors: ["red", "orange", "yellow", "green", "teal", "blue", "purple"],
    children: null,
  };
  const obj18 = {
    title: "Experimental Blur Background Row Button",
    description:
      "Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page.",
    hasIcons: false,
    children: timestampProducer(React3, {}),
  };
  const tmp3 = LinearGradientDefault;
  obj20.children = timestampProducer(RowButton.RowButton, {
    icon: _modDef7454,
    label: "Row Button",
    subLabel: "With a blur background",
    experimental_withBlurBackground: true,
    onPress() {},
  });
  obj19.children = timestampProducer(tmp3, obj20);
  items[5] = timestampProducer(native.ThemeContextProvider, obj19);
  const obj21 = {
    icon: _modDef7454,
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
  obj1.children = items;
  obj.children = React5(Stack_Stack.Stack, obj1);
  const items3 = [timestampProducer(React4, obj)];
  const obj22 = {
    title: "Collapsible Floating Action Button",
    description:
      "A variation of the FloatingActionButton which will display some text until the user scrolls. We currently recommend the use of the FloatingActionButton over the CollapsibleFloatingActionButton, as a singular icon button without animation is more compact, understandable, and predictable.",
    hasIcons: false,
    children: timestampProducer(React3, { style: { padding: 48 } }),
  };
  items3[1] = timestampProducer(native2.CollapsibleFloatingActionButton, {
    icon: _modDef7454,
    onPress() {},
    positionBottom: 32,
    text: "Floating Action Button",
    state: collapsibleFloatingActionButtonState,
  });
  obj.children = items3;
  return React5(React3, obj);
}

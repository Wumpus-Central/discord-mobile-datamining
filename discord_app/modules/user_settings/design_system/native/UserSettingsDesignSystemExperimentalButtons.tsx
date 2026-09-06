// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemExperimentalButtons.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import _modDef4508 from "../../../../../_runtime/metro/04508__.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import LinearGradientDefault from "../../../../../_runtime/04987_LinearGradient.js";
import _modDef5613 from "../../../../../_runtime/metro/05613__.js";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import _modDef7052 from "../../../../../_runtime/metro/07052__.js";
import _modDef7381 from "../../../../../_runtime/metro/07381__.js";
import RowButton from "../../../../design/components/TableRow/native/RowButton.native.tsx";
import native2 from "../../../../design/components/experimental/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
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
  obj3.children = hasOwnProperty(native2.HeaderButton, {
    onPress() {},
    text: "Channel Name",
    icon: _modDef5613,
    iconPosition: "end",
    accessibilityHint: "double-tap for more options",
    iconOpticalOffsetMargin: -6,
  });
  obj2.children = hasOwnProperty(React3, obj3);
  const items = [hasOwnProperty(TableRowGroup.TableRowGroup, obj2), , , , , ,];
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
    icon: _modDef5613,
    iconPosition: "end",
    accessibilityHint: "double-tap for more options",
    iconOpticalOffsetMargin: -6,
  };
  const items1 = [
    hasOwnProperty(native2.InputButton, {
      onPress() {},
      size: "lg",
      text: "Search",
      icon: _modDef7052,
      isRound: true,
    }),
  ];
  const obj8 = {
    onPress() {},
    size: "lg",
    text: "Search",
    icon: _modDef7052,
    isRound: true,
  };
  items1[1] = hasOwnProperty(native2.InputButton, {
    onPress() {},
    size: "lg",
    text: "http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    icon: _modDef4508,
    iconPosition: "end",
    accessibilityLabel: "Copy, http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  });
  obj7.children = items1;
  obj6.children = timestampProducer(Stack_Stack.Stack, obj7);
  items[1] = hasOwnProperty(TableRowGroup.TableRowGroup, obj6);
  const obj10 = {
    title: "Twin Buttons",
    description:
      "TwinButtons is a specialized layout component, which renders two text buttons horizontally next to each other. A horizontal layout for text buttons is often problematic, since internationalization and font size settings can easily render these buttons unreadable. But TwinButtons will force the two buttons to stack vertically under certain conditions to avoid these issues.",
    hasIcons: false,
    children: null,
  };
  const obj11 = { children: null };
  const items2 = [
    hasOwnProperty(components_Button_Button.Button, {
      onPress() {},
      text: "Add Status",
    }),
    hasOwnProperty(components_Button_Button.Button, {
      onPress() {},
      text: "Edit Profile",
    }),
  ];
  obj11.children = items2;
  obj10.children = timestampProducer(native2.TwinButtons, obj11);
  items[2] = hasOwnProperty(TableRowGroup.TableRowGroup, obj10);
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
    icon: _modDef4508,
    iconPosition: "end",
    accessibilityLabel: "Copy, http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  };
  obj16.children = hasOwnProperty(React3, {
    style: { borderColor: "pink", borderWidth: 1, borderRadius: 8, padding: 12 },
    children: hasOwnProperty(Text_Text.Text, { variant: "text-md/semibold", children: "This is a custom button" }),
  });
  obj15.children = hasOwnProperty(native2.PressableScale, obj16);
  obj14.children = hasOwnProperty(React3, obj15);
  items[3] = hasOwnProperty(TableRowGroup.TableRowGroup, obj14);
  const obj17 = {
    style: { borderColor: "pink", borderWidth: 1, borderRadius: 8, padding: 12 },
    children: hasOwnProperty(Text_Text.Text, { variant: "text-md/semibold", children: "This is a custom button" }),
  };
  items[4] = hasOwnProperty(TableRowGroup.TableRowGroup, {
    title: "Experimental Blur Background Row Button",
    description:
      "Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page.",
    hasIcons: false,
    children: hasOwnProperty(React3, {}),
  });
  const obj19 = { theme: "darker", children: null };
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
    children: hasOwnProperty(React3, {}),
  };
  const tmp3 = LinearGradientDefault;
  obj20.children = hasOwnProperty(RowButton.RowButton, {
    icon: _modDef7381,
    label: "Row Button",
    subLabel: "With a blur background",
    experimental_withBlurBackground: true,
    onPress() {},
  });
  obj19.children = hasOwnProperty(tmp3, obj20);
  items[5] = hasOwnProperty(native.ThemeContextProvider, obj19);
  const obj21 = {
    icon: _modDef7381,
    label: "Row Button",
    subLabel: "With a blur background",
    experimental_withBlurBackground: true,
    onPress() {},
  };
  items[6] = hasOwnProperty(TableRowGroup.TableRowGroup, {
    title: "Collapsible Floating Action Button",
    description:
      "A variation of the FloatingActionButton which will display some text until the user scrolls. We currently recommend the use of the FloatingActionButton over the CollapsibleFloatingActionButton, as a singular icon button without animation is more compact, understandable, and predictable.",
    hasIcons: false,
    children: hasOwnProperty(React3, { style: { padding: 48 } }),
  });
  obj1.children = items;
  obj.children = timestampProducer(Stack_Stack.Stack, obj1);
  const items3 = [hasOwnProperty(React4, obj)];
  const obj22 = {
    title: "Collapsible Floating Action Button",
    description:
      "A variation of the FloatingActionButton which will display some text until the user scrolls. We currently recommend the use of the FloatingActionButton over the CollapsibleFloatingActionButton, as a singular icon button without animation is more compact, understandable, and predictable.",
    hasIcons: false,
    children: hasOwnProperty(React3, { style: { padding: 48 } }),
  };
  items3[1] = hasOwnProperty(native2.CollapsibleFloatingActionButton, {
    icon: _modDef7381,
    onPress() {},
    positionBottom: 32,
    text: "Floating Action Button",
    state: collapsibleFloatingActionButtonState,
  });
  obj.children = items3;
  return timestampProducer(React3, obj);
}

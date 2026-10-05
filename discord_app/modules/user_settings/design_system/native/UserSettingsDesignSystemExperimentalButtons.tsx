// === Module 15649: UserSettingsDesignSystemExperimentalButtons ===

// Module 15649 (UserSettingsDesignSystemExperimentalButtons)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import useToken from "useToken" /* 4580 */;
import native from "native" /* 4589 */;
import AssetRegistryDefault from "AssetRegistry" /* 4844 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 6001 */;
import TableRowGroup7 from "TableRowGroup" /* 6074 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 6549 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 6884 */;
import native2 from "native" /* 8567 */;
import RowButton2 from "RowButton" /* 8897 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
({ View: c3, ScrollView: closure_4 } = react_native);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let HeaderButton;
  let RowButton;
  let Stack;
  let TwinButtons;
  let items;
  let items1;
  let items3;
  let items4;
  let obj12;
  let obj16;
  let obj20;
  let obj22;
  let obj26;
  let obj27;
  let obj29;
  let obj8;
  let obj9;
  let tmp10;
  let tmp14;
  let tmp17;
  let tmp21;
  let tmp24;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp34;
  let tmp38;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp46;
  let tmp4Result;
  let tmp51;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(33);
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const obj3 = native2;
  const collapsibleFloatingActionButtonState = obj3.useCollapsibleFloatingActionButtonState();
  const obj4 = native2;
  const collapsibleFloatingActionButtonScroll = obj4.useCollapsibleFloatingActionButtonScroll(collapsibleFloatingActionButtonState);
  if (cResult[0] !== token) {
    const obj5 = { paddingHorizontal: token };
    cResult[0] = token;
    cResult[1] = obj5;
    tmp8 = obj5;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { alignItems: "center", backgroundColor: nativeDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1, paddingVertical: nativeDefault.space.PX_48 };
    cResult[2] = obj6;
    tmp9 = obj6;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { title: "Header Button", description: "A specialized version of the 'secondary-overlay' Button which functions as both a Header and a button.", hasIcons: false, children: metroRequire(_false, obj8) };
    obj8 = { style: tmp9, children: metroRequire(HeaderButton, obj9) };
    const TableRowGroup = TableRowGroup7.TableRowGroup;
    obj9 = {
      onPress() {

        },
      text: "Channel Name",
      icon: AssetRegistryDefault2,
      iconPosition: "end",
      accessibilityHint: "double-tap for more options",
      iconOpticalOffsetMargin: -6
    };
    HeaderButton = native2.HeaderButton;
    const tmp13 = metroRequire(TableRowGroup, obj7);
    cResult[3] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj10 = {
      onPress() {

        },
      size: "lg",
      text: "Search",
      icon: AssetRegistryDefault3,
      round: true
    };
    const InputButton = native2.InputButton;
    const tmp16 = metroRequire(InputButton, obj10);
    cResult[4] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj11 = { title: "Input Button", description: "A specialized button which looks like a text field, but functions as a button.", hasIcons: false, children: metroImportDefault(Stack, obj12) };
    const TableRowGroup2 = TableRowGroup7.TableRowGroup;
    obj12 = { spacing: nativeDefault.space.PX_24, children: items };
    Stack = Stack_Stack.Stack;
    items = [tmp14, ];
    const obj13 = {
      onPress() {

        },
      size: "lg",
      text: "http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      icon: AssetRegistryDefault,
      iconPosition: "end",
      accessibilityLabel: "Copy, http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    };
    const InputButton2 = native2.InputButton;
    items[1] = metroRequire(InputButton2, obj13);
    const tmp20 = metroRequire(TableRowGroup2, obj11);
    cResult[5] = tmp20;
    tmp17 = tmp20;
  } else {
    tmp17 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj14 = {
      onPress() {

        },
      text: "Add Status"
    };
    const tmp23 = metroRequire(components_Button_Button.Button, obj14);
    cResult[6] = tmp23;
    tmp21 = tmp23;
  } else {
    tmp21 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj15 = { title: "Twin Buttons", description: "TwinButtons is a specialized layout component, which renders two text buttons horizontally next to each other. A horizontal layout for text buttons is often problematic, since internationalization and font size settings can easily render these buttons unreadable. But TwinButtons will force the two buttons to stack vertically under certain conditions to avoid these issues.", hasIcons: false, children: metroImportDefault(TwinButtons, obj16) };
    const TableRowGroup3 = TableRowGroup7.TableRowGroup;
    obj16 = { children: items1 };
    items1 = [tmp21, ];
    TwinButtons = native2.TwinButtons;
    const obj17 = {
      onPress() {

        },
      text: "Edit Profile"
    };
    items1[1] = metroRequire(components_Button_Button.Button, obj17);
    const tmp27 = metroRequire(TableRowGroup3, obj15);
    cResult[7] = tmp27;
    tmp24 = tmp27;
  } else {
    tmp24 = cResult[7];
  }
  if (cResult[8] !== token) {
    const obj18 = { padding: token };
    cResult[8] = token;
    cResult[9] = obj18;
    tmp28 = obj18;
  } else {
    tmp28 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function w() {

    };
    cResult[10] = fn;
    tmp29 = fn;
  } else {
    tmp29 = cResult[10];
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    const obj19 = { onPress: tmp29, children: metroRequire(_false, obj20) };
    obj20 = { style: { borderColor: "pink", borderWidth: 1, borderRadius: 8, padding: 12 }, children: metroRequire(Text_Text.Text, { variant: "text-md/semibold", children: "This is a custom button" }) };
    const PressableScale = native2.PressableScale;
    const tmp33 = metroRequire(PressableScale, obj19);
    cResult[11] = tmp33;
    tmp30 = tmp33;
  } else {
    tmp30 = cResult[11];
  }
  if (cResult[12] !== tmp28) {
    const obj21 = { title: "PressableScale", description: "If no button in our catelog of components is compatible with a particular design, then PressableScale can fill some gaps. It will apply the same onPress animation to a custom button.", hasIcons: false, children: metroRequire(_false, obj22) };
    obj22 = { style: tmp28, children: tmp30 };
    const TableRowGroup4 = TableRowGroup7.TableRowGroup;
    const tmp37 = metroRequire(TableRowGroup4, obj21);
    cResult[12] = tmp28;
    cResult[13] = tmp37;
    tmp34 = tmp37;
  } else {
    tmp34 = cResult[13];
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const obj23 = { title: "Experimental Blur Background Row Button", description: "Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page.", hasIcons: false, children: metroRequire(_false, {}) };
    const TableRowGroup5 = TableRowGroup7.TableRowGroup;
    const tmp41 = metroRequire(TableRowGroup5, obj23);
    cResult[14] = tmp41;
    tmp38 = tmp41;
  } else {
    tmp38 = cResult[14];
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const obj24 = { padding: 16 };
    const point = { x: 0, y: 0 };
    const point1 = { x: 1, y: 0 };
    const items2 = ["red", "orange", "yellow", "green", "teal", "blue", "purple"];
    cResult[15] = obj24;
    cResult[16] = point;
    cResult[17] = point1;
    cResult[18] = items2;
    tmp45 = items2;
    tmp44 = point1;
    tmp43 = point;
    tmp42 = obj24;
  } else {
    tmp42 = cResult[15];
    tmp43 = cResult[16];
    tmp44 = cResult[17];
    tmp45 = cResult[18];
  }
  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
    const obj25 = { theme: ThemeTypes.DARK, children: metroRequire(tmp4Result, obj26) };
    const ThemeContextProvider = native.ThemeContextProvider;
    obj26 = { style: tmp42, start: tmp43, end: tmp44, colors: tmp45, children: metroRequire(RowButton, obj27) };
    obj27 = {
      icon: AssetRegistryDefault4,
      label: "Row Button",
      subLabel: "With a blur background",
      experimental_withBlurBackground: true,
      onPress() {

        }
    };
    tmp4Result = LinearGradientDefault;
    RowButton = RowButton2.RowButton;
    const tmp50 = metroRequire(ThemeContextProvider, obj25);
    cResult[19] = tmp50;
    tmp46 = tmp50;
  } else {
    tmp46 = cResult[19];
  }
  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
    const obj28 = { title: "Collapsible Floating Action Button", description: "A variation of the FloatingActionButton which will display some text until the user scrolls. We currently recommend the use of the FloatingActionButton over the CollapsibleFloatingActionButton, as a singular icon button without animation is more compact, understandable, and predictable.", hasIcons: false, children: metroRequire(_false, obj29) };
    obj29 = { style: { padding: 48 } };
    const TableRowGroup6 = TableRowGroup7.TableRowGroup;
    const tmp54 = metroRequire(TableRowGroup6, obj28);
    cResult[20] = tmp54;
    tmp51 = tmp54;
  } else {
    tmp51 = cResult[20];
  }
  if (cResult[21] === tmp8) {
    let tmp55;
    if (cResult[22] === tmp34) {
      tmp55 = cResult[23];
    }
    if (cResult[24] === collapsibleFloatingActionButtonScroll) {
      let tmp57;
      let tmp61;
      let tmp62;
      if (cResult[25] === tmp55) {
        tmp57 = cResult[26];
      }
      const _Symbol = Symbol;
      if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function z() {

        };
        cResult[27] = fn2;
        tmp61 = fn2;
      } else {
        tmp61 = cResult[27];
      }
      if (cResult[28] !== collapsibleFloatingActionButtonState) {
        const obj30 = { icon: AssetRegistryDefault4, onPress: tmp61, positionBottom: 32, text: "Floating Action Button", state: collapsibleFloatingActionButtonState };
        const CollapsibleFloatingActionButton = native2.CollapsibleFloatingActionButton;
        const tmp64 = metroRequire(CollapsibleFloatingActionButton, obj30);
        cResult[28] = collapsibleFloatingActionButtonState;
        cResult[29] = tmp64;
        tmp62 = tmp64;
      } else {
        tmp62 = cResult[29];
      }
      if (cResult[30] === tmp57) {
        let tmp65;
        if (cResult[31] === tmp62) {
          tmp65 = cResult[32];
        }
        return tmp65;
      }
      const obj31 = { children: items3 };
      items3 = [tmp57, tmp62];
      const tmp68 = metroImportDefault(_false, obj31);
      cResult[30] = tmp57;
      cResult[31] = tmp62;
      cResult[32] = tmp68;
      tmp65 = tmp68;
    }
    const obj32 = { onScroll: collapsibleFloatingActionButtonScroll, children: tmp55 };
    const tmp60 = metroRequire(React3, obj32);
    cResult[24] = collapsibleFloatingActionButtonScroll;
    cResult[25] = tmp55;
    cResult[26] = tmp60;
    tmp57 = tmp60;
  }
  const obj33 = { spacing: nativeDefault.space.PX_24, style: tmp8, children: items4 };
  const Stack2 = Stack_Stack.Stack;
  items4 = [tmp10, tmp17, tmp24, tmp34, tmp38, tmp46, tmp51];
  const tmp56 = metroImportDefault(Stack2, obj33);
  cResult[21] = tmp8;
  cResult[22] = tmp34;
  cResult[23] = tmp56;
  tmp55 = tmp56;
}) : (() => {
  let HeaderButton;
  let PressableScale;
  let RowButton;
  let Stack;
  let Stack2;
  let TwinButtons;
  let items;
  let items1;
  let items2;
  let items3;
  let obj10;
  let obj12;
  let obj16;
  let obj20;
  let obj21;
  let obj22;
  let obj25;
  let obj26;
  let obj6;
  let obj8;
  let obj9;
  let tmp3;
  const obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const obj2 = native2;
  const collapsibleFloatingActionButtonState = obj2.useCollapsibleFloatingActionButtonState();
  const obj4 = { children: items3 };
  const obj3 = native2;
  const obj5 = { onScroll: obj3.useCollapsibleFloatingActionButtonScroll(collapsibleFloatingActionButtonState), children: metroImportDefault(Stack, obj6) };
  obj6 = { spacing: nativeDefault.space.PX_24, style: { paddingHorizontal: token }, children: items };
  Stack = Stack_Stack.Stack;
  const obj7 = { title: "Header Button", description: "A specialized version of the 'secondary-overlay' Button which functions as both a Header and a button.", hasIcons: false, children: metroRequire(_false, obj8) };
  obj8 = { style: obj9, children: metroRequire(HeaderButton, obj10) };
  obj9 = { alignItems: "center", backgroundColor: nativeDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1, paddingVertical: nativeDefault.space.PX_48 };
  const TableRowGroup = TableRowGroup7.TableRowGroup;
  obj10 = {
    onPress() {

    },
    text: "Channel Name",
    icon: AssetRegistryDefault2,
    iconPosition: "end",
    accessibilityHint: "double-tap for more options",
    iconOpticalOffsetMargin: -6
  };
  HeaderButton = native2.HeaderButton;
  items = [metroRequire(TableRowGroup, obj7), , , , , , ];
  const obj11 = { title: "Input Button", description: "A specialized button which looks like a text field, but functions as a button.", hasIcons: false, children: metroImportDefault(Stack2, obj12) };
  const TableRowGroup2 = TableRowGroup7.TableRowGroup;
  obj12 = { spacing: nativeDefault.space.PX_24, children: items1 };
  Stack2 = Stack_Stack.Stack;
  const obj13 = {
    onPress() {

    },
    size: "lg",
    text: "Search",
    icon: AssetRegistryDefault3,
    round: true
  };
  const InputButton = native2.InputButton;
  items1 = [metroRequire(InputButton, obj13), ];
  const obj14 = {
    onPress() {

    },
    size: "lg",
    text: "http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    icon: AssetRegistryDefault,
    iconPosition: "end",
    accessibilityLabel: "Copy, http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  };
  const InputButton2 = native2.InputButton;
  items1[1] = metroRequire(InputButton2, obj14);
  items[1] = metroRequire(TableRowGroup2, obj11);
  const obj15 = { title: "Twin Buttons", description: "TwinButtons is a specialized layout component, which renders two text buttons horizontally next to each other. A horizontal layout for text buttons is often problematic, since internationalization and font size settings can easily render these buttons unreadable. But TwinButtons will force the two buttons to stack vertically under certain conditions to avoid these issues.", hasIcons: false, children: metroImportDefault(TwinButtons, obj16) };
  const TableRowGroup3 = TableRowGroup7.TableRowGroup;
  obj16 = { children: items2 };
  TwinButtons = native2.TwinButtons;
  items2 = [, ];
  const obj17 = {
    onPress() {

    },
    text: "Add Status"
  };
  items2[0] = metroRequire(components_Button_Button.Button, obj17);
  const obj18 = {
    onPress() {

    },
    text: "Edit Profile"
  };
  items2[1] = metroRequire(components_Button_Button.Button, obj18);
  items[2] = metroRequire(TableRowGroup3, obj15);
  const obj19 = { title: "PressableScale", description: "If no button in our catelog of components is compatible with a particular design, then PressableScale can fill some gaps. It will apply the same onPress animation to a custom button.", hasIcons: false, children: metroRequire(_false, obj20) };
  obj20 = { style: { padding: token }, children: metroRequire(PressableScale, obj21) };
  const TableRowGroup4 = TableRowGroup7.TableRowGroup;
  obj21 = {
    onPress() {

    },
    children: metroRequire(_false, obj22)
  };
  obj22 = { style: { borderColor: "pink", borderWidth: 1, borderRadius: 8, padding: 12 }, children: metroRequire(Text_Text.Text, { variant: "text-md/semibold", children: "This is a custom button" }) };
  PressableScale = native2.PressableScale;
  items[3] = metroRequire(TableRowGroup4, obj19);
  const obj23 = { title: "Experimental Blur Background Row Button", description: "Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page.", hasIcons: false, children: metroRequire(_false, {}) };
  const TableRowGroup5 = TableRowGroup7.TableRowGroup;
  items[4] = metroRequire(TableRowGroup5, obj23);
  const obj24 = { theme: ThemeTypes.DARK, children: metroRequire(tmp3, obj25) };
  const ThemeContextProvider = native.ThemeContextProvider;
  obj25 = { style: { padding: 16 }, start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: ["red", "orange", "yellow", "green", "teal", "blue", "purple"], children: metroRequire(RowButton, obj26) };
  obj26 = {
    icon: AssetRegistryDefault4,
    label: "Row Button",
    subLabel: "With a blur background",
    experimental_withBlurBackground: true,
    onPress() {

    }
  };
  tmp3 = LinearGradientDefault;
  RowButton = RowButton2.RowButton;
  items[5] = metroRequire(ThemeContextProvider, obj24);
  const obj27 = { title: "Collapsible Floating Action Button", description: "A variation of the FloatingActionButton which will display some text until the user scrolls. We currently recommend the use of the FloatingActionButton over the CollapsibleFloatingActionButton, as a singular icon button without animation is more compact, understandable, and predictable.", hasIcons: false, children: metroRequire(_false, { style: { padding: 48 } }) };
  const TableRowGroup6 = TableRowGroup7.TableRowGroup;
  items[6] = metroRequire(TableRowGroup6, obj27);
  items3 = [metroRequire(React3, obj5), ];
  const obj28 = {
    icon: AssetRegistryDefault4,
    onPress() {

    },
    positionBottom: 32,
    text: "Floating Action Button",
    state: collapsibleFloatingActionButtonState
  };
  const CollapsibleFloatingActionButton = native2.CollapsibleFloatingActionButton;
  items3[1] = metroRequire(CollapsibleFloatingActionButton, obj28);
  return metroImportDefault(_false, obj4);
});
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemExperimentalButtons.tsx");

export default tmp5;
// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemExperimentalButtons.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import _modDef4850 from "../../../../../_runtime/metro/04850__.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import LinearGradientDefault from "../../../../../_runtime/05612_LinearGradient.js";
import _modDef6008 from "../../../../../_runtime/metro/06008__.js";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import _modDef6556 from "../../../../../_runtime/metro/06556__.js";
import _modDef6894 from "../../../../../_runtime/metro/06894__.js";
import native2 from "../../../../design/components/experimental/native.tsx";
import RowButton from "../../../../design/components/TableRow/native/RowButton.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemExperimentalButtons.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(33);
      const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
      const collapsibleFloatingActionButtonState = native2.useCollapsibleFloatingActionButtonState();
      const collapsibleFloatingActionButtonScroll = native2.useCollapsibleFloatingActionButtonScroll(
        collapsibleFloatingActionButtonState,
      );
      if (cResult[0] !== token) {
        const obj5 = { paddingHorizontal: token };
        cResult[0] = token;
        cResult[1] = obj5;
        let tmp8 = obj5;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = {
          alignItems: "center",
          backgroundColor: nativeDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1,
          paddingVertical: nativeDefault.space.PX_48,
        };
        cResult[2] = obj6;
        let tmp9 = obj6;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = {
          title: "Header Button",
          description:
            "A specialized version of the 'secondary-overlay' Button which functions as both a Header and a button.",
          hasIcons: false,
          children: null,
        };
        const obj8 = { style: tmp9, children: null };
        const obj9 = {
          onPress() {},
          text: "Channel Name",
          icon: _modDef6008,
          iconPosition: "end",
          accessibilityHint: "double-tap for more options",
          iconOpticalOffsetMargin: -6,
        };
        obj8.children = timestampProducer(native2.HeaderButton, obj9);
        obj7.children = timestampProducer(React3, obj8);
        const tmp13 = timestampProducer(TableRowGroup.TableRowGroup, obj7);
        cResult[3] = tmp13;
        let tmp10 = tmp13;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj10 = {
          onPress() {},
          size: "lg",
          text: "Search",
          icon: _modDef6556,
          round: true,
        };
        const tmp16 = timestampProducer(native2.InputButton, obj10);
        cResult[4] = tmp16;
        let tmp14 = tmp16;
      } else {
        tmp14 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj11 = {
          title: "Input Button",
          description: "A specialized button which looks like a text field, but functions as a button.",
          hasIcons: false,
          children: null,
        };
        const obj12 = { spacing: nativeDefault.space.PX_24, children: null };
        const items = [tmp14];
        const obj13 = {
          onPress() {},
          size: "lg",
          text: "http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          icon: _modDef4850,
          iconPosition: "end",
          accessibilityLabel: "Copy, http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        };
        items[1] = timestampProducer(native2.InputButton, obj13);
        obj12.children = items;
        obj11.children = React5(Stack_Stack.Stack, obj12);
        const tmp20 = timestampProducer(TableRowGroup.TableRowGroup, obj11);
        cResult[5] = tmp20;
        let tmp17 = tmp20;
      } else {
        tmp17 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj14 = {
          onPress() {},
          text: "Add Status",
        };
        const tmp23 = timestampProducer(components_Button_Button.Button, obj14);
        cResult[6] = tmp23;
        let tmp21 = tmp23;
      } else {
        tmp21 = cResult[6];
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const obj15 = {
          title: "Twin Buttons",
          description:
            "TwinButtons is a specialized layout component, which renders two text buttons horizontally next to each other. A horizontal layout for text buttons is often problematic, since internationalization and font size settings can easily render these buttons unreadable. But TwinButtons will force the two buttons to stack vertically under certain conditions to avoid these issues.",
          hasIcons: false,
          children: null,
        };
        const obj16 = { children: null };
        const items1 = [tmp21];
        const obj17 = {
          onPress() {},
          text: "Edit Profile",
        };
        items1[1] = timestampProducer(components_Button_Button.Button, obj17);
        obj16.children = items1;
        obj15.children = React5(native2.TwinButtons, obj16);
        const tmp27 = timestampProducer(TableRowGroup.TableRowGroup, obj15);
        cResult[7] = tmp27;
        let tmp24 = tmp27;
      } else {
        tmp24 = cResult[7];
      }
      if (cResult[8] !== token) {
        const obj18 = { padding: token };
        cResult[8] = token;
        cResult[9] = obj18;
        let tmp28 = obj18;
      } else {
        tmp28 = cResult[9];
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function w() {};
        cResult[10] = fn;
        let tmp29 = fn;
      } else {
        tmp29 = cResult[10];
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const obj19 = { onPress: tmp29, children: null };
        const obj20 = {
          style: { borderColor: "pink", borderWidth: 1, borderRadius: 8, padding: 12 },
          children: timestampProducer(Text_Text.Text, {
            variant: "text-md/semibold",
            children: "This is a custom button",
          }),
        };
        obj19.children = timestampProducer(React3, obj20);
        const tmp33 = timestampProducer(native2.PressableScale, obj19);
        cResult[11] = tmp33;
        let tmp30 = tmp33;
      } else {
        tmp30 = cResult[11];
      }
      if (cResult[12] !== tmp28) {
        const obj21 = {
          title: "PressableScale",
          description:
            "If no button in our catelog of components is compatible with a particular design, then PressableScale can fill some gaps. It will apply the same onPress animation to a custom button.",
          hasIcons: false,
          children: null,
        };
        const obj22 = { style: tmp28, children: tmp30 };
        obj21.children = timestampProducer(React3, obj22);
        const tmp37 = timestampProducer(TableRowGroup.TableRowGroup, obj21);
        cResult[12] = tmp28;
        cResult[13] = tmp37;
        let tmp34 = tmp37;
      } else {
        tmp34 = cResult[13];
      }
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const obj23 = {
          title: "Experimental Blur Background Row Button",
          description:
            "Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page.",
          hasIcons: false,
          children: timestampProducer(React3, {}),
        };
        const tmp41 = timestampProducer(TableRowGroup.TableRowGroup, obj23);
        cResult[14] = tmp41;
        let tmp38 = tmp41;
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
        let tmp45 = items2;
        let tmp44 = point1;
        let tmp43 = point;
        let tmp42 = obj24;
      } else {
        tmp42 = cResult[15];
        tmp43 = cResult[16];
        tmp44 = cResult[17];
        tmp45 = cResult[18];
      }
      if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
        const obj25 = { theme: ThemeTypes.DARK, children: null };
        const obj26 = { style: tmp42, start: tmp43, end: tmp44, colors: tmp45, children: null };
        const obj27 = {
          icon: _modDef6894,
          label: "Row Button",
          subLabel: "With a blur background",
          experimental_withBlurBackground: true,
          onPress() {},
        };
        obj26.children = timestampProducer(RowButton.RowButton, obj27);
        obj25.children = timestampProducer(LinearGradientDefault, obj26);
        const tmp50 = timestampProducer(native.ThemeContextProvider, obj25);
        cResult[19] = tmp50;
        let tmp46 = tmp50;
        const tmp4Result = LinearGradientDefault;
      } else {
        tmp46 = cResult[19];
      }
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        const obj28 = {
          title: "Collapsible Floating Action Button",
          description:
            "A variation of the FloatingActionButton which will display some text until the user scrolls. We currently recommend the use of the FloatingActionButton over the CollapsibleFloatingActionButton, as a singular icon button without animation is more compact, understandable, and predictable.",
          hasIcons: false,
          children: null,
        };
        const obj29 = { style: { padding: 48 } };
        obj28.children = timestampProducer(React3, obj29);
        const tmp54 = timestampProducer(TableRowGroup.TableRowGroup, obj28);
        cResult[20] = tmp54;
        let tmp51 = tmp54;
      } else {
        tmp51 = cResult[20];
      }
      if (cResult[21] === tmp8) {
        if (cResult[22] === tmp34) {
          let tmp55 = cResult[23];
        }
        if (cResult[24] === collapsibleFloatingActionButtonScroll) {
          if (cResult[25] === tmp55) {
            let tmp57 = cResult[26];
          }
          const _Symbol = Symbol;
          if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
            const fn2 = function z() {};
            cResult[27] = fn2;
            let tmp61 = fn2;
          } else {
            tmp61 = cResult[27];
          }
          if (cResult[28] !== collapsibleFloatingActionButtonState) {
            const obj30 = {
              icon: _modDef6894,
              onPress: tmp61,
              positionBottom: 32,
              text: "Floating Action Button",
              state: collapsibleFloatingActionButtonState,
            };
            const tmp64 = timestampProducer(native2.CollapsibleFloatingActionButton, obj30);
            cResult[28] = collapsibleFloatingActionButtonState;
            cResult[29] = tmp64;
            let tmp62 = tmp64;
          } else {
            tmp62 = cResult[29];
          }
          if (cResult[30] === tmp57) {
            if (cResult[31] === tmp62) {
              let tmp65 = cResult[32];
            }
            return tmp65;
          }
          const obj31 = { children: null };
          const items3 = [tmp57, tmp62];
          obj31.children = items3;
          const tmp68 = React5(React3, obj31);
          cResult[30] = tmp57;
          cResult[31] = tmp62;
          cResult[32] = tmp68;
          tmp65 = tmp68;
        }
        const obj32 = { onScroll: collapsibleFloatingActionButtonScroll, children: tmp55 };
        const tmp60 = timestampProducer(React4, obj32);
        cResult[24] = collapsibleFloatingActionButtonScroll;
        cResult[25] = tmp55;
        cResult[26] = tmp60;
        tmp57 = tmp60;
      }
      const obj33 = { spacing: nativeDefault.space.PX_24, style: tmp8, children: null };
      const items4 = [tmp10, tmp17, tmp24, tmp34, tmp38, tmp46, tmp51];
      obj33.children = items4;
      const tmp56 = React5(Stack_Stack.Stack, obj33);
      cResult[21] = tmp8;
      cResult[22] = tmp34;
      cResult[23] = tmp56;
      tmp55 = tmp56;
    }
  : () => {
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
        icon: _modDef6008,
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
        icon: _modDef6008,
        iconPosition: "end",
        accessibilityHint: "double-tap for more options",
        iconOpticalOffsetMargin: -6,
      };
      const items1 = [
        timestampProducer(native2.InputButton, {
          onPress() {},
          size: "lg",
          text: "Search",
          icon: _modDef6556,
          round: true,
        }),
      ];
      const obj13 = {
        onPress() {},
        size: "lg",
        text: "Search",
        icon: _modDef6556,
        round: true,
      };
      items1[1] = timestampProducer(native2.InputButton, {
        onPress() {},
        size: "lg",
        text: "http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        icon: _modDef4850,
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
        icon: _modDef4850,
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
        children: timestampProducer(Text_Text.Text, {
          variant: "text-md/semibold",
          children: "This is a custom button",
        }),
      });
      obj20.children = timestampProducer(native2.PressableScale, obj21);
      obj19.children = timestampProducer(React3, obj20);
      items[3] = timestampProducer(TableRowGroup.TableRowGroup, obj19);
      const obj22 = {
        style: { borderColor: "pink", borderWidth: 1, borderRadius: 8, padding: 12 },
        children: timestampProducer(Text_Text.Text, {
          variant: "text-md/semibold",
          children: "This is a custom button",
        }),
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
        icon: _modDef6894,
        label: "Row Button",
        subLabel: "With a blur background",
        experimental_withBlurBackground: true,
        onPress() {},
      });
      obj24.children = timestampProducer(tmp3, obj25);
      items[5] = timestampProducer(native.ThemeContextProvider, obj24);
      const obj26 = {
        icon: _modDef6894,
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
        icon: _modDef6894,
        onPress() {},
        positionBottom: 32,
        text: "Floating Action Button",
        state: collapsibleFloatingActionButtonState,
      });
      obj4.children = items3;
      return React5(React3, obj4);
    };

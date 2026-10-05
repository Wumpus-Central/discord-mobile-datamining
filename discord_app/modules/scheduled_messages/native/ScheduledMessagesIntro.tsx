// discord_app/modules/scheduled_messages/native/ScheduledMessagesIntro.tsx
import react from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl6 from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AttachmentIcon from "../../../design/components/Icon/native/redesign/generated/AttachmentIcon.tsx";
import PlusLargeIcon2 from "../../../design/components/Icon/native/redesign/generated/PlusLargeIcon.tsx";
import CalendarPlusIcon from "../../../design/components/Icon/native/redesign/generated/CalendarPlusIcon.tsx";
import AssetRegistryDefault from "../../../../_runtime/11849_AssetRegistry.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
({ Image: c3, ScrollView: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  scrollView: { flex: 1 },
  pageContainer: obj2,
  container: { alignItems: "center" },
  upsellImage: size,
  textContainer: obj3,
  text: { textAlign: "center" },
  demo: obj4,
  menu: obj5,
  menuRow: obj6,
  menuRowHighlighted: obj7,
  menuDivider: obj8,
  chatInput: obj9,
  plusButton: size1,
};
obj2 = {
  alignItems: "center",
  flexGrow: 1,
  justifyContent: "center",
  paddingBottom: nativeDefault.space.PX_32,
  paddingHorizontal: nativeDefault.space.PX_32,
};
createStyles = createStyles.createStyles;
size = { height: 144, marginBottom: nativeDefault.space.PX_16, width: 180 };
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = {
  alignSelf: "stretch",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderColor: nativeDefault.colors.BORDER_NORMAL,
  borderRadius: nativeDefault.radii.md,
  borderWidth: 1,
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_24,
  overflow: "hidden",
  padding: nativeDefault.space.PX_12,
};
obj5 = {
  alignSelf: "flex-start",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
};
obj6 = {
  alignItems: "center",
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_8,
};
obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj8 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1 };
obj9 = {
  alignItems: "center",
  backgroundColor: nativeDefault.colors.CHAT_INPUT_BACKGROUND,
  borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_BORDER_RADIUS,
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
};
size1 = {
  alignItems: "center",
  backgroundColor: nativeDefault.colors.CHAT_INPUT_ACTION_BUTTON_BACKGROUND,
  borderRadius: nativeDefault.radii.round,
  height: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE,
  justifyContent: "center",
  width: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE,
};
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let container;
      let intl3;
      let intl4;
      let intl5;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let pageContainer;
      let scrollView;
      let text;
      let textContainer;
      let tmp10;
      let tmp12;
      let tmp15;
      let tmp17;
      let tmp5;
      const obj = react;
      const cResult = obj.c(39);
      const tmp4 = closure_8();
      ({ scrollView, pageContainer, container } = tmp4);
      if (cResult[0] !== tmp4.upsellImage) {
        const obj2 = { source: AssetRegistryDefault, style: tmp4.upsellImage };
        const tmp9 = metroRequire(_false, obj2);
        cResult[0] = tmp4.upsellImage;
        cResult[1] = tmp9;
        tmp5 = tmp9;
      } else {
        tmp5 = cResult[1];
      }
      ({ textContainer, text } = tmp4);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl6.intl;
        const stringResult = intl.string(intl6.t["C/j9NE"]);
        cResult[2] = stringResult;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] !== tmp4.text) {
        const obj3 = {
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          style: text,
          children: tmp10,
        };
        const tmp14 = metroRequire(Text_Text.Heading, obj3);
        cResult[3] = tmp4.text;
        cResult[4] = tmp14;
        tmp12 = tmp14;
      } else {
        tmp12 = cResult[4];
      }
      const text2 = tmp4.text;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl6.intl;
        const formatResult = intl2.format(intl6.t.PqmI8J, {});
        cResult[5] = formatResult;
        tmp15 = formatResult;
      } else {
        tmp15 = cResult[5];
      }
      if (cResult[6] !== tmp4.text) {
        const obj4 = {
          variant: "text-sm/medium",
          color: "text-default",
          style: text2,
          includeFontPadding: true,
          children: tmp15,
        };
        const tmp19 = metroRequire(Text_Text.Text, obj4);
        cResult[6] = tmp4.text;
        cResult[7] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[7];
      }
      if (cResult[8] === tmp4.textContainer) {
        if (cResult[9] === tmp17) {
          let tmp20;
          let tmp22;
          let tmp26;
          let tmp30;
          if (cResult[10] === tmp12) {
            tmp20 = cResult[11];
          }
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = {
              icon: AttachmentIcon.AttachmentIcon,
              label: intl3.string(intl6.t["8Hvr3+"]),
              highlighted: false,
            };
            intl3 = intl6.intl;
            const tmp25 = metroRequire(closure_9, obj5);
            cResult[12] = tmp25;
            tmp22 = tmp25;
          } else {
            tmp22 = cResult[12];
          }
          if (cResult[13] !== tmp4.menuDivider) {
            const obj6 = { style: tmp4.menuDivider };
            const tmp29 = metroRequire(hasOwnProperty, obj6);
            cResult[13] = tmp4.menuDivider;
            cResult[14] = tmp29;
            tmp26 = tmp29;
          } else {
            tmp26 = cResult[14];
          }
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const obj7 = {
              icon: CalendarPlusIcon.CalendarPlusIcon,
              label: intl4.string(intl6.t["3+ii4F"]),
              highlighted: true,
            };
            intl4 = intl6.intl;
            const tmp33 = metroRequire(closure_9, obj7);
            cResult[15] = tmp33;
            tmp30 = tmp33;
          } else {
            tmp30 = cResult[15];
          }
          if (cResult[16] === tmp4.menu) {
            let tmp34;
            let tmp38;
            let tmp42;
            let tmp46;
            if (cResult[17] === tmp26) {
              tmp34 = cResult[18];
            }
            const _Symbol3 = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const obj8 = { size: "xs", color: nativeDefault.colors.CHAT_INPUT_ACTION_BUTTON_ICON_DEFAULT_TINT };
              const PlusLargeIcon = PlusLargeIcon2.PlusLargeIcon;
              const tmp41 = metroRequire(PlusLargeIcon, obj8);
              cResult[19] = tmp41;
              tmp38 = tmp41;
            } else {
              tmp38 = cResult[19];
            }
            if (cResult[20] !== tmp4.plusButton) {
              const obj9 = { style: tmp4.plusButton, children: tmp38 };
              const tmp45 = metroRequire(hasOwnProperty, obj9);
              cResult[20] = tmp4.plusButton;
              cResult[21] = tmp45;
              tmp42 = tmp45;
            } else {
              tmp42 = cResult[21];
            }
            const _Symbol4 = Symbol;
            if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
              const obj10 = { variant: "text-sm/normal", color: "text-muted", children: intl5.string(intl6.t.fxxYiB) };
              const Text = Text_Text.Text;
              intl5 = intl6.intl;
              const tmp48 = metroRequire(Text, obj10);
              cResult[22] = tmp48;
              tmp46 = tmp48;
            } else {
              tmp46 = cResult[22];
            }
            if (cResult[23] === tmp4.chatInput) {
              let tmp49;
              if (cResult[24] === tmp42) {
                tmp49 = cResult[25];
              }
              if (cResult[26] === tmp4.demo) {
                if (cResult[27] === tmp34) {
                  let tmp53;
                  if (cResult[28] === tmp49) {
                    tmp53 = cResult[29];
                  }
                  if (cResult[30] === tmp4.container) {
                    if (cResult[31] === tmp20) {
                      if (cResult[32] === tmp53) {
                        let tmp57;
                        if (cResult[33] === tmp5) {
                          tmp57 = cResult[34];
                        }
                        if (cResult[35] === tmp4.pageContainer) {
                          if (cResult[36] === tmp4.scrollView) {
                            let tmp61;
                            if (cResult[37] === tmp57) {
                              tmp61 = cResult[38];
                            }
                            return tmp61;
                          }
                        }
                        const obj11 = { style: scrollView, contentContainerStyle: pageContainer, children: tmp57 };
                        const tmp64 = metroRequire(React3, obj11);
                        cResult[35] = tmp4.pageContainer;
                        cResult[36] = tmp4.scrollView;
                        cResult[37] = tmp57;
                        cResult[38] = tmp64;
                        tmp61 = tmp64;
                      }
                    }
                  }
                  const obj12 = { style: container, children: items };
                  items = [tmp5, tmp20, tmp53];
                  const tmp60 = metroImportDefault(hasOwnProperty, obj12);
                  cResult[30] = tmp4.container;
                  cResult[31] = tmp20;
                  cResult[32] = tmp53;
                  cResult[33] = tmp5;
                  cResult[34] = tmp60;
                  tmp57 = tmp60;
                }
              }
              const obj13 = {
                style: tmp4.demo,
                accessibilityElementsHidden: true,
                importantForAccessibility: "no-hide-descendants",
                children: items1,
              };
              items1 = [tmp34, tmp49];
              const tmp56 = metroImportDefault(hasOwnProperty, obj13);
              cResult[26] = tmp4.demo;
              cResult[27] = tmp34;
              cResult[28] = tmp49;
              cResult[29] = tmp56;
              tmp53 = tmp56;
            }
            const obj14 = { style: tmp4.chatInput, children: items2 };
            items2 = [tmp42, tmp46];
            const tmp52 = metroImportDefault(hasOwnProperty, obj14);
            cResult[23] = tmp4.chatInput;
            cResult[24] = tmp42;
            cResult[25] = tmp52;
            tmp49 = tmp52;
          }
          const obj15 = { style: tmp4.menu, children: items3 };
          items3 = [tmp22, tmp26, tmp30];
          const tmp37 = metroImportDefault(hasOwnProperty, obj15);
          cResult[16] = tmp4.menu;
          cResult[17] = tmp26;
          cResult[18] = tmp37;
          tmp34 = tmp37;
        }
      }
      const obj16 = { style: textContainer, children: items4 };
      items4 = [tmp12, tmp17];
      const tmp21 = metroImportDefault(hasOwnProperty, obj16);
      cResult[8] = tmp4.textContainer;
      cResult[9] = tmp17;
      cResult[10] = tmp12;
      cResult[11] = tmp21;
      tmp20 = tmp21;
    }
  : () => {
      let PlusLargeIcon;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let obj14;
      let obj2;
      const tmp = closure_8();
      const obj = {
        style: tmp.scrollView,
        contentContainerStyle: tmp.pageContainer,
        children: metroImportDefault(hasOwnProperty, obj2),
      };
      obj2 = { style: tmp.container, children: items };
      items = [, ,];
      const obj3 = { source: AssetRegistryDefault, style: tmp.upsellImage };
      items[0] = metroRequire(_false, obj3);
      const obj4 = { style: tmp.textContainer, children: items1 };
      const obj5 = {
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        style: tmp.text,
        children: intl.string(intl6.t["C/j9NE"]),
      };
      const Heading = Text_Text.Heading;
      intl = intl6.intl;
      items1 = [metroRequire(Heading, obj5)];
      const obj6 = {
        variant: "text-sm/medium",
        color: "text-default",
        style: tmp.text,
        includeFontPadding: true,
        children: intl2.format(intl6.t.PqmI8J, {}),
      };
      const Text = Text_Text.Text;
      intl2 = intl6.intl;
      items1[1] = metroRequire(Text, obj6);
      items[1] = metroImportDefault(hasOwnProperty, obj4);
      const obj7 = {
        style: tmp.demo,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: items3,
      };
      const obj8 = { style: tmp.menu, children: items2 };
      const obj9 = { icon: AttachmentIcon.AttachmentIcon, label: intl3.string(intl6.t["8Hvr3+"]), highlighted: false };
      intl3 = intl6.intl;
      items2 = [metroRequire(closure_9, obj9), ,];
      const obj10 = { style: tmp.menuDivider };
      items2[1] = metroRequire(hasOwnProperty, obj10);
      const obj11 = {
        icon: CalendarPlusIcon.CalendarPlusIcon,
        label: intl4.string(intl6.t["3+ii4F"]),
        highlighted: true,
      };
      intl4 = intl6.intl;
      items2[2] = metroRequire(closure_9, obj11);
      items3 = [metroImportDefault(hasOwnProperty, obj8)];
      const obj12 = { style: tmp.chatInput, children: items4 };
      const obj13 = { style: tmp.plusButton, children: metroRequire(PlusLargeIcon, obj14) };
      obj14 = { size: "xs", color: nativeDefault.colors.CHAT_INPUT_ACTION_BUTTON_ICON_DEFAULT_TINT };
      PlusLargeIcon = PlusLargeIcon2.PlusLargeIcon;
      items4 = [metroRequire(hasOwnProperty, obj13)];
      const obj15 = { variant: "text-sm/normal", color: "text-muted", children: intl5.string(intl6.t.fxxYiB) };
      const Text2 = Text_Text.Text;
      intl5 = intl6.intl;
      items4[1] = metroRequire(Text2, obj15);
      items3[1] = metroImportDefault(hasOwnProperty, obj12);
      items[2] = metroImportDefault(hasOwnProperty, obj7);
      return metroRequire(React3, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (highlighted) => {
      let icon;
      let items;
      let label;
      const obj = react;
      const cResult = obj.c(11);
      ({ icon, label } = highlighted);
      highlighted = highlighted.highlighted;
      const tmp4 = closure_8();
      let menuRowHighlighted = null;
      if (highlighted) {
        menuRowHighlighted = tmp4.menuRowHighlighted;
      }
      if (cResult[0] === tmp4.menuRow) {
        let tmp6;
        let tmp7;
        let tmp11;
        if (cResult[1] === menuRowHighlighted) {
          tmp6 = cResult[2];
        }
        if (cResult[3] !== icon) {
          const obj2 = { size: "sm", color: nativeDefault.colors.TEXT_STRONG };
          const tmp10 = metroRequire(icon, obj2);
          cResult[3] = icon;
          cResult[4] = tmp10;
          tmp7 = tmp10;
        } else {
          tmp7 = cResult[4];
        }
        if (cResult[5] !== label) {
          const obj3 = { variant: "text-sm/medium", color: "text-default", children: label };
          const tmp13 = metroRequire(Text_Text.Text, obj3);
          cResult[5] = label;
          cResult[6] = tmp13;
          tmp11 = tmp13;
        } else {
          tmp11 = cResult[6];
        }
        if (cResult[7] === tmp6) {
          if (cResult[8] === tmp7) {
            let tmp14;
            if (cResult[9] === tmp11) {
              tmp14 = cResult[10];
            }
            return tmp14;
          }
        }
        const obj4 = { style: tmp6, children: items };
        items = [tmp7, tmp11];
        const tmp17 = metroImportDefault(hasOwnProperty, obj4);
        cResult[7] = tmp6;
        cResult[8] = tmp7;
        cResult[9] = tmp11;
        cResult[10] = tmp17;
        tmp14 = tmp17;
      }
      const items1 = [tmp4.menuRow, menuRowHighlighted];
      cResult[0] = tmp4.menuRow;
      cResult[1] = menuRowHighlighted;
      cResult[2] = items1;
      tmp6 = items1;
    }
  : (arg0) => {
      let highlighted;
      let icon;
      let items1;
      let label;
      ({ icon, label, highlighted } = arg0);
      const tmp = closure_8();
      const items = [tmp.menuRow];
      let menuRowHighlighted = null;
      if (highlighted) {
        menuRowHighlighted = tmp.menuRowHighlighted;
      }
      const obj = { style: items, children: items1 };
      items[1] = menuRowHighlighted;
      items1 = [,];
      const obj2 = { size: "sm", color: nativeDefault.colors.TEXT_STRONG };
      items1[0] = metroRequire(icon, obj2);
      items1[1] = metroRequire(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: label });
      return metroImportDefault(hasOwnProperty, obj);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessagesIntro.tsx");

export default tmp5;

// discord_app/modules/scheduled_messages/native/ScheduledMessagesIntro.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AttachmentIcon from "../../../design/components/Icon/native/redesign/generated/AttachmentIcon.tsx";
import PlusLargeIcon from "../../../design/components/Icon/native/redesign/generated/PlusLargeIcon.tsx";
import CalendarPlusIcon from "../../../design/components/Icon/native/redesign/generated/CalendarPlusIcon.tsx";
import _modDef11863 from "../../../../_runtime/metro/11863__.js";
import get_ActivityIndicator from "../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import "ReactCompilerGating";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

({ Image: c3, ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = {
  scrollView: { flex: 1 },
  pageContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    paddingBottom: nativeDefault.space.PX_32,
    paddingHorizontal: nativeDefault.space.PX_32,
  },
  container: { alignItems: "center" },
  upsellImage: null,
  textContainer: null,
  text: null,
  demo: null,
  menu: null,
  menuRow: null,
  menuRowHighlighted: null,
  menuDivider: null,
  chatInput: null,
  plusButton: null,
};
let size = { height: 144, marginBottom: nativeDefault.space.PX_16, width: 180 };
obj.upsellImage = size;
let obj2 = {
  alignItems: "center",
  flexGrow: 1,
  justifyContent: "center",
  paddingBottom: nativeDefault.space.PX_32,
  paddingHorizontal: nativeDefault.space.PX_32,
};
obj.textContainer = { gap: nativeDefault.space.PX_8 };
obj.text = { textAlign: "center" };
let obj3 = { gap: nativeDefault.space.PX_8 };
obj.demo = {
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
let obj4 = {
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
obj.menu = {
  alignSelf: "flex-start",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
};
let obj5 = {
  alignSelf: "flex-start",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
};
obj.menuRow = {
  alignItems: "center",
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_8,
};
let obj6 = {
  alignItems: "center",
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_8,
};
obj.menuRowHighlighted = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj.menuDivider = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1 };
let obj8 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1 };
obj.chatInput = {
  alignItems: "center",
  backgroundColor: nativeDefault.colors.CHAT_INPUT_BACKGROUND,
  borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_BORDER_RADIUS,
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
};
const size1 = {
  alignItems: "center",
  backgroundColor: nativeDefault.colors.CHAT_INPUT_ACTION_BUTTON_BACKGROUND,
  borderRadius: nativeDefault.radii.round,
  height: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE,
  justifyContent: "center",
  width: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE,
};
obj.plusButton = size1;
let closure_8 = createStyles.createStyles(obj);
let obj9 = {
  alignItems: "center",
  backgroundColor: nativeDefault.colors.CHAT_INPUT_BACKGROUND,
  borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_BORDER_RADIUS,
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
};
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (highlighted) => {
      const cResult = c.c(11);
      ({ icon, label } = highlighted);
      const tmp4 = closure_8();
      let menuRowHighlighted = null;
      if (highlighted.highlighted) {
        menuRowHighlighted = tmp4.menuRowHighlighted;
      }
      if (cResult[0] === tmp4.menuRow) {
        if (cResult[1] === menuRowHighlighted) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] !== icon) {
          const obj2 = { size: "sm", color: nativeDefault.colors.TEXT_STRONG };
          const tmp10 = timestampProducer(icon, obj2);
          cResult[3] = icon;
          cResult[4] = tmp10;
          let tmp7 = tmp10;
        } else {
          tmp7 = cResult[4];
        }
        if (cResult[5] !== label) {
          const obj3 = { variant: "text-sm/medium", color: "text-default", children: label };
          const tmp13 = timestampProducer(Text_Text.Text, obj3);
          cResult[5] = label;
          cResult[6] = tmp13;
          let tmp11 = tmp13;
        } else {
          tmp11 = cResult[6];
        }
        if (cResult[7] === tmp6) {
          if (cResult[8] === tmp7) {
            if (cResult[9] === tmp11) {
              let tmp14 = cResult[10];
            }
            return tmp14;
          }
        }
        const obj4 = { style: tmp6, children: null };
        const items = [tmp7, tmp11];
        obj4.children = items;
        const tmp17 = React5(hasOwnProperty, obj4);
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
      ({ icon, label, highlighted } = arg0);
      const tmp = closure_8();
      const items = [tmp.menuRow];
      let menuRowHighlighted = null;
      if (highlighted) {
        menuRowHighlighted = tmp.menuRowHighlighted;
      }
      const obj = { style: items, children: null };
      items[1] = menuRowHighlighted;
      const items1 = [
        timestampProducer(icon, { size: "sm", color: nativeDefault.colors.TEXT_STRONG }),
        timestampProducer(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: label }),
      ];
      obj.children = items1;
      return React5(hasOwnProperty, obj);
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessagesIntro.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(39);
      const tmp4 = closure_8();
      ({ scrollView, pageContainer, container } = tmp4);
      if (cResult[0] !== tmp4.upsellImage) {
        const obj2 = { source: _modDef11863, style: tmp4.upsellImage };
        const tmp9 = timestampProducer(React3, obj2);
        cResult[0] = tmp4.upsellImage;
        cResult[1] = tmp9;
        let tmp5 = tmp9;
      } else {
        tmp5 = cResult[1];
      }
      ({ textContainer, text } = tmp4);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t["C/j9NE"]);
        cResult[2] = stringResult;
        let tmp10 = stringResult;
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
        const tmp14 = timestampProducer(Text_Text.Heading, obj3);
        cResult[3] = tmp4.text;
        cResult[4] = tmp14;
        let tmp12 = tmp14;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const formatResult = intl2.format(util.t.PqmI8J, {});
        cResult[5] = formatResult;
        let tmp15 = formatResult;
      } else {
        tmp15 = cResult[5];
      }
      if (cResult[6] !== tmp4.text) {
        const obj4 = {
          variant: "text-sm/medium",
          color: "text-default",
          style: tmp4.text,
          includeFontPadding: true,
          children: tmp15,
        };
        const tmp19 = timestampProducer(Text_Text.Text, obj4);
        cResult[6] = tmp4.text;
        cResult[7] = tmp19;
        let tmp17 = tmp19;
      } else {
        tmp17 = cResult[7];
      }
      if (cResult[8] === tmp4.textContainer) {
        if (cResult[9] === tmp17) {
          if (cResult[10] === tmp12) {
            let tmp20 = cResult[11];
          }
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = { icon: AttachmentIcon.AttachmentIcon, label: null, highlighted: false };
            const intl3 = util.intl;
            obj5.label = intl3.string(util.t["8Hvr3+"]);
            const tmp25 = timestampProducer(closure_9, obj5);
            cResult[12] = tmp25;
            let tmp22 = tmp25;
          } else {
            tmp22 = cResult[12];
          }
          if (cResult[13] !== tmp4.menuDivider) {
            const obj6 = { style: tmp4.menuDivider };
            const tmp29 = timestampProducer(hasOwnProperty, obj6);
            cResult[13] = tmp4.menuDivider;
            cResult[14] = tmp29;
            let tmp26 = tmp29;
          } else {
            tmp26 = cResult[14];
          }
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const obj7 = { icon: CalendarPlusIcon.CalendarPlusIcon, label: null, highlighted: true };
            const intl4 = util.intl;
            obj7.label = intl4.string(util.t["3+ii4F"]);
            const tmp33 = timestampProducer(closure_9, obj7);
            cResult[15] = tmp33;
            let tmp30 = tmp33;
          } else {
            tmp30 = cResult[15];
          }
          if (cResult[16] === tmp4.menu) {
            if (cResult[17] === tmp26) {
              let tmp34 = cResult[18];
            }
            const _Symbol3 = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const obj8 = { size: "xs", color: nativeDefault.colors.CHAT_INPUT_ACTION_BUTTON_ICON_DEFAULT_TINT };
              const tmp41 = timestampProducer(PlusLargeIcon.PlusLargeIcon, obj8);
              cResult[19] = tmp41;
              let tmp38 = tmp41;
            } else {
              tmp38 = cResult[19];
            }
            if (cResult[20] !== tmp4.plusButton) {
              const obj9 = { style: tmp4.plusButton, children: tmp38 };
              const tmp45 = timestampProducer(hasOwnProperty, obj9);
              cResult[20] = tmp4.plusButton;
              cResult[21] = tmp45;
              let tmp42 = tmp45;
            } else {
              tmp42 = cResult[21];
            }
            const _Symbol4 = Symbol;
            if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
              const obj10 = { variant: "text-sm/normal", color: "text-muted", children: null };
              const intl5 = util.intl;
              obj10.children = intl5.string(util.t.fxxYiB);
              const tmp48 = timestampProducer(Text_Text.Text, obj10);
              cResult[22] = tmp48;
              let tmp46 = tmp48;
            } else {
              tmp46 = cResult[22];
            }
            if (cResult[23] === tmp4.chatInput) {
              if (cResult[24] === tmp42) {
                let tmp49 = cResult[25];
              }
              if (cResult[26] === tmp4.demo) {
                if (cResult[27] === tmp34) {
                  if (cResult[28] === tmp49) {
                    let tmp53 = cResult[29];
                  }
                  if (cResult[30] === tmp4.container) {
                    if (cResult[31] === tmp20) {
                      if (cResult[32] === tmp53) {
                        if (cResult[33] === tmp5) {
                          let tmp57 = cResult[34];
                        }
                        if (cResult[35] === tmp4.pageContainer) {
                          if (cResult[36] === tmp4.scrollView) {
                            if (cResult[37] === tmp57) {
                              let tmp61 = cResult[38];
                            }
                            return tmp61;
                          }
                        }
                        const obj11 = { style: scrollView, contentContainerStyle: pageContainer, children: tmp57 };
                        const tmp64 = timestampProducer(React4, obj11);
                        cResult[35] = tmp4.pageContainer;
                        cResult[36] = tmp4.scrollView;
                        cResult[37] = tmp57;
                        cResult[38] = tmp64;
                        tmp61 = tmp64;
                      }
                    }
                  }
                  const obj12 = { style: container, children: null };
                  const items = [tmp5, tmp20, tmp53];
                  obj12.children = items;
                  const tmp60 = React5(hasOwnProperty, obj12);
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
                children: null,
              };
              const items1 = [tmp34, tmp49];
              obj13.children = items1;
              const tmp56 = React5(hasOwnProperty, obj13);
              cResult[26] = tmp4.demo;
              cResult[27] = tmp34;
              cResult[28] = tmp49;
              cResult[29] = tmp56;
              tmp53 = tmp56;
            }
            const obj14 = { style: tmp4.chatInput, children: null };
            const items2 = [tmp42, tmp46];
            obj14.children = items2;
            const tmp52 = React5(hasOwnProperty, obj14);
            cResult[23] = tmp4.chatInput;
            cResult[24] = tmp42;
            cResult[25] = tmp52;
            tmp49 = tmp52;
          }
          const obj15 = { style: tmp4.menu, children: null };
          const items3 = [tmp22, tmp26, tmp30];
          obj15.children = items3;
          const tmp37 = React5(hasOwnProperty, obj15);
          cResult[16] = tmp4.menu;
          cResult[17] = tmp26;
          cResult[18] = tmp37;
          tmp34 = tmp37;
        }
      }
      const obj16 = { style: textContainer, children: null };
      const items4 = [tmp12, tmp17];
      obj16.children = items4;
      const tmp21 = React5(hasOwnProperty, obj16);
      cResult[8] = tmp4.textContainer;
      cResult[9] = tmp17;
      cResult[10] = tmp12;
      cResult[11] = tmp21;
      tmp20 = tmp21;
    }
  : () => {
      const tmp = closure_8();
      const obj = { style: tmp.scrollView, contentContainerStyle: tmp.pageContainer, children: null };
      const obj2 = { style: tmp.container, children: null };
      const items = [timestampProducer(React3, { source: _modDef11863, style: tmp.upsellImage }), ,];
      const obj4 = { style: tmp.textContainer, children: null };
      const obj5 = {
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        style: tmp.text,
        children: null,
      };
      const intl = util.intl;
      obj5.children = intl.string(util.t["C/j9NE"]);
      const items1 = [timestampProducer(Text_Text.Heading, obj5)];
      const obj6 = {
        variant: "text-sm/medium",
        color: "text-default",
        style: tmp.text,
        includeFontPadding: true,
        children: null,
      };
      const intl2 = util.intl;
      obj6.children = intl2.format(util.t.PqmI8J, {});
      items1[1] = timestampProducer(Text_Text.Text, obj6);
      obj4.children = items1;
      items[1] = React5(hasOwnProperty, obj4);
      const obj7 = {
        style: tmp.demo,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: null,
      };
      const obj8 = { style: tmp.menu, children: null };
      const obj9 = { icon: AttachmentIcon.AttachmentIcon, label: null, highlighted: false };
      const intl3 = util.intl;
      obj9.label = intl3.string(util.t["8Hvr3+"]);
      const items2 = [
        timestampProducer(closure_9, obj9),
        timestampProducer(hasOwnProperty, { style: tmp.menuDivider }),
      ];
      const obj11 = { icon: CalendarPlusIcon.CalendarPlusIcon, label: null, highlighted: true };
      const intl4 = util.intl;
      obj11.label = intl4.string(util.t["3+ii4F"]);
      items2[2] = timestampProducer(closure_9, obj11);
      obj8.children = items2;
      const items3 = [React5(hasOwnProperty, obj8)];
      const obj12 = { style: tmp.chatInput, children: null };
      const obj13 = { style: tmp.plusButton, children: null };
      const obj10 = { style: tmp.menuDivider };
      const obj3 = { source: _modDef11863, style: tmp.upsellImage };
      obj13.children = timestampProducer(PlusLargeIcon.PlusLargeIcon, {
        size: "xs",
        color: nativeDefault.colors.CHAT_INPUT_ACTION_BUTTON_ICON_DEFAULT_TINT,
      });
      const items4 = [timestampProducer(hasOwnProperty, obj13)];
      const obj15 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl5 = util.intl;
      obj15.children = intl5.string(util.t.fxxYiB);
      items4[1] = timestampProducer(Text_Text.Text, obj15);
      obj12.children = items4;
      items3[1] = React5(hasOwnProperty, obj12);
      obj7.children = items3;
      items[2] = React5(hasOwnProperty, obj7);
      obj2.children = items;
      obj.children = React5(hasOwnProperty, obj2);
      return timestampProducer(React4, obj);
    };

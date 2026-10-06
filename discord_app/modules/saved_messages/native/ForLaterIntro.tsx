// discord_app/modules/saved_messages/native/ForLaterIntro.tsx
import react from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl7 from "../../../intl/index.native.tsx";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ActionSheetConstants from "../../action_sheet/native/ActionSheetConstants.tsx";
import ChevronSmallRightIcon2 from "../../../design/components/Icon/native/redesign/generated/ChevronSmallRightIcon.tsx";
import SavedMessagesTypes from "../SavedMessagesTypes.tsx";
import BookmarkIcon from "../../../design/components/Icon/native/redesign/generated/BookmarkIcon.tsx";
import _modDef13154 from "../../../../discord_assets/assets/premium/wumpus-avatar.png.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let isReminder, type;

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
let size2;
({ Image: c3, ScrollView: closure_4, View: hasOwnProperty } = react_native);
const ACTION_SHEET_BORDER_RADIUS = ActionSheetConstants.ACTION_SHEET_BORDER_RADIUS;
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
  messages: obj5,
  avatar: size1,
  messageLines: obj6,
  sheet: obj7,
  grabber: size2,
  sheetRow: obj8,
  sheetRowHighlighted: obj9,
  sheetRowLabel: { flex: 1 },
};
obj2 = {
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_32,
  paddingBottom: nativeDefault.space.PX_32,
};
createStyles = createStyles.createStyles;
size = { width: 180, height: 144, marginBottom: nativeDefault.space.PX_16 };
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = {
  alignSelf: "stretch",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderColor: nativeDefault.colors.BORDER_NORMAL,
  borderRadius: nativeDefault.radii.md,
  borderWidth: 1,
  marginTop: nativeDefault.space.PX_24,
  overflow: "hidden",
};
obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12 };
size1 = { width: 32, height: 32, borderRadius: nativeDefault.radii.round };
obj6 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj7 = {
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  borderTopLeftRadius: ACTION_SHEET_BORDER_RADIUS,
  borderTopRightRadius: ACTION_SHEET_BORDER_RADIUS,
  marginInline: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_8,
};
size2 = {
  alignSelf: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  borderRadius: nativeDefault.radii.round,
  height: 4,
  marginVertical: nativeDefault.space.PX_8,
  width: 36,
};
obj8 = {
  alignItems: "center",
  borderRadius: nativeDefault.radii.sm,
  flexDirection: "row",
  gap: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_12,
};
obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (type) => {
      let container;
      let items;
      let items1;
      let pageContainer;
      let scrollView;
      let text;
      let textContainer;
      const obj = react;
      const cResult = obj.c(28);
      type = type.type;
      const tmp4 = closure_8();
      const tmp5 = type === SavedMessagesTypes.SavedMessageSortTypes.REMINDER;
      ({ scrollView, pageContainer, container } = tmp4);
      const tmp6 = importDefault(tmp5 ? 13152 : 13153);
      if (cResult[0] === tmp4.upsellImage) {
        let tmp7;
        let tmp9;
        if (cResult[1] === tmp6) {
          tmp7 = cResult[2];
        }
        ({ textContainer, text } = tmp4);
        if (cResult[3] !== tmp5) {
          const intl = intl7.intl;
          const string = intl.string;
          const t = intl7.t;
          const stringResult = string(tmp5 ? t["5Iw19e"] : t["93WOd1"]);
          cResult[3] = tmp5;
          cResult[4] = stringResult;
          tmp9 = stringResult;
        } else {
          tmp9 = cResult[4];
        }
        if (cResult[5] === tmp4.text) {
          let tmp11;
          let tmp14;
          if (cResult[6] === tmp9) {
            tmp11 = cResult[7];
          }
          const text2 = tmp4.text;
          if (cResult[8] !== tmp5) {
            const intl2 = intl7.intl;
            const format = intl2.format;
            const t2 = intl7.t;
            const tmp15 = tmp5 ? t2.YI4UjI : t2["5TSj/g"];
            const intl3 = intl7.intl;
            const string2 = intl3.string;
            const t3 = intl7.t;
            const obj2 = { itemName: string2(tmp5 ? t3.mJ3P0N : t3.tpxJto) };
            const formatResult = format(tmp15, obj2);
            cResult[8] = tmp5;
            cResult[9] = formatResult;
            tmp14 = formatResult;
          } else {
            tmp14 = cResult[9];
          }
          if (cResult[10] === tmp4.text) {
            let tmp17;
            if (cResult[11] === tmp14) {
              tmp17 = cResult[12];
            }
            if (cResult[13] === tmp4.textContainer) {
              if (cResult[14] === tmp17) {
                let tmp20;
                let tmp24;
                if (cResult[15] === tmp11) {
                  tmp20 = cResult[16];
                }
                if (cResult[17] !== tmp5) {
                  const obj3 = { isReminder: tmp5 };
                  const tmp27 = metroRequire(closure_9, obj3);
                  cResult[17] = tmp5;
                  cResult[18] = tmp27;
                  tmp24 = tmp27;
                } else {
                  tmp24 = cResult[18];
                }
                if (cResult[19] === tmp4.container) {
                  if (cResult[20] === tmp20) {
                    if (cResult[21] === tmp24) {
                      let tmp28;
                      if (cResult[22] === tmp7) {
                        tmp28 = cResult[23];
                      }
                      if (cResult[24] === tmp4.pageContainer) {
                        if (cResult[25] === tmp4.scrollView) {
                          let tmp32;
                          if (cResult[26] === tmp28) {
                            tmp32 = cResult[27];
                          }
                          return tmp32;
                        }
                      }
                      const obj4 = { style: scrollView, contentContainerStyle: pageContainer, children: tmp28 };
                      const tmp35 = metroRequire(React3, obj4);
                      cResult[24] = tmp4.pageContainer;
                      cResult[25] = tmp4.scrollView;
                      cResult[26] = tmp28;
                      cResult[27] = tmp35;
                      tmp32 = tmp35;
                    }
                  }
                }
                const obj5 = { style: container, children: items };
                items = [tmp7, tmp20, tmp24];
                const tmp31 = metroImportDefault(hasOwnProperty, obj5);
                cResult[19] = tmp4.container;
                cResult[20] = tmp20;
                cResult[21] = tmp24;
                cResult[22] = tmp7;
                cResult[23] = tmp31;
                tmp28 = tmp31;
              }
            }
            const obj6 = { style: textContainer, children: items1 };
            items1 = [tmp11, tmp17];
            const tmp23 = metroImportDefault(hasOwnProperty, obj6);
            cResult[13] = tmp4.textContainer;
            cResult[14] = tmp17;
            cResult[15] = tmp11;
            cResult[16] = tmp23;
            tmp20 = tmp23;
          }
          const obj7 = {
            variant: "text-sm/medium",
            color: "text-default",
            style: text2,
            includeFontPadding: true,
            children: tmp14,
          };
          const tmp19 = metroRequire(Text_Text.Text, obj7);
          cResult[10] = tmp4.text;
          cResult[11] = tmp14;
          cResult[12] = tmp19;
          tmp17 = tmp19;
        }
        const obj8 = {
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          style: text,
          children: tmp9,
        };
        const tmp13 = metroRequire(Text_Text.Heading, obj8);
        cResult[5] = tmp4.text;
        cResult[6] = tmp9;
        cResult[7] = tmp13;
        tmp11 = tmp13;
      }
      const obj9 = { source: tmp6, style: tmp4.upsellImage };
      const tmp8 = metroRequire(_false, obj9);
      cResult[0] = tmp4.upsellImage;
      cResult[1] = tmp6;
      cResult[2] = tmp8;
      tmp7 = tmp8;
    }
  : (type) => {
      let format;
      let items;
      let items1;
      let obj2;
      let obj7;
      let string;
      let t;
      let tmp10;
      type = type.type;
      const tmp = closure_8();
      const tmp4 = type === SavedMessagesTypes.SavedMessageSortTypes.REMINDER;
      const obj = {
        style: tmp.scrollView,
        contentContainerStyle: tmp.pageContainer,
        children: metroImportDefault(hasOwnProperty, obj2),
      };
      obj2 = { style: tmp.container, children: items };
      items = [, ,];
      const obj3 = { source: importDefault(tmp4 ? 13152 : 13153), style: tmp.upsellImage };
      items[0] = metroRequire(_false, obj3);
      const obj4 = { style: tmp.textContainer, children: items1 };
      const obj5 = {
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        style: tmp.text,
        children: string(tmp4 ? t["5Iw19e"] : t["93WOd1"]),
      };
      const Heading = Text_Text.Heading;
      const intl = intl7.intl;
      string = intl.string;
      t = intl7.t;
      items1 = [metroRequire(Heading, obj5)];
      const obj6 = {
        variant: "text-sm/medium",
        color: "text-default",
        style: tmp.text,
        includeFontPadding: true,
        children: format(tmp10, obj7),
      };
      const Text = Text_Text.Text;
      const intl2 = intl7.intl;
      format = intl2.format;
      const t2 = intl7.t;
      tmp10 = tmp4 ? t2.YI4UjI : t2["5TSj/g"];
      const intl3 = intl7.intl;
      const string2 = intl3.string;
      const t3 = intl7.t;
      obj7 = { itemName: string2(tmp4 ? t3.mJ3P0N : t3.tpxJto) };
      items1[1] = metroRequire(Text, obj6);
      items[1] = metroImportDefault(hasOwnProperty, obj4);
      items[2] = metroRequire(closure_9, { isReminder: tmp4 });
      return metroRequire(React3, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isReminder) => {
      let first;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let items1;
      let items2;
      let items3;
      let tmp11;
      let tmp14;
      let tmp17;
      let tmp20;
      let tmp23;
      let tmp7;
      const obj = react;
      const cResult = obj.c(30);
      isReminder = isReminder.isReminder;
      const tmp4 = closure_8();
      const demo = tmp4.demo;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { uri: _modDef13154 };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.avatar) {
        const obj3 = { source: first, style: tmp4.avatar };
        const tmp10 = metroRequire(_false, obj3);
        cResult[1] = tmp4.avatar;
        cResult[2] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { variant: "text-sm/semibold", color: "text-default", children: intl.string(intl7.t.cqpybK) };
        const Text = Text_Text.Text;
        intl = intl7.intl;
        const tmp13 = metroRequire(Text, obj4);
        cResult[3] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { variant: "text-sm/normal", color: "text-default", children: intl2.string(intl7.t["h+KPxy"]) };
        const Text2 = Text_Text.Text;
        intl2 = intl7.intl;
        const tmp16 = metroRequire(Text2, obj5);
        cResult[4] = tmp16;
        tmp14 = tmp16;
      } else {
        tmp14 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { variant: "text-sm/normal", color: "text-default", children: intl3.string(intl7.t["63EVpI"]) };
        const Text3 = Text_Text.Text;
        intl3 = intl7.intl;
        const tmp19 = metroRequire(Text3, obj6);
        cResult[5] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { variant: "text-sm/normal", color: "text-default", children: intl4.string(intl7.t["KT/TDX"]) };
        const Text4 = Text_Text.Text;
        intl4 = intl7.intl;
        const tmp22 = metroRequire(Text4, obj7);
        cResult[6] = tmp22;
        tmp20 = tmp22;
      } else {
        tmp20 = cResult[6];
      }
      if (cResult[7] !== tmp4.messageLines) {
        const obj8 = { style: tmp4.messageLines, children: items };
        items = [tmp11, tmp14, tmp17, tmp20];
        const tmp26 = metroImportDefault(hasOwnProperty, obj8);
        cResult[7] = tmp4.messageLines;
        cResult[8] = tmp26;
        tmp23 = tmp26;
      } else {
        tmp23 = cResult[8];
      }
      if (cResult[9] === tmp4.messages) {
        if (cResult[10] === tmp7) {
          let tmp27;
          let tmp29;
          let tmp33;
          let tmp36;
          let tmp40;
          let tmp42;
          if (cResult[11] === tmp23) {
            tmp27 = cResult[12];
          }
          const sheet = tmp4.sheet;
          if (cResult[13] !== tmp4.grabber) {
            const obj9 = { style: tmp4.grabber };
            const tmp32 = metroRequire(hasOwnProperty, obj9);
            cResult[13] = tmp4.grabber;
            cResult[14] = tmp32;
            tmp29 = tmp32;
          } else {
            tmp29 = cResult[14];
          }
          const _Symbol = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const intl5 = intl7.intl;
            const stringResult = intl5.string(intl7.t.tpxJto);
            cResult[15] = stringResult;
            tmp33 = stringResult;
          } else {
            tmp33 = cResult[15];
          }
          if (cResult[16] !== !isReminder) {
            const obj10 = { icon: BookmarkIcon.BookmarkIcon, label: tmp33, highlighted: !isReminder };
            const tmp39 = metroRequire(closure_10, obj10);
            cResult[16] = !isReminder;
            cResult[17] = tmp39;
            tmp36 = tmp39;
          } else {
            tmp36 = cResult[17];
          }
          const _Symbol2 = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            const intl6 = intl7.intl;
            const stringResult1 = intl6.string(intl7.t.mJ3P0N);
            cResult[18] = stringResult1;
            tmp40 = stringResult1;
          } else {
            tmp40 = cResult[18];
          }
          if (cResult[19] !== isReminder) {
            const obj11 = { icon: ClockIcon.ClockIcon, label: tmp40, highlighted: isReminder, hasArrow: true };
            const tmp45 = metroRequire(closure_10, obj11);
            cResult[19] = isReminder;
            cResult[20] = tmp45;
            tmp42 = tmp45;
          } else {
            tmp42 = cResult[20];
          }
          if (cResult[21] === tmp4.sheet) {
            if (cResult[22] === tmp29) {
              if (cResult[23] === tmp36) {
                let tmp46;
                if (cResult[24] === tmp42) {
                  tmp46 = cResult[25];
                }
                if (cResult[26] === tmp4.demo) {
                  if (cResult[27] === tmp46) {
                    let tmp50;
                    if (cResult[28] === tmp27) {
                      tmp50 = cResult[29];
                    }
                    return tmp50;
                  }
                }
                const obj12 = {
                  style: demo,
                  accessibilityElementsHidden: true,
                  importantForAccessibility: "no-hide-descendants",
                  children: items1,
                };
                items1 = [tmp27, tmp46];
                const tmp53 = metroImportDefault(hasOwnProperty, obj12);
                cResult[26] = tmp4.demo;
                cResult[27] = tmp46;
                cResult[28] = tmp27;
                cResult[29] = tmp53;
                tmp50 = tmp53;
              }
            }
          }
          const obj13 = { style: sheet, children: items2 };
          items2 = [tmp29, tmp36, tmp42];
          const tmp49 = metroImportDefault(hasOwnProperty, obj13);
          cResult[21] = tmp4.sheet;
          cResult[22] = tmp29;
          cResult[23] = tmp36;
          cResult[24] = tmp42;
          cResult[25] = tmp49;
          tmp46 = tmp49;
        }
      }
      const obj14 = { style: tmp4.messages, children: items3 };
      items3 = [tmp7, tmp23];
      const tmp28 = metroImportDefault(hasOwnProperty, obj14);
      cResult[9] = tmp4.messages;
      cResult[10] = tmp7;
      cResult[11] = tmp23;
      cResult[12] = tmp28;
      tmp27 = tmp28;
    }
  : (isReminder) => {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let items;
      let items1;
      let items2;
      let items3;
      isReminder = isReminder.isReminder;
      const tmp = closure_8();
      const obj = {
        style: tmp.demo,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: items2,
      };
      const obj2 = { style: tmp.messages, children: items };
      items = [,];
      const obj3 = { source: { uri: _modDef13154 }, style: tmp.avatar };
      ({ uri: _modDef13154 });
      items[0] = metroRequire(_false, obj3);
      const obj5 = { style: tmp.messageLines, children: items1 };
      const obj6 = { variant: "text-sm/semibold", color: "text-default", children: intl.string(intl7.t.cqpybK) };
      const Text = Text_Text.Text;
      intl = intl7.intl;
      items1 = [metroRequire(Text, obj6), , ,];
      const obj7 = { variant: "text-sm/normal", color: "text-default", children: intl2.string(intl7.t["h+KPxy"]) };
      const Text2 = Text_Text.Text;
      intl2 = intl7.intl;
      items1[1] = metroRequire(Text2, obj7);
      const obj8 = { variant: "text-sm/normal", color: "text-default", children: intl3.string(intl7.t["63EVpI"]) };
      const Text3 = Text_Text.Text;
      intl3 = intl7.intl;
      items1[2] = metroRequire(Text3, obj8);
      const obj9 = { variant: "text-sm/normal", color: "text-default", children: intl4.string(intl7.t["KT/TDX"]) };
      const Text4 = Text_Text.Text;
      intl4 = intl7.intl;
      items1[3] = metroRequire(Text4, obj9);
      items[1] = metroImportDefault(hasOwnProperty, obj5);
      items2 = [metroImportDefault(hasOwnProperty, obj2)];
      const obj10 = { style: tmp.sheet, children: items3 };
      items3 = [, ,];
      const obj11 = { style: tmp.grabber };
      items3[0] = metroRequire(hasOwnProperty, obj11);
      const obj12 = { icon: BookmarkIcon.BookmarkIcon, label: intl5.string(intl7.t.tpxJto), highlighted: !isReminder };
      intl5 = intl7.intl;
      items3[1] = metroRequire(closure_10, obj12);
      const obj13 = {
        icon: ClockIcon.ClockIcon,
        label: intl6.string(intl7.t.mJ3P0N),
        highlighted: isReminder,
        hasArrow: true,
      };
      intl6 = intl7.intl;
      items3[2] = metroRequire(closure_10, obj13);
      items2[1] = metroImportDefault(hasOwnProperty, obj10);
      return metroImportDefault(hasOwnProperty, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (highlighted) => {
      let hasArrow;
      let icon;
      let items;
      let label;
      const obj = react;
      const cResult = obj.c(15);
      ({ icon, label, hasArrow } = highlighted);
      let tmp4 = undefined !== hasArrow;
      highlighted = highlighted.highlighted;
      if (tmp4) {
        tmp4 = hasArrow;
      }
      const tmp5 = closure_8();
      let sheetRowHighlighted = null;
      if (highlighted) {
        sheetRowHighlighted = tmp5.sheetRowHighlighted;
      }
      if (cResult[0] === tmp5.sheetRow) {
        let tmp7;
        let tmp8;
        if (cResult[1] === sheetRowHighlighted) {
          tmp7 = cResult[2];
        }
        if (cResult[3] !== icon) {
          const obj2 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
          const tmp11 = metroRequire(icon, obj2);
          cResult[3] = icon;
          cResult[4] = tmp11;
          tmp8 = tmp11;
        } else {
          tmp8 = cResult[4];
        }
        if (cResult[5] === label) {
          let tmp12;
          let tmp15;
          if (cResult[6] === tmp5.sheetRowLabel) {
            tmp12 = cResult[7];
          }
          if (cResult[8] !== tmp4) {
            let tmp16 = null;
            if (tmp4) {
              const obj3 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
              const ChevronSmallRightIcon = ChevronSmallRightIcon2.ChevronSmallRightIcon;
              tmp16 = metroRequire(ChevronSmallRightIcon, obj3);
            }
            cResult[8] = tmp4;
            cResult[9] = tmp16;
            tmp15 = tmp16;
          } else {
            tmp15 = cResult[9];
          }
          if (cResult[10] === tmp7) {
            if (cResult[11] === tmp8) {
              if (cResult[12] === tmp12) {
                let tmp19;
                if (cResult[13] === tmp15) {
                  tmp19 = cResult[14];
                }
                return tmp19;
              }
            }
          }
          const obj4 = { style: tmp7, children: items };
          items = [tmp8, tmp12, tmp15];
          const tmp22 = metroImportDefault(hasOwnProperty, obj4);
          cResult[10] = tmp7;
          cResult[11] = tmp8;
          cResult[12] = tmp12;
          cResult[13] = tmp15;
          cResult[14] = tmp22;
          tmp19 = tmp22;
        }
        const obj5 = { variant: "text-sm/medium", color: "text-default", style: tmp5.sheetRowLabel, children: label };
        const tmp14 = metroRequire(Text_Text.Text, obj5);
        cResult[5] = label;
        cResult[6] = tmp5.sheetRowLabel;
        cResult[7] = tmp14;
        tmp12 = tmp14;
      }
      const items1 = [tmp5.sheetRow, sheetRowHighlighted];
      cResult[0] = tmp5.sheetRow;
      cResult[1] = sheetRowHighlighted;
      cResult[2] = items1;
      tmp7 = items1;
    }
  : (hasArrow) => {
      let highlighted;
      let icon;
      let items1;
      let label;
      let flag = hasArrow.hasArrow;
      ({ icon, label, highlighted } = hasArrow);
      if (flag === undefined) {
        flag = false;
      }
      const tmp = closure_8();
      const items = [tmp.sheetRow];
      let sheetRowHighlighted = null;
      if (highlighted) {
        sheetRowHighlighted = tmp.sheetRowHighlighted;
      }
      const obj = { style: items, children: items1 };
      items[1] = sheetRowHighlighted;
      items1 = [, ,];
      const obj2 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
      items1[0] = metroRequire(icon, obj2);
      const obj3 = { variant: "text-sm/medium", color: "text-default", style: tmp.sheetRowLabel, children: label };
      items1[1] = metroRequire(Text_Text.Text, obj3);
      let tmp5Result = null;
      if (flag) {
        const obj4 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
        const ChevronSmallRightIcon = ChevronSmallRightIcon2.ChevronSmallRightIcon;
        tmp5Result = metroRequire(ChevronSmallRightIcon, obj4);
      }
      items1[2] = tmp5Result;
      return metroImportDefault(hasOwnProperty, obj);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterIntro.tsx");

export default tmp5;

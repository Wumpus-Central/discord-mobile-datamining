// === Module 13151: ForLaterIntro ===

// Module 13151 (ForLaterIntro)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ClockIcon from "ClockIcon" /* 4855 */;
import Text_Text from "Text/Text" /* 4892 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6653 */;
import ChevronSmallRightIcon from "ChevronSmallRightIcon" /* 6715 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7506 */;
import BookmarkIcon from "BookmarkIcon" /* 11350 */;
import _modDef13154 from "module_13154" /* 13154 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import "ReactCompilerGating";
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

({ Image: c3, ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ACTION_SHEET_BORDER_RADIUS = ActionSheetConstants.ACTION_SHEET_BORDER_RADIUS;
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = { scrollView: { flex: 1 }, pageContainer: { flexGrow: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_32, paddingBottom: nativeDefault.space.PX_32 }, container: { alignItems: "center" }, upsellImage: null, textContainer: null, text: null, demo: null, messages: null, avatar: null, messageLines: null, sheet: null, grabber: null, sheetRow: null, sheetRowHighlighted: null, sheetRowLabel: null };
let size = { width: 180, height: 144, marginBottom: nativeDefault.space.PX_16 };
obj.upsellImage = size;
let obj2 = { flexGrow: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_32, paddingBottom: nativeDefault.space.PX_32 };
obj.textContainer = { gap: nativeDefault.space.PX_8 };
obj.text = { textAlign: "center" };
let obj3 = { gap: nativeDefault.space.PX_8 };
obj.demo = { alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: nativeDefault.colors.BORDER_NORMAL, borderRadius: nativeDefault.radii.md, borderWidth: 1, marginTop: nativeDefault.space.PX_24, overflow: "hidden" };
let obj4 = { alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: nativeDefault.colors.BORDER_NORMAL, borderRadius: nativeDefault.radii.md, borderWidth: 1, marginTop: nativeDefault.space.PX_24, overflow: "hidden" };
obj.messages = { flexDirection: "row", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12 };
const size1 = { width: 32, height: 32, borderRadius: nativeDefault.radii.round };
obj.avatar = size1;
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12 };
obj.messageLines = { flex: 1, gap: nativeDefault.space.PX_4 };
let obj6 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj.sheet = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, borderTopLeftRadius: ACTION_SHEET_BORDER_RADIUS, borderTopRightRadius: ACTION_SHEET_BORDER_RADIUS, marginInline: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8 };
const size2 = { alignSelf: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.round, height: 4, marginVertical: nativeDefault.space.PX_8, width: 36 };
obj.grabber = size2;
let obj7 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, borderTopLeftRadius: ACTION_SHEET_BORDER_RADIUS, borderTopRightRadius: ACTION_SHEET_BORDER_RADIUS, marginInline: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8 };
obj.sheetRow = { alignItems: "center", borderRadius: nativeDefault.radii.sm, flexDirection: "row", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 };
let obj8 = { alignItems: "center", borderRadius: nativeDefault.radii.sm, flexDirection: "row", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 };
obj.sheetRowHighlighted = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj.sheetRowLabel = { flex: 1 };
let closure_8 = createStyles.createStyles(obj);
let obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((isReminder) => {
  const cResult = c.c(30);
  isReminder = isReminder.isReminder;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { uri: _modDef13154 };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.avatar) {
    const obj3 = { source: first, style: tmp4.avatar };
    const tmp10 = timestampProducer(React3, obj3);
    cResult[1] = tmp4.avatar;
    cResult[2] = tmp10;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { variant: "text-sm/semibold", color: "text-default", children: null };
    const intl = util.intl;
    obj4.children = intl.string(util.t.cqpybK);
    const tmp13 = timestampProducer(Text_Text.Text, obj4);
    cResult[3] = tmp13;
    let tmp11 = tmp13;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl2 = util.intl;
    obj5.children = intl2.string(util.t["h+KPxy"]);
    const tmp16 = timestampProducer(Text_Text.Text, obj5);
    cResult[4] = tmp16;
    let tmp14 = tmp16;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl3 = util.intl;
    obj6.children = intl3.string(util.t["63EVpI"]);
    const tmp19 = timestampProducer(Text_Text.Text, obj6);
    cResult[5] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl4 = util.intl;
    obj7.children = intl4.string(util.t["KT/TDX"]);
    const tmp22 = timestampProducer(Text_Text.Text, obj7);
    cResult[6] = tmp22;
    let tmp20 = tmp22;
  } else {
    tmp20 = cResult[6];
  }
  if (cResult[7] !== tmp4.messageLines) {
    const obj8 = { style: tmp4.messageLines, children: null };
    const items = [tmp11, tmp14, tmp17, tmp20];
    obj8.children = items;
    const tmp26 = React5(hasOwnProperty, obj8);
    cResult[7] = tmp4.messageLines;
    cResult[8] = tmp26;
    let tmp23 = tmp26;
  } else {
    tmp23 = cResult[8];
  }
  if (cResult[9] === tmp4.messages) {
    if (cResult[10] === tmp7) {
      if (cResult[11] === tmp23) {
        let tmp27 = cResult[12];
      }
      if (cResult[13] !== tmp4.grabber) {
        const obj9 = { style: tmp4.grabber };
        const tmp32 = timestampProducer(hasOwnProperty, obj9);
        cResult[13] = tmp4.grabber;
        cResult[14] = tmp32;
        let tmp29 = tmp32;
      } else {
        tmp29 = cResult[14];
      }
      const _Symbol = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = util.intl;
        const stringResult = intl5.string(util.t.tpxJto);
        cResult[15] = stringResult;
        let tmp33 = stringResult;
      } else {
        tmp33 = cResult[15];
      }
      if (cResult[16] !== !isReminder) {
        const obj10 = { icon: BookmarkIcon.BookmarkIcon, label: tmp33, highlighted: tmp35 };
        const tmp39 = timestampProducer(closure_10, obj10);
        cResult[16] = tmp35;
        cResult[17] = tmp39;
        let tmp36 = tmp39;
      } else {
        tmp36 = cResult[17];
      }
      const _Symbol2 = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        const intl6 = util.intl;
        const stringResult1 = intl6.string(util.t.mJ3P0N);
        cResult[18] = stringResult1;
        let tmp40 = stringResult1;
      } else {
        tmp40 = cResult[18];
      }
      if (cResult[19] !== isReminder) {
        const obj11 = { icon: ClockIcon.ClockIcon, label: tmp40, highlighted: isReminder, hasArrow: true };
        const tmp45 = timestampProducer(closure_10, obj11);
        cResult[19] = isReminder;
        cResult[20] = tmp45;
        let tmp42 = tmp45;
      } else {
        tmp42 = cResult[20];
      }
      if (cResult[21] === tmp4.sheet) {
        if (cResult[22] === tmp29) {
          if (cResult[23] === tmp36) {
            if (cResult[24] === tmp42) {
              let tmp46 = cResult[25];
            }
            if (cResult[26] === tmp4.demo) {
              if (cResult[27] === tmp46) {
                if (cResult[28] === tmp27) {
                  let tmp50 = cResult[29];
                }
                return tmp50;
              }
            }
            const obj12 = { style: tmp4.demo, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
            const items1 = [tmp27, tmp46];
            obj12.children = items1;
            const tmp53 = React5(hasOwnProperty, obj12);
            cResult[26] = tmp4.demo;
            cResult[27] = tmp46;
            cResult[28] = tmp27;
            cResult[29] = tmp53;
            tmp50 = tmp53;
          }
        }
      }
      const obj13 = { style: tmp4.sheet, children: null };
      const items2 = [tmp29, tmp36, tmp42];
      obj13.children = items2;
      const tmp49 = React5(hasOwnProperty, obj13);
      cResult[21] = tmp4.sheet;
      cResult[22] = tmp29;
      cResult[23] = tmp36;
      cResult[24] = tmp42;
      cResult[25] = tmp49;
      tmp46 = tmp49;
    }
  }
  const obj14 = { style: tmp4.messages, children: null };
  const items3 = [tmp7, tmp23];
  obj14.children = items3;
  const tmp28 = React5(hasOwnProperty, obj14);
  cResult[9] = tmp4.messages;
  cResult[10] = tmp7;
  cResult[11] = tmp23;
  cResult[12] = tmp28;
  tmp27 = tmp28;
}) : ((isReminder) => {
  isReminder = isReminder.isReminder;
  const tmp = closure_8();
  const obj = { style: tmp.demo, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const obj2 = { style: tmp.messages, children: null };
  const obj3 = { source: { uri: _modDef13154 }, style: tmp.avatar };
  const items = [timestampProducer(React3, obj3), ];
  const obj5 = { style: tmp.messageLines, children: null };
  const obj6 = { variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = util.intl;
  obj6.children = intl.string(util.t.cqpybK);
  const items1 = [timestampProducer(Text_Text.Text, obj6), , , ];
  const obj7 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = util.intl;
  obj7.children = intl2.string(util.t["h+KPxy"]);
  items1[1] = timestampProducer(Text_Text.Text, obj7);
  const obj8 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl3 = util.intl;
  obj8.children = intl3.string(util.t["63EVpI"]);
  items1[2] = timestampProducer(Text_Text.Text, obj8);
  const obj9 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl4 = util.intl;
  obj9.children = intl4.string(util.t["KT/TDX"]);
  items1[3] = timestampProducer(Text_Text.Text, obj9);
  obj5.children = items1;
  items[1] = React5(hasOwnProperty, obj5);
  obj2.children = items;
  const items2 = [React5(hasOwnProperty, obj2), ];
  const obj10 = { style: tmp.sheet, children: null };
  const items3 = [timestampProducer(hasOwnProperty, { style: tmp.grabber }), , ];
  const obj12 = { icon: BookmarkIcon.BookmarkIcon, label: null, highlighted: null };
  const intl5 = util.intl;
  obj12.label = intl5.string(util.t.tpxJto);
  obj12.highlighted = !isReminder;
  items3[1] = timestampProducer(closure_10, obj12);
  const obj13 = { icon: ClockIcon.ClockIcon, label: null, highlighted: null, hasArrow: true };
  const intl6 = util.intl;
  obj13.label = intl6.string(util.t.mJ3P0N);
  obj13.highlighted = isReminder;
  items3[2] = timestampProducer(closure_10, obj13);
  obj10.children = items3;
  items2[1] = React5(hasOwnProperty, obj10);
  obj.children = items2;
  return React5(hasOwnProperty, obj);
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((highlighted) => {
  const cResult = c.c(15);
  ({ icon, label, hasArrow } = highlighted);
  let tmp4 = undefined !== hasArrow;
  if (tmp4) {
    tmp4 = hasArrow;
  }
  const tmp5 = closure_8();
  let sheetRowHighlighted = null;
  if (highlighted.highlighted) {
    sheetRowHighlighted = tmp5.sheetRowHighlighted;
  }
  if (cResult[0] === tmp5.sheetRow) {
    if (cResult[1] === sheetRowHighlighted) {
      let tmp7 = cResult[2];
    }
    if (cResult[3] !== icon) {
      const obj2 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
      const tmp11 = timestampProducer(icon, obj2);
      cResult[3] = icon;
      cResult[4] = tmp11;
      let tmp8 = tmp11;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === label) {
      if (cResult[6] === tmp5.sheetRowLabel) {
        let tmp12 = cResult[7];
      }
      if (cResult[8] !== tmp4) {
        let tmp16 = null;
        if (tmp4) {
          const obj3 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
          tmp16 = timestampProducer(ChevronSmallRightIcon.ChevronSmallRightIcon, obj3);
        }
        cResult[8] = tmp4;
        cResult[9] = tmp16;
        let tmp15 = tmp16;
      } else {
        tmp15 = cResult[9];
      }
      if (cResult[10] === tmp7) {
        if (cResult[11] === tmp8) {
          if (cResult[12] === tmp12) {
            if (cResult[13] === tmp15) {
              let tmp19 = cResult[14];
            }
            return tmp19;
          }
        }
      }
      const obj4 = { style: tmp7, children: null };
      const items = [tmp8, tmp12, tmp15];
      obj4.children = items;
      const tmp22 = React5(hasOwnProperty, obj4);
      cResult[10] = tmp7;
      cResult[11] = tmp8;
      cResult[12] = tmp12;
      cResult[13] = tmp15;
      cResult[14] = tmp22;
      tmp19 = tmp22;
    }
    const obj5 = { variant: "text-sm/medium", color: "text-default", style: tmp5.sheetRowLabel, children: label };
    const tmp14 = timestampProducer(Text_Text.Text, obj5);
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
}) : ((hasArrow) => {
  let flag = hasArrow.hasArrow;
  ({ icon, label, highlighted } = hasArrow);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_8();
  const items = [tmp.sheetRow, ];
  let sheetRowHighlighted = null;
  if (highlighted) {
    sheetRowHighlighted = tmp.sheetRowHighlighted;
  }
  const obj = { style: items, children: null };
  items[1] = sheetRowHighlighted;
  const items1 = [timestampProducer(icon, { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }), timestampProducer(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", style: tmp.sheetRowLabel, children: label }), ];
  let tmp5Result = null;
  if (flag) {
    const obj4 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
    tmp5Result = timestampProducer(ChevronSmallRightIcon.ChevronSmallRightIcon, obj4);
  }
  items1[2] = tmp5Result;
  obj.children = items1;
  return React5(hasOwnProperty, obj);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterIntro.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((type) => {
  const cResult = c.c(28);
  const tmp4 = closure_8();
  const tmp5 = type.type === SavedMessagesTypes.SavedMessageSortTypes.REMINDER;
  ({ scrollView, pageContainer, container } = tmp4);
  const tmp6 = importDefault(tmp5 ? 13152 : 13153);
  if (cResult[0] === tmp4.upsellImage) {
    if (cResult[1] === tmp6) {
      let tmp7 = cResult[2];
    }
    if (cResult[3] !== tmp5) {
      const intl = util.intl;
      const t = util.t;
      const stringResult = intl.string(tmp5 ? t["5Iw19e"] : t["93WOd1"]);
      cResult[3] = tmp5;
      cResult[4] = stringResult;
    } else {
      if (cResult[5] === tmp4.text) {
        if (cResult[6] === tmp11) {
          let tmp14 = cResult[7];
        }
        if (cResult[8] !== tmp5) {
          const intl2 = util.intl;
          const t2 = util.t;
          const intl3 = util.intl;
          let t3 = util.t;
          const obj2 = { itemName: intl3.string(tmp5 ? t3.mJ3P0N : t3.tpxJto) };
          t3 = intl2.format(tmp5 ? t2.YI4UjI : t2["5TSj/g"], obj2);
          cResult[8] = tmp5;
          cResult[9] = t3;
          const tmp19 = tmp5 ? t2.YI4UjI : t2["5TSj/g"];
        } else {
          if (cResult[10] === tmp4.text) {
            if (cResult[11] === tmp18) {
              let tmp21 = cResult[12];
            }
            if (cResult[13] === tmp4.textContainer) {
              if (cResult[14] === tmp21) {
                if (cResult[15] === tmp14) {
                  let tmp24 = cResult[16];
                }
                if (cResult[17] !== tmp5) {
                  const obj3 = { isReminder: tmp5 };
                  const tmp31 = timestampProducer(closure_9, obj3);
                  cResult[17] = tmp5;
                  cResult[18] = tmp31;
                  let tmp28 = tmp31;
                } else {
                  tmp28 = cResult[18];
                }
                if (cResult[19] === tmp4.container) {
                  if (cResult[20] === tmp24) {
                    if (cResult[21] === tmp28) {
                      if (cResult[22] === tmp7) {
                        let tmp32 = cResult[23];
                      }
                      if (cResult[24] === tmp4.pageContainer) {
                        if (cResult[25] === tmp4.scrollView) {
                          if (cResult[26] === tmp32) {
                            let tmp36 = cResult[27];
                          }
                          return tmp36;
                        }
                      }
                      const obj4 = { style: scrollView, contentContainerStyle: pageContainer, children: tmp32 };
                      const tmp39 = timestampProducer(React4, obj4);
                      cResult[24] = tmp4.pageContainer;
                      cResult[25] = tmp4.scrollView;
                      cResult[26] = tmp32;
                      cResult[27] = tmp39;
                      tmp36 = tmp39;
                    }
                  }
                }
                const obj5 = { style: container, children: null };
                const items = [tmp7, tmp24, tmp28];
                obj5.children = items;
                const tmp35 = React5(hasOwnProperty, obj5);
                cResult[19] = tmp4.container;
                cResult[20] = tmp24;
                cResult[21] = tmp28;
                cResult[22] = tmp7;
                cResult[23] = tmp35;
                tmp32 = tmp35;
              }
            }
            const obj6 = { style: tmp9, children: null };
            const items1 = [tmp14, tmp21];
            obj6.children = items1;
            const tmp27 = React5(hasOwnProperty, obj6);
            cResult[13] = tmp4.textContainer;
            cResult[14] = tmp21;
            cResult[15] = tmp14;
            cResult[16] = tmp27;
            tmp24 = tmp27;
          }
          const obj7 = { variant: "text-sm/medium", color: "text-default", style: tmp17, includeFontPadding: true, children: cResult[9] };
          const tmp23 = timestampProducer(Text_Text.Text, obj7);
          cResult[10] = tmp4.text;
          cResult[11] = cResult[9];
          cResult[12] = tmp23;
          tmp21 = tmp23;
        }
      }
      const obj8 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: tmp10, children: cResult[4] };
      const tmp16 = timestampProducer(Text_Text.Heading, obj8);
      cResult[5] = tmp4.text;
      cResult[6] = cResult[4];
      cResult[7] = tmp16;
      tmp14 = tmp16;
    }
  }
  const tmp8 = timestampProducer(React3, { source: tmp6, style: tmp4.upsellImage });
  cResult[0] = tmp4.upsellImage;
  cResult[1] = tmp6;
  cResult[2] = tmp8;
  tmp7 = tmp8;
  const obj9 = { source: tmp6, style: tmp4.upsellImage };
}) : ((type) => {
  const tmp = closure_8();
  const tmp4 = type.type === SavedMessagesTypes.SavedMessageSortTypes.REMINDER;
  const obj = { style: tmp.scrollView, contentContainerStyle: tmp.pageContainer, children: null };
  const obj2 = { style: tmp.container, children: null };
  const items = [timestampProducer(React3, { source: importDefault(tmp4 ? 13152 : 13153), style: tmp.upsellImage }), , ];
  const obj4 = { style: tmp.textContainer, children: null };
  const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: tmp.text, children: null };
  const intl = util.intl;
  const t = util.t;
  obj5.children = intl.string(tmp4 ? t["5Iw19e"] : t["93WOd1"]);
  const items1 = [timestampProducer(Text_Text.Heading, obj5), ];
  const obj6 = { variant: "text-sm/medium", color: "text-default", style: tmp.text, includeFontPadding: true, children: null };
  const intl2 = util.intl;
  const t2 = util.t;
  const intl3 = util.intl;
  const t3 = util.t;
  const obj3 = { source: importDefault(tmp4 ? 13152 : 13153), style: tmp.upsellImage };
  const tmp10 = tmp4 ? t2.YI4UjI : t2["5TSj/g"];
  obj6.children = intl2.format(tmp10, { itemName: intl3.string(tmp4 ? t3.mJ3P0N : t3.tpxJto) });
  items1[1] = timestampProducer(Text_Text.Text, obj6);
  obj4.children = items1;
  items[1] = React5(hasOwnProperty, obj4);
  items[2] = timestampProducer(closure_9, { isReminder: tmp4 });
  obj2.children = items;
  obj.children = React5(hasOwnProperty, obj2);
  return timestampProducer(React4, obj);
});
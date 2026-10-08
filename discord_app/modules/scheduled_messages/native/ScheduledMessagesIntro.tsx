// === Module 12862: ScheduledMessagesIntro ===

// Module 12862 (ScheduledMessagesIntro)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5086 */;
import AttachmentIcon from "AttachmentIcon" /* 9979 */;
import PlusLargeIcon from "PlusLargeIcon" /* 10290 */;
import CalendarPlusIcon from "CalendarPlusIcon" /* 11936 */;
import ScheduleMessageSpotIllustration from "ScheduleMessageSpotIllustration" /* 12166 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import "ReactCompilerGating";
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { scrollView: { flex: 1 }, pageContainer: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingBottom: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_32 }, container: { alignItems: "center" }, upsellImage: null, textContainer: null, text: null, demo: null, menu: null, menuRow: null, menuRowHighlighted: null, menuDivider: null, chatInput: null, plusButton: null };
let obj2 = { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingBottom: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_32 };
obj.upsellImage = { marginBottom: nativeDefault.space.PX_16 };
let obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj.textContainer = { gap: nativeDefault.space.PX_8 };
obj.text = { textAlign: "center" };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj.demo = { alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: nativeDefault.colors.BORDER_NORMAL, borderRadius: nativeDefault.radii.md, borderWidth: 1, gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_24, overflow: "hidden", padding: nativeDefault.space.PX_12 };
let obj5 = { alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: nativeDefault.colors.BORDER_NORMAL, borderRadius: nativeDefault.radii.md, borderWidth: 1, gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_24, overflow: "hidden", padding: nativeDefault.space.PX_12 };
obj.menu = { alignSelf: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
let obj6 = { alignSelf: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj.menuRow = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8 };
let obj7 = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8 };
obj.menuRowHighlighted = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj.menuDivider = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1 };
let obj9 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1 };
obj.chatInput = { alignItems: "center", backgroundColor: nativeDefault.colors.CHAT_INPUT_BACKGROUND, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_BORDER_RADIUS, flexDirection: "row", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8 };
let size = { alignItems: "center", backgroundColor: nativeDefault.colors.CHAT_INPUT_ACTION_BUTTON_BACKGROUND, borderRadius: nativeDefault.radii.round, height: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE, justifyContent: "center", width: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE };
obj.plusButton = size;
let closure_7 = createStyles.createStyles(obj);
let obj10 = { alignItems: "center", backgroundColor: nativeDefault.colors.CHAT_INPUT_BACKGROUND, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_BORDER_RADIUS, flexDirection: "row", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8 };
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function MenuRow(highlighted) {
  const cResult = c.c(11);
  ({ icon, label } = highlighted);
  const tmp4 = closure_7();
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
      const tmp10 = hasOwnProperty(icon, obj2);
      cResult[3] = icon;
      cResult[4] = tmp10;
      let tmp7 = tmp10;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] !== label) {
      const obj3 = { variant: "text-sm/medium", color: "text-default", children: label };
      const tmp13 = hasOwnProperty(Text_Text.Text, obj3);
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
    const tmp17 = timestampProducer(React4, obj4);
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
}) : (function MenuRow(arg0) {
  ({ icon, label, highlighted } = arg0);
  const tmp = closure_7();
  const items = [tmp.menuRow, ];
  let menuRowHighlighted = null;
  if (highlighted) {
    menuRowHighlighted = tmp.menuRowHighlighted;
  }
  const obj = { style: items, children: null };
  items[1] = menuRowHighlighted;
  const items1 = [hasOwnProperty(icon, { size: "sm", color: nativeDefault.colors.TEXT_STRONG }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: label })];
  obj.children = items1;
  return timestampProducer(React4, obj);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessagesIntro.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ScheduledMessagesIntro() {
  const cResult = c.c(40);
  const tmp4 = closure_7();
  ({ scrollView, pageContainer, container } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = hasOwnProperty(ScheduleMessageSpotIllustration.ScheduleMessageSpotIllustration, { width: 180, height: 120, accessible: false });
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.upsellImage) {
    const obj2 = { style: tmp4.upsellImage, children: first };
    const tmp11 = hasOwnProperty(React4, obj2);
    cResult[1] = tmp4.upsellImage;
    cResult[2] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  ({ textContainer, text } = tmp4);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["C/j9NE"]);
    cResult[3] = stringResult;
    let tmp12 = stringResult;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== tmp4.text) {
    const obj3 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: text, children: tmp12 };
    const tmp16 = hasOwnProperty(Text_Text.Heading, obj3);
    cResult[4] = tmp4.text;
    cResult[5] = tmp16;
    let tmp14 = tmp16;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const formatResult = intl2.format(util.t.PqmI8J, {});
    cResult[6] = formatResult;
    let tmp17 = formatResult;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] !== tmp4.text) {
    const obj4 = { variant: "text-sm/medium", color: "text-default", style: tmp4.text, includeFontPadding: true, children: tmp17 };
    const tmp21 = hasOwnProperty(Text_Text.Text, obj4);
    cResult[7] = tmp4.text;
    cResult[8] = tmp21;
    let tmp19 = tmp21;
  } else {
    tmp19 = cResult[8];
  }
  if (cResult[9] === tmp4.textContainer) {
    if (cResult[10] === tmp19) {
      if (cResult[11] === tmp14) {
        let tmp22 = cResult[12];
      }
      const _Symbol = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { icon: AttachmentIcon.AttachmentIcon, label: null, highlighted: false };
        const intl3 = util.intl;
        obj5.label = intl3.string(util.t["8Hvr3+"]);
        const tmp27 = hasOwnProperty(closure_8, obj5);
        cResult[13] = tmp27;
        let tmp24 = tmp27;
      } else {
        tmp24 = cResult[13];
      }
      if (cResult[14] !== tmp4.menuDivider) {
        const obj6 = { style: tmp4.menuDivider };
        const tmp31 = hasOwnProperty(React4, obj6);
        cResult[14] = tmp4.menuDivider;
        cResult[15] = tmp31;
        let tmp28 = tmp31;
      } else {
        tmp28 = cResult[15];
      }
      const _Symbol2 = Symbol;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { icon: CalendarPlusIcon.CalendarPlusIcon, label: null, highlighted: true };
        const intl4 = util.intl;
        obj7.label = intl4.string(util.t["3+ii4F"]);
        const tmp35 = hasOwnProperty(closure_8, obj7);
        cResult[16] = tmp35;
        let tmp32 = tmp35;
      } else {
        tmp32 = cResult[16];
      }
      if (cResult[17] === tmp4.menu) {
        if (cResult[18] === tmp28) {
          let tmp36 = cResult[19];
        }
        const _Symbol3 = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          const obj8 = { size: "xs", color: nativeDefault.colors.CHAT_INPUT_ACTION_BUTTON_ICON_DEFAULT_TINT };
          const tmp43 = hasOwnProperty(PlusLargeIcon.PlusLargeIcon, obj8);
          cResult[20] = tmp43;
          let tmp40 = tmp43;
        } else {
          tmp40 = cResult[20];
        }
        if (cResult[21] !== tmp4.plusButton) {
          const obj9 = { style: tmp4.plusButton, children: tmp40 };
          const tmp47 = hasOwnProperty(React4, obj9);
          cResult[21] = tmp4.plusButton;
          cResult[22] = tmp47;
          let tmp44 = tmp47;
        } else {
          tmp44 = cResult[22];
        }
        const _Symbol4 = Symbol;
        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
          const obj10 = { variant: "text-sm/normal", color: "text-muted", children: null };
          const intl5 = util.intl;
          obj10.children = intl5.string(util.t.fxxYiB);
          const tmp50 = hasOwnProperty(Text_Text.Text, obj10);
          cResult[23] = tmp50;
          let tmp48 = tmp50;
        } else {
          tmp48 = cResult[23];
        }
        if (cResult[24] === tmp4.chatInput) {
          if (cResult[25] === tmp44) {
            let tmp51 = cResult[26];
          }
          if (cResult[27] === tmp4.demo) {
            if (cResult[28] === tmp36) {
              if (cResult[29] === tmp51) {
                let tmp55 = cResult[30];
              }
              if (cResult[31] === tmp4.container) {
                if (cResult[32] === tmp22) {
                  if (cResult[33] === tmp55) {
                    if (cResult[34] === tmp8) {
                      let tmp59 = cResult[35];
                    }
                    if (cResult[36] === tmp4.pageContainer) {
                      if (cResult[37] === tmp4.scrollView) {
                        if (cResult[38] === tmp59) {
                          let tmp63 = cResult[39];
                        }
                        return tmp63;
                      }
                    }
                    const obj11 = { style: scrollView, contentContainerStyle: pageContainer, children: tmp59 };
                    const tmp66 = hasOwnProperty(React3, obj11);
                    cResult[36] = tmp4.pageContainer;
                    cResult[37] = tmp4.scrollView;
                    cResult[38] = tmp59;
                    cResult[39] = tmp66;
                    tmp63 = tmp66;
                  }
                }
              }
              const obj12 = { style: container, children: null };
              const items = [tmp8, tmp22, tmp55];
              obj12.children = items;
              const tmp62 = timestampProducer(React4, obj12);
              cResult[31] = tmp4.container;
              cResult[32] = tmp22;
              cResult[33] = tmp55;
              cResult[34] = tmp8;
              cResult[35] = tmp62;
              tmp59 = tmp62;
            }
          }
          const obj13 = { style: tmp4.demo, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
          const items1 = [tmp36, tmp51];
          obj13.children = items1;
          const tmp58 = timestampProducer(React4, obj13);
          cResult[27] = tmp4.demo;
          cResult[28] = tmp36;
          cResult[29] = tmp51;
          cResult[30] = tmp58;
          tmp55 = tmp58;
        }
        const obj14 = { style: tmp4.chatInput, children: null };
        const items2 = [tmp44, tmp48];
        obj14.children = items2;
        const tmp54 = timestampProducer(React4, obj14);
        cResult[24] = tmp4.chatInput;
        cResult[25] = tmp44;
        cResult[26] = tmp54;
        tmp51 = tmp54;
      }
      const obj15 = { style: tmp4.menu, children: null };
      const items3 = [tmp24, tmp28, tmp32];
      obj15.children = items3;
      const tmp39 = timestampProducer(React4, obj15);
      cResult[17] = tmp4.menu;
      cResult[18] = tmp28;
      cResult[19] = tmp39;
      tmp36 = tmp39;
    }
  }
  const obj16 = { style: textContainer, children: null };
  const items4 = [tmp14, tmp19];
  obj16.children = items4;
  const tmp23 = timestampProducer(React4, obj16);
  cResult[9] = tmp4.textContainer;
  cResult[10] = tmp19;
  cResult[11] = tmp14;
  cResult[12] = tmp23;
  tmp22 = tmp23;
}) : (function ScheduledMessagesIntro() {
  const tmp = closure_7();
  const obj = { style: tmp.scrollView, contentContainerStyle: tmp.pageContainer, children: null };
  const obj2 = { style: tmp.container, children: null };
  const items = [hasOwnProperty(React4, { style: tmp.upsellImage, children: hasOwnProperty(ScheduleMessageSpotIllustration.ScheduleMessageSpotIllustration, { width: 180, height: 120, accessible: false }) }), , ];
  const obj4 = { style: tmp.textContainer, children: null };
  const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: tmp.text, children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t["C/j9NE"]);
  const items1 = [hasOwnProperty(Text_Text.Heading, obj5), ];
  const obj6 = { variant: "text-sm/medium", color: "text-default", style: tmp.text, includeFontPadding: true, children: null };
  const intl2 = util.intl;
  obj6.children = intl2.format(util.t.PqmI8J, {});
  items1[1] = hasOwnProperty(Text_Text.Text, obj6);
  obj4.children = items1;
  items[1] = timestampProducer(React4, obj4);
  const obj7 = { style: tmp.demo, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const obj8 = { style: tmp.menu, children: null };
  const obj9 = { icon: AttachmentIcon.AttachmentIcon, label: null, highlighted: false };
  const intl3 = util.intl;
  obj9.label = intl3.string(util.t["8Hvr3+"]);
  const items2 = [hasOwnProperty(closure_8, obj9), hasOwnProperty(React4, { style: tmp.menuDivider }), ];
  const obj11 = { icon: CalendarPlusIcon.CalendarPlusIcon, label: null, highlighted: true };
  const intl4 = util.intl;
  obj11.label = intl4.string(util.t["3+ii4F"]);
  items2[2] = hasOwnProperty(closure_8, obj11);
  obj8.children = items2;
  const items3 = [timestampProducer(React4, obj8), ];
  const obj12 = { style: tmp.chatInput, children: null };
  const obj13 = { style: tmp.plusButton, children: null };
  const obj10 = { style: tmp.menuDivider };
  const obj3 = { style: tmp.upsellImage, children: hasOwnProperty(ScheduleMessageSpotIllustration.ScheduleMessageSpotIllustration, { width: 180, height: 120, accessible: false }) };
  obj13.children = hasOwnProperty(PlusLargeIcon.PlusLargeIcon, { size: "xs", color: nativeDefault.colors.CHAT_INPUT_ACTION_BUTTON_ICON_DEFAULT_TINT });
  const items4 = [hasOwnProperty(React4, obj13), ];
  const obj15 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl5 = util.intl;
  obj15.children = intl5.string(util.t.fxxYiB);
  items4[1] = hasOwnProperty(Text_Text.Text, obj15);
  obj12.children = items4;
  items3[1] = timestampProducer(React4, obj12);
  obj7.children = items3;
  items[2] = timestampProducer(React4, obj7);
  obj2.children = items;
  obj.children = timestampProducer(React4, obj2);
  return hasOwnProperty(React3, obj);
});
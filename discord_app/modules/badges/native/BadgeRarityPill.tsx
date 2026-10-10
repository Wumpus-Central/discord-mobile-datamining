// === Module 10587: BadgeRarityPill ===

// Module 10587 (BadgeRarityPill)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import BadgeRarity from "BadgeRarity" /* 1394 */;
import ColorUtils from "ColorUtils" /* 4967 */;
import shared from "shared" /* 4969 */;
import useThemeDefault from "useTheme" /* 5031 */;
import Text_Text from "Text/Text" /* 5088 */;
import ExperimentalCommonIcon from "ExperimentalCommonIcon" /* 10588 */;
import ExperimentalRareIcon from "ExperimentalRareIcon" /* 10590 */;
import ExperimentalEpicIcon from "ExperimentalEpicIcon" /* 10592 */;
import ExperimentalMythicIcon from "ExperimentalMythicIcon" /* 10594 */;
import noop from "module_19" /* 19 */;

require = fn;
function getRarityStyle(rarity, arg1) {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (BadgeRarity.BadgeRarity.COMMON === rarity) {
    const obj2 = { Icon: ExperimentalCommonIcon.ExperimentalCommonIcon, label: null, background: null, border: null, text: null };
    const intl4 = util.intl;
    obj2.label = intl4.string(util.t.L0K5ci);
    ({ OPACITY_24: obj7.background, NEUTRAL_35: obj7.border } = unsafe_rawColors);
    obj2.text = arg1 ? unsafe_rawColors.NEUTRAL_45 : unsafe_rawColors.NEUTRAL_15;
    return obj2;
  } else if (BadgeRarity.BadgeRarity.RARE === rarity) {
    const obj3 = { Icon: ExperimentalRareIcon.ExperimentalRareIcon, label: null, background: null, border: null, text: null };
    const intl3 = util.intl;
    obj3.label = intl3.string(util.t["sTx/5z"]);
    obj3.background = ColorUtils.hexOpacityToRgba(unsafe_rawColors.ILLO_BLUE_40, c6);
    obj3.border = unsafe_rawColors.ILLO_BLUE_40;
    obj3.text = arg1 ? unsafe_rawColors.ILLO_BLUE_50 : unsafe_rawColors.ILLO_BLUE_30;
    return obj3;
  } else if (BadgeRarity.BadgeRarity.EPIC === rarity) {
    const obj4 = { Icon: ExperimentalEpicIcon.ExperimentalEpicIcon, label: null, background: null, border: null, text: null };
    const intl2 = util.intl;
    obj4.label = intl2.string(util.t.RD8RiN);
    obj4.background = ColorUtils.hexOpacityToRgba(unsafe_rawColors.ILLO_PURPLE_40, c6);
    obj4.border = unsafe_rawColors.ILLO_PURPLE_40;
    obj4.text = arg1 ? unsafe_rawColors.ILLO_PURPLE_50 : unsafe_rawColors.ILLO_PURPLE_30;
    return obj4;
  } else if (BadgeRarity.BadgeRarity.MYTHIC === rarity) {
    const obj = { Icon: ExperimentalMythicIcon.ExperimentalMythicIcon, label: null, background: null, border: null, text: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.vqc1ol);
    obj.background = ColorUtils.hexOpacityToRgba(unsafe_rawColors.ILLO_ORANGE_40, c6);
    obj.border = unsafe_rawColors.ILLO_ORANGE_40;
    obj.text = arg1 ? unsafe_rawColors.ILLO_ORANGE_50 : unsafe_rawColors.ILLO_ORANGE_30;
    return obj;
  } else {
    return null;
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let c6 = 0.24;
const createStyles = fn(5092);
let obj2 = { pill: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_6, minHeight: 20, borderRadius: nativeDefault.radii.round, borderWidth: 1 }, label: { textTransform: "uppercase" } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_6, minHeight: 20, borderRadius: nativeDefault.radii.round, borderWidth: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/BadgeRarityPill.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function BadgeRarityPill(rarity) {
  const cResult = c.c(21);
  const tmp4 = closure_8();
  const tmp5 = getRarityStyle(rarity.rarity, shared.isThemeLight(useThemeDefault()));
  if (null == tmp5) {
    return null;
  } else {
    ({ Icon, label, background, border, text } = tmp5);
    if (cResult[0] === background) {
      if (cResult[1] === border) {
        let tmp6 = cResult[2];
      }
      if (cResult[3] === tmp4.pill) {
        if (cResult[4] === tmp6) {
          let tmp7 = cResult[5];
        }
        if (cResult[6] === Icon) {
          if (cResult[7] === text) {
            let tmp8 = cResult[8];
          }
          if (cResult[9] !== text) {
            const obj3 = { color: text };
            cResult[9] = text;
            cResult[10] = obj3;
            let tmp11 = obj3;
          } else {
            tmp11 = cResult[10];
          }
          if (cResult[11] === tmp4.label) {
            if (cResult[12] === tmp11) {
              let tmp12 = cResult[13];
            }
            if (cResult[14] === label) {
              if (cResult[15] === tmp12) {
                let tmp13 = cResult[16];
              }
              if (cResult[17] === tmp7) {
                if (cResult[18] === tmp8) {
                  if (cResult[19] === tmp13) {
                    let tmp16 = cResult[20];
                  }
                  return tmp16;
                }
              }
              const obj4 = { style: tmp7, children: null };
              const items = [tmp8, tmp13];
              obj4.children = items;
              const tmp19 = hasOwnProperty(View, obj4);
              cResult[17] = tmp7;
              cResult[18] = tmp8;
              cResult[19] = tmp13;
              cResult[20] = tmp19;
              tmp16 = tmp19;
            }
            const obj5 = { variant: "text-xs/bold", color: "none", lineClamp: 1, style: tmp12, children: label };
            const tmp15 = React4(Text_Text.Text, obj5);
            cResult[14] = label;
            cResult[15] = tmp12;
            cResult[16] = tmp15;
            tmp13 = tmp15;
          }
          const items1 = [tmp4.label, tmp11];
          cResult[11] = tmp4.label;
          cResult[12] = tmp11;
          cResult[13] = items1;
          tmp12 = items1;
        }
        const obj6 = { size: "xxs", color: text };
        const tmp10 = React4(Icon, obj6);
        cResult[6] = Icon;
        cResult[7] = text;
        cResult[8] = tmp10;
        tmp8 = tmp10;
      }
      const items2 = [tmp4.pill, tmp6];
      cResult[3] = tmp4.pill;
      cResult[4] = tmp6;
      cResult[5] = items2;
      tmp7 = items2;
    }
    const obj7 = { backgroundColor: background, borderColor: border };
    cResult[0] = background;
    cResult[1] = border;
    cResult[2] = obj7;
    tmp6 = obj7;
  }
}) : (function BadgeRarityPill(rarity) {
  const tmp = closure_8();
  const tmp4 = getRarityStyle(rarity.rarity, shared.isThemeLight(useThemeDefault()));
  if (null == tmp4) {
    return null;
  } else {
    const text = tmp4.text;
    const obj2 = { style: null, children: null };
    const items = [tmp.pill, ];
    ({ background: obj3.backgroundColor, border: obj3.borderColor } = tmp4);
    items[1] = { backgroundColor: null, borderColor: null };
    obj2.style = items;
    const obj5 = { size: "xxs", color: text };
    const items1 = [React4(tmp4.Icon, obj5), ];
    const obj6 = { variant: "text-xs/bold", color: "none", lineClamp: 1, style: null, children: null };
    const items2 = [tmp.label, ];
    const obj11 = { color: text };
    items2[1] = obj11;
    obj6.style = items2;
    obj6.children = tmp4.label;
    items1[1] = React4(Text_Text.Text, obj6);
    obj2.children = items1;
    return hasOwnProperty(View, obj2);
  }
});
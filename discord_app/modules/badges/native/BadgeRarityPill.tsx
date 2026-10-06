// === Module 10911: BadgeRarityPill ===

// Module 10911 (BadgeRarityPill)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import BadgeRarity from "BadgeRarity" /* 1381 */;
import ColorUtils from "ColorUtils" /* 4733 */;
import shared from "shared" /* 4735 */;
import useThemeDefault from "useTheme" /* 4797 */;
import Text_Text from "Text/Text" /* 4892 */;
import ExperimentalCommonIcon from "ExperimentalCommonIcon" /* 10912 */;
import ExperimentalRareIcon from "ExperimentalRareIcon" /* 10914 */;
import ExperimentalEpicIcon from "ExperimentalEpicIcon" /* 10916 */;
import ExperimentalMythicIcon from "ExperimentalMythicIcon" /* 10918 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
function getRarityStyle(rarity, arg1) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let tmp2Result;
  let tmp2Result3;
  let tmp2Result4;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (BadgeRarity.BadgeRarity.COMMON === rarity) {
    const obj2 = { Icon: ExperimentalCommonIcon.ExperimentalCommonIcon, label: intl4.string(intl5.t.L0K5ci), background: null, border: null, text: arg1 ? unsafe_rawColors.NEUTRAL_45 : unsafe_rawColors.NEUTRAL_15 };
    intl4 = intl5.intl;
    ({ OPACITY_24: obj7.background, NEUTRAL_35: obj7.border } = unsafe_rawColors);
    return obj2;
  } else if (BadgeRarity.BadgeRarity.RARE === rarity) {
    const obj3 = { Icon: ExperimentalRareIcon.ExperimentalRareIcon, label: intl3.string(intl5.t["sTx/5z"]), background: tmp2Result.hexOpacityToRgba(unsafe_rawColors.ILLO_BLUE_40, c6), border: unsafe_rawColors.ILLO_BLUE_40, text: arg1 ? unsafe_rawColors.ILLO_BLUE_50 : unsafe_rawColors.ILLO_BLUE_30 };
    intl3 = intl5.intl;
    tmp2Result = ColorUtils;
    return obj3;
  } else if (BadgeRarity.BadgeRarity.EPIC === rarity) {
    const obj4 = { Icon: ExperimentalEpicIcon.ExperimentalEpicIcon, label: intl2.string(intl5.t.RD8RiN), background: tmp2Result3.hexOpacityToRgba(unsafe_rawColors.ILLO_PURPLE_40, c6), border: unsafe_rawColors.ILLO_PURPLE_40, text: arg1 ? unsafe_rawColors.ILLO_PURPLE_50 : unsafe_rawColors.ILLO_PURPLE_30 };
    intl2 = intl5.intl;
    tmp2Result3 = ColorUtils;
    return obj4;
  } else if (BadgeRarity.BadgeRarity.MYTHIC === rarity) {
    const obj = { Icon: ExperimentalMythicIcon.ExperimentalMythicIcon, label: intl.string(intl5.t.vqc1ol), background: tmp2Result4.hexOpacityToRgba(unsafe_rawColors.ILLO_ORANGE_40, c6), border: unsafe_rawColors.ILLO_ORANGE_40, text: arg1 ? unsafe_rawColors.ILLO_ORANGE_50 : unsafe_rawColors.ILLO_ORANGE_30 };
    intl = intl5.intl;
    tmp2Result4 = ColorUtils;
    return obj;
  } else {
    return null;
  }
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let c6 = 0.24;
let obj = { pill: obj2, label: { textTransform: "uppercase" } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_6, minHeight: 20, borderRadius: nativeDefault.radii.round, borderWidth: 1 };
let closure_8 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((rarity) => {
  let Icon;
  let background;
  let border;
  let items;
  let label;
  let text;
  const obj = react2;
  const cResult = obj.c(21);
  rarity = rarity.rarity;
  const tmp4 = closure_8();
  const obj2 = shared;
  const tmp5 = getRarityStyle(rarity, obj2.isThemeLight(useThemeDefault()));
  if (null == tmp5) {
    return null;
  } else {
    ({ Icon, label, background, border, text } = tmp5);
    if (cResult[0] === background) {
      let tmp6;
      if (cResult[1] === border) {
        tmp6 = cResult[2];
      }
      if (cResult[3] === tmp4.pill) {
        let tmp7;
        if (cResult[4] === tmp6) {
          tmp7 = cResult[5];
        }
        if (cResult[6] === Icon) {
          let tmp8;
          let tmp11;
          if (cResult[7] === text) {
            tmp8 = cResult[8];
          }
          if (cResult[9] !== text) {
            const obj3 = { color: text };
            cResult[9] = text;
            cResult[10] = obj3;
            tmp11 = obj3;
          } else {
            tmp11 = cResult[10];
          }
          if (cResult[11] === tmp4.label) {
            let tmp12;
            if (cResult[12] === tmp11) {
              tmp12 = cResult[13];
            }
            if (cResult[14] === label) {
              let tmp13;
              if (cResult[15] === tmp12) {
                tmp13 = cResult[16];
              }
              if (cResult[17] === tmp7) {
                if (cResult[18] === tmp8) {
                  let tmp16;
                  if (cResult[19] === tmp13) {
                    tmp16 = cResult[20];
                  }
                  return tmp16;
                }
              }
              const obj4 = { style: tmp7, children: items };
              items = [tmp8, tmp13];
              const tmp19 = hasOwnProperty(View, obj4);
              cResult[17] = tmp7;
              cResult[18] = tmp8;
              cResult[19] = tmp13;
              cResult[20] = tmp19;
              tmp16 = tmp19;
            }
            const obj5 = { variant: "text-xs/bold", color: "none", lineClamp: 1, style: tmp12, children: label };
            const tmp15 = React3(Text_Text.Text, obj5);
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
        const tmp10 = React3(Icon, obj6);
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
}) : ((rarity) => {
  let items;
  let items1;
  let items2;
  rarity = rarity.rarity;
  const tmp = closure_8();
  const obj = shared;
  const tmp4 = getRarityStyle(rarity, obj.isThemeLight(useThemeDefault()));
  if (null == tmp4) {
    return null;
  } else {
    const text = tmp4.text;
    const obj2 = { style: items, children: items1 };
    items = [tmp.pill, ];
    const obj4 = { backgroundColor: null, borderColor: null };
    ({ background: obj3.backgroundColor, border: obj3.borderColor } = tmp4);
    items[1] = obj4;
    const label = tmp4.label;
    const obj5 = { size: "xxs", color: text };
    items1 = [React3(tmp4.Icon, obj5), ];
    const obj6 = { variant: "text-xs/bold", color: "none", lineClamp: 1, style: items2, children: label };
    items2 = [tmp.label, ];
    const obj11 = { color: text };
    items2[1] = obj11;
    items1[1] = React3(Text_Text.Text, obj6);
    return hasOwnProperty(View, obj2);
  }
});
const result = size.fileFinishedImporting("modules/badges/native/BadgeRarityPill.tsx");

export default tmp4;
// === Module 10655: BadgeRarityPill ===

// Module 10655 (BadgeRarityPill)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import BadgeRarity from "BadgeRarity" /* 1376 */;
import ColorUtils from "ColorUtils" /* 4680 */;
import shared from "shared" /* 4682 */;
import useThemeDefault from "useTheme" /* 4763 */;
import Text_Text from "Text/Text" /* 4825 */;
import ExperimentalCommonIcon from "ExperimentalCommonIcon" /* 10656 */;
import ExperimentalRareIcon from "ExperimentalRareIcon" /* 10658 */;
import ExperimentalEpicIcon from "ExperimentalEpicIcon" /* 10660 */;
import ExperimentalMythicIcon from "ExperimentalMythicIcon" /* 10662 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let c6 = 0.24;
const createStyles = fn(4829);
let obj2 = { pill: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_6, minHeight: 20, borderRadius: nativeDefault.radii.round, borderWidth: 1 }, label: { textTransform: "uppercase" } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/BadgeRarityPill.tsx");

export default function BadgeRarityPill(rarity) {
  rarity = rarity.rarity;
  const tmp = closure_7();
  const isThemeLightResult = shared.isThemeLight(useThemeDefault());
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (BadgeRarity.BadgeRarity.COMMON === rarity) {
    const obj2 = { Icon: ExperimentalCommonIcon.ExperimentalCommonIcon, label: null, background: null, border: null, text: null };
    const intl3 = util.intl;
    obj2.label = intl3.string(util.t.L0K5ci);
    ({ OPACITY_24: obj6.background, NEUTRAL_35: obj6.border } = unsafe_rawColors);
    obj2.text = isThemeLightResult ? unsafe_rawColors.NEUTRAL_45 : unsafe_rawColors.NEUTRAL_15;
  } else {
    if (BadgeRarity.BadgeRarity.RARE === rarity) {
      const obj3 = { Icon: ExperimentalRareIcon.ExperimentalRareIcon, label: null, background: null, border: null, text: null };
      const intl2 = util.intl;
      obj3.label = intl2.string(util.t["sTx/5z"]);
      obj3.background = ColorUtils.hexOpacityToRgba(unsafe_rawColors.ILLO_BLUE_40, c6);
      obj3.border = unsafe_rawColors.ILLO_BLUE_40;
      obj3.text = isThemeLightResult ? unsafe_rawColors.ILLO_BLUE_50 : unsafe_rawColors.ILLO_BLUE_30;
      let tmp5 = obj3;
      const tmp2Result = ColorUtils;
    } else if (BadgeRarity.BadgeRarity.EPIC === rarity) {
      const obj4 = { Icon: ExperimentalEpicIcon.ExperimentalEpicIcon, label: null, background: null, border: null, text: null };
      const intl = util.intl;
      obj4.label = intl.string(util.t.RD8RiN);
      obj4.background = ColorUtils.hexOpacityToRgba(unsafe_rawColors.ILLO_PURPLE_40, c6);
      obj4.border = unsafe_rawColors.ILLO_PURPLE_40;
      obj4.text = isThemeLightResult ? unsafe_rawColors.ILLO_PURPLE_50 : unsafe_rawColors.ILLO_PURPLE_30;
      tmp5 = obj4;
      const tmp2Result3 = ColorUtils;
    } else {
      tmp5 = null;
      if (BadgeRarity.BadgeRarity.MYTHIC === rarity) {
        const obj5 = { Icon: ExperimentalMythicIcon.ExperimentalMythicIcon, label: null, background: null, border: null, text: null };
        const intl4 = util.intl;
        obj5.label = intl4.string(util.t.vqc1ol);
        obj5.background = ColorUtils.hexOpacityToRgba(unsafe_rawColors.ILLO_ORANGE_40, c6);
        obj5.border = unsafe_rawColors.ILLO_ORANGE_40;
        obj5.text = isThemeLightResult ? unsafe_rawColors.ILLO_ORANGE_50 : unsafe_rawColors.ILLO_ORANGE_30;
        tmp5 = obj5;
        const tmp2Result4 = ColorUtils;
      }
    }
    if (null == tmp5) {
      return null;
    } else {
      const text = tmp5.text;
      const obj7 = { style: null, children: null };
      const items = [tmp.pill, ];
      ({ background: obj10.backgroundColor, border: obj10.borderColor } = tmp5);
      items[1] = { backgroundColor: null, borderColor: null };
      obj7.style = items;
      const obj9 = { size: "xxs", color: text };
      const items1 = [React4(tmp5.Icon, obj9), ];
      const obj11 = { variant: "text-xs/bold", color: "none", lineClamp: 1, style: null, children: null };
      const items2 = [tmp.label, ];
      const obj12 = { color: text };
      items2[1] = obj12;
      obj11.style = items2;
      obj11.children = tmp5.label;
      items1[1] = React4(Text_Text.Text, obj11);
      obj7.children = items1;
      return hasOwnProperty(View, obj7);
    }
  }
};
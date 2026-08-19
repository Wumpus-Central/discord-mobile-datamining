// === Module 14638: ActivityCardsItem ===

// Module 14638 (ActivityCardsItem)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import ActivityCardItemDefault from "ActivityCardItem" /* 14639 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceActivityCardsItem.tsx");

export default function ActivityCardsItem(animatedStyles) {
  animatedStyles = animatedStyles.animatedStyles;
  const obj = { paddingVertical: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16 };
  obj[0] = obj;
  obj[1] = animatedStyles.cards;
  obj[2] = function renderItem(item) {
    const merged = Object.assign(item.item);
    return jsx(ActivityCardItemDefault, { animatedStyles });
  };
  obj[3] = function keyExtractor(title) {
    return title.title;
  };
  return jsx(animatedStyles(8029).FlashList, { paddingVertical: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16 });
};
// discord_app/modules/user_settings/appearance/native/components/SettingsAppearanceActivityCardsItem.tsx
import "noop";
import { jsx } from "jsxProd";
import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";

const require = arg1;
const result = require("noop").fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceActivityCardsItem.tsx");

export default function ActivityCardsItem(animatedStyles) {
  animatedStyles = animatedStyles.animatedStyles;
  let obj = { contentContainerStyle: null, data: null, renderItem: null, keyExtractor: null, showsHorizontalScrollIndicator: false, horizontal: true };
  obj = { paddingVertical: null, paddingHorizontal: null };
  obj[0] = Themes.space.PX_16;
  obj[1] = Themes.space.PX_16;
  obj[0] = obj;
  obj[1] = animatedStyles.cards;
  obj[2] = function renderItem(item) {
    const merged = Object.assign(item.item);
    return outer1_3(outer1_1(outer1_2[4]), { animatedStyles });
  };
  obj[3] = function keyExtractor(title) {
    return title.title;
  };
  return jsx(animatedStyles(7638).FlashList, { paddingVertical: null, paddingHorizontal: null });
};
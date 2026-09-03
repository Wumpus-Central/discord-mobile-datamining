// discord_app/modules/user_settings/appearance/native/components/SettingsAppearanceActivityCardsItem.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting(
  "modules/user_settings/appearance/native/components/SettingsAppearanceActivityCardsItem.tsx",
);

export default function ActivityCardsItem(animatedStyles) {
  animatedStyles = animatedStyles.animatedStyles;
  let obj = {
    contentContainerStyle: null,
    data: null,
    renderItem: null,
    keyExtractor: null,
    showsHorizontalScrollIndicator: false,
    horizontal: true,
  };
  obj = { paddingVertical: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16 };
  obj[0] = obj;
  obj[1] = animatedStyles.cards;
  obj[2] = function renderItem(item) {
    const merged = Object.assign(item.item);
    return closure_1_3(closure_1_1(closure_1_2[4]), { animatedStyles });
  };
  obj[3] = function keyExtractor(title) {
    return title.title;
  };
  return jsx(animatedStyles(8116).FlashList, {
    paddingVertical: ThemesDefault.space.PX_16,
    paddingHorizontal: ThemesDefault.space.PX_16,
  });
}

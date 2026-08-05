// discord_app/modules/emojis/hooks/useEmojiColorPalette.tsx
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import handleThemeChange from "handleThemeChange";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/emojis/hooks/useEmojiColorPalette.tsx");

export const useEmojiColorPalette = function useEmojiColorPalette(burst_colors) {
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => saturation.saturation);
  const obj = require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const items1 = [handleThemeChange];
  const stateFromStores1 = require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items1, () => callback(table[3]).isThemeDark(theme.theme));
  const obj2 = require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  return require("../utils/EmojiColorUtils.tsx") /* buildPlatformedThemedEmojiColorPalette */.buildEmojiColorPalette(burst_colors, stateFromStores, stateFromStores1);
};
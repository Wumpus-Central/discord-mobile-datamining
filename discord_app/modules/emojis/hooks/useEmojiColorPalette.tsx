// === Module 10461: useEmojiColorPalette ===

// Module 10461 (useEmojiColorPalette)
import initialize from "initialize" /* 589 */;
import buildPlatformedThemedEmojiColorPalette from "buildPlatformedThemedEmojiColorPalette" /* 8182 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import handleThemeChange from "handleThemeChange" /* 1302 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/emojis/hooks/useEmojiColorPalette.tsx");

export const useEmojiColorPalette = function useEmojiColorPalette(burst_colors) {
  const items = [closure_2];
  const stateFromStores = initialize.useStateFromStores(items, () => saturation.saturation);
  const items1 = [closure_3];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => callback(table[3]).isThemeDark(theme.theme));
  return buildPlatformedThemedEmojiColorPalette.buildEmojiColorPalette(burst_colors, stateFromStores, stateFromStores1);
};
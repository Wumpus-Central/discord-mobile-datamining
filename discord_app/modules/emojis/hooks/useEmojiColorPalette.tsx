// === Module 11121: useEmojiColorPalette ===

// Module 11121 (useEmojiColorPalette)
import initialize from "initialize" /* 586 */;
import buildPlatformedThemedEmojiColorPalette from "buildPlatformedThemedEmojiColorPalette" /* 7878 */;
import closure_2 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import closure_3 from "handleThemeChange" /* 1301 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/emojis/hooks/useEmojiColorPalette.tsx");

export const useEmojiColorPalette = function useEmojiColorPalette(burst_colors) {
  const items = [closure_2];
  const stateFromStores = initialize.useStateFromStores(items, () => saturation.saturation);
  const obj = initialize;
  const items1 = [closure_3];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => callback(table[3]).isThemeDark(theme.theme));
  const obj2 = initialize;
  return buildPlatformedThemedEmojiColorPalette.buildEmojiColorPalette(burst_colors, stateFromStores, stateFromStores1);
};
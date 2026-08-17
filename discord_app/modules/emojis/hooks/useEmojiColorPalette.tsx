// discord_app/modules/emojis/hooks/useEmojiColorPalette.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import buildPlatformedThemedEmojiColorPalette from "../utils/EmojiColorUtils.tsx";
import closure_2 from "../../a11y/AccessibilityStore.tsx";
import closure_3 from "../../user_settings/ThemeStore.tsx";

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
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { buildPlatformedThemedEmojiColorPalette } from "../utils/EmojiColorUtils.tsx";
// discord_app/modules/emojis/hooks/useEmojiColorPalette.tsx
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import handleThemeChange from "handleThemeChange";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/emojis/hooks/useEmojiColorPalette.tsx");

export const useEmojiColorPalette = function useEmojiColorPalette(burst_colors) {
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = initialize /* initialize */.useStateFromStores(items, () => saturation.saturation);
  const obj = initialize /* initialize */;
  const items1 = [handleThemeChange];
  const stateFromStores1 = initialize /* initialize */.useStateFromStores(items1, () => callback(table[3]).isThemeDark(theme.theme));
  const obj2 = initialize /* initialize */;
  return buildPlatformedThemedEmojiColorPalette /* buildPlatformedThemedEmojiColorPalette */.buildEmojiColorPalette(burst_colors, stateFromStores, stateFromStores1);
};
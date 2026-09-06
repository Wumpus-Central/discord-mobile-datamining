// discord_app/modules/emojis/hooks/useEmojiColorPalette.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import shared from "../../../design/shared.tsx";
import EmojiColorUtils from "../utils/EmojiColorUtils.tsx";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ThemeStore from "../../user_settings/ThemeStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emojis/hooks/useEmojiColorPalette.tsx");

export const useEmojiColorPalette = function useEmojiColorPalette(burst_colors) {
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => saturation.saturation);
  const items1 = [ThemeStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => shared.isThemeDark(theme.theme));
  return EmojiColorUtils.buildEmojiColorPalette(burst_colors, stateFromStores, stateFromStores1);
};

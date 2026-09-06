// === Module 11259: useEmojiColorPalette ===

// Module 11259 (useEmojiColorPalette)
import initialize from "initialize" /* 504 */;
import shared from "shared" /* 4411 */;
import EmojiColorUtils from "EmojiColorUtils" /* 7957 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import ThemeStore from "ThemeStore" /* 1183 */;

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
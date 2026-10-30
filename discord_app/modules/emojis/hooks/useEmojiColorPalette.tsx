// === Module 10076: useEmojiColorPalette ===

// Module 10076 (useEmojiColorPalette)
import initialize from "initialize" /* 504 */;
import shared from "shared" /* 5016 */;
import EmojiColorUtils from "EmojiColorUtils" /* 8407 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import ThemeStore from "ThemeStore" /* 1193 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emojis/hooks/useEmojiColorPalette.tsx");

export function useEmojiColorPalette(burst_colors) {
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => saturation.saturation);
  const items1 = [ThemeStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => shared.isThemeDark(theme.theme));
  return EmojiColorUtils.buildEmojiColorPalette(burst_colors, stateFromStores, stateFromStores1);
}
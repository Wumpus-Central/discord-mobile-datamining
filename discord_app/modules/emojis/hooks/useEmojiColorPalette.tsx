// === Module 11804: useEmojiColorPalette ===

// Module 11804 (useEmojiColorPalette)
import initialize from "initialize" /* 504 */;
import shared from "shared" /* 5250 */;
import EmojiColorUtils from "EmojiColorUtils" /* 9118 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import ThemeStore from "ThemeStore" /* 1192 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emojis/hooks/useEmojiColorPalette.tsx");

export function useEmojiColorPalette(burst_colors) {
  items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => saturation.saturation);
  const items1 = [ThemeStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => shared.isThemeDark(theme.theme));
  return EmojiColorUtils.buildEmojiColorPalette(burst_colors, stateFromStores, stateFromStores1);
}
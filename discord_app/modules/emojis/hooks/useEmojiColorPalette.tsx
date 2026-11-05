// === Module 10282: useEmojiColorPalette ===

// Module 10282 (useEmojiColorPalette)
import initialize from "initialize" /* 504 */;
import shared from "shared" /* 5150 */;
import EmojiColorUtils from "EmojiColorUtils" /* 8561 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;
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
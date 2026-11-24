// === Module 11561: useEmojiColorPalette ===

// Module 11561 (useEmojiColorPalette)
import initialize from "initialize" /* 504 */;
import shared from "shared" /* 4924 */;
import EmojiColorUtils from "EmojiColorUtils" /* 11562 */;
import AccessibilityStore from "AccessibilityStore" /* 4918 */;
import ThemeStore from "ThemeStore" /* 1191 */;

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
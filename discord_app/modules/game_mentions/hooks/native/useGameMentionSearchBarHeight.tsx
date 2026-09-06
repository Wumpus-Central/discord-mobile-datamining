// === Module 12388: useGameMentionSearchBarHeight ===

// Module 12388 (useGameMentionSearchBarHeight)
import _mod17 from "module_17" /* 17 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10119 */;
import size from "module_2" /* 2 */;

const StyleSheet = _mod17.StyleSheet;
let c3 = "text-sm/semibold";
let c4 = "text-sm/medium";
const result = size.fileFinishedImporting("modules/game_mentions/hooks/native/useGameMentionSearchBarHeight.tsx");

export default function useGameMentionSearchBarHeight() {
  const sum = 24 + useScaledTextLineHeight.useScaledTextLineHeight(c3);
  return sum + useScaledTextLineHeight.useScaledTextLineHeight(c4) + 12 + StyleSheet.hairlineWidth;
};
export const GAME_MENTION_SEARCH_BAR_TITLE_VARIANT = "text-sm/semibold";
export const GAME_MENTION_SEARCH_BAR_DESCRIPTION_VARIANT = "text-sm/medium";
export const GAME_MENTION_SEARCH_BAR_HEADER_PADDING_VERTICAL = 12;
export const GAME_MENTION_SEARCH_BAR_DESCRIPTION_PADDING_BOTTOM = 12;
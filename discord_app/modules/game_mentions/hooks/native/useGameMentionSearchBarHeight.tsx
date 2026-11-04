// === Module 14169: useGameMentionSearchBarHeight ===

// Module 14169 (useGameMentionSearchBarHeight)
import _mod17 from "module_17" /* 17 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 11232 */;
import size from "module_2" /* 2 */;

const StyleSheet = _mod17.StyleSheet;
let c3 = "body-sm/semibold";
let c4 = "body-sm/medium";
const result = size.fileFinishedImporting("modules/game_mentions/hooks/native/useGameMentionSearchBarHeight.tsx");

export default function useGameMentionSearchBarHeight() {
  const sum = 24 + useScaledTextLineHeight.useScaledTextLineHeight(c3);
  return sum + useScaledTextLineHeight.useScaledTextLineHeight(c4) + 12 + StyleSheet.hairlineWidth;
};
export const GAME_MENTION_SEARCH_BAR_TITLE_VARIANT = "body-sm/semibold";
export const GAME_MENTION_SEARCH_BAR_DESCRIPTION_VARIANT = "body-sm/medium";
export const GAME_MENTION_SEARCH_BAR_HEADER_PADDING_VERTICAL = 12;
export const GAME_MENTION_SEARCH_BAR_DESCRIPTION_PADDING_BOTTOM = 12;
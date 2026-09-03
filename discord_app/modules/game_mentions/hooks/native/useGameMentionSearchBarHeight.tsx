// === Module 12188: useGameMentionSearchBarHeight ===

// Module 12188 (useGameMentionSearchBarHeight)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import map from "map" /* 9106 */;

const StyleSheet = get_ActivityIndicator.StyleSheet;
let c3 = "text-sm/semibold";
let c4 = "text-sm/medium";
const result = set.fileFinishedImporting("modules/game_mentions/hooks/native/useGameMentionSearchBarHeight.tsx");

export default function useGameMentionSearchBarHeight() {
  const sum = 24 + map.useScaledTextLineHeight(c3);
  const obj = map;
  return sum + map.useScaledTextLineHeight(c4) + 12 + StyleSheet.hairlineWidth;
};
export const GAME_MENTION_SEARCH_BAR_TITLE_VARIANT = "text-sm/semibold";
export const GAME_MENTION_SEARCH_BAR_DESCRIPTION_VARIANT = "text-sm/medium";
export const GAME_MENTION_SEARCH_BAR_HEADER_PADDING_VERTICAL = 12;
export const GAME_MENTION_SEARCH_BAR_DESCRIPTION_PADDING_BOTTOM = 12;
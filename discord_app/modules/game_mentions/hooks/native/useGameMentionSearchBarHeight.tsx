// === Module 11611: useGameMentionSearchBarHeight ===

// Module 11611 (useGameMentionSearchBarHeight)
import { StyleSheet } from "get ActivityIndicator";

let c3 = "text-sm/semibold";
let c4 = "text-sm/medium";
const result = require("set").fileFinishedImporting("modules/game_mentions/hooks/native/useGameMentionSearchBarHeight.tsx");

export default function useGameMentionSearchBarHeight() {
  const sum = 24 + require(10068) /* map */.useScaledTextLineHeight(c3);
  const obj = require(10068) /* map */;
  return sum + require(10068) /* map */.useScaledTextLineHeight(c4) + 12 + StyleSheet.hairlineWidth;
};
export const GAME_MENTION_SEARCH_BAR_TITLE_VARIANT = "text-sm/semibold";
export const GAME_MENTION_SEARCH_BAR_DESCRIPTION_VARIANT = "text-sm/medium";
export const GAME_MENTION_SEARCH_BAR_HEADER_PADDING_VERTICAL = 12;
export const GAME_MENTION_SEARCH_BAR_DESCRIPTION_PADDING_BOTTOM = 12;
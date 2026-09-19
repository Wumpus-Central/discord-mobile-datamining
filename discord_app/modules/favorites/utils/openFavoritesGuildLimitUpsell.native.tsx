// === Module 10484: openFavoritesGuildLimitUpsell ===

// Module 10484 (openFavoritesGuildLimitUpsell)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const FavoritesGuildUpsellSheet = "FavoritesGuildUpsellSheet";
const result = size.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx");

export default function openFavoritesGuildLimitUpsell(limit) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10485, dependencyMap.paths), FavoritesGuildUpsellSheet, { limit, variant: "limit_reached", source: "limit_reached" });
};
export const FAVORITES_UPSELL_SHEET_KEY = "FavoritesGuildUpsellSheet";
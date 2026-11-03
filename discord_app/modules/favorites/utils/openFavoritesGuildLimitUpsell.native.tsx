// === Module 10964: openFavoritesGuildLimitUpsell ===

// Module 10964 (openFavoritesGuildLimitUpsell)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import size from "module_2" /* 2 */;

const FavoritesGuildUpsellSheet = "FavoritesGuildUpsellSheet";
const result = size.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx");

export default function openFavoritesGuildLimitUpsell(limit) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10965, dependencyMap.paths), FavoritesGuildUpsellSheet, { limit });
};
export const FAVORITES_UPSELL_SHEET_KEY = "FavoritesGuildUpsellSheet";
// === Module 11900: openFavoritesGuildLimitUpsell ===

// Module 11900 (openFavoritesGuildLimitUpsell)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const FavoritesGuildUpsellSheet = "FavoritesGuildUpsellSheet";
const result = size.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx");

export default function openFavoritesGuildLimitUpsell(limit) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11901, dependencyMap.paths), FavoritesGuildUpsellSheet, { limit });
};
export const FAVORITES_UPSELL_SHEET_KEY = "FavoritesGuildUpsellSheet";
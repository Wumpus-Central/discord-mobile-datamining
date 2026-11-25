// === Module 10699: openFavoritesGuildLimitUpsell ===

// Module 10699 (openFavoritesGuildLimitUpsell)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const FavoritesGuildUpsellSheet = "FavoritesGuildUpsellSheet";
const result = size.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx");

export default function openFavoritesGuildLimitUpsell(limit) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10700, dependencyMap.paths), FavoritesGuildUpsellSheet, { limit });
};
export const FAVORITES_UPSELL_SHEET_KEY = "FavoritesGuildUpsellSheet";
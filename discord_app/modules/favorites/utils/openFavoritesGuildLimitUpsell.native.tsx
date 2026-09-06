// === Module 10227: openFavoritesGuildLimitUpsell ===

// Module 10227 (openFavoritesGuildLimitUpsell)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import size from "module_2" /* 2 */;

const FavoritesGuildUpsellSheet = "FavoritesGuildUpsellSheet";
const result = size.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx");

export default function openFavoritesGuildLimitUpsell(limit) {
  const obj = { limit, variant: "limit_reached", source: "limit_reached" };
  obj.openLazy(asyncRequireImpl(10228, dependencyMap.paths), FavoritesGuildUpsellSheet, obj);
};
export const FAVORITES_UPSELL_SHEET_KEY = "FavoritesGuildUpsellSheet";
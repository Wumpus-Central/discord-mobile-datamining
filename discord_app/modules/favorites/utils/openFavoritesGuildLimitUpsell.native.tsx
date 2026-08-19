// === Module 9982: openFavoritesGuildLimitUpsell ===

// Module 9982 (openFavoritesGuildLimitUpsell)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;

const FavoritesGuildUpsellSheet = "FavoritesGuildUpsellSheet";
const result = obj132.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx");

export default function openFavoritesGuildLimitUpsell(limit) {
  const obj = { limit, variant: "limit_reached", source: "limit_reached" };
  obj.openLazy(asyncRequireImpl(9983, dependencyMap.paths), FavoritesGuildUpsellSheet, obj);
};
export const FAVORITES_UPSELL_SHEET_KEY = "FavoritesGuildUpsellSheet";
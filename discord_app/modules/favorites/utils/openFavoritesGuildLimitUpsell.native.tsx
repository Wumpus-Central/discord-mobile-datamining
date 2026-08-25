// === Module 9863: openFavoritesGuildLimitUpsell ===

// Module 9863 (openFavoritesGuildLimitUpsell)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;

const FavoritesGuildUpsellSheet = "FavoritesGuildUpsellSheet";
const result = set.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx");

export default function openFavoritesGuildLimitUpsell(limit) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { limit, variant: "limit_reached", source: "limit_reached" };
  obj.openLazy(asyncRequireImpl(9864, dependencyMap.paths), FavoritesGuildUpsellSheet, obj);
};
export const FAVORITES_UPSELL_SHEET_KEY = "FavoritesGuildUpsellSheet";
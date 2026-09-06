// discord_app/modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const FavoritesGuildUpsellSheet = "FavoritesGuildUpsellSheet";
const result = size.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx");

export default function openFavoritesGuildLimitUpsell(limit) {
  const obj = { limit, variant: "limit_reached", source: "limit_reached" };
  obj.openLazy(asyncRequireImpl(10228, dependencyMap.paths), FavoritesGuildUpsellSheet, obj);
}
export const FAVORITES_UPSELL_SHEET_KEY = "FavoritesGuildUpsellSheet";

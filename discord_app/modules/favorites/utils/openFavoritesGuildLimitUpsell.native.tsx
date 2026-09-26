// discord_app/modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx
import asyncRequireImpl from "../../../../_runtime/01981_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const FavoritesGuildUpsellSheet = "FavoritesGuildUpsellSheet";
const result = size.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx");

export default function openFavoritesGuildLimitUpsell(limit) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9689, dependencyMap.paths), FavoritesGuildUpsellSheet, {
    limit,
    variant: "limit_reached",
    source: "limit_reached",
  });
}
export const FAVORITES_UPSELL_SHEET_KEY = "FavoritesGuildUpsellSheet";

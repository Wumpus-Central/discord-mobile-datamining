// discord_app/modules/favorites/native/openFavoritesGuildActionSheet.tsx
import asyncRequireImpl from "../../../../_runtime/01897_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const FavoritesGuildActionSheet = "FavoritesGuildActionSheet";
const result = size.fileFinishedImporting("modules/favorites/native/openFavoritesGuildActionSheet.tsx");

export default function openFavoritesGuildActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16247, dependencyMap.paths), FavoritesGuildActionSheet, {
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet(FavoritesGuildActionSheet);
    },
  });
}

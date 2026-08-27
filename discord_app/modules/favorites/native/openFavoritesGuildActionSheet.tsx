// discord_app/modules/favorites/native/openFavoritesGuildActionSheet.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02009_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";

const FavoritesGuildActionSheet = "FavoritesGuildActionSheet";
const result = set.fileFinishedImporting("modules/favorites/native/openFavoritesGuildActionSheet.tsx");

export default function openFavoritesGuildActionSheet() {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    onClose() {
      callback(table[0]).hideActionSheet(closure_3);
    }
  };
  obj.openLazy(asyncRequireImpl(15638, dependencyMap.paths), FavoritesGuildActionSheet, obj);
};
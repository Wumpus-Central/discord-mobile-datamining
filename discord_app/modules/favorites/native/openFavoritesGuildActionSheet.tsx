// === Module 16878: openFavoritesGuildActionSheet ===

// Module 16878 (openFavoritesGuildActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const FavoritesGuildActionSheet = "FavoritesGuildActionSheet";
const result = size.fileFinishedImporting("modules/favorites/native/openFavoritesGuildActionSheet.tsx");

export default function openFavoritesGuildActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16879, dependencyMap.paths), FavoritesGuildActionSheet, {
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet(FavoritesGuildActionSheet);
    }
  });
};
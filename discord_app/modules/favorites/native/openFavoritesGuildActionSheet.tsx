// === Module 16469: openFavoritesGuildActionSheet ===

// Module 16469 (openFavoritesGuildActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const FavoritesGuildActionSheet = "FavoritesGuildActionSheet";
const result = size.fileFinishedImporting("modules/favorites/native/openFavoritesGuildActionSheet.tsx");

export default function openFavoritesGuildActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16470, dependencyMap.paths), FavoritesGuildActionSheet, {
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet(FavoritesGuildActionSheet);
    }
  });
};
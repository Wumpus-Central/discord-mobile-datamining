// === Module 17558: openFavoritesGuildActionSheet ===

// Module 17558 (openFavoritesGuildActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const FavoritesGuildActionSheet = "FavoritesGuildActionSheet";
const result = size.fileFinishedImporting("modules/favorites/native/openFavoritesGuildActionSheet.tsx");

export default function openFavoritesGuildActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17559, dependencyMap.paths), FavoritesGuildActionSheet, {
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet(FavoritesGuildActionSheet);
    }
  });
};
// === Module 16207: openFavoritesGuildActionSheet ===

// Module 16207 (openFavoritesGuildActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const FavoritesGuildActionSheet = "FavoritesGuildActionSheet";
const result = size.fileFinishedImporting("modules/favorites/native/openFavoritesGuildActionSheet.tsx");

export default function openFavoritesGuildActionSheet() {
  const obj = {
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet(FavoritesGuildActionSheet);
    }
  };
  obj.openLazy(asyncRequireImpl(16208, dependencyMap.paths), FavoritesGuildActionSheet, obj);
};
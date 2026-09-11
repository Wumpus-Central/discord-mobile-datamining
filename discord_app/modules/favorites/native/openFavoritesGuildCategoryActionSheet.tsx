// === Module 16180: openFavoritesGuildCategoryActionSheet ===

// Module 16180 (openFavoritesGuildCategoryActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/openFavoritesGuildCategoryActionSheet.tsx");

export default function openFavoritesGuildCategoryActionSheet(categoryId) {
  const combined = "FavoritesGuildCategoryLongPress-" + categoryId;
  const obj = {
    categoryId,
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(1896)(16181, dependencyMap.paths), combined, obj);
};
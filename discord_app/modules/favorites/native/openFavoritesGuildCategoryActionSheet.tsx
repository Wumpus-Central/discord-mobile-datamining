// === Module 16334: openFavoritesGuildCategoryActionSheet ===

// Module 16334 (openFavoritesGuildCategoryActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/openFavoritesGuildCategoryActionSheet.tsx");

export default function openFavoritesGuildCategoryActionSheet(categoryId) {
  const combined = "FavoritesGuildCategoryLongPress-" + categoryId;
  ActionSheetActionCreatorsDefault.openLazy(combined(1999)(16335, dependencyMap.paths), combined, {
    categoryId,
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet(combined);
    }
  });
};
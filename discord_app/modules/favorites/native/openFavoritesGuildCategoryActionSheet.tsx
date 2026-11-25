// === Module 17780: openFavoritesGuildCategoryActionSheet ===

// Module 17780 (openFavoritesGuildCategoryActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/openFavoritesGuildCategoryActionSheet.tsx");

export default function openFavoritesGuildCategoryActionSheet(categoryId) {
  const combined = "FavoritesGuildCategoryLongPress-" + categoryId;
  ActionSheetActionCreatorsDefault.openLazy(combined(2119)(17781, dependencyMap.paths), combined, {
    categoryId,
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet(combined);
    }
  });
};
// === Module 17531: openFavoritesGuildCategoryActionSheet ===

// Module 17531 (openFavoritesGuildCategoryActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/openFavoritesGuildCategoryActionSheet.tsx");

export default function openFavoritesGuildCategoryActionSheet(categoryId) {
  const combined = "FavoritesGuildCategoryLongPress-" + categoryId;
  ActionSheetActionCreatorsDefault.openLazy(combined(2002)(17532, dependencyMap.paths), combined, {
    categoryId,
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet(combined);
    }
  });
};
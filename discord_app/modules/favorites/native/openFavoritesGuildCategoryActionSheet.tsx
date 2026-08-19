// === Module 15371: openFavoritesGuildCategoryActionSheet ===

// Module 15371 (openFavoritesGuildCategoryActionSheet)
import obj132 from "obj132" /* 2 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;

const result = obj132.fileFinishedImporting("modules/favorites/native/openFavoritesGuildCategoryActionSheet.tsx");

export default function openFavoritesGuildCategoryActionSheet(categoryId) {
  const combined = "FavoritesGuildCategoryLongPress-" + categoryId;
  const obj = {
    categoryId,
    onClose() {
      ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(2007)(15372, dependencyMap.paths), combined, obj);
};
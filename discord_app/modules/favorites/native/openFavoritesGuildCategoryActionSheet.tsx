// === Module 15466: openFavoritesGuildCategoryActionSheet ===

// Module 15466 (openFavoritesGuildCategoryActionSheet)
import set from "set" /* 2 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;

const result = set.fileFinishedImporting("modules/favorites/native/openFavoritesGuildCategoryActionSheet.tsx");

export default function openFavoritesGuildCategoryActionSheet(categoryId) {
  const combined = "FavoritesGuildCategoryLongPress-" + categoryId;
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    categoryId,
    onClose() {
      closure_1_1(closure_1_2[0]).hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(2009)(15467, dependencyMap.paths), combined, obj);
};
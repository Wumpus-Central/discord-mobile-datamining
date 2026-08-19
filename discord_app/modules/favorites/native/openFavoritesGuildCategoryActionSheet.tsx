// discord_app/modules/favorites/native/openFavoritesGuildCategoryActionSheet.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";

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
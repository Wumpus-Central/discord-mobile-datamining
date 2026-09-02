// discord_app/modules/favorites/native/openFavoritesGuildCategoryActionSheet.tsx
import set from "../../../../_runtime/00002_set.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";

const result = set.fileFinishedImporting("modules/favorites/native/openFavoritesGuildCategoryActionSheet.tsx");

export default function openFavoritesGuildCategoryActionSheet(categoryId) {
  const combined = "FavoritesGuildCategoryLongPress-" + categoryId;
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    categoryId,
    onClose() {
      closure_1_1(closure_1_2[0]).hideActionSheet(combined);
    },
  };
  obj.openLazy(combined(2008)(15930, dependencyMap.paths), combined, obj);
}

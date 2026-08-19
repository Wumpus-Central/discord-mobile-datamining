// discord_app/modules/favorites/native/FavoritesGuildAddActionSheet.tsx
import ACTION_SHEET_HEIGHT_HALF from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import FavoritesGuildAddCategoryActionSheet from "FavoritesGuildAddCategoryActionSheet.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

require = fn;
function handleCreateCategory() {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(FavoritesGuildAddActionSheet);
  const result = FavoritesGuildAddCategoryActionSheet.openFavoritesGuildAddCategoryActionSheet();
}
({ jsx: c4, jsxs: c5 } = jsxProd);
const FavoritesGuildAddActionSheet = "FavoritesGuildAddActionSheet";
let result = require("obj132").fileFinishedImporting("modules/favorites/native/FavoritesGuildAddActionSheet.tsx");

export const openFavoritesGuildAddActionSheet = function openFavoritesGuildAddActionSheet() {
  const obj = { content: callback(FavoritesGuildAddActionSheet, {}), key: FavoritesGuildAddActionSheet };
  obj.showActionSheet(obj);
};
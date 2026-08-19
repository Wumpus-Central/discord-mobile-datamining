// === Module 15413: handleCreateCategory ===

// Module 15413 (handleCreateCategory)
import ACTION_SHEET_HEIGHT_HALF from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import FavoritesGuildAddCategoryActionSheet from "FavoritesGuildAddCategoryActionSheet" /* 15414 */;
import noop from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

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
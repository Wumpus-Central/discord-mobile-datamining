// === Module 15414: FavoritesGuildAddCategoryActionSheet ===

// Module 15414 (FavoritesGuildAddCategoryActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import ACTION_SHEET_HEIGHT_HALF from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { MAX_FAVORITE_CATEGORY_NAME_LENGTH as closure_5 } from "date" /* 1429 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
({ jsx: closure_6, jsxs: error } = jsxProd);
const FavoritesGuildAddCategoryActionSheet = "FavoritesGuildAddCategoryActionSheet";
const createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { gap: ThemesDefault.space.PX_16 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/favorites/native/FavoritesGuildAddCategoryActionSheet.tsx");

export const openFavoritesGuildAddCategoryActionSheet = function openFavoritesGuildAddCategoryActionSheet() {
  const obj = { content: callback2(FavoritesGuildAddCategoryActionSheet, {}), key: FavoritesGuildAddCategoryActionSheet };
  obj.showActionSheet(obj);
};
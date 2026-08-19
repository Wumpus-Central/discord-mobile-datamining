// === Module 15411: FavoritesGuildHeaderActionButton ===

// Module 15411 (FavoritesGuildHeaderActionButton)
import noopAll from "noop" /* 19 */;
import IconButton from "IconButton" /* 8035 */;
import useFavoritesGuildHeaderActionDefault from "useFavoritesGuildHeaderAction" /* 15412 */;
import handleCreateCategory from "handleCreateCategory" /* 15413 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = function FavoritesGuildHeaderActionButton() {
  ({ isPreview, exitPreview, label } = useFavoritesGuildHeaderActionDefault());
  const obj = { variant: "secondary", size: "sm", icon: importDefault(isPreview ? 6369 : 11374), onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  if (!isPreview) {
    exitPreview = handleCreateCategory.openFavoritesGuildAddActionSheet;
  }
  obj[3] = exitPreview;
  obj[4] = label;
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: importDefault(isPreview ? 6369 : 11374), onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
};
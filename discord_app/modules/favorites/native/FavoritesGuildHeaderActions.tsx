// === Module 15970: FavoritesGuildHeaderActionButton ===

// Module 15970 (FavoritesGuildHeaderActionButton)
import noopAll from "noop" /* 19 */;
import IconButton from "IconButton" /* 8015 */;
import useFavoritesGuildHeaderActionDefault from "useFavoritesGuildHeaderAction" /* 15971 */;
import handleCreateCategory from "handleCreateCategory" /* 15972 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = function FavoritesGuildHeaderActionButton() {
  ({ isPreview, exitPreview, label } = useFavoritesGuildHeaderActionDefault());
  const obj = { variant: "secondary", size: "sm", icon: importDefault(isPreview ? 5560 : 11989), onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  if (!isPreview) {
    exitPreview = handleCreateCategory.openFavoritesGuildAddActionSheet;
  }
  obj[3] = exitPreview;
  obj[4] = label;
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: importDefault(isPreview ? 5560 : 11989), onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
};
// discord_app/modules/favorites/native/FavoritesGuildHeaderActions.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useFavoritesGuildHeaderAction").fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = function FavoritesGuildHeaderActionButton() {
  let exitPreview;
  let isPreview;
  let label;
  ({ isPreview, exitPreview, label } = require("../hooks/useFavoritesGuildHeaderAction.tsx")());
  const obj = { variant: "secondary", size: "sm", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  obj[2] = importDefault(isPreview ? 5271 : 11496);
  if (!isPreview) {
    exitPreview = require("FavoritesGuildAddActionSheet.tsx") /* handleAddToFavorites */.openFavoritesGuildAddActionSheet;
  }
  obj[3] = exitPreview;
  obj[4] = label;
  return jsx(require("../../../design/components/Button/native/IconButton.native.tsx") /* IconButton */.IconButton, { variant: "secondary", size: "sm", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
};
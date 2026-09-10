// === Module 16232: FavoritesGuildHeaderActions ===

// Module 16232 (FavoritesGuildHeaderActions)
import IconButton from "IconButton" /* 8150 */;
import useFavoritesGuildHeaderActionDefault from "useFavoritesGuildHeaderAction" /* 16233 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 16234 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = function FavoritesGuildHeaderActionButton() {
  ({ isPreview, exitPreview, label } = useFavoritesGuildHeaderActionDefault());
  const obj = { variant: "secondary", size: "sm", icon: importDefault(isPreview ? 5731 : 12269), onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  if (!isPreview) {
    exitPreview = FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet;
  }
  obj.onPress = exitPreview;
  obj.accessibilityLabel = label;
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: importDefault(isPreview ? 5731 : 12269), onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
};
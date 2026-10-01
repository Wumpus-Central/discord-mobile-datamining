// === Module 15997: FavoritesGuildHeaderActions ===

// Module 15997 (FavoritesGuildHeaderActions)
import IconButton from "IconButton" /* 7536 */;
import useFavoritesGuildHeaderActionDefault from "useFavoritesGuildHeaderAction" /* 15998 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 15999 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = function FavoritesGuildHeaderActionButton() {
  ({ isPreview, exitPreview, label } = useFavoritesGuildHeaderActionDefault());
  const obj = { variant: "secondary", size: "sm", icon: importDefault(isPreview ? 6179 : 10979), onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  if (!isPreview) {
    exitPreview = FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet;
  }
  obj.onPress = exitPreview;
  obj.accessibilityLabel = label;
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: importDefault(isPreview ? 6179 : 10979), onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
};
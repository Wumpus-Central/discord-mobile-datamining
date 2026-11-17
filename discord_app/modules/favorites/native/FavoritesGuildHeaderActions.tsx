// === Module 18911: FavoritesGuildHeaderActions ===

// Module 18911 (FavoritesGuildHeaderActions)
import util from "util" /* 1113 */;
import _modDef3681 from "module_3681" /* 3681 */;
import IconButton from "IconButton" /* 7999 */;
import _modDef13692 from "module_13692" /* 13692 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 18912 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const obj = { variant: "secondary", size: "sm", icon: _modDef13692, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(_modDef3681.G9fGlP);
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: _modDef13692, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
}
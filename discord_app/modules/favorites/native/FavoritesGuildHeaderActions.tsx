// === Module 18483: FavoritesGuildHeaderActions ===

// Module 18483 (FavoritesGuildHeaderActions)
import util from "util" /* 1113 */;
import _modDef3606 from "module_3606" /* 3606 */;
import IconButton from "IconButton" /* 8119 */;
import _modDef11648 from "module_11648" /* 11648 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 18484 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const obj = { variant: "secondary", size: "sm", icon: _modDef11648, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(_modDef3606.G9fGlP);
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: _modDef11648, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
}
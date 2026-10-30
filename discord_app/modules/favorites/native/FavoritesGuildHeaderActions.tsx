// === Module 18155: FavoritesGuildHeaderActions ===

// Module 18155 (FavoritesGuildHeaderActions)
import util from "util" /* 1114 */;
import _modDef3447 from "module_3447" /* 3447 */;
import IconButton from "IconButton" /* 8020 */;
import _modDef11450 from "module_11450" /* 11450 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 18156 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const obj = { variant: "secondary", size: "sm", icon: _modDef11450, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(_modDef3447.G9fGlP);
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: _modDef11450, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
}
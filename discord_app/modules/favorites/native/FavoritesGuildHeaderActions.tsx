// === Module 18211: FavoritesGuildHeaderActions ===

// Module 18211 (FavoritesGuildHeaderActions)
import util from "util" /* 1113 */;
import _modDef3450 from "module_3450" /* 3450 */;
import IconButton from "IconButton" /* 8028 */;
import _modDef11485 from "module_11485" /* 11485 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 18212 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const obj = { variant: "secondary", size: "sm", icon: _modDef11485, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(_modDef3450.G9fGlP);
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: _modDef11485, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
}
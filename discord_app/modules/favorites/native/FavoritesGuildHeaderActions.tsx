// === Module 17668: FavoritesGuildHeaderActions ===

// Module 17668 (FavoritesGuildHeaderActions)
import util from "util" /* 1112 */;
import _modDef3802 from "module_3802" /* 3802 */;
import IconButton from "IconButton" /* 7591 */;
import _modDef13071 from "module_13071" /* 13071 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 17669 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const obj = { variant: "secondary", size: "sm", icon: _modDef13071, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(_modDef3802.G9fGlP);
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: _modDef13071, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
}
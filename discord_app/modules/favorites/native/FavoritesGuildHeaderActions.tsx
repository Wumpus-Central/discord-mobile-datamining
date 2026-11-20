// === Module 17544: FavoritesGuildHeaderActions ===

// Module 17544 (FavoritesGuildHeaderActions)
import util from "util" /* 1112 */;
import _modDef3703 from "module_3703" /* 3703 */;
import IconButton from "IconButton" /* 7471 */;
import _modDef12951 from "module_12951" /* 12951 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 17545 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const obj = { variant: "secondary", size: "sm", icon: _modDef12951, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(_modDef3703.G9fGlP);
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: _modDef12951, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
}
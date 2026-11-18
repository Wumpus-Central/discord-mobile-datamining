// === Module 17724: FavoritesGuildHeaderActions ===

// Module 17724 (FavoritesGuildHeaderActions)
import util from "util" /* 1113 */;
import _modDef3701 from "module_3701" /* 3701 */;
import IconButton from "IconButton" /* 7502 */;
import _modDef12999 from "module_12999" /* 12999 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 17725 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const obj = { variant: "secondary", size: "sm", icon: _modDef12999, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(_modDef3701.G9fGlP);
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: _modDef12999, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
}
// === Module 17717: FavoritesGuildHeaderActions ===

// Module 17717 (FavoritesGuildHeaderActions)
import util from "util" /* 1113 */;
import _modDef3701 from "module_3701" /* 3701 */;
import IconButton from "IconButton" /* 7472 */;
import _modDef12981 from "module_12981" /* 12981 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 17718 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const obj = { variant: "secondary", size: "sm", icon: _modDef12981, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(_modDef3701.G9fGlP);
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: _modDef12981, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
}
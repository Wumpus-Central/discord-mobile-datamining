// === Module 18868: FavoritesGuildHeaderActions ===

// Module 18868 (FavoritesGuildHeaderActions)
import util from "util" /* 1113 */;
import _modDef3679 from "module_3679" /* 3679 */;
import IconButton from "IconButton" /* 7988 */;
import _modDef13539 from "module_13539" /* 13539 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 18869 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const obj = { variant: "secondary", size: "sm", icon: _modDef13539, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(_modDef3679.G9fGlP);
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: _modDef13539, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
}
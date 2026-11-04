// === Module 18463: FavoritesGuildHeaderActions ===

// Module 18463 (FavoritesGuildHeaderActions)
import util from "util" /* 1113 */;
import _modDef3577 from "module_3577" /* 3577 */;
import IconButton from "IconButton" /* 8168 */;
import _modDef11674 from "module_11674" /* 11674 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 18464 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const obj = { variant: "secondary", size: "sm", icon: _modDef11674, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(_modDef3577.G9fGlP);
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: _modDef11674, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
}
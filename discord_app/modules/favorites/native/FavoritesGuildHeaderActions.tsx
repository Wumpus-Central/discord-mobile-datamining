// === Module 18739: FavoritesGuildHeaderActions ===

// Module 18739 (FavoritesGuildHeaderActions)
import util from "util" /* 1113 */;
import _modDef3629 from "module_3629" /* 3629 */;
import IconButton from "IconButton" /* 7922 */;
import _modDef13436 from "module_13436" /* 13436 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 18740 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const obj = { variant: "secondary", size: "sm", icon: _modDef13436, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(_modDef3629.G9fGlP);
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: _modDef13436, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
}
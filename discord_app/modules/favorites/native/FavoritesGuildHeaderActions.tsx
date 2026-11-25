// === Module 17819: FavoritesGuildHeaderActions ===

// Module 17819 (FavoritesGuildHeaderActions)
import util from "util" /* 1112 */;
import _modDef3856 from "module_3856" /* 3856 */;
import IconButton from "IconButton" /* 7910 */;
import _modDef13113 from "module_13113" /* 13113 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 17820 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const obj = { variant: "secondary", size: "sm", icon: _modDef13113, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(_modDef3856.G9fGlP);
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: _modDef13113, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
}
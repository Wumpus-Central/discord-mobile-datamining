// === Module 18543: FavoritesGuildHeaderActions ===

// Module 18543 (FavoritesGuildHeaderActions)
import util from "util" /* 1113 */;
import _modDef3608 from "module_3608" /* 3608 */;
import IconButton from "IconButton" /* 8098 */;
import _modDef11630 from "module_11630" /* 11630 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 18544 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const obj = { variant: "secondary", size: "sm", icon: _modDef11630, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(_modDef3608.G9fGlP);
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: _modDef11630, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
}
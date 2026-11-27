// === Module 17883: FavoritesGuildHeaderActions ===

// Module 17883 (FavoritesGuildHeaderActions)
import util from "util" /* 1112 */;
import _modDef3857 from "module_3857" /* 3857 */;
import IconButton from "IconButton" /* 7944 */;
import _modDef13173 from "module_13173" /* 13173 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 17884 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const obj = { variant: "secondary", size: "sm", icon: _modDef13173, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(_modDef3857.G9fGlP);
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: _modDef13173, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
}
// === Module 17708: FavoritesGuildHeaderActions ===

// Module 17708 (FavoritesGuildHeaderActions)
import util from "util" /* 1112 */;
import _modDef3804 from "module_3804" /* 3804 */;
import IconButton from "IconButton" /* 7811 */;
import _modDef12990 from "module_12990" /* 12990 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 17709 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const obj = { variant: "secondary", size: "sm", icon: _modDef12990, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(_modDef3804.G9fGlP);
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: _modDef12990, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
}
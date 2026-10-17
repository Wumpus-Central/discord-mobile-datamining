// === Module 17275: FavoritesGuildHeaderActions ===

// Module 17275 (FavoritesGuildHeaderActions)
import c from "c" /* 576 */;
import util from "util" /* 1128 */;
import _modDef3465 from "module_3465" /* 3465 */;
import IconButton from "IconButton" /* 7840 */;
import _modDef10916 from "module_10916" /* 10916 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 17276 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = ReactCompilerGating.isReactCompilerEnabled() ? (function FavoritesGuildHeaderActionButton() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "secondary", size: "sm", icon: _modDef10916, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(_modDef3465.G9fGlP);
    const tmp7 = jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: _modDef10916, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function FavoritesGuildHeaderActionButton() {
  const obj = { variant: "secondary", size: "sm", icon: _modDef10916, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(_modDef3465.G9fGlP);
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: _modDef10916, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
});
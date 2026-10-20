// === Module 17327: FavoritesGuildHeaderActions ===

// Module 17327 (FavoritesGuildHeaderActions)
import c from "c" /* 576 */;
import util from "util" /* 1128 */;
import _modDef3402 from "module_3402" /* 3402 */;
import IconButton from "IconButton" /* 7907 */;
import _modDef10955 from "module_10955" /* 10955 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 17328 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = ReactCompilerGating.isReactCompilerEnabled() ? (function FavoritesGuildHeaderActionButton() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "secondary", size: "sm", icon: _modDef10955, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(_modDef3402.G9fGlP);
    const tmp7 = jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: _modDef10955, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function FavoritesGuildHeaderActionButton() {
  const obj = { variant: "secondary", size: "sm", icon: _modDef10955, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(_modDef3402.G9fGlP);
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: _modDef10955, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
});
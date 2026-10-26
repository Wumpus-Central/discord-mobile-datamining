// === Module 17579: FavoritesGuildHeaderActions ===

// Module 17579 (FavoritesGuildHeaderActions)
import c from "c" /* 576 */;
import util from "util" /* 1128 */;
import _modDef3412 from "module_3412" /* 3412 */;
import IconButton from "IconButton" /* 7959 */;
import _modDef11152 from "module_11152" /* 11152 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 17580 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = ReactCompilerGating.isReactCompilerEnabled() ? (function FavoritesGuildHeaderActionButton() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "secondary", size: "sm", icon: _modDef11152, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(_modDef3412.G9fGlP);
    const tmp7 = jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: _modDef11152, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function FavoritesGuildHeaderActionButton() {
  const obj = { variant: "secondary", size: "sm", icon: _modDef11152, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(_modDef3412.G9fGlP);
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: _modDef11152, onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
});
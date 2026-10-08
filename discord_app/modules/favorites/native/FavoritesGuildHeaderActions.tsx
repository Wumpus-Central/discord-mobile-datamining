// === Module 16374: FavoritesGuildHeaderActions ===

// Module 16374 (FavoritesGuildHeaderActions)
import c from "c" /* 576 */;
import IconButton from "IconButton" /* 8106 */;
import useFavoritesGuildHeaderActionDefault from "useFavoritesGuildHeaderAction" /* 16375 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 16376 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = ReactCompilerGating.isReactCompilerEnabled() ? (function FavoritesGuildHeaderActionButton() {
  const cResult = c.c(4);
  ({ isPreview, label, exitPreview } = useFavoritesGuildHeaderActionDefault());
  const tmp4Result = importDefault(isPreview ? 6211 : 11216);
  if (!isPreview) {
    exitPreview = FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet;
  }
  if (cResult[0] === label) {
    if (cResult[1] === tmp4Result) {
      if (cResult[2] === exitPreview) {
        let tmp7 = cResult[3];
      }
      return tmp7;
    }
  }
  const tmp8 = jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: tmp4Result, onPress: exitPreview, accessibilityLabel: label, maxFontSizeMultiplier: 1 });
  cResult[0] = label;
  cResult[1] = tmp4Result;
  cResult[2] = exitPreview;
  cResult[3] = tmp8;
  tmp7 = tmp8;
  const tmp5 = useFavoritesGuildHeaderActionDefault();
}) : (function FavoritesGuildHeaderActionButton() {
  ({ isPreview, exitPreview, label } = useFavoritesGuildHeaderActionDefault());
  const obj = { variant: "secondary", size: "sm", icon: importDefault(isPreview ? 6211 : 11216), onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  if (!isPreview) {
    exitPreview = FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet;
  }
  obj.onPress = exitPreview;
  obj.accessibilityLabel = label;
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: importDefault(isPreview ? 6211 : 11216), onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
});
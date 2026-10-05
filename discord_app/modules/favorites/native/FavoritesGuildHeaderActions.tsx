// === Module 16075: FavoritesGuildHeaderActions ===

// Module 16075 (FavoritesGuildHeaderActions)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import IconButton2 from "IconButton" /* 7575 */;
import useFavoritesGuildHeaderActionDefault from "useFavoritesGuildHeaderAction" /* 16076 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 16077 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let exitPreview;
  let isPreview;
  let label;
  const obj = react2;
  const cResult = obj.c(4);
  ({ isPreview, label, exitPreview } = useFavoritesGuildHeaderActionDefault());
  useFavoritesGuildHeaderActionDefault();
  const tmp4Result = importDefault(isPreview ? 6018 : 10979);
  if (!isPreview) {
    exitPreview = FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet;
  }
  if (cResult[0] === label) {
    if (cResult[1] === tmp4Result) {
      let tmp7;
      if (cResult[2] === exitPreview) {
        tmp7 = cResult[3];
      }
      return tmp7;
    }
  }
  const tmp8 = jsx(IconButton2.IconButton, { variant: "secondary", size: "sm", icon: tmp4Result, onPress: exitPreview, accessibilityLabel: label, maxFontSizeMultiplier: 1 });
  cResult[0] = label;
  cResult[1] = tmp4Result;
  cResult[2] = exitPreview;
  cResult[3] = tmp8;
  tmp7 = tmp8;
}) : (() => {
  let exitPreview;
  let isPreview;
  let label;
  ({ isPreview, exitPreview, label } = useFavoritesGuildHeaderActionDefault());
  useFavoritesGuildHeaderActionDefault();
  const IconButton = IconButton2.IconButton;
  if (!isPreview) {
    exitPreview = FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet;
  }
  return <IconButton variant="secondary" size="sm" icon={importDefault(isPreview ? 6018 : 10979)} onPress={exitPreview} accessibilityLabel={label} maxFontSizeMultiplier={1} />;
});
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = tmp3;
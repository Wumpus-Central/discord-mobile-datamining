// discord_app/modules/favorites/native/FavoritesGuildHeaderActions.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import IconButton2 from "../../../design/components/Button/native/IconButton.native.tsx";
import useFavoritesGuildHeaderActionDefault from "../hooks/useFavoritesGuildHeaderAction.tsx";
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
      const tmp8 = jsx(IconButton2.IconButton, {
        variant: "secondary",
        size: "sm",
        icon: tmp4Result,
        onPress: exitPreview,
        accessibilityLabel: label,
        maxFontSizeMultiplier: 1,
      });
      cResult[0] = label;
      cResult[1] = tmp4Result;
      cResult[2] = exitPreview;
      cResult[3] = tmp8;
      tmp7 = tmp8;
    }
  : () => {
      let exitPreview;
      let isPreview;
      let label;
      ({ isPreview, exitPreview, label } = useFavoritesGuildHeaderActionDefault());
      useFavoritesGuildHeaderActionDefault();
      const IconButton = IconButton2.IconButton;
      if (!isPreview) {
        exitPreview = FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet;
      }
      return (
        <IconButton
          variant="secondary"
          size="sm"
          icon={importDefault(isPreview ? 6018 : 10979)}
          onPress={exitPreview}
          accessibilityLabel={label}
          maxFontSizeMultiplier={1}
        />
      );
    };
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = tmp3;

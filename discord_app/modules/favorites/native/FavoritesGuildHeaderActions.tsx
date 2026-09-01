// discord_app/modules/favorites/native/FavoritesGuildHeaderActions.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import IconButton from "../../../design/components/Button/native/IconButton.native.tsx";
import useFavoritesGuildHeaderActionDefault from "../hooks/useFavoritesGuildHeaderAction.tsx";
import handleCreateCategory from "FavoritesGuildAddActionSheet.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = function FavoritesGuildHeaderActionButton() {
  ({ isPreview, exitPreview, label } = useFavoritesGuildHeaderActionDefault());
  const obj = {
    variant: "secondary",
    size: "sm",
    icon: importDefault(isPreview ? 5552 : 11766),
    onPress: null,
    accessibilityLabel: null,
    maxFontSizeMultiplier: 1,
  };
  if (!isPreview) {
    exitPreview = handleCreateCategory.openFavoritesGuildAddActionSheet;
  }
  obj[3] = exitPreview;
  obj[4] = label;
  return jsx(IconButton.IconButton, {
    variant: "secondary",
    size: "sm",
    icon: importDefault(isPreview ? 5552 : 11766),
    onPress: null,
    accessibilityLabel: null,
    maxFontSizeMultiplier: 1,
  });
};

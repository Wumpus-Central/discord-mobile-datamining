// discord_app/modules/favorites/native/FavoritesGuildHeaderActions.tsx
import IconButton from "../../../design/components/Button/native/IconButton.native.tsx";
import useFavoritesGuildHeaderActionDefault from "../hooks/useFavoritesGuildHeaderAction.tsx";
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = function FavoritesGuildHeaderActionButton() {
  ({ isPreview, exitPreview, label } = useFavoritesGuildHeaderActionDefault());
  const obj = {
    variant: "secondary",
    size: "sm",
    icon: importDefault(isPreview ? 5681 : 12199),
    onPress: null,
    accessibilityLabel: null,
    maxFontSizeMultiplier: 1,
  };
  if (!isPreview) {
    exitPreview = FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet;
  }
  obj.onPress = exitPreview;
  obj.accessibilityLabel = label;
  return jsx(IconButton.IconButton, {
    variant: "secondary",
    size: "sm",
    icon: importDefault(isPreview ? 5681 : 12199),
    onPress: null,
    accessibilityLabel: null,
    maxFontSizeMultiplier: 1,
  });
};

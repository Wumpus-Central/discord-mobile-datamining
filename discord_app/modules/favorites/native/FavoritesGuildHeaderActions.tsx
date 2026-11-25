// discord_app/modules/favorites/native/FavoritesGuildHeaderActions.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3856 from "../intl/FavoritesGuild.messages.js";
import IconButton from "../../../design/components/Button/native/IconButton.native.tsx";
import _modDef13113 from "../../../../_runtime/metro/13113__.js";
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const obj = {
    variant: "secondary",
    size: "sm",
    icon: _modDef13113,
    onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet,
    accessibilityLabel: null,
    maxFontSizeMultiplier: 1,
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(_modDef3856.G9fGlP);
  return jsx(IconButton.IconButton, {
    variant: "secondary",
    size: "sm",
    icon: _modDef13113,
    onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet,
    accessibilityLabel: null,
    maxFontSizeMultiplier: 1,
  });
}

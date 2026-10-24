// discord_app/modules/favorites/native/FavoritesGuildHeaderActions.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import _modDef3412 from "../intl/FavoritesGuild.messages.js";
import IconButton from "../../../design/components/Button/native/IconButton.native.tsx";
import _modDef11149 from "../../../../_runtime/metro/11149__.js";
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = ReactCompilerGating.isReactCompilerEnabled()
  ? function FavoritesGuildHeaderActionButton() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          variant: "secondary",
          size: "sm",
          icon: _modDef11149,
          onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet,
          accessibilityLabel: null,
          maxFontSizeMultiplier: 1,
        };
        const intl = util.intl;
        obj2.accessibilityLabel = intl.string(_modDef3412.G9fGlP);
        const tmp7 = jsx(IconButton.IconButton, {
          variant: "secondary",
          size: "sm",
          icon: _modDef11149,
          onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet,
          accessibilityLabel: null,
          maxFontSizeMultiplier: 1,
        });
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function FavoritesGuildHeaderActionButton() {
      const obj = {
        variant: "secondary",
        size: "sm",
        icon: _modDef11149,
        onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet,
        accessibilityLabel: null,
        maxFontSizeMultiplier: 1,
      };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(_modDef3412.G9fGlP);
      return jsx(IconButton.IconButton, {
        variant: "secondary",
        size: "sm",
        icon: _modDef11149,
        onPress: FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet,
        accessibilityLabel: null,
        maxFontSizeMultiplier: 1,
      });
    };

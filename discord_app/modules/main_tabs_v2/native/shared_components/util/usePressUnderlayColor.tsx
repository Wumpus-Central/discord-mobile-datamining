import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { map } from "../../../../../design/tokens/native/useToken.tsx";
import { useTheme } from "../../../../../hooks/useTheme.tsx";
// discord_app/modules/main_tabs_v2/native/shared_components/util/usePressUnderlayColor.tsx
import { DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR as closure_3 } from "CHANNEL_THEME_COLOR_PALETTE";

const result = require("map").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/util/usePressUnderlayColor.tsx");

export default function usePressUnderlayColor(arr) {
  const tmp2 = useTheme();
  const tmp3 = require;
  const token = map /* map */.useToken(Themes.colors.INTERACTIVE_BACKGROUND_ACTIVE);
  let substr;
  if (arr != null) {
    substr = arr.slice(0, arr.length - 2);
  }
  let hexWithOpacityResult = token;
  if (null != substr) {
    hexWithOpacityResult = token;
    if (arr !== closure_3) {
      let num3 = 0.08;
      if ("dark" === tmp2) {
        num3 = 0.12;
      }
      hexWithOpacityResult = tmp3(4129).hexWithOpacity(substr, num3);
      const tmp3Result = tmp3(4129);
    }
  }
  return hexWithOpacityResult;
};
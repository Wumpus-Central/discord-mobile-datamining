// discord_app/modules/main_tabs_v2/native/shared_components/util/usePressUnderlayColor.tsx
import set from "../../../../../../_runtime/00002_set.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../../../design/tokens/native/useToken.tsx";
import hexToRgba from "../../../../../utils/ColorUtils.tsx";
import useThemeDefault from "../../../../../hooks/useTheme.tsx";
import CHANNEL_THEME_COLOR_PALETTE from "../../../channel_emoji/ChannelEmojiConstants.tsx";

let closure_3 = CHANNEL_THEME_COLOR_PALETTE.DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR;
const result = set.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/util/usePressUnderlayColor.tsx",
);

export default function usePressUnderlayColor(arr) {
  const tmp2 = useThemeDefault();
  const tmp3 = require;
  const token = map.useToken(ThemesDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE);
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
      hexWithOpacityResult = hexToRgba.hexWithOpacity(substr, num3);
      const tmp3Result = hexToRgba;
    }
  }
  return hexWithOpacityResult;
}

// discord_app/modules/main_tabs_v2/native/shared_components/util/usePressUnderlayColor.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import ColorUtils from "../../../../../utils/ColorUtils.tsx";
import shared from "../../../../../design/shared.tsx";
import useThemeDefault from "../../../../../hooks/useTheme.tsx";
import ChannelEmojiConstants from "../../../channel_emoji/ChannelEmojiConstants.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let closure_3 = ChannelEmojiConstants.DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR;
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/util/usePressUnderlayColor.tsx",
);

export default function usePressUnderlayColor(arr) {
  const tmp2 = useThemeDefault();
  const token = useToken.useToken(nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE);
  let substr;
  if (arr != null) {
    substr = arr.slice(0, arr.length - 2);
  }
  let hexWithOpacityResult = token;
  if (null != substr) {
    hexWithOpacityResult = token;
    if (arr !== closure_3) {
      const tmp3Result = shared;
      let num3 = 0.08;
      if (tmp3Result.isThemeDark(tmp2)) {
        num3 = 0.12;
      }
      hexWithOpacityResult = tmp3Result.hexWithOpacity(substr, num3);
    }
  }
  return hexWithOpacityResult;
}

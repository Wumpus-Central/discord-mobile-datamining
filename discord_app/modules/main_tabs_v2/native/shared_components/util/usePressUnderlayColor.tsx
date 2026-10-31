// === Module 19078: usePressUnderlayColor ===

// Module 19078 (usePressUnderlayColor)
import nativeDefault from "native" /* 575 */;
import ColorUtils from "ColorUtils" /* 5011 */;
import shared from "shared" /* 5021 */;
import useThemeDefault from "useTheme" /* 5253 */;
import useToken from "useToken" /* 5596 */;
import ChannelEmojiConstants from "ChannelEmojiConstants" /* 19079 */;
import size from "module_2" /* 2 */;

let closure_3 = ChannelEmojiConstants.DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/util/usePressUnderlayColor.tsx");

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
      const tmp3Result = ColorUtils;
      let num3 = 0.08;
      if (tmp3Result2.isThemeDark(tmp2)) {
        num3 = 0.12;
      }
      hexWithOpacityResult = tmp3Result.hexWithOpacity(substr, num3);
      tmp3Result2 = shared;
    }
  }
  return hexWithOpacityResult;
};
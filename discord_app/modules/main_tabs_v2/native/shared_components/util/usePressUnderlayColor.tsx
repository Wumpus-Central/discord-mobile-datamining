// === Module 17402: usePressUnderlayColor ===

// Module 17402 (usePressUnderlayColor)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4580 */;
import ColorUtils from "ColorUtils" /* 4727 */;
import shared from "shared" /* 4729 */;
import useThemeDefault from "useTheme" /* 4791 */;
import ChannelEmojiConstants from "ChannelEmojiConstants" /* 17403 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = ChannelEmojiConstants.DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/util/usePressUnderlayColor.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arr) => {
  const cResult = c.c(4);
  const tmp4 = useThemeDefault();
  const token = useToken.useToken(nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE);
  if (cResult[0] === arr) {
    if (cResult[1] === token) {
      if (cResult[2] === tmp4) {
        let tmp6 = cResult[3];
      }
      return tmp6;
    }
  }
  let substr;
  if (arr != null) {
    substr = arr.slice(0, arr.length - 2);
  }
  let hexWithOpacityResult = token;
  if (null != substr) {
    hexWithOpacityResult = token;
    if (arr !== closure_3) {
      const tmpResult = ColorUtils;
      let num3 = 0.08;
      if (tmpResult2.isThemeDark(tmp4)) {
        num3 = 0.12;
      }
      hexWithOpacityResult = tmpResult.hexWithOpacity(substr, num3);
      tmpResult2 = shared;
    }
  }
  cResult[0] = arr;
  cResult[1] = token;
  cResult[2] = tmp4;
  cResult[3] = hexWithOpacityResult;
  tmp6 = hexWithOpacityResult;
}) : ((arr) => {
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
});
// === Module 17402: usePressUnderlayColor ===

// Module 17402 (usePressUnderlayColor)
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4580 */;
import ColorUtils from "ColorUtils" /* 4727 */;
import shared from "shared" /* 4729 */;
import useThemeDefault from "useTheme" /* 4791 */;
import ChannelEmojiConstants from "ChannelEmojiConstants" /* 17403 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = ChannelEmojiConstants.DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arr) => {
  const obj = react;
  const cResult = obj.c(4);
  const tmp4 = useThemeDefault();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE);
  if (cResult[0] === arr) {
    if (cResult[1] === token) {
      let tmp6;
      if (cResult[2] === tmp4) {
        tmp6 = cResult[3];
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
      const hexWithOpacity = ColorUtils.hexWithOpacity;
      ColorUtils;
      let num3 = 0.08;
      const tmpResult2 = shared;
      if (tmpResult2.isThemeDark(tmp4)) {
        num3 = 0.12;
      }
      hexWithOpacityResult = hexWithOpacity(substr, num3);
    }
  }
  cResult[0] = arr;
  cResult[1] = token;
  cResult[2] = tmp4;
  cResult[3] = hexWithOpacityResult;
  tmp6 = hexWithOpacityResult;
}) : ((arr) => {
  const tmp2 = useThemeDefault();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE);
  let substr;
  if (arr != null) {
    substr = arr.slice(0, arr.length - 2);
  }
  let hexWithOpacityResult = token;
  if (null != substr) {
    hexWithOpacityResult = token;
    if (arr !== closure_3) {
      const hexWithOpacity = ColorUtils.hexWithOpacity;
      ColorUtils;
      let num3 = 0.08;
      const tmp3Result2 = shared;
      if (tmp3Result2.isThemeDark(tmp2)) {
        num3 = 0.12;
      }
      hexWithOpacityResult = hexWithOpacity(substr, num3);
    }
  }
  return hexWithOpacityResult;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/util/usePressUnderlayColor.tsx");

export default tmp2;
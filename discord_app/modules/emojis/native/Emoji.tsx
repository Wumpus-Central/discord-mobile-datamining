// === Module 5594: Emoji ===

// Module 5594 (Emoji)
import noopAll from "noop" /* 19 */;
import set from "set" /* 1234 */;
import getEmojiUnavailableReasonDefault from "getEmojiUnavailableReason" /* 4138 */;
import preloadDefault from "preload" /* 5502 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "handleThemeChange" /* 1301 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/emojis/native/Emoji.tsx");

export default function Emoji(arg0) {
  ({ src, name } = arg0);
  ({ style, textEmojiStyle, fastImageStyle, forceTextEmoji, adjustsFontSizeToFit, onError } = arg0);
  let obj = set;
  let uRL = src;
  if (obj.isAndroid()) {
    uRL = src;
    if (null == src) {
      obj1 = getEmojiUnavailableReasonDefault;
      uRL = obj1.getURL(name);
    }
  }
  obj = { style, children: null };
  if (!forceTextEmoji) {
    if (null != uRL) {
      if ("" !== uRL) {
        obj = { resizeMode: "contain", style: null, placeholder: null, source: null, onError: null };
        obj[1] = fastImageStyle;
        const tmp10 = preloadDefault;
        if (tmpResult.isThemeDark(theme.theme)) {
          let tmp9Result = tmp9(5595);
        } else {
          tmp9Result = tmp9(5596);
        }
        obj[2] = tmp9Result;
        obj1 = { uri: null };
        obj1[0] = uRL;
        obj[3] = obj1;
        obj[4] = onError;
        let tmp6Result = tmp6(tmp10, obj);
        tmpResult = tmp(1362);
      }
      obj[1] = tmp6Result;
      return tmp6(tmp7, obj);
    }
  }
  tmp6Result = tmp6(tmp(1296).LegacyText, { style: textEmojiStyle, allowFontScaling: false, adjustsFontSizeToFit, children: name });
};
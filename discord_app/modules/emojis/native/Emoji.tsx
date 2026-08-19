// === Module 6930: Emoji ===

// Module 6930 (Emoji)
import noopAll from "noop" /* 19 */;
import obj132 from "obj132" /* 500 */;
import Button from "Button" /* 1297 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getEmojiUnavailableReasonDefault from "getEmojiUnavailableReason" /* 4038 */;
import preloadDefault from "preload" /* 5449 */;
import registerAssetDefault from "registerAsset" /* 6931 */;
import registerAssetDefault2 from "registerAsset" /* 6932 */;
import { View } from "get ActivityIndicator" /* 17 */;
import handleThemeChange from "handleThemeChange" /* 1302 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/emojis/native/Emoji.tsx");

export default function Emoji(arg0) {
  ({ src, name } = arg0);
  ({ style, textEmojiStyle, fastImageStyle, forceTextEmoji, adjustsFontSizeToFit } = arg0);
  let obj = obj132;
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
        obj = { resizeMode: "contain", style: null, placeholder: null, source: null };
        obj[1] = fastImageStyle;
        if (tmpResult.isThemeDark(theme.theme)) {
          let tmp9Result = registerAssetDefault;
        } else {
          tmp9Result = registerAssetDefault2;
        }
        obj[2] = tmp9Result;
        obj1 = { uri: null };
        obj1[0] = uRL;
        obj[3] = obj1;
        let tmp6Result = <tmp10 resizeMode="contain" style={null} placeholder={null} source={null} />;
        tmpResult = AccessibilityAnnouncer;
      }
      obj[1] = tmp6Result;
      return <tmp7 {...obj} />;
    }
  }
  tmp6Result = jsx(Button.LegacyText, { style: textEmojiStyle, allowFontScaling: false, adjustsFontSizeToFit, children: name });
};
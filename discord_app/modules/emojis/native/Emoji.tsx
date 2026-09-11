// === Module 7203: Emoji ===

// Module 7203 (Emoji)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import native from "native" /* 1178 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4263 */;
import shared from "shared" /* 4458 */;
import FastImageDefault from "FastImage" /* 5638 */;
import _modDef7204 from "module_7204" /* 7204 */;
import _modDef7205 from "module_7205" /* 7205 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1183 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emojis/native/Emoji.tsx");

export default function Emoji(arg0) {
  ({ src, name } = arg0);
  ({ style, textEmojiStyle, fastImageStyle, forceTextEmoji, adjustsFontSizeToFit, onError } = arg0);
  let obj = PlatformUtils;
  let uRL = src;
  if (obj.isAndroid()) {
    uRL = src;
    if (null == src) {
      let obj1 = EmojiUtilsDefault;
      uRL = obj1.getURL(name);
    }
  }
  obj = { style, children: null };
  if (!forceTextEmoji) {
    if (null != uRL) {
      if ("" !== uRL) {
        obj = { resizeMode: "contain", style: fastImageStyle, placeholder: null, source: null, onError: null };
        if (tmpResult.isThemeDark(ThemeStore.theme)) {
          let tmp9Result = _modDef7204;
        } else {
          tmp9Result = _modDef7205;
        }
        obj.placeholder = tmp9Result;
        obj1 = { uri: uRL };
        obj.source = obj1;
        obj.onError = onError;
        let tmp6Result = <tmp10 resizeMode="contain" style={fastImageStyle} placeholder={null} source={null} onError={null} />;
        tmpResult = shared;
      }
      obj.children = tmp6Result;
      return <tmp7 {...obj} />;
    }
  }
  tmp6Result = jsx(native.LegacyText, { style: textEmojiStyle, allowFontScaling: false, adjustsFontSizeToFit, children: name });
};
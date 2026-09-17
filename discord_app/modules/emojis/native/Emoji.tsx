// === Module 7244: Emoji ===

// Module 7244 (Emoji)
import native from "native" /* 1177 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4296 */;
import shared from "shared" /* 4491 */;
import FastImageDefault from "FastImage" /* 5675 */;
import _modDef7245 from "module_7245" /* 7245 */;
import _modDef7246 from "module_7246" /* 7246 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1182 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emojis/native/Emoji.tsx");

export default function Emoji(arg0) {
  ({ src, name } = arg0);
  ({ style, textEmojiStyle, fastImageStyle, forceTextEmoji, adjustsFontSizeToFit, onError } = arg0);
  let uRL = src;
  if (obj.isAndroid()) {
    uRL = src;
    if (null == src) {
      uRL = EmojiUtilsDefault.getURL(name);
    }
  }
  const obj3 = { style, children: null };
  if (!forceTextEmoji) {
    if (null != uRL) {
      if ("" !== uRL) {
        const obj4 = { resizeMode: "contain", style: fastImageStyle, placeholder: null, source: null, onError: null };
        if (tmpResult.isThemeDark(ThemeStore.theme)) {
          let tmp9Result = _modDef7245;
        } else {
          tmp9Result = _modDef7246;
        }
        obj4.placeholder = tmp9Result;
        const obj5 = { uri: uRL };
        obj4.source = obj5;
        obj4.onError = onError;
        let tmp6Result = <tmp10 resizeMode="contain" style={fastImageStyle} placeholder={null} source={null} onError={null} />;
        tmpResult = shared;
      }
      obj3.children = tmp6Result;
      return <tmp7 {...obj3} />;
    }
  }
  tmp6Result = jsx(native.LegacyText, { style: textEmojiStyle, allowFontScaling: false, adjustsFontSizeToFit, children: name });
  obj = PlatformUtils;
};
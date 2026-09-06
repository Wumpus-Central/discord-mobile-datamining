// discord_app/modules/emojis/native/Emoji.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import EmojiUtilsDefault from "../../../utils/EmojiUtils.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../user_settings/ThemeStore.tsx";

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
        const tmp10 = FastImageDefault;
        if (tmpResult.isThemeDark(ThemeStore.theme)) {
          let tmp9Result = tmp9(7131);
        } else {
          tmp9Result = tmp9(7132);
        }
        obj.placeholder = tmp9Result;
        obj1 = { uri: uRL };
        obj.source = obj1;
        obj.onError = onError;
        let tmp6Result = tmp6(tmp10, obj);
        tmpResult = tmp(4411);
      }
      obj.children = tmp6Result;
      return tmp6(tmp7, obj);
    }
  }
  tmp6Result = tmp6(tmp(1178).LegacyText, {
    style: textEmojiStyle,
    allowFontScaling: false,
    adjustsFontSizeToFit,
    children: name,
  });
}

// discord_app/modules/emojis/native/Emoji.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import native from "../../../design/void/native.tsx";
import EmojiUtilsDefault from "../../../utils/EmojiUtils.tsx";
import shared from "../../../design/shared.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef7131 from "../../../../_runtime/metro/07131__.js";
import _modDef7132 from "../../../../_runtime/metro/07132__.js";
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
        if (tmpResult.isThemeDark(ThemeStore.theme)) {
          let tmp9Result = _modDef7131;
        } else {
          tmp9Result = _modDef7132;
        }
        obj.placeholder = tmp9Result;
        obj1 = { uri: uRL };
        obj.source = obj1;
        obj.onError = onError;
        let tmp6Result = (
          <tmp10 resizeMode="contain" style={fastImageStyle} placeholder={null} source={null} onError={null} />
        );
        tmpResult = shared;
      }
      obj.children = tmp6Result;
      return <tmp7 {...obj} />;
    }
  }
  tmp6Result = jsx(native.LegacyText, {
    style: textEmojiStyle,
    allowFontScaling: false,
    adjustsFontSizeToFit,
    children: name,
  });
}

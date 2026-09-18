// discord_app/modules/emojis/native/Emoji.tsx
import native from "../../../design/void/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import EmojiUtilsDefault from "../../../utils/EmojiUtils.tsx";
import shared from "../../../design/shared.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef7327 from "../../../../_runtime/metro/07327__.js";
import _modDef7328 from "../../../../_runtime/metro/07328__.js";
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
          let tmp9Result = _modDef7327;
        } else {
          tmp9Result = _modDef7328;
        }
        obj4.placeholder = tmp9Result;
        const obj5 = { uri: uRL };
        obj4.source = obj5;
        obj4.onError = onError;
        let tmp6Result = (
          <tmp10 resizeMode="contain" style={fastImageStyle} placeholder={null} source={null} onError={null} />
        );
        tmpResult = shared;
      }
      obj3.children = tmp6Result;
      return <tmp7 {...obj3} />;
    }
  }
  tmp6Result = jsx(native.LegacyText, {
    style: textEmojiStyle,
    allowFontScaling: false,
    adjustsFontSizeToFit,
    children: name,
  });
  obj = PlatformUtils;
}

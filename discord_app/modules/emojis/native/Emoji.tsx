// discord_app/modules/emojis/native/Emoji.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import set from "../../../utils/PlatformUtils.tsx";
import getEmojiUnavailableReasonDefault from "../../../utils/EmojiUtils.tsx";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../user_settings/ThemeStore.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

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
          let tmp9Result = tmp9(5554);
        } else {
          tmp9Result = tmp9(5555);
        }
        obj[2] = tmp9Result;
        obj1 = { uri: null };
        obj1[0] = uRL;
        obj[3] = obj1;
        obj[4] = onError;
        let tmp6Result = tmp6(tmp10, obj);
        tmpResult = tmp(1363);
      }
      obj[1] = tmp6Result;
      return tmp6(tmp7, obj);
    }
  }
  tmp6Result = tmp6(tmp(1297).LegacyText, { style: textEmojiStyle, allowFontScaling: false, adjustsFontSizeToFit, children: name });
};
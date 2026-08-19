// discord_app/modules/emojis/native/Emoji.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import obj132 from "../../../utils/PlatformUtils.tsx";
import Button from "../../../design/void/native.tsx";
import AccessibilityAnnouncer from "../../../design/shared.tsx";
import getEmojiUnavailableReasonDefault from "../../../utils/EmojiUtils.tsx";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import registerAssetDefault from "../../../../_runtime/06931_registerAsset.js";
import registerAssetDefault2 from "../../../../_runtime/06932_registerAsset.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import handleThemeChange from "../../user_settings/ThemeStore.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

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
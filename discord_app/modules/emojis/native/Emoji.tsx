// discord_app/modules/emojis/native/Emoji.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import native from "../../../design/void/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import EmojiUtilsDefault from "../../../utils/EmojiUtils.tsx";
import shared from "../../../design/shared.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import AssetRegistryDefault from "../../../../_runtime/06633_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../_runtime/06634_AssetRegistry.js";
import react from "../../../../_runtime/00019_react.js";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let adjustsFontSizeToFit;
      let fastImageStyle;
      let forceTextEmoji;
      let name;
      let onError;
      let src;
      let style;
      let textEmojiStyle;
      const obj = react2;
      const cResult = obj.c(14);
      ({ src, name, style, textEmojiStyle, fastImageStyle, forceTextEmoji, adjustsFontSizeToFit, onError } = arg0);
      if (cResult[0] === name) {
        let tmp4;
        let tmp8;
        if (cResult[1] === src) {
          tmp4 = cResult[2];
        }
        if (cResult[3] === adjustsFontSizeToFit) {
          if (cResult[4] === tmp4) {
            if (cResult[5] === fastImageStyle) {
              if (cResult[6] === forceTextEmoji) {
                if (cResult[7] === name) {
                  if (cResult[8] === onError) {
                    if (cResult[9] === textEmojiStyle) {
                      tmp8 = cResult[10];
                    }
                    if (cResult[11] === style) {
                      let tmp17;
                      if (cResult[12] === tmp8) {
                        tmp17 = cResult[13];
                      }
                      return tmp17;
                    }
                    const tmp20 = <View style={style}>{tmp8}</View>;
                    cResult[11] = style;
                    cResult[12] = tmp8;
                    cResult[13] = tmp20;
                    tmp17 = tmp20;
                  }
                }
              }
            }
          }
        }
        if (!forceTextEmoji) {
          if (null != tmp4) {
            let tmp10Result;
            if ("" !== tmp4) {
              let tmp11Result;
              FastImageDefault;
              const tmpResult = shared;
              if (tmpResult.isThemeDark(ThemeStore.theme)) {
                tmp11Result = AssetRegistryDefault;
              } else {
                tmp11Result = AssetRegistryDefault2;
              }
              tmp10Result = (
                <tmp12
                  resizeMode="contain"
                  style={fastImageStyle}
                  placeholder={tmp11Result}
                  source={{ uri: tmp4 }}
                  onError={onError}
                />
              );
              const obj5 = { uri: tmp4 };
            }
            cResult[3] = adjustsFontSizeToFit;
            cResult[4] = tmp4;
            cResult[5] = fastImageStyle;
            cResult[6] = forceTextEmoji;
            cResult[7] = name;
            cResult[8] = onError;
            cResult[9] = textEmojiStyle;
            cResult[10] = tmp10Result;
            tmp8 = tmp10Result;
          }
        }
        tmp10Result = jsx(native.LegacyText, {
          style: textEmojiStyle,
          allowFontScaling: false,
          adjustsFontSizeToFit,
          children: name,
        });
      }
      let uRL = src;
      const tmpResult2 = PlatformUtils;
      if (tmpResult2.isAndroid()) {
        uRL = src;
        if (null == src) {
          const obj3 = EmojiUtilsDefault;
          uRL = obj3.getURL(name);
        }
      }
      cResult[0] = name;
      cResult[1] = src;
      cResult[2] = uRL;
      tmp4 = uRL;
    }
  : (arg0) => {
      let adjustsFontSizeToFit;
      let fastImageStyle;
      let forceTextEmoji;
      let name;
      let onError;
      let src;
      let style;
      let textEmojiStyle;
      ({ src, name } = arg0);
      ({ style, textEmojiStyle, fastImageStyle, forceTextEmoji, adjustsFontSizeToFit, onError } = arg0);
      let uRL = src;
      const obj = PlatformUtils;
      if (obj.isAndroid()) {
        uRL = src;
        if (null == src) {
          const obj2 = EmojiUtilsDefault;
          uRL = obj2.getURL(name);
        }
      }
      const obj3 = { style, children: null };
      if (!forceTextEmoji) {
        if (null != uRL) {
          let tmp6Result;
          if ("" !== uRL) {
            let tmp9Result;
            FastImageDefault;
            const tmpResult = shared;
            if (tmpResult.isThemeDark(ThemeStore.theme)) {
              tmp9Result = AssetRegistryDefault;
            } else {
              tmp9Result = AssetRegistryDefault2;
            }
            tmp6Result = (
              <tmp10
                resizeMode="contain"
                style={fastImageStyle}
                placeholder={tmp9Result}
                source={{ uri: uRL }}
                onError={onError}
              />
            );
            const obj5 = { uri: uRL };
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
    };
const result = size.fileFinishedImporting("modules/emojis/native/Emoji.tsx");

export default tmp3;

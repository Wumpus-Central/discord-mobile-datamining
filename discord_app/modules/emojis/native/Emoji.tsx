// discord_app/modules/emojis/native/Emoji.tsx
import c from "../../../../_runtime/00576_c.js";
import EmojiUtilsDefault from "../../../utils/EmojiUtils.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef6810 from "../../../../_runtime/metro/06810__.js";
import _modDef6811 from "../../../../_runtime/metro/06811__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../user_settings/ThemeStore.tsx";

const native = LegacyText(1200);
const PlatformUtils = LegacyText(1381);
const shared = LegacyText(4929);
require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/emojis/native/Emoji.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function Emoji(arg0) {
      let LegacyText = require;
      const cResult = c.c(14);
      ({ src, name, style, textEmojiStyle, fastImageStyle, forceTextEmoji, adjustsFontSizeToFit, onError } = arg0);
      if (cResult[0] === name) {
        if (cResult[1] === src) {
          let tmp2 = cResult[2];
        }
        if (cResult[3] === adjustsFontSizeToFit) {
          if (cResult[4] === tmp2) {
            if (cResult[5] === fastImageStyle) {
              if (cResult[6] === forceTextEmoji) {
                if (cResult[7] === name) {
                  if (cResult[8] === onError) {
                    if (cResult[9] === textEmojiStyle) {
                      if (cResult[11] === style) {
                        if (cResult[12] === tmp6) {
                          let tmp16 = cResult[13];
                        }
                        return tmp16;
                      }
                      const obj3 = { style, children: cResult[10] };
                      const tmp19 = <View style={style}>{cResult[10]}</View>;
                      cResult[11] = style;
                      cResult[12] = cResult[10];
                      cResult[13] = tmp19;
                      tmp16 = tmp19;
                    }
                  }
                }
              }
            }
          }
        }
        if (!forceTextEmoji) {
          if (null != tmp2) {
            if ("" !== tmp2) {
              const obj5 = {
                resizeMode: "contain",
                style: fastImageStyle,
                placeholder: null,
                source: null,
                onError: null,
              };
              if (LegacyTextResult.isThemeDark(ThemeStore.theme)) {
                let tmp9Result = _modDef6810;
              } else {
                tmp9Result = _modDef6811;
              }
              obj5.placeholder = tmp9Result;
              const obj6 = { uri: tmp2 };
              obj5.source = obj6;
              obj5.onError = onError;
              let tmp8Result = (
                <tmp10 resizeMode="contain" style={fastImageStyle} placeholder={null} source={null} onError={null} />
              );
              LegacyTextResult = shared;
            }
            cResult[3] = adjustsFontSizeToFit;
            cResult[4] = tmp2;
            cResult[5] = fastImageStyle;
            cResult[6] = forceTextEmoji;
            cResult[7] = name;
            cResult[8] = onError;
            cResult[9] = textEmojiStyle;
            cResult[10] = tmp8Result;
          }
        }
        LegacyText = native.LegacyText;
        const obj = { style: textEmojiStyle, allowFontScaling: false, adjustsFontSizeToFit, children: name };
        tmp8Result = (
          <LegacyText style={textEmojiStyle} allowFontScaling={false} adjustsFontSizeToFit={adjustsFontSizeToFit}>
            {name}
          </LegacyText>
        );
      }
      let uRL = src;
      if (LegacyTextResult1.isAndroid()) {
        uRL = src;
        if (null == src) {
          uRL = EmojiUtilsDefault.getURL(name);
        }
      }
      cResult[0] = name;
      cResult[1] = src;
      cResult[2] = uRL;
      tmp2 = uRL;
      LegacyTextResult1 = PlatformUtils;
    }
  : function Emoji(arg0) {
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
            const obj4 = {
              resizeMode: "contain",
              style: fastImageStyle,
              placeholder: null,
              source: null,
              onError: null,
            };
            if (tmpResult.isThemeDark(ThemeStore.theme)) {
              let tmp9Result = _modDef6810;
            } else {
              tmp9Result = _modDef6811;
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
    };

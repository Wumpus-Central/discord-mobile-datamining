// discord_app/modules/launchpad/native/shared/ChannelSubtitle.tsx
import c from "../../../../../_runtime/00576_c.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import MessagePreviewMarkup from "../../../message_previews/native/MessagePreviewMarkup.tsx";
import getChannelSubtitleData from "../../../channel/native/getChannelSubtitleData.tsx";
import getLayoutStylesDefault from "getLayoutStyles.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const SUBTITLE_OPACITY_NORMAL = fn(11697).SUBTITLE_OPACITY_NORMAL;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(14);
      ({ muted, connected, channelId, guildId, subtitle, textProps } = arg0);
      if (cResult[0] === channelId) {
        if (cResult[1] === connected) {
          if (cResult[2] === guildId) {
            if (cResult[3] === muted) {
              if (cResult[4] === subtitle) {
                if (cResult[5] === textProps) {
                  let tmp4 = cResult[6];
                  let tmp5 = cResult[7];
                  let tmp6 = cResult[8];
                  let tmp7 = cResult[9];
                }
                const _Symbol = Symbol;
                if (tmp7 !== Symbol.for("react.early_return_sentinel")) {
                  return tmp7;
                } else {
                  if (cResult[10] === tmp4) {
                    if (cResult[11] === tmp5) {
                    }
                  }
                  const obj2 = {};
                  const merged = Object.assign(tmp5);
                  obj2.children = tmp6;
                  const tmp21 = <tmp4 />;
                  cResult[10] = tmp4;
                  cResult[11] = tmp5;
                  cResult[12] = tmp6;
                  cResult[13] = tmp21;
                }
              }
            }
          }
        }
      }
      const forResult = Symbol.for("react.early_return_sentinel");
      const channelSubtitleData = getChannelSubtitleData.getChannelSubtitleData(subtitle);
      let tmp10 = null;
      let result;
      let tmp12;
      let Text;
      if (null != channelSubtitleData) {
        const obj3 = {
          content: channelSubtitleData.subtitle,
          muted: null,
          channelId: null,
          guildId: null,
          disableAnimatedEmoji: null,
          color: null,
        };
        let flag = muted;
        if (muted == null) {
          flag = false;
        }
        obj3.muted = flag;
        obj3.channelId = channelId;
        obj3.guildId = guildId;
        obj3.disableAnimatedEmoji = !("voice" === channelSubtitleData.type && connected);
        let str2 = "text-subtle";
        if (muted) {
          str2 = "text-muted";
        }
        obj3.color = str2;
        result = MessagePreviewMarkup.renderMessagePreviewMarkup(obj3);
        tmp10 = forResult;
        tmp12 = textProps;
        Text = Text_Text.Text;
        const tmp14 = "voice" === channelSubtitleData.type && connected;
        const tmpResult2 = MessagePreviewMarkup;
      }
      cResult[0] = channelId;
      cResult[1] = connected;
      cResult[2] = guildId;
      cResult[3] = muted;
      cResult[4] = subtitle;
      cResult[5] = textProps;
      cResult[6] = Text;
      cResult[7] = tmp12;
      cResult[8] = result;
      cResult[9] = tmp10;
      tmp7 = tmp10;
      tmp6 = result;
      tmp5 = tmp12;
      tmp4 = Text;
      const tmpResult = getChannelSubtitleData;
    }
  : (arg0) => {
      ({ muted, textProps } = arg0);
      ({ connected, channelId, guildId, subtitle } = arg0);
      const channelSubtitleData = getChannelSubtitleData.getChannelSubtitleData(subtitle);
      if (null == channelSubtitleData) {
        return null;
      } else {
        const obj2 = {};
        const merged = Object.assign(textProps);
        const obj3 = {
          content: channelSubtitleData.subtitle,
          muted: null,
          channelId: null,
          guildId: null,
          disableAnimatedEmoji: null,
          color: null,
        };
        let flag = muted;
        if (muted == null) {
          flag = false;
        }
        obj3.muted = flag;
        obj3.channelId = channelId;
        obj3.guildId = guildId;
        obj3.disableAnimatedEmoji = !("voice" === channelSubtitleData.type && connected);
        let str = "text-subtle";
        if (muted) {
          str = "text-muted";
        }
        obj3.color = str;
        obj2.children = MessagePreviewMarkup.renderMessagePreviewMarkup(obj3);
        return jsx(Text_Text.Text, {});
      }
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/shared/ChannelSubtitle.tsx");

export const renderChannelSubtitle = function renderChannelSubtitle(arg0) {
  ({ subtitle, muted } = arg0);
  if (null == subtitle) {
    return null;
  } else {
    const obj2 = {
      variant: getLayoutStylesDefault().messagePreview.text.variant,
      color: "text-muted",
      lineClamp: 1,
      maxFontSizeMultiplier: 1.75,
      style: null,
    };
    let num = 1;
    if (!muted) {
      num = SUBTITLE_OPACITY_NORMAL;
    }
    const obj = { opacity: num };
    obj2.style = obj;
    if (typeof subtitle === "string") {
      const obj3 = {};
      const merged = Object.assign(obj2);
      obj3.children = subtitle;
      let tmp9 = jsx(Text_Text.Text, {});
    } else {
      const obj4 = { channelId: tmp, guildId: tmp2, subtitle, muted, connected: tmp3, textProps: obj2 };
      tmp9 = (
        <closure_5 channelId={tmp} guildId={tmp2} subtitle={subtitle} muted={muted} connected={tmp3} textProps={obj2} />
      );
    }
    return tmp9;
  }
};

// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelSubtitle.tsx
import c from "../../../../../../_runtime/00576_c.js";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import MessagePreviewMarkup from "../../../../message_previews/native/MessagePreviewMarkup.tsx";
import ChannelListLayout from "layouts/ChannelListLayout.tsx";
import getChannelSubtitleData from "../../../../channel/native/getChannelSubtitleData.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let closure_3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelSubtitle(arg0) {
      const cResult = c.c(15);
      ({ muted, connected, channelId, guildId, layout, subtitle, textProps } = arg0);
      if (cResult[0] === channelId) {
        if (cResult[1] === connected) {
          if (cResult[2] === guildId) {
            if (cResult[3] === layout) {
              if (cResult[4] === muted) {
                if (cResult[5] === subtitle) {
                  if (cResult[6] === textProps) {
                    let tmp4 = cResult[7];
                    let tmp5 = cResult[8];
                    let tmp6 = cResult[9];
                    let tmp7 = cResult[10];
                  }
                  const _Symbol = Symbol;
                  if (tmp7 !== Symbol.for("react.early_return_sentinel")) {
                    return tmp7;
                  } else {
                    if (cResult[11] === tmp4) {
                      if (cResult[12] === tmp5) {
                      }
                    }
                    const obj2 = {};
                    const merged = Object.assign(tmp5);
                    obj2.children = tmp6;
                    const tmp21 = <tmp4 />;
                    cResult[11] = tmp4;
                    cResult[12] = tmp5;
                    cResult[13] = tmp6;
                    cResult[14] = tmp21;
                  }
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
          layout: null,
          color: "text-muted",
          disableAnimatedEmoji: null,
        };
        let flag = muted;
        if (muted == null) {
          flag = false;
        }
        obj3.muted = flag;
        obj3.channelId = channelId;
        obj3.guildId = guildId;
        obj3.layout = layout;
        obj3.disableAnimatedEmoji = !("voice" === channelSubtitleData.type && connected);
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
      cResult[3] = layout;
      cResult[4] = muted;
      cResult[5] = subtitle;
      cResult[6] = textProps;
      cResult[7] = Text;
      cResult[8] = tmp12;
      cResult[9] = result;
      cResult[10] = tmp10;
      tmp7 = tmp10;
      tmp6 = result;
      tmp5 = tmp12;
      tmp4 = Text;
      const tmpResult = getChannelSubtitleData;
    }
  : function ChannelSubtitle(arg0) {
      ({ muted, textProps } = arg0);
      ({ connected, channelId, guildId, layout, subtitle } = arg0);
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
          layout: null,
          color: "text-muted",
          disableAnimatedEmoji: null,
        };
        if (muted == null) {
          muted = false;
        }
        obj3.muted = muted;
        obj3.channelId = channelId;
        obj3.guildId = guildId;
        obj3.layout = layout;
        obj3.disableAnimatedEmoji = !("voice" === channelSubtitleData.type && connected);
        obj2.children = MessagePreviewMarkup.renderMessagePreviewMarkup(obj3);
        return jsx(Text_Text.Text, {});
      }
    };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/ChannelSubtitle.tsx",
);

export const renderChannelSubtitle = function renderChannelSubtitle(arg0) {
  ({ subtitle, layout } = arg0);
  if (null == subtitle) {
    return null;
  } else {
    const obj2 = {
      variant: ChannelListLayout.getLayoutStyles(layout).messagePreview.text.variant,
      color: "text-muted",
      lineClamp: 1,
      maxFontSizeMultiplier: 1.75,
    };
    if (typeof subtitle === "string") {
      const obj = {};
      const merged = Object.assign(obj2);
      obj.children = subtitle;
      let tmp9 = jsx(Text_Text.Text, {});
    } else {
      const obj4 = { channelId: tmp2, guildId: tmp3, layout, subtitle, muted: tmp, connected: tmp4, textProps: obj2 };
      tmp9 = (
        <closure_3
          channelId={tmp2}
          guildId={tmp3}
          layout={layout}
          subtitle={subtitle}
          muted={tmp}
          connected={tmp4}
          textProps={obj2}
        />
      );
    }
    return tmp9;
  }
};

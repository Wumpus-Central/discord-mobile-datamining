// === Module 16846: guild_channels/ChannelSubtitle ===

// Module 16846 (guild_channels/ChannelSubtitle)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4892 */;
import MessagePreviewMarkup from "MessagePreviewMarkup" /* 11709 */;
import ChannelListLayout from "ChannelListLayout" /* 11712 */;
import getChannelSubtitleData from "getChannelSubtitleData" /* 16195 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channelId;
  let connected;
  let flag;
  let guildId;
  let layout;
  let muted;
  let subtitle;
  let textProps;
  const obj = react2;
  const cResult = obj.c(15);
  ({ muted, connected, channelId, guildId, layout, subtitle, textProps } = arg0);
  if (cResult[0] === channelId) {
    if (cResult[1] === connected) {
      if (cResult[2] === guildId) {
        if (cResult[3] === layout) {
          if (cResult[4] === muted) {
            if (cResult[5] === subtitle) {
              let tmp4;
              let tmp5;
              let tmp6;
              let tmp7;
              if (cResult[6] === textProps) {
                tmp4 = cResult[7];
                tmp5 = cResult[8];
                tmp6 = cResult[9];
                tmp7 = cResult[10];
              }
              const _Symbol = Symbol;
              if (tmp7 === Symbol.for("react.early_return_sentinel")) {
                if (cResult[11] === tmp4) {
                  if (cResult[12] === tmp5) {
                    let tmp17;
                    if (cResult[13] === tmp6) {
                      tmp17 = cResult[14];
                    }
                    tmp7 = tmp17;
                  }
                }
                const merged = Object.assign(tmp5);
                const tmp22 = <tmp4>{tmp6}</tmp4>;
                cResult[11] = tmp4;
                cResult[12] = tmp5;
                cResult[13] = tmp6;
                cResult[14] = tmp22;
                tmp17 = tmp22;
              }
              return tmp7;
            }
          }
        }
      }
    }
  }
  const forResult = Symbol.for("react.early_return_sentinel");
  const tmpResult = getChannelSubtitleData;
  const channelSubtitleData = tmpResult.getChannelSubtitleData(subtitle);
  let tmp10 = null;
  let result;
  let tmp12;
  let tmp13;
  if (null != channelSubtitleData) {
    const tmp14 = "voice" === channelSubtitleData.type && connected;
    const Text = Text_Text.Text;
    const obj3 = { content: channelSubtitleData.subtitle, muted: flag, channelId, guildId, layout, color: "text-muted", disableAnimatedEmoji: !tmp14 };
    flag = muted;
    const renderMessagePreviewMarkup = MessagePreviewMarkup.renderMessagePreviewMarkup;
    MessagePreviewMarkup;
    if (muted == null) {
      flag = false;
    }
    result = renderMessagePreviewMarkup(obj3);
    tmp10 = forResult;
    tmp12 = textProps;
    tmp13 = Text;
  }
  cResult[0] = channelId;
  cResult[1] = connected;
  cResult[2] = guildId;
  cResult[3] = layout;
  cResult[4] = muted;
  cResult[5] = subtitle;
  cResult[6] = textProps;
  cResult[7] = tmp13;
  cResult[8] = tmp12;
  cResult[9] = result;
  cResult[10] = tmp10;
  tmp7 = tmp10;
  tmp6 = result;
  tmp5 = tmp12;
  tmp4 = tmp13;
}) : ((arg0) => {
  let channelId;
  let connected;
  let guildId;
  let layout;
  let muted;
  let subtitle;
  let textProps;
  ({ muted, textProps } = arg0);
  ({ connected, channelId, guildId, layout, subtitle } = arg0);
  const obj = getChannelSubtitleData;
  const channelSubtitleData = obj.getChannelSubtitleData(subtitle);
  if (null == channelSubtitleData) {
    return null;
  } else {
    const tmp4 = "voice" === channelSubtitleData.type && connected;
    const Text = Text_Text.Text;
    const merged = Object.assign(textProps);
    const obj3 = { content: channelSubtitleData.subtitle, muted, channelId, guildId, layout, color: "text-muted", disableAnimatedEmoji: !tmp4 };
    const renderMessagePreviewMarkup = MessagePreviewMarkup.renderMessagePreviewMarkup;
    MessagePreviewMarkup;
    if (muted == null) {
      muted = false;
    }
    return <Text>{renderMessagePreviewMarkup(obj3)}</Text>;
  }
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelSubtitle.tsx");

export const renderChannelSubtitle = function renderChannelSubtitle(arg0) {
  let layout;
  let obj3;
  let subtitle;
  ({ subtitle, layout } = arg0);
  if (null == subtitle) {
    return null;
  } else {
    let tmp9;
    const obj2 = { variant: obj3.getLayoutStyles(layout).messagePreview.text.variant, color: "text-muted", lineClamp: 1, maxFontSizeMultiplier: 1.75 };
    obj3 = ChannelListLayout;
    if (typeof subtitle === "string") {
      const Text = Text_Text.Text;
      const merged = Object.assign(obj2);
      tmp9 = <Text>{subtitle}</Text>;
    } else {
      tmp9 = <closure_3 channelId={tmp2} guildId={tmp3} layout={layout} subtitle={subtitle} muted={tmp} connected={tmp4} textProps={obj2} />;
    }
    return tmp9;
  }
};
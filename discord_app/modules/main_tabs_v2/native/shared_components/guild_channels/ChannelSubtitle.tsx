// === Module 17039: guild_channels/ChannelSubtitle ===

// Module 17039 (guild_channels/ChannelSubtitle)
import Text_Text from "Text/Text" /* 4718 */;
import MessagePreviewMarkup from "MessagePreviewMarkup" /* 10359 */;
import ChannelListLayout from "ChannelListLayout" /* 10364 */;
import getChannelSubtitleData from "getChannelSubtitleData" /* 16483 */;
import noop from "module_19" /* 19 */;

require = fn;
function ChannelSubtitle(arg0) {
  ({ muted, textProps } = arg0);
  ({ connected, channelId, guildId, layout, subtitle } = arg0);
  const channelSubtitleData = getChannelSubtitleData.getChannelSubtitleData(subtitle);
  if (null == channelSubtitleData) {
    return null;
  } else {
    const obj2 = {};
    const merged = Object.assign(textProps);
    const obj3 = { content: channelSubtitleData.subtitle, muted: null, channelId: null, guildId: null, layout: null, color: "text-muted", disableAnimatedEmoji: null };
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
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelSubtitle.tsx");

export const renderChannelSubtitle = function renderChannelSubtitle(arg0) {
  ({ subtitle, layout } = arg0);
  if (null == subtitle) {
    return null;
  } else {
    const obj2 = { variant: ChannelListLayout.getLayoutStyles(layout).messagePreview.text.variant, color: "text-muted", lineClamp: 1, maxFontSizeMultiplier: 1.75 };
    if (typeof subtitle === "string") {
      const obj = {};
      const merged = Object.assign(obj2);
      obj.children = subtitle;
      let tmp9 = jsx(Text_Text.Text, {});
    } else {
      const obj4 = { channelId: tmp2, guildId: tmp3, layout, subtitle, muted: tmp, connected: tmp4, textProps: obj2 };
      tmp9 = <ChannelSubtitle channelId={tmp2} guildId={tmp3} layout={layout} subtitle={subtitle} muted={tmp} connected={tmp4} textProps={obj2} />;
    }
    return tmp9;
  }
};
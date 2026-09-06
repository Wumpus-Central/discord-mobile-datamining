// === Module 16656: guild_channels/ChannelSubtitle ===

// Module 16656 (guild_channels/ChannelSubtitle)
import Text_Text from "Text/Text" /* 4556 */;
import MessagePreviewMarkup from "MessagePreviewMarkup" /* 10116 */;
import ChannelListLayout from "ChannelListLayout" /* 10121 */;
import getChannelSubtitleData from "getChannelSubtitleData" /* 16226 */;
import noop from "module_19" /* 19 */;

require = fn;
function ChannelSubtitle(arg0) {
  ({ muted, textProps } = arg0);
  ({ connected, channelId, guildId, layout, subtitle } = arg0);
  let obj = getChannelSubtitleData;
  const channelSubtitleData = obj.getChannelSubtitleData(subtitle);
  if (null == channelSubtitleData) {
    return null;
  } else {
    obj = {};
    const merged = Object.assign(textProps);
    obj = { content: channelSubtitleData.subtitle, muted: null, channelId: null, guildId: null, layout: null, color: "text-muted", disableAnimatedEmoji: null };
    if (muted == null) {
      muted = false;
    }
    obj.muted = muted;
    obj.channelId = channelId;
    obj.guildId = guildId;
    obj.layout = layout;
    obj.disableAnimatedEmoji = !("voice" === channelSubtitleData.type && connected);
    obj.children = MessagePreviewMarkup.renderMessagePreviewMarkup(obj);
    return jsx(Text_Text.Text, { content: channelSubtitleData.subtitle, muted: null, channelId: null, guildId: null, layout: null, color: "text-muted", disableAnimatedEmoji: null });
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
    let obj = { variant: ChannelListLayout.getLayoutStyles(layout).messagePreview.text.variant, color: "text-muted", lineClamp: 1, maxFontSizeMultiplier: 1.75 };
    if (typeof subtitle === "string") {
      obj = {};
      const merged = Object.assign(obj);
      obj.children = subtitle;
      let tmp9 = jsx(Text_Text.Text, {});
    } else {
      obj = { channelId: tmp2, guildId: tmp3, layout, subtitle, muted: tmp, connected: tmp4, textProps: null };
      obj.textProps = obj;
      tmp9 = <ChannelSubtitle channelId={tmp2} guildId={tmp3} layout={layout} subtitle={subtitle} muted={tmp} connected={tmp4} textProps={null} />;
    }
    return tmp9;
  }
};
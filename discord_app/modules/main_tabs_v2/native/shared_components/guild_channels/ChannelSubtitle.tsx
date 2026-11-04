// === Module 18981: guild_channels/ChannelSubtitle ===

// Module 18981 (guild_channels/ChannelSubtitle)
import Text_Text from "Text/Text" /* 5761 */;
import ChannelListLayout from "ChannelListLayout" /* 11227 */;
import MessagePreviewMarkup from "MessagePreviewMarkup" /* 11234 */;
import noop from "module_19" /* 19 */;

require = fn;
function ChannelSubtitle(muted) {
  muted = muted.muted;
  const channelId = muted.channelId;
  const guildId = muted.guildId;
  const layout = muted.layout;
  const textProps = muted.textProps;
  closure_5 = undefined;
  ({ connected, subtitle } = muted);
  const channelSubtitleData = muted(channelId[4]).getChannelSubtitleData(subtitle);
  let subtitle1;
  if (channelSubtitleData != null) {
    subtitle1 = channelSubtitleData.subtitle;
  }
  let type;
  if (channelSubtitleData != null) {
    type = channelSubtitleData.type;
  }
  closure_5 = tmp6;
  items = [subtitle1, muted, channelId, guildId, layout, "voice" === type && connected];
  const memo = guildId.useMemo(() => {
    let result;
    if (null != subtitle1) {
      const obj2 = { content: tmp, muted: null, channelId: null, guildId: null, layout: null, color: "text-muted", disableAnimatedEmoji: null };
      let flag = muted;
      if (muted == null) {
        flag = false;
      }
      obj2.muted = flag;
      obj2.channelId = channelId;
      obj2.guildId = guildId;
      obj2.layout = layout;
      obj2.disableAnimatedEmoji = !closure_5;
      result = MessagePreviewMarkup.renderMeasuredMessagePreviewMarkup(obj2);
    }
    return result;
  }, items);
  let tmp8 = null;
  if (null != memo) {
    const obj3 = {};
    const merged = Object.assign(textProps);
    ({ mentions: obj2.mentions, content: obj2.children } = memo);
    tmp8 = layout(muted(channelId[6]).MessagePreviewParagraph, obj3);
  }
  return tmp8;
}
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelSubtitle.tsx");

export function renderChannelSubtitle(arg0) {
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
}
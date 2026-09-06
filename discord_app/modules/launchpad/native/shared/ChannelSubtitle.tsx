// === Module 16988: ChannelSubtitle ===

// Module 16988 (ChannelSubtitle)
import Text_Text from "Text/Text" /* 4556 */;
import MessagePreviewMarkup from "MessagePreviewMarkup" /* 10116 */;
import getChannelSubtitleData from "getChannelSubtitleData" /* 16226 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 16977 */;
import noop from "module_19" /* 19 */;

require = fn;
function ChannelSubtitle(arg0) {
  ({ muted, textProps } = arg0);
  ({ connected, channelId, guildId, subtitle } = arg0);
  let obj = getChannelSubtitleData;
  const channelSubtitleData = obj.getChannelSubtitleData(subtitle);
  if (null == channelSubtitleData) {
    return null;
  } else {
    obj = {};
    const merged = Object.assign(textProps);
    obj = { content: channelSubtitleData.subtitle, muted: null, channelId: null, guildId: null, disableAnimatedEmoji: null, color: null };
    let flag = muted;
    if (muted == null) {
      flag = false;
    }
    obj.muted = flag;
    obj.channelId = channelId;
    obj.guildId = guildId;
    obj.disableAnimatedEmoji = !("voice" === channelSubtitleData.type && connected);
    let str = "text-subtle";
    if (muted) {
      str = "text-muted";
    }
    obj.color = str;
    obj.children = MessagePreviewMarkup.renderMessagePreviewMarkup(obj);
    return jsx(Text_Text.Text, { content: channelSubtitleData.subtitle, muted: null, channelId: null, guildId: null, disableAnimatedEmoji: null, color: null });
  }
}
const SUBTITLE_OPACITY_NORMAL = fn(10118).SUBTITLE_OPACITY_NORMAL;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/ChannelSubtitle.tsx");

export const renderChannelSubtitle = function renderChannelSubtitle(arg0) {
  ({ subtitle, muted } = arg0);
  if (null == subtitle) {
    return null;
  } else {
    let obj = { variant: getLayoutStylesDefault().messagePreview.text.variant, color: "text-muted", lineClamp: 1, maxFontSizeMultiplier: 1.75, style: null };
    let num = 1;
    if (!muted) {
      num = SUBTITLE_OPACITY_NORMAL;
    }
    obj = { opacity: num };
    obj.style = obj;
    if (typeof subtitle === "string") {
      obj = {};
      const merged = Object.assign(obj);
      obj.children = subtitle;
      let tmp9 = jsx(Text_Text.Text, {});
    } else {
      const obj1 = { channelId: tmp, guildId: tmp2, subtitle, muted, connected: tmp3, textProps: obj };
      tmp9 = <ChannelSubtitle channelId={tmp} guildId={tmp2} subtitle={subtitle} muted={muted} connected={tmp3} textProps={obj} />;
    }
    return tmp9;
  }
};
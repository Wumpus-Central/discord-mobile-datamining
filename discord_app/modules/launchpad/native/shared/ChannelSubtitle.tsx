// discord_app/modules/launchpad/native/shared/ChannelSubtitle.tsx
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import MessagePreviewMarkup from "../../../message_previews/native/MessagePreviewMarkup.tsx";
import getLayoutStylesDefault from "getLayoutStyles.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function ChannelSubtitle(muted) {
  muted = muted.muted;
  const channelId = muted.channelId;
  const guildId = muted.guildId;
  const textProps = muted.textProps;
  closure_4 = undefined;
  ({ connected, subtitle } = muted);
  const channelSubtitleData = muted(guildId[5]).getChannelSubtitleData(subtitle);
  let subtitle1;
  if (channelSubtitleData != null) {
    subtitle1 = channelSubtitleData.subtitle;
  }
  let type;
  if (channelSubtitleData != null) {
    type = channelSubtitleData.type;
  }
  closure_4 = tmp6;
  items = [subtitle1, muted, channelId, guildId, "voice" === type && connected];
  const memo = subtitle1.useMemo(() => {
    let result;
    if (null != subtitle1) {
      const obj2 = {
        content: tmp,
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
      obj2.muted = flag;
      obj2.channelId = channelId;
      obj2.guildId = guildId;
      obj2.disableAnimatedEmoji = !closure_4;
      let str = "text-subtle";
      if (muted) {
        str = "text-muted";
      }
      obj2.color = str;
      result = MessagePreviewMarkup.renderMeasuredMessagePreviewMarkup(obj2);
    }
    return result;
  }, items);
  let tmp8 = null;
  if (null != memo) {
    const obj3 = {};
    const merged = Object.assign(textProps);
    ({ mentions: obj2.mentions, content: obj2.children } = memo);
    tmp8 = jsx(muted(guildId[7]).MessagePreviewParagraph, {});
  }
  return tmp8;
}
const SUBTITLE_OPACITY_NORMAL = fn(5882).SUBTITLE_OPACITY_NORMAL;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/shared/ChannelSubtitle.tsx");

export function renderChannelSubtitle(arg0) {
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
        <ChannelSubtitle
          channelId={tmp}
          guildId={tmp2}
          subtitle={subtitle}
          muted={muted}
          connected={tmp3}
          textProps={obj2}
        />
      );
    }
    return tmp9;
  }
}

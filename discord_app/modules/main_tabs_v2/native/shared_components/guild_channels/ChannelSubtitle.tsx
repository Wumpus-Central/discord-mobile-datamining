// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelSubtitle.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import getLayoutStyles from "layouts/ChannelListLayout.tsx";
import getChannelSubtitleData from "../../../../channel/native/getChannelSubtitleData.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
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
    obj = { content: null, muted: null, channelId: null, guildId: null, layout: null, color: "text-muted", disableAnimatedEmoji: null };
    obj[0] = channelSubtitleData.subtitle;
    if (muted == null) {
      muted = false;
    }
    obj[1] = muted;
    obj[2] = channelId;
    obj[3] = guildId;
    obj[4] = layout;
    obj[6] = !("voice" === channelSubtitleData.type && connected);
    obj.children = tmp(10137).renderMessagePreviewMarkup(obj);
    return jsx(tmp(4442).Text, { content: null, muted: null, channelId: null, guildId: null, layout: null, color: "text-muted", disableAnimatedEmoji: null });
  }
}
noopAll;
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelSubtitle.tsx");

export const renderChannelSubtitle = function renderChannelSubtitle(arg0) {
  ({ subtitle, layout } = arg0);
  if (null == subtitle) {
    return null;
  } else {
    let obj = { variant: null, color: "text-muted", lineClamp: 1, maxFontSizeMultiplier: 1.75 };
    obj[0] = getLayoutStyles.getLayoutStyles(layout).messagePreview.text.variant;
    if (typeof subtitle === "string") {
      obj = {};
      const merged = Object.assign(obj);
      obj.children = subtitle;
      let tmp9 = jsx(Text.Text, {});
    } else {
      obj = { channelId: null, guildId: null, layout: null, subtitle: null, muted: null, connected: null, textProps: null };
      obj[0] = tmp2;
      obj[1] = tmp3;
      obj[2] = layout;
      obj[3] = subtitle;
      obj[4] = tmp;
      obj[5] = tmp4;
      obj[6] = obj;
      tmp9 = <ChannelSubtitle channelId={null} guildId={null} layout={null} subtitle={null} muted={null} connected={null} textProps={null} />;
    }
    return tmp9;
  }
};
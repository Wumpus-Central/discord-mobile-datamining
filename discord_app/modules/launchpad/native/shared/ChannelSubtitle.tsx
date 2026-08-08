// discord_app/modules/launchpad/native/shared/ChannelSubtitle.tsx
import "noop";
import { SUBTITLE_OPACITY_NORMAL } from "hairlineWidth";
import { jsx } from "jsxProd";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getChannelSubtitleData } from "../../../channel/native/getChannelSubtitleData.tsx";
import { getLayoutStyle } from "getLayoutStyles.tsx";

const require = arg1;
function ChannelSubtitle(arg0) {
  let channelId;
  let connected;
  let guildId;
  let muted;
  let subtitle;
  let textProps;
  ({ muted, textProps } = arg0);
  ({ connected, channelId, guildId, subtitle } = arg0);
  let obj = getChannelSubtitleData;
  const channelSubtitleData = obj.getChannelSubtitleData(subtitle);
  if (null == channelSubtitleData) {
    return null;
  } else {
    obj = {};
    const merged = Object.assign(textProps);
    obj = { content: null, muted: null, channelId: null, guildId: null, disableAnimatedEmoji: null, color: null };
    obj[0] = channelSubtitleData.subtitle;
    let flag = muted;
    if (muted == null) {
      flag = false;
    }
    obj[1] = flag;
    obj[2] = channelId;
    obj[3] = guildId;
    obj[4] = !("voice" === channelSubtitleData.type && connected);
    let str = "text-subtle";
    if (muted) {
      str = "text-muted";
    }
    obj[5] = str;
    obj.children = tmp(9792).renderMessagePreviewMarkup(obj);
    return jsx(tmp(4299).Text, { content: null, muted: null, channelId: null, guildId: null, disableAnimatedEmoji: null, color: null });
  }
}
const result = require("jsxProd").fileFinishedImporting("modules/launchpad/native/shared/ChannelSubtitle.tsx");

export const renderChannelSubtitle = function renderChannelSubtitle(arg0) {
  let muted;
  let subtitle;
  ({ subtitle, muted } = arg0);
  if (null == subtitle) {
    return null;
  } else {
    let obj = { variant: null, color: "text-muted", lineClamp: 1, maxFontSizeMultiplier: 1.75, style: null };
    obj[0] = getLayoutStyle().messagePreview.text.variant;
    let num = 1;
    if (!muted) {
      num = SUBTITLE_OPACITY_NORMAL;
    }
    obj = { opacity: null };
    obj[0] = num;
    obj[4] = obj;
    if (typeof subtitle === "string") {
      obj = {};
      const merged = Object.assign(obj);
      obj.children = subtitle;
      let tmp9 = jsx(Text.Text, {});
    } else {
      const obj1 = { channelId: null, guildId: null, subtitle: null, muted: null, connected: null, textProps: null };
      obj1[0] = tmp;
      obj1[1] = tmp2;
      obj1[2] = subtitle;
      obj1[3] = muted;
      obj1[4] = tmp3;
      obj1[5] = obj;
      tmp9 = <ChannelSubtitle channelId={null} guildId={null} subtitle={null} muted={null} connected={null} textProps={null} />;
    }
    return tmp9;
  }
};
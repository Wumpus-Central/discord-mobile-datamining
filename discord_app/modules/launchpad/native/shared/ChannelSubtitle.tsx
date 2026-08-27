// === Module 16481: ChannelSubtitle ===

// Module 16481 (ChannelSubtitle)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4441 */;
import getChannelSubtitleData from "getChannelSubtitleData" /* 15726 */;
import getLayoutStyleDefault from "getLayoutStyle" /* 16470 */;
import { SUBTITLE_OPACITY_NORMAL } from "hairlineWidth" /* 10121 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
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
    obj.children = tmp(10119).renderMessagePreviewMarkup(obj);
    return jsx(tmp(4441).Text, { content: null, muted: null, channelId: null, guildId: null, disableAnimatedEmoji: null, color: null });
  }
}
noopAll;
const result = require("set").fileFinishedImporting("modules/launchpad/native/shared/ChannelSubtitle.tsx");

export const renderChannelSubtitle = function renderChannelSubtitle(arg0) {
  ({ subtitle, muted } = arg0);
  if (null == subtitle) {
    return null;
  } else {
    let obj = { variant: null, color: "text-muted", lineClamp: 1, maxFontSizeMultiplier: 1.75, style: null };
    obj[0] = getLayoutStyleDefault().messagePreview.text.variant;
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
      obj1 = { channelId: null, guildId: null, subtitle: null, muted: null, connected: null, textProps: null };
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
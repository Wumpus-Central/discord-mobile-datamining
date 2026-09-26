// === Module 7561: ChannelLinkUrls ===

// Module 7561 (ChannelLinkUrls)
import LinkUtils from "LinkUtils" /* 4990 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup_v2/ChannelLinkUrls.tsx");

export const parseChannelLinkUrl = function parseChannelLinkUrl(url) {
  const MEDIA_POST_URL_RE = LinkUtils.MEDIA_POST_URL_RE;
  const match = MEDIA_POST_URL_RE.exec(url);
  if (null != match) {
    const tmp6 = _slicedToArray(match, 5);
    const obj3 = { guildId: tmp6[1], channelId: tmp6[3], messageId: tmp6[4], parentChannelId: tmp6[2] };
    return obj3;
  } else {
    const CHANNEL_OR_MESSAGES_URL_RE = LinkUtils.CHANNEL_OR_MESSAGES_URL_RE;
    const match1 = CHANNEL_OR_MESSAGES_URL_RE.exec(url);
    if (null == match1) {
      return null;
    } else {
      const tmp9 = _slicedToArray(match1, 4);
      let tmp4 = null;
      if (null != tmp9[2]) {
        tmp4 = null;
        if (!obj.test(tmp11)) {
          if (null == tmp12) {
            const obj4 = { guildId: tmp10, channelId: tmp11, messageId: tmp12, parentChannelId: "flex" };
            tmp4 = obj4;
          } else {
            tmp4 = null;
          }
        }
        obj = /\D/;
      }
      return tmp4;
    }
  }
};
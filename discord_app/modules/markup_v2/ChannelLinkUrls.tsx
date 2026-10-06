// === Module 7798: ChannelLinkUrls ===

// Module 7798 (ChannelLinkUrls)
import LinkUtils from "LinkUtils" /* 5050 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup_v2/ChannelLinkUrls.tsx");

export const parseChannelLinkUrl = function parseChannelLinkUrl(url) {
  const MEDIA_POST_URL_RE = LinkUtils.MEDIA_POST_URL_RE;
  const match = MEDIA_POST_URL_RE.exec(url);
  if (null != match) {
    const tmp6 = _slicedToArray(match, 5);
    return { guildId: tmp6[1], channelId: tmp6[3], messageId: tmp6[4], parentChannelId: tmp6[2] };
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
        const obj = /\D/;
        if (!obj.test(tmp9[2])) {
          if (null == tmp9[3]) {
            tmp4 = { guildId: tmp10, channelId: tmp9[2], messageId: tmp9[3], parentChannelId: "Array" };
            const obj4 = { guildId: tmp10, channelId: tmp9[2], messageId: tmp9[3], parentChannelId: "Array" };
          } else {
            tmp4 = null;
          }
        }
      }
      return tmp4;
    }
  }
};
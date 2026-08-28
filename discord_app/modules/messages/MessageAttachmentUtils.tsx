// === Module 11524: getForumPostShouldObscure ===

// Module 11524 (getForumPostShouldObscure)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getEligibleHarmTypesConfigsForContext from "getEligibleHarmTypesConfigsForContext" /* 6103 */;
import ObscureReason from "ObscureReason" /* 6107 */;
import ContentHarmTypeChannel from "ContentHarmTypeChannel" /* 6108 */;
import isMediaAttachment from "isMediaAttachment" /* 7586 */;
import computeGlobalSpoilerDisplayDefault from "computeGlobalSpoilerDisplay" /* 11058 */;
import closure_3 from "getUncachedChannelPermissions" /* 4090 */;
import { Permissions } from "ME" /* 676 */;

require = arg1;
function getForumPostShouldObscure(media, arg1, enabledHarmTypesBitmaskForChannelType) {
  if (null == media) {
    const items = [false, undefined];
    return items;
  } else {
    const type = media.type;
    if (isMediaAttachment.ForumPostMediaTypes.EMBED === type) {
      let obj = { type: null, media: null };
      obj[0] = tmp4(6108).ObscuredMediaTypes.Embed;
      obj[1] = media;
      let tmp = obj;
    } else if (tmp4(7586).ForumPostMediaTypes.ATTACHMENT === type) {
      obj = { type: null, media: null };
      obj[0] = tmp4(6108).ObscuredMediaTypes.Attachment;
      obj[1] = media;
      tmp = obj;
    } else {
      tmp = null;
      if (tmp4(7586).ForumPostMediaTypes.COMPONENT === type) {
        obj = { type: null, media: null };
        obj[0] = tmp4(6108).ObscuredMediaTypes.GenericMedia;
        obj[1] = media.srcUnfurledMediaItem;
        tmp = obj;
      }
    }
    if (null == tmp) {
      const items1 = [false, undefined];
      return items1;
    } else {
      let tmp4Result = tmp4(6103);
      const mediaObscuredReasonFromBitmask = tmp4Result.getMediaObscuredReasonFromBitmask(tmp, enabledHarmTypesBitmaskForChannelType);
      tmp4Result = tmp4(6103);
      if (mediaObscuredReasonFromBitmask.length > 0) {
        const items2 = [true, mediaObscuredReasonFromBitmask[0]];
        let tmp2 = items2;
      } else {
        const items3 = [, ];
        if (tmp8) {
          items3[0] = true;
          items3[1] = tmp4(6107).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
          tmp2 = items3;
        } else if (media.spoiler) {
          items3[0] = arg1;
          items3[1] = tmp4(6107).ObscureReason.SPOILER;
          tmp2 = items3;
        } else {
          items3[0] = false;
          items3[1] = undefined;
          tmp2 = items3;
        }
      }
      return tmp2;
    }
  }
}
const result = require("set").fileFinishedImporting("modules/messages/MessageAttachmentUtils.tsx");

export const getObscureReasonForAttachment = function getObscureReasonForAttachment(attachment, enabledHarmTypesBitmaskForChannelAndAuthorId, c2) {
  let flag = c2;
  if (c2 === undefined) {
    flag = false;
  }
  let obj = getEligibleHarmTypesConfigsForContext;
  obj = { type: ContentHarmTypeChannel.ObscuredMediaTypes.Attachment, media: attachment };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj, enabledHarmTypesBitmaskForChannelAndAuthorId);
  getEligibleHarmTypesConfigsForContext;
  obj = { type: ContentHarmTypeChannel.ObscuredMediaTypes.Attachment, media: attachment };
  if (mediaObscuredReasonFromBitmask.length > 0) {
    let first = mediaObscuredReasonFromBitmask[0];
  } else if (tmp4) {
    first = tmp(6107).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    first = null;
    if (flag) {
      first = tmp(6107).ObscureReason.SPOILER;
    }
  }
  return first;
};
export const getObscureReasonForEmbed = function getObscureReasonForEmbed(media, message, flag2, closure_3) {
  let obj = getEligibleHarmTypesConfigsForContext;
  obj = { type: ContentHarmTypeChannel.ObscuredMediaTypes.Embed, media };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj, closure_3);
  const bot = message.author.bot;
  let isMediaScanPendingResult = !bot;
  if (!bot) {
    obj = { type: null, media: null };
    obj[0] = tmp(6108).ObscuredMediaTypes.Embed;
    obj[1] = media;
    isMediaScanPendingResult = tmp(6103).isMediaScanPending(obj, closure_3);
    const tmpResult = tmp(6103);
  }
  if (mediaObscuredReasonFromBitmask.length > 0) {
    let first = mediaObscuredReasonFromBitmask[0];
  } else if (isMediaScanPendingResult) {
    first = tmp(6107).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    first = null;
    if (flag2) {
      first = tmp(6107).ObscureReason.SPOILER;
    }
  }
  return first;
};
export const getObscureReasonForUnfurledMediaItem = function getObscureReasonForUnfurledMediaItem(media, enabledContentHarmTypeFlags, arg2, isBot) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let flag2 = isBot;
  if (isBot === undefined) {
    flag2 = false;
  }
  let obj = getEligibleHarmTypesConfigsForContext;
  obj = { type: ContentHarmTypeChannel.ObscuredMediaTypes.GenericMedia, media };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj, enabledContentHarmTypeFlags);
  let isMediaScanPendingResult = !flag2;
  if (!flag2) {
    obj = { type: null, media: null };
    obj[0] = tmp(6108).ObscuredMediaTypes.GenericMedia;
    obj[1] = media;
    isMediaScanPendingResult = tmp(6103).isMediaScanPending(obj, enabledContentHarmTypeFlags);
    const tmpResult = tmp(6103);
  }
  if (mediaObscuredReasonFromBitmask.includes(ObscureReason.ObscureReason.EXPLICIT_CONTENT)) {
    let EXPLICIT_CONTENT = tmp(6107).ObscureReason.EXPLICIT_CONTENT;
  } else if (mediaObscuredReasonFromBitmask.includes(tmp(6107).ObscureReason.GORE_CONTENT)) {
    EXPLICIT_CONTENT = tmp(6107).ObscureReason.GORE_CONTENT;
  } else if (mediaObscuredReasonFromBitmask.includes(tmp(6107).ObscureReason.SELF_HARM_CONTENT)) {
    EXPLICIT_CONTENT = tmp(6107).ObscureReason.SELF_HARM_CONTENT;
  } else if (isMediaScanPendingResult) {
    EXPLICIT_CONTENT = tmp(6107).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    EXPLICIT_CONTENT = null;
    if (flag) {
      EXPLICIT_CONTENT = tmp(6107).ObscureReason.SPOILER;
    }
  }
  return EXPLICIT_CONTENT;
};
export { getForumPostShouldObscure };
export const useShouldObscure = function useShouldObscure(channel) {
  channel = channel.channel;
  const items = [closure_3];
  const stateFromStores = channel(647).useStateFromStores(items, () => {
    let canResult = null != channel;
    if (canResult) {
      canResult = closure_1_3.can(closure_1_4.MANAGE_MESSAGES, tmp);
    }
    return canResult;
  });
  const RenderSpoilers = channel(4135).RenderSpoilers;
  const setting = RenderSpoilers.useSetting();
  const obj = channel(647);
  const enabledHarmTypesBitmaskForChannelType = channel(6103).getEnabledHarmTypesBitmaskForChannelType(channel(6108).ContentHarmTypeChannel.GUILD);
  return getForumPostShouldObscure(channel.media, !computeGlobalSpoilerDisplayDefault(setting, stateFromStores), enabledHarmTypesBitmaskForChannelType);
};
export const getObscuredAlt = function getObscuredAlt(obscureReason) {
  if (ObscureReason.ObscureReason.EXPLICIT_CONTENT !== obscureReason) {
    if (tmp(6107).ObscureReason.GORE_CONTENT !== obscureReason) {
      if (tmp(6107).ObscureReason.SELF_HARM_CONTENT !== obscureReason) {
        if (tmp(6107).ObscureReason.SPOILER === obscureReason) {
          const intl = tmp(1236).intl;
          return intl.string(tmp(1236).t["XpfDH+"]);
        }
      }
    }
  }
  const intl2 = tmp(1236).intl;
  return intl2.string(getSystemLocale.t.SEgHFh);
};
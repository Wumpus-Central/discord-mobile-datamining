// === Module 12012: MessageAttachmentUtils ===

// Module 12012 (MessageAttachmentUtils)
import util from "util" /* 1114 */;
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 7292 */;
import ObscureMediaModels from "ObscureMediaModels" /* 7296 */;
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels" /* 7297 */;
import ForumPostMediaUtils from "ForumPostMediaUtils" /* 7897 */;
import computeGlobalSpoilerDisplayDefault from "computeGlobalSpoilerDisplay" /* 11526 */;
import PermissionStore from "PermissionStore" /* 4199 */;

require = fn;
function getForumPostShouldObscure(media, arg1, enabledHarmTypesBitmaskForChannelType) {
  if (null == media) {
    const items = [false, undefined];
    return items;
  } else {
    const type = media.type;
    if (ForumPostMediaUtils.ForumPostMediaTypes.EMBED === type) {
      let obj = { type: tmp4(7297).ObscuredMediaTypes.Embed, media };
      let tmp = obj;
    } else if (tmp4(7897).ForumPostMediaTypes.ATTACHMENT === type) {
      obj = { type: tmp4(7297).ObscuredMediaTypes.Attachment, media };
      tmp = obj;
    } else {
      tmp = null;
      if (tmp4(7897).ForumPostMediaTypes.COMPONENT === type) {
        obj = { type: tmp4(7297).ObscuredMediaTypes.GenericMedia, media: media.srcUnfurledMediaItem };
        tmp = obj;
      }
    }
    if (null == tmp) {
      const items1 = [false, undefined];
      return items1;
    } else {
      let tmp4Result = tmp4(7292);
      const mediaObscuredReasonFromBitmask = tmp4Result.getMediaObscuredReasonFromBitmask(tmp, enabledHarmTypesBitmaskForChannelType);
      tmp4Result = tmp4(7292);
      if (mediaObscuredReasonFromBitmask.length > 0) {
        const items2 = [true, mediaObscuredReasonFromBitmask[0]];
        let tmp2 = items2;
      } else {
        const items3 = [, ];
        if (tmp8) {
          items3[0] = true;
          items3[1] = tmp4(7296).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
          tmp2 = items3;
        } else if (media.spoiler) {
          items3[0] = arg1;
          items3[1] = tmp4(7296).ObscureReason.SPOILER;
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
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/MessageAttachmentUtils.tsx");

export const getObscureReasonForAttachment = function getObscureReasonForAttachment(attachment, enabledHarmTypesBitmaskForChannelAndAuthorId, c2) {
  let flag = c2;
  if (c2 === undefined) {
    flag = false;
  }
  let obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: attachment };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj, enabledHarmTypesBitmaskForChannelAndAuthorId);
  ObscuredMediaUtils;
  obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: attachment };
  if (mediaObscuredReasonFromBitmask.length > 0) {
    let first = mediaObscuredReasonFromBitmask[0];
  } else if (tmp4) {
    first = tmp(7296).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    first = null;
    if (flag) {
      first = tmp(7296).ObscureReason.SPOILER;
    }
  }
  return first;
};
export const getObscureReasonForEmbed = function getObscureReasonForEmbed(embed, message, flag2, enabledContentHarmTypeFlags) {
  let obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: embed };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj, enabledContentHarmTypeFlags);
  const bot = message.author.bot;
  let isMediaScanPendingResult = !bot;
  if (!bot) {
    obj = { type: tmp(7297).ObscuredMediaTypes.Embed, media: embed };
    isMediaScanPendingResult = tmp(7292).isMediaScanPending(obj, enabledContentHarmTypeFlags);
    const tmpResult = tmp(7292);
  }
  if (mediaObscuredReasonFromBitmask.length > 0) {
    let first = mediaObscuredReasonFromBitmask[0];
  } else if (isMediaScanPendingResult) {
    first = tmp(7296).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    first = null;
    if (flag2) {
      first = tmp(7296).ObscureReason.SPOILER;
    }
  }
  return first;
};
export const getObscureReasonForUnfurledMediaItem = function getObscureReasonForUnfurledMediaItem(unfurledMediaItem, enabledHarmTypesBitmaskForChannelAndAuthorId, arg2, isBot) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let flag2 = isBot;
  if (isBot === undefined) {
    flag2 = false;
  }
  let obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media: unfurledMediaItem };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj, enabledHarmTypesBitmaskForChannelAndAuthorId);
  let isMediaScanPendingResult = !flag2;
  if (!flag2) {
    obj = { type: tmp(7297).ObscuredMediaTypes.GenericMedia, media: unfurledMediaItem };
    isMediaScanPendingResult = tmp(7292).isMediaScanPending(obj, enabledHarmTypesBitmaskForChannelAndAuthorId);
    const tmpResult = tmp(7292);
  }
  if (mediaObscuredReasonFromBitmask.includes(ObscureMediaModels.ObscureReason.EXPLICIT_CONTENT)) {
    let EXPLICIT_CONTENT = tmp(7296).ObscureReason.EXPLICIT_CONTENT;
  } else if (mediaObscuredReasonFromBitmask.includes(tmp(7296).ObscureReason.GORE_CONTENT)) {
    EXPLICIT_CONTENT = tmp(7296).ObscureReason.GORE_CONTENT;
  } else if (mediaObscuredReasonFromBitmask.includes(tmp(7296).ObscureReason.SELF_HARM_CONTENT)) {
    EXPLICIT_CONTENT = tmp(7296).ObscureReason.SELF_HARM_CONTENT;
  } else if (isMediaScanPendingResult) {
    EXPLICIT_CONTENT = tmp(7296).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    EXPLICIT_CONTENT = null;
    if (flag) {
      EXPLICIT_CONTENT = tmp(7296).ObscureReason.SPOILER;
    }
  }
  return EXPLICIT_CONTENT;
};
export { getForumPostShouldObscure };
export const useShouldObscure = function useShouldObscure(channel) {
  channel = channel.channel;
  const items = [PermissionStore];
  const stateFromStores = channel(563).useStateFromStores(items, () => {
    let canResult = null != channel;
    if (canResult) {
      canResult = PermissionStore.can(Permissions.MANAGE_MESSAGES, tmp);
    }
    return canResult;
  });
  const RenderSpoilers = channel(1935).RenderSpoilers;
  const setting = RenderSpoilers.useSetting();
  const obj = channel(563);
  const enabledHarmTypesBitmaskForChannelType = channel(7292).getEnabledHarmTypesBitmaskForChannelType(channel(7297).ContentHarmTypeChannel.GUILD);
  return getForumPostShouldObscure(channel.media, !computeGlobalSpoilerDisplayDefault(setting, stateFromStores), enabledHarmTypesBitmaskForChannelType);
};
export const getObscuredAlt = function getObscuredAlt(obscureReason) {
  if (ObscureMediaModels.ObscureReason.EXPLICIT_CONTENT !== obscureReason) {
    if (tmp(7296).ObscureReason.GORE_CONTENT !== obscureReason) {
      if (tmp(7296).ObscureReason.SELF_HARM_CONTENT !== obscureReason) {
        if (tmp(7296).ObscureReason.SPOILER === obscureReason) {
          const intl = tmp(1114).intl;
          return intl.string(tmp(1114).t["XpfDH+"]);
        }
      }
    }
  }
  const intl2 = tmp(1114).intl;
  return intl2.string(util.t.SEgHFh);
};
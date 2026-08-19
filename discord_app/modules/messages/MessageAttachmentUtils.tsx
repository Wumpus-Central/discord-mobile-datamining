// discord_app/modules/messages/MessageAttachmentUtils.tsx
import getSystemLocale from "../../intl/index.native.tsx";
import getEligibleHarmTypesConfigsForContext from "../explicit_media_redaction/ObscuredMediaUtils.tsx";
import ObscureReason from "../explicit_media_redaction/ObscureMediaModels.tsx";
import ContentHarmTypeChannel from "../explicit_media_redaction/ExplicitMediaRedactionModels.tsx";
import isMediaAttachment from "../forums/ForumPostMediaUtils.tsx";
import computeGlobalSpoilerDisplayDefault from "computeGlobalSpoilerDisplay.tsx";
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";
import { Permissions } from "../../Constants.tsx";

require = fn;
function getForumPostShouldObscure(media, arg1, enabledHarmTypesBitmaskForChannelType) {
  if (null == media) {
    const items = [false, undefined];
    return items;
  } else {
    const type = media.type;
    if (isMediaAttachment.ForumPostMediaTypes.EMBED === type) {
      let obj = { type: null, media: null };
      obj[0] = ContentHarmTypeChannel.ObscuredMediaTypes.Embed;
      obj[1] = media;
      let tmp = obj;
    } else if (isMediaAttachment.ForumPostMediaTypes.ATTACHMENT === type) {
      obj = { type: null, media: null };
      obj[0] = ContentHarmTypeChannel.ObscuredMediaTypes.Attachment;
      obj[1] = media;
      tmp = obj;
    } else {
      tmp = null;
      if (isMediaAttachment.ForumPostMediaTypes.COMPONENT === type) {
        obj = { type: null, media: null };
        obj[0] = ContentHarmTypeChannel.ObscuredMediaTypes.GenericMedia;
        obj[1] = media.srcUnfurledMediaItem;
        tmp = obj;
      }
    }
    if (null == tmp) {
      const items1 = [false, undefined];
      return items1;
    } else {
      let tmp4Result = getEligibleHarmTypesConfigsForContext;
      const mediaObscuredReasonFromBitmask = tmp4Result.getMediaObscuredReasonFromBitmask(tmp, enabledHarmTypesBitmaskForChannelType);
      tmp4Result = getEligibleHarmTypesConfigsForContext;
      if (mediaObscuredReasonFromBitmask.length > 0) {
        const items2 = [true, mediaObscuredReasonFromBitmask[0]];
        let tmp2 = items2;
      } else {
        const items3 = [, ];
        if (tmp8) {
          items3[0] = true;
          items3[1] = ObscureReason.ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
          tmp2 = items3;
        } else if (media.spoiler) {
          items3[0] = arg1;
          items3[1] = ObscureReason.ObscureReason.SPOILER;
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
const result = require("obj132").fileFinishedImporting("modules/messages/MessageAttachmentUtils.tsx");

export const getObscureReasonForAttachment = function getObscureReasonForAttachment(attachment, enabledHarmTypesBitmaskForChannelAndAuthorId, c2) {
  let flag = c2;
  if (c2 === undefined) {
    flag = false;
  }
  let obj = { type: ContentHarmTypeChannel.ObscuredMediaTypes.Attachment, media: attachment };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj, enabledHarmTypesBitmaskForChannelAndAuthorId);
  getEligibleHarmTypesConfigsForContext;
  obj = { type: ContentHarmTypeChannel.ObscuredMediaTypes.Attachment, media: attachment };
  if (mediaObscuredReasonFromBitmask.length > 0) {
    let first = mediaObscuredReasonFromBitmask[0];
  } else if (tmp4) {
    first = ObscureReason.ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    first = null;
    if (flag) {
      first = ObscureReason.ObscureReason.SPOILER;
    }
  }
  return first;
};
export const getObscureReasonForEmbed = function getObscureReasonForEmbed(embed, message, flag2, closure_3) {
  let obj = { type: ContentHarmTypeChannel.ObscuredMediaTypes.Embed, media: embed };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj, closure_3);
  const bot = message.author.bot;
  let isMediaScanPendingResult = !bot;
  if (!bot) {
    obj = { type: null, media: null };
    obj[0] = ContentHarmTypeChannel.ObscuredMediaTypes.Embed;
    obj[1] = embed;
    isMediaScanPendingResult = getEligibleHarmTypesConfigsForContext.isMediaScanPending(obj, closure_3);
    const tmpResult = getEligibleHarmTypesConfigsForContext;
  }
  if (mediaObscuredReasonFromBitmask.length > 0) {
    let first = mediaObscuredReasonFromBitmask[0];
  } else if (isMediaScanPendingResult) {
    first = ObscureReason.ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    first = null;
    if (flag2) {
      first = ObscureReason.ObscureReason.SPOILER;
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
  let obj = { type: ContentHarmTypeChannel.ObscuredMediaTypes.GenericMedia, media: unfurledMediaItem };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj, enabledHarmTypesBitmaskForChannelAndAuthorId);
  let isMediaScanPendingResult = !flag2;
  if (!flag2) {
    obj = { type: null, media: null };
    obj[0] = ContentHarmTypeChannel.ObscuredMediaTypes.GenericMedia;
    obj[1] = unfurledMediaItem;
    isMediaScanPendingResult = getEligibleHarmTypesConfigsForContext.isMediaScanPending(obj, enabledHarmTypesBitmaskForChannelAndAuthorId);
    const tmpResult = getEligibleHarmTypesConfigsForContext;
  }
  if (mediaObscuredReasonFromBitmask.includes(ObscureReason.ObscureReason.EXPLICIT_CONTENT)) {
    let EXPLICIT_CONTENT = ObscureReason.ObscureReason.EXPLICIT_CONTENT;
  } else if (mediaObscuredReasonFromBitmask.includes(ObscureReason.ObscureReason.GORE_CONTENT)) {
    EXPLICIT_CONTENT = ObscureReason.ObscureReason.GORE_CONTENT;
  } else if (mediaObscuredReasonFromBitmask.includes(ObscureReason.ObscureReason.SELF_HARM_CONTENT)) {
    EXPLICIT_CONTENT = ObscureReason.ObscureReason.SELF_HARM_CONTENT;
  } else if (isMediaScanPendingResult) {
    EXPLICIT_CONTENT = ObscureReason.ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    EXPLICIT_CONTENT = null;
    if (flag) {
      EXPLICIT_CONTENT = ObscureReason.ObscureReason.SPOILER;
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
      canResult = closure_1_3.can(Permissions.MANAGE_MESSAGES, tmp);
    }
    return canResult;
  });
  const RenderSpoilers = channel(4066).RenderSpoilers;
  const setting = RenderSpoilers.useSetting();
  const obj = channel(647);
  const enabledHarmTypesBitmaskForChannelType = channel(5019).getEnabledHarmTypesBitmaskForChannelType(channel(5022).ContentHarmTypeChannel.GUILD);
  return getForumPostShouldObscure(channel.media, !computeGlobalSpoilerDisplayDefault(setting, stateFromStores), enabledHarmTypesBitmaskForChannelType);
};
export const getObscuredAlt = function getObscuredAlt(obscureReason) {
  if (ObscureReason.ObscureReason.EXPLICIT_CONTENT !== obscureReason) {
    if (ObscureReason.ObscureReason.GORE_CONTENT !== obscureReason) {
      if (ObscureReason.ObscureReason.SELF_HARM_CONTENT !== obscureReason) {
        if (ObscureReason.ObscureReason.SPOILER === obscureReason) {
          const intl = getSystemLocale.intl;
          return intl.string(getSystemLocale.t["XpfDH+"]);
        }
      }
    }
  }
  const intl2 = getSystemLocale.intl;
  return intl2.string(getSystemLocale.t.SEgHFh);
};
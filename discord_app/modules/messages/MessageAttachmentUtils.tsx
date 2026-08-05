// discord_app/modules/messages/MessageAttachmentUtils.tsx
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import ME from "ME";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { ContentHarmTypeChannel } from "../explicit_media_redaction/ExplicitMediaRedactionModels.tsx";
import { getEligibleHarmTypesConfigsForContext } from "../explicit_media_redaction/ObscuredMediaUtils.tsx";
import { ObscureReason } from "../explicit_media_redaction/ObscureMediaModels.tsx";
import { isMediaAttachment } from "../forums/ForumPostMediaUtils.tsx";
import { computeGlobalSpoilerDisplay } from "computeGlobalSpoilerDisplay.tsx";

let c4;
let c5;
const require = arg1;
function getForumPostShouldObscure(media, arg1, enabledHarmTypesBitmaskForChannelType) {
  if (null == media) {
    const items = [false, undefined];
    return items;
  } else {
    const type = media.type;
    if (isMediaAttachment /* isMediaAttachment */.ForumPostMediaTypes.EMBED === type) {
      let obj = { type: null, media: null };
      obj[0] = tmp4(5823).ObscuredMediaTypes.Embed;
      obj[1] = media;
      let tmp = obj;
    } else if (tmp4(8216).ForumPostMediaTypes.ATTACHMENT === type) {
      obj = { type: null, media: null };
      obj[0] = tmp4(5823).ObscuredMediaTypes.Attachment;
      obj[1] = media;
      tmp = obj;
    } else {
      tmp = null;
      if (tmp4(8216).ForumPostMediaTypes.COMPONENT === type) {
        obj = { type: null, media: null };
        obj[0] = tmp4(5823).ObscuredMediaTypes.GenericMedia;
        obj[1] = media.srcUnfurledMediaItem;
        tmp = obj;
      }
    }
    if (null == tmp) {
      const items1 = [false, undefined];
      return items1;
    } else {
      let tmp4Result = tmp4(5818);
      const mediaObscuredReasonFromBitmask = tmp4Result.getMediaObscuredReasonFromBitmask(tmp, enabledHarmTypesBitmaskForChannelType);
      tmp4Result = tmp4(5818);
      if (mediaObscuredReasonFromBitmask.length > 0) {
        const items2 = [true, mediaObscuredReasonFromBitmask[0]];
        let tmp2 = items2;
      } else {
        const items3 = [, ];
        if (tmp8) {
          items3[0] = true;
          items3[1] = tmp4(5822).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
          tmp2 = items3;
        } else if (media.spoiler) {
          items3[0] = arg1;
          items3[1] = tmp4(5822).ObscureReason.SPOILER;
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
({ MessageAttachmentFlags: c4, Permissions: c5 } = ME);
const result = require("getEligibleHarmTypesConfigsForContext").fileFinishedImporting("modules/messages/MessageAttachmentUtils.tsx");

export const getObscureReasonForAttachment = function getObscureReasonForAttachment(attachment, enabledHarmTypesBitmaskForChannelAndAuthorId) {
  const flags = attachment.flags;
  let num = 0;
  if (undefined !== flags) {
    num = flags;
  }
  let obj = getEligibleHarmTypesConfigsForContext /* getEligibleHarmTypesConfigsForContext */;
  obj = { type: ContentHarmTypeChannel /* ContentHarmTypeChannel */.ObscuredMediaTypes.Attachment, media: attachment };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj, enabledHarmTypesBitmaskForChannelAndAuthorId);
  getEligibleHarmTypesConfigsForContext /* getEligibleHarmTypesConfigsForContext */;
  obj = { type: ContentHarmTypeChannel /* ContentHarmTypeChannel */.ObscuredMediaTypes.Attachment, media: attachment };
  if (mediaObscuredReasonFromBitmask.length > 0) {
    let first = mediaObscuredReasonFromBitmask[0];
  } else if (tmp4) {
    first = tmp(5822).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    first = null;
    if (tmpResult.hasFlag(num, constants.IS_SPOILER)) {
      first = tmp(5822).ObscureReason.SPOILER;
    }
    tmpResult = tmp(1384);
  }
  return first;
};
export const getObscureReasonForEmbed = function getObscureReasonForEmbed(embed, message, flag2, getUncachedChannelPermissions) {
  let obj = getEligibleHarmTypesConfigsForContext /* getEligibleHarmTypesConfigsForContext */;
  obj = { type: ContentHarmTypeChannel /* ContentHarmTypeChannel */.ObscuredMediaTypes.Embed, media: embed };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj, getUncachedChannelPermissions);
  const bot = message.author.bot;
  let isMediaScanPendingResult = !bot;
  if (!bot) {
    obj = { type: null, media: null };
    obj[0] = tmp(5823).ObscuredMediaTypes.Embed;
    obj[1] = embed;
    isMediaScanPendingResult = tmp(5818).isMediaScanPending(obj, getUncachedChannelPermissions);
    const tmpResult = tmp(5818);
  }
  if (mediaObscuredReasonFromBitmask.length > 0) {
    let first = mediaObscuredReasonFromBitmask[0];
  } else if (isMediaScanPendingResult) {
    first = tmp(5822).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    first = null;
    if (flag2) {
      first = tmp(5822).ObscureReason.SPOILER;
    }
  }
  return first;
};
export const getObscureReasonForUnfurledMediaItem = function getObscureReasonForUnfurledMediaItem(media, enabledContentHarmTypeFlags, spoiler, isBot) {
  let flag = spoiler;
  if (spoiler === undefined) {
    flag = false;
  }
  let flag2 = isBot;
  if (isBot === undefined) {
    flag2 = false;
  }
  let obj = getEligibleHarmTypesConfigsForContext /* getEligibleHarmTypesConfigsForContext */;
  obj = { type: ContentHarmTypeChannel /* ContentHarmTypeChannel */.ObscuredMediaTypes.GenericMedia, media };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj, enabledContentHarmTypeFlags);
  let isMediaScanPendingResult = !flag2;
  if (!flag2) {
    obj = { type: null, media: null };
    obj[0] = tmp(5823).ObscuredMediaTypes.GenericMedia;
    obj[1] = media;
    isMediaScanPendingResult = tmp(5818).isMediaScanPending(obj, enabledContentHarmTypeFlags);
    const tmpResult = tmp(5818);
  }
  if (mediaObscuredReasonFromBitmask.includes(ObscureReason /* ObscureReason */.ObscureReason.EXPLICIT_CONTENT)) {
    let EXPLICIT_CONTENT = tmp(5822).ObscureReason.EXPLICIT_CONTENT;
  } else if (mediaObscuredReasonFromBitmask.includes(tmp(5822).ObscureReason.GORE_CONTENT)) {
    EXPLICIT_CONTENT = tmp(5822).ObscureReason.GORE_CONTENT;
  } else if (mediaObscuredReasonFromBitmask.includes(tmp(5822).ObscureReason.SELF_HARM_CONTENT)) {
    EXPLICIT_CONTENT = tmp(5822).ObscureReason.SELF_HARM_CONTENT;
  } else if (isMediaScanPendingResult) {
    EXPLICIT_CONTENT = tmp(5822).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    EXPLICIT_CONTENT = null;
    if (flag) {
      EXPLICIT_CONTENT = tmp(5822).ObscureReason.SPOILER;
    }
  }
  return EXPLICIT_CONTENT;
};
export { getForumPostShouldObscure };
export const useShouldObscure = function useShouldObscure(channel) {
  channel = channel.channel;
  const items = [getUncachedChannelPermissions];
  const stateFromStores = channel(647).useStateFromStores(items, () => {
    let canResult = null != channel;
    if (canResult) {
      canResult = outer1_3.can(outer1_5.MANAGE_MESSAGES, tmp);
    }
    return canResult;
  });
  const RenderSpoilers = channel(3958).RenderSpoilers;
  const setting = RenderSpoilers.useSetting();
  const obj = channel(647);
  const enabledHarmTypesBitmaskForChannelType = channel(5818).getEnabledHarmTypesBitmaskForChannelType(channel(5823).ContentHarmTypeChannel.GUILD);
  return getForumPostShouldObscure(channel.media, !computeGlobalSpoilerDisplay(setting, stateFromStores), enabledHarmTypesBitmaskForChannelType);
};
export const getObscuredAlt = function getObscuredAlt(obscureReason) {
  if (ObscureReason /* ObscureReason */.ObscureReason.EXPLICIT_CONTENT !== obscureReason) {
    if (tmp(5822).ObscureReason.GORE_CONTENT !== obscureReason) {
      if (tmp(5822).ObscureReason.SELF_HARM_CONTENT !== obscureReason) {
        if (tmp(5822).ObscureReason.SPOILER === obscureReason) {
          const intl = tmp(1236).intl;
          return intl.string(tmp(1236).t["XpfDH+"]);
        }
      }
    }
  }
  const intl2 = tmp(1236).intl;
  return intl2.string(getSystemLocale /* getSystemLocale */.t.SEgHFh);
};
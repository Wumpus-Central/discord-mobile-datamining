// discord_app/modules/messages/MessageAttachmentUtils.tsx
import util from "../../intl/index.native.tsx";
import ObscuredMediaUtils from "../explicit_media_redaction/ObscuredMediaUtils.tsx";
import ObscureMediaModels from "../explicit_media_redaction/ObscureMediaModels.tsx";
import ExplicitMediaRedactionModels from "../explicit_media_redaction/ExplicitMediaRedactionModels.tsx";
import ForumPostMediaUtils from "../forums/ForumPostMediaUtils.tsx";
import computeGlobalSpoilerDisplayDefault from "computeGlobalSpoilerDisplay.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

require = fn;
function getForumPostShouldObscure(media, arg1, enabledHarmTypesBitmaskForChannelType) {
  if (null == media) {
    const items = [false, undefined];
    return items;
  } else {
    const type = media.type;
    if (ForumPostMediaUtils.ForumPostMediaTypes.EMBED === type) {
      let obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media };
      let tmp = obj;
    } else if (ForumPostMediaUtils.ForumPostMediaTypes.ATTACHMENT === type) {
      obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media };
      tmp = obj;
    } else {
      tmp = null;
      if (ForumPostMediaUtils.ForumPostMediaTypes.COMPONENT === type) {
        obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media: media.srcUnfurledMediaItem };
        tmp = obj;
      }
    }
    if (null == tmp) {
      const items1 = [false, undefined];
      return items1;
    } else {
      let tmp4Result = ObscuredMediaUtils;
      const mediaObscuredReasonFromBitmask = tmp4Result.getMediaObscuredReasonFromBitmask(
        tmp,
        enabledHarmTypesBitmaskForChannelType,
      );
      tmp4Result = ObscuredMediaUtils;
      if (mediaObscuredReasonFromBitmask.length > 0) {
        const items2 = [true, mediaObscuredReasonFromBitmask[0]];
        let tmp2 = items2;
      } else {
        const items3 = [,];
        if (tmp8) {
          items3[0] = true;
          items3[1] = ObscureMediaModels.ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
          tmp2 = items3;
        } else if (media.spoiler) {
          items3[0] = arg1;
          items3[1] = ObscureMediaModels.ObscureReason.SPOILER;
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

export const getObscureReasonForAttachment = function getObscureReasonForAttachment(
  attachment,
  enabledHarmTypesBitmaskForChannelAndAuthorId,
) {
  let flag = c2;
  if (c2 === undefined) {
    flag = false;
  }
  let obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: attachment };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(
    obj,
    enabledHarmTypesBitmaskForChannelAndAuthorId,
  );
  ObscuredMediaUtils;
  obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: attachment };
  if (mediaObscuredReasonFromBitmask.length > 0) {
    let first = mediaObscuredReasonFromBitmask[0];
  } else if (tmp4) {
    first = ObscureMediaModels.ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    first = null;
    if (flag) {
      first = ObscureMediaModels.ObscureReason.SPOILER;
    }
  }
  return first;
};
export const getObscureReasonForEmbed = function getObscureReasonForEmbed(
  embed,
  message,
  flag2,
  enabledContentHarmTypeFlags,
) {
  let obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: embed };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj, enabledContentHarmTypeFlags);
  const bot = message.author.bot;
  let isMediaScanPendingResult = !bot;
  if (!bot) {
    obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: embed };
    isMediaScanPendingResult = ObscuredMediaUtils.isMediaScanPending(obj, enabledContentHarmTypeFlags);
    const tmpResult = ObscuredMediaUtils;
  }
  if (mediaObscuredReasonFromBitmask.length > 0) {
    let first = mediaObscuredReasonFromBitmask[0];
  } else if (isMediaScanPendingResult) {
    first = ObscureMediaModels.ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    first = null;
    if (flag2) {
      first = ObscureMediaModels.ObscureReason.SPOILER;
    }
  }
  return first;
};
export const getObscureReasonForUnfurledMediaItem = function getObscureReasonForUnfurledMediaItem(
  unfurledMediaItem,
  enabledHarmTypesBitmaskForChannelAndAuthorId,
  arg2,
) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let flag2 = isBot;
  if (isBot === undefined) {
    flag2 = false;
  }
  let obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media: unfurledMediaItem };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(
    obj,
    enabledHarmTypesBitmaskForChannelAndAuthorId,
  );
  let isMediaScanPendingResult = !flag2;
  if (!flag2) {
    obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media: unfurledMediaItem };
    isMediaScanPendingResult = ObscuredMediaUtils.isMediaScanPending(obj, enabledHarmTypesBitmaskForChannelAndAuthorId);
    const tmpResult = ObscuredMediaUtils;
  }
  if (mediaObscuredReasonFromBitmask.includes(ObscureMediaModels.ObscureReason.EXPLICIT_CONTENT)) {
    let EXPLICIT_CONTENT = ObscureMediaModels.ObscureReason.EXPLICIT_CONTENT;
  } else if (mediaObscuredReasonFromBitmask.includes(ObscureMediaModels.ObscureReason.GORE_CONTENT)) {
    EXPLICIT_CONTENT = ObscureMediaModels.ObscureReason.GORE_CONTENT;
  } else if (mediaObscuredReasonFromBitmask.includes(ObscureMediaModels.ObscureReason.SELF_HARM_CONTENT)) {
    EXPLICIT_CONTENT = ObscureMediaModels.ObscureReason.SELF_HARM_CONTENT;
  } else if (isMediaScanPendingResult) {
    EXPLICIT_CONTENT = ObscureMediaModels.ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    EXPLICIT_CONTENT = null;
    if (flag) {
      EXPLICIT_CONTENT = ObscureMediaModels.ObscureReason.SPOILER;
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
  const enabledHarmTypesBitmaskForChannelType = channel(7292).getEnabledHarmTypesBitmaskForChannelType(
    channel(7297).ContentHarmTypeChannel.GUILD,
  );
  return getForumPostShouldObscure(
    channel.media,
    !computeGlobalSpoilerDisplayDefault(setting, stateFromStores),
    enabledHarmTypesBitmaskForChannelType,
  );
};
export const getObscuredAlt = function getObscuredAlt(obscureReason) {
  if (ObscureMediaModels.ObscureReason.EXPLICIT_CONTENT !== obscureReason) {
    if (ObscureMediaModels.ObscureReason.GORE_CONTENT !== obscureReason) {
      if (ObscureMediaModels.ObscureReason.SELF_HARM_CONTENT !== obscureReason) {
        if (ObscureMediaModels.ObscureReason.SPOILER === obscureReason) {
          const intl = util.intl;
          return intl.string(util.t["XpfDH+"]);
        }
      }
    }
  }
  const intl2 = util.intl;
  return intl2.string(util.t.SEgHFh);
};

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
      const obj2 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media };
      let tmp = obj2;
    } else if (ForumPostMediaUtils.ForumPostMediaTypes.ATTACHMENT === type) {
      const obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media };
      tmp = obj;
    } else {
      tmp = null;
      if (ForumPostMediaUtils.ForumPostMediaTypes.COMPONENT === type) {
        const obj3 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media: media.srcUnfurledMediaItem };
        tmp = obj3;
      }
    }
    if (null == tmp) {
      const items1 = [false, undefined];
      return items1;
    } else {
      const mediaObscuredReasonFromBitmask = ObscuredMediaUtils.getMediaObscuredReasonFromBitmask(tmp, enabledHarmTypesBitmaskForChannelType);
      ObscuredMediaUtils;
      if (mediaObscuredReasonFromBitmask.length > 0) {
        const items2 = [true, mediaObscuredReasonFromBitmask[0]];
        let tmp2 = items2;
      } else {
        const items3 = [, ];
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
const Permissions = fn(1085).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/MessageAttachmentUtils.tsx");

export const getObscureReasonForAttachment = function getObscureReasonForAttachment(attachment, enabledHarmTypesBitmaskForChannelAndAuthorId) {
  let flag = c2;
  if (c2 === undefined) {
    flag = false;
  }
  const obj = ObscuredMediaUtils;
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask({ type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: attachment }, enabledHarmTypesBitmaskForChannelAndAuthorId);
  ObscuredMediaUtils;
  { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: attachment };
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
export const getObscureReasonForEmbed = function getObscureReasonForEmbed(embed, message, flag2, enabledHarmTypesBitmaskForChannelAndAuthorId) {
  const obj = ObscuredMediaUtils;
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask({ type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: embed }, enabledHarmTypesBitmaskForChannelAndAuthorId);
  const bot = message.author.bot;
  let isMediaScanPendingResult = !bot;
  if (!bot) {
    const obj3 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: embed };
    isMediaScanPendingResult = ObscuredMediaUtils.isMediaScanPending(obj3, enabledHarmTypesBitmaskForChannelAndAuthorId);
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
export const getObscureReasonForUnfurledMediaItem = function getObscureReasonForUnfurledMediaItem(size, enabledHarmTypesBitmaskForChannelAndAuthorId, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let flag2 = cResult;
  if (cResult === undefined) {
    flag2 = false;
  }
  const obj = ObscuredMediaUtils;
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask({ type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media: size }, enabledHarmTypesBitmaskForChannelAndAuthorId);
  let isMediaScanPendingResult = !flag2;
  if (!flag2) {
    const obj3 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media: size };
    isMediaScanPendingResult = ObscuredMediaUtils.isMediaScanPending(obj3, enabledHarmTypesBitmaskForChannelAndAuthorId);
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
export const useShouldObscure = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let tmp2 = dependencyMap;
  const cResult = channel(576).c(10);
  channel = channel.channel;
  const media = channel.media;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function o() {
      let canResult = null != channel;
      if (canResult) {
        canResult = PermissionStore.can(Permissions.MANAGE_MESSAGES, tmp);
      }
      return canResult;
    };
    cResult[1] = channel;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = channel(576);
  const stateFromStores = channel(573).useStateFromStores(first, tmp6);
  const RenderSpoilers = tmp(2028).RenderSpoilers;
  const setting = RenderSpoilers.useSetting();
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === media) {
      if (cResult[5] === setting) {
        return cResult[6];
      }
    }
  }
  channel(6795);
  if (cResult[7] === stateFromStores) {
    if (cResult[8] === setting) {
      let tmp11 = cResult[9];
    }
    const tmp13 = getForumPostShouldObscure(media, !tmp11, tmp10);
    cResult[3] = stateFromStores;
    cResult[4] = media;
    cResult[5] = setting;
    cResult[6] = tmp13;
  }
  tmp2 = computeGlobalSpoilerDisplayDefault(setting, stateFromStores);
  cResult[7] = stateFromStores;
  cResult[8] = setting;
  cResult[9] = tmp2;
  tmp11 = tmp2;
  const tmpResult = channel(573);
}) : ((channel) => {
  channel = channel.channel;
  const items = [PermissionStore];
  const stateFromStores = channel(573).useStateFromStores(items, () => {
    let canResult = null != channel;
    if (canResult) {
      canResult = PermissionStore.can(Permissions.MANAGE_MESSAGES, tmp);
    }
    return canResult;
  });
  const RenderSpoilers = channel(2028).RenderSpoilers;
  const setting = RenderSpoilers.useSetting();
  const obj = channel(573);
  const enabledHarmTypesBitmaskForChannelType = channel(6795).getEnabledHarmTypesBitmaskForChannelType(channel(6800).ContentHarmTypeChannel.GUILD);
  return getForumPostShouldObscure(channel.media, !computeGlobalSpoilerDisplayDefault(setting, stateFromStores), enabledHarmTypesBitmaskForChannelType);
});
export const getObscuredAlt = function getObscuredAlt(arg0) {
  if (ObscureMediaModels.ObscureReason.EXPLICIT_CONTENT !== arg0) {
    if (ObscureMediaModels.ObscureReason.GORE_CONTENT !== arg0) {
      if (ObscureMediaModels.ObscureReason.SELF_HARM_CONTENT !== arg0) {
        if (ObscureMediaModels.ObscureReason.SPOILER === arg0) {
          const intl = util.intl;
          return intl.string(util.t["XpfDH+"]);
        }
      }
    }
  }
  const intl2 = util.intl;
  return intl2.string(util.t.SEgHFh);
};
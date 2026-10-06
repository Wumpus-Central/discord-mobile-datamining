// discord_app/modules/messages/MessageAttachmentUtils.tsx
import Constants from "../../Constants.tsx";
import intl3 from "../../intl/index.native.tsx";
import ObscuredMediaUtils from "../explicit_media_redaction/ObscuredMediaUtils.tsx";
import ObscureMediaModels from "../explicit_media_redaction/ObscureMediaModels.tsx";
import ExplicitMediaRedactionModels from "../explicit_media_redaction/ExplicitMediaRedactionModels.tsx";
import ForumPostMediaUtils from "../forums/ForumPostMediaUtils.tsx";
import computeGlobalSpoilerDisplayDefault from "computeGlobalSpoilerDisplay.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let channel;

function getForumPostShouldObscure(media, arg1, enabledHarmTypesBitmaskForChannelType) {
  if (null == media) {
    const items = [false, undefined];
    return items;
  } else {
    let tmp;
    const type = media.type;
    if (ForumPostMediaUtils.ForumPostMediaTypes.EMBED === type) {
      tmp = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media };
      const obj2 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media };
    } else if (ForumPostMediaUtils.ForumPostMediaTypes.ATTACHMENT === type) {
      tmp = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media };
      const obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media };
    } else {
      tmp = null;
      if (ForumPostMediaUtils.ForumPostMediaTypes.COMPONENT === type) {
        tmp = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media: media.srcUnfurledMediaItem };
        const obj3 = {
          type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia,
          media: media.srcUnfurledMediaItem,
        };
      }
    }
    if (null == tmp) {
      const items1 = [false, undefined];
      return items1;
    } else {
      let tmp2;
      const tmp4Result = ObscuredMediaUtils;
      const mediaObscuredReasonFromBitmask = tmp4Result.getMediaObscuredReasonFromBitmask(
        tmp,
        enabledHarmTypesBitmaskForChannelType,
      );
      ObscuredMediaUtils;
      if (mediaObscuredReasonFromBitmask.length > 0) {
        const items2 = [true, mediaObscuredReasonFromBitmask[0]];
        tmp2 = items2;
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
const Permissions = Constants.Permissions;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let first;
      let tmp6;
      let tmp9;
      const tmp = channel;
      const obj = channel(576);
      const cResult = obj.c(10);
      channel = channel.channel;
      const media = channel.media;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel) {
        const fn = function o() {
          const canResult = null != channel && PermissionStore.can(Permissions.MANAGE_MESSAGES, tmp);
          return canResult;
        };
        cResult[1] = channel;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(573);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      const RenderSpoilers = tmp(2028).RenderSpoilers;
      const setting = RenderSpoilers.useSetting();
      if (cResult[3] === stateFromStores) {
        if (cResult[4] === media) {
          if (cResult[5] === setting) {
            tmp9 = cResult[6];
          }
          return tmp9;
        }
      }
      tmp(6805);
      if (cResult[7] === stateFromStores) {
        let tmp12;
        if (cResult[8] === setting) {
          tmp12 = cResult[9];
        }
        const tmp15 = getForumPostShouldObscure(media, !tmp12, tmp11);
        cResult[3] = stateFromStores;
        cResult[4] = media;
        cResult[5] = setting;
        cResult[6] = tmp15;
        tmp9 = tmp15;
      }
      const tmp13 = computeGlobalSpoilerDisplayDefault(setting, stateFromStores);
      cResult[7] = stateFromStores;
      cResult[8] = setting;
      cResult[9] = tmp13;
      tmp12 = tmp13;
    }
  : (channel) => {
      channel = channel.channel;
      const media = channel.media;
      const items = [PermissionStore];
      const obj = channel(573);
      const stateFromStores = obj.useStateFromStores(items, () => {
        const canResult = null != channel && PermissionStore.can(Permissions.MANAGE_MESSAGES, tmp);
        return canResult;
      });
      const RenderSpoilers = channel(2028).RenderSpoilers;
      const setting = RenderSpoilers.useSetting();
      const obj2 = channel(6805);
      const enabledHarmTypesBitmaskForChannelType = obj2.getEnabledHarmTypesBitmaskForChannelType(
        channel(6810).ContentHarmTypeChannel.GUILD,
      );
      return getForumPostShouldObscure(
        media,
        !computeGlobalSpoilerDisplayDefault(setting, stateFromStores),
        enabledHarmTypesBitmaskForChannelType,
      );
    };
const result = size.fileFinishedImporting("modules/messages/MessageAttachmentUtils.tsx");

export const getObscureReasonForAttachment = function getObscureReasonForAttachment(
  attachment,
  enabledHarmTypesBitmaskForChannelAndAuthorId,
) {
  let first;
  let flag = c2;
  if (c2 === undefined) {
    flag = false;
  }
  const obj = ObscuredMediaUtils;
  const obj2 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: attachment };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(
    obj2,
    enabledHarmTypesBitmaskForChannelAndAuthorId,
  );
  ObscuredMediaUtils;
  ({ type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: attachment });
  if (mediaObscuredReasonFromBitmask.length > 0) {
    first = mediaObscuredReasonFromBitmask[0];
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
  enabledHarmTypesBitmaskForChannelAndAuthorId,
) {
  let first;
  const obj = ObscuredMediaUtils;
  const obj2 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: embed };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(
    obj2,
    enabledHarmTypesBitmaskForChannelAndAuthorId,
  );
  let isMediaScanPendingResult = !message.author.bot;
  if (isMediaScanPendingResult) {
    const obj3 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: embed };
    const isMediaScanPending = ObscuredMediaUtils.isMediaScanPending;
    ObscuredMediaUtils;
    isMediaScanPendingResult = isMediaScanPending(obj3, enabledHarmTypesBitmaskForChannelAndAuthorId);
  }
  if (mediaObscuredReasonFromBitmask.length > 0) {
    first = mediaObscuredReasonFromBitmask[0];
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
  size,
  enabledHarmTypesBitmaskForChannelAndAuthorId,
  arg2,
) {
  let EXPLICIT_CONTENT;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let flag2 = cResult;
  if (cResult === undefined) {
    flag2 = false;
  }
  const obj = ObscuredMediaUtils;
  const obj2 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media: size };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(
    obj2,
    enabledHarmTypesBitmaskForChannelAndAuthorId,
  );
  let isMediaScanPendingResult = !flag2;
  if (isMediaScanPendingResult) {
    const obj3 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media: size };
    const isMediaScanPending = ObscuredMediaUtils.isMediaScanPending;
    ObscuredMediaUtils;
    isMediaScanPendingResult = isMediaScanPending(obj3, enabledHarmTypesBitmaskForChannelAndAuthorId);
  }
  if (mediaObscuredReasonFromBitmask.includes(ObscureMediaModels.ObscureReason.EXPLICIT_CONTENT)) {
    EXPLICIT_CONTENT = ObscureMediaModels.ObscureReason.EXPLICIT_CONTENT;
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
export const useShouldObscure = tmp2;
export const getObscuredAlt = function getObscuredAlt(arg0) {
  if (ObscureMediaModels.ObscureReason.EXPLICIT_CONTENT !== arg0) {
    if (ObscureMediaModels.ObscureReason.GORE_CONTENT !== arg0) {
      if (ObscureMediaModels.ObscureReason.SELF_HARM_CONTENT !== arg0) {
        if (ObscureMediaModels.ObscureReason.SPOILER === arg0) {
          const intl = intl3.intl;
          return intl.string(intl3.t["XpfDH+"]);
        }
      }
    }
  }
  const intl2 = intl3.intl;
  return intl2.string(intl3.t.SEgHFh);
};

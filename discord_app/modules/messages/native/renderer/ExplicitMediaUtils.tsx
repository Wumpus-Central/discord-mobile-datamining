import { hasFlag } from "../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import { ContentHarmTypeChannel } from "../../../explicit_media_redaction/ExplicitMediaRedactionModels.tsx";
import { getEligibleHarmTypesConfigsForContext } from "../../../explicit_media_redaction/ObscuredMediaUtils.tsx";
// discord_app/modules/messages/native/renderer/ExplicitMediaUtils.tsx
import { MessageAttachmentFlags } from "ME";

const result = require("getEligibleHarmTypesConfigsForContext").fileFinishedImporting("modules/messages/native/renderer/ExplicitMediaUtils.tsx");

export const getAttachmentObscurityProps = function getAttachmentObscurityProps(shouldAgeVerify) {
  let attachment;
  let enabledContentHarmTypeFlags;
  let shouldObscureSpoiler;
  ({ attachment, shouldObscureSpoiler, enabledContentHarmTypeFlags } = shouldAgeVerify);
  let obj = hasFlag /* hasFlag */;
  let num = attachment.flags;
  if (num == null) {
    num = 0;
  }
  const hasFlagResult = obj.hasFlag(num, MessageAttachmentFlags.IS_SPOILER);
  if (undefined !== attachment.content_scan_version) {
    let num2 = attachment.content_scan_version;
  } else if (undefined !== attachment.contentScanVersion) {
    num2 = attachment.contentScanVersion;
  }
  if (num2 == null) {
    num2 = 0;
  }
  obj = { contentScanVersion: num2, flags: null };
  let num3 = attachment.flags;
  if (num3 == null) {
    num3 = 0;
  }
  obj[1] = num3;
  let tmpResult = tmp(5818);
  obj = { type: tmp(5823).ObscuredMediaTypes.Attachment, media: obj };
  const mediaObscuredReasonFromBitmask = tmpResult.getMediaObscuredReasonFromBitmask(obj, enabledContentHarmTypeFlags);
  tmpResult = tmp(5818);
  let isVerifiedTeenResult = tmp5;
  const obj1 = { type: ContentHarmTypeChannel /* ContentHarmTypeChannel */.ObscuredMediaTypes.Attachment, media: obj };
  if (mediaObscuredReasonFromBitmask.length > 0) {
    isVerifiedTeenResult = tmp(4500).isVerifiedTeen();
    const tmpResult1 = tmp(4500);
  }
  let tmp7 = shouldObscureSpoiler;
  if (shouldObscureSpoiler) {
    tmp7 = hasFlagResult;
  }
  const obj2 = { isSpoiler: tmp7, spoiler: null, obscure: null, obscureDescription: null, obscureAwaitingScan: null, verifyAge: null, obscureHideControls: null, obscureIsOpaque: null };
  let str = "";
  let str2 = "";
  if (shouldObscureSpoiler) {
    str2 = str;
    if (hasFlagResult) {
      const intl = tmp(1236).intl;
      str2 = intl.string(tmp(1236).t["F+x38C"]).toUpperCase();
      const str3 = intl.string(tmp(1236).t["F+x38C"]);
    }
  }
  obj2[1] = str2;
  obj2[2] = mediaObscuredReasonFromBitmask.length > 0;
  if (mediaObscuredReasonFromBitmask.length > 0) {
    const intl2 = tmp(1236).intl;
    str = intl2.string(tmp(1236).t.SpxcUR);
  }
  obj2[3] = str;
  obj2[4] = tmpResult.isMediaScanPending({ type: ContentHarmTypeChannel /* ContentHarmTypeChannel */.ObscuredMediaTypes.Attachment, media: obj }, enabledContentHarmTypeFlags);
  shouldAgeVerify = tmp5;
  if (mediaObscuredReasonFromBitmask.length > 0) {
    shouldAgeVerify = shouldAgeVerify.shouldAgeVerify;
  }
  obj2[5] = shouldAgeVerify;
  obj2[6] = isVerifiedTeenResult;
  obj2[7] = mediaObscuredReasonFromBitmask.length > 0;
  return obj2;
};
export const getUnfurledMediaItemObscurityProps = function getUnfurledMediaItemObscurityProps(arg0) {
  let enabledContentHarmTypeFlags;
  let isAuthorBot;
  let isSpoilered;
  let mediaItem;
  let shouldAgeVerify;
  let shouldObscureSpoiler;
  let type;
  ({ type, mediaItem, isSpoilered, isAuthorBot, enabledContentHarmTypeFlags } = arg0);
  ({ shouldObscureSpoiler, shouldAgeVerify } = arg0);
  let obj = getEligibleHarmTypesConfigsForContext /* getEligibleHarmTypesConfigsForContext */;
  obj = { type: ContentHarmTypeChannel /* ContentHarmTypeChannel */.ObscuredMediaTypes.GenericMedia, media: mediaItem };
  let isMediaScanPendingResult = !isAuthorBot;
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj, enabledContentHarmTypeFlags);
  if (!isAuthorBot) {
    let tmpResult = tmp(5818);
    obj = { type: null, media: null };
    obj[0] = tmp(5823).ObscuredMediaTypes.GenericMedia;
    obj[1] = mediaItem;
    isMediaScanPendingResult = tmpResult.isMediaScanPending(obj, enabledContentHarmTypeFlags);
  }
  if (isSpoilered) {
    isSpoilered = shouldObscureSpoiler;
  }
  let isVerifiedTeenResult = tmp4;
  if (mediaObscuredReasonFromBitmask.length > 0) {
    tmpResult = tmp(4500);
    isVerifiedTeenResult = tmpResult.isVerifiedTeen();
  }
  const obj1 = { isSpoiler: isSpoilered, spoilerDescription: null, isObscured: null, obscureDescription: null, obscureAwaitingScan: null, verifyAge: null, obscureHideControls: null, obscureIsOpaque: null };
  if (!isSpoilered) {
    obj1[1] = null;
    obj1[2] = tmp4;
    let stringResult = null;
    if (tmp4) {
      const intl4 = tmp(1236).intl;
      stringResult = intl4.string(tmp(1236).t.SpxcUR);
    }
    obj1[3] = stringResult;
    obj1[4] = isMediaScanPendingResult;
    let tmp9 = tmp4;
    if (tmp4) {
      tmp9 = shouldAgeVerify;
    }
    obj1[5] = tmp9;
    obj1[6] = isVerifiedTeenResult;
    obj1[7] = tmp4;
    return obj1;
  } else if ("image" === type) {
    const intl3 = tmp(1236).intl;
    let stringResult1 = intl3.string(tmp(1236).t.sb2W2J);
  } else {
    if ("video" === type) {
      const intl2 = tmp(1236).intl;
      stringResult1 = intl2.string(tmp(1236).t.ehBaMc);
    } else if ("file" !== type) {
      if ("generic" === type) {
        const intl5 = tmp(1236).intl;
        stringResult1 = intl5.string(tmp(1236).t.G71b77);
      }
    }
    const intl = tmp(1236).intl;
    stringResult1 = intl.string(tmp(1236).t["3Gc2XP"]);
  }
};
export function getAttachmentObscurityDefaults() {
  return { isSpoiler: false, spoiler: "" };
}
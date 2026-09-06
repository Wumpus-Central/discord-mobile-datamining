// === Module 8125: ExplicitMediaUtils ===

// Module 8125 (ExplicitMediaUtils)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import FlagUtils from "FlagUtils" /* 1384 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 4773 */;
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 7292 */;
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels" /* 7297 */;
import size from "module_2" /* 2 */;

const MessageAttachmentFlags = Constants.MessageAttachmentFlags;
const result = size.fileFinishedImporting("modules/messages/native/renderer/ExplicitMediaUtils.tsx");

export const getAttachmentObscurityProps = function getAttachmentObscurityProps(shouldAgeVerify) {
  ({ attachment, shouldObscureSpoiler, enabledContentHarmTypeFlags } = shouldAgeVerify);
  let obj = FlagUtils;
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
  obj.flags = num3;
  let tmpResult = ObscuredMediaUtils;
  obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: obj };
  const mediaObscuredReasonFromBitmask = tmpResult.getMediaObscuredReasonFromBitmask(obj, enabledContentHarmTypeFlags);
  tmpResult = ObscuredMediaUtils;
  let isVerifiedTeenResult = tmp5;
  const obj1 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: obj };
  if (mediaObscuredReasonFromBitmask.length > 0) {
    isVerifiedTeenResult = AgeVerificationUtils.isVerifiedTeen();
    const tmpResult1 = AgeVerificationUtils;
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
      const intl = util.intl;
      str2 = intl.string(util.t["F+x38C"]).toUpperCase();
      const str3 = intl.string(util.t["F+x38C"]);
    }
  }
  obj2.spoiler = str2;
  obj2.obscure = mediaObscuredReasonFromBitmask.length > 0;
  if (mediaObscuredReasonFromBitmask.length > 0) {
    const intl2 = util.intl;
    str = intl2.string(util.t.SpxcUR);
  }
  obj2.obscureDescription = str;
  obj2.obscureAwaitingScan = tmpResult.isMediaScanPending({ type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: obj }, enabledContentHarmTypeFlags);
  shouldAgeVerify = tmp5;
  if (mediaObscuredReasonFromBitmask.length > 0) {
    shouldAgeVerify = shouldAgeVerify.shouldAgeVerify;
  }
  obj2.verifyAge = shouldAgeVerify;
  obj2.obscureHideControls = isVerifiedTeenResult;
  obj2.obscureIsOpaque = mediaObscuredReasonFromBitmask.length > 0;
  return obj2;
};
export const getUnfurledMediaItemObscurityProps = function getUnfurledMediaItemObscurityProps(arg0) {
  ({ type, mediaItem, isSpoilered, isAuthorBot, enabledContentHarmTypeFlags } = arg0);
  ({ shouldObscureSpoiler, shouldAgeVerify } = arg0);
  let obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media: mediaItem };
  let isMediaScanPendingResult = !isAuthorBot;
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj, enabledContentHarmTypeFlags);
  if (!isAuthorBot) {
    let tmpResult = ObscuredMediaUtils;
    obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media: mediaItem };
    isMediaScanPendingResult = tmpResult.isMediaScanPending(obj, enabledContentHarmTypeFlags);
  }
  if (isSpoilered) {
    isSpoilered = shouldObscureSpoiler;
  }
  let isVerifiedTeenResult = tmp4;
  if (mediaObscuredReasonFromBitmask.length > 0) {
    tmpResult = AgeVerificationUtils;
    isVerifiedTeenResult = tmpResult.isVerifiedTeen();
  }
  const obj1 = { isSpoiler: isSpoilered, spoilerDescription: null, isObscured: null, obscureDescription: null, obscureAwaitingScan: null, verifyAge: null, obscureHideControls: null, obscureIsOpaque: null };
  if (!isSpoilered) {
    obj1.spoilerDescription = null;
    obj1.isObscured = tmp4;
    let stringResult = null;
    if (tmp4) {
      const intl4 = util.intl;
      stringResult = intl4.string(util.t.SpxcUR);
    }
    obj1.obscureDescription = stringResult;
    obj1.obscureAwaitingScan = isMediaScanPendingResult;
    let tmp9 = tmp4;
    if (tmp4) {
      tmp9 = shouldAgeVerify;
    }
    obj1.verifyAge = tmp9;
    obj1.obscureHideControls = isVerifiedTeenResult;
    obj1.obscureIsOpaque = tmp4;
    return obj1;
  } else if ("image" === type) {
    const intl3 = util.intl;
    let stringResult1 = intl3.string(util.t.sb2W2J);
  } else {
    if ("video" === type) {
      const intl2 = util.intl;
      stringResult1 = intl2.string(util.t.ehBaMc);
    } else if ("file" !== type) {
      if ("generic" === type) {
        const intl5 = util.intl;
        stringResult1 = intl5.string(util.t.G71b77);
      }
    }
    const intl = util.intl;
    stringResult1 = intl.string(util.t["3Gc2XP"]);
  }
};
export function getAttachmentObscurityDefaults() {
  return { isSpoiler: false, spoiler: "" };
}
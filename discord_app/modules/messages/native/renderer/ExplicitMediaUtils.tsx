// === Module 7819: ExplicitMediaUtils ===

// Module 7819 (ExplicitMediaUtils)
import Constants from "Constants" /* 1085 */;
import intl6 from "intl" /* 1126 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5108 */;
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 6805 */;
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels" /* 6810 */;
import size from "module_2" /* 2 */;

const MessageAttachmentFlags = Constants.MessageAttachmentFlags;
const result = size.fileFinishedImporting("modules/messages/native/renderer/ExplicitMediaUtils.tsx");

export const getAttachmentObscurityProps = function getAttachmentObscurityProps(shouldAgeVerify) {
  let attachment;
  let enabledContentHarmTypeFlags;
  let num2;
  let num3;
  let shouldObscureSpoiler;
  let str;
  let str2;
  ({ attachment, shouldObscureSpoiler, enabledContentHarmTypeFlags } = shouldAgeVerify);
  shouldAgeVerify = shouldAgeVerify.shouldAgeVerify;
  let num = attachment.flags;
  const hasFlag = FlagUtils.hasFlag;
  FlagUtils;
  if (num == null) {
    num = 0;
  }
  const hasFlagResult = hasFlag(num, MessageAttachmentFlags.IS_SPOILER);
  if (undefined !== attachment.content_scan_version) {
    num2 = attachment.content_scan_version;
  } else if (undefined !== attachment.contentScanVersion) {
    num2 = attachment.contentScanVersion;
  }
  if (num2 == null) {
    num2 = 0;
  }
  const obj = { contentScanVersion: num2, flags: num3 };
  num3 = attachment.flags;
  if (num3 == null) {
    num3 = 0;
  }
  const tmpResult = ObscuredMediaUtils;
  const obj2 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: obj };
  const mediaObscuredReasonFromBitmask = tmpResult.getMediaObscuredReasonFromBitmask(obj2, enabledContentHarmTypeFlags);
  let isVerifiedTeenResult = tmp6;
  const tmpResult3 = ObscuredMediaUtils;
  const obj3 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: obj };
  const isMediaScanPendingResult = tmpResult3.isMediaScanPending(obj3, enabledContentHarmTypeFlags);
  if (mediaObscuredReasonFromBitmask.length > 0) {
    const tmpResult4 = AgeVerificationUtils;
    isVerifiedTeenResult = tmpResult4.isVerifiedTeen();
  }
  const obj4 = { isSpoiler: shouldObscureSpoiler && hasFlagResult, spoiler: str2, obscure: mediaObscuredReasonFromBitmask.length > 0, obscureDescription: str, obscureAwaitingScan: isMediaScanPendingResult, verifyAge: mediaObscuredReasonFromBitmask.length > 0 && shouldAgeVerify, obscureHideControls: isVerifiedTeenResult, obscureIsOpaque: mediaObscuredReasonFromBitmask.length > 0 };
  str = "";
  str2 = "";
  if (shouldObscureSpoiler) {
    str2 = str;
    if (hasFlagResult) {
      const intl = intl6.intl;
      const str3 = intl.string(intl6.t["F+x38C"]);
      str2 = str3.toUpperCase();
    }
  }
  if (mediaObscuredReasonFromBitmask.length > 0) {
    const intl2 = intl6.intl;
    str = intl2.string(intl6.t.SpxcUR);
  }
  return obj4;
};
export const getUnfurledMediaItemObscurityProps = function getUnfurledMediaItemObscurityProps(arg0) {
  let enabledContentHarmTypeFlags;
  let isAuthorBot;
  let isSpoilered;
  let mediaItem;
  let shouldAgeVerify;
  let shouldObscureSpoiler;
  let stringResult1;
  let tmp7;
  let type;
  ({ type, mediaItem, isSpoilered, isAuthorBot, enabledContentHarmTypeFlags } = arg0);
  ({ shouldObscureSpoiler, shouldAgeVerify } = arg0);
  let isMediaScanPendingResult = !isAuthorBot;
  const obj = ObscuredMediaUtils;
  const obj2 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media: mediaItem };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj2, enabledContentHarmTypeFlags);
  if (!isAuthorBot) {
    const obj3 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media: mediaItem };
    const isMediaScanPending = ObscuredMediaUtils.isMediaScanPending;
    ObscuredMediaUtils;
    isMediaScanPendingResult = isMediaScanPending(obj3, enabledContentHarmTypeFlags);
  }
  if (isSpoilered) {
    isSpoilered = shouldObscureSpoiler;
  }
  let isVerifiedTeenResult = tmp5;
  if (isVerifiedTeenResult) {
    const tmpResult2 = AgeVerificationUtils;
    isVerifiedTeenResult = tmpResult2.isVerifiedTeen();
  }
  const obj4 = { isSpoiler: isSpoilered, spoilerDescription: tmp7, isObscured: mediaObscuredReasonFromBitmask.length > 0, obscureDescription: stringResult1, obscureAwaitingScan: isMediaScanPendingResult, verifyAge: mediaObscuredReasonFromBitmask.length > 0 && shouldAgeVerify, obscureHideControls: isVerifiedTeenResult, obscureIsOpaque: mediaObscuredReasonFromBitmask.length > 0 };
  tmp7 = null;
  if (isSpoilered) {
    let stringResult;
    if ("image" === type) {
      const intl3 = intl6.intl;
      stringResult = intl3.string(intl6.t.sb2W2J);
    } else if ("video" === type) {
      const intl2 = intl6.intl;
      stringResult = intl2.string(intl6.t.ehBaMc);
    } else if ("file" === type) {
      const intl = intl6.intl;
      stringResult = intl.string(intl6.t["3Gc2XP"]);
    } else if ("generic" === type) {
      const intl5 = intl6.intl;
      stringResult = intl5.string(intl6.t.G71b77);
    }
    tmp7 = stringResult;
  }
  stringResult1 = null;
  if (mediaObscuredReasonFromBitmask.length > 0) {
    const intl4 = intl6.intl;
    stringResult1 = intl4.string(intl6.t.SpxcUR);
  }
  return obj4;
};
export function getAttachmentObscurityDefaults() {
  return { isSpoiler: false, spoiler: "" };
}
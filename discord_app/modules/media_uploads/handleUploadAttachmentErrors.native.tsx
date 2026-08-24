// === Module 8506: handleUploadMessageAttachmentsErrors ===

// Module 8506 (handleUploadMessageAttachmentsErrors)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import setDefault from "set" /* 4832 */;
import getUploadFileSizeSum from "getUploadFileSizeSum" /* 4839 */;
import KESTREL_GA_UPLOAD_LIMIT_MB from "KESTREL_GA_UPLOAD_LIMIT_MB" /* 4881 */;
import showUploadFileSizeErrorDefault from "showUploadFileSizeError" /* 8507 */;
import getAttachmentUploadAbortAlertContent from "getAttachmentUploadAbortAlertContent" /* 12791 */;
import ME from "ME" /* 676 */;

({ AbortCodes: c3, MAX_UPLOAD_COUNT: c4 } = ME);
const result = set.fileFinishedImporting("modules/media_uploads/handleUploadAttachmentErrors.native.tsx");

export const handleUploadMessageAttachmentsErrors = function handleUploadMessageAttachmentsErrors(arg0) {
  ({ guildId, code, reason } = arg0);
  if (undefined === code) {
    return false;
  } else if (code === constants.ENTITY_TOO_LARGE) {
    const kestrelConfig = KESTREL_GA_UPLOAD_LIMIT_MB.getKestrelConfig({ location: "native.handleUploadMessageAttachmentsErrors" });
    const obj10 = KESTREL_GA_UPLOAD_LIMIT_MB;
    const maxFileSizeResult = getUploadFileSizeSum.maxFileSize(guildId);
    let obj = { file: null, maxSize: null, baseMaxSize: null, guildId: null, analyticsLocations: null, errorReason: null };
    obj[0] = tmp;
    const obj11 = getUploadFileSizeSum;
    const tmp27 = showUploadFileSizeErrorDefault;
    obj[1] = KESTREL_GA_UPLOAD_LIMIT_MB.getEffectiveKestrelLimit(kestrelConfig, maxFileSizeResult);
    obj[2] = maxFileSizeResult;
    obj[3] = guildId;
    obj[4] = tmp2;
    let type;
    if (reason != null) {
      type = reason.type;
    }
    obj[5] = type;
    tmp27(obj);
    return true;
  } else if (code === tmp31.TOO_MANY_ATTACHMENTS) {
    obj = { title: null, body: null };
    const intl5 = getSystemLocale.intl;
    obj[0] = intl5.string(getSystemLocale.t.wOr6hB);
    const intl6 = getSystemLocale.intl;
    obj1 = { limit: null };
    obj1[0] = closure_4;
    obj[1] = intl6.formatToPlainString(getSystemLocale.t["qqyp/e"], obj1);
    setDefault.show(obj);
    return true;
  } else if (code === tmp31.ENTITY_EMPTY) {
    let obj2 = { title: null, body: null };
    const intl3 = getSystemLocale.intl;
    obj2[0] = intl3.string(getSystemLocale.t.B3vFdU);
    const intl4 = getSystemLocale.intl;
    obj2[1] = intl4.string(getSystemLocale.t["9ZpT2C"]);
    setDefault.show(obj2);
    return true;
  } else if (code === tmp31.INVALID_FILE_ASSET) {
    obj2 = setDefault;
    const obj3 = { title: null, body: null };
    const intl = getSystemLocale.intl;
    obj3[0] = intl.string(getSystemLocale.t.B3vFdU);
    const intl2 = getSystemLocale.intl;
    obj3[1] = intl2.string(getSystemLocale.t.zMEjJg);
    obj2.show(obj3);
    return true;
  } else {
    obj = getAttachmentUploadAbortAlertContent;
    const attachmentUploadAbortAlertContent = obj.getAttachmentUploadAbortAlertContent(code);
    let flag = null != attachmentUploadAbortAlertContent;
    if (flag) {
      obj1 = setDefault;
      obj1.show(attachmentUploadAbortAlertContent);
      flag = true;
    }
    return flag;
  }
};
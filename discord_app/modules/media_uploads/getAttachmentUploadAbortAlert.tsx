// === Module 9393: getAttachmentUploadAbortAlert ===

// Module 9393 (getAttachmentUploadAbortAlert)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import UploadUtils from "UploadUtils" /* 5129 */;
import size from "module_2" /* 2 */;

const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("modules/media_uploads/getAttachmentUploadAbortAlert.tsx");

export const getAttachmentUploadAbortAlertContent = function getAttachmentUploadAbortAlertContent(code) {
  const intl = util.intl;
  const stringResult = intl.string(util.t.B3vFdU);
  if (AbortCodes.TOTAL_ATTACHMENT_SIZE_TOO_LARGE === code) {
    let obj = { title: stringResult, body: null };
    const intl4 = util.intl;
    obj = { maxSizeMb: UploadUtils.MAX_TOTAL_ATTACHMENT_SIZE_MB };
    obj.body = intl4.formatToPlainString(util.t.DYFPg2, obj);
    return obj;
  } else if (AbortCodes.CLOUD_UPLOAD_NOT_FOUND === code) {
    const obj1 = { title: stringResult, body: null };
    const intl3 = util.intl;
    obj1.body = intl3.string(util.t.bQldfH);
    return obj1;
  } else if (AbortCodes.INVALID_PERMISSIONS === code) {
    obj = { title: stringResult, body: null };
    const intl2 = util.intl;
    obj.body = intl2.string(util.t.zl4Weq);
    return obj;
  } else {
    return null;
  }
};
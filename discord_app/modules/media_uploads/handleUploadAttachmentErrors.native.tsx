// === Module 9423: handleUploadAttachmentErrors ===

// Module 9423 (handleUploadAttachmentErrors)
import util from "util" /* 1115 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5108 */;
import FileUtils from "FileUtils" /* 5350 */;
import UploadLimits from "UploadLimits" /* 5378 */;
import showUploadFileSizeErrorDefault from "showUploadFileSizeError" /* 9424 */;
import getAttachmentUploadAbortAlert from "getAttachmentUploadAbortAlert" /* 9507 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ AbortCodes: c3, MAX_UPLOAD_COUNT: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/media_uploads/handleUploadAttachmentErrors.native.tsx");

export const handleUploadMessageAttachmentsErrors = function handleUploadMessageAttachmentsErrors(arg0) {
  ({ guildId, code, reason } = arg0);
  if (undefined === code) {
    return false;
  } else if (code === constants.ENTITY_TOO_LARGE) {
    const maxFileSizeResult = FileUtils.maxFileSize(guildId);
    const obj4 = { file: tmp, maxSize: null, baseMaxSize: null, guildId: null, analyticsLocations: null, errorReason: null, appEntryKey: null };
    const tmp27 = showUploadFileSizeErrorDefault;
    obj4.maxSize = UploadLimits.getEffectiveUploadLimit(maxFileSizeResult);
    obj4.baseMaxSize = maxFileSizeResult;
    obj4.guildId = guildId;
    obj4.analyticsLocations = tmp2;
    let type;
    if (reason != null) {
      type = reason.type;
    }
    obj4.errorReason = type;
    obj4.appEntryKey = tmp3;
    tmp27(obj4);
    return true;
  } else if (code === constants.TOO_MANY_ATTACHMENTS) {
    const obj6 = { title: null, body: null };
    const intl5 = util.intl;
    obj6.title = intl5.string(util.t.wOr6hB);
    const intl6 = util.intl;
    const obj8 = { limit };
    obj6.body = intl6.formatToPlainString(util.t["qqyp/e"], obj8);
    AlertActionCreatorsDefault.show(obj6);
    return true;
  } else if (code === constants.ENTITY_EMPTY) {
    const obj9 = { title: null, body: null };
    const intl3 = util.intl;
    obj9.title = intl3.string(util.t.B3vFdU);
    const intl4 = util.intl;
    obj9.body = intl4.string(util.t["9ZpT2C"]);
    AlertActionCreatorsDefault.show(obj9);
    return true;
  } else if (code === constants.INVALID_FILE_ASSET) {
    const obj11 = { title: null, body: null };
    const intl = util.intl;
    obj11.title = intl.string(util.t.B3vFdU);
    const intl2 = util.intl;
    obj11.body = intl2.string(util.t.zMEjJg);
    AlertActionCreatorsDefault.show(obj11);
    return true;
  } else {
    const attachmentUploadAbortAlertContent = getAttachmentUploadAbortAlert.getAttachmentUploadAbortAlertContent(code);
    let flag = null != attachmentUploadAbortAlertContent;
    if (flag) {
      AlertActionCreatorsDefault.show(attachmentUploadAbortAlertContent);
      flag = true;
    }
    return flag;
  }
};
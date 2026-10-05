// === Module 8814: handleUploadAttachmentErrors ===

// Module 8814 (handleUploadAttachmentErrors)
import intl7 from "intl" /* 1126 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5707 */;
import FileUtils from "FileUtils" /* 7270 */;
import UploadLimits from "UploadLimits" /* 7295 */;
import showUploadFileSizeErrorDefault from "showUploadFileSizeError" /* 8815 */;
import getAttachmentUploadAbortAlert from "getAttachmentUploadAbortAlert" /* 8915 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ AbortCodes: c3, MAX_UPLOAD_COUNT: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/media_uploads/handleUploadAttachmentErrors.native.tsx");

export const handleUploadMessageAttachmentsErrors = function handleUploadMessageAttachmentsErrors(arg0) {
  let code;
  let guildId;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let obj5;
  let obj9;
  let reason;
  let type;
  ({ guildId, code, reason } = arg0);
  if (undefined === code) {
    return false;
  } else if (code === constants.ENTITY_TOO_LARGE) {
    const obj7 = FileUtils;
    const maxFileSizeResult = obj7.maxFileSize(guildId);
    const obj3 = { file: tmp, maxSize: obj9.getEffectiveUploadLimit(maxFileSizeResult), baseMaxSize: maxFileSizeResult, guildId, analyticsLocations: tmp2, errorReason: type, appEntryKey: tmp3 };
    const tmp30 = showUploadFileSizeErrorDefault;
    type = undefined;
    obj9 = UploadLimits;
    if (reason != null) {
      type = reason.type;
    }
    tmp30(obj3);
    return true;
  } else if (code === constants.TOO_MANY_ATTACHMENTS) {
    const obj4 = { title: intl5.string(intl7.t.wOr6hB), body: intl6.formatToPlainString(intl7.t["qqyp/e"], obj5) };
    const show3 = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl5 = intl7.intl;
    intl6 = intl7.intl;
    obj5 = { limit };
    show3(obj4);
    return true;
  } else if (code === constants.ENTITY_EMPTY) {
    const obj6 = { title: intl3.string(intl7.t.B3vFdU), body: intl4.string(intl7.t["9ZpT2C"]) };
    const show2 = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl3 = intl7.intl;
    intl4 = intl7.intl;
    show2(obj6);
    return true;
  } else if (code === constants.INVALID_FILE_ASSET) {
    const obj8 = { title: intl.string(intl7.t.B3vFdU), body: intl2.string(intl7.t.zMEjJg) };
    const show = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl = intl7.intl;
    intl2 = intl7.intl;
    show(obj8);
    return true;
  } else {
    const obj = getAttachmentUploadAbortAlert;
    const attachmentUploadAbortAlertContent = obj.getAttachmentUploadAbortAlertContent(code);
    let flag = null != attachmentUploadAbortAlertContent;
    if (flag) {
      const obj2 = AlertActionCreatorsDefault;
      obj2.show(attachmentUploadAbortAlertContent);
      flag = true;
    }
    return flag;
  }
};
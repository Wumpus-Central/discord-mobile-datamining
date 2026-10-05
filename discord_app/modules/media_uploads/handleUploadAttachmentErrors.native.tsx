// discord_app/modules/media_uploads/handleUploadAttachmentErrors.native.tsx
import intl7 from "../../intl/index.native.tsx";
import AlertActionCreatorsDefault from "../../actions/AlertActionCreators.tsx";
import FileUtils from "../../utils/FileUtils.tsx";
import UploadLimits from "UploadLimits.tsx";
import showUploadFileSizeErrorDefault from "native/showUploadFileSizeError.tsx";
import getAttachmentUploadAbortAlert from "getAttachmentUploadAbortAlert.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
    const obj3 = {
      file: tmp,
      maxSize: obj9.getEffectiveUploadLimit(maxFileSizeResult),
      baseMaxSize: maxFileSizeResult,
      guildId,
      analyticsLocations: tmp2,
      errorReason: type,
      appEntryKey: tmp3,
    };
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

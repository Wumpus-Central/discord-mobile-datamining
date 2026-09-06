// discord_app/modules/media_uploads/handleUploadAttachmentErrors.native.tsx
import util from "../../intl/index.native.tsx";
import AlertActionCreatorsDefault from "../../actions/AlertActionCreators.tsx";
import FileUtils from "../../utils/FileUtils.tsx";
import KestrelExperiment from "experiments/KestrelExperiment.tsx";
import showUploadFileSizeErrorDefault from "native/showUploadFileSizeError.tsx";
import getAttachmentUploadAbortAlert from "getAttachmentUploadAbortAlert.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

({ AbortCodes: c3, MAX_UPLOAD_COUNT: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/media_uploads/handleUploadAttachmentErrors.native.tsx");

export const handleUploadMessageAttachmentsErrors = function handleUploadMessageAttachmentsErrors(arg0) {
  ({ guildId, code, reason } = arg0);
  if (undefined === code) {
    return false;
  } else if (code === constants.ENTITY_TOO_LARGE) {
    const kestrelConfig = KestrelExperiment.getKestrelConfig({
      location: "native.handleUploadMessageAttachmentsErrors",
    });
    const maxFileSizeResult = FileUtils.maxFileSize(guildId);
    let obj = {
      file: tmp,
      maxSize: null,
      baseMaxSize: null,
      guildId: null,
      analyticsLocations: null,
      errorReason: null,
    };
    const tmp27 = showUploadFileSizeErrorDefault;
    obj.maxSize = KestrelExperiment.getEffectiveKestrelLimit(kestrelConfig, maxFileSizeResult);
    obj.baseMaxSize = maxFileSizeResult;
    obj.guildId = guildId;
    obj.analyticsLocations = tmp2;
    let type;
    if (reason != null) {
      type = reason.type;
    }
    obj.errorReason = type;
    tmp27(obj);
    return true;
  } else if (code === constants.TOO_MANY_ATTACHMENTS) {
    obj = { title: null, body: null };
    const intl5 = util.intl;
    obj.title = intl5.string(util.t.wOr6hB);
    const intl6 = util.intl;
    let obj1 = { limit };
    obj.body = intl6.formatToPlainString(util.t["qqyp/e"], obj1);
    AlertActionCreatorsDefault.show(obj);
    return true;
  } else if (code === constants.ENTITY_EMPTY) {
    let obj2 = { title: null, body: null };
    const intl3 = util.intl;
    obj2.title = intl3.string(util.t.B3vFdU);
    const intl4 = util.intl;
    obj2.body = intl4.string(util.t["9ZpT2C"]);
    AlertActionCreatorsDefault.show(obj2);
    return true;
  } else if (code === constants.INVALID_FILE_ASSET) {
    obj2 = AlertActionCreatorsDefault;
    const obj3 = { title: null, body: null };
    const intl = util.intl;
    obj3.title = intl.string(util.t.B3vFdU);
    const intl2 = util.intl;
    obj3.body = intl2.string(util.t.zMEjJg);
    obj2.show(obj3);
    return true;
  } else {
    obj = getAttachmentUploadAbortAlert;
    const attachmentUploadAbortAlertContent = obj.getAttachmentUploadAbortAlertContent(code);
    let flag = null != attachmentUploadAbortAlertContent;
    if (flag) {
      obj1 = AlertActionCreatorsDefault;
      obj1.show(attachmentUploadAbortAlertContent);
      flag = true;
    }
    return flag;
  }
};

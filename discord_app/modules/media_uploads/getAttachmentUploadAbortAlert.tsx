// discord_app/modules/media_uploads/getAttachmentUploadAbortAlert.tsx
import Constants from "../../Constants.tsx";
import intl5 from "../../intl/index.native.tsx";
import UploadUtils from "../../utils/UploadUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("modules/media_uploads/getAttachmentUploadAbortAlert.tsx");

export const getAttachmentUploadAbortAlertContent = function getAttachmentUploadAbortAlertContent(code) {
  let DYFPg2;
  let formatToPlainString;
  let intl2;
  let intl3;
  let obj3;
  const intl = intl5.intl;
  const stringResult = intl.string(intl5.t.B3vFdU);
  if (AbortCodes.TOTAL_ATTACHMENT_SIZE_TOO_LARGE === code) {
    const obj2 = { title: stringResult, body: formatToPlainString(DYFPg2, obj3) };
    const intl4 = intl5.intl;
    formatToPlainString = intl4.formatToPlainString;
    obj3 = { maxSizeMb: UploadUtils.MAX_TOTAL_ATTACHMENT_SIZE_MB };
    DYFPg2 = intl5.t.DYFPg2;
    return obj2;
  } else if (AbortCodes.CLOUD_UPLOAD_NOT_FOUND === code) {
    const obj4 = { title: stringResult, body: intl3.string(intl5.t.bQldfH) };
    intl3 = intl5.intl;
    return obj4;
  } else if (AbortCodes.INVALID_PERMISSIONS === code) {
    const obj = { title: stringResult, body: intl2.string(intl5.t.zl4Weq) };
    intl2 = intl5.intl;
    return obj;
  } else {
    return null;
  }
};

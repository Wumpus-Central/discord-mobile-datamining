// discord_app/modules/media_uploads/getAttachmentUploadAbortAlert.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ME from "../../Constants.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import items from "../../utils/UploadUtils.tsx";

const AbortCodes = ME.AbortCodes;
const result = obj132.fileFinishedImporting("modules/media_uploads/getAttachmentUploadAbortAlert.tsx");

export const getAttachmentUploadAbortAlertContent = function getAttachmentUploadAbortAlertContent(code) {
  const intl = getSystemLocale.intl;
  const stringResult = intl.string(getSystemLocale.t.B3vFdU);
  if (AbortCodes.TOTAL_ATTACHMENT_SIZE_TOO_LARGE === code) {
    let obj = { title: null, body: null };
    obj[0] = stringResult;
    const intl4 = getSystemLocale.intl;
    obj = { maxSizeMb: null };
    obj[0] = items.MAX_TOTAL_ATTACHMENT_SIZE_MB;
    obj[1] = intl4.formatToPlainString(getSystemLocale.t.DYFPg2, obj);
    return obj;
  } else if (AbortCodes.CLOUD_UPLOAD_NOT_FOUND === code) {
    obj1 = { title: null, body: null };
    obj1[0] = stringResult;
    const intl3 = getSystemLocale.intl;
    obj1[1] = intl3.string(getSystemLocale.t.bQldfH);
    return obj1;
  } else if (AbortCodes.INVALID_PERMISSIONS === code) {
    obj = { title: null, body: null };
    obj[0] = stringResult;
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t.zl4Weq);
    return obj;
  } else {
    return null;
  }
};
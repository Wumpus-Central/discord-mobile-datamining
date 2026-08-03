import { AbortCodes } from "ME";

const result = require("items").fileFinishedImporting("modules/media_uploads/getAttachmentUploadAbortAlert.tsx");

export const getAttachmentUploadAbortAlertContent = function getAttachmentUploadAbortAlertContent(code) {
  const intl = require(1236) /* getSystemLocale */.intl;
  const stringResult = intl.string(require(1236) /* getSystemLocale */.t.B3vFdU);
  if (AbortCodes.TOTAL_ATTACHMENT_SIZE_TOO_LARGE === code) {
    let obj = { title: null, body: null };
    obj[0] = stringResult;
    const intl4 = tmp(1236).intl;
    obj = { maxSizeMb: null };
    obj[0] = tmp(4727).MAX_TOTAL_ATTACHMENT_SIZE_MB;
    obj[1] = intl4.formatToPlainString(tmp(1236).t.DYFPg2, obj);
    return obj;
  } else if (tmp4.CLOUD_UPLOAD_NOT_FOUND === code) {
    const obj1 = { title: null, body: null };
    obj1[0] = stringResult;
    const intl3 = tmp(1236).intl;
    obj1[1] = intl3.string(tmp(1236).t.bQldfH);
    return obj1;
  } else if (tmp4.INVALID_PERMISSIONS === code) {
    obj = { title: null, body: null };
    obj[0] = stringResult;
    const intl2 = tmp(1236).intl;
    obj[1] = intl2.string(tmp(1236).t.zl4Weq);
    return obj;
  } else {
    return null;
  }
};
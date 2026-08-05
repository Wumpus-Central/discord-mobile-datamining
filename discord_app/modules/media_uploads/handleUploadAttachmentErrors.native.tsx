import { set } from "../../actions/AlertActionCreators.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { getUploadFileSizeSum } from "../../utils/FileUtils.tsx";
import { KESTREL_GA_UPLOAD_LIMIT_MB } from "experiments/KestrelExperiment.tsx";
import { getAttachmentUploadAbortAlertContent } from "getAttachmentUploadAbortAlert.tsx";
import { showUploadFileSizeError } from "native/showUploadFileSizeError.tsx";
// discord_app/modules/media_uploads/handleUploadAttachmentErrors.native.tsx
import ME from "ME";

let c3;
let c4;
({ AbortCodes: c3, MAX_UPLOAD_COUNT: c4 } = ME);
const result = require("getUploadFileSizeSum").fileFinishedImporting("modules/media_uploads/handleUploadAttachmentErrors.native.tsx");

export const handleUploadMessageAttachmentsErrors = function handleUploadMessageAttachmentsErrors(arg0) {
  let code;
  let guildId;
  let reason;
  ({ guildId, code, reason } = arg0);
  if (undefined === code) {
    return false;
  } else if (code === constants.ENTITY_TOO_LARGE) {
    const kestrelConfig = KESTREL_GA_UPLOAD_LIMIT_MB /* KESTREL_GA_UPLOAD_LIMIT_MB */.getKestrelConfig({ location: "native.handleUploadMessageAttachmentsErrors" });
    const obj10 = KESTREL_GA_UPLOAD_LIMIT_MB /* KESTREL_GA_UPLOAD_LIMIT_MB */;
    const maxFileSizeResult = getUploadFileSizeSum /* getUploadFileSizeSum */.maxFileSize(guildId);
    let obj = { file: null, maxSize: null, baseMaxSize: null, guildId: null, analyticsLocations: null, errorReason: null };
    obj[0] = tmp;
    const obj11 = getUploadFileSizeSum /* getUploadFileSizeSum */;
    const tmp27 = showUploadFileSizeError;
    obj[1] = KESTREL_GA_UPLOAD_LIMIT_MB /* KESTREL_GA_UPLOAD_LIMIT_MB */.getEffectiveKestrelLimit(kestrelConfig, maxFileSizeResult);
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
    const intl5 = getSystemLocale /* getSystemLocale */.intl;
    obj[0] = intl5.string(getSystemLocale /* getSystemLocale */.t.wOr6hB);
    const intl6 = getSystemLocale /* getSystemLocale */.intl;
    let obj1 = { limit: null };
    obj1[0] = closure_4;
    obj[1] = intl6.formatToPlainString(getSystemLocale /* getSystemLocale */.t["qqyp/e"], obj1);
    set.show(obj);
    return true;
  } else if (code === tmp31.ENTITY_EMPTY) {
    let obj2 = { title: null, body: null };
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    obj2[0] = intl3.string(getSystemLocale /* getSystemLocale */.t.B3vFdU);
    const intl4 = getSystemLocale /* getSystemLocale */.intl;
    obj2[1] = intl4.string(getSystemLocale /* getSystemLocale */.t["9ZpT2C"]);
    set.show(obj2);
    return true;
  } else if (code === tmp31.INVALID_FILE_ASSET) {
    obj2 = set;
    const obj3 = { title: null, body: null };
    const intl = getSystemLocale /* getSystemLocale */.intl;
    obj3[0] = intl.string(getSystemLocale /* getSystemLocale */.t.B3vFdU);
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    obj3[1] = intl2.string(getSystemLocale /* getSystemLocale */.t.zMEjJg);
    obj2.show(obj3);
    return true;
  } else {
    obj = getAttachmentUploadAbortAlertContent /* getAttachmentUploadAbortAlertContent */;
    const attachmentUploadAbortAlertContent = obj.getAttachmentUploadAbortAlertContent(code);
    let flag = null != attachmentUploadAbortAlertContent;
    if (flag) {
      obj1 = set;
      obj1.show(attachmentUploadAbortAlertContent);
      flag = true;
    }
    return flag;
  }
};
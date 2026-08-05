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
    const kestrelConfig = require("experiments/KestrelExperiment.tsx") /* KESTREL_GA_UPLOAD_LIMIT_MB */.getKestrelConfig({ location: "native.handleUploadMessageAttachmentsErrors" });
    const obj10 = require("experiments/KestrelExperiment.tsx") /* KESTREL_GA_UPLOAD_LIMIT_MB */;
    const maxFileSizeResult = require("../../utils/FileUtils.tsx") /* getUploadFileSizeSum */.maxFileSize(guildId);
    let obj = { file: null, maxSize: null, baseMaxSize: null, guildId: null, analyticsLocations: null, errorReason: null };
    obj[0] = tmp;
    const obj11 = require("../../utils/FileUtils.tsx") /* getUploadFileSizeSum */;
    const tmp27 = require("native/showUploadFileSizeError.tsx");
    obj[1] = require("experiments/KestrelExperiment.tsx") /* KESTREL_GA_UPLOAD_LIMIT_MB */.getEffectiveKestrelLimit(kestrelConfig, maxFileSizeResult);
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
    const intl5 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[0] = intl5.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.wOr6hB);
    const intl6 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    let obj1 = { limit: null };
    obj1[0] = closure_4;
    obj[1] = intl6.formatToPlainString(require("../../intl/index.native.tsx") /* getSystemLocale */.t["qqyp/e"], obj1);
    require("../../actions/AlertActionCreators.tsx").show(obj);
    return true;
  } else if (code === tmp31.ENTITY_EMPTY) {
    let obj2 = { title: null, body: null };
    const intl3 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj2[0] = intl3.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.B3vFdU);
    const intl4 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj2[1] = intl4.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["9ZpT2C"]);
    require("../../actions/AlertActionCreators.tsx").show(obj2);
    return true;
  } else if (code === tmp31.INVALID_FILE_ASSET) {
    obj2 = require("../../actions/AlertActionCreators.tsx");
    const obj3 = { title: null, body: null };
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj3[0] = intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.B3vFdU);
    const intl2 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj3[1] = intl2.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.zMEjJg);
    obj2.show(obj3);
    return true;
  } else {
    obj = require("getAttachmentUploadAbortAlert.tsx") /* getAttachmentUploadAbortAlertContent */;
    const attachmentUploadAbortAlertContent = obj.getAttachmentUploadAbortAlertContent(code);
    let flag = null != attachmentUploadAbortAlertContent;
    if (flag) {
      obj1 = require("../../actions/AlertActionCreators.tsx");
      obj1.show(attachmentUploadAbortAlertContent);
      flag = true;
    }
    return flag;
  }
};
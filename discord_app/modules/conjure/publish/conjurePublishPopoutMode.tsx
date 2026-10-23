// === Module 12249: conjurePublishPopoutMode ===

// Module 12249 (conjurePublishPopoutMode)
import ConjurePublishTypes from "ConjurePublishTypes" /* 10781 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishPopoutMode.tsx");

export const conjurePublishPopoutMode = function conjurePublishPopoutMode(status) {
  let str = "initial";
  if (null != status) {
    str = "initial";
    if (obj.isConjureLive(status.publishState)) {
      let str2 = "published";
      if ("live_outdated" === status.publishState) {
        str2 = "notPublished";
      }
      str = str2;
    }
    obj = ConjurePublishTypes;
  }
  return str;
};
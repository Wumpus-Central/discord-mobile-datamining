// === Module 12238: conjurePublishPopoutMode ===

// Module 12238 (conjurePublishPopoutMode)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishPopoutMode.tsx");

export const conjurePublishPopoutMode = function conjurePublishPopoutMode(status) {
  let str = "initial";
  if (null != status) {
    str = "initial";
    if ("unpublished" !== status.state) {
      let str3 = "notPublished";
      if ("up_to_date" === status.state) {
        str3 = "published";
      }
      str = str3;
    }
  }
  return str;
};
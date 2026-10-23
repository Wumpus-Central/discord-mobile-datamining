// discord_app/modules/conjure/publish/conjurePublishPopoutMode.tsx
import ConjurePublishTypes from "ConjurePublishTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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

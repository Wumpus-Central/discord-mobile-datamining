// discord_app/modules/icymi/ICYMIAttachmentUploadTarget.tsx
import set from "../../../_runtime/00002_set.js";
import items from "../../utils/UploadUtils.tsx";
import ME from "../../Constants.tsx";

({ Endpoints: obj1, MAX_ATTACHMENT_SIZE: c3, MAX_UPLOAD_COUNT: c4 } = ME);
const result = set.fileFinishedImporting("modules/icymi/ICYMIAttachmentUploadTarget.tsx");
class ICYMIAttachmentUploadTarget {
}
const prototype = ICYMIAttachmentUploadTarget.prototype;
prototype["getCreateAttachmentURL"] = function getCreateAttachmentURL() {
  return closure_2.GRAVITY_ATTACHMENTS;
};
prototype["getDeleteUploadURL"] = function getDeleteUploadURL(arg0) {
  return closure_2.MESSAGE_DELETE_UPLOAD(arg0);
};
prototype["getMaxFileSize"] = function getMaxFileSize() {
  return closure_3;
};
prototype["getMaxAttachmentsCount"] = function getMaxAttachmentsCount() {
  return closure_4;
};
prototype["getMaxTotalAttachmentSize"] = function getMaxTotalAttachmentSize() {
  return items.MAX_TOTAL_ATTACHMENT_SIZE;
};
Object.defineProperty(prototype, "shouldReactNativeCompressUploads", {
  get: function shouldReactNativeCompressUploads() {
    return true;
  },
  set: undefined
});

export default ICYMIAttachmentUploadTarget;
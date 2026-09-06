// === Module 5177: ICYMIAttachmentUploadTarget ===

// Module 5177 (ICYMIAttachmentUploadTarget)
import UploadUtils from "UploadUtils" /* 5129 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ Endpoints: c2, MAX_ATTACHMENT_SIZE: c3, MAX_UPLOAD_COUNT: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/icymi/ICYMIAttachmentUploadTarget.tsx");
class ICYMIAttachmentUploadTarget {
}
const prototype = ICYMIAttachmentUploadTarget.prototype;
prototype["getCreateAttachmentURL"] = function getCreateAttachmentURL() {
  return React2.GRAVITY_ATTACHMENTS;
};
prototype["getDeleteUploadURL"] = function getDeleteUploadURL(arg0) {
  return React2.MESSAGE_DELETE_UPLOAD(arg0);
};
prototype["getMaxFileSize"] = function getMaxFileSize() {
  return React3;
};
prototype["getMaxAttachmentsCount"] = function getMaxAttachmentsCount() {
  return React4;
};
prototype["getMaxTotalAttachmentSize"] = function getMaxTotalAttachmentSize() {
  return UploadUtils.getMaxTotalAttachmentSize({ location: "ICYMIAttachmentUploadTarget" });
};
Object.defineProperty(prototype, "shouldReactNativeCompressUploads", {
  get: function shouldReactNativeCompressUploads() {
    return true;
  },
  set: undefined
});

export default ICYMIAttachmentUploadTarget;
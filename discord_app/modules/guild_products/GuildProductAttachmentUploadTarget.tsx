// === Module 5071: getCreateAttachmentURL ===

// Module 5071 (getCreateAttachmentURL)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import GUILD_PRODUCT_EDIT_MODAL_KEY from "GUILD_PRODUCT_EDIT_MODAL_KEY" /* 5072 */;

({ MAX_ATTACHMENT_UPLOAD_COUNT: c0, MAX_ATTACHMENT_UPLOAD_FILESIZE_BYTES: closure_1, MAX_ATTACHMENT_UPLOAD_TOTAL_FILESIZE_BYTES: obj1 } = GUILD_PRODUCT_EDIT_MODAL_KEY);
const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("modules/guild_products/GuildProductAttachmentUploadTarget.tsx");
class GuildProductAttachmentUploadTarget {
}
const prototype = GuildProductAttachmentUploadTarget.prototype;
prototype["getCreateAttachmentURL"] = function getCreateAttachmentURL(arg0) {
  return Endpoints.GUILD_PRODUCT_CREATE_ATTACHMENT_UPLOAD(arg0);
};
prototype["getDeleteUploadURL"] = function getDeleteUploadURL(arg0) {
  return Endpoints.MESSAGE_DELETE_UPLOAD(arg0);
};
prototype["getMaxFileSize"] = function getMaxFileSize() {
  return closure_1;
};
prototype["getMaxAttachmentsCount"] = function getMaxAttachmentsCount() {
  return closure_0;
};
prototype["getMaxTotalAttachmentSize"] = function getMaxTotalAttachmentSize() {
  return closure_2;
};
Object.defineProperty(prototype, "shouldReactNativeCompressUploads", {
  get: function shouldReactNativeCompressUploads() {
    return false;
  },
  set: undefined
});

export default GuildProductAttachmentUploadTarget;
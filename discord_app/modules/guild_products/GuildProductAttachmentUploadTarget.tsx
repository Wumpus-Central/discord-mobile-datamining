// === Module 4830: getCreateAttachmentURL ===

// Module 4830 (getCreateAttachmentURL)
import GUILD_PRODUCT_EDIT_MODAL_KEY from "GUILD_PRODUCT_EDIT_MODAL_KEY";
import { Endpoints } from "ME";

let c0;
let closure_1;
let obj1;
({ MAX_ATTACHMENT_UPLOAD_COUNT: c0, MAX_ATTACHMENT_UPLOAD_FILESIZE_BYTES: closure_1, MAX_ATTACHMENT_UPLOAD_TOTAL_FILESIZE_BYTES: obj1 } = GUILD_PRODUCT_EDIT_MODAL_KEY);
const result = require("set").fileFinishedImporting("modules/guild_products/GuildProductAttachmentUploadTarget.tsx");
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
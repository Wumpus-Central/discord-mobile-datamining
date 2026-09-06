// discord_app/modules/guild_products/GuildProductAttachmentUploadTarget.tsx
import Constants from "../../Constants.tsx";
import GuildProductConstants from "GuildProductConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

({
  MAX_ATTACHMENT_UPLOAD_COUNT: closure_0,
  MAX_ATTACHMENT_UPLOAD_FILESIZE_BYTES: closure_1,
  MAX_ATTACHMENT_UPLOAD_TOTAL_FILESIZE_BYTES: c2,
} = GuildProductConstants);
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/guild_products/GuildProductAttachmentUploadTarget.tsx");
class GuildProductAttachmentUploadTarget {}
const prototype = GuildProductAttachmentUploadTarget.prototype;
prototype["getCreateAttachmentURL"] = function getCreateAttachmentURL(arg0) {
  return Endpoints.GUILD_PRODUCT_CREATE_ATTACHMENT_UPLOAD(arg0);
};
prototype["getDeleteUploadURL"] = function getDeleteUploadURL(arg0) {
  return Endpoints.MESSAGE_DELETE_UPLOAD(arg0);
};
prototype["getMaxFileSize"] = function getMaxFileSize() {
  return framebus;
};
prototype["getMaxAttachmentsCount"] = function getMaxAttachmentsCount() {
  return React;
};
prototype["getMaxTotalAttachmentSize"] = function getMaxTotalAttachmentSize() {
  return React2;
};
Object.defineProperty(prototype, "shouldReactNativeCompressUploads", {
  get: function shouldReactNativeCompressUploads() {
    return false;
  },
  set: undefined,
});

export default GuildProductAttachmentUploadTarget;

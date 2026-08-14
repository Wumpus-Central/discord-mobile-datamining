// discord_app/lib/uploader/UploadTargets.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import ME from "ME";
import { getCreateAttachmentURL } from "../../modules/guild_products/GuildProductAttachmentUploadTarget.tsx";
import { getCreateAttachmentURL } from "../../modules/icymi/ICYMIAttachmentUploadTarget.tsx";
import { items } from "../../utils/UploadUtils.tsx";

let c5;
let closure_6;
const require = arg1;
({ Endpoints: c5, MAX_UPLOAD_COUNT: closure_6 } = ME);
class MessageAttachmentUploadTarget {
}
const prototype = MessageAttachmentUploadTarget.prototype;
prototype["getCreateAttachmentURL"] = function getCreateAttachmentURL(arg0) {
  return closure_5.MESSAGE_CREATE_ATTACHMENT_UPLOAD(arg0);
};
prototype["getDeleteUploadURL"] = function getDeleteUploadURL(arg0) {
  return closure_5.MESSAGE_DELETE_UPLOAD(arg0);
};
prototype["getMaxFileSize"] = function getMaxFileSize(arg0) {
  basicChannel = basicChannel.getBasicChannel(arg0);
  let guild_id;
  if (basicChannel != null) {
    guild_id = basicChannel.guild_id;
  }
  return importAll(4919).maxFileSize(guild_id);
};
prototype["getMaxAttachmentsCount"] = function getMaxAttachmentsCount() {
  return closure_6;
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
const obj = { MESSAGE_ATTACHMENT: 0, [0]: "MESSAGE_ATTACHMENT", GUILD_PRODUCT_ATTACHMENT: 1, [1]: "GUILD_PRODUCT_ATTACHMENT", GRAVITY_ATTACHMENT: 2, [2]: "GRAVITY_ATTACHMENT" };
const result = require("getUploadFileSizeSum").fileFinishedImporting("lib/uploader/UploadTargets.tsx");

export const UploadTargets = obj;
export const getUploadTarget = function getUploadTarget(target) {
  if (obj.GUILD_PRODUCT_ATTACHMENT === target) {
    const tmp14 = new getCreateAttachmentURL();
    return tmp14;
  } else if (tmp.GRAVITY_ATTACHMENT === target) {
    const tmp8 = new getCreateAttachmentURL();
    return tmp8;
  } else {
    const MESSAGE_ATTACHMENT = tmp.MESSAGE_ATTACHMENT;
    if (typeof MessageAttachmentUploadTarget !== "function") {
      HermesBuiltin.throwTypeError();
    }
    return Object.create(MessageAttachmentUploadTarget.prototype);
  }
};
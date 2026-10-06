// === Module 7318: UploadTargets ===

// Module 7318 (UploadTargets)
import UploadUtils from "UploadUtils" /* 7256 */;
import FileUtilsAll from "FileUtils" /* 7283 */;
import UploadLimits from "UploadLimits" /* 7308 */;
import GuildProductAttachmentUploadTargetDefault from "GuildProductAttachmentUploadTarget" /* 7319 */;
import ICYMIAttachmentUploadTargetDefault from "ICYMIAttachmentUploadTarget" /* 7321 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
({ Endpoints: hasOwnProperty, MAX_UPLOAD_COUNT: metroRequire } = Constants);
class MessageAttachmentUploadTarget {
  getCreateAttachmentURL(arg0) {
    return hasOwnProperty.MESSAGE_CREATE_ATTACHMENT_UPLOAD(arg0);
  }
  getDeleteUploadURL(arg0) {
    return hasOwnProperty.MESSAGE_DELETE_UPLOAD(arg0);
  }
  getMaxFileSize(arg0) {
    const basicChannel = ChannelStore.getBasicChannel(arg0);
    const getEffectiveUploadLimit = UploadLimits.getEffectiveUploadLimit;
    UploadLimits;
    let guild_id;
    const maxFileSize = FileUtilsAll.maxFileSize;
    FileUtilsAll;
    if (basicChannel != null) {
      guild_id = basicChannel.guild_id;
    }
    return getEffectiveUploadLimit(maxFileSize(guild_id));
  }
  getMaxAttachmentsCount() {
    return metroRequire;
  }
  getMaxTotalAttachmentSize() {
    const obj = UploadUtils;
    return obj.getMaxTotalAttachmentSize({ location: "MessageAttachmentUploadTarget" });
  }
}
Object.defineProperty(MessageAttachmentUploadTarget.prototype, "shouldReactNativeCompressUploads", {
  get: function shouldReactNativeCompressUploads() {
    return true;
  },
  set: undefined
});
const UploadTargets = { MESSAGE_ATTACHMENT: 0, [0]: "MESSAGE_ATTACHMENT", GUILD_PRODUCT_ATTACHMENT: 1, [1]: "GUILD_PRODUCT_ATTACHMENT", GRAVITY_ATTACHMENT: 2, [2]: "GRAVITY_ATTACHMENT" };
const result = size.fileFinishedImporting("lib/uploader/UploadTargets.tsx");

export { UploadTargets };
export const getUploadTarget = function getUploadTarget(target) {
  if (obj.GUILD_PRODUCT_ATTACHMENT === target) {
    const self4 = this;
    const self5 = this;
    const tmp8 = new GuildProductAttachmentUploadTargetDefault();
    return tmp8;
  } else if (obj.GRAVITY_ATTACHMENT === target) {
    const self2 = this;
    const self3 = this;
    const tmp4 = new ICYMIAttachmentUploadTargetDefault();
    return tmp4;
  } else {
    const MESSAGE_ATTACHMENT = obj.MESSAGE_ATTACHMENT;
    const self = this;
    if (typeof MessageAttachmentUploadTarget === "function") {
      return Object.create(MessageAttachmentUploadTarget.prototype);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
};
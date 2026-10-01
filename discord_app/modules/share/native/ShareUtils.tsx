// === Module 13651: ShareUtils ===

// Module 13651 (ShareUtils)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4557 */;
import _modDef11032 from "module_11032" /* 11032 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_6 = async function _sendShareMessage() {
  ({ attachments: closure_130_0, channel: closure_130_1, comment: closure_130_2 } = closure_0);
  await "flex";
  const id = closure_130_1.id;
  closure_130_4 = closure_130_0.map((uri) => {
    const size = { uri: uri.uri, originalUri: uri.uri, mimeType: uri.mimeType, filename: uri.name, platform: closure_0(5626).UploadPlatform.REACT_NATIVE, width: uri.width, height: uri.height, preTranscodeSourceSize: uri.originalSize };
    const cloudUpload = new closure_0(5625).CloudUpload(size, guildId.id);
    return cloudUpload;
  });
  c1 = closure_130_2;
  if (closure_130_2 == null) {
    c1 = "";
  }
  closure_130_5 = closure_131_1(closure_131_2[9]).parse(closure_130_1, c1);
  if (closure_130_4.length > 0) {
    closure_131_1(closure_131_2[5]).clearAll(id, closure_131_4.ChannelMessage);
    closure_131_1(closure_131_2[5]);
  }
  const future = new closure_131_0(closure_131_2[10]).Future();
  closure_130_6 = future;
  await closure_131_1(closure_131_2[11]).sendMessage(closure_130_1.id, closure_130_5, false, {
    location: closure_131_5.SHARE_MODAL,
    doNotNotifyOnError: true,
    attachmentsToUpload: closure_130_4,
    onAttachmentUploadError(file, code, reason) {
      const obj = { uploadError: { file, guildId: guildId.getGuildId(), code, reason } };
      closure_1_6.reject(obj);
      const obj2 = { file, guildId: guildId.getGuildId(), code, reason };
      guildId(8799).setUploads({ channelId, uploads, draftType: uploads.ChannelMessage, resetState: true });
      const obj3 = guildId(8799);
      const obj4 = { channelId, uploads, draftType: uploads.ChannelMessage, resetState: true };
      guildId(7369).saveDraft(channelId, dependencyMap, uploads.ChannelMessage);
    }
  });
  closure_130_6.resolve(undefined);
  return closure_130_6.promise;
};
const DraftType = fn(5384).DraftType;
const MessageSendLocation = fn(4838).MessageSendLocation;
let size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/ShareUtils.tsx");

export const showInformationToast = function showInformationToast(intl3) {
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: "INFORMATION_TOAST-" + intl3, content: intl3, icon: _modDef11032 });
};
export const sendShareMessage = function sendShareMessage() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
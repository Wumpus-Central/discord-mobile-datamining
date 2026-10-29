// discord_app/modules/share/native/ShareUtils.tsx
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import CircleInformationIcon from "../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_6 = async function _sendShareMessage() {
  ({ attachments: closure_130_0, channel: closure_130_1, comment: closure_130_2 } = closure_0);
  await "Reflect";
  const id = closure_130_1.id;
  closure_130_4 = closure_130_0.map((uri) => {
    const size = {
      uri: uri.uri,
      originalUri: uri.uri,
      mimeType: uri.mimeType,
      filename: uri.name,
      platform: closure_0(8200).UploadPlatform.REACT_NATIVE,
      width: uri.width,
      height: uri.height,
      preTranscodeSourceSize: uri.originalSize,
    };
    const cloudUpload = new closure_0(8198).CloudUpload(size, guildId.id);
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
      guildId(9731).setUploads({ channelId, uploads, draftType: uploads.ChannelMessage, resetState: true });
      const obj3 = guildId(9731);
      const obj4 = { channelId, uploads, draftType: uploads.ChannelMessage, resetState: true };
      guildId(8358).saveDraft(channelId, dependencyMap, uploads.ChannelMessage);
    },
  });
  closure_130_6.resolve(undefined);
  return closure_130_6.promise;
};
const DraftType = fn(7689).DraftType;
const MessageSendLocation = fn(5010).MessageSendLocation;
let size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/ShareUtils.tsx");

export function showInformationToast(intl3) {
  const obj2 = { text: intl3, icon: null };
  const combined = "INFORMATION_TOAST-" + intl3;
  obj2.icon = CircleInformationIcon.CircleInformationIcon;
  ToastActionCreatorsDefault.open(combined, obj2);
}
export function sendShareMessage() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}

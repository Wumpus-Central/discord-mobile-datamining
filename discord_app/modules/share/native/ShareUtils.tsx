// discord_app/modules/share/native/ShareUtils.tsx
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import AssetRegistryDefault from "../../../../_runtime/04817_AssetRegistry.js";
import MessageConstants from "../../messages/MessageConstants.tsx";
import DraftStore from "../../../stores/DraftStore.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import size_mod from "../../../../_runtime/metro/00002__.js";

let c4, c5;

let obj = function _sendShareMessage() {
  obj = _asyncToGenerator(async function (arg0) {
    let c0;
    let c1;
    let c2;
    let closure_3;
    let closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let user;
        let id;
        let attachmentsToUpload;
        let closure_5;
        let future;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            let obj5 = { value, done: true };
            return obj5;
          } else {
            const channelId = tmp3;
            c0 = undefined;
            user = undefined;
            c2 = undefined;
            ({ attachments: c0, channel: c1, comment: c2 } = closure_0);
            id = undefined;
            attachmentsToUpload = undefined;
            closure_5 = undefined;
            future = undefined;
            c4 = 1;
            c5 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            id = user.id;
            attachmentsToUpload = c0.map((uri) => {
              size = {
                uri: uri.uri,
                originalUri: uri.uri,
                mimeType: uri.mimeType,
                filename: uri.name,
                platform: closure_0(c2[7]).UploadPlatform.REACT_NATIVE,
                width: uri.width,
                height: uri.height,
                preTranscodeSourceSize: uri.originalSize,
              };
              const cloudUpload = new closure_0(c2[8]).CloudUpload(size, guildId.id);
              return cloudUpload;
            });
            user = c2;
            const parse = closure_131_1(closure_131_2[9]).parse;
            const tmp43 = closure_131_1(closure_131_2[9]);
            const tmp44 = user;
            if (c2 == null) {
              user = "";
            }
            closure_5 = parse(tmp44, user);
            if (attachmentsToUpload.length > 0) {
              let obj3 = closure_131_1(closure_131_2[5]);
              obj3.clearAll(id, closure_131_4.ChannelMessage);
            }
            const self = this;
            const self2 = this;
            future = new closure_131_0(closure_131_2[10]).Future();
            let obj4 = closure_131_1(closure_131_2[11]);
            const obj7 = {
              location: closure_131_5.SHARE_MODAL,
              doNotNotifyOnError: true,
              attachmentsToUpload,
              onAttachmentUploadError(file, code, reason) {
                obj = { uploadError: { file, guildId: guildId.getGuildId(), code, reason } };
                ({ file, guildId: guildId.getGuildId(), code, reason });
                closure_1_6.reject(obj);
                const obj3 = guildId(c2[5]);
                const obj4 = { channelId, uploads, draftType: uploads.ChannelMessage, resetState: true };
                obj3.setUploads(obj4);
                const obj5 = guildId(c2[6]);
                obj5.saveDraft(channelId, closure_1_2, uploads.ChannelMessage);
              },
            };
            c4 = 2;
            c5 = 1;
            const obj8 = { value: obj4.sendMessage(user.id, closure_5, false, obj7), done: false };
            return obj8;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          future.resolve(undefined);
          c5 = 3;
          obj = { value: future.promise, done: true };
          return obj;
        }
      } catch (tmp33) {
        c5 = 3;
        throw tmp33;
      }
    }
  });
  return obj(...arguments);
};
const DraftType = DraftStore.DraftType;
const MessageSendLocation = MessageConstants.MessageSendLocation;
let size = size_mod;
const result = size.fileFinishedImporting("modules/share/native/ShareUtils.tsx");

export const showInformationToast = function showInformationToast(intl3) {
  obj = ToastActionCreatorsDefault;
  const obj2 = { key: "INFORMATION_TOAST-" + intl3, content: intl3, icon: AssetRegistryDefault };
  obj.open(obj2);
};
export const sendShareMessage = function sendShareMessage() {
  return obj(...arguments);
};

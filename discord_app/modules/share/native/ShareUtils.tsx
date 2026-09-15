// discord_app/modules/share/native/ShareUtils.tsx
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import _modDef11391 from "../../../../_runtime/metro/11391__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_6 = async function _sendShareMessage(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          const channelId = tmp4;
          c2 = 0;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          ({ attachments: closure_130_0, channel: closure_130_1, comment: closure_130_2 } = closure_0);
          let id;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          closure_130_6 = undefined;
          c4 = 1;
          c5 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          id = closure_130_1.id;
          closure_130_4 = closure_130_0.map((uri) => {
            const size = {
              uri: uri.uri,
              originalUri: uri.uri,
              mimeType: uri.mimeType,
              filename: uri.name,
              platform: closure_0(5212).UploadPlatform.REACT_NATIVE,
              width: uri.width,
              height: uri.height,
            };
            const cloudUpload = new closure_0(5211).CloudUpload(size, closure_1_1.id);
            return cloudUpload;
          });
          c1 = closure_130_2;
          if (closure_130_2 == null) {
            c1 = "";
          }
          closure_130_5 = closure_131_1(closure_131_2[9]).parse(closure_130_1, c1);
          if (closure_130_4.length > 0) {
            closure_131_1(closure_131_2[5]).clearAll(id, closure_131_4.ChannelMessage);
            const obj3 = closure_131_1(closure_131_2[5]);
          }
          const future = new closure_131_0(closure_131_2[10]).Future();
          closure_130_6 = future;
          const obj4 = closure_131_1(closure_131_2[11]);
          const obj7 = {
            location: closure_131_5.SHARE_MODAL,
            doNotNotifyOnError: true,
            attachmentsToUpload: closure_130_4,
            onAttachmentUploadError() {
              closure_1_6.reject(undefined);
              c1(9439).setUploads({ channelId, uploads, draftType: uploads.ChannelMessage, resetState: true });
              const obj = c1(9439);
              const obj2 = { channelId, uploads, draftType: uploads.ChannelMessage, resetState: true };
              c1(7882).saveDraft(channelId, dependencyMap, uploads.ChannelMessage);
            },
          };
          c4 = 2;
          c5 = 1;
          const obj8 = { value: obj4.sendMessage(closure_130_1.id, closure_130_5, false, obj7), done: false };
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
        closure_130_6.resolve(undefined);
        c5 = 3;
        let obj = { value: closure_130_6.promise, done: true };
        return obj;
      }
    } catch (tmp36) {
      c5 = tmp;
      throw tmp36;
    }
  }
};
const DraftType = fn(4980).DraftType;
const MessageSendLocation = fn(4632).MessageSendLocation;
let size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/ShareUtils.tsx");

export const showInformationToast = function showInformationToast(intl3) {
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: "INFORMATION_TOAST-" + intl3, content: intl3, icon: _modDef11391 });
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

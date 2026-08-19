// discord_app/modules/share/native/ShareUtils.tsx
import dispatcherDefault from "../../toast/native/ToastActionCreators.tsx";
import registerAssetDefault from "../../../../_runtime/10455_registerAsset.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import { DraftType } from "../../../stores/DraftStore.tsx";
import { MessageSendLocation } from "../../messages/MessageConstants.tsx";

const require = fn;
function _sendShareMessage() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      if (constants === 2) {
        constants = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          constants = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let id = tmp4;
              dependencyMap = 0;
              let lib;
              let lib2;
              dependencyMap = undefined;
              ({ attachments: c0, channel: c1, comment: c2 } = lib);
              id = undefined;
              c4 = undefined;
              constants = undefined;
              let future;
              c4 = 1;
              constants = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              id = lib2.id;
              c4 = lib.map((item, index) => {
                const cloudUpload = new _undefined(_undefined2[8]).CloudUpload({ uri: item.uri, originalUri: item.uri, mimeType: item.mimeType, filename: item.name, platform: _undefined(_undefined2[7]).UploadPlatform.REACT_NATIVE, width: item.width, height: item.height }, _var.id);
                return cloudUpload;
              });
              lib2 = dependencyMap;
              if (dependencyMap == null) {
                lib2 = "";
              }
              constants = lib2(7436).parse(lib2, lib2);
              if (c4.length > 0) {
                let obj2 = lib2(8466);
                obj2.clearAll(id, c4.ChannelMessage);
              }
              future = new lib(8451).Future();
              let obj3 = lib2(7427);
              obj2 = { location: null, doNotNotifyOnError: true, attachmentsToUpload: null, onAttachmentUploadError: null };
              obj2[0] = constants.SHARE_MODAL;
              obj2[2] = c4;
              obj2[3] = function onAttachmentUploadError() {
                future.reject(undefined);
                _var(_undefined2[5]);
                const obj = { channelId: id, uploads: c4, draftType: c4.ChannelMessage, resetState: true };
                obj.setUploads(obj);
                _var(_undefined2[6]).saveDraft(id, _undefined2, c4.ChannelMessage);
              };
              c4 = 2;
              constants = 1;
              obj3 = { value: null, done: false };
              obj3[0] = obj3.sendMessage(lib2.id, constants, false, obj2);
              return obj3;
            }
          } else if (arg0 === 1) {
            constants = 3;
            throw arg1;
          } else if (arg0 === 2) {
            constants = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            future.resolve(undefined);
            constants = 3;
            obj = { value: null, done: true };
            obj[0] = future.promise;
            return obj;
          }
        } catch (tmp36) {
          constants = tmp;
          throw tmp36;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("obj132").fileFinishedImporting("modules/share/native/ShareUtils.tsx");

export const showInformationToast = function showInformationToast(intl3) {
  const obj = { key: "INFORMATION_TOAST-" + intl3, content: intl3, icon: registerAssetDefault };
  obj.open(obj);
};
export const sendShareMessage = function sendShareMessage(arg0) {
  const self = this;
  const apply = _sendShareMessage.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
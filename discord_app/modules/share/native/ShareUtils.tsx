// === Module 13555: _sendShareMessage ===

// Module 13555 (_sendShareMessage)
import dispatcherDefault from "dispatcher" /* 4162 */;
import registerAssetDefault from "registerAsset" /* 10811 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { DraftType } from "handleChanged" /* 4807 */;
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING" /* 4438 */;

const require = arg1;
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
          return { value: "HermesInternal", done: null };
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
              c4 = lib.map((uri) => {
                const cloudUpload = new _undefined(_undefined2[8]).CloudUpload({ uri: uri.uri, originalUri: uri.uri, mimeType: uri.mimeType, filename: uri.name, platform: _undefined(_undefined2[7]).UploadPlatform.REACT_NATIVE, width: uri.width, height: uri.height }, _var.id);
                return cloudUpload;
              });
              lib2 = dependencyMap;
              if (dependencyMap == null) {
                lib2 = "";
              }
              constants = lib2(7360).parse(lib2, lib2);
              if (c4.length > 0) {
                let obj2 = lib2(8095);
                obj2.clearAll(id, c4.ChannelMessage);
              }
              future = new lib(8081).Future();
              let obj3 = lib2(7135);
              obj2 = { location: null, doNotNotifyOnError: true, attachmentsToUpload: null, onAttachmentUploadError: null };
              obj2[0] = constants.SHARE_MODAL;
              obj2[2] = c4;
              obj2[3] = function onAttachmentUploadError() {
                future.reject(undefined);
                let obj = _var(_undefined2[5]);
                obj = { channelId: id, uploads: c4, draftType: c4.ChannelMessage, resetState: true };
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
const result = require("set").fileFinishedImporting("modules/share/native/ShareUtils.tsx");

export const showInformationToast = function showInformationToast(intl3) {
  let obj = dispatcherDefault;
  obj = { key: "INFORMATION_TOAST-" + intl3, content: intl3, icon: registerAssetDefault };
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
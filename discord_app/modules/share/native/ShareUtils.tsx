import dispatcher from "dispatcher";
import { DraftType } from "handleChanged";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";

const require = arg1;
function _sendShareMessage() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      const dependencyMap = 0;
      ({ attachments: c0, channel: c1, comment: c2 } = lib);
      yield "ct";
      const id = lib2.id;
      lib2 = dependencyMap;
      if (dependencyMap == null) {
        lib2 = "";
      }
      if (c4.length > 0) {
        let obj2 = lib2(8168);
        obj2.clearAll(id, c4.ChannelMessage);
      }
      const future = new lib(8153).Future();
      const obj3 = lib2(6826);
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
      yield obj3.sendMessage(lib2.id, constants, false, obj2);
      future.resolve(undefined);
      return future.promise;
    })();
    iter.next();
    return iter;
  });
  const _sendShareMessage = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("MESSAGE_GROUP_SPACING").fileFinishedImporting("modules/share/native/ShareUtils.tsx");

export const showInformationToast = function showInformationToast(intl3) {
  let obj = importDefault(3986);
  obj = { key: "INFORMATION_TOAST-" + intl3, content: intl3, icon: importDefault(8422) };
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
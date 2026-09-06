// discord_app/modules/messages/SendMessageOptionsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import MessageConstants from "MessageConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const MessageSendLocation = MessageConstants.MessageSendLocation;
let closure_1 = {};
const Store = initializeDefault.Store;
class SendMessageOptionsStore extends Store {}
SendMessageOptionsStore.prototype["getOptions"] = function getOptions(arg0) {
  return closure_1[arg0];
};
SendMessageOptionsStore.displayName = "SendMessageOptionsStore";
const sendMessageOptionsStore = new SendMessageOptionsStore(DispatcherDefault, {
  MESSAGE_CREATE: function handleMessageCreate(arg0) {
    ({ message, sendMessageOptions } = arg0);
    if (null != sendMessageOptions) {
      const obj = {};
      const merged = Object.assign(sendMessageOptions);
      let OTHER = sendMessageOptions.location;
      if (OTHER == null) {
        OTHER = MessageSendLocation.OTHER;
      }
      obj.location = OTHER;
      closure_1[message.id] = obj;
    }
    let tmp8 = null != message.nonce && message.nonce !== message.id;
    if (tmp8) {
      tmp8 = message.nonce in closure_1;
    }
    if (tmp8) {
      const nonce = message.nonce;
      delete tmp2[tmp];
    }
  },
});
const result = size.fileFinishedImporting("modules/messages/SendMessageOptionsStore.tsx");

export default sendMessageOptionsStore;

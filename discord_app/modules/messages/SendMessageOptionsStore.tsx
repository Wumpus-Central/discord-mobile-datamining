// discord_app/modules/messages/SendMessageOptionsStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import MessageConstants from "MessageConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const MessageSendLocation = MessageConstants.MessageSendLocation;
const Store = get_initializedDefault.Store;
class SendMessageOptionsStore extends Store {
  getOptions(arg0) {
    return closure_1[arg0];
  }
}
const prototype = SendMessageOptionsStore.prototype;
SendMessageOptionsStore.displayName = "SendMessageOptionsStore";
let obj = {
  MESSAGE_CREATE: function handleMessageCreate(arg0) {
    let OTHER;
    let message;
    let sendMessageOptions;
    ({ message, sendMessageOptions } = arg0);
    if (null != sendMessageOptions) {
      const id = message.id;
      const obj = { location: OTHER };
      const merged = Object.assign(sendMessageOptions);
      OTHER = sendMessageOptions.location;
      if (OTHER == null) {
        OTHER = MessageSendLocation.OTHER;
      }
      closure_1[id] = obj;
    }
    const tmp6 = null != message.nonce && message.nonce !== message.id && message.nonce in closure_1;
    if (tmp6) {
      delete closure_1[message.nonce];
    }
  },
};
const sendMessageOptionsStore = new SendMessageOptionsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/messages/SendMessageOptionsStore.tsx");

export default sendMessageOptionsStore;

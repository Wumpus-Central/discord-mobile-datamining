// discord_app/modules/messages/SendMessageOptionsStore.tsx
import set from "../../../_runtime/00002_set.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import MESSAGE_GROUP_SPACING from "MessageConstants.tsx";

const MessageSendLocation = MESSAGE_GROUP_SPACING.MessageSendLocation;
let closure_1 = {};
const Store = initializeDefault.Store;
class SendMessageOptionsStore extends Store {}
SendMessageOptionsStore.prototype["getOptions"] = function getOptions(arg0) {
  return table[arg0];
};
SendMessageOptionsStore.displayName = "SendMessageOptionsStore";
const sendMessageOptionsStore = new SendMessageOptionsStore(dispatcherDefault, {
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
      const tmp3 = closure_1;
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
const result = set.fileFinishedImporting("modules/messages/SendMessageOptionsStore.tsx");

export default sendMessageOptionsStore;

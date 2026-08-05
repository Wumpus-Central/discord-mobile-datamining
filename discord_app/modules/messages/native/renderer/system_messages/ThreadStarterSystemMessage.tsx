// discord_app/modules/messages/native/renderer/system_messages/ThreadStarterSystemMessage.tsx
import processMessage from "processMessage";
import { ReferencedMessageState } from "processMessage";
import { MessageTypes } from "ME";

const require = arg1;
const result = require("module_38").fileFinishedImporting("modules/messages/native/renderer/system_messages/ThreadStarterSystemMessage.tsx");

export const createThreadStarterSystemMessage = function createThreadStarterSystemMessage(message) {
  message = message.message;
  const type = message.type;
  require("../../../../../../_runtime/metro/00038__.js")(type === MessageTypes.THREAD_STARTER_MESSAGE, "cannot call createThreadStarterSystemMessage on a message of type " + type);
  let tmp5 = null;
  if (messageByReference.getMessageByReference(message.messageReference).state !== ReferencedMessageState.LOADED) {
    const obj = { content: null };
    const intl = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[0] = intl.string(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t.OCs36J);
    const merged = Object.assign(require("createCommonMessage.tsx")(message));
    tmp5 = obj;
  }
  return tmp5;
};
// discord_app/modules/messages/native/renderer/system_messages/ThreadStarterSystemMessage.tsx
import _modDef38 from "../../../../../../_runtime/metro/00038__.js";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import processMessage from "../../../../replies/ReferencedMessageStore.tsx";
import { ReferencedMessageState } from "../../../../replies/ReferencedMessageStore.tsx";
import { MessageTypes } from "../../../../../Constants.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/messages/native/renderer/system_messages/ThreadStarterSystemMessage.tsx");

export const createThreadStarterSystemMessage = function createThreadStarterSystemMessage(message) {
  message = message.message;
  const type = message.type;
  _modDef38(type === MessageTypes.THREAD_STARTER_MESSAGE, "cannot call createThreadStarterSystemMessage on a message of type " + type);
  let tmp5 = null;
  if (messageByReference.getMessageByReference(message.messageReference).state !== ReferencedMessageState.LOADED) {
    const obj = { content: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t.OCs36J);
    const merged = Object.assign(createCommonMessageDefault(message));
    tmp5 = obj;
  }
  return tmp5;
};
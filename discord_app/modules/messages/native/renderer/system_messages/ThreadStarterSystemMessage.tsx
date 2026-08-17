// discord_app/modules/messages/native/renderer/system_messages/ThreadStarterSystemMessage.tsx
import _modDef38 from "module_38" /* 38 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import createCommonMessageDefault from "createCommonMessage" /* 8188 */;
import closure_3 from "processMessage" /* 5013 */;
import { ReferencedMessageState } from "processMessage" /* 5013 */;
import { MessageTypes } from "ME" /* 676 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/ThreadStarterSystemMessage.tsx");

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
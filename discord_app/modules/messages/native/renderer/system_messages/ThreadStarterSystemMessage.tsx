// === Module 8012: ThreadStarterSystemMessage ===

// Module 8012 (ThreadStarterSystemMessage)
import _modDef38 from "module_38" /* 38 */;
import util from "util" /* 1114 */;
import createCommonMessageDefault from "createCommonMessage" /* 7964 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 7595 */;

require = fn;
const ReferencedMessageState = fn(7595).ReferencedMessageState;
const MessageTypes = fn(1074).MessageTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ThreadStarterSystemMessage.tsx");

export const createThreadStarterSystemMessage = function createThreadStarterSystemMessage(message) {
  message = message.message;
  const type = message.type;
  _modDef38(type === MessageTypes.THREAD_STARTER_MESSAGE, "cannot call createThreadStarterSystemMessage on a message of type " + type);
  let tmp5 = null;
  if (ReferencedMessageStore.getMessageByReference(message.messageReference).state !== ReferencedMessageState.LOADED) {
    const obj = { content: null };
    const intl = util.intl;
    obj.content = intl.string(util.t.OCs36J);
    const merged = Object.assign(createCommonMessageDefault(message));
    tmp5 = obj;
  }
  return tmp5;
};
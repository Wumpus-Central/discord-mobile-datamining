// === Module 14219: ThreadStarterSystemMessage ===

// Module 14219 (ThreadStarterSystemMessage)
import _modDef38 from "module_38" /* 38 */;
import util from "util" /* 1112 */;
import createCommonMessageDefault from "createCommonMessage" /* 14198 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 8160 */;

require = fn;
const ReferencedMessageState = fn(8160).ReferencedMessageState;
const MessageTypes = fn(1071).MessageTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ThreadStarterSystemMessage.tsx");

export function createThreadStarterSystemMessage(message) {
  message = message.message;
  const type = message.type;
  let merged = dependencyMap;
  _modDef38(type === MessageTypes.THREAD_STARTER_MESSAGE, "cannot call createThreadStarterSystemMessage on a message of type " + type);
  const messageByReference = ReferencedMessageStore.getMessageByReference(message.messageReference);
  if (messageByReference.state === ReferencedMessageState.LOADED) {
    return null;
  } else {
    const intl = util.intl;
    if (messageByReference.state === tmp6.DELETED) {
      let OCs36J = util.t.mE3KJN;
    } else {
      OCs36J = util.t.OCs36J;
    }
    const obj = { content: intl.string(OCs36J) };
    merged = Object.assign(createCommonMessageDefault(message));
  }
}
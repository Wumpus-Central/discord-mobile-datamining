// === Module 8571: ThreadStarterSystemMessage ===

// Module 8571 (ThreadStarterSystemMessage)
import _modDef38 from "module_38" /* 38 */;
import util from "util" /* 1113 */;
import createCommonMessageDefault from "createCommonMessage" /* 8514 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 7865 */;

require = fn;
const ReferencedMessageState = fn(7865).ReferencedMessageState;
const MessageTypes = fn(1072).MessageTypes;
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
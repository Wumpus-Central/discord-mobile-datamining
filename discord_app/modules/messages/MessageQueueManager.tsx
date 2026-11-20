// === Module 19449: MessageQueueManager ===

// Module 19449 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 8406 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7364 */;

class MessageQueueManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { LOGOUT: applyArgumentsResult.handleLogout };
    return applyArgumentsResult;
  }
}
MessageQueueManager.prototype["handleLogout"] = function handleLogout() {
  MessageQueueDefault.clear();
};
const messageQueueManager = new MessageQueueManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/MessageQueueManager.tsx");

export default messageQueueManager;
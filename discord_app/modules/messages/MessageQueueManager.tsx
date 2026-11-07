// === Module 19920: MessageQueueManager ===

// Module 19920 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 8455 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7350 */;

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
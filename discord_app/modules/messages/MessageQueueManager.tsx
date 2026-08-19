// === Module 16636: handleLogout ===

// Module 16636 (handleLogout)
import initializeDefault from "initialize" /* 5038 */;
import itemsDefault from "items" /* 5040 */;

initializeDefault;
class MessageQueueManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { LOGOUT: applyArgumentsResult.handleLogout };
    return applyArgumentsResult;
  }
}
MessageQueueManager.prototype["handleLogout"] = function handleLogout() {
  itemsDefault.clear();
};
const messageQueueManager = new MessageQueueManager();
const result = require("obj132").fileFinishedImporting("modules/messages/MessageQueueManager.tsx");

export default messageQueueManager;
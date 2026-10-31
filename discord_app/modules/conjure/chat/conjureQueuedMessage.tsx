// === Module 12577: conjureQueuedMessage ===

// Module 12577 (conjureQueuedMessage)
import conjureChatConnection from "conjureChatConnection" /* 10872 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/conjureQueuedMessage.tsx");

export function queuedMessageActionHandler(projectId, message, stateFromStores) {
  closure_0 = projectId;
  if ("user" === message.role) {
    if ("queued" === message.disposition) {
      if (null != message.user_id) {
        if (message.user_id === stateFromStores) {
          return (arg0) => conjureChatConnection.sendQueuedMessageAction(closure_0, message.id, arg0);
        }
      }
    }
  }
}
export function queuedUserMessages(stateFromStores) {
  return stateFromStores.filter((role) => {
    let tmp = "user" === role.role;
    if (tmp) {
      tmp = "queued" === role.disposition;
    }
    return tmp;
  });
}
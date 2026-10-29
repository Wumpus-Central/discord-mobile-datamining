// discord_app/modules/conjure/chat/conjureQueuedMessage.tsx
import conjureChatConnection from "conjureChatConnection.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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

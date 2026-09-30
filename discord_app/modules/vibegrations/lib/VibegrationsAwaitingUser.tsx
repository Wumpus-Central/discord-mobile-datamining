// === Module 16593: VibegrationsAwaitingUser ===

// Module 16593 (VibegrationsAwaitingUser)
import VibegrationsChatStore from "VibegrationsChatStore" /* 12843 */;
import size from "module_2" /* 2 */;

const turnSettled = VibegrationsChatStore.turnSettled;
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsAwaitingUser.tsx");

export const activeAwaitingUser = function activeAwaitingUser(message, isNewest) {
  let awaitingUser = null;
  if (isNewest) {
    let role;
    if (message != null) {
      role = message.role;
    }
    awaitingUser = null;
    if ("assistant" === role) {
      awaitingUser = null;
      if (null != message.awaitingUser) {
        awaitingUser = null;
        if (null != message.secretRequest) {
          awaitingUser = null;
          if (turnSettled(message)) {
            awaitingUser = message.awaitingUser;
          }
        }
      }
    }
  }
  return awaitingUser;
};
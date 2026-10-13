// === Module 11842: ConjureAwaitingUser ===

// Module 11842 (ConjureAwaitingUser)
import conjureChatTurns from "conjureChatTurns" /* 11217 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/ConjureAwaitingUser.tsx");

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
          if (obj.turnSettled(message)) {
            awaitingUser = message.awaitingUser;
          }
          obj = conjureChatTurns;
        }
      }
    }
  }
  return awaitingUser;
};
// discord_app/modules/conjure/chat/ConjureAwaitingUser.tsx
import ConjureChatStore from "ConjureChatStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const turnSettled = ConjureChatStore.turnSettled;
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
          if (turnSettled(message)) {
            awaitingUser = message.awaitingUser;
          }
        }
      }
    }
  }
  return awaitingUser;
};

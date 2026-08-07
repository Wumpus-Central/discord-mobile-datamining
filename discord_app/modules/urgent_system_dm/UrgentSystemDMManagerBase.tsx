// discord_app/modules/urgent_system_dm/UrgentSystemDMManagerBase.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import { SYSTEM_USER } from "SYSTEM_USER";
import { UserFlags } from "ME";
import "initialize";

function maybeShowUrgentMessageModal(arg0) {
  const currentUser = authStore2.getCurrentUser();
  if (null != currentUser) {
    channelId = channelId.getChannelId();
    const dMFromUserId = authStore.getDMFromUserId(SYSTEM_USER);
    if (currentUser.hasUrgentMessages()) {
      if (dMFromUserId !== channelId) {
        if (!c7) {
          c7 = true;
          arg0();
        }
      }
    }
    const currentUser1 = authStore2.getCurrentUser();
    let hasUrgentMessagesResult = null != currentUser1;
    const dMFromUserId1 = authStore.getDMFromUserId(SYSTEM_USER);
    if (hasUrgentMessagesResult) {
      hasUrgentMessagesResult = currentUser1.hasUrgentMessages();
    }
    if (hasUrgentMessagesResult) {
      hasUrgentMessagesResult = channelId === dMFromUserId1;
    }
    if (hasUrgentMessagesResult) {
      c7 = false;
      importAll(8249).setFlag(UserFlags.HAS_UNREAD_URGENT_MESSAGES, false);
      const obj5 = importAll(8249);
    }
  }
}
function maybeClearUrgentMessage(channelId) {
  const currentUser = authStore2.getCurrentUser();
  let hasUrgentMessagesResult = null != currentUser;
  const dMFromUserId = authStore.getDMFromUserId(SYSTEM_USER);
  if (hasUrgentMessagesResult) {
    hasUrgentMessagesResult = currentUser.hasUrgentMessages();
  }
  if (hasUrgentMessagesResult) {
    hasUrgentMessagesResult = channelId.channelId === dMFromUserId;
  }
  if (hasUrgentMessagesResult) {
    let c7 = false;
    importAll(8249).setFlag(UserFlags.HAS_UNREAD_URGENT_MESSAGES, false);
    const obj2 = importAll(8249);
  }
}
let c7 = false;
const prototype = function UrgentSystemDMManagerBase(handleShowUrgentMessageAlert) {
  const tmp2 = new prototype(tmp, new.target);
  // ThrowIfThisInitialized (0x7c)
  const importAll = tmp2;
  tmp2.actions = {
    POST_CONNECTION_OPEN() {
      outer1_8(tmp2.handleShowUrgentMessageAlert);
    },
    MESSAGE_CREATE() {
      outer1_8(tmp2.handleShowUrgentMessageAlert);
    },
    CHANNEL_SELECT: maybeClearUrgentMessage
  };
  tmp2.handleShowUrgentMessageAlert = handleShowUrgentMessageAlert;
  return tmp2;
}.prototype;
class prototype extends tmp2 {
}
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/urgent_system_dm/UrgentSystemDMManagerBase.tsx");

export default prototype;
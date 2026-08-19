// discord_app/modules/urgent_system_dm/UrgentSystemDMManagerBase.tsx
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import _fetchProfileAll from "../../actions/UserActionCreators.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import handleConnectionOpen from "../../stores/SelectedChannelStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import { SYSTEM_USER } from "Constants.tsx";
import { UserFlags } from "../../Constants.tsx";

function maybeShowUrgentMessageModal(fn) {
  const currentUser = authStore2.getCurrentUser();
  if (null != currentUser) {
    channelId = channelId.getChannelId();
    const dMFromUserId = authStore.getDMFromUserId(SYSTEM_USER);
    if (currentUser.hasUrgentMessages()) {
      if (dMFromUserId !== channelId) {
        if (!c7) {
          c7 = true;
          fn();
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
      _fetchProfileAll.setFlag(UserFlags.HAS_UNREAD_URGENT_MESSAGES, false);
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
    c7 = false;
    _fetchProfileAll.setFlag(UserFlags.HAS_UNREAD_URGENT_MESSAGES, false);
  }
}
let c7 = false;
initializeDefault;
const prototype = function UrgentSystemDMManagerBase(handleShowUrgentMessageAlert) {
  const tmp2 = new prototype(tmp, new.target);
  // ThrowIfThisInitialized (0x7c)
  closure_0 = tmp2;
  tmp2.actions = {
    POST_CONNECTION_OPEN() {
      maybeShowUrgentMessageModal(closure_0.handleShowUrgentMessageAlert);
    },
    MESSAGE_CREATE() {
      maybeShowUrgentMessageModal(closure_0.handleShowUrgentMessageAlert);
    },
    CHANNEL_SELECT: maybeClearUrgentMessage
  };
  tmp2.handleShowUrgentMessageAlert = handleShowUrgentMessageAlert;
  return tmp2;
}.prototype;
class prototype extends tmp2 {
}
const result = require("obj132").fileFinishedImporting("modules/urgent_system_dm/UrgentSystemDMManagerBase.tsx");

export default prototype;
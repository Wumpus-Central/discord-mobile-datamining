// discord_app/modules/urgent_system_dm/UrgentSystemDMManagerBase.tsx
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import _fetchProfileAll from "../../actions/UserActionCreators.tsx";
import closure_2 from "../../stores/ChannelStore.tsx";
import closure_3 from "../../stores/SelectedChannelStore.tsx";
import closure_4 from "../../stores/UserStore.tsx";
import { SYSTEM_USER } from "Constants.tsx";
import { UserFlags } from "../../Constants.tsx";

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
      _fetchProfileAll.setFlag(UserFlags.HAS_UNREAD_URGENT_MESSAGES, false);
      const obj5 = _fetchProfileAll;
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
    const obj2 = _fetchProfileAll;
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
      closure_1_8(closure_0.handleShowUrgentMessageAlert);
    },
    MESSAGE_CREATE() {
      closure_1_8(closure_0.handleShowUrgentMessageAlert);
    },
    CHANNEL_SELECT: maybeClearUrgentMessage
  };
  tmp2.handleShowUrgentMessageAlert = handleShowUrgentMessageAlert;
  return tmp2;
}.prototype;
class prototype extends tmp2 {
}
const result = require("set").fileFinishedImporting("modules/urgent_system_dm/UrgentSystemDMManagerBase.tsx");

export default prototype;
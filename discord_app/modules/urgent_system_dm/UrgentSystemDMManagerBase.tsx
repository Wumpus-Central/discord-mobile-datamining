// === Module 17682: UrgentSystemDMManagerBase ===

// Module 17682 (UrgentSystemDMManagerBase)
import Constants from "Constants" /* 1085 */;
import UserActionCreatorsAll from "UserActionCreators" /* 7863 */;
import Constants2 from "Constants" /* 17683 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import UserStore from "UserStore" /* 1377 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;
import size from "module_2" /* 2 */;

function maybeShowUrgentMessageModal(handleShowUrgentMessageAlert) {
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    const channelId = SelectedChannelStore.getChannelId();
    const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
    if (currentUser.hasUrgentMessages()) {
      if (dMFromUserId !== channelId) {
        const tmp5 = c7;
        if (!tmp5) {
          c7 = true;
          handleShowUrgentMessageAlert();
        }
      }
    }
    const currentUser1 = UserStore.getCurrentUser();
    let hasUrgentMessagesResult = null != currentUser1;
    const dMFromUserId1 = ChannelStore.getDMFromUserId(SYSTEM_USER);
    if (hasUrgentMessagesResult) {
      hasUrgentMessagesResult = currentUser1.hasUrgentMessages();
    }
    if (hasUrgentMessagesResult) {
      hasUrgentMessagesResult = channelId === dMFromUserId1;
    }
    if (hasUrgentMessagesResult) {
      c7 = false;
      const obj5 = UserActionCreatorsAll;
      obj5.setFlag(UserFlags.HAS_UNREAD_URGENT_MESSAGES, false);
    }
  }
}
function maybeClearUrgentMessage(channelId) {
  channelId = channelId.channelId;
  const currentUser = UserStore.getCurrentUser();
  let hasUrgentMessagesResult = null != currentUser;
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (hasUrgentMessagesResult) {
    hasUrgentMessagesResult = currentUser.hasUrgentMessages();
  }
  if (hasUrgentMessagesResult) {
    hasUrgentMessagesResult = channelId === dMFromUserId;
  }
  if (hasUrgentMessagesResult) {
    c7 = false;
    const obj2 = UserActionCreatorsAll;
    obj2.setFlag(UserFlags.HAS_UNREAD_URGENT_MESSAGES, false);
  }
}
const SYSTEM_USER = Constants2.SYSTEM_USER;
const UserFlags = Constants.UserFlags;
let c7 = false;
class UrgentSystemDMManagerBase extends AutomaticLifecycleManager {
  constructor(handleShowUrgentMessageAlert) {
    const tmp2 = new UrgentSystemDMManagerBase(tmp, new.target);
    let closure_0 = tmp2;
    const obj = {
      POST_CONNECTION_OPEN() {
        maybeShowUrgentMessageModal(closure_0.handleShowUrgentMessageAlert);
      },
      MESSAGE_CREATE() {
        maybeShowUrgentMessageModal(closure_0.handleShowUrgentMessageAlert);
      },
      CHANNEL_SELECT: maybeClearUrgentMessage
    };
    tmp2.actions = obj;
    tmp2.handleShowUrgentMessageAlert = handleShowUrgentMessageAlert;
    return tmp2;
  }
}
const result = size.fileFinishedImporting("modules/urgent_system_dm/UrgentSystemDMManagerBase.tsx");

export default UrgentSystemDMManagerBase;
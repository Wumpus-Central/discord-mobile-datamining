// discord_app/modules/urgent_system_dm/UrgentSystemDMManagerBase.tsx
import UserActionCreatorsAll from "../../actions/UserActionCreators.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

function maybeShowUrgentMessageModal(handleShowUrgentMessageAlert) {
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    const channelId = SelectedChannelStore.getChannelId();
    const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
    if (currentUser.hasUrgentMessages()) {
      if (dMFromUserId !== channelId) {
        if (!c7) {
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
      UserActionCreatorsAll.setFlag(UserFlags.HAS_UNREAD_URGENT_MESSAGES, false);
    }
  }
}
function maybeClearUrgentMessage(channelId) {
  const currentUser = UserStore.getCurrentUser();
  let hasUrgentMessagesResult = null != currentUser;
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (hasUrgentMessagesResult) {
    hasUrgentMessagesResult = currentUser.hasUrgentMessages();
  }
  if (hasUrgentMessagesResult) {
    hasUrgentMessagesResult = channelId.channelId === dMFromUserId;
  }
  if (hasUrgentMessagesResult) {
    c7 = false;
    UserActionCreatorsAll.setFlag(UserFlags.HAS_UNREAD_URGENT_MESSAGES, false);
  }
}
const SYSTEM_USER = fn(17497).SYSTEM_USER;
const UserFlags = fn(1074).UserFlags;
let c7 = false;
const prototype = function UrgentSystemDMManagerBase(handleShowUrgentMessageAlert) {
  const tmp2 = new prototype(tmp, new.target);
  closure_0 = tmp2;
  tmp2.actions = {
    POST_CONNECTION_OPEN() {
      maybeShowUrgentMessageModal(closure_0.handleShowUrgentMessageAlert);
    },
    MESSAGE_CREATE() {
      maybeShowUrgentMessageModal(closure_0.handleShowUrgentMessageAlert);
    },
    CHANNEL_SELECT: maybeClearUrgentMessage,
  };
  tmp2.handleShowUrgentMessageAlert = handleShowUrgentMessageAlert;
  return tmp2;
}.prototype;
class prototype extends tmp2 {}
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/UrgentSystemDMManagerBase.tsx");

export default prototype;

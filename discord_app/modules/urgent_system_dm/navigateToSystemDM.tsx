// === Module 17971: navigateToSystemDM ===

// Module 17971 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5885 */;
import ChannelStore from "ChannelStore" /* 2063 */;

const SYSTEM_USER = fn(17970).SYSTEM_USER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = SelectedChannelActionCreatorsDefault.selectPrivateChannel(dMFromUserId);
  }
};
// === Module 17493: navigateToSystemDM ===

// Module 17493 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5920 */;
import ChannelStore from "ChannelStore" /* 2045 */;

const SYSTEM_USER = fn(17492).SYSTEM_USER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = SelectedChannelActionCreatorsDefault.selectPrivateChannel(dMFromUserId);
  }
};
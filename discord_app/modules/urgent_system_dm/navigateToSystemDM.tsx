// === Module 19820: navigateToSystemDM ===

// Module 19820 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6766 */;
import ChannelStore from "ChannelStore" /* 4861 */;

const SYSTEM_USER = fn(19819).SYSTEM_USER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = SelectedChannelActionCreatorsDefault.selectPrivateChannel(dMFromUserId);
  }
};
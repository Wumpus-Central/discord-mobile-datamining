// === Module 18959: navigateToSystemDM ===

// Module 18959 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6634 */;
import ChannelStore from "ChannelStore" /* 4823 */;

const SYSTEM_USER = fn(18958).SYSTEM_USER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = SelectedChannelActionCreatorsDefault.selectPrivateChannel(dMFromUserId);
  }
};
// discord_app/modules/urgent_system_dm/navigateToSystemDM.tsx
import SelectedChannelActionCreatorsDefault from "../../actions/SelectedChannelActionCreators.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";

const SYSTEM_USER = fn(17497).SYSTEM_USER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = SelectedChannelActionCreatorsDefault.selectPrivateChannel(dMFromUserId);
  }
}

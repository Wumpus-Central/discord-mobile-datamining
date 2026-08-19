// discord_app/modules/urgent_system_dm/navigateToSystemDM.tsx
import _modDef4975 from "../../actions/SelectedChannelActionCreators.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import { SYSTEM_USER } from "Constants.tsx";

const result = require("obj132").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = _modDef4975.selectPrivateChannel(dMFromUserId);
  }
};
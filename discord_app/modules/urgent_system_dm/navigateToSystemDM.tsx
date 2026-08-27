// discord_app/modules/urgent_system_dm/navigateToSystemDM.tsx
import _modDef5307 from "../../actions/SelectedChannelActionCreators.tsx";
import closure_2 from "../../stores/ChannelStore.tsx";
import { SYSTEM_USER } from "Constants.tsx";

const result = require("set").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = _modDef5307.selectPrivateChannel(dMFromUserId);
    const obj = _modDef5307;
  }
};
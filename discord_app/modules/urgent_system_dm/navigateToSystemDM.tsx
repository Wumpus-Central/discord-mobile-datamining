import { SelectedChannelActionCreators } from "../../actions/SelectedChannelActionCreators.tsx";
// discord_app/modules/urgent_system_dm/navigateToSystemDM.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import { SYSTEM_USER } from "SYSTEM_USER";

const result = require("module_5096").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = SelectedChannelActionCreators.selectPrivateChannel(dMFromUserId);
    const obj = SelectedChannelActionCreators;
  }
};
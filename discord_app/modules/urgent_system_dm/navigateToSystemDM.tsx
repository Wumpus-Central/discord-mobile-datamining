// discord_app/modules/urgent_system_dm/navigateToSystemDM.tsx
import _modDef4975 from "module_4975" /* 4975 */;
import closure_2 from "ensureGuildLoaded" /* 1391 */;
import { SYSTEM_USER } from "SYSTEM_USER" /* 16715 */;

const result = require("set").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = _modDef4975.selectPrivateChannel(dMFromUserId);
    const obj = _modDef4975;
  }
};
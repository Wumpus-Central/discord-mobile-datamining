// === Module 16716: navigateToSystemDM ===

// Module 16716 (navigateToSystemDM)
import _modDef4975 from "module_4975" /* 4975 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import { SYSTEM_USER } from "SYSTEM_USER" /* 16715 */;

const result = require("obj132").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = _modDef4975.selectPrivateChannel(dMFromUserId);
  }
};
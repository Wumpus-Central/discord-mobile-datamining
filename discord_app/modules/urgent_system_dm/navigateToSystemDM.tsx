// === Module 16812: navigateToSystemDM ===

// Module 16812 (navigateToSystemDM)
import _modDef4980 from "module_4980" /* 4980 */;
import closure_2 from "ensureGuildLoaded" /* 1391 */;
import { SYSTEM_USER } from "SYSTEM_USER" /* 16811 */;

const result = require("set").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = _modDef4980.selectPrivateChannel(dMFromUserId);
    const obj = _modDef4980;
  }
};
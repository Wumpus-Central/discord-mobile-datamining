// === Module 17013: navigateToSystemDM ===

// Module 17013 (navigateToSystemDM)
import _modDef5320 from "module_5320" /* 5320 */;
import closure_2 from "ensureGuildLoaded" /* 1391 */;
import { SYSTEM_USER } from "SYSTEM_USER" /* 17012 */;

const result = require("set").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = _modDef5320.selectPrivateChannel(dMFromUserId);
    const obj = _modDef5320;
  }
};
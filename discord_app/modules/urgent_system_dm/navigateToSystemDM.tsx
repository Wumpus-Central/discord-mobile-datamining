// === Module 17046: navigateToSystemDM ===

// Module 17046 (navigateToSystemDM)
import _modDef5323 from "module_5323" /* 5323 */;
import closure_2 from "ensureGuildLoaded" /* 1387 */;
import { SYSTEM_USER } from "SYSTEM_USER" /* 17045 */;

const result = require("set").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = _modDef5323.selectPrivateChannel(dMFromUserId);
    const obj = _modDef5323;
  }
};
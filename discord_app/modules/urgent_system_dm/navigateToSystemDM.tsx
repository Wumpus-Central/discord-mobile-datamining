// === Module 17318: navigateToSystemDM ===

// Module 17318 (navigateToSystemDM)
import _modDef5363 from "module_5363" /* 5363 */;
import closure_2 from "ensureGuildLoaded" /* 1386 */;
import { SYSTEM_USER } from "SYSTEM_USER" /* 17317 */;

const result = require("set").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = _modDef5363.selectPrivateChannel(dMFromUserId);
    const obj = _modDef5363;
  }
};
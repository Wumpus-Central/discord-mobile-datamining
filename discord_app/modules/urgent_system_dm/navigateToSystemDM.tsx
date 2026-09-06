// === Module 17498: navigateToSystemDM ===

// Module 17498 (navigateToSystemDM)
import _modDef5411 from "module_5411" /* 5411 */;
import closure_2 from "ensureGuildLoaded" /* 1957 */;
import { SYSTEM_USER } from "SYSTEM_USER" /* 17497 */;

const result = require("set").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = _modDef5411.selectPrivateChannel(dMFromUserId);
    const obj = _modDef5411;
  }
};
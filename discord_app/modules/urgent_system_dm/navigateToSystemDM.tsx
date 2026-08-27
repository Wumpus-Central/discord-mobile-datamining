// === Module 16995: navigateToSystemDM ===

// Module 16995 (navigateToSystemDM)
import _modDef5307 from "module_5307" /* 5307 */;
import closure_2 from "ensureGuildLoaded" /* 1391 */;
import { SYSTEM_USER } from "SYSTEM_USER" /* 16994 */;

const result = require("set").fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = _modDef5307.selectPrivateChannel(dMFromUserId);
    const obj = _modDef5307;
  }
};
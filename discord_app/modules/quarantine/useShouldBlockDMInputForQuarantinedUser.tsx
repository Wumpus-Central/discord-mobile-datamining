// === Module 11913: useShouldBlockDMInputForQuarantinedUser ===

// Module 11913 (useShouldBlockDMInputForQuarantinedUser)
import closure_2 from "reinjectEphemerals" /* 4688 */;
import { UserFlags } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx");

export default function useShouldBlockDMInputForQuarantinedUser(hasFlag, channel) {
  const _require = channel;
  const showConvoStarterInDM = _require(11750).useShowConvoStarterInDM(channel);
  _require(589);
  [][0] = channel;
  let tmp4 = null != hasFlag;
  if (tmp4) {
    tmp4 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
    const tmp6 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
  }
  return tmp4;
};
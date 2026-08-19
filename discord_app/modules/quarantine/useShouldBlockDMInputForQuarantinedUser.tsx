// === Module 11602: useShouldBlockDMInputForQuarantinedUser ===

// Module 11602 (useShouldBlockDMInputForQuarantinedUser)
import reinjectEphemerals from "reinjectEphemerals" /* 4994 */;
import { UserFlags } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx");

export default function useShouldBlockDMInputForQuarantinedUser(hasFlag, channel) {
  const _require = channel;
  const showConvoStarterInDM = _require(11431).useShowConvoStarterInDM(channel);
  _require(589);
  [][0] = channel;
  let tmp4 = null != hasFlag;
  if (tmp4) {
    tmp4 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
    const tmp6 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
  }
  return tmp4;
};
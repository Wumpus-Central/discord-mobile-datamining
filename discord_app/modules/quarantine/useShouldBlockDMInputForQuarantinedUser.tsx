// discord_app/modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx
import reinjectEphemerals from "reinjectEphemerals";
import { UserFlags } from "ME";

const require = arg1;
const result = require("MAX_MESSAGES_ALLOWED_FOR_GREETING").fileFinishedImporting("modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx");

export default function useShouldBlockDMInputForQuarantinedUser(hasFlag, channel) {
  const _require = channel;
  const showConvoStarterInDM = _require("../messages/useShowConvoStarterInDM.tsx").useShowConvoStarterInDM(channel);
  _require("../../../discord_common/js/packages/flux/index.tsx");
  [][0] = channel;
  let tmp4 = null != hasFlag;
  if (tmp4) {
    tmp4 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
    const tmp6 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
  }
  return tmp4;
};